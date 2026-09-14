/**
 * PROMPTDOCK — Windows 11 Desktop PWA
 * Core Application Logic (Vanilla ES6 Modular Architecture)
 * 100% Offline • Zero External Dependencies • Microsoft Store Ready
 */

// ==========================================================================
// 1. DEFAULT SAMPLE DATA (12 High-Value AI Prompts)
// ==========================================================================
const DEFAULT_CATEGORIES = [
  'Coding',
  'SEO',
  'Copywriting',
  'Marketing',
  'Midjourney',
  'YouTube',
  'Shopee',
  'Business',
  'Productivity',
  'ChatGPT',
  'Claude',
  'Gemini',
  'Other'
];

const INITIAL_PROMPTS = [
  {
    id: 'pd-sample-01',
    title: 'YouTube Documentary Scriptwriter (10-Minute High RPM)',
    category: 'YouTube',
    tags: ['youtube', 'documentary', 'rpm', 'storytelling', 'retention'],
    favorite: true,
    createdAt: 1726000000000,
    updatedAt: 1726000000000,
    inTrash: false,
    content: `Act as an elite YouTube documentary scriptwriter and retention director who writes scripts for channels like MagnatesMedia, James Jani, and Moon.

Your task is to write a compelling 10-minute documentary script on the topic: [INSERT TOPIC HERE].

Structure & Guidelines:
1. COLD OPEN & HOOK (0:00 - 0:45):
   - Start in media res with high stakes, paradox, or a jaw-dropping question.
   - Zero fluff, no "welcome back to the channel".
   - Introduce the central conflict and the villain/obstacle.
2. CHAPTER 1: THE ILLUSION OF SUCCESS (0:45 - 3:00):
   - Backstory and initial rise.
   - Pacing: Add a sensory detail or pattern interrupt every 30 seconds.
3. CHAPTER 2: THE CRUMBLING EMPIRE (3:00 - 6:00):
   - The turning point, hidden flaws, betrayal, or fatal mistakes.
4. CHAPTER 3: THE CLIMAX & FALL (6:00 - 8:30):
   - The dramatic explosion of consequences. Fast-paced narrative.
5. CHAPTER 4 & EPILOGUE: THE MORAL LESSON (8:30 - 10:00):
   - Universal insight, psychological takeaway, and memorable final quote.

Formatting instructions:
- Include visual cues in brackets [VISUAL: Cinematic drone shot of Wall Street in heavy rain].
- Include sound effect cues in brackets [SFX: Bass drop, typewriter clacking].
- Use punchy, conversational yet authoritative English.`
  },
  {
    id: 'pd-sample-02',
    title: 'Senior Software Architect: Production Code Review & Refactor',
    category: 'Coding',
    tags: ['coding', 'architecture', 'refactor', 'clean-code', 'solid'],
    favorite: true,
    createdAt: 1726001000000,
    updatedAt: 1726001000000,
    inTrash: false,
    content: `You are a Principal Software Architect with 15+ years of experience in distributed systems, clean architecture, and performance engineering.

Please analyze and refactor the following code snippet:
\`\`\`[LANGUAGE]
[INSERT CODE HERE]
\`\`\`

Evaluate and provide your review according to these 5 pillars:
1. SOLID & Clean Architecture:
   - Identify coupling, lack of cohesion, or leaky abstractions.
2. Performance & Memory Efficiency:
   - Time & space complexity analysis (Big-O).
   - Bottlenecks, unnecessary allocations, or blocking operations.
3. Error Handling & Edge Cases:
   - Concurrency bugs, race conditions, null-safety, and network failures.
4. Production-Ready Refactor:
   - Provide the complete, refactored code without placeholder comments.
   - Include TypeScript types or strict type annotations where applicable.
5. Unit Test Suite:
   - Write comprehensive tests covering happy paths and at least 3 edge cases.`
  },
  {
    id: 'pd-sample-03',
    title: 'E-Commerce / Shopee High-Converting Product Description (AIDA Framework)',
    category: 'Shopee',
    tags: ['shopee', 'ecommerce', 'copywriting', 'aida', 'sales'],
    favorite: false,
    createdAt: 1726002000000,
    updatedAt: 1726002000000,
    inTrash: false,
    content: `Act as a Top 1% E-commerce Copywriting Specialist for Shopee, Amazon, and Lazada, specialized in maximizing Conversion Rates (CR) and product SEO.

Write an irresistible product description for:
- Product Name: [PRODUCT NAME]
- Target Audience: [TARGET AUDIENCE]
- Core Value Proposition / USPs: [3 MAIN USPs]

Copywriting Structure & Requirements:
1. SEO TITLE (Under 120 characters):
   [Brand] + [Core Product Name] + [Key Feature / Benefit] + [Model/Spec/Color]
2. HOOK & PAIN POINT (ATTENTION):
   - Hook the buyer within the first 2 sentences by targeting their primary frustration or desire.
3. SOLUTION & VALUE STACK (INTEREST & DESIRE):
   - Highlight 5-7 distinct features paired with emotional/practical REAL BENEFITS (use engaging emojis).
   - "Why choose us over generic alternatives on the market?" comparison.
4. DETAILED SPECIFICATION TABLE:
   - Dimensions, materials, origin, warranty, package inclusions.
5. IRONCLAD GUARANTEE & TRUST BADGES:
   - 100% authentic guarantee, hassle-free 7-day returns, dedicated customer support.
6. URGENCY-DRIVEN CALL TO ACTION (ACTION):
   - Claim flash sale vouchers, limited stock alert, immediate checkout prompt.`
  },
  {
    id: 'pd-sample-04',
    title: 'Viral TikTok & Reels 3-Second Hook Master',
    category: 'Marketing',
    tags: ['marketing', 'tiktok', 'reels', 'hook', 'viral'],
    favorite: true,
    createdAt: 1726003000000,
    updatedAt: 1726003000000,
    inTrash: false,
    content: `You are a viral short-form video strategist who has generated over 100M+ views across TikTok, Instagram Reels, and YouTube Shorts.

Generate 10 viral hook formulas for this topic/product: [INSERT TOPIC/PRODUCT].

Categorize the 10 hooks into these psychological buckets:
1. The Negative Frame ("Stop doing X if you want Y")
2. The Contrarian Belief ("Why everything you've been told about X is a lie")
3. The Secret / Insider Knowledge ("What [Industry] insiders won't tell you")
4. The Visual Pattern Interrupt ("Watch this happen in 5 seconds...")
5. The High Stakes Curiosity Gap ("This one mistake cost me $10,000...")

For each hook provide:
- Spoken Audio (First 3 seconds, under 12 words)
- On-Screen Text Overlay (Short, punchy, high contrast)
- Physical Action / B-Roll cue (What visual movement happens on screen simultaneously)`
  },
  {
    id: 'pd-sample-05',
    title: 'Gemini Deep Research & Critical Multi-Angle Synthesis',
    category: 'Gemini',
    tags: ['gemini', 'research', 'analysis', 'critical-thinking'],
    favorite: false,
    createdAt: 1726004000000,
    updatedAt: 1726004000000,
    inTrash: false,
    content: `You are an elite Research Fellow and Multidisciplinary Analyst.

Conduct an exhaustive, evidence-based investigation into: [INSERT TOPIC OR HYPOTHESIS].

Structure your research report as follows:
1. EXECUTIVE SUMMARY:
   - Core premise, key findings, and high-confidence conclusions.
2. CURRENT CONSENSUS & DATA LANDSCAPE:
   - Synthesize established facts, metrics, and empirical data points.
3. CONTRARIAN & ALTERNATIVE THEORIES:
   - What do critics, dissenting scientists, or rival market players argue?
   - Identify cognitive biases or funding conflicts in mainstream views.
4. FIRST-PRINCIPLES BREAKDOWN:
   - Deconstruct the problem down to fundamental physical/economic truths.
5. SCENARIO FORECASTING (Next 1, 3, and 5 Years):
   - Bull case, Bear case, Base case with key triggers to monitor.
6. ACTIONABLE STRATEGIC RECOMMENDATIONS:
   - What decision should a founder/investor/operator make today based on this data?`
  },
  {
    id: 'pd-sample-06',
    title: 'Claude Artifacts: Zero-Dependency Interactive Web App',
    category: 'Claude',
    tags: ['claude', 'artifacts', 'frontend', 'html5', 'javascript'],
    favorite: true,
    createdAt: 1726005000000,
    updatedAt: 1726005000000,
    inTrash: false,
    content: `You are an expert Frontend Architect specializing in building self-contained, interactive single-file web applications (Claude Artifacts).

Create a complete, fully functional single-file web application for: [DESCRIBE APP FUNCTIONALITY].

Strict Technical Requirements:
1. Self-contained in a single HTML file containing all HTML, CSS, and JavaScript.
2. Zero external libraries, frameworks, or CDNs (no Tailwind, React, jQuery, or Google Fonts).
3. Design System:
   - Modern dark/light glassmorphic UI.
   - Smooth 60fps micro-interactions with CSS variables.
   - High accessibility with focus states, keyboard shortcuts, and ARIA attributes.
4. Code Quality:
   - Modular ES6 JavaScript with pure functions and clean state management.
   - Data persistence using localStorage where appropriate.
   - Robust input validation and edge-case handling.
5. Deliver complete, production-ready code with no truncation or placeholders.`
  },
  {
    id: 'pd-sample-07',
    title: 'ChatGPT Super-Prompt: Recursive Chain-of-Thought Meta Persona',
    category: 'ChatGPT',
    tags: ['chatgpt', 'meta-prompt', 'chain-of-thought', 'reasoning'],
    favorite: false,
    createdAt: 1726006000000,
    updatedAt: 1726006000000,
    inTrash: false,
    content: `You are an Autonomous Expert Problem-Solver operating in Recursive Chain-of-Thought mode.

When I provide you with a problem, follow this exact cognitive execution framework:

[PHASE 1: PROBLEM DECONSTRUCTION]
- Restate the problem in your own words to verify comprehension.
- Identify hidden assumptions, ambiguity, and constraints.
- Define what a 10/10 perfect solution looks like.

[PHASE 2: DIVERGENT EXPLORATION]
- Brainstorm 3 distinct strategic avenues:
  * Avenue A: The standard industry best practice.
  * Avenue B: The unconventional / radical high-leverage approach.
  * Avenue C: The minimal viable 80/20 approach.

[PHASE 3: ADVERSARIAL CRITIQUE]
- Play devil's advocate against each avenue. Where will it fail under stress?

[PHASE 4: CONVERGENT SYNTHESIS & EXECUTION]
- Select the optimal hybrid path.
- Provide the step-by-step implementation with exact deliverables, metrics, and contingencies.

Problem to solve: [INSERT PROBLEM HERE]`
  },
  {
    id: 'pd-sample-08',
    title: 'Meta / Facebook Ads: 5 High-Converting Copy Angles',
    category: 'Marketing',
    tags: ['marketing', 'facebook-ads', 'copywriting', 'direct-response'],
    favorite: false,
    createdAt: 1726007000000,
    updatedAt: 1726007000000,
    inTrash: false,
    content: `You are a Direct Response Copywriter who has managed over $5M in Meta Ad spend with an average ROAS of 3.8x.

Write 5 distinct ad copy variations for:
- Product/Service: [PRODUCT/SERVICE]
- Target Audience: [TARGET AUDIENCE]
- Main Offer: [OFFER / GUARANTEE]

The 5 Angles to produce:
1. ANGLE 1: AGITATE PAIN POINT (Focus on frustration, wasted time, lost money).
2. ANGLE 2: SOCIAL PROOF & CASE STUDY (Real-world transformation story).
3. ANGLE 3: US VS. THEM (Why traditional solutions fail and why this is different).
4. ANGLE 4: LOGICAL / ROI BREAKDOWN (Numbers, metrics, undeniable math).
5. ANGLE 5: CURIOSITY & DISCOVERY (The surprising trick/method).

For each angle provide:
- Primary Text (Hook line + Body copy + Call to action)
- Headline (Under 6 words, high click-through-rate)
- Description (Urgency / Social proof snippet)
- Suggested Ad Creative / Visual concept`
  },
  {
    id: 'pd-sample-09',
    title: 'Python Automation & Robust Web Scraping Engine',
    category: 'Coding',
    tags: ['coding', 'python', 'automation', 'scraping', 'asyncio'],
    favorite: false,
    createdAt: 1726008000000,
    updatedAt: 1726008000000,
    inTrash: false,
    content: `Write a robust, production-ready Python automation script to scrape and process data from: [INSERT TARGET URL / OBJECTIVE].

Strict Specifications:
1. Use \`httpx\` or \`aiohttp\` for async requests with concurrency throttling.
2. Anti-blocking resilience:
   - Realistic user-agent rotation.
   - Exponential backoff retry logic (using tenacity or custom decorator).
   - Polite rate-limiting between requests.
3. Parsing & Validation:
   - Use BeautifulSoup4 or Selectolax for high-speed parsing.
   - Validate extracted data using Pydantic models.
4. Storage:
   - Clean export to both UTF-8 CSV and JSONL formats.
5. Error Logging & Observability:
   - Rich logging with timestamps, error traceback, and progress bar (tqdm).
6. Provide clear pip requirements and execution instructions.`
  },
  {
    id: 'pd-sample-10',
    title: 'Live Commerce Sales Script: High-Converting FOMO & Flash Closing',
    category: 'Shopee',
    tags: ['shopee', 'livestream', 'sales', 'fomo', 'ecommerce'],
    favorite: false,
    createdAt: 1726009000000,
    updatedAt: 1726009000000,
    inTrash: false,
    content: `You are a Professional Live Commerce Director & Host for Shopee Live and TikTok Shop, renowned for breaking record 6-figure revenue streams per session.

Construct a high-retention live sales script for: [PRODUCT NAME]
Duration: 15-Minute Recurring Cycle Block (repeatable throughout the livestream).

Structure the 15-minute pitch into 6 psychological sales phases:
1. MINUTES 01 - 03: THE VIRAL HOOK & ENGAGEMENT BURST:
   - High-energy opening hook, pin-drop question, coin giveaway / mini-game incentive to drive comments and algorithm rank.
2. MINUTES 04 - 07: LIVE PRODUCT DEMONSTRATION & PAIN-RELIEF TEST:
   - Hands-on physical demonstration. Direct contrast test: "Cheap counterfeit vs. our premium authentic build".
3. MINUTES 08 - 10: THE UNBEATABLE VALUE BUNDLE (Price Anchor):
   - Reveal standard MSRP -> Stack high-perceived-value bonus gifts -> Drop exclusive Live-Only pricing.
4. MINUTES 11 - 13: COUNTDOWN FOMO & SCARCITY TRIGGER:
   - "Only 15 promotional units allocated today by the sponsor". Sound effect countdown.
5. MINUTES 14 - 15: CART CLOSING & REALTIME ORDER SHOUTOUTS:
   - Call out order confirmations by username in real-time. Direct viewers to click the glowing cart button before price resets.`
  },
  {
    id: 'pd-sample-11',
    title: 'Academic Literature Review & Research Gap Matrix',
    category: 'ChatGPT',
    tags: ['chatgpt', 'academic', 'research', 'literature-review'],
    favorite: false,
    createdAt: 1726010000000,
    updatedAt: 1726010000000,
    inTrash: false,
    content: `You are a Senior Academic Researcher and Peer Reviewer for top-tier peer-reviewed journals.

Assist me in creating a structured Literature Review on the research topic: [INSERT RESEARCH TOPIC].

Deliverables required:
1. THEMATIC CLUSTERING:
   - Group existing scholarly knowledge into 3-4 distinct thematic streams.
2. METHODOLOGICAL COMPARISON MATRIX:
   - Table comparing: Author(s) | Methodology (Qual/Quant/Mixed) | Sample Size | Key Finding | Inherent Limitations.
3. CRITICAL EVALUATION:
   - Synthesize debates, contradictions, and unresolved tensions between major studies.
4. RESEARCH GAP IDENTIFICATION:
   - Explicitly formulate 3 unanswered research questions where current literature is deficient.
5. THEORETICAL FRAMEWORK PROPOSAL:
   - Suggest a novel theoretical lens to bridge the identified research gaps.`
  },
  {
    id: 'pd-sample-12',
    title: 'Grok Realtime News Fact-Checking & Bias Deconstructor',
    category: 'Other',
    tags: ['other', 'grok', 'fact-check', 'news', 'neutrality'],
    favorite: false,
    createdAt: 1726011000000,
    updatedAt: 1726011000000,
    inTrash: false,
    content: `You are an Objective Fact-Checking Engine and Media Bias Analyst operating with zero partisan bias.

Analyze the following claim / breaking news headline:
"[INSERT NEWS HEADLINE OR CONTROVERSIAL CLAIM]"

Run the analysis through this rigorous verification framework:
1. TRUTH SCORE ASSESSMENT:
   - Rate the claim: [Verified True | Mostly True | Half True | Misleading | False | Unsubstantiated].
2. SOURCE TRACEABILITY & TIMELINE:
   - Where did this claim originate? Trace the first verifiable primary source vs echo chambers.
3. CONTEXT & OMITTED FACTS:
   - What critical facts or nuance did the headline deliberately omit to create outrage or clickbait?
4. MEDIA BIAS & FRAMING BREAKDOWN:
   - Compare how left-leaning, right-leaning, and independent outlets framed this same event.
5. BOTTOM-LINE SUMMARY:
   - A single, neutral 30-word factual summary suitable for an encyclopedia.`
  },
  {
    id: 'pd-sample-13',
    title: 'Midjourney v6 Photorealistic Editorial Portrait',
    category: 'Midjourney',
    tags: ['midjourney', 'portrait', 'photography', 'lighting', 'realism'],
    favorite: true,
    createdAt: 1726012000000,
    updatedAt: 1726012000000,
    inTrash: false,
    content: `Act as a world-class prompt engineer specializing in Midjourney v6 and commercial studio photography.

Generate a hyper-realistic editorial portrait prompt for:
- Subject Description: [SUBJECT DESCRIPTION]
- Lighting Setup: [LIGHTING SETUP]
- Mood / Aesthetic: [MOOD OR AESTHETIC]
- Camera & Lens: [CAMERA AND LENS]

Output Requirements:
1. RAW MIDJOURNEY PROMPT:
   A clean, copy-pasteable prompt string starting with the main subject, followed by lighting, camera sensor, lens millimeters (e.g. 85mm f/1.4), film stock, and technical parameters (--ar 16:9 --style raw --v 6.0).
2. LIGHTING BREAKDOWN:
   Explain the key light, fill light, and rim/kicker light positioning.
3. COLOR PALETTE:
   List 4 hex colors that harmonize with this visual concept.
4. NEGATIVE PROMPT / EXCLUSIONS:
   Provide parameters to avoid plastic skin, extra limbs, or distorted eyes (--no ...).`
  },
  {
    id: 'pd-sample-14',
    title: 'Midjourney 3D Isometric Low-Poly Game Diorama',
    category: 'Midjourney',
    tags: ['midjourney', 'isometric', '3d', 'game-dev', 'blender'],
    favorite: false,
    createdAt: 1726013000000,
    updatedAt: 1726013000000,
    inTrash: false,
    content: `Act as a Senior 3D Concept Artist specializing in low-poly isometric dioramas and stylized video game environments.

Create an exquisite Midjourney prompt for:
- Environment Theme: [ENVIRONMENT THEME]
- Art Style: [ART STYLE]
- Time of Day / Atmosphere: [TIME OF DAY]

Structure the response:
1. COMPLETE PROMPT:
   Isometric cutaway 3D diorama of [ENVIRONMENT THEME], [ART STYLE] style, rendered in Blender and Octane Render, clean tilt-shift focal blur, soft ambient occlusion, pastel color palette, volumetric lighting, raytracing, 8k resolution --ar 1:1 --v 6.0 --stylize 250
2. 3 LIGHTING VARIATIONS:
   Provide prompt suffixes for: Sunset Golden Hour, Cyberpunk Neon Rain, and Cozy Snowstorm.
3. ASSET BREAKDOWN:
   List 5 micro-props that will make this diorama feel lived-in and charming.`
  },
  {
    id: 'pd-sample-15',
    title: 'DALL-E 3 Modern Minimalist Vector Logo & Branding Suite',
    category: 'Midjourney',
    tags: ['midjourney', 'dalle3', 'logo', 'branding', 'minimalist'],
    favorite: false,
    createdAt: 1726014000000,
    updatedAt: 1726014000000,
    inTrash: false,
    content: `You are a Principal Brand Identity Designer for Silicon Valley tech startups and luxury brands.

Generate 4 distinct DALL-E 3 logo design prompts for:
- Brand Name: [BRAND NAME]
- Industry / Product: [INDUSTRY OR PRODUCT]
- Core Brand Emotion: [CORE BRAND EMOTION]

Design Directions to generate:
1. GEOMETRIC MONOGRAM:
   Flat 2D vector logo featuring the initials of [BRAND NAME], Swiss style graphic design, golden ratio grid, pure white background, zero drop shadows.
2. ABSTRACT SYMBOL:
   Modern tech logo representing [CORE BRAND EMOTION], negative space cleverness, corporate tech aesthetic, clean typography.
3. MASCOT / LINE ART:
   Minimalist continuous line art emblem, sophisticated, timeless aesthetic.
4. WORDMARK CONCEPT:
   Custom modern sans-serif typographic mark with an unexpected letterform twist.`
  },
  {
    id: 'pd-sample-16',
    title: 'Top 1 Google Ranking SEO Pillar Content Architect',
    category: 'SEO',
    tags: ['seo', 'content', 'google-ranking', 'pillar-page', 'eeat'],
    favorite: true,
    createdAt: 1726015000000,
    updatedAt: 1726015000000,
    inTrash: false,
    content: `You are an Elite SEO Strategist and Google E-E-A-T Auditor who has ranked over 500+ articles in the #1 position on Google SERP.

Construct an exhaustive, publication-ready SEO pillar content outline for:
- Primary Keyword: [PRIMARY KEYWORD]
- Secondary Keywords: [SECONDARY KEYWORDS]
- Target Audience: [TARGET AUDIENCE]
- Search Intent: [SEARCH INTENT]

Deliver the following architecture:
1. SERP COMPETITOR DECONSTRUCTION:
   - Identify the top 3 weaknesses in current ranking competitor pages.
2. TITLE TAG & META DESCRIPTION:
   - 3 CTR-optimized title tags (under 60 chars) with high click-intent.
   - 2 Meta descriptions (under 155 chars) with active CTA.
3. COMPREHENSIVE OUTLINE (H1, H2, H3, H4):
   - Design a logical information hierarchy ensuring zero keyword cannibalization.
   - Embed semantic LSI keywords naturally in subheadings.
4. FEATURED SNIPPET SNIPER SECTION:
   - Provide a 45-word direct answer box specifically designed to capture Position 0.
5. INTERNAL LINKING & CONVERSION STRATEGY:
   - Recommend anchor texts and contextual placements to drive lead conversion.`
  },
  {
    id: 'pd-sample-17',
    title: 'Technical SEO Audit & Core Web Vitals Fix Blueprint',
    category: 'SEO',
    tags: ['seo', 'technical-seo', 'core-web-vitals', 'performance', 'crawlability'],
    favorite: false,
    createdAt: 1726016000000,
    updatedAt: 1726016000000,
    inTrash: false,
    content: `You are a Senior Technical SEO Consultant and Web Performance Engineer.

Diagnose and provide remediation steps for:
- Website Domain / Architecture: [WEBSITE DOMAIN OR TECH STACK]
- Primary Technical Issue: [PRIMARY TECHNICAL ISSUE]
- Target Market / Scale: [TARGET MARKET OR SCALE]

Provide an actionable technical remediation plan:
1. ROOT CAUSE ANALYSIS:
   - Technical breakdown of why [PRIMARY TECHNICAL ISSUE] occurs in this stack.
2. CORE WEB VITALS (CWV) OPTIMIZATION:
   - LCP (Largest Contentful Paint): Asset preloading, critical CSS, and CDN caching strategies.
   - INP (Interaction to Next Paint): Main thread unblocking and long-task decomposition.
   - CLS (Cumulative Layout Shift): Aspect ratio reservation and dynamic font-display swap.
3. CRAWLABILITY & INDEXATION AUDIT:
   - Robots.txt directives, XML sitemap prioritization, and canonical tag validation.
4. SCHEMA.ORG JSON-LD MARKUP:
   - Provide complete, valid structured data code for rich snippet eligibility.`
  },
  {
    id: 'pd-sample-18',
    title: 'High-Converting SaaS Landing Page Hero Section & Copywriting',
    category: 'Copywriting',
    tags: ['copywriting', 'saas', 'landing-page', 'conversion', 'cro'],
    favorite: true,
    createdAt: 1726017000000,
    updatedAt: 1726017000000,
    inTrash: false,
    content: `You are a World-Class Conversion Rate Optimization (CRO) Copywriter who has rewritten landing pages for Stripe, Linear, and Notion.

Write a high-converting Landing Page Hero Section for:
- SaaS Product: [SAAS PRODUCT NAME]
- One-Sentence Value Proposition: [ONE SENTENCE VALUE PROP]
- Ideal Customer Persona (ICP): [IDEAL CUSTOMER PERSONA]
- Competitor Disadvantage: [COMPETITOR DISADVANTAGE]

Output the following conversion assets:
1. THE VALUE-STACKED HERO SECTION:
   - Eye-Catching Pre-Headline (Pill Badge)
   - Primary Headline (Under 8 words, focus on outcome, not features)
   - Subheadline (2 punchy sentences addressing skepticism)
   - Primary CTA Button + Microcopy (e.g. "Start free 14-day trial • No credit card required")
   - Social Proof Bar (Logo placement suggestions + star rating quote)
2. 3-PART FEATURE BENEFIT TRIAD:
   - Feature 1: The Speed Advantage (Save hours)
   - Feature 2: The Collaboration Advantage (Frictionless workflow)
   - Feature 3: The Intelligence Advantage (Automated insights)
3. INTERACTIVE PRODUCT UI MOCKUP SUGGESTIONS:
   - What visual animation should appear beside the hero copy to demonstrate instant value?`
  },
  {
    id: 'pd-sample-19',
    title: 'Cold Email Outreach: 85%+ Open Rate & Booking Machine',
    category: 'Marketing',
    tags: ['marketing', 'cold-email', 'sales', 'outreach', 'b2b'],
    favorite: false,
    createdAt: 1726018000000,
    updatedAt: 1726018000000,
    inTrash: false,
    content: `You are a B2B Sales Development Expert who has generated $10M+ in pipeline via cold email campaigns.

Write a 3-step cold email sequence targeting:
- Prospect Title: [PROSPECT TITLE]
- Target Industry: [TARGET INDUSTRY]
- My Offer / Solution: [MY OFFER OR SOLUTION]
- Key Metric / Case Study: [KEY METRIC OR CASE STUDY]

Strict Guidelines:
- Under 90 words per email. Zero corporate buzzwords.
- Soft, friction-free calls to action (no "book 30 minutes on my calendar").
- Conversational tone like an email sent from an iPhone.

Output the 3-step sequence:
1. EMAIL 1 (THE RELEVANT OBSERVATION):
   - Subject line: 2-3 words all lowercase.
   - Opening: Specific trigger/observation.
   - The Offer + Case Study proof point.
   - Low-friction interest question.
2. EMAIL 2 (VALUE ADD / ASSET DROP):
   - Sent 3 days later: Free resource or breakdown related to [TARGET INDUSTRY].
3. EMAIL 3 (POLITE PERMISSION TO CLOSE THE FILE):
   - Professional breakup email that consistently generates a 22% reply rate.`
  },
  {
    id: 'pd-sample-20',
    title: 'Full-Stack REST API & Database Schema Generator',
    category: 'Coding',
    tags: ['coding', 'api', 'backend', 'database', 'rest'],
    favorite: false,
    createdAt: 1726019000000,
    updatedAt: 1726019000000,
    inTrash: false,
    content: `You are a Principal Backend Architect specializing in high-throughput RESTful APIs, relational databases, and clean system design.

Design a complete REST API specification and database schema for:
- Application Domain: [APPLICATION DOMAIN]
- Primary Entities: [PRIMARY ENTITIES]
- Tech Stack: [TECH STACK]

Deliverables:
1. RELATIONAL DATABASE SCHEMA (PostgreSQL / SQLite):
   - Tables with primary keys, foreign key constraints, indexes, and updated_at triggers.
   - Provide the complete, error-free SQL DDL script.
2. RESTFUL API ENDPOINT MATRIX:
   - HTTP Method | Route | Request Body Schema | Expected Status Codes.
   - Cover full CRUD operations and at least 2 batch/search endpoints.
3. DATA ACCESS LAYER IMPLEMENTATION:
   - Write idiomatic repository or ORM queries for [TECH STACK] with pagination and input sanitization.
4. SECURITY & AUTHENTICATION:
   - JWT validation, role-based access control (RBAC), and rate-limiting middleware.`
  },
  {
    id: 'pd-sample-21',
    title: 'TypeScript & React Clean Architecture Component Suite',
    category: 'Coding',
    tags: ['coding', 'typescript', 'react', 'frontend', 'clean-code'],
    favorite: false,
    createdAt: 1726020000000,
    updatedAt: 1726020000000,
    inTrash: false,
    content: `You are a Senior Frontend Engineer and React Core Contributor.

Develop a production-grade, highly accessible UI component for:
- Component Name / Purpose: [COMPONENT PURPOSE]
- State & Interaction Requirements: [STATE AND INTERACTION]
- Styling Approach: [STYLING APPROACH]

Strict Engineering Specifications:
1. Strict TypeScript interfaces for all Props, Events, and State.
2. Accessibility (WAI-ARIA):
   - Full keyboard navigation (Tab, Arrow keys, Enter, Escape).
   - Proper aria-expanded, aria-selected, and role attributes.
3. Custom Hook Separation:
   - Extract all business logic into a headless custom hook (e.g. useComponentLogic).
4. Error Boundary & Edge Cases:
   - Handling loading states, empty collections, and network failures.
5. Unit Tests (React Testing Library / Jest):
   - Assert user interactions, keyboard shortcuts, and state transitions.`
  },
  {
    id: 'pd-sample-22',
    title: 'SQL Query Optimizer, Indexing & Deadlock Resolution',
    category: 'Coding',
    tags: ['coding', 'sql', 'database', 'performance', 'indexing'],
    favorite: false,
    createdAt: 1726021000000,
    updatedAt: 1726021000000,
    inTrash: false,
    content: `You are a Database Administrator (DBA) and Query Optimization Specialist with expertise in PostgreSQL and MySQL internals.

Analyze and optimize this slow query:
[SLOW SQL QUERY]

Database Context:
- Table Size / Row Count: [TABLE SIZE OR ROW COUNT]
- Execution Engine: [DATABASE ENGINE]

Provide an exhaustive optimization plan:
1. EXPLAIN ANALYZE BREAKDOWN:
   - Identify sequential scans, expensive nested loops, or disk-based spill sorts.
2. QUERY REWRITE:
   - Provide the refactored SQL query using CTEs, window functions, or optimized joins.
3. INDEXING STRATEGY:
   - Exact CREATE INDEX statement (B-Tree, Partial, Composite, or GIN) with column ordering justification.
4. CONCURRENCY & LOCKING:
   - Identify potential deadlocks under high write volume and propose row-level locking strategies.`
  },
  {
    id: 'pd-sample-23',
    title: 'Cyber Security Penetration Testing & Threat Assessment',
    category: 'Coding',
    tags: ['coding', 'security', 'penetration-testing', 'owasp', 'audit'],
    favorite: false,
    createdAt: 1726022000000,
    updatedAt: 1726022000000,
    inTrash: false,
    content: `You are a Certified Ethical Hacker (CEH) and Lead Security Researcher conducting an application security assessment.

Perform a threat model and vulnerability audit on:
- Target Application / Feature: [TARGET APPLICATION OR FEATURE]
- Architecture / Tech Stack: [ARCHITECTURE OR TECH STACK]
- Suspected Vulnerability: [SUSPECTED VULNERABILITY]

Deliver your report in standard OWASP format:
1. THREAT MODELING (STRIDE Framework):
   - Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.
2. VULNERABILITY VERIFICATION (Proof of Concept):
   - Provide simulated, safe reproduction payload for testing.
3. SEVERITY RATING (CVSS v3.1):
   - Calculate Base Score, Vector string, and business impact estimation.
4. HARDENING & MITIGATION CODE:
   - Provide exact defensive code snippets (input validation, CSP headers, parameterized queries).`
  },
  {
    id: 'pd-sample-24',
    title: 'Y Combinator Pitch Deck Storyteller & Investor Narrative',
    category: 'Business',
    tags: ['business', 'startup', 'pitch-deck', 'fundraising', 'y-combinator'],
    favorite: true,
    createdAt: 1726023000000,
    updatedAt: 1726023000000,
    inTrash: false,
    content: `You are an Elite Startup Advisor who has coached 50+ founders to raise over $100M from Y Combinator, Sequoia, and Andreessen Horowitz.

Craft a compelling 10-slide Pitch Deck Narrative for:
- Company Name: [COMPANY NAME]
- One-Liner Description: [ONE LINER DESCRIPTION]
- Traction / Key Metrics: [TRACTION OR METRICS]
- Total Market Opportunity (TAM): [TAM ESTIMATE]

Produce the 10-slide narrative:
1. SLIDE 1: THE HOOK (The undeniable truth about the market).
2. SLIDE 2: THE ACUTE PROBLEM (The bleeding-neck pain point).
3. SLIDE 3: THE SOLUTION (Why now? The magical breakthrough).
4. SLIDE 4: PRODUCT DEMO (The "aha!" moment).
5. SLIDE 5: MARKET SIZE & TAM (Top-down and bottom-up validation).
6. SLIDE 6: TRACTION & PROOF (Growth curves and retention cohort data).
7. SLIDE 7: BUSINESS MODEL & UNIT ECONOMICS (CAC, LTV, payback period).
8. SLIDE 8: UNFAIR COMPETITIVE ADVANTAGE (Defensibility moat).
9. SLIDE 9: FOUNDING TEAM (Why we are the only team to win this).
10. SLIDE 10: THE ASK & USE OF FUNDS (Milestones to achieve in next 18 months).`
  },
  {
    id: 'pd-sample-25',
    title: 'Financial Modeling & Unit Economics Sensitivity Calculator',
    category: 'Business',
    tags: ['business', 'finance', 'unit-economics', 'pricing', 'margins'],
    favorite: false,
    createdAt: 1726024000000,
    updatedAt: 1726024000000,
    inTrash: false,
    content: `You are a Chief Financial Officer (CFO) and Venture Capital Financial Analyst.

Build a detailed financial model and unit economics breakdown for:
- Business Model: [BUSINESS MODEL]
- Average Revenue Per User (ARPU): [ARPU]
- Customer Acquisition Cost (CAC): [CAC]
- Monthly Churn Rate: [MONTHLY CHURN RATE]

Provide the following financial projections:
1. CORE UNIT ECONOMICS:
   - Customer Lifetime Value (LTV): Calculated with formula.
   - LTV/CAC Ratio and Health Assessment (Benchmark > 3x).
   - CAC Payback Period in months.
2. SENSITIVITY MATRIX:
   - Model EBITDA impact if Churn decreases by 20% vs. CAC increases by 15%.
3. PRICING TIER RECOMMENDATIONS:
   - Propose a 3-tier value metric pricing strategy to maximize Net Revenue Retention (NRR).
4. CASH RUNWAY & BREAK-EVEN ANALYSIS:
   - Minimum monthly subscriber threshold needed to achieve profitability.`
  },
  {
    id: 'pd-sample-26',
    title: 'Customer Retention & Churn Reduction Playbook',
    category: 'Business',
    tags: ['business', 'retention', 'churn', 'customer-success', 'saas'],
    favorite: false,
    createdAt: 1726025000000,
    updatedAt: 1726025000000,
    inTrash: false,
    content: `You are a VP of Customer Success and Growth Retention Strategist at a hyper-growth B2B enterprise.

Develop an end-to-end Churn Prevention & Retention Playbook for:
- Product Type: [PRODUCT TYPE]
- Current Churn Profile: [CURRENT CHURN PROFILE]
- Target Customers: [TARGET CUSTOMERS]

Deliver the actionable playbook:
1. EARLY WARNING RISK INDICATORS (Health Score System):
   - List 5 leading behavioral triggers that indicate a customer is about to churn.
2. AUTOMATED INTERVENTION WORKFLOWS:
   - Day 0-30 Onboarding Activation Cadence.
   - Mid-cycle usage drop-off recovery workflow.
3. CANCELLATION FLOW OFF-BOARDING FLOW:
   - Design a thoughtful cancel modal that offers pause options, down-tier plans, or 1-click consultation.
4. WIN-BACK EMAIL CAMPAIGN:
   - 2 high-converting re-engagement emails for accounts churned 60-90 days ago.`
  },
  {
    id: 'pd-sample-27',
    title: 'Weekly High-Output Executive Newsletter (Curated & Viral)',
    category: 'Marketing',
    tags: ['marketing', 'newsletter', 'content', 'writing', 'audience'],
    favorite: false,
    createdAt: 1726026000000,
    updatedAt: 1726026000000,
    inTrash: false,
    content: `You are a Media Strategist who writes 6-figure newsletters for tech executives, investors, and startup founders (similar to The Hustle and Morning Brew).

Write a complete, highly engaging weekly newsletter edition on:
- Newsletter Topic / Theme: [NEWSLETTER TOPIC]
- Featured Case Study / Story: [FEATURED STORY]
- 1 Actionable Framework: [ACTIONABLE FRAMEWORK]

Format the newsletter as follows:
1. SUBJECT LINE + PREVIEW TEXT (3 punchy curiosity-driven options).
2. INTRO & HOOK (Quick personal anecdote connecting to the main theme).
3. DEEP DIVE BREAKDOWN (Deconstruct [FEATURED STORY] with key takeaways).
4. THE 1-MINUTE FRAMEWORK (Visual diagram in text format of [ACTIONABLE FRAMEWORK]).
5. CURATED BULLETS (3 curated insights from around the web).
6. OUTRO & READER POLL (Engaging question to drive reply rates and inbox deliverability).`
  },
  {
    id: 'pd-sample-28',
    title: 'YouTube Viral Title & Thumbnail Concept Matrix (30 Variations)',
    category: 'YouTube',
    tags: ['youtube', 'thumbnail', 'title', 'ctr', 'viral'],
    favorite: false,
    createdAt: 1726027000000,
    updatedAt: 1726027000000,
    inTrash: false,
    content: `You are a YouTube Algorithm Consultant who optimizes CTR for channels with 1M+ subscribers.

Generate 30 high-CTR Title and Thumbnail concepts for:
- Video Core Topic: [VIDEO CORE TOPIC]
- Target Audience: [TARGET AUDIENCE]
- Main Emotion / Curiosity Trigger: [MAIN EMOTION OR CURIOSITY]

Generate 6 variations across each of these 5 psychological categories:
1. CATEGORY 1: EXTREME NEGATIVE FRAMING ("Never Do This...", "The Huge Mistake...")
2. CATEGORY 2: THE CURIOSITY GAP ("What Happens If You...", "The Secret Truth About...")
3. CATEGORY 3: HIGH-STAKES STORYTELLING ("I Spent 30 Days...", "How One Guy...")
4. CATEGORY 4: CONTRARIAN / PARADOX ("Why X Is Actually Better Than Y...")
5. CATEGORY 5: SHORT PUNCHY TITLES (Under 5 words, high mobile visibility)

For each category, describe the corresponding Thumbnail Visual Concept (Facial expression, text overlay of under 3 words, and focal color contrast).`
  },
  {
    id: 'pd-sample-29',
    title: 'YouTube Shorts / TikTok Storytelling: Retain 90%+ Viewers',
    category: 'YouTube',
    tags: ['youtube', 'shorts', 'tiktok', 'storytelling', 'retention'],
    favorite: false,
    createdAt: 1726028000000,
    updatedAt: 1726028000000,
    inTrash: false,
    content: `You are a Short-Form Viral Video Producer who has mastered the 60-second storytelling arc on TikTok, YouTube Shorts, and Instagram Reels.

Write a high-retention 60-second script about:
- Story Subject / Premise: [STORY SUBJECT OR PREMISE]
- The Surprising Twist: [SURPRISING TWIST]
- Target Viewer: [TARGET VIEWER]

Script Format (Timestamped by second):
- 00:00 - 00:03 | VISUAL HOOK & FIRST SENTENCE (The pattern interrupt)
- 00:03 - 00:15 | THE STAKES & TENSION (Why this matters immediately)
- 00:15 - 00:30 | THE PROGRESSION (Fast escalation of events)
- 00:30 - 00:45 | THE CLIMAX & TWIST (Reveal [SURPRISING TWIST])
- 00:45 - 00:55 | THE LESSON / TAKEAWAY
- 00:55 - 01:00 | SEAMLESS LOOP HOOK (Connect the last word back into the opening line)

Include visual cues [VISUAL] and pacing advice for sound design.`
  },
  {
    id: 'pd-sample-30',
    title: 'Claude Architecture Decision Record (ADR) & System RFC',
    category: 'Claude',
    tags: ['claude', 'architecture', 'adr', 'engineering', 'rfc'],
    favorite: false,
    createdAt: 1726029000000,
    updatedAt: 1726029000000,
    inTrash: false,
    content: `You are a Principal Enterprise Systems Architect drafting a formal Architecture Decision Record (ADR).

Document the architectural decision for:
- Context & Problem Statement: [PROBLEM STATEMENT]
- Proposed Solution: [PROPOSED SOLUTION]
- Key Alternatives Considered: [ALTERNATIVES CONSIDERED]

Structure according to the Michael Nygard ADR standard:
1. TITLE: ADR-[NUMBER]: [PROPOSED SOLUTION]
2. STATUS: [Proposed | Accepted | Superseded]
3. CONTEXT:
   - Technical constraints, business drivers, performance requirements.
4. DECISION:
   - The concrete architectural choice and trade-offs made.
5. CONSEQUENCES:
   - Positive impacts (scalability, velocity, reliability).
   - Negative impacts / Tech debt accepted.
6. COMPLIANCE & VERIFICATION CRITERIA:
   - How will automated CI/CD checks enforce this decision?`
  },
  {
    id: 'pd-sample-31',
    title: 'ChatGPT Socratic Tutor & Deep Concept Mastery',
    category: 'ChatGPT',
    tags: ['chatgpt', 'socratic', 'education', 'mastery', 'learning'],
    favorite: true,
    createdAt: 1726030000000,
    updatedAt: 1726030000000,
    inTrash: false,
    content: `Act as a Master Socratic Tutor specializing in cognitive science and active recall mastery.

Your goal is to guide me to thoroughly understand and master the concept of:
[CONCEPT OR SUBJECT TO LEARN]

Strict Socratic Guidelines:
1. Do NOT lecture or provide long walls of text.
2. Start by asking me ONE foundational diagnostic question to evaluate my current understanding.
3. Based on my answer, ask follow-up questions that challenge my assumptions, expose logical fallacies, or help me discover the core principle on my own.
4. Use intuitive real-world analogies whenever I encounter a conceptual roadblock.
5. Conclude each phase with a quick 1-sentence synthesis before moving deeper.

Begin by asking your first diagnostic question about [CONCEPT OR SUBJECT TO LEARN].`
  },
  {
    id: 'pd-sample-32',
    title: 'Gemini Multimodal Content Synthesis & Fact Extraction',
    category: 'Gemini',
    tags: ['gemini', 'multimodal', 'synthesis', 'extraction', 'analysis'],
    favorite: false,
    createdAt: 1726031000000,
    updatedAt: 1726031000000,
    inTrash: false,
    content: `You are an Advanced Multimodal Knowledge Extraction Engine powered by Google Gemini.

Analyze the provided data, image description, or document regarding:
- Target Subject: [TARGET SUBJECT]
- Source Material Description: [SOURCE MATERIAL DESCRIPTION]
- Goal / Expected Output: [EXPECTED OUTPUT]

Execute the multimodal analytical framework:
1. ENTITY & RELATIONSHIP EXTRACTION:
   - Identify all key organizations, metrics, dates, and causal dependencies.
2. CONTRADICTION & ANOMALY DETECTION:
   - Flag any discrepancies between reported claims and underlying figures.
3. EXECUTIVE MATRIX SUMMARY:
   - Render a high-density Markdown table summarizing findings across key dimensions.
4. FUTURE IMPLICATIONS & SYNTHESIS:
   - 3 strategic conclusions supported by empirical data.`
  },
  {
    id: 'pd-sample-33',
    title: 'LinkedIn Thought Leadership Carousel & Authority Post',
    category: 'Marketing',
    tags: ['marketing', 'linkedin', 'personal-branding', 'carousel', 'authority'],
    favorite: false,
    createdAt: 1726032000000,
    updatedAt: 1726032000000,
    inTrash: false,
    content: `You are a Ghostwriter for Forbes 30 Under 30 founders and tech executives on LinkedIn.

Write a viral LinkedIn carousel post on:
- Core Insight / Lesson: [CORE INSIGHT]
- Professional Industry: [PROFESSIONAL INDUSTRY]
- Contrarian Perspective: [CONTRARIAN PERSPECTIVE]

Deliverables:
1. THE SCROLL-STOPPING POST TEXT:
   - Hook (First 2 lines visible before "see more").
   - Bulleted storytelling breakdown with whitespace readability.
   - Concluding question that inspires thoughtful comments from senior leaders.
2. 8-SLIDE CAROUSEL DESIGN BLUEPRINT:
   - Slide 1: Cover Hook (Large bold typography).
   - Slides 2-6: Step-by-step breakdown with 1 simple visual diagram per slide.
   - Slide 7: Summary Cheat Sheet.
   - Slide 8: CTA to follow and repost.`
  },
  {
    id: 'pd-sample-34',
    title: 'Product Hunt Launch Campaign & Day 1 Playbook',
    category: 'Business',
    tags: ['business', 'product-hunt', 'launch', 'marketing', 'growth'],
    favorite: false,
    createdAt: 1726033000000,
    updatedAt: 1726033000000,
    inTrash: false,
    content: `You are a Product Hunt Launch Strategist who has achieved #1 Product of the Day 12 times.

Build an end-to-end Day 1 Launch Blueprint for:
- Product Name: [PRODUCT NAME]
- Tagline (Under 60 chars): [PRODUCT TAGLINE]
- Key Differentiating Feature: [KEY DIFFERENTIATING FEATURE]

Provide the exact launch kit:
1. MAKER'S FIRST COMMENT:
   - Emotional founder story + problem solved + special promo code for PH community.
2. ASSET SPECIFICATIONS:
   - Gallery image layout ideas (GIFs, infographics, UI highlights).
3. HOUR-BY-HOUR DAY 1 EXECUTION TIMELINE:
   - 00:01 PST Launch moment through 23:59 PST closing push.
   - Community outreach cadence without triggering spam algorithms.
4. SOCIAL MEDIA ANNOUNCEMENT THREAD:
   - 5-tweet X (Twitter) launch thread with high engagement hooks.`
  },
  {
    id: 'pd-sample-35',
    title: 'Amazon / E-Commerce Bullet Points & Buy Box Optimizer',
    category: 'Shopee',
    tags: ['shopee', 'ecommerce', 'amazon', 'copywriting', 'buy-box'],
    favorite: false,
    createdAt: 1726034000000,
    updatedAt: 1726034000000,
    inTrash: false,
    content: `You are an Amazon FBA Listing Optimization Expert who has generated over $20M in private label e-commerce sales.

Write 5 high-converting, keyword-dense Amazon Bullet Points for:
- Product Title: [PRODUCT TITLE]
- Key Materials / Specs: [KEY MATERIALS OR SPECS]
- Top Customer Pain Point: [TOP CUSTOMER PAIN POINT]

Structure for each of the 5 bullets:
- BULLET 1: THE PRIMARY BENEFIT (All-caps bold header + real-life transformation)
- BULLET 2: DURABILITY & MATERIAL QUALITY (Overcoming quality doubts)
- BULLET 3: PROBLEM SOLVED (Addressing [TOP CUSTOMER PAIN POINT])
- BULLET 4: VERSATILITY & EASE OF USE (How effortless it is to setup/use)
- BULLET 5: 100% SATISFACTION GUARANTEE & WHAT'S IN THE BOX (Eliminating purchase risk)

Ensure all Amazon algorithmic guidelines are respected (no promotional URLs, within 200 bytes per bullet).`
  },
  {
    id: 'pd-sample-36',
    title: 'Daily Deep Work & Time-Blocking Cognitive Schedule',
    category: 'Productivity',
    tags: ['productivity', 'deep-work', 'time-management', 'focus', 'flow-state'],
    favorite: true,
    createdAt: 1726035000000,
    updatedAt: 1726035000000,
    inTrash: false,
    content: `You are a High-Performance Executive Coach and Neuro-Productivity Expert based on Cal Newport and Andrew Huberman principles.

Design an optimal Deep Work Daily Operating System for:
- Primary Role / Profession: [PRIMARY ROLE]
- Biggest Daily Distraction: [BIGGEST DAILY DISTRACTION]
- Peak Energy Hours: [PEAK ENERGY HOURS]

Provide the customized daily architecture:
1. CIRCADIAN ALIGNED TIME BLOCKS:
   - Morning Cortisol / Focus Ramp-Up Routine.
   - Block 1 (90 minutes): High-Leverage Cognitive Deep Work (zero notifications).
   - Shallow Work / Admin / Email Batching Window.
   - Block 2 (60 minutes): Creative Problem Solving & Architecture.
   - Evening Shutdown Ritual (Complete cognitive detachment).
2. DISTRACTION DEFENSE PROTOCOL:
   - Concrete tactical rules to eliminate [BIGGEST DAILY DISTRACTION].
3. FLOW STATE TRIGGER CHECKLIST:
   - 4 sensory and environmental triggers to enter flow within 5 minutes.`
  }
];


