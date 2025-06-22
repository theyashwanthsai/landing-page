import { Github, Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: "Sai Yashwanth",
    role: "Co-founder",
    image: "/images/sai.png",
    bio: "Author, AI Engineer at Vuhosi",
    social: {
      twitter: "https://x.com/yashwanthsai29",
      linkedin: "www.linkedin.com/in/saiyashwanth29",
      github: "https://github.com/theyashwanthsai"
    }
  },
  {
    name: "Mayank Kashyap",
    role: "Co-founder",
    image: "/images/mayank.jpg",
    bio: "Engineer, Github Campus Expert",
    social: {
      twitter: "https://x.com/Jaggerydev10",
      linkedin: "https://www.linkedin.com/in/mayank-kashyap-402065232/",
      github: "https://github.com/Memomer"
    }
  }
];

export function FoundersSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">People behind Turi Labs</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          This lab was started as a fun project to bring our ideas to life. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {founders.map((founder) => (
          <div key={founder.name} className="glass-card p-6 group">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {founder.name}
              </h3>
              <p className="text-blue-400 mb-4">{founder.role}</p>
              <p className="text-gray-300 mb-6">{founder.bio}</p>
              <div className="flex gap-4">
                <a href={founder.social.twitter} className="social-icon">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={founder.social.linkedin} className="social-icon">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={founder.social.github} className="social-icon">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
