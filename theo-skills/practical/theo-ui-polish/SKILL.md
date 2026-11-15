---
name: theo-ui-polish
description: Improve an existing interface through reference comparison, evidence-based critique, and bounded implementation rounds. Use for visual polish, inconsistent components, or agent-generated UI that feels unfinished.
---

# Theo UI polish

Improve the interface against an explicit reference while keeping its primary task working. This is an unofficial adaptation of Theo's public review loop. Read [evidence](references/evidence.md) when explaining its provenance or historical examples.

## Establish the comparison

Inspect the current app and the user's requested outcome. Identify the primary interaction and preserve the design constraints they name. If the request is review-only, deliver findings without editing.

Capture the affected screen at a representative desktop and narrow viewport, including the state with the reported problem. Use one relevant user reference or an existing well-resolved screen in the product. Keep viewport, theme, and state comparable across rounds. Explain which qualities the reference demonstrates; a screenshot is not permission to copy unrelated branding.

If only screenshots are available, review them and identify the states still needed. If no visual inspection is possible, give a provisional implementation plan and name the missing evidence. Source reading alone does not establish visual improvement.

Set a round limit before editing. Use the user's budget; otherwise start with three rounds on the affected screen. This default is an adaptation, not Theo's prescribed quota. Existing tools and reviewers are sufficient. Additional paid services need their own authorization.

## Run a round

1. Compare the current captures with the reference. Look for hierarchy, density, truncation, radius consistency, labels, contrast, and unnecessary component chrome.
2. Rank the few defects that most affect the primary task. Each finding needs an affected element, visible symptom, consequence, and proposed change. Keep intentional product character unless it causes a named problem.
3. If independent reviewers are available and delegation is authorized, give them the same captures and constraints. Keep critique read-only. Resolve disagreement by the visible defect and user task; extra reviewers are optional.
4. Implement the smallest coherent set of fixes. For component-system changes, use `theo-style-components` if installed, or inspect and reuse the existing tokens and components directly.
5. Capture the same screen states again. Compare against both the baseline and the reference. Record which defect improved, stayed unchanged, or regressed.
6. Exercise the primary interaction. Check affected keyboard/focus behavior, narrow-screen overflow, and changed loading, empty, disabled, or error states. Run the relevant existing checks for the edited code.

Scores may summarize reviewer impressions. A higher score cannot override a broken interaction or a visible regression. If scores rise without a concrete improvement, recalibrate against the reference instead of adding decoration.

Stop when the prioritized defects are resolved and relevant checks pass, the round budget is reached, or further work requires a broader design decision. When a round introduces a regression, repair or revert it before continuing. Report unresolved defects when stopping at the budget.

## Deliver

Return the before/after captures, the few changes that matter, checks actually run, remaining defects, and the stop reason. A review-only request ends with ranked findings and proposed verification. Keep a short round log in the response or an existing task artifact; a new tracking system is unnecessary.

With `theo-persona` active, use its voice and tradeoff framing. This workflow still determines the evidence required to claim improvement.

## Example finding

“The filename in the attachment row truncates before its extension at 390 px. Users cannot distinguish the two uploads. Let the label shrink inside a flex child and preserve the extension. Verify both long filenames and the remove button at that width.”

This is actionable. “Make the attachments look more premium” is not.
