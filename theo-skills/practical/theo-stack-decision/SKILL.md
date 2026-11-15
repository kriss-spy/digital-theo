---
name: theo-stack-decision
description: Choose or review an application stack using product fit, ramp-up, maintenance, exit cost, and team constraints. Use for framework, API, data, auth, deployment, or migration decisions.
---

# Theo stack decision

Choose a technical bet that buys the team time and leaves a workable exit. This is an unofficial adaptation of Theo's public tradeoff criteria. Read [evidence](references/evidence.md) for attribution, dated examples, or historical stack questions.

## Define the decision

Inspect the existing system before recommending replacements. Establish the user-visible requirement, current failure or new capability, team skills, delivery deadline, and operational capacity. Obtain only missing information that could change the recommendation. For advisory requests, stop at a decision and pilot proposal; choosing a stack does not authorize migration.

Write the decisive constraints before listing tools. Make them specific enough to reject an option: “must support an offline edit queue” or “the two-person team cannot operate another persistent service.” Separate observed limits from projected scale.

## Compare the real alternatives

Include keeping the current stack for an existing product. Compare only plausible alternatives, usually the current approach, a local repair, and a replacement. For a new app, compare the smallest set that exposes the actual tradeoff.

For each candidate, explain:

- **Ramp-up:** what the current team must learn or build before the first useful feature ships.
- **Maintenance:** which deployment, debugging, upgrade, and operations costs recur.
- **Exit:** what data, contracts, routes, and infrastructure must change to leave it.
- **Value and risk:** what users or developers gain, and which assumption could make the choice fail.

Use measured values where available. Otherwise name the assumption or uncertainty instead of inventing weighted decimal scores. Teammate expertise and informed preference affect adoption cost; explain their effect rather than treating taste as proof.

## Resolve the important branches

- **Content-heavy or static:** establish whether interactive application machinery solves a real requirement before selecting it.
- **Client-first application:** test routing, navigation, caching, and synchronization against the actual interaction pattern. A framework's popularity does not resolve a router mismatch.
- **API boundary:** a shared TypeScript client/server can benefit from inference. Multiple languages or independent consumers may justify an explicit contract. Inspect deployment coupling and external consumers before choosing.
- **Database and auth:** start from required capabilities, existing data, and maintenance ownership. A historical T3 template does not mandate a vendor.
- **Deployment:** test the selected runtime against long-lived connections, background work, cold-start sensitivity, and operational staffing where relevant.

Consult current official documentation for the exact versions and capabilities that decide the recommendation. Historical product limitations are questions to verify, not current defects. If verification is unavailable, make the recommendation conditional on the missing capability.

## Recommend and de-risk

State one default, its decisive reason, the strongest rejected alternative, and the observation that would change your choice. Prefer a local repair when it satisfies the constraints with less disruption.

For a consequential migration, define one representative vertical slice. Name its acceptance check, data compatibility needs, rollback point, and owner. Execute only when implementation is in scope. The slice must exercise the reason for migrating, not merely render a hello-world page.

Finish with a compact decision record in the reply or the repo's established decision format: constraints, recommendation, tradeoffs, evidence checked, unresolved assumptions, and next action. Do not create a documentation framework for a one-off choice.

With `theo-persona` active, retain its direct judgment and voice. Current evidence and the user's constraints determine the recommendation, including when keeping an unfashionable stack wins.

## Example

An existing content site works, and the team requests a chat widget. Compare a local interactive addition with a full application rewrite. The pilot should load the widget on the existing deployment and verify its required interaction. A newer framework alone is not a migration benefit.
