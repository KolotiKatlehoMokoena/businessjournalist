import { FaEnvelope, FaLinkedin, } from 'react-icons/fa'

function Contact() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-6 sm:p-10 shadow-xl shadow-slate-950/20">
        <h1 className="text-2xl sm:text-4xl font-semibold">Contact</h1>
        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">Get in touch to discuss reporting opportunities, collaborations or media inquiries.</p>
      </section>

      <section className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Contact form</h2>
          <form className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Name</span>
              <input type="text" placeholder="Your name" className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 sm:px-4 py-2 sm:py-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Email</span>
              <input type="email" placeholder="you@example.com" className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 sm:px-4 py-2 sm:py-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Message</span>
              <textarea rows="4" placeholder="Type your message here..." className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 sm:px-4 py-2 sm:py-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none resize-none"></textarea>
            </label>
            <button type="submit" className="inline-flex rounded-full bg-rose-600 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-rose-500">Send message</button>
          </form>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Direct contact</h2>
          <div className="mt-4 sm:mt-6 space-y-4 text-slate-300">
            <a href="mailto:cornkoteli@gmail.com" className="flex items-center gap-3 rounded-2xl bg-slate-950/70 px-4 py-3 text-sm transition hover:bg-slate-800">
              <FaEnvelope className="text-rose-400" />
              <span>cornkoteli@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/tshehla-cornelius-koteli-61595b217" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-slate-950/70 px-4 py-3 text-sm transition hover:bg-slate-800">
              <FaLinkedin className="text-rose-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
