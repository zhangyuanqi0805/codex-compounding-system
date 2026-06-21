# Onboarding Guide

Use this guide when AI 复利系统 is installed for a new user, new computer, or new Codex/Code Desk setup.

## Principle

The user may be new to Codex, GitHub, Skills, local paths, and approval JSON. Make setup feel like guided onboarding, not a technical interview.

Ask one question at a time. After each answer, confirm what you recorded and explain the next question.

Use a visible progress label:

```text
第 1/5 步：数字资产库在哪里
```

At the end, show a short configuration summary and ask the user to confirm before running the first sample.

## 首次配置流程

### 1. 数字资产库在哪里

Question:

```text
你的数字资产库在哪里？如果你还没有，我可以先只生成“入库建议”，不往任何正式资产库里放东西。
```

Explain:

```text
数字资产库是长期保存成果的地方；复盘过程产物会留在 Codex/Code Desk 工作台，不会默认混进去。
```

Recommended default: if the user has no asset library, set `asset library root: none yet` and keep all asset actions as recommendation-only.

### 2. 过程产物默认放哪里

Do not ask this as a beginner-facing question.

Default behavior:

- Treat review files as Codex/Code Desk process artifacts.
- Save them under the current Codex/Code Desk workbench unless the user gives a different path.
- Recommended folder: `AI复利系统/过程产物/`.
- Tell the user this default instead of asking them to understand "workspace" or "review output directory".

User-facing wording:

```text
复盘过程材料我先放在当前 Codex/Code Desk 工作台下的 `AI复利系统/过程产物/`。真正值得长期保存的内容，后面再按你的数字资产库位置单独建议入库。
```

### 3. 工作日按哪个时区算

Question:

```text
你的工作日按哪个时区计算？如果不确定，推荐用你本地时区。
```

Explain that "yesterday" must map to an exact date window.

### 4. 可以看哪些材料

Question:

```text
我可以看哪些材料来复盘？推荐先看 Codex/Code Desk 工作记录和本地过程产物；云端文档先只记录链接，等你授权后再读取。
```

Offer options:

- Codex/Code Desk work records only
- work records + local process artifacts
- work records + local process artifacts + authorized cloud docs

Do not ask for tokens or passwords.

### 5. 要不要以后自动跑

Question:

```text
要不要以后每天自动跑？推荐先不要自动化，先跑一天小样，确认审批台好用后再开启。
```

Default: no automation during first setup.

### 默认审批方式

Do not ask beginners to choose the approval format. Use the same approval method by default:

```text
我默认给你生成本地 HTML 审批台。你可以直接点选动作、写备注、导出 JSON 发回给我；这比聊天里一条条确认更省心。
```

Only offer Markdown or chat-only approval if the user explicitly rejects local HTML.

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
- Evidence sources:
- Approval format: local HTML approval workbench
- Automation:
- User naming preference:
- Writing preferences:
```

## 第一天小样

After configuration, ask the user to choose one date:

```text
配置完成。我们先跑一天小样，你想复盘哪一天？推荐先用昨天。
```

Before starting the sample, summarize:

```text
我将使用这些设置：
- 数字资产库：
- 过程产物目录：
- 时区：
- 证据来源：
- 审批方式：本地 HTML 审批台

如果这些没问题，我就先跑一天小样；这次不会自动写规则、不会自动入库、不会发布。
```

For the first sample:

- Do not batch process multiple days.
- Do not enable automation.
- Do not write rules or copy assets until approval results come back.
- Keep evidence lightweight.
