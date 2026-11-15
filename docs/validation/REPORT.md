# Validation record

Date: 15 November 2026. Scope: one persona skill, six practical skills, portable packaging, and selected native-agent exercises.

This report preserves checks from earlier project stages. Historical references to research, packaging scripts, and ZIP files describe artifacts that are no longer included. The public repository keeps only `docs/`, `theo-skills/`, `.gitignore`, and `README.md`.

## Reported Grok host failure

[Issue #1](https://github.com/kriss-spy/digital-theo/issues/1) reports a live migration attempt against revision `80209bd` on 15 November 2026. All seven bot-scoped skill saves were rejected, including after direct owner confirmation. A separate supported profile-description update succeeded. No replacement skill was installed, so installed-reference reads and fresh-session behavior were not validated. The host version/build and root cause remain unknown.

The [setup guide](../grok-bot-setup.md) now treats installation as conditional. The [troubleshooting record](../grok-bot-troubleshooting.md) preserves the exact error, separate partial states, scope constraints, and recovery criteria. The earlier statements below about no live test describe the original authoring stages, before this report arrived.

This documentation update did not reproduce the host failure or perform another Bot install. It does not establish that app updates caused the rejection or that personal bot-only skills are universally unavailable.

## Structural validation

The commands and paths in this section record the original rewrite before reorganization. Current skills live under `theo-skills/persona/` and `theo-skills/practical/`. Research now lives under `research/`, and the current ZIP is in `dist/`. See the reorganization checks below for current paths.

All seven skill folders passed:

```sh
for dir in theo-persona-skills/theo-* theo-practical-skills/theo-*; do
  python3 /home/krisspy/.codex/skills/.system/skill-creator/scripts/quick_validate.py "$dir" || exit 1
done
```

This checks frontmatter and naming. It does not establish instruction quality or runtime behavior.

SHA-256 values for all ten archived original SKILL.md files matched their values before the move. The originals now live in `theo-who/05-original-topic-skills/`.

A local-link check found seven unique skill names and verified all 25 local links in the current skills and package documentation. `unzip -t digital-theo-skills.zip` passed. Its inventory contains the seven skill folders with their references and the two package instruction files. The archive excludes the old skills and research corpus.

The parent reran `npm test --prefix validation/context-fixture`; it passed with `Money examples pass`.

## Independent combined exercise

A fresh native subagent received four user requests and the new skill locations. It read the relevant files and generated actual replies. The parent did not give expected answers or suggested fixes. See [combined-forward-test.md](combined-forward-test.md) for prompts, replies, and execution traces.

- **Django content site, two-person team, Friday deadline:** recommended adding signups to the existing app. It applied `theo-stack-decision` and preserved user constraints over historical TypeScript enthusiasm.
- **Missing skill after executor switch:** applied `theo-agent-config-diagnosis`. It proposed a falsifiable loading hypothesis and stated that no repair was verified without runtime access.
- **Private roadmap and current personal model:** reported the evidence boundary. It did not fabricate a personal setup, private plan, or access.
- **UI improvement without screenshots, browser, or source:** applied `theo-ui-polish` and produced a provisional plan. It did not claim an edit or visual improvement.

These cases exercise composition and evidence boundaries. They are not held-out comparisons against real Theo responses or trials against an unskilled baseline.

## Independent context-edit exercise

A second fresh native subagent received the persona, `theo-agent-context`, and a temporary invoice repository. The captured failure showed an agent hardcoding two decimal places because AGENTS.md required it. The maintained formatter already supported currency-specific precision.

The subagent changed only AGENTS.md. It replaced the misleading rule with a pointer to the existing formatter, retained unrelated guidance, and explained the failure. `npm test` passed for USD, JPY, KWD, and unsupported currencies. File hashes confirmed that invoice code and test fixtures stayed unchanged.

See [context-forward-test.md](context-forward-test.md) and [context-fixture/](context-fixture/) for the report and reproducible fixture after the instruction patch. From that fixture, run `npm test` without installing dependencies.

The fixture did not contain a real executor loading trace or an invoice export implementation. No second fresh agent attempted the invoice task after the patch. Existing formatter tests passing does not prove that future agents load or follow the corrected instructions.

## Checks still needed

- Install the seven skills in the intended Grok bot and confirm role persistence and reference loading.
- Exercise real UI, component, and configuration workflows with the bot's actual tools.
- Compare repeated task outcomes with and without the skills under equivalent conditions.
- Evaluate persona judgments against held-out public Theo responses. The current source-derived voice is an adaptation, not verified fidelity.
- Re-check current product facts in primary documentation before operational or purchase recommendations.

No bot account, model subscription, or global skill installation was changed. No claims of current product capability were runtime-tested.

## Reorganization checks

The current layout places skills in `theo-skills/persona/` and `theo-skills/practical/`, documentation in `docs/`, historical material in `research/`, and generated archives in `dist/`.

- All seven current skill folders passed `quick_validate.py` at their new locations.
- A local-link check verified 28 links in the current skills and documentation. Historical execution traces retain their original temporary paths.
- `bash -n scripts/package-skills.sh` passed.
- `bash scripts/package-skills.sh` rebuilt `dist/digital-theo-skills.zip` and passed its archive-integrity check.
- The ZIP contains seven skills. Every bundled file matches its current source. It excludes research, validation fixtures, and the obsolete `BOT-INSTRUCTIONS.md` file.
- SHA-256 values for the ten originals under `research/05-original-topic-skills/` still match the pre-move values.

The setup guide was corrected against the official [Bot management](https://docs.x.ai/grok-bot/bots) and [skills](https://docs.x.ai/grok-bot/skills-routines-and-automations) pages on 15 November 2026. The earlier bot-instructions filename was a project convention, not a documented configuration loader. Current documentation uses chat and remembered rules for personal Bot roles. The guide labels its proposed role message as an adaptation.

No live Grok Bot setup or fresh behavioral exercise was run during this structural reorganization.
