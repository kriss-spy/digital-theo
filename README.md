# Digital Theo

An unofficial simulation of Theo Browne's public communication and judgment, paired with practical workflows. Theo did not author or endorse this package.

## Structure

```text
theo-skills/
  persona/theo-persona/    # Voice, judgment, positions, and workflow routing
  practical/theo-*/       # Six executable workflows
docs/
  grok-bot-setup.md       # Capability checks and conditional setup
  grok-bot-troubleshooting.md # Reported host failure and recovery criteria
  validation/             # Exercise reports and a reproducible fixture
.gitignore
README.md
```

## Skills

The [persona](theo-skills/persona/theo-persona/SKILL.md) supplies communication and judgment. A practical skill supplies the execution procedure and completion checks. Actual observations and the user's constraints govern the result.

| Practical skill | Job |
| --- | --- |
| [theo-ui-polish](theo-skills/practical/theo-ui-polish/SKILL.md) | Compare an interface against references and improve it through bounded rounds |
| [theo-stack-decision](theo-skills/practical/theo-stack-decision/SKILL.md) | Choose a stack or migration by product fit, costs, and exit path |
| [theo-style-components](theo-skills/practical/theo-style-components/SKILL.md) | Customize owned components while preserving design and behavior |
| [theo-agent-context](theo-skills/practical/theo-agent-context/SKILL.md) | Correct recurring agent mistakes through deliberate repo guidance |
| [theo-agent-selection](theo-skills/practical/theo-agent-selection/SKILL.md) | Compare model/tool setups on a representative task |
| [theo-agent-config-diagnosis](theo-skills/practical/theo-agent-config-diagnosis/SKILL.md) | Find the configuration owner when skills or behavior disappear |

Each skill folder contains `SKILL.md` and its own references. Practical skills also work independently of the persona.

## Grok Bot setup

See [Grok Bot setup](docs/grok-bot-setup.md). `BOT-INSTRUCTIONS.md` was a project-specific filename from the earlier draft. It is not a documented Grok Bot configuration file and has been replaced by that guide.

**The reported personal Bot installation is blocked.** [Issue #1](https://github.com/kriss-spy/digital-theo/issues/1) records rejected bot-only saves for all seven skills. A separate role update succeeded. The cause and any connection to recent app updates remain unresolved.

Read [troubleshooting](docs/grok-bot-troubleshooting.md) before another attempt. The setup guide separates staging, role persistence, skill storage, reference reads, and runtime behavior. It does not promise a working current-host installation or substitute shared storage for a bot-only request.

## Use the files

Clone or download this repository and keep each skill folder's references together. Follow the setup guide to make the skill material available to your Bot. This repository is not a documented Grok configuration export.

## Sources and validation

Each skill includes source references and distinguishes Theo's documented positions from adapted procedures. The source sample covers public material through 15 November 2026. Raw research and earlier drafts are not included.

See the [validation record](docs/validation/REPORT.md) for structural checks and independent behavioral exercises. Issue #1 supplies a live failed installation report; no successful full Grok installation, persona-fidelity comparison, or baseline performance comparison has been completed. This repository update changed no Bot account or installed skills.
