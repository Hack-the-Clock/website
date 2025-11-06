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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-r from-black via-blue-900 to-green-900 backdrop-blur-md bg-opacity-95 z-50 shadow-lg border-b-2 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3">
                <img src="/hackathon-site/hack-the-clock-logo-icon (1) (1).ico" alt="Hack the Clock" className="h-10 w-10 drop-shadow-lg" />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-sm">
                  Hack the Clock
                </span>
              </a>
            </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#about" className="text-green-300 hover:text-green-400 transition font-semibold">About</a>
            <a href="#schedule" className="text-green-300 hover:text-green-400 transition font-semibold">Schedule</a>
            <a href="#judges" className="text-green-300 hover:text-green-400 transition font-semibold">Judges</a>
            <a href="#sponsors" className="text-green-300 hover:text-green-400 transition font-semibold">Sponsors</a>
            <a href="#faq" className="text-green-300 hover:text-green-400 transition font-semibold">FAQ</a>
          </nav>
            {/* <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition">
              Register
            </button> */}
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Build the Future.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-pulse">
              Together.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-semibold">
            Join hundreds of developers, designers, and innovators on November 6 for 12 hours of non-stop coding, collaboration, and creation.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12 flex justify-center">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl blur-lg opacity-60 animate-pulse"></div>
                    <div className="relative bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] border-2 border-green-500 shadow-2xl">
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <div className="text-green-300 text-sm md:text-base mt-2 font-bold uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

                    <div className="flex gap-4 justify-center">
            <a href="https://forms.office.com/r/padrCSt0zW" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition transform hover:scale-105">
              Register Now
            </a>
            <a href="https://github.com/Hack-the-Clock" target="_blank" rel="noopener noreferrer" className="border-2 border-green-500 text-green-400 bg-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 relative z-10 shadow-inner">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-green-500 transform hover:scale-105 transition">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-pulse">
              100+
            </div>
            <p className="text-green-300 mt-2 font-semibold">Participants</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-blue-500 transform hover:scale-105 transition">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-pulse">
              12hrs
            </div>
            <p className="text-blue-300 mt-2 font-semibold">Building Time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10 bg-opacity-50 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-center drop-shadow-lg">What is Hack the Clock?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg mb-10 text-center leading-relaxed font-semibold">
              Hack the Clock is an annual hackathon on November 6 bringing together creative minds to build innovative projects. Whether you're a seasoned developer or just starting your coding journey, there's a place for you here.
            </p>
            
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-8 border-2 border-green-500 mb-8 shadow-2xl hover:shadow-green-500/50 transition">
              <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow">This event offers graduate students an excellent opportunity to:</h3>
              <div className="space-y-4">
                {[
                  'Network with sponsors and peers from our university',
                  'Engage directly with professors serving as judges',
                  'Receive résumé feedback from professionals, including experts currently or formerly at Bank of America, Meta, and Amazon'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold mt-1 shadow-lg">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-black relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-16 text-center drop-shadow-lg">Event Timeline - November 6, 2025</h2>
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
                  <div className="w-full md:w-[calc(50%-3rem)] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-green-500 hover:border-blue-500 transition group hover:scale-105 text-left shadow-xl hover:shadow-2xl hover:shadow-green-500/50">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-gray-300 leading-relaxed mb-3 font-medium">{item.desc}</p>
                    <div className="text-green-400 font-bold text-lg">{item.time}</div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white font-bold border-4 border-black shadow-xl group-hover:scale-125 transition z-10 hidden md:flex">
                    {i + 1}
                  </div>
                  
                  {/* Mobile Circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white font-bold border-4 border-black shadow-lg md:hidden">
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
      <section id="judges" className="py-20 px-4 relative z-10 bg-opacity-50 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-12 text-center drop-shadow-lg">Our Judges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Judge 1', role: 'Industry Expert' },
              { name: 'Judge 2', role: 'Tech Leader' },
              { name: 'Judge 3', role: 'Innovation Specialist' }
            ].map((judge, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border-2 border-green-500 text-center hover:border-blue-500 transition hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-green-500/50">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center overflow-hidden border-4 border-green-500 shadow-lg">
                  <img src="/hackathon-site/clipizzi.avif" alt={judge.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{judge.name}</h3>
                <p className="text-green-300 font-semibold">{judge.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 relative z-10 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-12 text-center drop-shadow-lg">Our Sponsors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Sponsor 1' },
              { name: 'Sponsor 2' }
            ].map((sponsor, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-12 border-2 border-blue-500 text-center hover:border-green-500 transition hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img src="/hackathon-site/clipizzi.avif" alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="text-white font-bold text-xl">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-opacity-50 bg-slate-900 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-12 text-center drop-shadow-lg">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need prior experience?', a: 'No! We welcome all skill levels from beginners to experts.' },
              { q: 'What should I bring?', a: 'Just bring your laptop, charger, and your creativity!' },
              { q: 'Is there a registration fee?', a: 'Hack the Clock is completely free for all participants!' },
              { q: 'Can I work alone?', a: 'Yes, but we encourage team formation for better collaboration.' }
            ].map((item, i) => (
              <details key={i} className="group border-l-4 border-green-500 pl-6 cursor-pointer bg-slate-800 rounded-r-lg p-4 shadow-md hover:shadow-xl hover:shadow-green-500/50 transition">
                <summary className="text-white font-bold text-lg hover:text-green-400 transition list-none">
                  {item.q}
                </summary>
                <p className="text-gray-300 mt-3 font-medium">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-slate-900 to-black text-white py-8 px-4 relative z-10 shadow-2xl border-t-2 border-green-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-semibold">© 2025 Hack the Clock. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition font-semibold">Twitter</a>
            <a href="https://github.com/Hack-the-Clock" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition font-semibold">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
