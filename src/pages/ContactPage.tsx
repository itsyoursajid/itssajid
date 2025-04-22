import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaXTwitter,
  FaTelegram,
  FaFacebook,
  FaDiscord,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa6';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/itsyoursajid',
      icon: <FaInstagram className="w-6 h-6" />,
      color: 'bg-gradient-to-r from-purple-600 to-pink-500'
    },
    {
      name: 'Twitter / X',
      url: 'https://x.com/itsyoursajid',
      icon: <FaXTwitter className="w-6 h-6" />,
      color: 'bg-black'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/itsyoursajid',
      icon: <FaTelegram className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/xyzsajid',
      icon: <FaFacebook className="w-6 h-6" />,
      color: 'bg-blue-600'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/itsyoursajid',
      icon: <FaDiscord className="w-6 h-6" />,
      color: 'bg-indigo-600'
    },
    {
      name: 'Email',
      url: 'mailto:itssajidhub@gmail.com',
      icon: <FaEnvelope className="w-6 h-6" />,
      color: 'bg-red-500'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="pt-32 pb-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in <span className="text-indigo-500">Touch</span>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-indigo-500 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Reach out to me through any of these channels.
          </motion.p>
        </div>
      </header>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              {...fadeInUp}
            >
              Connect with Me
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} p-6 rounded-xl flex items-center gap-4 hover:opacity-90 transition-opacity`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-white">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{link.name}</h3>
                    <p className="text-white/80 text-sm">
                      {link.name === 'Email' ? 'itssajidhub@gmail.com' : `@${
                        link.name === 'Facebook' ? 'xyzsajid' : 'itsyoursajid'
                      }`}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Send a Message
            </motion.h2>

            <motion.div
              className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-indigo-700'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitError && (
                    <div className="text-red-400 mt-4">
                      {submitError}
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 mx-auto rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded hover:bg-indigo-600/30 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
