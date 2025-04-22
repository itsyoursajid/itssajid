import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaImage, FaLaptopCode } from 'react-icons/fa';

const ProjectsPage = () => {
  // Project categories
  const categories = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'videos', label: 'Video Editing', icon: <FaVideo className="mr-2" /> },
    { id: 'thumbnails', label: 'Thumbnails', icon: <FaImage className="mr-2" /> },
    { id: 'software', label: 'Software', icon: <FaLaptopCode className="mr-2" /> }
  ];

  // Project data - would typically come from a database or CMS
  const projects = [
    {
      id: 1,
      title: 'Cinematic Travel Montage',
      category: 'videos',
      imageUrl: 'https://source.unsplash.com/ESkw2ayO2As/800x600',
      description: 'Edited a travel montage featuring stunning visuals and transitions.',
      tools: ['Adobe Premiere Pro', 'After Effects'],
      link: '#'
    },
    {
      id: 2,
      title: 'Corporate Interview Series',
      category: 'videos',
      imageUrl: 'https://source.unsplash.com/uf4oyaimWwg/800x600',
      description: 'A series of professional interviews for a corporate client.',
      tools: ['Adobe Premiere Pro', 'Audition'],
      link: '#'
    },
    {
      id: 3,
      title: 'Adventure Vlog Thumbnail',
      category: 'thumbnails',
      imageUrl: 'https://source.unsplash.com/iAftdIcgpFc/800x600',
      description: 'Eye-catching thumbnail design for an adventure YouTube series.',
      tools: ['Photoshop'],
      link: '#'
    },
    {
      id: 4,
      title: 'Tech Review Thumbnail Set',
      category: 'thumbnails',
      imageUrl: 'https://source.unsplash.com/ZGjbiukp_-A/800x600',
      description: 'Consistent thumbnail set for a technology review channel.',
      tools: ['Photoshop'],
      link: '#'
    },
    {
      id: 5,
      title: 'Video Editing Automation Tool',
      category: 'software',
      imageUrl: 'https://source.unsplash.com/m_HRfLhgABo/800x600',
      description: 'A custom tool built to automate repetitive video editing tasks.',
      tools: ['JavaScript', 'Node.js'],
      link: '#'
    },
    {
      id: 6,
      title: 'Content Management System',
      category: 'software',
      imageUrl: 'https://source.unsplash.com/dBI_My696Rk/800x600',
      description: 'A simple CMS for organizing and managing video projects.',
      tools: ['React', 'Firebase'],
      link: '#'
    }
  ];

  // State for filtered projects and active category
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);

    if (categoryId === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === categoryId));
    }
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
            My <span className="text-indigo-500">Projects</span>
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
            Explore my portfolio of video editing, thumbnails, and software development projects.
          </motion.p>
        </div>
      </header>

      {/* Category Filters */}
      <section className="py-8 bg-black/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2 rounded-full flex items-center text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs uppercase tracking-wide px-3 py-1 rounded-full ${
                        project.category === 'videos'
                          ? 'bg-blue-500/80 text-blue-50'
                          : project.category === 'thumbnails'
                            ? 'bg-purple-500/80 text-purple-50'
                            : 'bg-green-500/80 text-green-50'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map(tool => (
                        <span
                          key={tool}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded hover:bg-indigo-600/30 transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
