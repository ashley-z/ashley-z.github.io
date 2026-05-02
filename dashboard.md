# Sales Intelligence Dashboard

A Python/SQL pipeline that transformed four years of messy CRM data into actionable sales decisions.

**Prototype Showcase quote:**
> "A case study that highlights my ability to take four years of unstructured, real-world business data, design and build the full intelligence layer myself, and translate the output into commercial decisions with a measurable revenue impact."

## Overview
- **Role:** Product Manager — Designed, built, and shipped solo
- **Technologies:** Python (Pandas), SQL (PostgreSQL), Next.js, Supabase, Pipedrive API, Tremor, GitHub Actions
- **Purpose:** 0→1 internal data product — from zero analytics infrastructure to always-on sales intelligence
- **Hero Image:** /assets/dashboard.png

## The Challenge
Mightex had four years of deal history in Pipedrive and zero ability to analyze it. Management ran quarterly reviews on instinct. The data existed — buried in free-text fields, inconsistent naming conventions, and mixed currencies — structurally inaccessible.



### Key Pain Points
- **No analytics infrastructure:** Every strategic call about regions, products, and reps was made on gut feeling because nothing had ever been connected to the CRM data.
- **Unusable raw data:** Free-text notes, inconsistent entity names, and multi-currency values made the raw export analytically worthless without significant engineering work first.

## The Solution
I designed and built a full-stack internal data product — Python ETL, PostgreSQL, and a Next.js dashboard — without an engineering team. The intelligence layer classifies 4,400+ deals by use case using NLP keyword matching against free-text CRM notes, and maps geography to 11 custom regions designed around how the business actually operates. The six-tab visualization surface was structured around the decisions management needed to make, not the data that was easy to display. The output isn't just a dashboard — it's a new way for management to run quarterly reviews.

## The Process

### Pain Point Discovery
The data existed. Nobody could read it.
When I pulled the raw Pipedrive export, I understood immediately why nobody had done this before. Free-text notes, inconsistent entity names, mixed currencies, nested relational objects — it wasn't a dataset, it was an archive. The real problem wasn't missing data. It was that four years of sales signal had been accumulating in a system with no analytical layer on top of it.

What was the actual question management needed answered?
I spent time in quarterly reviews before writing a single line of code. The questions weren't technical — they were commercial: which regions are worth investing in, which products are actually winning, where are deals dying. That shaped every downstream decision about what to clean, what to classify, and what to surface.

### Design and Development
The requirements I wrote for V2 were shaped entirely by what V1 couldn't do. Three constraints drove every technical decision:
- **No engineering team? No problem.** I designed and built the full stack myself using Cursor — Python ETL, PostgreSQL schema, and a Next.js frontend. This wasn't a workaround; it was a deliberate choice. Moving fast without dependencies meant I could test analytical hypotheses in hours, not sprint cycles. The architecture stayed modular: fetch.py, clean.py, load.py — one responsibility each, fully documented for whoever inherits it.
- **What does "clean enough to trust" actually mean?** My statistics background shaped how I approached the transformation layer. Every monetary value normalized to CAD. All timestamps standardized to UTC. Entity deduplication handled before any classification runs. The standard I held myself to: if two analysts queried the same question, they'd get the same number. Analytical credibility lives or dies at the data layer.
- **Which six questions deserve a tab?** The six-tab structure wasn't arbitrary. I mapped every question from those quarterly reviews to a decision type — pipeline health, rep performance, product mix, geography, customer profile, application segment — and designed one tab per decision type. I deliberately excluded data that was interesting but didn't change a decision. Thirty-plus KPI cards used a consistent won/lost/open color language so comparisons were scannable without reading labels.
- **Where does NLP fit into a sales dashboard?** The most valuable signal was in free-text fields nobody had read analytically. I built a 14-category application taxonomy using prioritized NLP keyword matching — specific use cases resolved before broad categories, distributor revenue isolated before the classification pass. This wasn't off-the-shelf; it was designed around the actual vocabulary Mightex's sales reps used. The result: 4,400+ historically untagged deals, retroactively classified.

### Launch and Feedback
V1 proved the value. V1 also couldn't be used.
The Streamlit prototype worked analytically — it surfaced the $600K ghost deal finding and changed the conversation in the next quarterly review. Then it went to sleep. Streamlit Community Cloud sleeps after inactivity. V1 taught me what to build. It also taught me that a product nobody can reliably open isn't a product.

What does "done" mean for an internal tool?
V2 had three non-negotiable requirements shaped entirely by V1's failure modes: always-on at a stable URL, operable by the sales team without my involvement, and transferable to whoever comes after me. I wrote the ownership documentation as a required deliverable — not cleanup. How to rotate API keys, change the sync schedule, add a chart. If the handoff doc wasn't complete, the product wasn't done.

What did the data say that nobody expected?
The China finding contradicted a widely held internal belief. High lead volume, zero wins in 2025 — a channel the team felt good about was costing real time with a 0% conversion rate. The ghost deal finding reframed the entire lost-deal narrative: the #1 driver of lost revenue wasn't price or competition, it was inaction. Those two findings drove the re-engagement cadence that reduced sales cycle time by 60%.


## Key Features
- **Always-On ETL** A GitHub Actions cron pipeline syncs 4,400+ deals from Pipedrive nightly and exposes a one-click manual trigger — so the sales team owns fresh data without filing a ticket.
- **Decision-Mapped Tabs** Six tabs structured around decision types — pipeline health, rep performance, regional breakdown, product mix — not data availability, so every view answers a question management actually asks.
- **NLP Deal Classifier** A prioritized keyword taxonomy retroactively classifies every deal by research use case against free-text CRM notes — surfacing signal that four years of dropdown fields never captured.
- **Trust-First Data Layer** Currency normalization, UTC standardization, and entity deduplication run before any analysis — so two analysts querying the same question always get the same number.

## Takeaways
Building this taught me that the hardest part of a data product isn't the data — it's the decisions about what to measure, who owns it, and whether it can survive without you. These are the three calls that shaped everything.

### Reflections
- **Ship ugly, learn fast:** The Streamlit prototype was analytically right and operationally unusable — and that was the point. V1 wasn't a failure; it was the cheapest way to learn what the real product needed to be before committing to a production stack.
- **Handoff Is a Feature** Reliability and transferable ownership weren't nice-to-haves — they were the product requirements V1 proved I'd missed. I wrote the ownership documentation before I called V2 done, because a tool that only works while I'm there isn't a product.
- **The Signal Is in the Mess** The most commercially valuable insights — the ghost deals, the China finding — came from free-text fields nobody had read analytically, not from Pipedrive's structured dropdowns. Designing the extraction layer was the product decision; the dashboard was just how you saw the output

## What's Next?
The data pipeline is the foundation — the next layer is closing the feedback loop. A natural language query interface would let management ask questions the tab structure can't anticipate, but it's only worth building once usage patterns reveal which questions actually recur. The more important V3 problem is forecasting: using pipeline stage velocity and historical cycle length to project revenue forward, so quarterly reviews stop being retrospective. 

Both depend on the ETL foundation being solid — which is why building it correctly in V1 and V2 was the only priority that mattered. This is the same challenge at the center of any internal AI product: the model is only as good as the data pipeline beneath it. Getting that right first is not a detour. It is the work.
