# Approval Calibration Learning

This is a template for the AI 复利系统 calibration file. Keep it local to the user's workspace. Do not publish real approval data without permission.

## When to Read

- Before assigning default actions in an approval workbench.
- After receiving copied approval results or structured approval feedback.
- Before the next daily review, so repeated mistakes become less likely.

## What to Record

For every review date, record only the information needed to improve future defaults:

| Review date | Card | Original default | User final action | User note | Difference reason | Next strategy |
| --- | --- | --- | --- | --- | --- | --- |

If the user accepted every default, record a short line saying which defaults were validated.

## Common Difference Types

| Type | Symptom | Next strategy |
| --- | --- | --- |
| Over-preserving | The system recommends writing rules, drafts, or Skills too often | Lower the default action; keep evidence without pushing work |
| Missing real outcomes | A completed or advanced goal was not shown | Add an achieved-goal audit before making cards |
| Existing asset missed | A rule or Skill already exists | Search existing assets before defaulting to create |
| Draft/asset boundary confused | Writing a draft was treated as asset-library approval | Keep writing, publishing, and asset copying separate |
| Evidence overload | User must read paths/logs before understanding the card | Move evidence to folded details or the backstage evidence payload |
| Style mismatch | Draft does not match user's preferred writing style | Add or update a writing-feedback note |

## Upgrade Rule

Do not turn one correction into a permanent rule too quickly. Treat a pattern as stable when:

- the same correction appears at least twice, or
- the user says "以后都这样", "默认这样", or equivalent.
