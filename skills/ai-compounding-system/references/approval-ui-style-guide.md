# Approval UI Style Guide

Use this when creating a local HTML approval workbench.

## Goal

The approval page should help a non-technical user decide quickly. It is not a log viewer.

## Template Rule

必须优先复制模板，再填入数据；不允许从零生成另一套审批台。

- Global desk template: `templates/00_全局审批台.template.html`
- Single-day desk template: `templates/01_单日审批台.template.html`
- Shared CSS: `assets/approval-workbench-mac.css`
- Shared behavior: `assets/approval-workbench.js`
- Action schema: `schemas/approval-actions.json`

The style guide is not just visual advice. The templates and schema are the canonical implementation for public/new-user output.

For this project, the canonical source is local first. Update the local Skill and local approval workbench first; then show the changed page to the user for human approval, get full approval, and trial-run it on a real review day. Only after that may the public/open-source package template be synchronized from the approved local version. The public package follows the approved local Skill; it must not become the source that overwrites, simplifies, or weakens the local mature approval UI.

Preserve the local visual baseline first, especially the `app-shell`, `windowbar`, `sidebar`, `card`, `date-card`, and `inspector` structure used by the established Mac approval workbench.

For the global approval desk, match the approved compact total-desk layout: after the window bar, the main column starts directly with date cards. Do not add a center hero block, top search pill, extra explanatory inspector cards, or `内部稿` links to the total-desk date rows unless the user explicitly asks to redesign that page.

## Recommended Layout

- Light desktop background that works in macOS Chrome, Windows Chrome, Edge, and the Codex in-app browser.
- App-like window shell.
- Left sidebar for date, filters, and approval-result actions.
- Main area for approval cards.
- Right inspector for rules, status, and execution boundaries.
- Folded details for source paths, evidence, privacy, and long notes.

## Cross-Platform Visual Baseline

Use a stable system font stack:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif;
```

CSS requirements:

- Put the complete CSS in the HTML file or bundle it locally; do not depend on remote fonts or CDNs.
- Use fixed shell regions or responsive CSS grid so the sidebar, main cards, and inspector do not collapse into a raw vertical page.
- Avoid Mac-only decorative assumptions; the page must still look intentional on Windows Chrome.
- Use buttons with clear text labels. Icons are optional; text must remain visible.
- Keep evidence/source/private fields folded by default.
- Use stable card IDs and stable storage keys so regenerated pages do not erase partial approvals.

## Card Reading Order

Each card should show:

1. Title.
2. Default action badge.
3. Pass-rate or confidence estimate for the default recommendation.
4. Decision body:
   - `这是什么`
   - `当天结果`
   - `为什么进卡`
   - `推荐下一步`
5. Existing-asset conclusion: `已有`, `没有发现`, or `不确定，需二次查重`.
6. Primary action controls.
7. Additional action controls.
8. Digital asset action controls.
9. User note field.
10. Approval result copy instructions.

Every single-day page should start with a short high-value overview:

```text
太棒了，今天你和 Codex/Code Desk 完成了 X 条工作线，我整理成 X 张审批卡。主要包括：规则沉淀、Skill 候选、文稿候选、数字资产建议。你只需要逐张判断下一步要不要推进。
```

## Required Behavior

- Notes must autosave locally if possible.
- Every run must have a global approval desk named `00_全局审批台.html`.
- Every reviewed date must have a single-day approval page named `01_单日审批台_YYYY-MM-DD.html`.
- The final report should recommend opening `00_全局审批台.html` first; the single-day page is the detailed secondary entry.
- The primary return action must be a prominent `复制审批结果` button.
- The user-facing instruction must say: `点“复制审批结果”，然后回到 Codex 粘贴发给我。`
- The copied payload may be JSON internally, but every visible label should call it `审批结果`, not `JSON`.
- Secondary fallback actions should use user-facing labels such as `下载审批结果备份` or `查看技术内容`; do not label visible buttons with the technical payload format.
- Copied approval results must include card id, selected primary action, additional actions, digital asset action, note, changed flag, and source reference.
- Card IDs should remain stable when the page is regenerated for the same date.
- If a missing item is added while the user is mid-approval, preserve existing card IDs and provide an import/merge option for the old approval result payload.
- Evidence can be folded, but not lost.
- 每张卡必须提供完整主动作列表 from `schemas/approval-actions.json`; default selection can vary, but options must not be reduced.
- Additional actions and digital asset actions must also follow `schemas/approval-actions.json`.

## Output Self-Check

Before reporting completion, perform 输出后自检:

- `00_全局审批台.html` exists.
- `01_单日审批台_YYYY-MM-DD.html` exists.
- Both pages use the shared CSS and JS, or inline an equivalent copy from those assets.
- Existing local workbenches still use the approved mature shell (`app-shell/windowbar/sidebar/card/date-card`), not a newly invented simplified shell.
- Public/open-source templates were synchronized only after the local Skill and local approval page passed human approval and a real trial run.
- The single-day page includes `太棒了` in the overview.
- Every approval card has every primary action from `schemas/approval-actions.json`.
- Every approval card has additional action controls, digital asset action controls, and a note field.
- The visible return button says `复制审批结果`.
- The fallback textarea and copy-failure instruction are visible.

## Copy Fallback Behavior

Implement these fallbacks in this order:

1. Generate the approval result into a visible textarea before copying.
2. Try `navigator.clipboard.writeText(payload)`.
3. If that fails, select the textarea and try `document.execCommand("copy")`.
4. If both fail, show a plain instruction: `复制失败，请手动全选下面的审批结果，再粘贴回 Codex。`
5. After success, show a short visible confirmation such as `已复制，可以回到 Codex 粘贴。`

Do not leave the user on a blank textarea with no instruction.

## Avoid

- Putting raw logs in the main reading area.
- Using vague actions such as "keep" or "internal only" without a concrete next step.
- Mixing writing approval with asset-library approval.
- Redesigning the approval page every run.
- Removing action choices just to make the page shorter.
- Treating `schemas/approval-actions.json` as optional.
- Replacing an established local approval UI with a simpler public starter template.
- Showing technical-format labels as the obvious way to return approvals.
- Reporting English artifact filenames as the main completion entry for Chinese users.
- Generating only a single-day page without a global approval desk.
- Relying on browser APIs without a visible fallback.
- Shipping a page that only looks correct in the author's Mac browser.
