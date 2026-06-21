# AI 复利系统

让 Codex 不只是帮你干活，而是每天把 AI 协作记录变成可审批、可复用、会持续校准的工作资产。

## 先用 30 秒看懂它为什么值得装

AI 复利系统不是又一个总结工具。它会每天回看你和 Codex/Code Desk 干过的活，把零散聊天、临时文件和过程产物整理成一张可审批的工作台：哪些该沉淀成规则，哪些该做成 Skill，哪些值得写成稿，哪些应该进入数字资产库，哪些应该丢弃。

它的目标是让你每次使用 AI 都不是一次性消耗，而是让当天的工作变成明天更好用的能力。

## 推理档位怎么选

首次安装和跑一天小样，用 Codex 默认档位即可。只有在你要批量复盘很多天、夜间自动运行、迁移大量历史记录、或让它重构整套工作流时，才建议切到高档或超高档。

## 一句话安装

把下面这句话复制给你的 Codex：

```text
请使用 skill-installer 从 https://github.com/zhangyuanqi0805/ai-compounding-system/tree/main/skills/ai-compounding-system 安装 AI 复利系统 Skill。安装完成后提醒我重启 Codex；重启后先用 3 分钟介绍告诉我它能解决什么问题、最终会得到什么，然后启动首次配置向导，逐个问题问我完成个性化设置，并先跑一个指定日期的小样。
```

这就是给新手用户的主入口。用户不需要先理解 Skill 目录、配置文件或命令行；Codex 会负责安装、提醒重启、启动向导、逐步问问题。

安装后请重启 Codex，或至少新开一个 Codex 会话。这样新 Skill 才能被稳定识别。

如果你的 Codex 已经支持 `$skill-installer`，也可以这样说：

```text
Use $skill-installer to install the skill from https://github.com/zhangyuanqi0805/ai-compounding-system/tree/main/skills/ai-compounding-system. After installation, tell me to restart Codex. After restart, use $ai-compounding-system to show a short value introduction, then run the first-time setup wizard step by step.
```

如果当前 Codex 没有 `skill-installer`，可以让 Codex 手动安装：

```text
请下载 https://github.com/zhangyuanqi0805/ai-compounding-system，把其中的 skills/ai-compounding-system 文件夹复制到我的 Codex Skills 目录；复制完成后提醒我重启 Codex。重启后先用 3 分钟介绍告诉我它能解决什么问题，再启动首次配置向导。
```

## 它解决什么问题

很多人每天用 AI 做了很多事，但结果散落在聊天、文件、截图和临时草稿里。第二天再用 AI，又像从零开始解释一遍。

AI 复利系统的目标是把这些协作记录转成四类东西：

- 可审批判断卡：今天哪些值得继续处理，哪些应该丢弃。
- 可复用资产：规则、流程、Skill、文稿、模板、案例。
- 数字资产建议：哪些成果应该进入你的稳定资产库。
- 反馈校准：你改过的审批结果会反过来影响下一次默认判断。

## 第一次使用会怎么引导你

安装后，不要求你懂目录、命令或配置文件。你只需要让 Codex 启动首次配置向导，它会一个问题一个问题问你：

1. 你的数字资产库在哪里？如果还没有，可以回复“暂时没有”，系统会建议你以后在 `~/Documents/数字资产库` 或 Windows 的“文档/数字资产库”新建一个。
2. 你的工作日按哪个时区计算？默认用你的本地时区。
3. 要不要以后每天自动跑？首次默认不开自动化，先跑一天小样。
4. 你想先复盘哪一天？推荐先用昨天；如果昨天没怎么工作，可以让 Codex 帮你找最近工作量高的一天。

每一步都会告诉你：为什么要问、推荐选项是什么、不确定时怎么选。

向导结束后，它会给你一份配置摘要，让你确认：

- 你的数字资产库在哪里。
- 过程产物会默认放在 Codex/Code Desk 工作台，不会混进数字资产库。
- 证据来源默认只看 Codex/Code Desk 工作记录和本地过程产物；云端文档、聊天记录、敏感资料只有你授权才看。
- 哪些内容只生成建议，不会自动执行。
- 第一天小样要怎么跑。

审批方式默认就是本地 HTML 审批台：可以点选动作、写备注，然后点最显眼的 `复制审批结果`，回到 Codex 粘贴发给它。新手不需要理解 JSON，也不需要在 Markdown 清单、聊天总结和网页审批台之间做选择。

## 推荐首次运行方式

不要一开始就让它复盘很多天。先跑一天小样：

```text
Use $ai-compounding-system. 请复盘 2026-06-20，先只生成审批台和内部复盘稿，不自动写规则、不自动入库、不自动发布。
```

看完审批台后，点击 `复制审批结果`，把内容粘贴发回 Codex，让它执行被批准的动作，并把偏差写进校准档案。

如果那天几乎没有使用 Codex/Code Desk，不要硬跑。直接告诉它“换一天”，让它帮你选最近工作量高的一天先跑小样。

## 仓库结构

```text
.
├── README.md
├── LICENSE
├── examples/
│   ├── config-template.md
│   ├── first-run-prompt.md
│   ├── one-line-install-prompt.txt
│   └── three-minute-intro.md
└── skills/
    └── ai-compounding-system/
        ├── SKILL.md
        ├── agents/
        │   └── openai.yaml
        └── references/
            ├── first-run-value-intro.md
            ├── onboarding-guide.md
            ├── approval-calibration-learning.md
            ├── writing-feedback-learning.md
            └── approval-ui-style-guide.md
```

## 隐私提醒

这个开源包不包含作者本机路径、个人审批样本、私有日志、账号信息或密钥。你自己的配置和复盘结果只应该保存在你的本地电脑里。

不要把下面这些内容上传到公开仓库：

- Codex session 原始日志。
- 个人聊天记录、会议逐字稿、客户资料。
- Feishu、GitHub、OpenAI、公司系统的 token 或授权二维码。
- 你的本地数字资产库正本。

## 给维护者的发布前检查

- `skills/ai-compounding-system/SKILL.md` 没有个人路径。
- `references/` 里只有通用模板，没有真实私人审批样本。
- README 里的 GitHub 地址已指向真实仓库。
- 已用一个全新 Codex 环境试过安装提示词。
- 已确认首次配置向导不会要求用户提供密钥或隐私资料。
