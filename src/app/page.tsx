// app/page.tsx
'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-11-06T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'schedule', 'judges', 'sponsors', 'faq'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-r from-black via-blue-900 to-green-900 backdrop-blur-md bg-opacity-95 z-50 shadow-lg border-b-2 border-green-500 relative overflow-hidden">
        {/* Animated border line */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-green-400 via-green-300 to-transparent animate-slide shadow-lg shadow-green-500/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-3 md:py-0 md:h-16 gap-3 md:gap-0">
            <div className="flex items-center gap-2 md:gap-3">
              <a href="#" className="flex items-center gap-2 md:gap-3">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-green-600 to-blue-600 p-1 flex items-center justify-center shadow-lg">
                  <img src="/hackathon-site/hack-the-clock-logo-icon (1) (1).ico" alt="Hack the Clock" className="h-full w-full object-contain rounded-md" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-sm">
                  Hack the Clock
                </span>
              </a>
            </div>
          <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base">
            <a href="#about" className={`transition font-semibold ${activeSection === 'about' ? 'text-green-400 border-b-2 border-green-400' : 'text-green-300 hover:text-green-400'}`}>About</a>
            <a href="#schedule" className={`transition font-semibold ${activeSection === 'schedule' ? 'text-green-400 border-b-2 border-green-400' : 'text-green-300 hover:text-green-400'}`}>Schedule</a>
            <a href="#judges" className={`transition font-semibold ${activeSection === 'judges' ? 'text-green-400 border-b-2 border-green-400' : 'text-green-300 hover:text-green-400'}`}>Judges</a>
            <a href="#sponsors" className={`transition font-semibold ${activeSection === 'sponsors' ? 'text-green-400 border-b-2 border-green-400' : 'text-green-300 hover:text-green-400'}`}>Sponsors</a>
            <a href="#faq" className={`transition font-semibold ${activeSection === 'faq' ? 'text-green-400 border-b-2 border-green-400' : 'text-green-300 hover:text-green-400'}`}>FAQ</a>
          </nav>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(300%); opacity: 0; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-slide {
          animation: slide 2.5s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-normal drop-shadow-xl">
            Build the Future.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-pulse pb-2">
              Together.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-semibold px-2">
            Join hundreds of developers, designers, and innovators on <span className="whitespace-nowrap">November 6</span> for 12 hours of non-stop coding, collaboration, and creation.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-8 md:mb-12 flex justify-center px-2">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg md:rounded-xl blur-lg opacity-60 animate-pulse"></div>
                    <div className="relative bg-slate-800/95 backdrop-blur-sm rounded-lg md:rounded-xl p-2 sm:p-4 md:p-6 min-w-[60px] sm:min-w-[70px] md:min-w-[100px] border-2 border-green-500 shadow-2xl">
                      <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <div className="text-green-300 text-xs sm:text-sm md:text-base mt-1 md:mt-2 font-bold uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <a href="https://forms.office.com/r/padrCSt0zW" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition transform hover:scale-105 text-center">
              Register Now
            </a>
            <a href="https://github.com/Hack-the-Clock" target="_blank" rel="noopener noreferrer" className="border-2 border-green-500 text-green-400 bg-slate-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition transform hover:scale-105 text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 relative z-10 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-center">
          <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-green-500 transform hover:scale-105 transition">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-pulse">
              100+
            </div>
            <p className="text-green-300 mt-2 font-semibold text-sm md:text-base">Participants</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-blue-500 transform hover:scale-105 transition">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-pulse">
              12hrs
            </div>
            <p className="text-blue-300 mt-2 font-semibold text-sm md:text-base">Building Time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 relative z-10 bg-opacity-50 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-center drop-shadow-lg">What is Hack the Clock?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 text-center leading-relaxed font-semibold px-2">
              Hack the Clock is an annual hackathon on November 6 bringing together creative minds to build innovative projects. Whether you're a seasoned developer or just starting your coding journey, there's a place for you here.
            </p>
            
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-6 md:p-8 border-2 border-green-500 mb-8 shadow-2xl hover:shadow-green-500/50 transition">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow">This event offers graduate students an excellent opportunity to:</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  'Network with sponsors and peers from our university',
                  'Engage directly with professors serving as judges',
                  'Receive résumé feedback from professionals, including experts currently or formerly at Bank of America, Meta, and Amazon'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold mt-1 shadow-lg text-sm md:text-base">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 md:py-20 px-4 bg-black relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-8 md:mb-16 text-center drop-shadow-lg px-2">Event Timeline - <span className="whitespace-nowrap">November 6, 2025</span></h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-600 to-green-500 hidden md:block shadow-lg"></div>
            
            <div className="space-y-12">
              {[
                { time: '9:00 AM', event: 'Check-in, Coffee & Team Formation', desc: 'Arrive, grab coffee, meet fellow hackers, and form your dream team!', side: 'left' },
                { time: '9:30 AM', event: 'Opening Remarks & Logistics', desc: 'Welcome address, event overview, and important logistics information.', side: 'right' },
                { time: '12:30 PM', event: 'Lunch', desc: 'Take a break, refuel, and network with sponsors and peers.', side: 'left' },
                { time: '3:00 PM', event: '"State of the Hack" Update', desc: 'Check-in on progress, get inspired by what teams are building!', side: 'right' },
                { time: '6:30 PM', event: 'Dinner', desc: 'Recharge with dinner and keep the momentum going into the final stretch.', side: 'left' },
                { time: '8:00 PM', event: 'Submission Deadline', desc: 'Repos must be publicly viewable or shared with judges. Final push time!', side: 'right' },
                { time: '8:15 PM', event: 'Judging Begins', desc: 'Science-fair style judging, approximately 5 minutes per team. Show off your work!', side: 'left' },
                { time: '9:00 PM', event: 'Awards & Closing Photo', desc: 'Winner announcements, prizes, celebration, and the official group photo!', side: 'right' }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-12 gap-4`}>
                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-3rem)] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 md:p-6 border-2 border-green-500 hover:border-blue-500 transition group hover:scale-105 text-left shadow-xl hover:shadow-2xl hover:shadow-green-500/50">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3 font-medium">{item.desc}</p>
                    <div className="text-green-400 font-bold text-base md:text-lg">{item.time}</div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white font-bold border-4 border-black shadow-xl group-hover:scale-125 transition z-10 hidden md:flex">
                    {i + 1}
                  </div>
                  
                  {/* Mobile Circle */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white font-bold border-4 border-black shadow-lg md:hidden text-sm sm:text-base">
                    {i + 1}
                  </div>
                  
                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-12 md:py-20 px-4 relative z-10 bg-opacity-50 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-8 md:mb-12 text-center drop-shadow-lg">Our Judges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { role: 'Professor', image: '/hackathon-site/clipizzi.avif', link: 'https://www.stevens.edu/profile/clipizzi' },
              { role: 'AI Researcher', image: '/hackathon-site/1743230367046.jpg', link: 'https://www.linkedin.com/in/ishanaryendu/' },
              { role: 'President', role2: 'SGTA', image: '/hackathon-site/WhatsApp Image 2025-11-05 at 19.48.41.jpeg', link: 'https://www.linkedin.com/in/drekhi/' }
            ].map((judge, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 md:p-8 border-2 border-green-500 text-center hover:border-blue-500 transition hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-green-500/50">
                <a href={judge.link} target="_blank" rel="noopener noreferrer" className="block w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 mx-auto mb-4 rounded-[50%] bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center overflow-hidden border-4 border-green-500 shadow-lg hover:border-blue-500 transition cursor-pointer">
                  <img src={judge.image} alt={judge.role} className="w-full h-full object-cover" />
                </a>
                <p className="text-green-300 font-semibold text-lg md:text-xl">{judge.role}</p>
                {judge.role2 && <p className="text-green-300 font-semibold text-lg md:text-xl">{judge.role2}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-12 md:py-20 px-4 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-8 md:mb-12 text-center drop-shadow-lg">Our Sponsors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { image: '/hackathon-site/SGTA_logo.jpeg', link: 'https://ducklink.stevens.edu/sgta/home/' },
              { image: '/hackathon-site/gcc_logo.png', link: 'https://ducklink.stevens.edu/gcc/home/' }
            ].map((sponsor, i) => (
              <div key={i} className="text-center transition hover:scale-105">
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={sponsor.image} alt="Sponsor" className="max-h-48 w-full object-contain hover:opacity-80 transition" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 px-4 bg-opacity-50 bg-slate-900 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-8 md:mb-12 text-center drop-shadow-lg">FAQ</h2>
          <div className="space-y-4 md:space-y-6">
            {[
              { q: 'Do I need prior experience?', a: 'No! We welcome all skill levels from beginners to experts.' },
              { q: 'What should I bring?', a: 'Just bring your laptop, charger, and your creativity!' },
              { q: 'Is there a registration fee?', a: 'Hack the Clock is completely free for all participants!' },
              { q: 'Can I work alone?', a: 'Yes, but we encourage team formation for better collaboration.' }
            ].map((item, i) => (
              <details key={i} className="group border-l-4 border-green-500 pl-4 md:pl-6 cursor-pointer bg-slate-800 rounded-r-lg p-3 md:p-4 shadow-md hover:shadow-xl hover:shadow-green-500/50 transition">
                <summary className="text-white font-bold text-base md:text-lg hover:text-green-400 transition list-none">
                  {item.q}
                </summary>
                <p className="text-gray-300 mt-2 md:mt-3 font-medium text-sm md:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-slate-900 to-black text-white py-6 md:py-8 px-4 relative z-10 shadow-2xl border-t-2 border-green-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="font-semibold text-sm md:text-base text-center md:text-left">© 2025 Hack the Clock. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <a href="https://x.com/hacktheclock" className="hover:text-green-400 transition font-semibold">Twitter</a>
            <a href="https://github.com/Hack-the-Clock" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition font-semibold">GitHub</a>
            <a href="https://www.linkedin.com/company/stevens-graduate-technical-association/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition font-semibold">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
