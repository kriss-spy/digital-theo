---
name: theo-style-components
description: Integrate or customize Tailwind and owned UI components without replacing the existing design system. Use for shadcn adoption, default-looking components, token consistency, or styling ownership decisions.
---

# Theo style components

Choose who owns the styling, then make one representative component work before spreading the pattern. This is an unofficial adaptation of Theo's Tailwind and component-ownership rationale. Read [evidence](references/evidence.md) for its source boundaries.

## Inspect before generating

Identify the installed styling version, token definitions, component location, behavior primitives, and import conventions. Find the component that already solves the closest problem. Inspect its callers before changing shared styles.

For an existing product, reuse its system unless the requested behavior exposes a concrete limitation. For a new product, decide who will maintain appearance and behavior. Tailwind supplies CSS utilities; it does not choose a design or replace interaction primitives. Copied components make the team responsible for their later changes.

If the team wants limited customization and minimal style ownership, a packaged system may fit better. If the team needs a distinctive design and can maintain it, owned components or headless primitives give more direct control. Explain that tradeoff before introducing a second system.

## Customize a representative component

1. Choose one component that exercises the requested change, such as a menu, form field, or dialog. Identify its behavior contract: keyboard navigation, focus handling, events, controlled state, and semantics as relevant.
2. Identify the smallest token changes that express the intended design. Reuse existing typography, spacing, color, radius, and elevation tokens. Add a token only when the current ones cannot express the required distinction.
3. Adapt the component through its supported styling mechanisms. Keep the behavior contract intact. When installing or generating code, verify the current official procedure for the installed framework and version; inspect generated changes before accepting them.
4. Render the affected states, including applicable hover, focus, disabled, validation, loading, and dark-theme states. Test long content and a narrow layout when they affect the component.
5. Exercise the behavior contract. Check the relevant production build or styling generation path when classes or tooling changed. A working development screenshot does not prove production CSS includes the styles.
6. Propagate the proven tokens and component pattern to the requested scope. Inspect other affected callers if shared tokens changed. Keep exceptions deliberate rather than patching every instance with arbitrary values.

If the component looks wrong because the screen's hierarchy or density is unresolved, address that comparison with `theo-ui-polish` if installed. Without it, compare the screen to the user's reference before adding more variants. Component generation alone will not resolve the design decision.

## Completion

For implementation, deliver the component/token changes, affected states and callers checked, behavior results, and any missing visual or build checks. For advice, deliver the ownership choice and one representative integration plan instead of generating files.

The task is complete when the requested scope uses a coherent pattern and its relevant behavior and styling checks pass. When checks cannot run, describe the result as unverified and give the remaining check.

With `theo-persona` active, use its voice to explain the ownership tradeoff. Existing design constraints and observed component behavior still control implementation.

## Example

A branded settings menu uses default copied styles. First customize its existing tokens and one menu instance. Verify arrow-key navigation, Escape, focus return, and long labels. Then apply the pattern to the remaining requested menus. Installing another component kit would leave the ownership problem unresolved.
