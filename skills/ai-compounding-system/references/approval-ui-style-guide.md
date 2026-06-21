# Approval UI Style Guide

Use this when creating a local HTML approval workbench.

## Goal

The approval page should help a non-technical user decide quickly. It is not a log viewer.

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

## Required Behavior

- Notes must autosave locally if possible.
- The primary return action must be a prominent `复制审批结果` button.
- The user-facing instruction must say: `点“复制审批结果”，然后回到 Codex 粘贴发给我。`
- The copied payload may be JSON, but the page should call it `审批结果`, not make a beginner understand JSON.
- Advanced `下载 JSON` or `导出 JSON` controls may exist as secondary fallback actions, but must not be the main call to action.
- Copied approval results must include card id, selected primary action, additional actions, digital asset action, note, changed flag, and source reference.
- Card IDs should remain stable when the page is regenerated for the same date.
- If a missing item is added while the user is mid-approval, preserve existing card IDs and provide an import/merge option for old JSON.
- Evidence can be folded, but not lost.

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
- Making `导出 JSON` the only obvious way to return approvals.
- Relying on browser APIs without a visible fallback.
- Shipping a page that only looks correct in the author's Mac browser.