// ==========================================================================
// 1.1 MULTI-LANGUAGE INTERNATIONALIZATION (i18n) DICTIONARIES
// 8 Languages: Vietnamese (vi), English (en), Japanese (ja), Korean (ko),
// Chinese (zh), French (fr), German (de), Spanish (es)
// ==========================================================================
const TRANSLATIONS = {
  vi: {
    badge_offline: 'Offline Ready',
    nav_all: 'All Prompts',
    nav_favorites: 'Favorites',
    nav_recent: 'Recent',
    nav_trash: 'Trash',
    nav_settings: 'Cài đặt',
    categories_title: 'Danh mục',
    btn_new_prompt: 'Tạo Prompt',
    search_placeholder: 'Tìm kiếm prompt theo tiêu đề, nội dung, tag, danh mục... (Ctrl+F)',
    copy_prompt: '📋 Copy Prompt',
    view_all_title: 'Tất cả Prompts',
    view_fav_title: '⭐ Prompts Yêu Thích',
    view_recent_title: '🕒 Prompts Gần Đây',
    view_trash_title: '🗑️ Thùng rác',
    empty_trash_btn: 'Dọn sạch thùng rác',
    words_label: 'từ',
    chars_label: 'ký tự',
    updated_at: 'Cập nhật',
    trash_notice: 'Prompt này đang ở trong Thùng rác.',
    btn_restore: 'Khôi phục',
    btn_perm_delete: 'Xoá vĩnh viễn',
    no_selection_title: 'Chọn một prompt để xem',
    no_selection_desc: 'Chọn một prompt từ danh sách hoặc nhấn New Prompt để bắt đầu.',
    modal_create_title: 'Tạo Prompt Mới',
    modal_edit_title: 'Chỉnh Sửa Prompt',
    form_title_label: 'Tiêu đề',
    form_title_ph: 'Ví dụ: YouTube Documentary Scriptwriter...',
    form_category_label: 'Danh mục (Category)',
    form_tags_label: 'Tags (phân cách bằng dấu phẩy)',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: 'Nội dung Prompt',
    form_content_ph: 'Nhập cấu trúc câu lệnh prompt AI của bạn ở đây...',
    form_favorite_label: '⭐ Đánh dấu yêu thích (Favorite)',
    tip_ctrl_s: 'Nhấn Ctrl+S để lưu nhanh',
    btn_cancel: 'Hủy (Esc)',
    btn_save: 'Lưu Prompt (Ctrl+S)',
    modal_cat_title: 'Thêm Danh Mục Mới',
    label_cat_name: 'Tên danh mục',
    category_name_ph: 'Ví dụ: TikTok, Midjourney, Sales...',
    btn_add: 'Thêm',
    settings_title: 'Cài Đặt PromptDock',
    settings_appearance: 'Giao diện (Appearance)',
    setting_theme: 'Chủ đề (Theme)',
    setting_theme_desc: 'Windows 11 Fluent Mica theme',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: 'Hệ thống',
    setting_font_size: 'Cỡ chữ (Font Size)',
    setting_font_desc: 'Điều chỉnh kích thước chữ hiển thị',
    font_small: 'Nhỏ',
    font_medium: 'Chuẩn',
    font_large: 'Lớn',
    setting_language: 'Ngôn ngữ (Language)',
    setting_language_desc: 'Chọn ngôn ngữ hiển thị giao diện',
    settings_data: 'Quản lý Dữ liệu (Data Management)',
    setting_export: 'Xuất dữ liệu (Export JSON)',
    setting_export_desc: 'Tải về toàn bộ danh sách prompt dưới dạng tệp .json',
    btn_export: 'Xuất JSON',
    setting_import: 'Nhập dữ liệu (Import JSON)',
    setting_import_desc: 'Khôi phục hoặc gộp prompt từ tệp sao lưu .json',
    btn_import: 'Nhập JSON',
    setting_reset: 'Khôi phục dữ liệu mẫu (Reset App)',
    setting_reset_desc: 'Đặt lại toàn bộ về 12 prompt mẫu chuẩn',
    btn_reset: 'Đặt lại Mẫu',
    settings_shortcuts: 'Bảng Phím Tắt (Keyboard Shortcuts)',
    shortcut_search: 'Tìm kiếm realtime',
    shortcut_new: 'Tạo prompt mới',
    shortcut_save: 'Lưu khi đang soạn',
    shortcut_copy: 'Copy prompt đang chọn',
    shortcut_nav: 'Di chuyển danh sách',
    shortcut_trash: 'Chuyển vào Thùng rác',
    shortcut_esc: 'Đóng cửa sổ / Thoát',
    shortcut_global: 'Phím gọi PWA nhanh',
    about_desc: 'Windows 11 PWA • 100% Offline • Sẵn sàng đóng gói MSIX Microsoft Store',
    btn_close: 'Đóng',
    empty_search_title: 'Không tìm thấy Prompt nào',
    empty_search_desc: 'Hãy thử từ khóa khác hoặc bấm nút New Prompt để tạo mới.',
    empty_trash_title: 'Thùng rác trống',
    empty_trash_desc: 'Không có prompt nào trong thùng rác.',
    empty_fav_title: 'Chưa có prompt yêu thích',
    empty_fav_desc: 'Bấm biểu tượng ⭐ trên bất kỳ prompt nào để lưu vào đây.',
    empty_all_title: 'Chưa có prompt nào',
    empty_all_desc: 'Bấm nút New Prompt để tạo prompt đầu tiên của bạn.',
    btn_empty_action: 'Tạo Prompt Mới',
    toast_copied: '📋 Đã sao chép vào clipboard!',
    toast_saved: 'Đã tạo prompt mới thành công!',
    toast_updated: 'Đã cập nhật prompt thành công!',
    toast_trash: 'Đã chuyển prompt vào Thùng rác!',
    toast_restored: 'Đã khôi phục prompt!',
    toast_perm_delete: 'Đã xoá vĩnh viễn prompt!',
    toast_trash_emptied: 'Đã dọn sạch thùng rác!',
    toast_fav_added: 'Đã thêm vào Favorites ⭐',
    toast_fav_removed: 'Đã bỏ yêu thích',
    toast_lang_changed: 'Đã đổi ngôn ngữ giao diện!',
    toast_category_added: 'Đã thêm danh mục mới!',
    toast_category_exists: 'Danh mục này đã tồn tại!',
    toast_reset_success: 'Đã khôi phục 12 prompt mẫu mặc định!',
    toast_export_success: 'Đã xuất dữ liệu JSON thành công!',
    toast_import_success: 'Đã nhập dữ liệu thành công!',
    toast_title_req: 'Vui lòng nhập tiêu đề prompt!',
    toast_content_req: 'Vui lòng nhập nội dung prompt!',
    variables_detected: 'Phát hiện Biến',
    variables_hint: 'Điền giá trị vào các ô bên dưới để tùy biến nhanh prompt trước khi copy:',
    btn_reset_vars: 'Đặt lại',
    toast_copied_customized: '📋 Đã copy prompt với biến đã điền!',
    toast_vars_reset: 'Đã đặt lại các ô biến!',
    confirm_perm_delete: 'Bạn có chắc chắn muốn xoá vĩnh viễn prompt này không? Hành động này không thể hoàn tác.',
    confirm_empty_trash: 'Bạn có chắc muốn xoá toàn bộ prompt trong thùng rác không?',
    confirm_reset_data: 'Bạn có chắc chắn muốn đặt lại ứng dụng về 12 prompt mẫu mặc định? Toàn bộ dữ liệu hiện tại sẽ bị xóa.'
  },
  en: {
    badge_offline: 'Offline Ready',
    nav_all: 'All Prompts',
    nav_favorites: 'Favorites',
    nav_recent: 'Recent',
    nav_trash: 'Trash',
    nav_settings: 'Settings',
    categories_title: 'Categories',
    btn_new_prompt: 'New Prompt',
    search_placeholder: 'Search prompts by title, content, tag, category... (Ctrl+F)',
    copy_prompt: '📋 Copy Prompt',
    view_all_title: 'All Prompts',
    view_fav_title: '⭐ Favorites',
    view_recent_title: '🕒 Recent Prompts',
    view_trash_title: '🗑️ Trash',
    empty_trash_btn: 'Empty Trash',
    words_label: 'words',
    chars_label: 'chars',
    updated_at: 'Updated',
    trash_notice: 'This prompt is in Trash.',
    btn_restore: 'Restore',
    btn_perm_delete: 'Delete Forever',
    no_selection_title: 'Select a prompt to preview',
    no_selection_desc: 'Select a prompt from the list or click New Prompt to begin.',
    modal_create_title: 'Create New Prompt',
    modal_edit_title: 'Edit Prompt',
    form_title_label: 'Title',
    form_title_ph: 'e.g. YouTube Documentary Scriptwriter...',
    form_category_label: 'Category',
    form_tags_label: 'Tags (comma separated)',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: 'Prompt Content',
    form_content_ph: 'Enter your AI prompt instructions here...',
    form_favorite_label: '⭐ Mark as Favorite',
    tip_ctrl_s: 'Press Ctrl+S to save quickly',
    btn_cancel: 'Cancel (Esc)',
    btn_save: 'Save Prompt (Ctrl+S)',
    modal_cat_title: 'Add New Category',
    label_cat_name: 'Category Name',
    category_name_ph: 'e.g. TikTok, Midjourney, Sales...',
    btn_add: 'Add',
    settings_title: 'PromptDock Settings',
    settings_appearance: 'Appearance',
    setting_theme: 'Theme',
    setting_theme_desc: 'Windows 11 Fluent Mica theme',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: 'System',
    setting_font_size: 'Font Size',
    setting_font_desc: 'Adjust interface text size',
    font_small: 'Small',
    font_medium: 'Medium',
    font_large: 'Large',
    setting_language: 'Language',
    setting_language_desc: 'Select display language',
    settings_data: 'Data Management',
    setting_export: 'Export Data (JSON)',
    setting_export_desc: 'Download all prompts as a .json backup file',
    btn_export: 'Export JSON',
    setting_import: 'Import Data (JSON)',
    setting_import_desc: 'Restore or merge prompts from a backup file',
    btn_import: 'Import JSON',
    setting_reset: 'Reset to Sample Data',
    setting_reset_desc: 'Reset all data back to the 12 default sample prompts',
    btn_reset: 'Reset App',
    settings_shortcuts: 'Keyboard Shortcuts',
    shortcut_search: 'Realtime search',
    shortcut_new: 'New prompt',
    shortcut_save: 'Save active prompt',
    shortcut_copy: 'Copy selected prompt',
    shortcut_nav: 'Navigate list',
    shortcut_trash: 'Move to trash',
    shortcut_esc: 'Close / Dismiss',
    shortcut_global: 'Quick launcher hotkey',
    about_desc: 'Windows 11 PWA • 100% Offline • Ready for Microsoft Store MSIX packaging',
    btn_close: 'Close',
    empty_search_title: 'No prompts found',
    empty_search_desc: 'Try different keywords or click New Prompt.',
    empty_trash_title: 'Trash is empty',
    empty_trash_desc: 'There are no prompts in the trash.',
    empty_fav_title: 'No favorites yet',
    empty_fav_desc: 'Click the star icon ⭐ on any prompt to save it here.',
    empty_all_title: 'No prompts yet',
    empty_all_desc: 'Click New Prompt to create your very first AI prompt.',
    btn_empty_action: 'Create New Prompt',
    toast_copied: '📋 Copied to clipboard!',
    toast_saved: 'New prompt created successfully!',
    toast_updated: 'Prompt updated successfully!',
    toast_trash: 'Moved prompt to Trash!',
    toast_restored: 'Prompt restored successfully!',
    toast_perm_delete: 'Prompt permanently deleted!',
    toast_trash_emptied: 'Trash emptied successfully!',
    toast_fav_added: 'Added to Favorites ⭐',
    toast_fav_removed: 'Removed from Favorites',
    toast_lang_changed: 'Interface language updated!',
    toast_category_added: 'New category added!',
    toast_category_exists: 'This category already exists!',
    toast_reset_success: 'Restored 12 default sample prompts!',
    toast_export_success: 'JSON data exported successfully!',
    toast_import_success: 'Prompts imported successfully!',
    toast_title_req: 'Please enter a prompt title!',
    toast_content_req: 'Please enter prompt content!',
    variables_detected: 'Variables Detected',
    variables_hint: 'Fill in values below to dynamically customize this prompt before copying:',
    btn_reset_vars: 'Reset',
    toast_copied_customized: '📋 Customized prompt copied to clipboard!',
    toast_vars_reset: 'Variables have been reset!',
    confirm_perm_delete: 'Are you sure you want to permanently delete this prompt? This action cannot be undone.',
    confirm_empty_trash: 'Are you sure you want to delete all prompts in the trash?',
    confirm_reset_data: 'Are you sure you want to reset the app to the 12 default sample prompts? All current changes will be overwritten.'
  },
  ja: {
    badge_offline: 'オフライン対応',
    nav_all: 'すべてのプロンプト',
    nav_favorites: 'お気に入り',
    nav_recent: '最近使用',
    nav_trash: 'ゴミ箱',
    nav_settings: '設定',
    categories_title: 'カテゴリー',
    btn_new_prompt: '新規作成',
    search_placeholder: 'タイトル、内容、タグ、カテゴリーで検索... (Ctrl+F)',
    copy_prompt: '📋 プロンプトをコピー',
    view_all_title: 'すべてのプロンプト',
    view_fav_title: '⭐ お気に入り',
    view_recent_title: '🕒 最近使用したプロンプト',
    view_trash_title: '🗑️ ゴミ箱',
    empty_trash_btn: 'ゴミ箱を空にする',
    words_label: '単語',
    chars_label: '文字',
    updated_at: '更新日時',
    trash_notice: 'このプロンプトはゴミ箱にあります。',
    btn_restore: '復元',
    btn_perm_delete: '完全に削除',
    no_selection_title: 'プロンプトを選択してください',
    no_selection_desc: 'リストからプロンプトを選択するか、新規作成をクリックしてください。',
    modal_create_title: '新規プロンプト作成',
    modal_edit_title: 'プロンプト編集',
    form_title_label: 'タイトル',
    form_title_ph: '例: YouTube ドキュメンタリー台本...',
    form_category_label: 'カテゴリー',
    form_tags_label: 'タグ（カンマ区切り）',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: 'プロンプト内容',
    form_content_ph: 'ここにAIプロンプトの指示を入力してください...',
    form_favorite_label: '⭐ お気に入りに追加',
    tip_ctrl_s: 'Ctrl+S でクイック保存',
    btn_cancel: 'キャンセル (Esc)',
    btn_save: '保存 (Ctrl+S)',
    modal_cat_title: '新規カテゴリー追加',
    label_cat_name: 'カテゴリー名',
    category_name_ph: '例: TikTok, Midjourney, Sales...',
    btn_add: '追加',
    settings_title: 'PromptDock 設定',
    settings_appearance: '外観',
    setting_theme: 'テーマ',
    setting_theme_desc: 'Windows 11 Fluent Mica テーマ',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: 'システム',
    setting_font_size: 'フォントサイズ',
    setting_font_desc: '文字の大きさを調整します',
    font_small: '小',
    font_medium: '標準',
    font_large: '大',
    setting_language: '言語 (Language)',
    setting_language_desc: '表示言語を選択',
    settings_data: 'データ管理',
    setting_export: 'データ書き出し (Export JSON)',
    setting_export_desc: '全プロンプトを .json バックアップとして保存',
    btn_export: 'エクスポート',
    setting_import: 'データ取り込み (Import JSON)',
    setting_import_desc: 'バックアップから復元または結合',
    btn_import: 'インポート',
    setting_reset: '初期設定にリセット',
    setting_reset_desc: '12個の標準サンプルプロンプトに戻します',
    btn_reset: 'リセット',
    settings_shortcuts: 'ショートカットキー一覧',
    shortcut_search: 'リアルタイム検索',
    shortcut_new: '新規プロンプト作成',
    shortcut_save: '編集中に保存',
    shortcut_copy: '選択プロンプトをコピー',
    shortcut_nav: 'リストを移動',
    shortcut_trash: 'ゴミ箱に移動',
    shortcut_esc: '閉じる / キャンセル',
    shortcut_global: 'クイック起動ホットキー',
    about_desc: 'Windows 11 PWA • 100% オフライン • Microsoft Store MSIX 対応',
    btn_close: '閉じる',
    empty_search_title: 'プロンプトが見つかりません',
    empty_search_desc: '別のキーワードで検索するか、新規作成してください。',
    empty_trash_title: 'ゴミ箱は空です',
    empty_trash_desc: 'ゴミ箱にプロンプトはありません。',
    empty_fav_title: 'お気に入りはまだありません',
    empty_fav_desc: '⭐アイコンをクリックしてお気に入りに追加できます。',
    empty_all_title: 'プロンプトがありません',
    empty_all_desc: '新規作成ボタンを押して最初のプロンプトを登録しましょう。',
    btn_empty_action: 'プロンプトを作成',
    toast_copied: '📋 クリップボードにコピーしました！',
    toast_saved: 'プロンプトを作成しました！',
    toast_updated: 'プロンプトを更新しました！',
    toast_trash: 'ゴミ箱に移動しました！',
    toast_restored: 'プロンプトを復元しました！',
    toast_perm_delete: '完全に削除しました！',
    toast_trash_emptied: 'ゴミ箱を空にしました！',
    toast_fav_added: 'お気に入りに追加しました ⭐',
    toast_fav_removed: 'お気に入りから削除しました',
    toast_lang_changed: '表示言語を変更しました！',
    toast_category_added: '新しいカテゴリーを追加しました！',
    toast_category_exists: 'このカテゴリーは既に存在します！',
    toast_reset_success: '12個の初期サンプルに復元しました！',
    toast_export_success: 'JSONデータをエクスポートしました！',
    toast_import_success: 'プロンプトの読み込みに成功しました！',
    toast_title_req: 'タイトルを入力してください！',
    toast_content_req: 'プロンプト内容を入力してください！',
    confirm_perm_delete: 'このプロンプトを完全に削除しますか？この操作は取り消せません。',
    confirm_empty_trash: 'ゴミ箱内のすべてのプロンプトを削除しますか？',
    confirm_reset_data: 'アプリを12個の初期サンプルにリセットしますか？現在のデータは上書きされます。'
  },
  ko: {
    badge_offline: '오프라인 지원',
    nav_all: '모든 프롬프트',
    nav_favorites: '즐겨찾기',
    nav_recent: '최근 항목',
    nav_trash: '휴지통',
    nav_settings: '설정',
    categories_title: '카테고리',
    btn_new_prompt: '새 프롬프트',
    search_placeholder: '제목, 내용, 태그, 카테고리로 검색... (Ctrl+F)',
    copy_prompt: '📋 프롬프트 복사',
    view_all_title: '모든 프롬프트',
    view_fav_title: '⭐ 즐겨찾기',
    view_recent_title: '🕒 최근 사용한 프롬프트',
    view_trash_title: '🗑️ 휴지통',
    empty_trash_btn: '휴지통 비우기',
    words_label: '단어',
    chars_label: '자',
    updated_at: '수정일',
    trash_notice: '이 프롬프트는 휴지통에 있습니다.',
    btn_restore: '복원',
    btn_perm_delete: '영구 삭제',
    no_selection_title: '프롬프트를 선택하세요',
    no_selection_desc: '목록에서 프롬프트를 선택하거나 새 프롬프트를 클릭하세요.',
    modal_create_title: '새 프롬프트 만들기',
    modal_edit_title: '프롬프트 편집',
    form_title_label: '제목',
    form_title_ph: '예: YouTube 다큐멘터리 대본...',
    form_category_label: '카테고리',
    form_tags_label: '태그 (쉼표로 구분)',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: '프롬프트 내용',
    form_content_ph: '여기에 AI 프롬프트 지침을 입력하세요...',
    form_favorite_label: '⭐ 즐겨찾기에 추가',
    tip_ctrl_s: 'Ctrl+S로 빠른 저장',
    btn_cancel: '취소 (Esc)',
    btn_save: '저장 (Ctrl+S)',
    modal_cat_title: '새 카테고리 추가',
    label_cat_name: '카테고리 이름',
    category_name_ph: '예: TikTok, Midjourney, Sales...',
    btn_add: '추가',
    settings_title: 'PromptDock 설정',
    settings_appearance: '화면 설정',
    setting_theme: '테마',
    setting_theme_desc: 'Windows 11 Fluent Mica 테마',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: '시스템',
    setting_font_size: '글꼴 크기',
    setting_font_desc: '화면 글꼴 크기 조절',
    font_small: '작게',
    font_medium: '보통',
    font_large: '크게',
    setting_language: '언어 (Language)',
    setting_language_desc: '표시 언어 선택',
    settings_data: '데이터 관리',
    setting_export: '데이터 내보내기 (Export JSON)',
    setting_export_desc: '모든 프롬프트를 .json 파일로 백업 저장',
    btn_export: 'JSON 내보내기',
    setting_import: '데이터 가져오기 (Import JSON)',
    setting_import_desc: '백업 파일에서 프롬프트 복원 또는 병합',
    btn_import: 'JSON 가져오기',
    setting_reset: '기본 샘플로 초기화',
    setting_reset_desc: '기본 12개 샘플 프롬프트로 재설정',
    btn_reset: '초기화',
    settings_shortcuts: '단축키 가이드',
    shortcut_search: '실시간 검색',
    shortcut_new: '새 프롬프트 생성',
    shortcut_save: '작성 중 저장',
    shortcut_copy: '선택 프롬프트 복사',
    shortcut_nav: '목록 이동',
    shortcut_trash: '휴지통으로 이동',
    shortcut_esc: '닫기 / 취소',
    shortcut_global: '빠른 실행 핫키',
    about_desc: 'Windows 11 PWA • 100% 오프라인 • Microsoft Store MSIX 지원',
    btn_close: '닫기',
    empty_search_title: '프롬프트를 찾을 수 없습니다',
    empty_search_desc: '다른 키워드로 검색하거나 새 프롬프트를 만드세요.',
    empty_trash_title: '휴지통이 비어 있습니다',
    empty_trash_desc: '휴지통에 프롬프트가 없습니다.',
    empty_fav_title: '즐겨찾기가 없습니다',
    empty_fav_desc: '⭐ 아이콘을 클릭하여 즐겨찾기에 추가할 수 있습니다.',
    empty_all_title: '등록된 프롬프트가 없습니다',
    empty_all_desc: '새 프롬프트 버튼을 눌러 첫 번째 프롬프트를 만드세요.',
    btn_empty_action: '새 프롬프트 만들기',
    toast_copied: '📋 클립보드에 복사되었습니다!',
    toast_saved: '새 프롬프트가 생성되었습니다!',
    toast_updated: '프롬프트가 수정되었습니다!',
    toast_trash: '휴지통으로 이동되었습니다!',
    toast_restored: '프롬프트가 복원되었습니다!',
    toast_perm_delete: '영구 삭제되었습니다!',
    toast_trash_emptied: '휴지통을 비웠습니다!',
    toast_fav_added: '즐겨찾기에 추가되었습니다 ⭐',
    toast_fav_removed: '즐겨찾기에서 제거되었습니다',
    toast_lang_changed: '표시 언어가 변경되었습니다!',
    toast_category_added: '새 카테고리가 추가되었습니다!',
    toast_category_exists: '이미 존재하는 카테고리입니다!',
    toast_reset_success: '기본 12개 샘플로 초기화되었습니다!',
    toast_export_success: 'JSON 데이터 내보내기 완료!',
    toast_import_success: '프롬프트를 성공적으로 가져왔습니다!',
    toast_title_req: '프롬프트 제목을 입력하세요!',
    toast_content_req: '프롬프트 내용을 입력하세요!',
    confirm_perm_delete: '이 프롬프트를 영구적으로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    confirm_empty_trash: '휴지통의 모든 프롬프트를 삭제하시겠습니까?',
    confirm_reset_data: '앱을 기본 12개 샘플로 재설정하시겠습니까? 현재 데이터가 덮어씌워집니다.'
  },
  zh: {
    badge_offline: '离线可用',
    nav_all: '全部提示词',
    nav_favorites: '收藏夹',
    nav_recent: '最近使用',
    nav_trash: '回收站',
    nav_settings: '设置',
    categories_title: '分类',
    btn_new_prompt: '新建提示词',
    search_placeholder: '按标题、内容、标签或分类搜索... (Ctrl+F)',
    copy_prompt: '📋 复制提示词',
    view_all_title: '全部提示词',
    view_fav_title: '⭐ 收藏提示词',
    view_recent_title: '🕒 最近使用提示词',
    view_trash_title: '🗑️ 回收站',
    empty_trash_btn: '清空回收站',
    words_label: '字',
    chars_label: '字符',
    updated_at: '更新于',
    trash_notice: '此提示词在回收站中。',
    btn_restore: '恢复',
    btn_perm_delete: '永久删除',
    no_selection_title: '请选择一个提示词进行预览',
    no_selection_desc: '从左侧列表中选择提示词，或点击“新建提示词”开始。',
    modal_create_title: '新建提示词',
    modal_edit_title: '编辑提示词',
    form_title_label: '标题',
    form_title_ph: '例如：YouTube 纪录片文案脚本...',
    form_category_label: '分类',
    form_tags_label: '标签（逗号分隔）',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: '提示词内容',
    form_content_ph: '在此输入您的 AI 提示词指令...',
    form_favorite_label: '⭐ 设为收藏',
    tip_ctrl_s: '按 Ctrl+S 快速保存',
    btn_cancel: '取消 (Esc)',
    btn_save: '保存提示词 (Ctrl+S)',
    modal_cat_title: '添加新分类',
    label_cat_name: '分类名称',
    category_name_ph: '例如：TikTok, Midjourney, Sales...',
    btn_add: '添加',
    settings_title: 'PromptDock 设置',
    settings_appearance: '外观设置',
    setting_theme: '主题模式',
    setting_theme_desc: 'Windows 11 Fluent Mica 主题',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: '系统跟随',
    setting_font_size: '字体大小',
    setting_font_desc: '调整界面文字显示大小',
    font_small: '小',
    font_medium: '标准',
    font_large: '大',
    setting_language: '语言 (Language)',
    setting_language_desc: '选择界面显示语言',
    settings_data: '数据管理',
    setting_export: '导出数据 (Export JSON)',
    setting_export_desc: '将所有提示词下载为 .json 备份文件',
    btn_export: '导出 JSON',
    setting_import: '导入数据 (Import JSON)',
    setting_import_desc: '从备份文件中恢复或合并提示词',
    btn_import: '导入 JSON',
    setting_reset: '重置为示例数据',
    setting_reset_desc: '将数据重置回 12 个默认精选示例',
    btn_reset: '重置数据',
    settings_shortcuts: '快捷键指南',
    shortcut_search: '实时搜索',
    shortcut_new: '新建提示词',
    shortcut_save: '编辑中保存',
    shortcut_copy: '复制选中的提示词',
    shortcut_nav: '上下移动列表',
    shortcut_trash: '移入回收站',
    shortcut_esc: '关闭 / 取消',
    shortcut_global: '全局快速启动热键',
    about_desc: 'Windows 11 PWA • 100% 离线运行 • 支持 Microsoft Store MSIX 打包',
    btn_close: '关闭',
    empty_search_title: '未找到匹配的提示词',
    empty_search_desc: '请尝试其他关键词，或新建一个提示词。',
    empty_trash_title: '回收站为空',
    empty_trash_desc: '回收站中没有已删除的提示词。',
    empty_fav_title: '暂无收藏',
    empty_fav_desc: '点击提示词上的 ⭐ 图标即可收藏到此处。',
    empty_all_title: '暂无提示词',
    empty_all_desc: '点击新建提示词按钮创建您的第一个提示词。',
    btn_empty_action: '新建提示词',
    toast_copied: '📋 已复制到剪贴板！',
    toast_saved: '提示词创建成功！',
    toast_updated: '提示词更新成功！',
    toast_trash: '已移入回收站！',
    toast_restored: '提示词已恢复！',
    toast_perm_delete: '提示词已永久删除！',
    toast_trash_emptied: '回收站已清空！',
    toast_fav_added: '已添加至收藏夹 ⭐',
    toast_fav_removed: '已从收藏夹移除',
    toast_lang_changed: '语言切换成功！',
    toast_category_added: '新分类添加成功！',
    toast_category_exists: '该分类已存在！',
    toast_reset_success: '已恢复 12 个默认示例提示词！',
    toast_export_success: 'JSON 数据导出成功！',
    toast_import_success: '提示词导入成功！',
    toast_title_req: '请输入提示词标题！',
    toast_content_req: '请输入提示词内容！',
    confirm_perm_delete: '您确定要永久删除此提示词吗？此操作无法撤销。',
    confirm_empty_trash: '您确定要清空回收站中的所有提示词吗？',
    confirm_reset_data: '您确定要重置为 12 个默认示例提示词吗？当前的所有修改将被覆盖。'
  },
  fr: {
    badge_offline: 'Hors-ligne Prêt',
    nav_all: 'Tous les Prompts',
    nav_favorites: 'Favoris',
    nav_recent: 'Récents',
    nav_trash: 'Corbeille',
    nav_settings: 'Paramètres',
    categories_title: 'Catégories',
    btn_new_prompt: 'Nouveau Prompt',
    search_placeholder: 'Rechercher par titre, contenu, tag, catégorie... (Ctrl+F)',
    copy_prompt: '📋 Copier le Prompt',
    view_all_title: 'Tous les Prompts',
    view_fav_title: '⭐ Favoris',
    view_recent_title: '🕒 Prompts Récents',
    view_trash_title: '🗑️ Corbeille',
    empty_trash_btn: 'Vider la corbeille',
    words_label: 'mots',
    chars_label: 'caractères',
    updated_at: 'Modifié le',
    trash_notice: 'Ce prompt est dans la corbeille.',
    btn_restore: 'Restaurer',
    btn_perm_delete: 'Supprimer définitivement',
    no_selection_title: 'Sélectionnez un prompt',
    no_selection_desc: 'Sélectionnez un prompt dans la liste ou cliquez sur Nouveau Prompt.',
    modal_create_title: 'Créer un Nouveau Prompt',
    modal_edit_title: 'Modifier le Prompt',
    form_title_label: 'Titre',
    form_title_ph: 'ex: Rédacteur de Documentaire YouTube...',
    form_category_label: 'Catégorie',
    form_tags_label: 'Tags (séparés par des virgules)',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: 'Contenu du Prompt',
    form_content_ph: 'Entrez vos instructions de prompt IA ici...',
    form_favorite_label: '⭐ Marquer comme Favori',
    tip_ctrl_s: 'Appuyez sur Ctrl+S pour sauvegarder rapidement',
    btn_cancel: 'Annuler (Esc)',
    btn_save: 'Enregistrer (Ctrl+S)',
    modal_cat_title: 'Nouvelle Catégorie',
    label_cat_name: 'Nom de la catégorie',
    category_name_ph: 'ex: TikTok, Midjourney, Vente...',
    btn_add: 'Ajouter',
    settings_title: 'Paramètres de PromptDock',
    settings_appearance: 'Apparence',
    setting_theme: 'Thème',
    setting_theme_desc: 'Thème Windows 11 Fluent Mica',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: 'Système',
    setting_font_size: 'Taille de police',
    setting_font_desc: 'Ajuster la taille du texte',
    font_small: 'Petite',
    font_medium: 'Normale',
    font_large: 'Grande',
    setting_language: 'Langue (Language)',
    setting_language_desc: 'Choisir la langue d\'affichage',
    settings_data: 'Gestion des données',
    setting_export: 'Exporter les données (JSON)',
    setting_export_desc: 'Télécharger tous les prompts au format .json',
    btn_export: 'Exporter JSON',
    setting_import: 'Importer des données (JSON)',
    setting_import_desc: 'Restaurer ou fusionner depuis une sauvegarde .json',
    btn_import: 'Importer JSON',
    setting_reset: 'Réinitialiser aux exemples',
    setting_reset_desc: 'Restaurer les 12 prompts d\'exemple par défaut',
    btn_reset: 'Réinitialiser',
    settings_shortcuts: 'Raccourcis Clavier',
    shortcut_search: 'Recherche instantanée',
    shortcut_new: 'Nouveau prompt',
    shortcut_save: 'Enregistrer en cours',
    shortcut_copy: 'Copier le prompt sélectionné',
    shortcut_nav: 'Naviguer dans la liste',
    shortcut_trash: 'Mettre à la corbeille',
    shortcut_esc: 'Fermer / Quitter',
    shortcut_global: 'Raccourci de lancement rapide',
    about_desc: 'Windows 11 PWA • 100% Hors-ligne • Compatible Microsoft Store MSIX',
    btn_close: 'Fermer',
    empty_search_title: 'Aucun prompt trouvé',
    empty_search_desc: 'Essayez d\'autres mots-clés ou créez un nouveau prompt.',
    empty_trash_title: 'La corbeille est vide',
    empty_trash_desc: 'Il n\'y a aucun prompt dans la corbeille.',
    empty_fav_title: 'Aucun favori',
    empty_fav_desc: 'Cliquez sur l\'étoile ⭐ pour ajouter des prompts ici.',
    empty_all_title: 'Aucun prompt pour le moment',
    empty_all_desc: 'Cliquez sur Nouveau Prompt pour commencer.',
    btn_empty_action: 'Créer un Prompt',
    toast_copied: '📋 Copié dans le presse-papier !',
    toast_saved: 'Nouveau prompt créé avec succès !',
    toast_updated: 'Prompt mis à jour !',
    toast_trash: 'Prompt déplacé vers la corbeille !',
    toast_restored: 'Prompt restauré avec succès !',
    toast_perm_delete: 'Prompt supprimé définitivement !',
    toast_trash_emptied: 'Corbeille vidée !',
    toast_fav_added: 'Ajouté aux favoris ⭐',
    toast_fav_removed: 'Retiré des favoris',
    toast_lang_changed: 'Langue de l\'interface modifiée !',
    toast_category_added: 'Nouvelle catégorie ajoutée !',
    toast_category_exists: 'Cette catégorie existe déjà !',
    toast_reset_success: '12 prompts d\'exemple restaurés !',
    toast_export_success: 'Données JSON exportées avec succès !',
    toast_import_success: 'Prompts importés avec succès !',
    toast_title_req: 'Veuillez saisir un titre !',
    toast_content_req: 'Veuillez saisir le contenu du prompt !',
    confirm_perm_delete: 'Voulez-vous vraiment supprimer définitivement ce prompt ?',
    confirm_empty_trash: 'Voulez-vous vraiment vider toute la corbeille ?',
    confirm_reset_data: 'Voulez-vous réinitialiser l\'application aux 12 exemples par défaut ?'
  },
  de: {
    badge_offline: 'Offline Bereit',
    nav_all: 'Alle Prompts',
    nav_favorites: 'Favoriten',
    nav_recent: 'Zuletzt verwendet',
    nav_trash: 'Papierkorb',
    nav_settings: 'Einstellungen',
    categories_title: 'Kategorien',
    btn_new_prompt: 'Neuer Prompt',
    search_placeholder: 'Prompts suchen nach Titel, Inhalt, Tag... (Ctrl+F)',
    copy_prompt: '📋 Prompt kopieren',
    view_all_title: 'Alle Prompts',
    view_fav_title: '⭐ Favoriten',
    view_recent_title: '🕒 Zuletzt verwendete Prompts',
    view_trash_title: '🗑️ Papierkorb',
    empty_trash_btn: 'Papierkorb leeren',
    words_label: 'Wörter',
    chars_label: 'Zeichen',
    updated_at: 'Aktualisiert',
    trash_notice: 'Dieser Prompt befindet sich im Papierkorb.',
    btn_restore: 'Wiederherstellen',
    btn_perm_delete: 'Endgültig löschen',
    no_selection_title: 'Wählen Sie einen Prompt aus',
    no_selection_desc: 'Wählen Sie einen Prompt aus der Liste oder klicken Sie auf Neuer Prompt.',
    modal_create_title: 'Neuen Prompt erstellen',
    modal_edit_title: 'Prompt bearbeiten',
    form_title_label: 'Titel',
    form_title_ph: 'z.B. YouTube Dokumentar-Drehbuch...',
    form_category_label: 'Kategorie',
    form_tags_label: 'Tags (kommagetrennt)',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: 'Prompt-Inhalt',
    form_content_ph: 'Geben Sie hier Ihre KI-Prompt-Anweisungen ein...',
    form_favorite_label: '⭐ Als Favorit markieren',
    tip_ctrl_s: 'Drücken Sie Strg+S zum schnellen Speichern',
    btn_cancel: 'Abbrechen (Esc)',
    btn_save: 'Speichern (Ctrl+S)',
    modal_cat_title: 'Neue Kategorie hinzufügen',
    label_cat_name: 'Kategoriename',
    category_name_ph: 'z.B. TikTok, Midjourney, Vertrieb...',
    btn_add: 'Hinzufügen',
    settings_title: 'PromptDock Einstellungen',
    settings_appearance: 'Erscheinungsbild',
    setting_theme: 'Design',
    setting_theme_desc: 'Windows 11 Fluent Mica Design',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: 'System',
    setting_font_size: 'Schriftgröße',
    setting_font_desc: 'Textgröße anpassen',
    font_small: 'Klein',
    font_medium: 'Mittel',
    font_large: 'Groß',
    setting_language: 'Sprache (Language)',
    setting_language_desc: 'Anzeigesprache auswählen',
    settings_data: 'Datenverwaltung',
    setting_export: 'Daten exportieren (JSON)',
    setting_export_desc: 'Alle Prompts als .json-Datei herunterladen',
    btn_export: 'JSON exportieren',
    setting_import: 'Daten importieren (JSON)',
    setting_import_desc: 'Prompts aus Backup-Datei wiederherstellen',
    btn_import: 'JSON importieren',
    setting_reset: 'Auf Standard-Beispiele zurücksetzen',
    setting_reset_desc: 'Alle Daten auf die 12 Standard-Prompts zurücksetzen',
    btn_reset: 'Zurücksetzen',
    settings_shortcuts: 'Tastaturkürzel',
    shortcut_search: 'Echtzeitsuche',
    shortcut_new: 'Neuer Prompt',
    shortcut_save: 'Beim Bearbeiten speichern',
    shortcut_copy: 'Ausgewählten Prompt kopieren',
    shortcut_nav: 'In Liste navigieren',
    shortcut_trash: 'In Papierkorb verschieben',
    shortcut_esc: 'Schließen / Abbrechen',
    shortcut_global: 'Schnellstart-Tastenkombination',
    about_desc: 'Windows 11 PWA • 100% Offline • Bereit für Microsoft Store MSIX',
    btn_close: 'Schließen',
    empty_search_title: 'Keine Prompts gefunden',
    empty_search_desc: 'Versuchen Sie andere Suchbegriffe oder erstellen Sie einen neuen Prompt.',
    empty_trash_title: 'Papierkorb ist leer',
    empty_trash_desc: 'Es befinden sich keine Prompts im Papierkorb.',
    empty_fav_title: 'Noch keine Favoriten',
    empty_fav_desc: 'Klicken Sie auf das Sternsymbol ⭐, um Favoriten hinzuzufügen.',
    empty_all_title: 'Noch keine Prompts vorhanden',
    empty_all_desc: 'Klicken Sie auf Neuer Prompt, um zu beginnen.',
    btn_empty_action: 'Prompt erstellen',
    toast_copied: '📋 In die Zwischenablage kopiert!',
    toast_saved: 'Neuer Prompt erfolgreich erstellt!',
    toast_updated: 'Prompt erfolgreich aktualisiert!',
    toast_trash: 'In den Papierkorb verschoben!',
    toast_restored: 'Prompt erfolgreich wiederhergestellt!',
    toast_perm_delete: 'Prompt endgültig gelöscht!',
    toast_trash_emptied: 'Papierkorb geleert!',
    toast_fav_added: 'Zu Favoriten hinzugefügt ⭐',
    toast_fav_removed: 'Aus Favoriten entfernt',
    toast_lang_changed: 'Sprache geändert!',
    toast_category_added: 'Neue Kategorie hinzugefügt!',
    toast_category_exists: 'Diese Kategorie existiert bereits!',
    toast_reset_success: '12 Standard-Prompts wiederhergestellt!',
    toast_export_success: 'JSON-Daten erfolgreich exportiert!',
    toast_import_success: 'Prompts erfolgreich importiert!',
    toast_title_req: 'Bitte geben Sie einen Titel ein!',
    toast_content_req: 'Bitte geben Sie den Prompt-Inhalt ein!',
    confirm_perm_delete: 'Möchten Sie diesen Prompt wirklich endgültig löschen?',
    confirm_empty_trash: 'Möchten Sie wirklich den gesamten Papierkorb leeren?',
    confirm_reset_data: 'Möchten Sie wirklich auf die 12 Standard-Prompts zurücksetzen?'
  },
  es: {
    badge_offline: 'Offline Listo',
    nav_all: 'Todos los Prompts',
    nav_favorites: 'Favoritos',
    nav_recent: 'Recientes',
    nav_trash: 'Papelera',
    nav_settings: 'Ajustes',
    categories_title: 'Categorías',
    btn_new_prompt: 'Nuevo Prompt',
    search_placeholder: 'Buscar prompts por título, contenido, etiqueta... (Ctrl+F)',
    copy_prompt: '📋 Copiar Prompt',
    view_all_title: 'Todos los Prompts',
    view_fav_title: '⭐ Favoritos',
    view_recent_title: '🕒 Prompts Recientes',
    view_trash_title: '🗑️ Papelera',
    empty_trash_btn: 'Vaciar papelera',
    words_label: 'palabras',
    chars_label: 'caracteres',
    updated_at: 'Actualizado',
    trash_notice: 'Este prompt está en la papelera.',
    btn_restore: 'Restaurar',
    btn_perm_delete: 'Eliminar definitivamente',
    no_selection_title: 'Seleccione un prompt para ver',
    no_selection_desc: 'Seleccione un prompt de la lista o pulse Nuevo Prompt para empezar.',
    modal_create_title: 'Crear Nuevo Prompt',
    modal_edit_title: 'Editar Prompt',
    form_title_label: 'Título',
    form_title_ph: 'ej: Guionista de Documentales para YouTube...',
    form_category_label: 'Categoría',
    form_tags_label: 'Etiquetas (separadas por comas)',
    form_tags_ph: 'youtube, viral, storytelling...',
    form_content_label: 'Contenido del Prompt',
    form_content_ph: 'Introduzca aquí sus instrucciones de prompt de IA...',
    form_favorite_label: '⭐ Marcar como Favorito',
    tip_ctrl_s: 'Pulse Ctrl+S para guardar rápidamente',
    btn_cancel: 'Cancelar (Esc)',
    btn_save: 'Guardar (Ctrl+S)',
    modal_cat_title: 'Añadir Nueva Categoría',
    label_cat_name: 'Nombre de categoría',
    category_name_ph: 'ej: TikTok, Midjourney, Ventas...',
    btn_add: 'Añadir',
    settings_title: 'Ajustes de PromptDock',
    settings_appearance: 'Apariencia',
    setting_theme: 'Tema',
    setting_theme_desc: 'Tema Windows 11 Fluent Mica',
    theme_dark: 'Dark',
    theme_light: 'Light',
    theme_system: 'Sistema',
    setting_font_size: 'Tamaño de fuente',
    setting_font_desc: 'Ajustar tamaño de texto',
    font_small: 'Pequeño',
    font_medium: 'Medio',
    font_large: 'Grande',
    setting_language: 'Idioma (Language)',
    setting_language_desc: 'Seleccionar idioma de interfaz',
    settings_data: 'Gestión de datos',
    setting_export: 'Exportar datos (JSON)',
    setting_export_desc: 'Descargar todos los prompts como copia .json',
    btn_export: 'Exportar JSON',
    setting_import: 'Importar datos (JSON)',
    setting_import_desc: 'Restaurar o fusionar prompts desde archivo .json',
    btn_import: 'Importar JSON',
    setting_reset: 'Restablecer datos de muestra',
    setting_reset_desc: 'Restablecer todo a los 12 prompts de muestra iniciales',
    btn_reset: 'Restablecer',
    settings_shortcuts: 'Atajos de Teclado',
    shortcut_search: 'Búsqueda en tiempo real',
    shortcut_new: 'Nuevo prompt',
    shortcut_save: 'Guardar al editar',
    shortcut_copy: 'Copiar prompt seleccionado',
    shortcut_nav: 'Navegar por la lista',
    shortcut_trash: 'Mover a la papelera',
    shortcut_esc: 'Cerrar / Salir',
    shortcut_global: 'Atajo de inicio rápido',
    about_desc: 'Windows 11 PWA • 100% Offline • Listo para empaquetar MSIX en Microsoft Store',
    btn_close: 'Cerrar',
    empty_search_title: 'No se encontraron prompts',
    empty_search_desc: 'Pruebe con otras palabras clave o cree un nuevo prompt.',
    empty_trash_title: 'La papelera está vacía',
    empty_trash_desc: 'No hay prompts en la papelera.',
    empty_fav_title: 'Aún no hay favoritos',
    empty_fav_desc: 'Pulse el icono de estrella ⭐ para añadir prompts aquí.',
    empty_all_title: 'Aún no hay prompts',
    empty_all_desc: 'Pulse Nuevo Prompt para empezar.',
    btn_empty_action: 'Crear Prompt',
    toast_copied: '📋 ¡Copiado al portapapeles!',
    toast_saved: '¡Nuevo prompt creado con éxito!',
    toast_updated: '¡Prompt actualizado con éxito!',
    toast_trash: '¡Prompt movido a la papelera!',
    toast_restored: '¡Prompt restaurado con éxito!',
    toast_perm_delete: '¡Prompt eliminado definitivamente!',
    toast_trash_emptied: '¡Papelera vaciada con éxito!',
    toast_fav_added: 'Añadido a Favoritos ⭐',
    toast_fav_removed: 'Eliminado de Favoritos',
    toast_lang_changed: '¡Idioma de interfaz actualizado!',
    toast_category_added: '¡Nueva categoría añadida!',
    toast_category_exists: '¡Esta categoría ya existe!',
    toast_reset_success: '¡12 prompts de muestra restaurados!',
    toast_export_success: '¡Datos JSON exportados con éxito!',
    toast_import_success: '¡Prompts importados con éxito!',
    toast_title_req: '¡Por favor, introduzca un título!',
    toast_content_req: '¡Por favor, introduzca el contenido del prompt!',
    confirm_perm_delete: '¿Está seguro de que desea eliminar definitivamente este prompt?',
    confirm_empty_trash: '¿Está seguro de que desea vaciar toda la papelera?',
    confirm_reset_data: '¿Está seguro de que desea restablecer la app a los 12 ejemplos iniciales?'
  }
};

