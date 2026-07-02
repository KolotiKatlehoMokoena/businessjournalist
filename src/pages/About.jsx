function About() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-6 sm:p-10 shadow-xl shadow-slate-950/20">
        <h1 className="text-2xl sm:text-4xl font-semibold">Biography</h1>
        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">Tshehla Cornelius Koteli is a business journalist who holds a BA in Communication, with a major in Journalism and Media Studies, from the University of the Free State. He began his career in 2021 at a local newspaper, Bloemfontein Courant, as an intern journalist and progressed to being a radio and digital journalist for OFM, a commercial radio station in Central South Africa, in 2022. 
Koteli has also worked as a feature writer for Get It Bloemfontein Magazine while he was an intern journalist at Bloemfontein Courant. 

His love for business journalism began when he was appointed radio producer for the OFM Business Hour in late 2022. Over the years, Koteli has covered a range of beats, including hard news, business, politics, entertainment, lifestyle, and investigative reporting. 
In mid-2024, he was appointed Business journalist for the Citizen Newspaper. Koteli is passionate about breaking down important stories about the economy, companies, personal finance, entrepreneurial, and regulatory changes, bringing clarity to what they mean for the average consumer. 
</p>
      </section>

      <section className="grid gap-6 sm:gap-8 lg:grid-cols-2">

        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Areas of expertise</h2>
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-slate-300">
              <li className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">Business Journalism</li>
              <li className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">Economic Analysis</li>
              <li className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">Corporate Reporting</li>
              <li className="rounded-2xl bg-slate-950/70 px-4 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm">Financial Journalism</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
