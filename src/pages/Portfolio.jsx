const articles = []

const featuredCategories = [
  {
    heading: 'Economy',
    items: [
      { title: 'GDP grows in Q1, but little hope for growth in Q2', url: 'https://www.citizen.co.za/business/gdp-grows-in-q1-but-little-hope-for-growth-in-q2/' },
      { title: 'Hiking interest rates does not solve the problem, says analyst', url: 'https://www.citizen.co.za/business/hiking-interest-rates-does-not-solve-the-problem-says-analyst/' },
      { title: 'Unemployment increases as 258 000 youth lost jobs at beginning of 2026', url: 'https://www.citizen.co.za/business/youth-unemployment-rate-q1-2026/' },
      { title: 'Illicit tobacco trade continues to erode SA’s economy', url: 'https://www.citizen.co.za/business/illicit-tobacco-trade-continues-to-erode-sas-economy/' },
      { title: 'SA could be a big loser in Middle East conflict: Oil surges, stronger dollar hits rand', url: 'https://www.citizen.co.za/business/middle-east-conflict-oil-prices-surge-rand-weakens/' },
    ],
  },
  {
    heading: 'Companies',
    items: [
      { title: 'Here are the changes coming to Woolworths’ rewards programme', url: 'https://www.citizen.co.za/business/here-are-the-changes-coming-to-woolworths-rewards-programme/' },
      { title: 'Mr D drivers accuse Takealot company of low pay, mistreatment', url: 'https://www.citizen.co.za/business/mr-d-drivers-accuse-takealot-company-of-low-pay-mistreatment/' },
      { title: 'Spar CEO acknowledges management mistakes behind retailer’s struggles', url: 'https://www.citizen.co.za/business/spar-ceo-acknowledges-management-mistakes-behind-retailers-challenges/' },
      { title: 'Uber, Bolt, others must comply with regulations or risk operating illegally', url: 'https://www.citizen.co.za/business/uber-bolt-others-must-comply-with-regulations-or-risk-operating-illegally/' },
      { title: 'DStv staff allege toilet paper shortage at head office – new owner’s cost-cutting gone too far?', url: 'https://www.citizen.co.za/business/dstv-staff-allege-toilet-paper-shortage-at-head-office-new-owners-cost-cutting-gone-too-far/' },
    ],
  },
  {
    heading: 'Personal finance',
    items: [
      { title: 'Outstanding loans surge to R2.7 trillion as South Africans open 875 000 loans in 3 months', url: 'https://www.citizen.co.za/business/personal-finance/outstanding-loans-surge-to-r2-7-trillion-as-south-africans-open-875-000-loans-in-3-months/' },
      { title: 'Here’s how much R1m bond repayments will cost after repo rate hike', url: 'https://www.citizen.co.za/business/personal-finance/heres-how-much-r1m-bond-repayments-will-cost-after-repo-rate-hike/' },
      { title: 'More men than women say they are poor, Stats SA finds', url: 'https://www.citizen.co.za/business/personal-finance/more-men-than-women-say-they-are-poor-in-south-africa-stats-sa-finds/' },
      { title: 'Discovery price increase: Struggling with medical aid costs? Try these options (VIDEO)', url: 'https://www.citizen.co.za/business/personal-finance/struggling-with-medical-aid-costs-try-these-options/' },
      { title: 'From freebies to fees: How Sars plans to tax influencers’ gifts and trips', url: 'https://www.citizen.co.za/business/personal-finance/from-freebies-to-fees-how-sars-plans-to-tax-influencers-gifts-and-trips/' },
    ],
  },
  {
    heading: 'Entrepreneurial stories',
    items: [
      { title: 'From selling their home to securing Shoprite shelves: a father-and-son success story', url: 'https://www.citizen.co.za/business/from-selling-their-home-to-securing-shoprite-shelves-a-father-and-son-success-story/' },
      { title: 'How a man went from being unemployed for nine years to owning his own tech product', url: 'https://www.citizen.co.za/business/how-a-man-went-from-being-unemployed-for-nine-years-to-owning-his-own-tech-product/' },
    ],
  },
  {
    heading: 'Regulatory changes',
    items: [
      { title: 'US targets South Africa with proposed 12.5% tariff over forced-labour import controls', url: 'https://www.citizen.co.za/business/us-targets-south-africa-with-proposed-12-5-tariff-over-forced-labour-import-controls/' },
      { title: 'Labour minister seeks to amend Employment Act to regulate foreign nationals working in SA', url: 'https://www.citizen.co.za/business/labour-minister-seeks-to-amend-employment-act-to-regulate-foreign-nationals-working-in-sa/' },
      { title: 'Drivers of foreign cars must declare with Sars before leaving or entering SA', url: 'https://www.citizen.co.za/business/drivers-of-foreign-cars-must-declare-with-sars-before-leaving-or-entering-sa/' },
      { title: 'BLSA CEO questions whether changes to BEE will grow South Africa', url: 'https://www.citizen.co.za/business/blsa-ceo-questions-whether-changes-to-bee-will-grow-south-africa/' },
      { title: 'Minister Parks Tau signs new rules to protect the public from spam calls', url: 'https://www.citizen.co.za/business/amendments-consumer-protection-act-parks-tau-dtic/' },
    ],
  },
  {
    heading: 'Tech',
    items: [
      { title: '‘We are truly sorry’ – Pick n Pay on customers’ data breach', url: 'https://www.citizen.co.za/business/we-are-truly-sorry-pick-n-pay-on-customers-information-breach/' },
      { title: 'Have a credit card with Standard Bank? Fraudsters may be after you', url: 'https://www.citizen.co.za/business/standard-bank-data-breach-credit-card-personal-information/' },
      { title: 'Meet Pixie, Checkers Sixty60’s new handy addition to the way you order', url: 'https://www.citizen.co.za/business/changes-coming-to-checkers-sixty60/' },
      { title: 'Standard Bank says data breach did not impact banking systems … just your personal information', url: 'https://www.citizen.co.za/business/standard-bank-data-breach-personal-information-banking-systems/' },
      { title: 'Woolworths promises no jobs are at risk as it tests self-service till', url: 'https://www.citizen.co.za/business/woolworths-self-service-till/' },
    ],
  },
  {
    heading: 'Politics',
    items: [
      { title: 'Things got worse under Dada Morero as mayor, says BLSA CEO', url: 'https://www.citizen.co.za/business/dada-morero-busisiwe-mavuso-city-of-joburg-financial-woes/' },
      { title: 'IFP’s 36-year-old Joburg mayoral candidate targets youth unemployment [VIDEO]', url: 'https://www.citizen.co.za/news/south-africa/politics/ifps-36-year-old-joburg-mayoral-candidate-targets-youth-unemployment-video/' },
      { title: 'B-BBEE has failed to uplift blacks, as white employees still outnumber them', url: 'https://www.citizen.co.za/business/b-bbee-has-failed-to-uplift-blacks-as-white-employees-still-outnumber-them/' },
      { title: '’Free State ANC is pro-Dukwana camp’ – Analyst', url: 'https://www.ofm.co.za/article/centralsa/321495/-free-state-anc-is-pro-dukwana-camp-analyst' },
      { title: 'Winds of change are blowing for Free State ANC', url: 'https://www.ofm.co.za/article/centralsa/321475/winds-of-change-are-blowing-for-free-state-anc' },
    ],
  },
  {
    heading: 'Hard news',
    items: [
      { title: 'Ramaphosa admits immigration failures, promises action on corruption and system gaps', url: 'https://www.citizen.co.za/news/cyril-ramaphosa-illegal-immigrants/' },
      { title: 'AG shines a spotlight on the mess at Mangaung Metro', url: 'https://www.citizen.co.za/business/ag-shines-a-spotlight-at-what-a-mess-mangaung-metro-is/' },
      { title: 'Brigadier Nkhwashu apologises to Lesufi about claims he made at Madlanga commission', url: 'https://www.citizen.co.za/news/brigadier-nkhwashu-apologises-to-lesufi-about-claims-made-at-madlanga-commission/' },
      { title: 'Easter weekend in Bloemfontein: 19-year-old stabbed to death, body burnt beyond recognition, gang stabbing', url: 'https://www.citizen.co.za/news/south-africa/crime/easter-weekend-in-bloemfontein-crimes/' },
      { title: 'Water department says it can meet latest Lesotho water project deadline, but stumbles over media trip', url: 'https://www.citizen.co.za/news/water-department-completion-lesotho-water-project-new-deadline-cant-organise-trip-journalists/' },
    ],
  },
]

const publications = [
  'Bloemfontein Courant Newspaper ',
  'Get It Bloemfontein Magazine ',
  'OFM Radio Station ',
  'The Citizen Newspaper ',
]

function Portfolio() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-6 sm:p-10 shadow-xl shadow-slate-950/20">
        <h1 className="text-2xl sm:text-4xl font-semibold">Portfolio</h1>
        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">A curated selection of articles, published work and projects demonstrating editorial range alongside audience engagement.</p>
      </section>

      <section className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Featured articles</h2>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.title} className="rounded-2xl sm:rounded-3xl bg-slate-900 p-4 sm:p-6">
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-slate-100">{article.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400 leading-6 sm:leading-7">{article.summary}</p>
            </article>
          ))}

          {featuredCategories.map((category) => (
            <div key={category.heading} className="rounded-2xl sm:rounded-3xl bg-slate-900 p-4 sm:p-6">
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-slate-100">{category.heading}</h3>
              <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-3 text-slate-300">
                {category.items.map((item) => (
                  <li key={item.url} className="rounded-2xl bg-slate-950/70 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-sky-300 transition-colors duration-150 break-words">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Publications</h2>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-slate-300">
            {publications.map((publication) => (
              <li key={publication} className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">{publication}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