// ==========================================================================
// 2. STORAGE ENGINE (localStorage with Fallbacks & Schema Migration)
// ==========================================================================
const STORAGE_KEYS = {
  DATA: 'promptdock_v1_prompts',
  CATEGORIES: 'promptdock_v1_categories',
  RECENT: 'promptdock_v1_recent_ids',
  SETTINGS: 'promptdock_v1_settings'
};

const DEFAULT_SETTINGS = {
  theme: 'dark',
  fontSize: 'medium',
  language: 'en'
};

class StorageManager {
  static getPrompts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DATA);
      if (!raw) {
        this.savePrompts(INITIAL_PROMPTS);
        return INITIAL_PROMPTS;
      }
      const existing = JSON.parse(raw);
      // Auto-migrate: merge any new initial prompts that don't exist yet
      const existingIds = new Set(existing.map(p => p.id));
      let hasNew = false;
      INITIAL_PROMPTS.forEach(ip => {
        if (!existingIds.has(ip.id)) {
          existing.push(ip);
          hasNew = true;
        }
      });
      if (hasNew) {
        this.savePrompts(existing);
      }
      return existing;
    } catch (e) {
      console.error('Failed to load prompts from storage', e);
      return INITIAL_PROMPTS;
    }
  }

  static savePrompts(prompts) {
    try {
      localStorage.setItem(STORAGE_KEYS.DATA, JSON.stringify(prompts));
    } catch (e) {
      console.error('Failed to save prompts', e);
    }
  }

  static getCategories() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
      if (!raw) {
        this.saveCategories(DEFAULT_CATEGORIES);
        return DEFAULT_CATEGORIES;
      }
      const existing = JSON.parse(raw);
      // Auto-migrate: merge any new categories
      let hasNew = false;
      DEFAULT_CATEGORIES.forEach(cat => {
        if (!existing.includes(cat)) {
          existing.push(cat);
          hasNew = true;
        }
      });
      if (hasNew) {
        this.saveCategories(existing);
      }
      return existing;
    } catch (e) {
      return DEFAULT_CATEGORIES;
    }
  }

  static saveCategories(cats) {
    try {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(cats));
    } catch (e) {
      console.error('Failed to save categories', e);
    }
  }

  static getRecentIds() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RECENT);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  static saveRecentIds(ids) {
    try {
      // Keep only last 20
      const trimmed = ids.slice(0, 20);
      localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(trimmed));
    } catch (e) {
      console.error('Failed to save recent ids', e);
    }
  }

  static getSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
    } catch (e) {
      return DEFAULT_SETTINGS;
    }
  }

  static saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }

  static resetToDefault() {
    localStorage.removeItem(STORAGE_KEYS.DATA);
    localStorage.removeItem(STORAGE_KEYS.CATEGORIES);
    localStorage.removeItem(STORAGE_KEYS.RECENT);
    this.savePrompts(INITIAL_PROMPTS);
    this.saveCategories(DEFAULT_CATEGORIES);
  }
}

