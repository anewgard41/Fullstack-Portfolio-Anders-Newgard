import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // const handleChange = (e = {});

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Max"
              required
              value={form.name}
              // onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="max@gmail.com"
              required
              value={form.email}
              // onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <input
              type="message"
              name="name"
              rows={4}
              className="textarea"
              placeholder="How can I help you?"
              required
              value={form.message}
              // onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn"></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
