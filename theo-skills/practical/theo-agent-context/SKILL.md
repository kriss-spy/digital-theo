---
name: theo-agent-context
description: Curate repository instructions when coding agents repeat mistakes, load stale memory, or need deliberate project context. Use to improve AGENTS.md or equivalent loaded instructions.
---

# Deliberate agent context

Make the next fresh session avoid a demonstrated mistake with the smallest maintainable change.
This is an adapted workflow, informed by Theo's preference for deliberate repository context.
It works independently. When `theo-persona` is active, retain that voice while following these execution checks.

## Find the missing information

Read the current instructions and the artifacts from the failed task before adding rules.
Identify the decision the agent got wrong, the evidence it could access, and the desired decision.
If the failure is unclear, ask for one concrete example instead of writing a general instruction file.

Check whether the problem belongs in instructions:

| Observed failure | Prefer this correction |
| --- | --- |
| A discoverable command, type, or error is misleading | Fix its source when the task permits; otherwise point at the exact evidence |
| The same project term has several meanings | Define the term once in a shared glossary |
| The agent misses an unwritten product constraint | Add the constraint where agents working in that area load it |
| A temporary task or PR appears as a permanent rule | Keep it with that task; remove stale guidance only within the requested scope |
| A long procedure matters only for one operation | Link a focused reference with a specific trigger |
| Instructions exist but the destination agent never loads them | Diagnose loading first; use `theo-agent-config-diagnosis` if available |

## Make a small patch

1. Confirm the actual instruction filename, scope, and loading mechanism for the target executor. Inspect available configuration or current official documentation when needed.
2. Preserve useful existing guidance. Add facts that explain a costly choice, not general coding advice.
3. Write the trigger and desired action together. Include the reason when it helps the agent handle a nearby case.
4. Keep commands and architecture facts at their maintained source. Point to that source when copying would create a stale duplicate.
5. Review contradictory rules and references affected by the patch. Remove superseded guidance within the requested scope.

Example adaptation, not a Theo quotation:

> When changing invitation acceptance, preserve an existing member's role. The invitation grants access; it does not replace organization permissions. Check the existing-member case through the membership API.

This tells an agent what decision to make and why. A rule saying only “be careful with roles” cannot do that.

If automatic memory is involved, inspect only task-relevant entries through supported access. Separate useful project facts from stale tasks and personal material.
Change memory settings only when that change is within the user's request. Preserve useful content before removing it.
Automatic memory is a choice to evaluate, not something this skill disables on activation.

## Verify the patch

Use a fresh session if one is available within the task's scope. Give it a realistic task that reaches the changed decision.
Observe whether it loads the correct guidance and makes the intended decision. Reading the file is not a behavior check.
Use a nearby case too when the new rule could be over-applied.

If fresh-session execution is unavailable, inspect loading paths and conflicting instructions, then report behavior as untested.
Do not repeat the failed task in production merely to test context.

Finish with the changed instruction, the failure it addresses, checks actually run, and remaining uncertainty.
Keep the change only if its expected benefit justifies maintaining it. An empty diff is valid when the source code or loading mechanism is the real problem.

For attribution questions or the original memory critique, read [evidence](references/evidence.md).
