#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const checks = [];

function file(relativePath) {
  return path.join(root, relativePath);
}

function read(relativePath) {
  return fs.readFileSync(file(relativePath), "utf8");
}

function expectFile(relativePath) {
  checks.push({
    label: `exists: ${relativePath}`,
    ok: fs.existsSync(file(relativePath)),
  });
}

function expectIncludes(relativePath, text) {
  const content = fs.existsSync(file(relativePath)) ? read(relativePath) : "";
  checks.push({
    label: `${relativePath} includes ${text}`,
    ok: content.includes(text),
  });
}

function expectAllIncludes(relativePath, texts) {
  const content = fs.existsSync(file(relativePath)) ? read(relativePath) : "";
  for (const text of texts) {
    checks.push({
      label: `${relativePath} includes ${text}`,
      ok: content.includes(text),
    });
  }
}

function expectNotIncludes(relativePath, text) {
  const content = fs.existsSync(file(relativePath)) ? read(relativePath) : "";
  checks.push({
    label: `${relativePath} does not include ${text}`,
    ok: !content.includes(text),
  });
}

expectFile("skills/ai-compounding-system/templates/00_全局审批台.template.html");
expectFile("skills/ai-compounding-system/templates/01_单日审批台.template.html");
expectFile("skills/ai-compounding-system/assets/approval-workbench-mac.css");
expectFile("skills/ai-compounding-system/assets/approval-workbench.js");
expectFile("skills/ai-compounding-system/schemas/approval-actions.json");

expectAllIncludes("skills/ai-compounding-system/SKILL.md", [
  "templates/00_全局审批台.template.html",
  "templates/01_单日审批台.template.html",
  "schemas/approval-actions.json",
  "local approval workbench are the source of truth",
  "public/open-source package",
  "Stability And Sync Gate",
  "Claiming the Skill, templates, or public package are stable without running the stability and sync gate",
  "太棒了",
  "全局复利与踩坑日志",
  "高档优先",
  "超高档",
]);

expectAllIncludes("skills/ai-compounding-system/references/onboarding-guide.md", [
  "第 0.4 步",
  "愿意",
  "暂时不",
  "忽略",
  "我可以建议在你的文档目录下新建一个 `数字资产库` 文件夹",
  "全局复利与踩坑日志",
]);

expectAllIncludes("skills/ai-compounding-system/references/approval-calibration-learning.md", [
  "This is a template",
  "Keep it local",
  "Do not publish real approval data without permission",
  "Common Difference Types",
  "Do not turn one correction into a permanent rule too quickly",
]);

expectAllIncludes("skills/ai-compounding-system/references/writing-feedback-learning.md", [
  "Keep it local",
  "Default Writing Checks",
  "Ask whether the user wants to continue from first draft to polished draft or public draft",
  "Do not paste sensitive transcripts into this file",
]);

expectAllIncludes("skills/ai-compounding-system/references/approval-ui-style-guide.md", [
  "必须优先复制模板",
  "不允许从零生成另一套审批台",
  "canonical source is local first",
  "human approval",
  "trial-run",
  "approved compact total-desk layout",
  "approval state must be derived from durable result files",
  "Do not downgrade a date to `待审批`, `无主审卡`, or `仅回看`",
  "每张卡必须提供完整主动作列表",
  "输出后自检",
]);

expectAllIncludes("skills/ai-compounding-system/templates/01_单日审批台.template.html", [
  "太棒了",
  "复制审批结果",
  "app-shell",
  "windowbar",
  "sidebar",
  "card",
  "写全局规则",
  "写项目规则",
  "写复利日志",
  "直接做 Skill",
  "主题摘要通过-写初稿",
  "初稿通过-写拓展稿",
  "再改主题摘要",
  "待定-看备注",
  "丢弃",
]);

expectAllIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", [
  "app-shell",
  "windowbar",
  "sidebar",
  "inspector",
  "total-date-card",
  "flex-wrap: nowrap",
  "grid-template-columns: minmax(260px, 1fr) max-content max-content",
  "总审批台",
  "审批规则",
  "主动作单选",
  "备注需复制审批结果",
]);

expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "class=\"wrap\"");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "class=\"search\"");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "<section class=\"hero\"");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "{{INTERNAL_REVIEW_HREF}}");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", ">内部稿<");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "本地成熟口径");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "恢复来源");
expectNotIncludes("skills/ai-compounding-system/templates/00_全局审批台.template.html", "acs-shell");
expectNotIncludes("skills/ai-compounding-system/templates/01_单日审批台.template.html", "acs-shell");
expectNotIncludes("skills/ai-compounding-system/assets/approval-workbench-mac.css", ".acs-shell");

const failed = checks.filter((check) => !check.ok);
if (failed.length) {
  console.error(`FAILED ${failed.length}/${checks.length} checks`);
  for (const item of failed) {
    console.error(`- ${item.label}`);
  }
  process.exit(1);
}

console.log(`PASS ${checks.length} checks`);
