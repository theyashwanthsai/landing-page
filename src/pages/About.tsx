import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft, Calendar, Clock, User } from 'lucide-react';

export function AboutPage() {
  const team = [
    { name: "Sai Yashwanth", link: "https://saiyashwanth.tech" },
    { name: "Mayank Kashyap", link: "https://www.linkedin.com/in/mayank-kashyap-402065232/" },
    { name: "Chidu", link: "https://www.linkedin.com/in/siddharth-prakash-771596241/" },
    { name: "Vijayanth", link: "https://www.linkedin.com/in/vijayant-raj-singh-raghav/" },
    { name: "Supratik", link: "https://www.linkedin.com/in/supratik-kar-99a99522b/" }
  ];
  return (
    <div className="min-h-screen text-white relative ">
      <div className="absolute inset-0 pointer-events-none"></div>
      
      <div className="relative ">


        <main className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="px-4 sm:px-6 py-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center md:text-left">About Us</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                We are a dedicated team of AI enthusiasts focused solely on building weird and crazy experimental projects.
                TuriLabs was started off as a means to get all our experiments in one place. Soon, my friends showed clear interests with their experiments, and thus our team grew.
                <br />
                <br />
                We are just part time researchers, each one of us has a full time job. We are not a company (yet), we are a team of friends who are passionate about AI.
                <br />
                <br />
                <br />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Team</h2>
                <p className="text-gray-300 max-w-2xl">People who are part of TuriLabs, in no particular order:</p> <br/>
                {team.map((member) => (
                  <div key={member.name} className="text-blue-300 max-w-2xl">
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                      {member.name}
                    </a>
                  </div>
                ))}
              </p>
            </div>
            <div className="flex justify-center items-center px-4 sm:px-6 py-8">
              <img src="/images/team.png" alt="Turi Labs" className="w-full md:w-[90%] max-w-lg rounded-xl shadow-2xl" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
