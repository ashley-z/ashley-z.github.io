# Neuron Detection Software (PolyTrace)

Designing the product layer for a machine learning-based analysis pipeline.

**Prototype Showcase quote:**
> "A Prototype Showcase that highlights my ability to design and build a 0→1 product interface from scratch — translating a complex ML pipeline into a guided, visual workflow that closes the feedback loop expert users never had."

## Overview
- **Role:** Designer & Project Manager
- **Team:** 1 Project Manager, 1 CS Research Fellow, 1 Full Stack Engineer, 1 Neuroscientist
- **Technologies:** React, Python, CaImAn (open source analysis pipeline), TensorFlow/Keras, Cursor, Figma
- **Purpose:** 0→1 ML product; from unstable research prototype to commercially viable pipeline
- **Timeline:** 6 months

## The Challenge
Neuroscientists generate gigabytes of video per session — fluorescent signals from live brain tissue that must be processed into individual neuron traces before any analysis can happen. The standard tool for this is CaImAn, a powerful open-source library. It works, but it is not a product.

Researchers interact with it through a config file and a notebook: change a number, wait up to an hour for the pipeline to finish, inspect a static image, guess whether the settings were right, and run it again. The interface between a scientist and the algorithm is a text editor.

When I joined the project, I had a Phase 1 backend pipeline and two pilot customers ready to test it. I needed to understand why the tool wasn't working for real users — and what a product that actually served them would look like.
### Key Pain Points
- **No On-Ramp:** ~120 configuration parameters, no defaults, no guidance. Users were expected to already know everything.
- **Broken Feedback Loop:** Every parameter change required a full re-run, sometimes 40+ minutes, with no signal mid-run.
- **Unactionable Output:** Results arrived as a static image — no interactivity, no comparison, no way to course-correct.

## The Solution
PolyTrace is a six-stage guided workflow that takes a researcher from raw video upload to exportable results — replacing a text-editor interface with real-time visual feedback at every decision point. I designed and vibe-coded the full frontend in React: 40+ interactive parameters, side-by-side comparison panels, a live drawing canvas, and per-neuron result visualization.

The prototype intentionally simulates output data while keeping all parameter controls fully functional — the goal was to validate the interaction model, not build a processing server. Every design decision prioritized one thing: letting users see the effect of their choices before committing to a long, expensive compute job.

## The Process

### Pain Point Discovery
**What does "broken" actually mean to a scientist?** 
I inherited a Phase 1 backend from a University of Waterloo team and two pilot customers ready to test it. When I sat with them, the problem wasn't the algorithm — it was the absence of any product layer around it. Users were copy-pasting parameter values from academic papers with no understanding of what to change for their specific data.

**120 parameters. Zero guidance.**
I worked with our in-house neuroscientist to map every parameter to a plain-language user need — what it controls, what bad output looks like, what a sensible default should be. That audit became the design spec.

### Design and Development
**V1: design-first, engineer-dependent.**
I built the full prototype in Figma and handed it to our engineer. Thorough handoff, clean components — and three and a half weeks before I saw anything running in a browser. Feedback cycles were slow. Changes that took me ten minutes in Figma took days to surface.

**V2: why wait?**
I used FigmaMake to generate a working React scaffold from my designs, then took it into Cursor and built the rest myself — drawing canvas, parameter controls, side-by-side panels, the full six-stage flow. What used to take 1.5 months took three weeks, and I could test interactions in real time instead of describing them in a handoff doc.

- **Remove the Default:** One critical input — the neuron size slider — ships with no prefill. It shows "— px" and blocks the user from proceeding until they set it manually. The obvious design choice was a sensible default. I removed it because a wrong value here silently degrades every result downstream, and users needed to make a visual judgment on their own data rather than accept a number they didn't verify.
- **Build a Way Back In:** Results export a mask file that re-imports as a visual overlay in the earlier annotation stage. I prioritized this over additional output visualizations because iteration — not inspection — was the real workflow gap. A user who can compare two runs visually without starting from scratch trusts the tool faster than one who gets a richer single output.

### Launch and Feedback
**Ship something stable, then optimize.**
When we opened V2 to pilot customers, the primary feedback wasn't about features — it was about trust. Users wanted to know whether their settings were reasonable before running the pipeline. That validated the core design bet: visual feedback at every stage matters more than output richness.

**What I'd change.**
I'd instrument interaction data from day one — which parameter accordions users actually opened, which stages they revisited. I made progressive disclosure calls based on domain intuition. Usage data would tell me whether I was right.



## Key Features
- **Validation Checks:** All analysis parameters has boundary restrictions co-designed with in-house neuroscientists, preventing users from entering values that cause silent failures before compute time is wasted.
- **Guided Workflow:** Six sequential stages walk users from raw upload to exportable results, mirroring the algorithm's actual processing order so the product teaches the pipeline as you use it.
- **Real-time visual feedback:** Parameter changes surface as live visual feedback — displacement charts, diagnostic views, size comparison examples — so users understand the effect of a choice before committing to a full run.
- **Interactive drawing canvas:** An SVG canvas lets users manually annotate neurons on their data; circle count and average radius automatically populate the two most critical algorithm inputs downstream.

## Takeaways
PolyTrace taught me that designing for expert users isn't about simplifying — it's about building the right guardrails and feedback loops so expertise can actually flow. Every meaningful decision came down to one question: what does the user need to see before they act?

- **You Can't Design a UI for Parameters You Don't Understand:** Nobody had documented what the parameters meant in plain language — which made it impossible to set sensible defaults or reason about failure. I had to learn the domain before I could design the interface. For any AI product, understanding what the model is optimizing isn't background reading — it's the design brief.
- **Intentional Friction Is a Feature:** The neuron size slider has no default value — it shows "— px" and blocks progression until the user sets it manually. I made this call deliberately: a bad default here produces worse algorithm output, so forcing a visual judgment was the safer design. Not every field should have a prefill.
- **Close the Loop, Don't Just Show the Output** Results export a mask file that can be re-imported as an overlay in the earlier annotation stage. This lets users compare runs visually without starting from scratch — a feedback loop that didn't exist in any prior version of the tool. The most useful interface feature wasn't a visualization; it was a way back in.

## What's Next?
The prototype validates the interaction model. What it doesn't solve is everything that makes this a real product: infrastructure, pricing, and the latency problem that sits at the center of both.

**Scale changes the pricing conversation.**
Researchers record terabytes of calcium imaging data per study. AWS S3 handles storage today, but at production scale — multiple labs, multiple concurrent runs, multi-TB uploads — compute and storage costs become the core unit economics of the business. The pricing model can't be an afterthought: per-session, per-lab-seat, and consumption-based models all produce different margin profiles at different usage patterns. That decision shapes what we build next.

**The latency problem is a UX problem.**
Motion correction on a 2 GB file takes minutes. A progress spinner isn't enough — users need to see processed frames appearing in real time and catch bad parameters before a full run completes. Solving this means streaming intermediate results back to the frontend, which requires rearchitecting the backend around async processing, not just connecting a Python server.

**Trust is the real product.**
UX in scientific software isn't about aesthetics — it's about building confidence in the algorithm through transparency and guardrails. Researchers stake their findings on the output of this pipeline. How do you get a domain expert to trust a system they didn't build?