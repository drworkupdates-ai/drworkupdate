import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? We're here to help. Reach out and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Email - visible */}
              <div className="flex items-start space-x-4 group hover:bg-gray-50 p-2 rounded-lg transition">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:protectmeyou@proton.me" className="text-gray-600 hover:text-indigo-600 transition">
                    protectmeyou@proton.me
                  </a>
                </div>
              </div>

              {/* Telegram - clickable, no username shown */}
              <a
                href="https://t.me/loveindianhacker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group hover:bg-gray-50 p-2 rounded-lg transition cursor-pointer"
              >
                <div className="bg-sky-100 p-3 rounded-full group-hover:bg-sky-200 transition">
                  <svg className="w-6 h-6 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.902-.904-1.056-.691-1.653-1.121-2.677-1.795-1.185-.78-.417-1.21.258-1.91.176-.183 3.236-2.967 3.295-3.22.007-.03.014-.142-.053-.2-.067-.059-.166-.039-.238-.022-.102.024-1.722 1.094-4.864 3.213-.46.317-.877.47-1.252.462-.412-.008-1.204-.233-1.793-.424-.723-.235-1.297-.36-1.247-.76.027-.209.314-.423.862-.642 3.289-1.433 5.483-2.377 6.582-2.831 3.135-1.297 3.786-1.523 4.211-1.53.094-.002.303.022.439.132.114.094.145.22.159.346.016.122.009.259.004.352z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telegram</h3>
                  <span className="text-gray-600">Click to chat →</span>
                </div>
              </a>

              {/* WhatsApp - clickable, no number shown */}
              <a
                href="https://wa.me/584265198343"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group hover:bg-gray-50 p-2 rounded-lg transition cursor-pointer"
              >
                <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.564 4.162 1.556 5.92L.014 23.99l6.185-1.628A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.038 3.692c4.573 0 8.28 3.707 8.28 8.28 0 4.573-3.707 8.28-8.28 8.28-1.542 0-2.994-.43-4.244-1.185l-4.694 1.234 1.242-4.582a8.234 8.234 0 0 1-1.206-4.31c0-4.573 3.707-8.28 8.28-8.28zm-3.505 5.276c-.193.193-.39.534-.39.876 0 .342.136.684.272.927.136.243.272.486.408.73.272.486.544.972.953 1.359.409.387.818.677 1.295.904.477.227.954.388 1.5.486.545.098 1.022.065 1.5-.033.477-.098.954-.292 1.363-.486.409-.194.818-.486 1.158-.777.34-.292.613-.65.817-1.04.204-.39.272-.81.204-1.23-.068-.42-.272-.81-.545-1.13-.273-.32-.613-.583-.954-.777-.34-.194-.682-.292-1.023-.389-.341-.098-.682-.13-1.023-.033-.341.098-.614.26-.886.52l-.34.292c-.136.13-.273.26-.409.39-.136.13-.273.26-.34.455-.068.195-.068.39-.068.585 0 .195.068.39.136.585.068.195.204.39.34.585.136.195.273.39.477.52.204.13.409.26.682.39.273.13.545.26.886.26.341 0 .613-.098.886-.26.273-.162.477-.39.682-.65.204-.26.34-.585.409-.94.068-.356.068-.682-.068-1.04-.136-.356-.34-.65-.613-.876-.273-.227-.613-.39-.954-.486-.341-.097-.682-.13-1.023-.065-.341.065-.613.194-.886.39-.273.195-.477.422-.682.65-.204.227-.34.485-.409.743-.068.259-.068.518 0 .778.068.26.204.518.34.71.136.194.273.389.477.518.204.13.409.26.682.26.273 0 .477-.065.682-.194.204-.13.409-.324.545-.518.136-.194.204-.389.272-.584.068-.195.068-.39 0-.584-.068-.195-.136-.39-.272-.584-.136-.195-.341-.324-.545-.454-.204-.13-.409-.195-.682-.195-.273 0-.477.065-.682.195-.204.13-.409.259-.545.454-.136.194-.204.389-.272.584-.068.195-.068.39 0 .584.068.195.136.39.272.584.136.194.341.324.545.454.204.13.409.195.682.195.273 0 .477-.065.682-.195.204-.13.409-.26.545-.454.136-.194.204-.389.272-.584.068-.195.068-.39 0-.584-.068-.195-.136-.39-.272-.584-.136-.194-.341-.324-.545-.454-.204-.13-.409-.195-.682-.195-.273 0-.477.065-.682.195-.204.13-.409.259-.545.454-.136.194-.204.389-.272.584-.068.195-.068.39 0 .584.068.195.136.39.272.584.136.194.341.324.545.454.204.13.409.195.682.195z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <span className="text-gray-600">Click to chat →</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 transform hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;