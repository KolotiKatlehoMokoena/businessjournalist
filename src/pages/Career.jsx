const awards = [
  { title: 'Vodacom Young Journalist of the Year Regional, 2022' },
  { title: 'The Citizen Best Journalist for 2025 , 2025' },
  { title: 'The Citizen Most Read Online Story for 2025 Quarter 3 - Here’s How Much It Will Cost You to Apply for Smart ID at These Bank Branches, 2025',
    url: 'https://www.citizen.co.za/business/banks-fees-smart-id-home-affairs/',
  },
]

const investigations = [
  'Review of municipal contract bidding practices',
  'Series on housing affordability and zoning decisions',
  'Accountability report on public health funding',
]

const appearances = [
  'National Morning News segment on transparency',
  'Panel discussion for the Journalism Forum',
  'Guest interview on local radio about investigative ethics',
]

function Career() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-6 sm:p-10 shadow-xl shadow-slate-950/20">
        <h1 className="text-2xl sm:text-4xl font-semibold">Career highlights</h1>
        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">Major milestones in reporting, recognition and public-facing media work.</p>
      </section>

      <section className="grid gap-6 sm:gap-8 xl:grid-cols-2">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Awards</h2>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-slate-300">
            {awards.map((award) => (
              <li key={award.title} className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">
                {award.url ? (
                  <a href={award.url} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-sky-300 transition-colors duration-150 break-words">
                    {award.title}
                  </a>
                ) : (
                  award.title
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Major investigations</h2>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-slate-300">
            {investigations.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Career
