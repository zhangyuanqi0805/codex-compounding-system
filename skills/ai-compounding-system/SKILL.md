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
- Show simple progress such as `第 2/4 步` so the user knows where they are.
- After each answer, confirm what was recorded before asking the next question.
- Do not ask for secrets, tokens, passwords, or private API keys.
- Do not ask a beginner what "workspace" or "review output directory" means. Default to reviewing Codex/Code Desk work records and saving process artifacts in the current Codex/Code Desk workbench.
- Do not ask beginners to choose reasoning effort. Use the current/default Codex setting for first setup and one-day samples; only recommend high/xhigh for batch backfill, nightly automation, large migrations, or high-rework system design.
- Do not ask beginners which evidence sources to use. Default to Codex/Code Desk work records and local process artifacts; cloud docs, chats, and sensitive sources require explicit authorization.
- Ask for the user's digital asset library location, because that is the stable destination for approved assets.
- If the user has no asset library, accept `暂时没有` and keep asset actions as recommendation-only.
- Use the local HTML approval workbench by default. Do not make beginners choose between HTML, Markdown, and chat-only approval unless they ask.
- In the approval workbench, make `复制审批结果` the primary return action. JSON may remain the technical payload, but do not require beginners to understand JSON.
- Do not turn on automation until the user has seen one sample review.
- If the requested first sample day has little or no Codex/Code Desk work, suggest choosing a recent high-workload day instead of forcing a low-value sample.

## Required References

- Read `references/first-run-value-intro.md` before first-time setup so the user understands the value before answering configuration questions.
- Read `references/onboarding-guide.md` for first-time setup or when configuration is missing.
- Read `references/approval-calibration-learning.md` before assigning approval defaults and after receiving approval results.
- Read `references/writing-feedback-learning.md` before writing any article, first draft, public draft, Feishu/Docs expansion draft, or internal knowledge draft.
- Read `references/approval-ui-style-guide.md` before creating or updating any approval HTML.

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
11. **Report a ledger.** End with what was generated, what was executed, what was skipped, what remains pending, and the user's next step.

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
- Making JSON export the main user-facing action instead of a clear `复制审批结果` button with fallback instructions.
- Using Mac-only CSS assumptions that make the approval page look broken in Windows Chrome.
