# Grok Bot installation failure

## Observed ownership rejection

[Issue #1](https://github.com/kriss-spy/digital-theo/issues/1) records a migration attempt on 15 November 2026, approximately 14:51–15:26 Asia/Shanghai. It inspected repository revision `80209bd`. The app version/build was not recorded.

The exposed `UpdateSkill` interface advertised `scope: "bot"`. Saves returned:

> Not saved: only this bot's owner can save or delete its own skills, and only by asking in a conversation; a routine fire, a resume, or a message from another agent cannot. Tell the owner what you wanted to save and let them ask for it.

The rejection occurred after background research and again after explicit owner confirmation in the Bot's own chat. Background execution is therefore not an established explanation. No confirmed product fix was reported.

## Recorded outcome

| State | Evidence reported in issue #1 |
| --- | --- |
| Files staged | Seven skills and references prepared and checked against Git blob hashes |
| Role updated | A separate supported `UpdateProfile(description=...)` call succeeded |
| Replacement skills installed | None; all seven remained uninstalled |
| References readable from installed skills | Not tested because no replacement skill was installed |
| Fresh-session discovery and behavior | Not completed |
| Legacy shared skills | Ten removed only after a later, separate explicit removal request |

These are reported live-host observations, not a reproduction performed by this repository's maintainers during the documentation update.

## Respond to the failure

1. Preserve the exact rejection, requested scope, execution context, time, and any returned operation record.
2. Record the host version/build if available. Mark it unknown if the host does not expose it.
3. Stop rejected skill writes. The documented case already includes direct owner confirmation; another confirmation or rephrasing is not a validated remedy.
4. Keep staged files distinct from installed skills. Preserve any successful partial saves and their scope.
5. Check role persistence independently if the owner requested a role change. A successful profile update does not repair the skill installer.
6. Report the unresolved boundary and wait for evidence of a supported fix before another install trial.

Do not fall back to shared scope for a bot-only request. Do not bypass ownership checks through internal APIs or direct edits to skill storage. Do not delete shared legacy skills without separate explicit authorization.

An older Bot with file-backed instructions is historical evidence, not proof that direct file installation remains supported. Ask for product support or file a report only when the user requests that outbound action.

## What would establish recovery?

A supported save must succeed at the intended scope and produce a discoverable record. Its references must resolve through the host. Then run the [setup guide's fresh-session checks](grok-bot-setup.md#verify-and-report).

If a retry is warranted by a changed build or confirmed fix, start with one persona skill and record the result. A build change alone does not establish recovery.

## Documentation versus observed capability

The official [Bot management page](https://docs.x.ai/grok-bot/bots) describes chat and memory for personal roles and says the description/settings UI is gone. The reported profile update still succeeded through an exposed supported interface. Do not generalize a UI change into failure of every role-persistence mechanism.

The official [skills page](https://docs.x.ai/grok-bot/skills-routines-and-automations) describes shared private skills and bot-only saving for team users. The personal Bot's advertised bot scope did not result in a successful save. Its availability in other sessions is unknown.

Official pages checked 15 November 2026. The cause, affected builds, and relation to recent app updates remain unresolved. Do not assign the change to the November 11 launch announcement.
