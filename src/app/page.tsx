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
                <img src="/favicon.ico" alt="Hack the Clock" className="h-10 w-10" />
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
            <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition">
              Register
            </button>
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
            Join hundreds of developers, designers, and innovators for 48 hours of non-stop coding, collaboration, and creation.
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What is Hack the Clock?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 flex justify-center md:justify-start">
                {/* <img src="/favicon.ico" alt="Hack the Clock" className="w-24 h-24" /> */}
              </div>
              <p className="text-gray-300 text-lg mb-4">
                Hack the Clock is an annual hackathon bringing together creative minds to build innovative projects. Whether you're a seasoned developer or just starting your coding journey, there's a place for you here.
              </p>
              <div className="space-y-4">
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
            <div className="bg-gradient-to-br from-red-500/20 to-white/20 rounded-lg p-8 border border-red-500/30">
              <div className="aspect-video bg-gradient-to-br from-red-500/10 to-white/10 rounded-lg flex items-center justify-center">
                <img src="/favicon.ico" alt="Hack the Clock" className="w-48 h-48 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Timeline</h2>
          <div className="space-y-6">
            {[
              { time: 'November 6, 8:30 AM', event: 'Check-in & Opening Ceremony', desc: 'Welcome to Hack the Clock!' },
              { time: 'November 6, 9:00 AM', event: 'Hacking Begins', desc: 'Start building your projects' },
              { time: 'November 6, 3:00 PM', event: 'Midpoint Boost', desc: 'Workshops and mentor sessions' },
              { time: 'November 6, 8:00 PM', event: 'Final Sprint', desc: '1 hour left to finalize your project' },
              { time: 'November 6, 9:00 PM', event: 'Judging & Awards', desc: 'Project demonstrations and winners announcement' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-24 font-semibold text-red-500 flex-shrink-0">{item.time}</div>
                <div className="flex-1 border-l-2 border-red-500/50 pl-6 pb-6">
                  <h3 className="text-xl font-bold text-white">{item.event}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Judges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Judge 1', role: 'Industry Expert', img: '/judges/judge1.jpg' },
              { name: 'Judge 2', role: 'Tech Leader', img: '/judges/judge2.jpg' },
              { name: 'Judge 3', role: 'Innovation Specialist', img: '/judges/judge3.jpg' }
            ].map((judge, i) => (
              <div key={i} className="bg-gradient-to-br from-red-500/10 to-white/10 rounded-lg p-8 border border-red-500/20 text-center hover:border-red-500/50 transition">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-white/20 flex items-center justify-center overflow-hidden">
                  <img src={judge.img} alt={judge.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <div className="text-6xl">👨‍💼</div>
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
              { name: 'Sponsor 1', img: '/sponsors/sponsor1.png' },
              { name: 'Sponsor 2', img: '/sponsors/sponsor2.png' }
            ].map((sponsor, i) => (
              <div key={i} className="bg-gradient-to-br from-red-500/10 to-white/10 rounded-lg p-12 border border-red-500/20 text-center hover:border-red-500/50 transition">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img src={sponsor.img} alt={sponsor.name} className="max-h-full max-w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
