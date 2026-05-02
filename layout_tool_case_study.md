# Layout Management Tool

A case study that highlights my ability to translate a recurring support burden into a self-serve product layer — moving fast by building a working prototype, validating it with two different expert audiences, and handing off infrastructure-ready documentation to engineering.

## Overview
- **Role:** Designer & PM
- **Team:** 1 PM, 1 Engineer
- **Technologies:** Cursor, Claude, React 19, TypeScript, Tailwind CSS 4, WinForms (production)
- **Purpose:** Internal tool to eliminate manual layout configuration for neuroscience researchers
- **Hero Image:** /assets/editor.png
- **Demo:** [Live Demo](https://layout-tool-polyscan.vercel.app/)

---

## The Challenge

Fiber photometry researchers using PolyScan — a multi-window data acquisition software — had no way to save their workspace layout between sessions. Every launch, every machine, every new experiment started from a blank canvas. This was one of the most consistent friction points surfacing in a larger initiative to cut software onboarding time from 2–3 hours to under 10 minutes for non-technical researchers. What looked like a minor annoyance on paper was, in practice, a recurring tax on every experiment and a sustained drain on the customer support team.

### Pain Points

**Setup from scratch.** Researchers manually rearranged windows every session, on every machine in the lab, with no memory between launches.

**Support as a workaround.** Layout and parameter configuration was one of the most time consuming parts of pre-acquisition support calls.

**No path to scale.** Each new customer onboarded required the same manual support lift, creating a ceiling on how many labs we could bring on simultaneously.

---

## The Solution

The Layout Management Tool is a visual workspace editor embedded in PolyScan — a drag-and-drop canvas where researchers design their window layout once specific to their research application, save it as a named template, and have it auto-apply on every subsequent launch. Components snap into rows and columns, resize via draggable dividers, and their proportions are stored as percentages rather than fixed pixel positions — so a layout designed on a 27-inch lab monitor loads correctly on a 13-inch laptop without reconfiguration. Templates can be scoped to an individual user or shared across the whole lab, enabling a PI to standardize the workspace for their entire team in a single save.

---

## The Process

### Pain Point Discovery

Three signals converged at the same time. I was already mapping the full researcher onboarding journey for a larger initiative — cataloguing every step between unboxing and first data collection. I was also dog-fooding PolyScan myself, and the window arrangement friction was impossible to miss. Every session, I was rebuilding the same workspace. When I cross-referenced this with the customer support team, I found layout configuration was one of the most consistently flagged pre-acquisition complaints. Three independent signals pointing at the same gap made it difficult to deprioritize.

The larger onboarding redesign was still in progress, but I made the case to prioritize the layout tool as a discrete, shippable building block rather than waiting for the full initiative to be ready. The argument was straightforward: this problem had a clean scope, a working prototype to validate against, and was generating ongoing support costs every week we didn't ship it. Getting it into engineering early meant it could be live for customers before the rest of the onboarding work landed — and it de-risked the larger initiative by proving the team could ship incrementally against it.

### Design and Development

Rather than writing a spec in the abstract, I built a fully interactive prototype using Cursor and Claude — drag-and-drop component placement, live percentage feedback, resizable dividers, and template save and load — grounded in PolyScan's real design language so it looked and behaved like the actual product. This compressed the feedback loop and created a concrete artifact to validate before any engineering time was committed.

**Two audiences, two sessions.**
I ran a formal presentation to four in-house neuroscientists to validate UX, and a separate working session with the technical lead to work through feasibility. Keeping these separate meant each audience could engage on their own terms — scientists focused on whether the interaction felt intuitive; the technical lead focused on whether the architecture was achievable.

**The WinForms constraint.**
The prototype was built in Next.js. PolyScan's production frontend runs on WinForms — a different rendering model entirely. In the working session with the technical lead, we worked through every key mechanism: quadrant splitting logic, size constraints, and how tiled layout management would function within WinForms.

**Percentage-based sizing.**
Storing layout proportions as percentages rather than fixed pixel values was an architectural choice I drove with the technical lead. It meant the layout engine was resolution-agnostic from the start, not as a future-state improvement.

### Launch and Feedback

The prototype was validated by scientists as intuitive and handed off to engineering with annotated designs and the GitHub repository as the primary technical reference. One concrete outcome emerged immediately: the camera component's color scheme from the prototype was flagged by my manager as an improvement worth implementing in the current software, and the technical lead shipped that UI change directly. The full tool is now in engineering build. The internal launch will test the core hypothesis: whether researchers adopt saved templates or fall back to manual arrangement — and whether shared template adoption reaches the 40% target that would confirm the lab-wide standardization use case.

---

## Key Features

**Drag-and-drop canvas.** Researchers place and resize components visually on a live canvas, with layout proportions stored as percentages so the workspace renders correctly across different screen sizes.

**Single-use component library.** The sidebar surfaces all available PolyScan components and automatically disables any component already placed on the canvas, enforcing a one-instance-per-component constraint that prevents configuration errors before they happen.

**Adaptive resize dividers.** Users resize any component by dragging a row or column divider; each component independently shows horizontal and vertical scrollbars when its content exceeds its allocated space, so no information is lost when the layout is compact.

**Reactive settings panel.** The Application Settings component updates in real time as users configure the sidebar — toggling parameter visibility, reordering sections via drag handles, and conditionally rendering only the parameters relevant to the current device — with section reordering locked until the component is placed on the canvas, preventing edits before context is established.

---

## Takeaways

This project moved from problem identification to engineering handoff fast enough to ship as a standalone building block inside a larger, still-in-progress onboarding initiative.

**The support queue is a product backlog in disguise.** The trigger wasn't a user interview — it was a pattern in support calls. When you see a team consistently solving the same problem manually, that's a missing feature wearing a support ticket. I now treat support queue clusters the way I treat anomaly detection: the signal isn't the individual ticket, it's the recurrence.

**A working prototype is a better spec than a written one.** For interaction-heavy features, the gap between a written description and the actual user experience is too wide to close with documentation alone. Building something clickable before the PRD was finalized changed the quality of every subsequent conversation.

**Infrastructure decisions are product decisions.** Choosing a percentage-based layout model over fixed pixel positions wasn't an engineering detail — it was a product requirement driven by how neuroscience labs actually work. Getting that decision right at the architecture stage is the kind of thing that only happens when PM and engineering work from the same artifact.

---

## What's Next

The internal launch is the first real test. The instrumentation built into V1 — template save rates, shared versus personal template ratios, editor session duration, support ticket rates — will answer directly whether researchers adopt saved templates or revert to manual configuration out of habit. If shared template adoption hits the 40% target, the lab-wide standardization use case is confirmed, and V1.1 should prioritize features that accelerate it: template discovery, version history, and role-based permissions for PIs who want to lock layouts for their students. If adoption concentrates in personal templates, the roadmap shifts toward making individual customization faster — preset size buttons, keyboard shortcuts, and smarter auto-layout suggestions based on component count.

The longer-term roadmap is to make this the configuration layer for the full researcher onboarding product line — not just fiber photometry, but every neuroscience domain PolyScan serves. A calcium imaging researcher needs a different default layout than a fiber photometry researcher running a timed behavioral experiment. The same visual editor, with domain-specific starter templates, serves both — which means the engineering investment in the layout engine compounds across every new application configuration we ship.
