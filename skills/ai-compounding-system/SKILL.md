---
name: ai-compounding-system
description: Use when the user asks to review a specific day of AI/Codex work, create an approval workbench, turn agent activity into reusable assets, or set up a daily AI compounding workflow.
---

# AI Compounding System

AI 复利系统把一天的 AI 协作记录变成可审批、可复用、可校准的资产线索。它不是普通日记；它优先识别规则、Skill、文稿、流程、数字资产和需要丢弃的噪音。

## First-Time Setup Gate

If the user has just installed this Skill, tell them to restart Codex or open a new Codex session before the first real run. Restarting is the default because it is the most reliable way for Codex to discover a newly installed Skill.

If this workspace has no configuration, or the user says this is the first run, read `references/first-run-value-intro.md` and `references/onboarding-guide.md`, show the value introduction first, then run the setup wizard before doing a full review.

Default configuration path:

```text
<CODE_DESK_WORKBENCH>/.ai-compounding-system/config.md
```

During setup:

- Ask one question at a time.
- Explain why each question matters in one sentence.
- Offer a recommended answer.
- Show simple progress such as `第 2/5 步` so the user knows where they are.
- After each answer, confirm what was recorded before asking the next question.
- Do not ask for secrets, tokens, passwords, or private API keys.
- Do not ask a beginner what "workspace" or "review output directory" means. Default to reviewing Codex/Code Desk work records and saving process artifacts in the current Codex/Code Desk workbench.
- Do not ask beginners to choose reasoning effort as a setup question. For first setup and one-day samples, explain `高档优先` when available; if the user's quota is tight, current/default is acceptable for the sample. Recommend xhigh/超高档 for batch backfill, nightly automation, large migrations, or high-rework system design.
- Do not ask beginners which evidence sources to use. Default to Codex/Code Desk work records and local process artifacts; cloud docs, chats, and sensitive sources require explicit authorization.
- Ask for the user's digital asset library location, because that is the stable destination for approved assets.
- If the user has no asset library, offer to create or recommend a simple `数字资产库` folder under their documents directory. Until the user confirms a real location, keep asset actions as recommendation-only.
- Use the local HTML approval workbench by default. Do not make beginners choose between HTML, Markdown, and chat-only approval unless they ask.
- In the approval workbench, make `复制审批结果` the primary return action. The structured payload may be JSON internally, but user-facing labels and instructions should say `审批结果`, not `JSON`.
- Use Chinese, human-readable output filenames and final-report labels. Do not expose English strings such as `approval-workbench.html`, `review-summary.md`, or `evidence-index.json` as the primary user-facing artifacts.
- Do not turn on automation until the user has seen one sample review.
- If the requested first sample day has little or no Codex/Code Desk work, suggest choosing a recent high-workload day instead of forcing a low-value sample.
- Add a first-run `第 0.4 步` after installation and before setup: thank the user for recognizing the project, ask whether they are willing to let Codex star the open-source project, and offer `愿意`, `暂时不`, `忽略`. Only act if the user chooses `愿意`.
- Ask whether the user wants to create a `全局复利与踩坑日志.md`. Explain that successful practices can become compounding lessons, and mistakes can become reusable warnings.

## Required References

- Read `references/first-run-value-intro.md` before first-time setup so the user understands the value before answering configuration questions.
- Read `references/onboarding-guide.md` for first-time setup or when configuration is missing.
- Read `references/approval-calibration-learning.md` before assigning approval defaults and after receiving approval results.
- Read `references/writing-feedback-learning.md` before writing any article, first draft, public draft, Feishu/Docs expansion draft, or internal knowledge draft.
- Read `references/approval-ui-style-guide.md` before creating or updating any approval HTML.

## Required Assets For Approval HTML

When creating approval pages, do not design a fresh page from scratch.

- Use `templates/00_全局审批台.template.html` for the global approval desk.
- Use `templates/01_单日审批台.template.html` for the single-day approval desk.
- Use `assets/approval-workbench-mac.css` and `assets/approval-workbench.js`.
- Use `schemas/approval-actions.json` as the source of truth for primary actions, additional actions, and digital asset actions.

