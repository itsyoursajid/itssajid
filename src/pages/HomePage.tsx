import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute w-full h-full">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 z-10 mt-20 md:mt-0">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I’m <span className="text-indigo-500">Sajid</span>,<br />
              a Video Editor & Content Creator
            </motion.h1>

            <motion.p
              className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I help brands and creators communicate through sharp editing and thoughtful design.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                View My Work <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border border-gray-600 text-white font-medium rounded-lg hover:border-indigo-500 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Turn your <span className="text-indigo-500">raw footage</span> into an awesome, polished video.
              </h2>
              <p className="text-gray-300 mb-8">
              I help people create better videos.
              With years of experience, I take raw clips
              and turn them into high-quality, professional edits.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Learn more about me <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-3" />
                <div className="relative bg-gray-800 p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                      Video Editing & Post-Production
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                      Graphic Design & Thumbnails
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                      Content Creation
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                      Web Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
