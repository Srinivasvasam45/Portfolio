import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_ServiceID,
        import.meta.env.VITE_TemplateID,
        e.target,
        import.meta.env.VITE_APIKey
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Oops! Something went wrong. Please try again.'))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="min-h-screen flex justify-center items-center py-24 px-4">
      <ReviewOnScroll className="w-full">
        <div className="max-w-lg mx-auto w-full">
          <p className="eyebrow justify-center"><span className="slash">//</span> 03 contact.js</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            Get In Touch
          </h2>

          <div className="rounded-xl border border-white/10 bg-[#12181f]/60 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 chrome-dots bg-white/[0.02]">
              <span className="bg-[#ff5f56]" />
              <span className="bg-[#ffbd2e]" />
              <span className="bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-gray-500">send-message.js</span>
            </div>

            <form className="space-y-5 p-6 sm:p-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-gray-500 mb-1.5">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white transition outline-none focus:border-[#7ee787] focus:bg-[#7ee787]/5"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-gray-500 mb-1.5">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white transition outline-none focus:border-[#7ee787] focus:bg-[#7ee787]/5"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-gray-500 mb-1.5">message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white transition outline-none focus:border-[#7ee787] focus:bg-[#7ee787]/5"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#7ee787] text-[#04120a] py-3 px-6 rounded-md font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(126,231,135,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
