import { Linkedin, Mail,MapPin,Phone, } from "lucide-react"
import { useRef } from "react";
import emailjs from '@emailjs/browser'
const Contact = () => {
const formRef = useRef();

const sendEmail = (e) => {
    e.preventDefault();


    const form = formRef.current;
    const name=form.name.value.trim()
    const email=form.email.value.trim()
    const message=form.message.value.trim()

    if(!name || !email || !message){
      alert("All feilds are required")
      return;
    }
  

    emailjs.sendForm(
      'service_c7bpyzq',        
      'template_g0fqu3d',       
      formRef.current,
      'KtumzxJawtmLNyXZj' 
    )
    .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent!');
        formRef.current.reset();
    }, (error) => {
        console.error('There was an error:', error.text);
        alert('Failed to send message.');
    });
  };


  return (
    <section id='contact' className='w-full bg-white text-blac dark:bg-black dark:text-white py-10'>
    <div className="max-w-4xl mx-auto px-2">
    <h1 className='text-3xl font-bold px-3 py-5'>Contact</h1>
    <div className="flex sm:flex-row gap-32 flex-col pb-14">
        <div className="flex flex-col gap-5 p-3" >
          <h3 className="text-xl font-bold pb-2">Get In Touch</h3>
            <div className="flex gap-3 items-center">
              <div className="size-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"><Mail size={15}/></div>
              <div className="flex flex-col">
                <p className="text-gray-400">Email</p>
                <a href="mailto:chithrakshakharvi@gmail.com">chithrakshakharvi@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="size-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"><Phone size={15} /></div>
              <div className="flex flex-col">
                <p className="text-gray-400">Phone</p>
                <a href="tel:+918105280460">+91 8105280460</a>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="size-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"><MapPin size={15} /></div>
              <div className="flex flex-col">
                <p className="text-gray-400">Location</p>
                <p >Karnataka, India</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="size-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"><Linkedin size={15} /></div>
              <div className="flex flex-col">
                <p className="text-gray-400">LinkedIn</p>
                <a href="mailto:chithrakshakharvi@gmail.com">LinkedIn</a>
              </div>
            </div>
        </div>
        <div>
          <div className="py-3 px-4">
            <h3 className="text-xl font-bold pb-4">Send me a Message</h3>
            <form  method="POST" ref={formRef} onSubmit={sendEmail}>
            <div className="flex gap-5 py-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="name1">Name</label>
                <input
                className=" h-9 w-full border border-gray-400 rounded focus:ring-2 focus:ring-gray-400"
                type="text" name="name"  id="name1" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email1">Email</label>
                <input
                className=" h-9 w-full border border-gray-400 rounded focus:ring-2 focus:ring-gray-400"
                type="email" name="email"  id="email1" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
            <label htmlFor="message1">Message</label>
            <textarea rows={4}
            className=" w-full border border-gray-400 rounded focus:ring-2 focus:ring-gray-400"
            name="message" id="message1"></textarea>
            <button
            className=" py-1.5 w-full bg-black text-white dark:bg-white dark:text-black rounded" 
            type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
    </div>

    <div className="pb-5 text-center text-xs sm:text-sm"><span>&copy;</span>{new Date().getFullYear()} Chithrax. All rights reserved</div>
    </div>
    </section>
  )
}

export default Contact
