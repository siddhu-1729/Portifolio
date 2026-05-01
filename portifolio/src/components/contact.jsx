import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form); 
    // later connect to backend
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
      body:JSON.stringify(form),
    });
    e.preventDefault();
  };

  return (
    <>
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <section className="min-h-screen bg-black-900 flex items-center justify-center px-6 ">
        
      <div className="max-w-5xl w-full bg-black shadow-xl rounded-2xl grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Section - Info */}
        <div className="bg-linear-to-br from-blue-950 to-indigo-700 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-sm opacity-90 mb-6">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          <div className="space-y-4 text-sm">
            {/* <p>📧 siddhardhavemulamada1729@email.com</p> */}
            <p>📍 India</p>
            <p>💼 Full Stack Developer Developer</p>
            <p>🌱 AI/ML Enthusiastic</p>
            <p>🔭 Exploring NLP</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-400">Contact Form</h3>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Contact;