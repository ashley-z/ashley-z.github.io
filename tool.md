# Layout Management Tool

Design your own workspace once and never set it up again — removing hours of software friction from their first day of data collection.

**Prototype Showcase quote:**
> "A case study that highlights my ability to translate a recurring, high-cost support burden into a self-serve product layer — and to move fast by building the prototype myself using AI-assisted development."

## Overview
- **Role:** Designer & PM
- **Team:** 1 PM, 1 Engineer
- **Technologies:** Cursor/Claude for Frontend Development, React, TypeScript, Tailwind CSS 4
- **Purpose:** Internal tool to automate manual layout requests for the operations team
- **Timeline:** 2 weeks (Hi-Fi Prototype)
- **Hero Image:** /assets/photo.PNG

## The Challenge
Fiber photometry researchers use complex, multi-window software to run experiments — simultaneously watching live camera feeds, fluorescence trace graphs, and hardware settings panels during data acquisition. The software, PolyScan, was designed to be powerful and flexible, supporting dozens of instrument configurations. That flexibility came with a cost: there was no way to save how your windows were arranged. Every session, on every machine, users started from a blank canvas.

The problem surfaced from three directions at once. While mapping the full Turnkey Systems setup journey, I was also dog-fooding PolyScan myself — sitting down with the software the way a new customer would — and the window arrangement friction was impossible to miss. At the same time, the customer support team had been flagging layout configuration as a recurring complaint: it wasn't an occasional edge case, it was one of the most consistent categories of pre-acquisition support calls they handled. Three independent signals pointing at the same gap made the problem hard to deprioritize.

What I found when I looked more closely was that software configuration wasn't a one-time annoyance — it was a recurring tax on every experiment. Fiber photometry users were new customers, often setting up a system for the first time, often with a customer support engineer on the line. The window arrangement problem wasn't isolated; it was symptomatic of a broader pattern: our software had been built for experts, and we were now selling to researchers who needed it to work immediately.

### Key Pain Points
- **The Setup Tax:** Before running a single trial, a researcher had to manually arrange multiple windows: camera feed here, trace graph there, settings panel in between. There was no memory between sessions. Every time the software launched, every time they moved to a different computer in the lab, they started over. For a researcher doing a timed behavioral experiment, spending 20–30 minutes on window and parameter configuration wasn't frustrating — it was disqualifying.
- **Customer Support as the Fix:** The workaround for all of this was a support call. When a customer couldn't figure out their workspace configuration, our customer support team walked them through it live — sometimes for hours. This wasn't a product experience; it was a manual labor substitute for a missing product feature. Every support hour spent on window arrangement was an hour not spent on a real technical issue, and it created a ceiling on how many customers we could onboard simultaneously.

## The Solution
The Layout Management Tool is a visual workspace editor embedded directly in PolyScan — a drag-and-drop canvas where researchers design their window layout once, save it as a named template, and have it auto-apply every time they launch the software.

The core capability is a recursive, percentage-based layout engine. Researchers drag components — camera feeds, trace graphs, settings panels — from a sidebar onto a live canvas. Components snap into rows and columns, resize via draggable dividers, and their proportions are stored as a JSON tree rather than fixed pixel positions. This means a layout designed on a 27-inch lab monitor loads correctly on a 13-inch laptop — no reconfiguration needed. Templates can be named, saved, and scoped: "just me" for personal setups, or "all lab users" to standardize across a team.

The strategic decision was to build the interface layer before the backend integration existed. Rather than waiting for engineering to wire the tool into PolyScan's window management system, I built a high-fidelity, fully interactive prototype using AI-assisted development (Cursor and Claude) — grounded in PolyScan's real UI components so it looked and behaved like the actual product. This let us validate the interaction model and get stakeholder alignment on the design before production build began. The prototype became the primary reference artifact for the engineering lead, who collaborated with me on translating the interaction design into the technical architecture — the recursive LayoutNode data model, the percentage-weight sizing system, and the localStorage persistence layer for the V1 build.

## The Process

### Discovery — Three Signals, One Gap
Three signals converged: I was already in the Turnkey Systems discovery process, mapping every step a new customer had to complete before collecting their first data point; I was dog-fooding PolyScan myself and hitting the window arrangement problem directly; and the customer support team had flagged layout configuration as one of their most recurring pre-acquisition complaints. None of these signals in isolation would have been enough to justify a new tool. All three pointing at the same pain point made it a clear product gap.

The constraint that sharpened the problem definition was timeline. Turnkey Systems had already been sold to customers — hardware was shipping, software was expected to follow. There was no room for a long discovery cycle. I had to move from problem to spec to prototype fast, which meant using the knowledge I already had rather than going back to square one.

### Prototyping Fast — AI-Assisted Development
I made an unconventional call early: instead of writing a spec and handing it to engineering, I built the frontend prototype myself using Cursor and Claude. This wasn't about saving engineering time — it was about compressing the feedback loop. A written spec of a drag-and-drop layout editor is abstract. A working prototype you can click through is not.

Using PolyScan's real design language as a reference, I built a fully interactive canvas: drag-and-drop component placement, live percentage readouts, resizable dividers, template save and load. The tech stack — React 19, TypeScript, Tailwind CSS 4, @dnd-kit — was chosen to match what the engineering team would productionize, so the prototype wasn't a throwaway wireframe. It was a specification that happened to also be functional.

