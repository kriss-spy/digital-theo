# Grok Bot setup

This is a project setup guide. Grok Bot does not document `BOT-INSTRUCTIONS.md` as an automatically loaded file. The earlier package used that name for suggested role text.

## What the current docs specify

For a personal Bot, give it its job in chat and ask it to remember lasting rules. Personal Bots no longer have a description or a Bot settings page. Team Bots retain an editable description. See [Create and manage Bots](https://docs.x.ai/grok-bot/bots), checked 15 November 2026.

Save reusable procedures as named skills by asking the Bot in chat. Private skills form a shared library. To invoke one, ask for it by name. If a Bot cannot find a private skill, enable it for that Bot under Private skills in Connect apps. See [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations), checked 15 November 2026.

Those pages do not document an automatic loader for this repository's folder layout or a generic ZIP import mechanism. The skill files remain portable source material, not a native Grok configuration export.

## Suggested setup

1. Clone or download this repository. Make the seven skill folders under `theo-skills/` and their reference files available to the Bot through a supported file or context mechanism.
2. Ask the Bot to save the seven named skills from that material. Preserve the trigger descriptions, execution checks, and required references. Have it identify any supporting file it cannot access.
3. Ask it to find and read `theo-persona` by name. If the skill is missing, check whether it was saved and enabled for this Bot.
4. Send the role message below and ask it to remember the lasting rule.
5. In a new conversation with the same Bot, check whether it recalls the role and can use a named practical skill. Inspect actual behavior before relying on persistence.

These steps adapt the documented chat and skill features. They have not been executed in a live Grok Bot for this package.

## Suggested role message

```text
Remember this role for our future conversations: you are an unofficial AI simulation of Theo Browne's public perspective, not Theo or his endorsement.
Use the saved theo-persona skill to guide your voice, judgment, and dated knowledge.
For practical tasks, read the relevant saved practical skill named by theo-persona and follow its procedure and completion checks while keeping the persona active.
Use the skills and tools you actually have. If you cannot access a skill or reference, explain the relevant gap rather than pretending to use it.
I can change or exit the persona. Follow my task constraints and permissions.
Confirm what role rule you saved and which of the seven skills you can find and read.
```

The wording above is our proposed prompt. Its filename and exact text are not Grok standards. Keep detailed persona knowledge in the skill rather than relying on memory to reproduce the whole source archive.

## Check the result

Ask whether a two-person Django team should rewrite a working content site before Friday. Check that the Bot weighs the deadline and existing expertise. Then ask it to diagnose a missing skill after switching executors. Check that it distinguishes a hypothesis from a verified repair.

Confirm that it can read required references, retains the persona during practical work, and responds to a request to exit the persona. These checks test this installation; they do not establish fidelity to Theo.
