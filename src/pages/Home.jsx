const featuredStories = [
  { title: 'Economy', description: 'Hiking Interest Rates Does Not Solve the Problem, Says Analyst ', tag: 'Analyst' },
  { title: 'Companies', description: 'Mr D Drivers Accuse Takealot Company of Low Pay', tag: 'Report' },
  { title: 'Personal Finance', description: 'Outstanding Loans Surge to R2.7 Trillion as South Africans Open 875 000 Loans in 3 Months ', tag: 'Finance' },
]

function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-6 sm:p-10 shadow-xl shadow-slate-950/30">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-rose-400">Home</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">Stories that matter, research that changes minds.</h1>
          <p className="text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">I blend investigative reporting, narrative storytelling, economy and regulatory changes to bring complex issues into focus for diverse audiences.</p>
          <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center">
            <a href="#featured-stories" className="inline-flex rounded-full bg-rose-600 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-rose-600/25 transition hover:bg-rose-500">Explore featured stories</a>
            <a href="#recent-achievements" className="inline-flex rounded-full border border-slate-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-slate-300 transition hover:border-slate-500 hover:text-slate-100">Recent achievements</a>
          </div>
        </div>
      </section>

      <section id="featured-stories" className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Featured stories</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-2">Selected reporting that demonstrates depth, clarity and impact.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {featuredStories.map((story) => (
            <article key={story.title} className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:p-6 transition hover:border-rose-600/40">
              <span className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.25em] text-rose-300 sm:px-3 sm:py-1">{story.tag}</span>
              <h3 className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl font-semibold text-slate-100">{story.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400 leading-6 sm:leading-7">{story.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/80 p-6 sm:p-8 md:p-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Quick bio</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">I am a journalist with more than a decade of experience reporting on economy, companies, personal finance, entrepreneurial and regulatory changes, bringing clarity to what they mean for the average consumer. </p>
          </div>
          <div className="space-y-3 sm:space-y-4 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="mt-1 sm:mt-2 text-base sm:text-lg text-slate-200">Based in Johannesburg, Gauteng</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500">Publication</p>
              <p className="mt-1 sm:mt-2 text-base sm:text-lg text-slate-200">The Citizen News Business Journalist</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recent-achievements" className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Recent achievements</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-2">Recent milestones in reporting and recognition.</p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3"> 
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100">Breakthrough feature</h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400">The Citizen Best Journalist for 2025 Quarter 2 - 1 376 014 Page Views </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100">Most read story</h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400">The Citizen Most Read Online Story for 2025 Quarter 3  </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100">2022 Vodacom Journalist of the Year</h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400">Honored for a series of investigative stories on local government accountability.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
