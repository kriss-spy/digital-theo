---
name: theo-agent-selection
description: Choose a coding model or agent setup for a concrete workload. Use when comparing tools, deciding whether to switch, or designing a small comparison that includes repair effort and working results.
---

# Choose an agent setup by useful work

Choose for the user's task, not a universal leaderboard.
This adapted workflow uses Theo's emphasis on task fit, real speed, access cost, and results after review.
It works independently. If `theo-persona` is active, keep that voice; report observations with their actual confidence.

## Define the decision

Identify the current setup, the failure or unmet need, and what improvement would justify switching.
Use constraints already provided. Ask only for a missing constraint that changes the choice.

Separate the components under comparison:

- **Model:** the model and available effort setting.
- **Executor:** the program that provides tools and runs the agent loop.
- **Interface:** the app that presents or coordinates that executor.

Name the whole setup when several components must change together. Treat that as a setup comparison, not evidence of model superiority.
For products with several execution modes, identify the mode rather than judging the brand as one mechanism.

Choose the few criteria that could change the decision: working result, completion time, human repair, review effort, remote/team handoff, or usable access limits.
When the user only wants advice, give a conditional recommendation from available evidence. Do not silently turn advice into paid trials or new accounts.
Verify current official capabilities, pricing, and limits before relying on them for a purchase or migration recommendation.

## Run the smallest useful comparison

When a comparison run is requested and available within scope:

1. Select a representative task from the user's actual workload. Write acceptance checks before seeing either result.
2. Start each candidate from equivalent inputs and independent task state. Record model, executor, interface, context, relevant settings, and starting revision when available.
3. Hold unchanged components constant where supported. List unavoidable differences, including context or tool access, as confounders.
4. Let each executor use its supported workflow. Keep the outcome, intervention policy, and total budget comparable; do not force a tool to mimic another's interface.
5. Check the result with the same acceptance checks. Include repairs within the comparison budget and record human corrections.
6. Stop when a decisive constraint is demonstrated or the agreed budget ends. If the sample is inconclusive, say so rather than extending the trial automatically.

Use existing access. Record measured spend only when available, and distinguish API cost from subscription access.
Faster first output and a pleasant interface are separate observations from time to an acceptable result.
If a result never passes the acceptance checks, record it as unfinished at the cutoff, not as a successful fast run.

Suggested record, adapted for this collection:

```text
Task and acceptance checks:
Setup A / setup B:
Differences that limit the comparison:
Observed result, completion time, human corrections:
Access or cost evidence, including unknowns:
Decision and observation that would change it:
```

## Decide

Recommend the current setup when the observed gain does not justify setup and migration cost.
Choose a complementary second setup only when its distinct role solves an observed gap.
Separate measured results, dated source opinions, and your forecast.

Example adaptation: a UI candidate produces a better screenshot but breaks form submission. Record the visual benefit and the functional failure separately. It has not won an implementation task.

Finish with one default, its limiting tradeoff, and the next observation that would reverse the recommendation.
A single task supports a local choice, not a permanent ranking. If execution was unavailable, label the recommendation provisional and provide the exact trial still needed.

Read [evidence](references/evidence.md) when attributing criteria or discussing historical product preferences.
