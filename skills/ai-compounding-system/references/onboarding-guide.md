# Onboarding Guide

Use this guide when AI 复利系统 is installed for a new user, new computer, or new Codex/Code Desk setup.

## Principle

The user may be new to Codex, GitHub, Skills, local paths, approval pages, and JSON. Make setup feel like guided onboarding, not a technical interview.

Before asking configuration questions, show the value introduction from `first-run-value-intro.md`.

Ask one question at a time. After each answer, confirm what you recorded and explain the next question. Use a visible progress label:

```text
第 1/4 步：数字资产库在哪里
```

At the end, show a short configuration summary and ask the user to confirm before running the first sample.

## Installation Restart Rule

If the user has just installed the Skill, ask them to restart Codex or open a new Codex session before continuing.

User-facing wording:

```text
安装已经完成。为了让 Codex 稳定识别新 Skill，请先重启 Codex，或者至少新开一个 Codex 会话。重启后直接对我说：“启动 AI 复利系统首次配置”。
```

## Do Not Ask Beginners

Do not ask beginner-facing questions about:

- reasoning effort,
- workspace root,
- process output directory,
- evidence source,
- approval format,
- JSON format.

Default these choices instead and explain them in plain language.

## Default Behaviors

Use these defaults unless the user explicitly asks to change them:

- **Review scope:** Codex/Code Desk work records and local process artifacts.
- **Cloud content:** record links only until the user explicitly authorizes reading.
- **Process artifacts:** save under the current Codex/Code Desk workbench, recommended folder `AI复利系统/过程产物/`.
- **Approval surface:** local HTML approval workbench.
- **Approval return:** user clicks `复制审批结果`, then pastes the result back into Codex.
- **Reasoning effort:** use current/default for setup and one-day sample; recommend high/xhigh only for batch backfill, nightly automation, large migration, or high-rework system design.
- **Automation:** off until one sample review has been accepted.

## 首次配置流程

### 1. 数字资产库在哪里

Question:

```text
你的数字资产库在哪里？如果还没有，可以直接回复“暂时没有”。
```

Explain:

```text
数字资产库是长期保存成果的地方；复盘过程产物会留在 Codex/Code Desk 工作台，不会默认混进去。
```

Recommended default:

- If the user has an asset library, record its path.
- If the user says `暂时没有`, record `asset library root: none yet`.
- Suggest a simple future location, such as `~/Documents/数字资产库` on macOS/Linux or `文档/数字资产库` on Windows.
- Keep all asset actions as recommendation-only until the user confirms a real asset library.

### 2. 工作日按哪个时区算

Question:

```text
你的工作日按哪个时区计算？如果不确定，推荐用你本地时区。
```

Explain:

```text
这样“昨天”会对应到一个明确的 00:00-23:59 日期窗口。
```

### 3. 要不要以后自动跑

Question:

```text
要不要以后每天自动跑？推荐先不要自动化，先跑一天小样，确认审批台好用后再开启。
```

Default: no automation during first setup.

### 4. 先复盘哪一天

Question:

```text
我们先跑一天小样。你想复盘哪一天？推荐先用昨天；如果昨天没怎么使用 Codex/Code Desk，我也可以帮你找最近工作量比较高的一天。
```

If the chosen day has little or no evidence, do not force a low-value review. Tell the user:

```text
这一天可复盘材料很少。为了让你看清这个系统的效果，建议换最近 Codex/Code Desk 工作量更高的一天先跑小样。
```

## 配置文件

After setup, create:

```text
<CODE_DESK_WORKBENCH>/.ai-compounding-system/config.md
```

Minimum content:

```markdown
# AI 复利系统配置

- Digital asset library root:
- Workbench artifact directory:
- Timezone:
- Evidence sources: Codex/Code Desk work records + local process artifacts by default; cloud content only after authorization
- Approval format: local HTML approval workbench
- Approval return method: click `复制审批结果`, then paste back to Codex
- Reasoning effort: current/default for setup and one-day sample; high/xhigh only for batch or high-rework work
- Automation:
- User naming preference:
- Writing preferences:
```

## 第一天小样

Before starting the sample, summarize:

```text
我将使用这些设置：
- 数字资产库：
- 过程产物目录：当前 Codex/Code Desk 工作台下的 AI复利系统/过程产物/
- 时区：
- 证据来源：Codex/Code Desk 工作记录和本地过程产物；云端内容只记录链接，授权后才读取
- 审批方式：本地 HTML 审批台，点击“复制审批结果”后粘贴回 Codex

如果这些没问题，我就先跑一天小样；这次不会自动写规则、不会自动做 Skill、不会自动入库、不会发布。
```

For the first sample:

- Do not batch process multiple days.
- Do not enable automation.
- Do not write rules or copy assets until approval results come back.
- Keep evidence lightweight.
- If the sample day is too light, recommend a recent higher-workload day.
