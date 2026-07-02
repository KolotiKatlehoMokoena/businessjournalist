import { FaEnvelope, FaLinkedin, } from 'react-icons/fa'
import { useState } from 'react'
import { saveContact } from '../firebase'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      await saveContact({ name, email, message })
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-14">
      <section className="rounded-2xl sm:rounded-3xl bg-slate-900/90 p-6 sm:p-10 shadow-xl shadow-slate-950/20">
        <h1 className="text-2xl sm:text-4xl font-semibold">Contact</h1>
        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">Get in touch to discuss reporting opportunities, collaborations or media inquiries.</p>
      </section>

      <section className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Contact form</h2>
          <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="Your name" className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 sm:px-4 py-2 sm:py-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="you@example.com" className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 sm:px-4 py-2 sm:py-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows="4" placeholder="Type your message here..." className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 sm:px-4 py-2 sm:py-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none resize-none"></textarea>
            </label>
            <div className="flex items-center gap-3">
              <button disabled={loading} type="submit" className="inline-flex rounded-full bg-rose-600 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-rose-500 disabled:opacity-60">{loading ? 'Sending…' : 'Send message'}</button>
              {success && <span className="text-sm text-green-400">Message sent — thank you!</span>}
              {error && <span className="text-sm text-rose-400">{error}</span>}
            </div>
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
