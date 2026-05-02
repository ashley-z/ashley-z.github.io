# Sales Intelligence Dashboard

A Python/SQL/Next.js pipeline that transformed four years of messy CRM data into the analytics infrastructure Mightex had never had.

**Framing quote:**
> "A case study that highlights my ability to take four years of unstructured, real-world business data, design and build the full intelligence layer myself, and translate the output into commercial decisions — surfacing signal that four years of dropdown fields never captured."

## Overview
- **Role:** Product Manager — Designed, built, and shipped solo
- **Technologies:** Python (Pandas), SQL (PostgreSQL), Next.js, Supabase, Pipedrive API, Tremor, Vercel
- **Purpose:** 0→1 internal data product; from zero analytics infrastructure to always-on sales intelligence
- **Hero Image:** /assets/dashboard.png
- **Demo:** [Live Demo](https://mightex-sales-demo.vercel.app/)

---

## The Challenge

Mightex's primary revenue is hardware — scientific imaging equipment sold to neuroscience research labs. As PM for the software product, I wanted to understand our customers: who was buying, which research applications were driving deals, and whether our software users were academic labs or industrial. When I asked the sales team, the answers were always the same: "It's in our head" or "It's in the email chains." When I asked the sales manager how she knew which application a customer was researching, she said: "We just know."

The problem was bigger than my original question. Four years of deal history existed in Pipedrive — notes, contacts, pipeline stages — but none of it had ever been connected to an analytical layer. Sales reviews happened once a year, driven by instinct and a manually rebuilt spreadsheet. The data was there. The infrastructure to read it wasn't.

### Key Pain Points

**No Application Data** — Research application — the dimension management cared about most — existed only in free-text rep notes, with no structured field anywhere in four years of CRM data.

**Excel-Only Reviews** — The sales manager ran one annual review from a manually-updated spreadsheet she rebuilt from scratch each time, with no ability to filter, compare years, or ask follow-up questions.

**Invisible Loss Patterns** — Nearly $3M in deals lost to ghosted prospects over three years was hiding in the lost_reason field — a structural pattern nobody had ever aggregated.

---

## The Solution

I designed and built a full-stack internal data product — Python ETL pipeline, PostgreSQL database, and a Next.js dashboard — solo, without an engineering team. An NLP keyword taxonomy retroactively classifies 4,400+ historical deals by research application against free-text CRM notes, creating a structured field that had never existed. The three-tab surface is structured entirely around the decisions the sales manager makes in a quarterly review, not around the data that was easiest to display. The dashboard now replaces the manually-updated Excel sheet as the source of truth for quarterly review preparation — always-on, filterable by year, and operable without my involvement.

---

## The Process

### Pain Point Discovery

I didn't set out to build a sales dashboard. I set out to understand who was using Mightex's software. I started asking questions across the sales and support team — who are these customers, what are they researching, which ones are paying for a pro license? Every answer pointed to the same gap: knowledge lived in people's heads and email chains, not in any system. When I asked how sales reviews were run, I found a once-a-year process driven by a manually rebuilt spreadsheet. I spent time in those reviews before writing any code. The questions management needed answered — which regions to invest in, which products were winning, where deals were dying — had no reliable answers because the infrastructure to produce them didn't exist. That conversation defined every downstream decision about what to clean, classify, and surface.

### Design and Development

I pulled the raw Pipedrive export — four years of deals, inconsistent naming, mixed currencies, free-text fields — and built the cleaning layer first. Every value normalized to CAD, timestamps to UTC, entity deduplication before any classification ran. Then I built the NLP taxonomy and the Streamlit prototype, and showed it to the sales manager. That conversation reshaped everything I thought I'd built.

**Clean enough to trust**
My statistics background set the bar: if two analysts queried the same question, they had to get the same number. Currency normalization, UTC standardization, and deduplication weren't setup steps — they were the product's credibility.

**Decision-Mapped Tabs**
V1 had six tabs built around data availability. After sitting down with the sales manager, I cut to three — Revenue, Pipeline, Performance — each defined by a quarterly review decision, not a data category.

**Integrated Tooltips**
Watching someone use V1 revealed the failure: charts showed numbers but not what the numbers meant. Every KPI and chart in V2 has tooltip text answering "what does this measure and why does it matter."

**Modular Infrastructure**
Streamlit was the wrong choice for always-on access. I planned the full stack before V2: Python ETL with modular fetch/clean/load, PostgreSQL on Supabase, and Next.js on Vercel.

### Launch and Feedback

V1 proved the analytical value — the ghost deal finding changed the conversation at the next quarterly review. It also exposed every infrastructure failure: Streamlit's 24-hour sleep, six tabs nobody asked for, charts with no explanations. V1 wasn't a failed product. It was the cheapest way to learn what the real product needed to be before committing to a production stack. V2 was built entirely from those failure modes. The sales manager now uses the dashboard to prepare her quarterly review presentations. I wrote the ownership handoff documentation — how to sync data, add a user, rotate API keys — before calling V2 done.

---

## Key Features

**Header Alert Pill** — A persistent three-signal summary (won revenue, weighted forecast, overdue deals at risk) sits above the tabs and updates with the year filter, so users arrive oriented before clicking anything.

**Decision-Mapped Tabs** — Three tabs structured around quarterly review decisions — Revenue, Pipeline, Performance — not data availability; everything that didn't answer one of those three questions was cut.

**NLP Deal Classifier** — A prioritized keyword taxonomy retroactively classifies 4,400+ deals by research application against free-text CRM notes, creating a structured field that had never existed in four years of Pipedrive data.

**Metric Tooltips** — Every KPI card and chart carries an ⓘ tooltip answering what it measures and why it matters, so the dashboard is usable in a quarterly review without any narration from me.

---

## Takeaways

Building this taught me that the hardest part of a data product isn't the data — it's the decisions about what to measure, who owns it, and whether it works without you.

**Ship it wrong, then ask the right question** — I built V1 on assumptions about what six tabs should contain, showed it to the sales manager, and learned the product I'd built wasn't the one she needed; the most important work happened in the conversation after V1 shipped, not before.

**The mess is where the signal lives** — The most commercially valuable dimension — research application — existed only in four years of free-text notes; choosing to extract from the mess rather than create a new clean field going forward was the product decision that made the historical analysis possible.

**Handoff is a feature, not cleanup** — A tool that only runs while I'm maintaining it isn't a product; I wrote the ownership documentation before calling V2 done, because reliability and transferability were requirements V1 proved I'd missed.

---

## What's Next

The ETL pipeline and classification layer are the foundation — the next layer is closing the feedback loop. The most important unsolved problem is that the NLP classifier is static: if a rep introduces new terminology or a product category changes, the taxonomy needs a manual update. A V3 direction worth building is a lightweight review interface where the sales manager flags misclassified deals and corrections improve the taxonomy over time — turning a static artifact into something that gets better with use.

The longer-term problem is forecasting. The dashboard is retrospective — it tells you what happened and what the pipeline looks like now, but not what revenue is likely to close next quarter. Using stage velocity and historical cycle length to project forward would transform quarterly reviews from retrospectives into planning tools.

This architecture — a structured intelligence layer on top of messy operational data, designed around the decisions a specific user needs to make — maps directly to fintech: fraud review interfaces where analysts act on model output, underwriting tools where risk signals need plain-language surfacing, spend categorization where classification accuracy has direct revenue consequences. The domain changes. The problem structure doesn't.
