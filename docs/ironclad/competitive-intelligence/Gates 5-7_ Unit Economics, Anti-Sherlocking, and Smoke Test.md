# Gates 5-7: Unit Economics, Anti-Sherlocking, and Smoke Test

## Part A: Unit Economics

This section analyzes the unit economics of IronClad, an AI-powered missed-call capture service. The analysis includes a breakdown of the cost per client, gross margin per tier, a break-even analysis, and revenue projections.

### Cost Per Client

The estimated monthly cost to service a single client is **$1.88**. This cost is based on the following variable expenses, assuming an average of 20 missed calls per month:

| Item | Cost | Calculation |
| :--- | :--- | :--- |
| Twilio Phone | $1.00 | $1.00/month |
| Inbound Voice | $0.17 | 20 calls/month * 1 min/call * $0.0085/min |
| Outbound SMS | $0.16 | 20 calls/month * 1 SMS/call * $0.0079/SMS |
| Inbound SMS | $0.15 | 20 calls/month * 1 SMS/call * $0.0075/SMS |
| OpenAI | $0.40 | 20 conversations/month * $0.02/conversation |
| **Total** | **$1.88** | **Sum of all costs** |

### Gross Margin per Tier

Based on the cost per client, the gross margin for each pricing tier is as follows:

| Tier | Monthly Price | Cost per Client | Gross Margin |
| :--- | :--- | :--- | :--- |
| Starter | $97 | $1.88 | $95.12 |
| Pro | $197 | $1.88 | $195.12 |
| Premium | $347 | $1.88 | $345.12 |

### Break-Even Analysis

Given the low variable cost per client, IronClad is profitable from the first customer, assuming no other fixed costs. A more comprehensive break-even analysis should be conducted to account for fixed costs such as salaries, marketing expenses, and other overhead.

### Revenue Projections

The following table illustrates the projected monthly revenue at different customer volumes for each pricing tier:

| Number of Clients | Starter Tier Revenue | Pro Tier Revenue | Premium Tier Revenue |
| :--- | :--- | :--- | :--- |
| 10 | $970 | $1,970 | $3,470 |
| 25 | $2,425 | $4,925 | $8,675 |
| 50 | $4,850 | $9,850 | $17,350 |
| 100 | $9,700 | $19,700 | $34,700 |

## Part B: Anti-Sherlocking

This section examines the competitive landscape and potential threats to IronClad from established players in the market.

### Competitive Landscape

Our research reveals that several major software providers for home service businesses are already offering AI-powered solutions for missed-call capture and customer communication. This presents a significant competitive challenge to IronClad.

**ServiceTitan** offers "Contact Center Pro," a direct competitor that provides AI-powered call summaries, sentiment analysis, and AI voice agents for overflow and after-hours calls [1]. As a deeply entrenched player in the home service software market, their native solution poses a **High** risk.

**Housecall Pro** provides "CSR AI," another direct competitor that offers a 24/7 AI-powered customer service representative that answers calls and books jobs [2]. Similar to ServiceTitan, their established presence and integration make them a formidable competitor, representing a **High** risk.

**Twilio** provides the underlying infrastructure that powers many AI communication solutions. While they do not offer a direct, off-the-shelf solution for home service businesses, they are an enabler for potential competitors. The risk from Twilio is considered **Low**, as they are a platform provider rather than a direct competitor.

**Google** is experimenting with AI to interact with businesses for data gathering, but they do not currently offer a direct missed-call capture service for home service businesses. However, given their vast resources and reach, they represent a potential future threat. The risk level is assessed as **Medium**.

### Moat Analysis

IronClad's current competitive moat is narrow. To compete effectively, the company must focus on a multi-faceted strategy that emphasizes specialization, service, and a unique value proposition. By targeting an underserved niche within the Minneapolis/Hennepin County home services market, IronClad can build a loyal customer base. Providing exceptional, personalized customer service that larger competitors cannot match will be a key differentiator. Furthermore, emphasizing the "AI co-founder" aspect of the service, which provides data-driven insights and recommendations beyond simple call answering, will create a unique selling proposition. Finally, as a smaller, more agile company, IronClad can adapt and innovate more quickly than its larger competitors, allowing it to respond to market changes and customer needs more effectively.

## Part C: Smoke Test

This section outlines a plan for a smoke test to validate the market demand for IronClad before committing to full-scale product development.

### Landing Page Design

A compelling landing page is crucial for a successful smoke test. The page will be designed to convert visitors into leads by clearly communicating the value proposition of IronClad. The landing page will feature a clear and concise headline, such as "Never Miss a Lead Again. IronClad is your 24/7 AI-powered receptionist." It will also include a sub-headline explaining the service, a prominent call to action, a detailed value proposition, social proof in the form of testimonials, and a clear pricing table.

### Metrics and Tools

To measure the effectiveness of the smoke test, we will track key performance indicators (KPIs) such as website traffic, conversion rate, and cost per acquisition (CPA). We will use Google Analytics to monitor website traffic and user behavior, Unbounce or Leadpages to create and A/B test different versions of the landing page, and a CRM such as HubSpot or Zoho to manage leads and track conversions.

### MVP Needs

The minimum viable product (MVP) for the smoke test will consist of a functional landing page with a sign-up form. While the backend will not be fully functional, it will be capable of capturing lead information. The primary goal of the MVP is to gauge market interest and validate the business concept before investing significant resources in product development.

### Success Criteria

The smoke test will be considered successful if it achieves a conversion rate of at least 5% from website visitors to leads, a CPA of less than $50, and generates a significant number of qualified leads from our target market of home service contractors in Minneapolis/Hennepin County.

## References

[1] ServiceTitan. "AI-Powered Contact Center for the Trades | Contact Center Pro." Accessed February 11, 2026. https://www.servicetitan.com/features/pro/contact-center

[2] Housecall Pro. "24/7 AI Customer Service Assistant for Home Services." Accessed February 11, 2026. https://www.housecallpro.com/features/ai-team/csr-ai/
