import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll"
import emailjs from 'emailjs-com';

export const Contact = () =>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '' 
  })


const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_ServiceID, import.meta.env.VITE_TemplateID, e.target, import.meta.env.VITE_APIKey).then((result) => {
        alert('Message sent successfully!');
        setFormData({
            name: '',   
            email: '',
            message: ''
        });
    })
    .catch(() => alert('Oops! Something went wrong. Please try again.'));
}

    return (
        <section id='contact' className='min-h-screen flex  justify-center items-center py-20'>
            <ReviewOnScroll>

                <div className="px-4 w-150 "> 
                 <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r
                  from-blue-500 to-cyan-600  bg-clip-text  text-transparent text-center'> Get In Touch </h2> 
                 <form className='space-y-6' onSubmit={handleSubmit}>
                  <div className='relative'>
                    <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder='Your Name' className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus-within:outline-none focus:border-blue-500 focus:bg-blue-500/5 '/>
                  </div>
                  <div className='relative'>
                    <input type="email" id="email" name="email" required placeholder='example@gmail.com'  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus-within:outline-none focus:border-blue-500 focus:bg-blue-500/5 '/>
                  </div>
                  <div className='relative'>
                    <textarea id="message" name="message" required placeholder='Your Message' value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="5" className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus-within:outline-none focus:border-blue-500 focus:bg-blue-500/5 '/>
                  </div>
                  <button type='submit'className="w-full bg-blue-500 py-3 px-6 rounded font-medium transitioon relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_150px_rgba(59,130,246,0.4)]" >
                    Send Message
                  </button >
                 </form>
                </div>

            </ReviewOnScroll>
        </section>
    )
}