import { motion } from 'framer-motion';
import { FaLaptopCode, FaVideo, FaImage, FaTools } from 'react-icons/fa';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    {
      category: "Video Editing",
      icon: <FaVideo className="text-indigo-500 w-6 h-6" />,
      items: ["Adobe Premiere Pro", "Video Post-Production", "Motion Graphics", "Color Grading"]
    },
    {
      category: "Design",
      icon: <FaImage className="text-indigo-500 w-6 h-6" />,
      items: ["Adobe Photoshop", "Thumbnail Creation", "Graphic Design", "Visual Composition"]
    },
    {
      category: "Development",
      icon: <FaLaptopCode className="text-indigo-500 w-6 h-6" />,
      items: ["Software Development", "Web Development", "UI/UX Design", "Programming"]
    },
    {
      category: "Other Skills",
      icon: <FaTools className="text-indigo-500 w-6 h-6" />,
      items: ["Content Strategy", "Project Management", "Creative Direction", "Storytelling"]
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-indigo-500">Me</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-indigo-500 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A passionate video editor and content creator with a keen eye for detail and a love for storytelling.
          </motion.p>
        </div>
      </header>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Hello! I'm Sajid, a dedicated video editor and content creator with several years of experience
                  in creating engaging visual content. My passion for visual storytelling drives me to constantly
                  improve and refine my craft.
                </p>
                <p>
                  I specialize in video editing using Adobe Premiere Pro, where I transform raw footage into
                  polished, professional videos that captivate viewers. My expertise also extends to
                  Adobe Photoshop, allowing me to create eye-catching thumbnails and graphics that stand out.
                </p>
                <p>
                  As a content creator, I understand the importance of not just technical skills, but also the
                  creative vision necessary to tell compelling stories. I focus on understanding the message
                  my clients want to convey and then bringing that vision to life through careful editing and
                  creative direction.
                </p>
                <p>
                  In addition to my video editing and design skills, I've also ventured into software development,
                  creating tools that enhance my workflow and solve problems in creative ways.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-xl transform rotate-2" />
                <div className="relative bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">
                    Why work with me?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        1
                      </span>
                      <div>
                        <h4 className="font-medium">Detail-Oriented</h4>
                        <p className="text-gray-400">I pay close attention to every detail to ensure the highest quality in all my projects.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        2
                      </span>
                      <div>
                        <h4 className="font-medium">Creative Problem Solver</h4>
                        <p className="text-gray-400">I approach each project with creativity and find innovative solutions to challenges.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        3
                      </span>
                      <div>
                        <h4 className="font-medium">Deadline-Driven</h4>
                        <p className="text-gray-400">I understand the importance of timelines and deliver quality work on schedule.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        4
                      </span>
                      <div>
                        <h4 className="font-medium">Continuous Learner</h4>
                        <p className="text-gray-400">I constantly update my skills to stay current with the latest trends and technologies.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are the key areas where I excel and the skills I've developed over years of practice and projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