The templates are part of the Skill behavior, not optional examples. If local output paths differ, copy the same layout and action controls.

For template evolution, the local Skill and local approval workbench are the source of truth. Update and trial-run the local version first, show it to the user for complete approval, then sync the approved local version into the public/open-source package. Never use a public starter template to overwrite, simplify, or weaken an established local approval UI.

## Core Workflow

1. **Resolve one date.** Convert "today", "yesterday", or a written date into an explicit local date window using the configured timezone.
2. **Collect evidence lightly.** Prefer local Codex/Code Desk logs, thread titles, generated files, changed files, local notes, and approved cloud links. Do not access private cloud content without authorization.
3. **Extract the useful line.** For each thread or artifact, capture intent, result, blocker, reusable lesson, and possible asset value in one concise line.
4. **Audit achieved goals.** Completed or materially advanced goals are first-class review items, even when they are not rules, drafts, or Skill candidates.
5. **Check existing assets.** Before defaulting to a new rule, new Skill, or new draft, search existing rules, Skills, notes, and the configured asset library. State the conclusion first: `已有`, `没有发现`, or `不确定，需二次查重`.
6. **Create approval cards.** Each card must help the user decide quickly: what this is, what happened, why it matters, and what the recommended next step is.
7. **Keep actions separate.** Writing a draft, writing a rule, creating a Skill, and copying into an asset library require separate approval dimensions.
8. **Return approval results.** Notes typed in a local page are not available until the user clicks `复制审批结果` or otherwise sends the structured result text back.
9. **Absorb approval differences.** Record default vs. user changes in the calibration file before using the next day's defaults.
10. **Execute only approved actions.** Do not write rules, create Skills, publish drafts, move files, or copy assets without explicit approval.
11. **Report Chinese artifact links.** End with the global approval desk first, the single-day approval desk second, then what was generated, what was skipped, what remains pending, and the user's next step.
12. **Validate before reporting.** Before telling the user the work is done, verify the approval pages use the templates, include every action from `schemas/approval-actions.json`, include `太棒了` in the single-day overview, and expose a prominent `复制审批结果` button with fallback instructions.

## Required Chinese Outputs

Every one-day sample or daily review must create a global approval entry and a single-day approval page, even if only one date has been reviewed.

Required user-facing artifacts:

- `00_全局审批台.html` — main entry. Recommend the user open this first.
- `01_单日审批台_YYYY-MM-DD.html` — single-day approval page for the reviewed date.
- `02_内部复盘稿_YYYY-MM-DD.md` — internal review summary.
- `03_轻量证据索引_YYYY-MM-DD.json` — lightweight evidence index.

Optional artifacts, when useful:

- `04_运行账本_YYYY-MM-DD.md`
- `05_数字资产入库建议_YYYY-MM-DD.md`

Final response rules:

- Show Chinese display names and clickable links first.
- First recommendation must be: open `00_全局审批台.html`.
- Mention `01_单日审批台_YYYY-MM-DD.html` as the detailed daily page.
- Do not list English filenames as the main deliverables for Chinese users.
- If an internal script or tool generated English filenames, create Chinese-named outputs or aliases before reporting completion.

## Stability And Sync Gate

Before saying the local Skill is stable, before syncing the public/open-source package, or after changing templates, CSS, JS, action schema, approval-result handling, or global desk rendering:

1. Verify the local Skill and public package Skill have the same executable files, templates, assets, schemas, and core instructions after synchronization. The only allowed content differences are local-private learning files such as `references/approval-calibration-learning.md` and `references/writing-feedback-learning.md`; the public package versions of those files must remain sanitized templates.
2. Run the public package verification script when available.
3. Verify the three global desk entry files are identical: `00_单日复盘总审批台.html`, `00_全局审批台.html`, and `00_每日复盘自动审批入口.html`.
4. Verify any date with `审批结果*.json` still displays `已审批`, `审批结果`, and `账本` in the global desk, and is not downgraded to `待审批`, `无主审卡`, or `仅回看`.
5. Verify the total-desk desktop layout keeps date-row action links on one row unless the viewport is too narrow.
6. Verify the single-day approval template still renders every primary action, additional action, and digital-asset action from `schemas/approval-actions.json`.
7. If visual layout changed, open the page, take a screenshot, or use DOM/layout checks. Do not call it stable based only on code inspection.