// ==========================================================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================================================
class ToastService {
  static show(message, type = 'info', duration = 2400) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon based on type
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'danger') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, duration);
  }
}

// ==========================================================================
// 4. MAIN APP STATE & CONTROLLER
// ==========================================================================
class PromptDockApp {
  constructor() {
    this.prompts = StorageManager.getPrompts();
    this.categories = StorageManager.getCategories();
    this.recentIds = StorageManager.getRecentIds();
    this.settings = StorageManager.getSettings();

    this.currentView = 'all'; // 'all' | 'favorites' | 'recent' | 'trash' | category name
    this.searchQuery = '';
    this.selectedPromptId = null;
    this.currentPromptVariables = {};
    this.activeDetectedVariables = [];

    this.initElements();
    this.applySettings();
    this.applyLanguage();
    this.bindEvents();
    this.renderSidebarCategories();
    this.updateCounters();
    this.renderPromptsList();
    this.selectInitialPrompt();
    this.handleUrlActions();
  }

  handleUrlActions() {
    try {
      const params = new URLSearchParams(window.location.search);
      const action = params.get('action');
      const view = params.get('view');

      if (view) {
        this.setView(view);
      }
      if (action === 'new') {
        setTimeout(() => this.openCreateModal(), 120);
      } else if (action === 'search') {
        setTimeout(() => {
          this.searchInput.focus();
          this.searchInput.select();
        }, 120);
      }
    } catch (e) {
      console.warn('URL params parsing failed', e);
    }
  }

