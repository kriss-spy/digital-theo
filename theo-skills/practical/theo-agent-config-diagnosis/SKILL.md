---
name: theo-agent-config-diagnosis
description: Diagnose missing skills, tools, context, or changed agent behavior after switching executors, interfaces, machines, or sessions. Locate the configuration owner before changing settings.
---

# Diagnose the configuration owner

Find which component owns the missing behavior, then verify one small correction.
This adapts Theo's model, executor, and interface distinction into a diagnostic workflow.
It works independently. When `theo-persona` is active, use that voice without substituting confidence for evidence.

## Establish the change

Record the expected behavior, actual symptom, and last setup where it worked.
Inspect only task-relevant configuration and redacted logs available within the user's scope.
Map both setups using this record:

```text
Model and relevant setting:
Executor and version:
Interface and version/channel:
Machine, project path, and session:
Skill/instruction/tool configuration owner and load evidence:
```

An **executor** supplies tools and runs the agent loop. Theo calls this component a harness.
An interface may wrap an executor, or the same product may implement both roles. Determine ownership from the actual execution mode.
For the source-era T3 Code setup, underlying programs such as Claude Code and Codex supply executors. The shared app does not prove shared skill installation.

## Follow the symptom

| Symptom | Inspect first | Evidence needed |
| --- | --- | --- |
| A skill disappears after switching executor | Destination skill discovery and instruction scope | The destination discovers and reads the intended skill |
| The same executor behaves differently through another app | Project path, machine, session, forwarded settings, tool availability | A minimal task with comparable effective inputs |
| A remote machine lacks a local tool | Remote executor and configuration | The tool is available where execution actually occurs |
| A feature exists in the standalone product but not the host | Integration support and version/channel | Supported interface capability, not brand-level assumptions |
| Context appears loaded but behavior is still wrong | Conflicts, task relevance, then model/executor behavior | A small task reaching the exact decision |
| Usage totals differ | Accounting window, included machines/sessions, model and work performed | Comparable records; token totals alone do not prove billing error |

## Test the owner

1. Form one ownership hypothesis and a test that could reject it. Example: the destination executor never discovered the skill.
2. Use the smallest non-destructive task that reaches the missing behavior. Record the actual input, relevant effective configuration, and output.
3. Check the target product's supported discovery or diagnostics mechanism. Verify current official documentation before supplying installation commands, settings names, or diagnostic flags.
4. If loading is the cause, make the smallest supported correction within the requested scope. Retain a rollback copy for an existing file you modify.
5. Repeat the original task in a fresh session when loading requires one. Confirm both discovery and the intended behavior; merely finding a file on disk is insufficient.

For a missing skill, prefer supported shared discovery or a deliberate destination install over copying a whole configuration tree.
Authentication and permissions belong to their actual executor or service. Use approved credential mechanisms; never copy secrets as a skill migration.
If loading works but the instruction fails, improve the relevant context or skill. Use `theo-agent-context` if available.
If the task is choosing a different setup, use `theo-agent-selection` if available.

## Finish or stop

Finish with the verified owner, the evidence, any correction, and the original symptom's result.
When access or diagnostic support is missing, name the unresolved boundary and the smallest missing observation. Report the diagnosis as provisional.
Stop after a failed reversible correction and reassess the hypothesis before changing another layer.
Product policy and subscription access require current official evidence; a technical reproduction alone does not establish permission or equal billing.

For the original definition, T3 Code example, and historical limitations, read [evidence](references/evidence.md).
