# Grok Bot setup

**Installation is currently blocked in the reported personal Bot session.** [Issue #1](https://github.com/kriss-spy/digital-theo/issues/1) records rejected bot-only skill saves, including after direct owner confirmation. No replacement skill was installed. A separate role-description update succeeded.

This guide gives a capability check and a conditional migration procedure. It is not a validated installation recipe for the current personal Bot app. The app version/build was not recorded in that attempt.

## Choose the scope first

State which Bot should change and whether the requested skills must be bot-only. Keep an existing setup until its replacement works.

The official [skills documentation](https://docs.x.ai/grok-bot/skills-routines-and-automations) describes a private library shared across Bots. It documents bot-only saving for team users. The interface in issue #1 also advertised bot scope for a personal Bot, but rejected every attempted save. Neither documentation nor an advertised field proves a particular save will succeed.

For a bot-only request, stop if that scope is unavailable or rejected. Do not substitute shared storage, edit another Bot, or write directly into internal skill folders. Removing legacy shared skills requires a separate explicit request because it affects other Bots.

## Check the current host

Run these checks in the intended Bot's own conversation. Use the current supported interfaces; this repository supplies no Grok API schema.

1. Record the app version/build if available, date, Bot type, and requested scope.
2. Inspect whether the host can save a skill at that scope and return a saved record.
3. Inspect how it stores and reads supporting reference files. File presence on the computer is only staging evidence.
4. Inspect the available role-persistence mechanism separately from skill storage.
5. If ownership or scope is rejected, follow [troubleshooting](grok-bot-troubleshooting.md). Further confirmation is not a known fix.

The official [Bot management documentation](https://docs.x.ai/grok-bot/bots) directs personal Bot role changes through chat and remembered rules. It says personal Bots no longer have a description/settings page. Issue #1 nevertheless reports a successful supported `UpdateProfile(description=...)` call. Treat these as different observations. A missing UI does not establish that every profile operation is unavailable.

Both official pages were checked on 15 November 2026. They do not document an automatic loader for this repository or a generic ZIP import mechanism. The reported failure has no confirmed cause or release date.

## Conditional installation

Proceed only when the requested scope and supporting-file mechanism are available. These steps still require a successful current-host trial.

1. Make the seven current folders under `theo-skills/` readable to the Bot. Record the source revision. A clone, download, or API fetch can stage the files.
2. Save `theo-persona` at the requested scope through the supported interface. Record its returned identity and scope. A rejection ends this installation attempt.
3. Preserve its four reference files through the supported helper-file mechanism. Resolve the links from the saved skill and verify actual reads.
4. Reopen the saved persona through discovery in the intended Bot. Check its content against the source. A staged local copy is not a saved skill.
5. Only after that succeeds, save and verify each of the six practical skills and its evidence reference. Record partial success per skill.
6. Apply the role message below through a working supported role mechanism. If skill installation is blocked, a role-only change is a separate, limited result.
7. Run the fresh-session checks below. Retire legacy skills only after validation and within the user's explicit scope.

For a partial installation, resume from the recorded state after a demonstrated host fix. Do not blindly recreate successful entries or retry the rejected save under another scope.

## Suggested owner message

This is our proposed chat prompt, not a standard configuration file. `BOT-INSTRUCTIONS.md` was an earlier project-specific filename.

```text
For this Bot only, use an unofficial AI simulation of Theo Browne's public perspective, not Theo or his endorsement.
Use theo-persona for voice and judgment, and the matching practical skill for execution.
First report which of the seven skills are actually saved, their scope, and whether their references can be read through the host.
Preserve other Bots and shared skills. Do not change scope or remove shared legacy skills as a fallback.
If a supported skill save rejects ownership or scope, stop installing and report the exact failure. Repeated confirmation is not a known fix.
Save the role through the supported role mechanism if available, and report that result separately from skill installation.
If skills remain unavailable, state that the role is only partially configured. Do not claim the full setup works.
I can change or exit the persona. Follow my task constraints and permissions.
```

## Verify and report

Use a new conversation with the same Bot after a successful supported install.

- **Discovery:** retrieve all seven saved skills and check their identities and scope.
- **References:** observe actual reads of the persona's voice, judgment, positions, and evidence files, plus one practical evidence file. Compare the returned content with the source. A model saying it read a file is insufficient.
- **Persona:** ask whether a two-person Django team should rewrite a working content site before Friday. Check its reasoning and role persistence.
- **Routing:** ask it to assess that migration using `theo-stack-decision`. Verify that it reads and applies the saved workflow.
- **Exit:** ask it to leave the persona and confirm the change in behavior.

Use this status record. Mark unknowns explicitly:

```text
Host version/build and date:
Source revision and target Bot:
Requested scope:
Files staged:
Role updated: mechanism and save evidence
Skills installed: per-skill saved identity, scope, success or error
References readable: actual reads and unresolved links
Fresh-session discovery:
Persona activation and practical routing:
Overall: blocked / partial / verified for these checks
```

Installation is complete only when the saved skills, supporting files, intended scope, and runtime checks succeed. A working role alone does not meet that criterion.
