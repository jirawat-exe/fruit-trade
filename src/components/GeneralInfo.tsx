"use client";

import { useState } from "react";

export default function GeneralInfo() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send Mail:", formData);
    alert("Message sent! (demo)");
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <div className="container my-8 px-4">
      <div className="row">
        {/* General Information - Left */}
        <div className="col-md-6 mb-6">
          <h2 className="text-2xl font-bold mb-3">General Information</h2>
          <p>
            Welcome to Fruit Trade! We provide the best platform to buy and sell fruits efficiently.
            You can contact us anytime for inquiries or support.
          </p>
        </div>

        {/* Contact Form - Right */}
        <div className="col-md-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-5">Ask a Question</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control rounded-pill"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control rounded-pill"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control rounded-4"
                  rows={5}
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark rounded-pill w-50" 
              style={{height: "60px"}}>
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}