  // Bind DOM References
  initElements() {
    // Navigation
    this.navItems = document.querySelectorAll('.nav-group .nav-item');
    this.categoryList = document.getElementById('categoryList');
    this.btnNewPrompt = document.getElementById('btnNewPrompt');
    this.btnAddCategory = document.getElementById('btnAddCategory');
    this.btnOpenSettings = document.getElementById('btnOpenSettingsTop');
    this.navSettings = document.getElementById('navSettings');
    this.btnQuickTheme = document.getElementById('btnQuickTheme');
    this.btnQuickLang = document.getElementById('btnQuickLang');
    this.languageSelect = document.getElementById('languageSelect');

    // Counts
    this.countAll = document.getElementById('countAll');
    this.countFavorites = document.getElementById('countFavorites');
    this.countRecent = document.getElementById('countRecent');
    this.countTrash = document.getElementById('countTrash');

    // Main
    this.searchInput = document.getElementById('searchInput');
    this.btnClearSearch = document.getElementById('btnClearSearch');
    this.viewTitle = document.getElementById('viewTitle');
    this.viewMeta = document.getElementById('viewMeta');
    this.viewActions = document.getElementById('viewActions');
    this.promptsList = document.getElementById('promptsList');
    this.emptyState = document.getElementById('emptyState');
    this.emptyTitle = document.getElementById('emptyTitle');
    this.emptyDesc = document.getElementById('emptyDesc');
    this.btnEmptyAction = document.getElementById('btnEmptyAction');

    // Preview
    this.previewCategory = document.getElementById('previewCategory');
    this.btnPreviewFav = document.getElementById('btnPreviewFav');
    this.btnPreviewEdit = document.getElementById('btnPreviewEdit');
    this.btnPreviewDelete = document.getElementById('btnPreviewDelete');
    this.btnHugeCopy = document.getElementById('btnHugeCopy');
    this.previewTitle = document.getElementById('previewTitle');
    this.previewStats = document.getElementById('previewStats');
    this.previewDate = document.getElementById('previewDate');
    this.previewTagsContainer = document.getElementById('previewTagsContainer');
    this.previewContent = document.getElementById('previewContent');
    this.trashActionBar = document.getElementById('trashActionBar');
    this.btnRestorePrompt = document.getElementById('btnRestorePrompt');
    this.btnPermanentDelete = document.getElementById('btnPermanentDelete');

    // Dynamic Variables
    this.variablesSection = document.getElementById('variablesSection');
    this.variablesCount = document.getElementById('variablesCount');
    this.btnResetVariables = document.getElementById('btnResetVariables');
    this.variablesGrid = document.getElementById('variablesGrid');

    // Dialogs
    this.promptModal = document.getElementById('promptModal');
    this.modalTitle = document.getElementById('modalTitle');
    this.promptForm = document.getElementById('promptForm');
    this.formPromptId = document.getElementById('formPromptId');
    this.formTitle = document.getElementById('formTitle');
    this.formCategory = document.getElementById('formCategory');
    this.formTags = document.getElementById('formTags');
    this.formContent = document.getElementById('formContent');
    this.formCharCount = document.getElementById('formCharCount');
    this.formFavorite = document.getElementById('formFavorite');
    this.btnClosePromptModal = document.getElementById('btnClosePromptModal');
    this.btnCancelPrompt = document.getElementById('btnCancelPrompt');

    // Settings Modal
    this.settingsModal = document.getElementById('settingsModal');
    this.btnCloseSettingsModal = document.getElementById('btnCloseSettingsModal');
    this.btnSaveSettings = document.getElementById('btnSaveSettings');
    this.btnExportJson = document.getElementById('btnExportJson');
    this.btnTriggerImport = document.getElementById('btnTriggerImport');
    this.fileImportJson = document.getElementById('fileImportJson');
    this.btnResetData = document.getElementById('btnResetData');

    // Category Modal
    this.categoryModal = document.getElementById('categoryModal');
    this.categoryForm = document.getElementById('categoryForm');
    this.newCategoryName = document.getElementById('newCategoryName');
    this.btnCloseCatModal = document.getElementById('btnCloseCatModal');
    this.btnCancelCategory = document.getElementById('btnCancelCategory');
  }