The key decision was what not to build at the prototype stage. Auto-layout suggestions — an algorithm that proposes optimal arrangements based on component count — are in the spec but scoped to V1.1. I cut it from the prototype because it required understanding user intent before we had any usage data. Building a suggestion algorithm for a tool nobody had used yet would have been designing in the dark. The first version needed to validate that researchers would use a visual editor at all before we invested in making the editor smarter.

### Key Rationale
**Spec to PRD — Translating Interaction Design into Engineering Requirements**
Once the prototype was solid enough to demo, I wrote the full PRD. The document defined not just what to build but the boundaries of V1.0 versus V1.1, the data model, the five-phase user flow, and the success metrics the engineering team would build instrumentation for.

The architecture was collaborative. I didn't have access to the existing PolyScan codebase, which meant I couldn't spec the technical implementation in isolation — I brought the PRD and the working prototype to the engineering lead and we designed the data model together. I drove the product requirements and the interaction design; the engineering lead drove the technical decisions about how those requirements would be implemented in production. That division worked well because we had a shared reference artifact — the prototype — rather than trying to align on a written spec in the abstract.

The metrics I defined — setup time reduction (target: 80% from 5–10 min to under 1 min), template reuse rate (target: 40% of users load a template created by someone else), and support ticket rate (target: less than 2% of users submit a layout-related support ticket) — were written before launch because they shape how the feature gets instrumented, not just how it gets evaluated afterward. If we don't log the right events at build time, we can't measure what we care about post-launch.

## Key Features
- **Self-Serve Interface:** Enabling ops to manage layouts without technical tickets.
- **Real-time Preview:** Visual validation of changes before deployment.
- **Drag-and-Drop Layout Canvas with Live Percentage Feedback:** Researchers drag components from a sidebar library onto a canvas and see percentage allocations update in real time as they resize. The percentage-based model — rather than fixed pixel sizes — was a deliberate design choice: a layout that looks right on a 1920×1080 lab workstation should look right on a 1280×800 laptop without reconfiguration. This mirrors how neuroscience labs actually work — multiple computers, multiple users, one expected experience.

## Takeaways

### Reflections
- **Build to Learn, Build to Automate:** I could have written the PRD for this tool and waited for engineering bandwidth. Instead, I built the frontend prototype myself using Cursor and Claude. The decision to vibe-code it wasn't just about moving fast — it was about making a specific argument: that the interaction model for a drag-and-drop layout editor is too subtle to communicate in a written spec. You can't read your way to an intuition about how a resize handle should feel. By shipping something clickable before the PRD was finalized, I changed the quality of the conversations I was having with the engineering lead and stakeholders — we were reacting to something real, not debating something hypothetical. I now apply this pattern whenever the gap between a written spec and the actual user experience is large — which, for interaction-heavy features, it almost always is.
- **Support Queue Is a Product Backlog in Disguise:** The trigger for this tool wasn't a user interview or a survey — it was the pattern of support calls the customer success team was handling every week. Window configuration help was not a random distribution of one-off requests; it was a recurring category. When you see a support team consistently solving the same problem manually, you're looking at a missing product feature. I now treat the support queue the way a data scientist treats anomaly detection: the signal isn't the individual ticket, it's the cluster. This project reinforced that the fastest path to a high-impact product decision is often a thirty-minute conversation with the person who talks to customers every day.
- **Designing for Internal Users First Is Still Designing for Users:** This tool is launching internally before it reaches customers — which could tempt a PM to treat the internal launch as a soft launch, a stepping stone to the "real" product. I resisted that framing deliberately. Internal users — Mightex's own neuroscientists and support engineers — have the same cognitive load constraints and tolerance for friction as external customers. They will also be the ones demoing the product to customers, which means their first experience with the tool shapes how the product is presented to the market. The prototype has already been through internal demos, but the real test is hands-on use: whether someone who didn't build the tool can sit down with it, design a layout, save it, and load it without guidance. That bar — unassisted task completion by an internal user — is the same bar I'd set for an external launch, and I'm holding the internal launch to it.

## What's Next?
The internal launch is the hypothesis test: does giving researchers a visual layout editor change their behavior, or do they fall back to manual window arrangement out of habit? The instrumentation built into V1 — template save rates, shared vs. personal template ratios, editor session duration, support ticket rates — will answer this directly. If shared template adoption hits the 40% target, it tells us that the lab-wide standardization use case is real, and V1.1 should prioritize features that accelerate that behavior: template discovery, version history, and role-based permissions for lab managers who want to lock layouts for their students. If adoption is concentrated in personal templates, we shift toward making individual customization faster — smarter auto-layout suggestions, keyboard shortcuts, and preset size buttons.

The deeper product roadmap for this tool is about making it the configuration layer for the entire Turnkey Systems product line — not just for fiber photometry, but for every neuroscience domain PolyScan serves. A calcium imaging researcher needs a different default layout than a fiber photometry researcher, and a researcher presenting at a conference needs a different layout than one running a live experiment. The same visual editor, with domain-specific starter templates, can serve all of these — which means the engineering investment in the layout engine compounds across every new Turnkey application configuration we ship.

This pattern — a configuration layer that abstracts user preferences away from code — maps directly to problems that fintech products are solving right now. An underwriting platform where analysts can configure which risk signals appear in their review queue. A fraud detection dashboard where investigators build their own signal layouts based on the case type they're working. A wealth management tool where advisors arrange client data views around their own portfolio monitoring style. In each case, the product challenge is the same: expert users have a mental model of what they need to see, and the software either encodes that model for them or forces them to work around it. The layout editor's value proposition — configure once, never think about it again — travels across any domain where expert users do repetitive, high-stakes configuration work before every session.
