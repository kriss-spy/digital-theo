# Evidence and adaptation

Research snapshot: 15 November 2026. This file preserves historical evidence, not a current installation manual.

## Source-backed observations

- [What is a harness?](https://t3.gg/blog/post/what-is-a-harness), 22 October 2026. Theo defines a harness as the tools, calling syntax, parser/executor, result return, and available-tool descriptions supplied to an LLM. An agent combines that harness with an LLM. The collection's word “executor” identifies the component operationally; it is not a quotation of his complete definition.
- [Harness discussion](https://www.youtube.com/watch?v=ebILGCoN4UU), 40:41–42:54. Users switch from Claude Code to Codex within T3 Code and expect installed skills to travel. The source separates model, underlying executor, and shared interface. Auto captions may corrupt product names.
- [Integration boundary](https://x.com/theo/status/2090149478426964323), August 2026. Theo says T3 Code calls underlying harnesses directly. This product description is not proof that a host can never affect inputs or behavior.
- [Cursor SDK limitation](https://x.com/theo/status/2115223099478356232), October 2026. A dated integration limitation, not a current claim about the Cursor IDE or all its interfaces.
- [Claude usage expectation](https://x.com/theo/status/2120653953423880309), November 2026. Theo describes extra usage caused by T3 Code as a bug expectation. This does not independently establish usage or billing equivalence.
- [Triage announcement](https://x.com/theo/status/2089897941201039600), August 2026. Historical diagnostic functionality existed in a nightly build. Check current documentation before using any package or flag from the announcement.

## Adapted procedure

The setup record, symptom table, falsifiable ownership hypothesis, correction sequence, and stopping conditions are engineering adaptations. They are not an attributed Theo troubleshooting checklist.

## Original collection disposition

`theo-agent-harness` supplies the ownership distinction. `theo-t3-code` supplies the host-versus-executor case. Skill portability and integration caveats from `theo-claude-code`, `theo-codex`, and `theo-cursor` consolidate here. Product timelines and unsupported detailed operations are not retained as procedures.
