import { FaInstagram, FaXTwitter, FaTelegram, FaFacebook, FaDiscord, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, url: 'https://instagram.com/itsyoursajid' },
    { name: 'Twitter', icon: <FaXTwitter className="w-5 h-5" />, url: 'https://x.com/itsyoursajid' },
    { name: 'Telegram', icon: <FaTelegram className="w-5 h-5" />, url: 'https://t.me/itsyoursajid' },
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, url: 'https://facebook.com/xyzsajid' },
    { name: 'Discord', icon: <FaDiscord className="w-5 h-5" />, url: 'https://discord.com/users/itsyoursajid' },
    { name: 'Email', icon: <FaEnvelope className="w-5 h-5" />, url: 'mailto:itssajidhub@gmail.com' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-12">
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Sajid<span className="text-indigo-500">.</span></h2>
            <p className="mt-2 text-gray-400 text-sm md:text-base">Video Editor & Content Creator</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                aria-label={`${link.name} profile`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Sajid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
