# Approval UI Style Guide

Use this when creating a local HTML approval workbench.

## Goal

The approval page should help a non-technical user decide quickly. It is not a log viewer.

## Recommended Layout

- Light desktop background.
- App-like window shell.
- Left sidebar for date, filters, and JSON actions.
- Main area for approval cards.
- Right inspector for rules, status, and execution boundaries.
- Folded details for source paths, evidence, privacy, and long notes.

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
10. JSON export instructions.

## Required Behavior

- Notes must autosave locally if possible.
- Exported JSON must include card id, selected primary action, additional actions, digital asset action, note, changed flag, and source reference.
- Card IDs should remain stable when the page is regenerated for the same date.
- If a missing item is added while the user is mid-approval, preserve existing card IDs and provide an import/merge option for old JSON.
- Evidence can be folded, but not lost.

## Avoid

- Putting raw logs in the main reading area.
- Using vague actions such as "keep" or "internal only" without a concrete next step.
- Mixing writing approval with asset-library approval.
- Redesigning the approval page every run.
- Removing action choices just to make the page shorter.