## Approval Actions

Primary action, single select:

- `写全局规则`
- `写项目规则`
- `写复利日志`
- `直接做 Skill`
- `主题摘要通过-写初稿`
- `初稿通过-写拓展稿`
- `再改主题摘要`
- `待定-看备注`
- `丢弃`

Every approval card must render the complete primary action list above. The default selected action may differ per card, but the available choices must not be reduced just because the agent thinks a card only has one likely path.

Additional actions, multi-select:

- Non-conflicting follow-up work only, such as `补截图候选`, `二次查重`, `转项目线索`, `标记教学案例`.
- If primary action is `待定-看备注` or `丢弃`, do not execute additional actions unless the user's note clearly overrides that.

Digital asset action, separate select:

- `不处理资产库`
- `建议入库_复制正本`
- `暂留工作区`
- `待用户确认`
- `禁止入库`
- `不入库`
- `初稿候选入库`
- `另建素材包`

## Decision-First Card Body

The main card is for human judgment, not evidence storage. Use this order:

- **这是什么：** one normal-language sentence identifying the item.
- **当天结果：** what was achieved, changed, blocked, or only discussed.
- **为什么进卡：** why it matters enough to review, or why it may be noise.
- **推荐下一步：** one sentence combining the default recommendation, what Codex/AI will do after approval, and what the user needs to decide.

Put source path, rollout ID, privacy, long evidence, and target paths in folded details, an inspector panel, or the evidence index.

The first single-day overview should give emotional value before the cards:

```text
太棒了，今天你和 Codex/Code Desk 完成了 X 条工作线，我整理成 X 张审批卡。主要包括：规则沉淀、Skill 候选、文稿候选、数字资产建议。你只需要逐张判断下一步要不要推进。
```

## Digital Asset Boundary

Treat the AI workbench as the drafting area and the user's asset library as the stable cabinet.

- Content approval is not asset-library approval.
- `主题摘要通过-写初稿` only means generate a first draft for review.
- `初稿通过-写拓展稿` only means expand or polish the draft.
- Copy to the asset library only when the asset action is explicitly approved.
- Asset-library filenames should include a source or approval date, such as `Title_YYYY-MM-DD.md`.
- Never copy credentials, auth QR codes, tokens, raw private logs, cache folders, dependency folders, or sensitive identity/financial materials into the asset library.

## Writing Boundary

After generating any first draft, explicitly ask whether it should:

- stay as an internal draft,
- continue into a polished draft,
- become a cloud-document expansion draft,
- become a public draft,
- or be considered for the asset library.

Drafts that may be reused later should include a bottom section named `Evidence and Material Index` or the user's preferred local-language equivalent.

## Common Mistakes

- Reviewing "today" without resolving the exact date window.
- Dumping raw logs instead of decision cards.
- Treating a useful item as automatically worth preserving.
- Missing achieved goals because they are not rules or drafts.
- Suggesting a new Skill or rule before checking whether one already exists.
- Mixing draft approval with asset-library approval.
- Executing a selected/default action when the user's note disagrees with it.
- Creating a cloud document or public draft before the user approved the content.
- Losing halfway approvals by changing card IDs, storage keys, or page paths during a补漏 update.
- Asking beginners to choose technical setup options that should be defaulted, such as evidence source, output folder, approval format, or reasoning effort.
- Using technical-format labels for approval return controls instead of a clear `复制审批结果` button with fallback instructions.
- Using Mac-only CSS assumptions that make the approval page look broken in Windows Chrome.
- Treating the action list as a suggestion instead of a fixed schema. This causes other Codex instances to render only one or two buttons and makes the same Skill feel inconsistent across computers.
- Regenerating the global approval desk and downgrading dates that already have `审批结果*.json` to `待审批`, `无主审卡`, or `仅回看`.
- Claiming the Skill, templates, or public package are stable without running the stability and sync gate.
