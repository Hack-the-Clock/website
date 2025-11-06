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
    const targetDate = new Date('2025-11-06T08:30:00').getTime();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-opacity-90 backdrop-blur-md bg-slate-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3">
                <img src="/hackathon-site/hack-the-clock-logo-icon (1) (1).ico" alt="Hack the Clock" className="h-10 w-10" />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
                  Hack the Clock
                </span>
              </a>
            </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#schedule" className="text-gray-300 hover:text-white transition">Schedule</a>
            <a href="#judges" className="text-gray-300 hover:text-white transition">Judges</a>
            <a href="#sponsors" className="text-gray-300 hover:text-white transition">Sponsors</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
          </nav>
            {/* <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition">
              Register
            </button> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build the Future.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
              Together.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-xl blur-lg opacity-50"></div>
                    <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] border border-red-500/30">
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm md:text-base mt-2 font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

                    <div className="flex gap-4 justify-center">
            <a href="https://forms.office.com/r/padrCSt0zW" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Register Now
            </a>
            <a href="https://github.com/Hack-the-Clock" target="_blank" rel="noopener noreferrer" className="border border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-500/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
              100+
            </div>
            <p className="text-gray-300 mt-2">Participants</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
              12hrs
            </div>
            <p className="text-gray-300 mt-2">Building Time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src="/hackathon-site/hack-the-clock-logo-icon (1) (1).ico" alt="Hack the Clock" className="w-16 h-16" />
            <h2 className="text-4xl font-bold text-white text-center">What is Hack the Clock?</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-6 text-center">
              Hack the Clock is an annual hackathon on November 6 bringing together creative minds to build innovative projects. Whether you're a seasoned developer or just starting your coding journey, there's a place for you here.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {['Build amazing projects', 'Network with like-minded developers', 'Win exciting prizes', 'Learn new technologies'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-white flex items-center justify-center">
                    ✓
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Event Timeline - November 6, 2025</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-red-600 to-red-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { time: '8:30 AM', event: 'Check-in & Opening Ceremony', desc: 'Registration, team formation, and welcome address. Get your swag and meet fellow hackers!', side: 'left' },
                { time: '9:00 AM', event: 'Hacking Begins!', desc: 'The clock starts! Teams dive into building their innovative projects.', side: 'right' },
                { time: '12:00 PM', event: 'Lunch Break', desc: 'Fuel up with lunch while networking with other participants and mentors.', side: 'left' },
                { time: '3:00 PM', event: 'Midpoint Workshops', desc: 'Technical workshops and mentor sessions to help boost your project.', side: 'right' },
                { time: '6:00 PM', event: 'Dinner Time', desc: 'Recharge with dinner and keep the momentum going!', side: 'left' },
                { time: '8:00 PM', event: 'Final Sprint', desc: 'Last hour to polish your project, prepare demos, and finalize presentations!', side: 'right' },
                { time: '9:00 PM', event: 'Project Demos', desc: 'Show off what you built! Present your project to judges and peers.', side: 'left' },
                { time: '10:00 PM', event: 'Awards & Closing', desc: 'Winner announcements, prizes, and celebration of all participants!', side: 'right' }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-12 gap-4`}>
                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-3rem)] bg-gradient-to-br from-red-500/10 to-white/5 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition group hover:scale-105 text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">{item.desc}</p>
                    <div className="text-red-400 font-semibold text-lg">{item.time}</div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white font-bold border-4 border-slate-800 group-hover:scale-125 transition z-10 hidden md:flex">
                    {i + 1}
                  </div>
                  
                  {/* Mobile Circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white font-bold border-4 border-slate-800 md:hidden">
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
      <section id="judges" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Judges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Judge 1', role: 'Industry Expert' },
              { name: 'Judge 2', role: 'Tech Leader' },
              { name: 'Judge 3', role: 'Innovation Specialist' }
            ].map((judge, i) => (
              <div key={i} className="bg-gradient-to-br from-red-500/10 to-white/10 rounded-lg p-8 border border-red-500/20 text-center hover:border-red-500/50 transition">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-white/20 flex items-center justify-center overflow-hidden">
                  <img src="/hackathon-site/clipizzi.avif" alt={judge.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{judge.name}</h3>
                <p className="text-gray-400">{judge.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Sponsors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Sponsor 1' },
              { name: 'Sponsor 2' }
            ].map((sponsor, i) => (
              <div key={i} className="bg-gradient-to-br from-red-500/10 to-white/10 rounded-lg p-12 border border-red-500/20 text-center hover:border-red-500/50 transition">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img src="/hackathon-site/clipizzi.avif" alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="text-gray-300 font-semibold">{sponsor.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need prior experience?', a: 'No! We welcome all skill levels from beginners to experts.' },
              { q: 'What should I bring?', a: 'Just bring your laptop, charger, and your creativity!' },
              { q: 'Is there a registration fee?', a: 'Hack the Clock is completely free for all participants!' },
              { q: 'Can I work alone?', a: 'Yes, but we encourage team formation for better collaboration.' }
            ].map((item, i) => (
              <details key={i} className="group border-l-4 border-red-500/50 pl-6 cursor-pointer">
                <summary className="text-white font-semibold text-lg hover:text-red-500 transition list-none">
                  {item.q}
                </summary>
                <p className="text-gray-400 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>© 2025 Hack the Clock. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="https://github.com/Hack-the-Clock" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