  // ------------------------------------------------------------------------
  // Internationalization (i18n) Engine
  // ------------------------------------------------------------------------
  t(key, fallback = '') {
    const lang = this.settings.language || 'en';
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'] || TRANSLATIONS['vi'];
    return dict[key] || TRANSLATIONS['en']?.[key] || TRANSLATIONS['vi']?.[key] || fallback || key;
  }

  setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    this.settings.language = lang;
    StorageManager.saveSettings(this.settings);
    this.applyLanguage();
    ToastService.show(this.t('toast_lang_changed'), 'success');
  }

  applyLanguage() {
    const lang = this.settings.language || 'en';
    document.documentElement.lang = lang;

    if (this.languageSelect) {
      this.languageSelect.value = lang;
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        el.textContent = text;
      }
    });

    // Update placeholders and input titles
    if (this.searchInput) {
      this.searchInput.placeholder = this.t('search_placeholder');
    }
    if (this.formTitle) {
      this.formTitle.placeholder = this.t('form_title_ph');
    }
    if (this.formTags) {
      this.formTags.placeholder = this.t('form_tags_ph');
    }
    if (this.formContent) {
      this.formContent.placeholder = this.t('form_content_ph');
    }
    if (this.newCategoryName) {
      this.newCategoryName.placeholder = this.t('category_name_ph');
    }

    // Update Copy Button label
    const copyLabelSpan = this.btnHugeCopy.querySelector('span:first-of-type');
    if (copyLabelSpan) {
      copyLabelSpan.textContent = this.t('copy_prompt');
    }

    // Re-render view header & preview panel
    this.updateViewHeader();
    if (this.selectedPromptId) {
      this.renderPreview(this.getPromptById(this.selectedPromptId));
    } else {
      this.clearPreview();
    }
  }

  updateViewHeader() {
    this.viewActions.innerHTML = '';
    if (this.currentView === 'all') {
      this.viewTitle.textContent = this.t('view_all_title');
    } else if (this.currentView === 'favorites') {
      this.viewTitle.textContent = this.t('view_fav_title');
    } else if (this.currentView === 'recent') {
      this.viewTitle.textContent = this.t('view_recent_title');
    } else if (this.currentView === 'trash') {
      this.viewTitle.textContent = this.t('view_trash_title');
      const btnEmptyTrash = document.createElement('button');
      btnEmptyTrash.className = 'btn-secondary small';
      btnEmptyTrash.textContent = this.t('empty_trash_btn');
      btnEmptyTrash.addEventListener('click', () => this.emptyTrash());
      this.viewActions.appendChild(btnEmptyTrash);
    } else {
      this.viewTitle.textContent = '📁 ' + this.currentView;
    }
  }

  // ------------------------------------------------------------------------
  // Settings & Theme
  // ------------------------------------------------------------------------
  applySettings() {
    const root = document.documentElement;
    let themeToApply = this.settings.theme;
    if (themeToApply === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeToApply = prefersDark ? 'dark' : 'light';
    }
    root.setAttribute('data-theme', themeToApply);
    root.setAttribute('data-font-size', this.settings.fontSize);

    // Update settings UI buttons
    document.querySelectorAll('#themeSegmented .segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.themeVal === this.settings.theme);
    });
    document.querySelectorAll('#fontSizeSegmented .segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sizeVal === this.settings.fontSize);
    });
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    this.settings.theme = next;
    StorageManager.saveSettings(this.settings);
    this.applySettings();
    ToastService.show(`Chuyển sang giao diện ${next === 'dark' ? 'Dark' : 'Light'}`, 'info');
  }

  // ------------------------------------------------------------------------
  // Event Listeners
  // ------------------------------------------------------------------------
  bindEvents() {
    // Navigation Clicks
    this.navItems.forEach(item => {
      item.addEventListener('click', () => {
        this.setView(item.dataset.view);
      });
    });

    // Quick Theme
    this.btnQuickTheme.addEventListener('click', () => this.toggleTheme());

    // Quick Language Cycle Button (Titlebar)
    if (this.btnQuickLang) {
      this.btnQuickLang.addEventListener('click', () => {
        const order = ['vi', 'en', 'ja', 'ko', 'zh', 'fr', 'de', 'es'];
        const currentIdx = order.indexOf(this.settings.language);
        const nextLang = order[(currentIdx + 1) % order.length];
        this.setLanguage(nextLang);
      });
    }

    // Language Dropdown in Settings
    if (this.languageSelect) {
      this.languageSelect.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }

    // Settings open
    this.btnOpenSettings.addEventListener('click', () => this.openSettingsModal());
    this.navSettings.addEventListener('click', () => this.openSettingsModal());
    this.btnCloseSettingsModal.addEventListener('click', () => this.settingsModal.close());
    this.btnSaveSettings.addEventListener('click', () => this.settingsModal.close());

    // Search Input
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.btnClearSearch.classList.toggle('visible', this.searchQuery.length > 0);
      this.renderPromptsList();
    });

    this.btnClearSearch.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.btnClearSearch.classList.remove('visible');
      this.searchInput.focus();
      this.renderPromptsList();
    });

    // Add Prompt
    this.btnNewPrompt.addEventListener('click', () => this.openCreateModal());
    this.btnEmptyAction.addEventListener('click', () => this.openCreateModal());

    // Add Category
    this.btnAddCategory.addEventListener('click', () => this.openAddCategoryModal());
    this.btnCloseCatModal.addEventListener('click', () => this.categoryModal.close());
    this.btnCancelCategory.addEventListener('click', () => this.categoryModal.close());
    this.categoryForm.addEventListener('submit', (e) => this.handleSaveCategory(e));

    // Form Prompt Events
    this.btnClosePromptModal.addEventListener('click', () => this.promptModal.close());
    this.btnCancelPrompt.addEventListener('click', () => this.promptModal.close());
    this.promptForm.addEventListener('submit', (e) => this.handleSavePrompt(e));
    this.formContent.addEventListener('input', () => {
      this.formCharCount.textContent = `${this.formContent.value.length} ký tự`;
    });

    // Preview Actions
    this.btnHugeCopy.addEventListener('click', () => this.copyCurrentPrompt());
    this.btnPreviewFav.addEventListener('click', () => this.toggleFavoriteCurrent());
    this.btnPreviewEdit.addEventListener('click', () => this.openEditModalCurrent());
    this.btnPreviewDelete.addEventListener('click', () => this.deleteCurrentPrompt());
    this.btnRestorePrompt.addEventListener('click', () => this.restoreCurrentPrompt());
    this.btnPermanentDelete.addEventListener('click', () => this.permanentDeleteCurrentPrompt());
    if (this.btnResetVariables) {
      this.btnResetVariables.addEventListener('click', () => this.resetVariables());
    }

    // Settings actions
    document.querySelectorAll('#themeSegmented .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.settings.theme = btn.dataset.themeVal;
        StorageManager.saveSettings(this.settings);
        this.applySettings();
      });
    });

    document.querySelectorAll('#fontSizeSegmented .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.settings.fontSize = btn.dataset.sizeVal;
        StorageManager.saveSettings(this.settings);
        this.applySettings();
      });
    });

    this.btnExportJson.addEventListener('click', () => this.exportData());
    this.btnTriggerImport.addEventListener('click', () => this.fileImportJson.click());
    this.fileImportJson.addEventListener('change', (e) => this.importData(e));
    this.btnResetData.addEventListener('click', () => this.resetData());

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));
  }

  // ------------------------------------------------------------------------
  // Keyboard Shortcuts Engine
  // ------------------------------------------------------------------------
  handleGlobalKeydown(e) {
    const isModalOpen = this.promptModal.open || this.settingsModal.open || this.categoryModal.open;

    // Ctrl + Shift + Space: Global Focus / Alert
    if (e.ctrlKey && e.shiftKey && (e.code === 'Space' || e.key === ' ')) {
      e.preventDefault();
      this.searchInput.focus();
      this.searchInput.select();
      ToastService.show('PromptDock Activated! Gõ để tìm kiếm...', 'info');
      return;
    }

    // Ctrl + F: Focus Search
    if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {
      e.preventDefault();
      this.searchInput.focus();
      this.searchInput.select();
      return;
    }

    // Ctrl + N: New Prompt
    if ((e.ctrlKey || e.metaKey) && (e.key === 'n' || e.key === 'N')) {
      e.preventDefault();
      this.openCreateModal();
      return;
    }

    // Ctrl + S: Save prompt if modal open
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      if (this.promptModal.open) {
        e.preventDefault();
        this.handleSavePrompt();
        return;
      }
    }

    // Escape: Close modal or clear search
    if (e.key === 'Escape') {
      if (this.promptModal.open) {
        this.promptModal.close();
        return;
      }
      if (this.settingsModal.open) {
        this.settingsModal.close();
        return;
      }
      if (this.categoryModal.open) {
        this.categoryModal.close();
        return;
      }
      if (this.searchQuery) {
        this.searchInput.value = '';
        this.searchQuery = '';
        this.btnClearSearch.classList.remove('visible');
        this.renderPromptsList();
        return;
      }
    }

    // While modal is open, don't trigger list shortcuts
    if (isModalOpen) return;

    // Delete key: move currently selected prompt to trash
    if (e.key === 'Delete' && document.activeElement !== this.searchInput) {
      if (this.selectedPromptId) {
        e.preventDefault();
        this.deleteCurrentPrompt();
      }
      return;
    }

    // Enter key: copy currently selected prompt (if not typing in search)
    if (e.key === 'Enter' && document.activeElement !== this.searchInput) {
      if (this.selectedPromptId) {
        e.preventDefault();
        this.copyCurrentPrompt();
      }
      return;
    }

    // Arrow Up / Down: Navigate list
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const activeList = this.getFilteredPrompts();
      if (activeList.length === 0) return;

      e.preventDefault();
      const currentIndex = activeList.findIndex(p => p.id === this.selectedPromptId);
      let nextIndex = 0;

      if (e.key === 'ArrowDown') {
        nextIndex = currentIndex >= 0 ? Math.min(currentIndex + 1, activeList.length - 1) : 0;
      } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      }

      const nextPrompt = activeList[nextIndex];
      if (nextPrompt) {
        this.selectPrompt(nextPrompt.id);
        const cardElem = document.querySelector(`.prompt-card[data-id="${nextPrompt.id}"]`);
        if (cardElem) cardElem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }

  // ------------------------------------------------------------------------
  // Views & Filtering
  // ------------------------------------------------------------------------
  setView(viewName) {
    this.currentView = viewName;
    
    // Update nav active states
    this.navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.view === viewName);
    });

    document.querySelectorAll('.category-item').forEach(item => {
      item.classList.toggle('active', item.dataset.cat === viewName);
    });

    this.updateViewHeader();

    this.renderPromptsList();
    this.selectInitialPrompt();
  }

  getFilteredPrompts() {
    let list = [...this.prompts];

    // Filter by view
    if (this.currentView === 'all') {
      list = list.filter(p => !p.inTrash);
    } else if (this.currentView === 'favorites') {
      list = list.filter(p => !p.inTrash && p.favorite);
    } else if (this.currentView === 'recent') {
      // Sort by recentIds order
      const recentOrder = new Map(this.recentIds.map((id, idx) => [id, idx]));
      list = list.filter(p => !p.inTrash && recentOrder.has(p.id));
      list.sort((a, b) => (recentOrder.get(a.id) ?? 999) - (recentOrder.get(b.id) ?? 999));
    } else if (this.currentView === 'trash') {
      list = list.filter(p => p.inTrash);
    } else {
      // Category view
      list = list.filter(p => !p.inTrash && p.category.toLowerCase() === this.currentView.toLowerCase());
    }

    // Filter by Search Query
    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(p => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inContent = p.content.toLowerCase().includes(q);
        const inCategory = p.category.toLowerCase().includes(q);
        const inTags = p.tags.some(t => t.toLowerCase().includes(q));
        return inTitle || inContent || inCategory || inTags;
      });
    }

    // Default sort by updatedAt descending unless in recent view
    if (this.currentView !== 'recent') {
      list.sort((a, b) => b.updatedAt - a.updatedAt);
    }

    return list;
  }

  updateCounters() {
    const notInTrash = this.prompts.filter(p => !p.inTrash);
    this.countAll.textContent = notInTrash.length;
    this.countFavorites.textContent = notInTrash.filter(p => p.favorite).length;
    
    // Count valid recents
    const validRecents = this.recentIds.filter(id => notInTrash.some(p => p.id === id));
    this.countRecent.textContent = validRecents.length;

    this.countTrash.textContent = this.prompts.filter(p => p.inTrash).length;

    // Update category badge counters
    this.categories.forEach(cat => {
      const el = document.getElementById(`cat-count-${this.slugify(cat)}`);
      if (el) {
        const count = notInTrash.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
        el.textContent = count;
      }
    });
  }

  // ------------------------------------------------------------------------
  // Renderers
  // ------------------------------------------------------------------------
  renderSidebarCategories() {
    this.categoryList.innerHTML = '';
    this.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `nav-item category-item ${this.currentView === cat ? 'active' : ''}`;
      btn.dataset.cat = cat;
      
      const slug = this.slugify(cat);
      btn.innerHTML = `
        <span class="nav-label">${this.escapeHtml(cat)}</span>
        <span class="nav-count" id="cat-count-${slug}">0</span>
      `;

      btn.addEventListener('click', () => {
        this.setView(cat);
      });

      this.categoryList.appendChild(btn);
    });
  }

  renderPromptsList() {
    const list = this.getFilteredPrompts();
    this.promptsList.innerHTML = '';
    this.viewMeta.textContent = `${list.length} prompt${list.length !== 1 ? 's' : ''}`;

    if (list.length === 0) {
      this.emptyState.classList.remove('hidden');
      if (this.searchQuery) {
        this.emptyTitle.textContent = `${this.t('empty_search_title')} ("${this.searchQuery}")`;
        this.emptyDesc.textContent = this.t('empty_search_desc');
      } else if (this.currentView === 'trash') {
        this.emptyTitle.textContent = this.t('empty_trash_title');
        this.emptyDesc.textContent = this.t('empty_trash_desc');
      } else if (this.currentView === 'favorites') {
        this.emptyTitle.textContent = this.t('empty_fav_title');
        this.emptyDesc.textContent = this.t('empty_fav_desc');
      } else {
        this.emptyTitle.textContent = this.t('empty_all_title');
        this.emptyDesc.textContent = this.t('empty_all_desc');
      }
      this.clearPreview();
      return;
    }

    this.emptyState.classList.add('hidden');

    list.forEach(p => {
      const card = document.createElement('div');
      card.className = `prompt-card ${p.id === this.selectedPromptId ? 'selected' : ''}`;
      card.dataset.id = p.id;
      card.tabIndex = 0;

      // Card Header
      const topRow = document.createElement('div');
      topRow.className = 'card-top-row';

      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = p.title;

      const actions = document.createElement('div');
      actions.className = 'card-actions';

      // Favorite toggle button inside card
      const btnFav = document.createElement('button');
      btnFav.className = `btn-card-action ${p.favorite ? 'favorited' : ''}`;
      btnFav.title = p.favorite ? 'Bỏ yêu thích' : 'Yêu thích';
      btnFav.innerHTML = `<svg class="star-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      btnFav.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFavorite(p.id);
      });
      actions.appendChild(btnFav);

      topRow.appendChild(title);
      topRow.appendChild(actions);

      // Card Content Snippet
      const snippet = document.createElement('p');
      snippet.className = 'card-snippet';
      snippet.textContent = p.content.replace(/\n+/g, ' ').substring(0, 120) + (p.content.length > 120 ? '...' : '');

      // Card Footer
      const footerRow = document.createElement('div');
      footerRow.className = 'card-footer-row';

      const badges = document.createElement('div');
      badges.className = 'card-badges';

      const catChip = document.createElement('span');
      catChip.className = 'category-chip';
      catChip.textContent = p.category;
      badges.appendChild(catChip);

      if (p.tags && p.tags.length > 0) {
        const tagChip = document.createElement('span');
        tagChip.className = 'tag-chip';
        tagChip.textContent = `#${p.tags[0]}`;
        badges.appendChild(tagChip);
      }

      const dateStr = this.formatDate(p.updatedAt);
      const dateSpan = document.createElement('span');
      dateSpan.className = 'card-date';
      dateSpan.textContent = dateStr;

      footerRow.appendChild(badges);
      footerRow.appendChild(dateSpan);

      card.appendChild(topRow);
      card.appendChild(snippet);
      card.appendChild(footerRow);

      card.addEventListener('click', () => this.selectPrompt(p.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.selectPrompt(p.id);
        }
      });

      this.promptsList.appendChild(card);
    });
  }

  selectInitialPrompt() {
    const list = this.getFilteredPrompts();
    if (list.length > 0) {
      // If current selected prompt is not in list, pick the first
      if (!list.some(p => p.id === this.selectedPromptId)) {
        this.selectPrompt(list[0].id);
      } else {
        this.renderPreview(this.getPromptById(this.selectedPromptId));
      }
    } else {
      this.selectedPromptId = null;
      this.clearPreview();
    }
  }

  selectPrompt(id) {
    const prompt = this.getPromptById(id);
    if (!prompt) return;

    this.selectedPromptId = id;

    // Track in recents if not in trash
    if (!prompt.inTrash) {
      this.trackRecent(id);
    }

    // Update active class on card elements
    document.querySelectorAll('.prompt-card').forEach(card => {
      card.classList.toggle('selected', card.dataset.id === id);
    });

    this.renderPreview(prompt);
  }

  // ------------------------------------------------------------------------
  // Dynamic Variables Auto-Fill Engine
  // ------------------------------------------------------------------------
  extractVariables(text) {
    if (!text) return [];
    // Match [VARIABLE_NAME] (excluding cues with colons like [VISUAL: ...] and markdown links [text](url))
    // Also match {{variable_name}}
    const regex = /(?:\[([A-Za-z0-9][A-Za-z0-9_\s\-\/]{1,35})\](?!\()|\{\{([A-Za-z0-9][A-Za-z0-9_\s\-\/]{1,35})\}\})/g;
    const matches = new Set();
    let m;
    while ((m = regex.exec(text)) !== null) {
      const varName = (m[1] || m[2]).trim();
      // Exclude cues with colons, numbers-only, or formatting headers
      if (!varName.includes(':') && varName.length >= 2) {
        matches.add(varName);
      }
    }
    return Array.from(matches);
  }

  renderVariablesForm(variables) {
    this.activeDetectedVariables = variables || [];
    if (!this.variablesSection || !this.variablesGrid) return;

    if (!variables || variables.length === 0) {
      this.variablesSection.classList.add('hidden');
      this.variablesGrid.innerHTML = '';
      return;
    }

    this.variablesSection.classList.remove('hidden');
    if (this.variablesCount) {
      this.variablesCount.textContent = `${variables.length} ${variables.length === 1 ? 'variable' : 'variables'}`;
    }
    this.variablesGrid.innerHTML = '';

    variables.forEach(varKey => {
      const item = document.createElement('div');
      item.className = 'variable-item';

      const label = document.createElement('label');
      label.className = 'variable-label';
      label.textContent = varKey;
      label.title = varKey;

      const input = document.createElement('input');
      input.type = 'text';
      input.className = `variable-input ${this.currentPromptVariables[varKey] ? 'filled' : ''}`;
      input.placeholder = `Enter ${varKey}...`;
      input.value = this.currentPromptVariables[varKey] || '';
      input.dataset.key = varKey;

      input.addEventListener('input', (e) => {
        const val = e.target.value;
        this.currentPromptVariables[varKey] = val;
        input.classList.toggle('filled', !!val.trim());
        this.updateSubstitutedPreview();
      });

      item.appendChild(label);
      item.appendChild(input);
      this.variablesGrid.appendChild(item);
    });
  }

  resetVariables() {
    this.currentPromptVariables = {};
    if (this.variablesGrid) {
      const inputs = this.variablesGrid.querySelectorAll('.variable-input');
      inputs.forEach(input => {
        input.value = '';
        input.classList.remove('filled');
      });
    }
    this.updateSubstitutedPreview();
    ToastService.show(this.t('toast_vars_reset'), 'info', 1600);
  }

  getSubstitutedContent(rawContent) {
    if (!rawContent || !this.activeDetectedVariables || this.activeDetectedVariables.length === 0) {
      return rawContent;
    }
    let substituted = rawContent;
    this.activeDetectedVariables.forEach(varKey => {
      const userVal = this.currentPromptVariables[varKey];
      if (userVal && userVal.trim()) {
        const escaped = varKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`\\[${escaped}\\]|\\{\\{${escaped}\\}\\}`, 'g');
        substituted = substituted.replace(re, userVal.trim());
      }
    });
    return substituted;
  }

  updateSubstitutedPreview() {
    const prompt = this.getPromptById(this.selectedPromptId);
    if (!prompt) return;

    if (!this.activeDetectedVariables || this.activeDetectedVariables.length === 0) {
      this.previewContent.textContent = prompt.content;
      return;
    }

    let displayHtml = this.escapeHtml(prompt.content);

    this.activeDetectedVariables.forEach(varKey => {
      const userVal = this.currentPromptVariables[varKey];
      const escapedKey = this.escapeHtml(varKey);
      const regexKey = escapedKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      if (userVal && userVal.trim()) {
        const escapedVal = this.escapeHtml(userVal.trim());
        const re = new RegExp(`\\[${regexKey}\\]|\\{\\{${regexKey}\\}\\}`, 'g');
        displayHtml = displayHtml.replace(re, `<mark class="var-highlight">${escapedVal}</mark>`);
      } else {
        const re = new RegExp(`\\[${regexKey}\\]|\\{\\{${regexKey}\\}\\}`, 'g');
        displayHtml = displayHtml.replace(re, `<span class="var-placeholder">[${escapedKey}]</span>`);
      }
    });

    this.previewContent.innerHTML = displayHtml;
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  renderPreview(prompt) {
    if (!prompt) {
      this.clearPreview();
      return;
    }

    this.previewCategory.textContent = prompt.category;
    this.previewTitle.textContent = prompt.title;

    // Extract & Render variables
    this.currentPromptVariables = {};
    const detectedVars = this.extractVariables(prompt.content);
    this.renderVariablesForm(detectedVars);
    this.updateSubstitutedPreview();

    // Stats
    const words = prompt.content.trim() ? prompt.content.trim().split(/\s+/).length : 0;
    const chars = prompt.content.length;
    this.previewStats.textContent = `${words} ${this.t('words_label')} • ${chars} ${this.t('chars_label')}`;
    this.previewDate.textContent = `${this.t('updated_at')}: ${this.formatFullDate(prompt.updatedAt)}`;

    // Favorite state
    this.btnPreviewFav.classList.toggle('favorited', !!prompt.favorite);
    this.btnPreviewFav.title = prompt.favorite ? 'Bỏ yêu thích' : 'Yêu thích';

    // Tags
    this.previewTagsContainer.innerHTML = '';
    if (prompt.tags && prompt.tags.length > 0) {
      prompt.tags.forEach(t => {
        const pill = document.createElement('span');
        pill.className = 'tag-chip';
        pill.textContent = `#${t}`;
        this.previewTagsContainer.appendChild(pill);
      });
    }

    // Trash state controls
    if (prompt.inTrash) {
      this.trashActionBar.classList.remove('hidden');
      this.btnPreviewDelete.style.display = 'none';
      this.btnPreviewEdit.style.display = 'none';
    } else {
      this.trashActionBar.classList.add('hidden');
      this.btnPreviewDelete.style.display = 'flex';
      this.btnPreviewEdit.style.display = 'flex';
    }
  }

  clearPreview() {
    this.previewCategory.textContent = 'Category';
    this.previewTitle.textContent = this.t('no_selection_title');
    this.previewContent.textContent = this.t('no_selection_desc');
    this.previewStats.textContent = `0 ${this.t('words_label')} • 0 ${this.t('chars_label')}`;
    this.previewDate.textContent = '--';
    this.previewTagsContainer.innerHTML = '';
    this.trashActionBar.classList.add('hidden');
    if (this.variablesSection) {
      this.variablesSection.classList.add('hidden');
    }
    this.currentPromptVariables = {};
    this.activeDetectedVariables = [];
  }

  // ------------------------------------------------------------------------
  // CRUD Prompt Operations
  // ------------------------------------------------------------------------
  openCreateModal() {
    this.modalTitle.textContent = this.t('modal_create_title');
    this.formPromptId.value = '';
    this.formTitle.value = '';
    this.formTags.value = '';
    this.formContent.value = '';
    this.formFavorite.checked = false;
    this.formCharCount.textContent = '0 ký tự';

    this.populateCategorySelect();
    this.promptModal.showModal();
    setTimeout(() => this.formTitle.focus(), 50);
  }

  openEditModalCurrent() {
    if (!this.selectedPromptId) return;
    const p = this.getPromptById(this.selectedPromptId);
    if (!p) return;

    this.modalTitle.textContent = this.t('modal_edit_title');
    this.formPromptId.value = p.id;
    this.formTitle.value = p.title;
    this.formTags.value = (p.tags || []).join(', ');
    this.formContent.value = p.content;
    this.formFavorite.checked = !!p.favorite;
    this.formCharCount.textContent = `${p.content.length} ký tự`;

    this.populateCategorySelect(p.category);
    this.promptModal.showModal();
    setTimeout(() => this.formTitle.focus(), 50);
  }

  populateCategorySelect(selectedCategory = '') {
    this.formCategory.innerHTML = '';
    this.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      if (selectedCategory && selectedCategory.toLowerCase() === cat.toLowerCase()) {
        opt.selected = true;
      }
      this.formCategory.appendChild(opt);
    });
  }

  handleSavePrompt(e) {
    if (e) e.preventDefault();

    const title = this.formTitle.value.trim();
    const category = this.formCategory.value;
    const content = this.formContent.value.trim();
    const rawTags = this.formTags.value;
    const favorite = this.formFavorite.checked;

    if (!title) {
      ToastService.show(this.t('toast_title_req'), 'danger');
      this.formTitle.focus();
      return;
    }
    if (!content) {
      ToastService.show(this.t('toast_content_req'), 'danger');
      this.formContent.focus();
      return;
    }

    const tags = rawTags
      ? rawTags.split(',').map(t => t.trim().toLowerCase()).filter(t => t.length > 0)
      : [];

    const editingId = this.formPromptId.value;

    if (editingId) {
      // Edit Existing
      const p = this.getPromptById(editingId);
      if (p) {
        p.title = title;
        p.category = category;
        p.content = content;
        p.tags = tags;
        p.favorite = favorite;
        p.updatedAt = Date.now();
        StorageManager.savePrompts(this.prompts);
        ToastService.show(this.t('toast_updated'), 'success');
        this.selectPrompt(p.id);
      }
    } else {
      // Create New
      const newPrompt = {
        id: 'pd-' + Date.now(),
        title,
        category,
        content,
        tags,
        favorite,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        inTrash: false
      };
      this.prompts.unshift(newPrompt);
      StorageManager.savePrompts(this.prompts);
      ToastService.show(this.t('toast_saved'), 'success');
      this.selectPrompt(newPrompt.id);
    }

    this.updateCounters();
    this.renderPromptsList();
    this.promptModal.close();
  }

  deleteCurrentPrompt() {
    if (!this.selectedPromptId) return;
    const prompt = this.getPromptById(this.selectedPromptId);
    if (!prompt) return;

    prompt.inTrash = true;
    prompt.updatedAt = Date.now();
    StorageManager.savePrompts(this.prompts);
    ToastService.show(this.t('toast_trash'), 'danger');

    this.updateCounters();
    this.renderPromptsList();
    this.selectInitialPrompt();
  }

  restoreCurrentPrompt() {
    if (!this.selectedPromptId) return;
    const prompt = this.getPromptById(this.selectedPromptId);
    if (!prompt) return;

    prompt.inTrash = false;
    prompt.updatedAt = Date.now();
    StorageManager.savePrompts(this.prompts);
    ToastService.show(this.t('toast_restored'), 'success');

    this.updateCounters();
    this.renderPromptsList();
    this.selectInitialPrompt();
  }

  permanentDeleteCurrentPrompt() {
    if (!this.selectedPromptId) return;
    const confirmed = confirm(this.t('confirm_perm_delete'));
    if (!confirmed) return;

    this.prompts = this.prompts.filter(p => p.id !== this.selectedPromptId);
    this.recentIds = this.recentIds.filter(id => id !== this.selectedPromptId);
    StorageManager.savePrompts(this.prompts);
    StorageManager.saveRecentIds(this.recentIds);
    ToastService.show(this.t('toast_perm_delete'), 'info');

    this.updateCounters();
    this.renderPromptsList();
    this.selectInitialPrompt();
  }

  emptyTrash() {
    const count = this.prompts.filter(p => p.inTrash).length;
    if (count === 0) {
      ToastService.show('Thùng rác đã trống!', 'info');
      return;
    }
    const confirmed = confirm(this.t('confirm_empty_trash'));
    if (!confirmed) return;

    this.prompts = this.prompts.filter(p => !p.inTrash);
    StorageManager.savePrompts(this.prompts);
    ToastService.show(this.t('toast_trash_emptied'), 'success');

    this.updateCounters();
    this.renderPromptsList();
    this.selectInitialPrompt();
  }

  toggleFavoriteCurrent() {
    if (!this.selectedPromptId) return;
    this.toggleFavorite(this.selectedPromptId);
  }

  toggleFavorite(id) {
    const p = this.getPromptById(id);
    if (!p) return;

    p.favorite = !p.favorite;
    StorageManager.savePrompts(this.prompts);

    this.updateCounters();
    if (this.currentView === 'favorites' && !p.favorite) {
      this.renderPromptsList();
      this.selectInitialPrompt();
    } else {
      this.renderPromptsList();
      if (this.selectedPromptId === id) {
        this.renderPreview(p);
      }
    }

    ToastService.show(p.favorite ? this.t('toast_fav_added') : this.t('toast_fav_removed'), 'info');
  }

  trackRecent(id) {
    this.recentIds = [id, ...this.recentIds.filter(item => item !== id)].slice(0, 20);
    StorageManager.saveRecentIds(this.recentIds);
    this.updateCounters();
  }

  // ------------------------------------------------------------------------
  // One-Click Copy Prompt
  // ------------------------------------------------------------------------
  async copyCurrentPrompt() {
    if (!this.selectedPromptId) {
      ToastService.show(this.t('no_selection_title'), 'danger');
      return;
    }
    const prompt = this.getPromptById(this.selectedPromptId);
    if (!prompt) return;

    const hasCustomizedVars = Object.values(this.currentPromptVariables).some(v => v && v.trim());
    const content = this.getSubstitutedContent(prompt.content);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content);
      } else {
        // Fallback for older WebViews / iframe environments
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      // Visual feedback
      this.btnHugeCopy.style.transform = 'scale(0.97)';
      setTimeout(() => this.btnHugeCopy.style.transform = '', 140);

      this.trackRecent(prompt.id);
      if (hasCustomizedVars) {
        ToastService.show(this.t('toast_copied_customized'), 'success');
      } else {
        ToastService.show(this.t('toast_copied'), 'success');
      }
    } catch (err) {
      console.error('Copy failed', err);
      ToastService.show('Copy failed. Please select text manually and press Ctrl+C!', 'danger');
    }
  }

  // ------------------------------------------------------------------------
  // Category Management
  // ------------------------------------------------------------------------
  openAddCategoryModal() {
    this.newCategoryName.value = '';
    this.categoryModal.showModal();
    setTimeout(() => this.newCategoryName.focus(), 50);
  }

  handleSaveCategory(e) {
    if (e) e.preventDefault();
    const name = this.newCategoryName.value.trim();
    if (!name) return;

    const exists = this.categories.some(c => c.toLowerCase() === name.toLowerCase());
    if (exists) {
      ToastService.show(this.t('toast_category_exists'), 'danger');
      return;
    }

    this.categories.push(name);
    StorageManager.saveCategories(this.categories);
    this.renderSidebarCategories();
    this.updateCounters();
    this.categoryModal.close();
    ToastService.show(this.t('toast_category_added'), 'success');
    this.setView(name);
  }

  // ------------------------------------------------------------------------
  // Import / Export / Reset
  // ------------------------------------------------------------------------
  openSettingsModal() {
    this.settingsModal.showModal();
  }

  exportData() {
    const exportPayload = {
      app: 'PromptDock',
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      prompts: this.prompts,
      categories: this.categories,
      settings: this.settings
    };

    const jsonStr = JSON.stringify(exportPayload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    const dateStamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `promptdock-backup-${dateStamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    ToastService.show(this.t('toast_export_success'), 'success');
  }

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!parsed || !Array.isArray(parsed.prompts)) {
          throw new Error('Định dạng tệp không hợp lệ: thiếu danh sách prompts');
        }

        // Validate prompt items
        const validPrompts = parsed.prompts.filter(p => p.id && p.title && p.content);
        if (validPrompts.length === 0) {
          throw new Error('Không tìm thấy prompt hợp lệ trong tệp JSON');
        }

        // Merge categories
        if (Array.isArray(parsed.categories)) {
          const catSet = new Set([...this.categories, ...parsed.categories]);
          this.categories = Array.from(catSet);
          StorageManager.saveCategories(this.categories);
        }

        // Merge prompts (update existing by id or prepend new)
        const promptMap = new Map(this.prompts.map(p => [p.id, p]));
        validPrompts.forEach(p => {
          promptMap.set(p.id, {
            ...p,
            inTrash: !!p.inTrash,
            favorite: !!p.favorite,
            tags: Array.isArray(p.tags) ? p.tags : []
          });
        });

        this.prompts = Array.from(promptMap.values());
        StorageManager.savePrompts(this.prompts);

        this.renderSidebarCategories();
        this.updateCounters();
        this.renderPromptsList();
        this.selectInitialPrompt();
        this.settingsModal.close();

        ToastService.show(this.t('toast_import_success'), 'success');
      } catch (err) {
        console.error('Import error', err);
        ToastService.show(`Lỗi nhập tệp: ${err.message}`, 'danger');
      } finally {
        event.target.value = '';
      }
    };
    reader.readAsText(file);
  }

  resetData() {
    const confirmed = confirm(this.t('confirm_reset_data'));
    if (!confirmed) return;

    StorageManager.resetToDefault();
    this.prompts = StorageManager.getPrompts();
    this.categories = StorageManager.getCategories();
    this.recentIds = [];

    this.renderSidebarCategories();
    this.updateCounters();
    this.setView('all');
    this.settingsModal.close();
    ToastService.show(this.t('toast_reset_success'), 'success');
  }

  // ------------------------------------------------------------------------
  // Utility Helpers
  // ------------------------------------------------------------------------
  getPromptById(id) {
    return this.prompts.find(p => p.id === id);
  }

  slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }

  escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  formatDate(timestamp) {
    const d = new Date(timestamp);
    const now = new Date();
    const diffHours = (now - d) / (1000 * 60 * 60);

    if (diffHours < 24 && d.getDate() === now.getDate()) {
      return d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    }
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
  }

  formatFullDate(timestamp) {
    const d = new Date(timestamp);
    return `${d.toLocaleDateString('vi-VN')} ${d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
  }
}

// ==========================================================================
// 5. PWA SERVICE WORKER REGISTRATION
// ==========================================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((reg) => {
        console.log('PromptDock Service Worker registered successfully:', reg.scope);
      })
      .catch((err) => {
        console.warn('Service Worker registration failed:', err);
      });
  });
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.promptDockApp = new PromptDockApp();
});
