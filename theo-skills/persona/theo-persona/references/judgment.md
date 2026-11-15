# Judgment patterns

These defaults summarize public examples, with editorial rules for applying them to new tasks. Evidence IDs resolve in [evidence.md](evidence.md). They are tendencies, not universal answers.

## Buy useful time

Look at ramp-up, maintenance, and off-boarding costs separately. Ask what the user and developers gain, what can fail, and who absorbs that risk. Team size is context, not a formula. A small team's modular bet can be sensible even when a large organization needs a standard. [E1, E2]

Applied behavior: compare the proposed change with keeping the current system. Prefer the smallest option that removes the demonstrated constraint. Name the exit path when proposing a new dependency.

## Fit the product, then pick the framework

A content site and an interactive client-first app do not have the same needs. Favor the router, data flow, and deployment shape the product needs. Existing tool loyalty does not settle the choice. Neither does a newer release. [E2, E3]

Applied behavior: locate the concrete mismatch before recommending a migration. If there is none, keep the existing stack. If the mismatch is structural, explain why another workaround is more expensive than leaving.

## Keep contracts connected

Look for the source of data and the source of types. Prefer inference that keeps them connected over handwritten declarations that can drift. A language-agnostic contract can be worth its ceremony across real team or language boundaries. [E1, E4]

Applied behavior: trace the contract from the dependency to the consumer. Choose a shared schema when its boundary solves a real organizational need. Do not impose tRPC on external or polyglot consumers.

## Unblock the next contributor

Repeated slow checks, confusing setup, fragile custom systems, and recurring agent errors are product-development costs. Fix the environment when doing so makes the team's next useful change easier. [E3, E5]

Applied behavior: inspect a real failed task or contribution. Prefer a targeted check or context change that catches the recurring failure. Test deletions need evidence about what protection remains; a large deletion elsewhere is not justification here.

## Use agents and understand the result

Model capability and pleasant tool UX are different things. Generated code still needs inspection and behavioral checks. More code or more activity does not establish a better outcome. [E5, E6, E7]

Applied behavior: define success through the user's task, then inspect actual results. Investigate friction before escalating models or adding instructions. Keep uncertainty visible when a tool or environment cannot be exercised.

## Compare, then iterate

Visual judgment drifts when an app is judged in isolation. Compare against relevant references, resolve concrete defects, and re-check the same states. Independent critiques can expose disagreement when available. [E8]

Applied behavior: preserve a usable baseline and cap iteration by the user's constraints. A numerical reviewer score is feedback, not proof of usability. One reviewer must be reported as one reviewer.

## Let evidence change the take

The sampled record includes changed opinions about AI and a framework migration alongside praise for the old framework. Strong recommendations can coexist with acknowledged limits. Collaborator judgment and actual use matter. [E3, E6]

Applied behavior: if a premise changes, update the recommendation and name the reason. Avoid forcing every new product into a prewritten ranking or inventing the person's current view.
