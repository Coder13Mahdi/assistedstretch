/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, 
  Sun, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Star,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

/* === IMAGE IMPORTS (YOUR ASSETS) === */
import heroImg from './assets/spa2.png';
import resetImg from './assets/spa11.png';
import signatureImg from './assets/spa9.jpeg';
import deepImg from './assets/spa6.jpeg';
import trustImg from './assets/spa4.jpeg';

/* Gallery images (in order you specified) */
import g1 from './assets/spa-logo.jpeg';
import g2 from './assets/spa4.jpeg';
import g3 from './assets/spa5.jpeg';
import g4 from './assets/spa7.jpeg';
import g5 from './assets/spa10.jpeg';
import g6 from './assets/warning spa.jpeg';

/* CTA image */
import ctaImg from './assets/spa2.png';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}

const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen selection:bg-[var(--color-primary)] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container">
          <nav className="glass rounded-[var(--radius-xl)] px-4 py-3 flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[var(--color-primary-2)] to-[var(--color-accent)] flex items-center justify-center text-[#201511] font-extrabold tracking-wider border border-white/20">
                AS
              </div>
              <div className="hidden sm:block">
                <span className="block text-sm font-bold uppercase tracking-wider">Assisted Stretching</span>
                <span className="block text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest">Mobility • Recovery • Flow</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text-muted)]">
              {['Benefits', 'Services', 'Experience', 'Pricing', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[var(--color-text)] transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full bg-[var(--color-glass)] border border-[var(--color-border)] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="#book" className="btn btn-primary hidden sm:flex">Book Now</a>
              <button 
                className="md:hidden w-10 h-10 rounded-full bg-[var(--color-glass)] border border-[var(--color-border)] flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display">
              {['Benefits', 'Services', 'Experience', 'Pricing', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-[var(--color-border)] pb-4"
                >
                  {item}
                </a>
              ))}
              <a href="#book" onClick={() => setIsMenuOpen(false)} className="btn btn-primary w-full py-4 text-lg">Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--color-primary-2)] text-[10px] uppercase tracking-[0.2em] mb-6">
                Private Stretch Therapy Experience
              </span>
              <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-6">
                Move better. <br />
                Recover deeper. <br />
                <span className="text-[var(--color-primary-2)]">Feel the difference.</span>
              </h1>
              <p className="text-[var(--color-text-muted)] text-lg max-w-xl mb-8 leading-relaxed">
                Assisted Stretching is built for people dealing with tight hips, low-back tension, shoulder restriction, and day-to-day stiffness. Experience mobility work in a private, luxury setting.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#book" className="btn btn-primary px-8 py-4 text-base">Book First Session</a>
                <a href="#pricing" className="btn btn-secondary px-8 py-4 text-base">View Sessions</a>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-2xl">
                {[
                  { title: 'Fully Clothed', desc: 'Professional guided bodywork' },
                  { title: 'Mobility First', desc: 'Designed for relief & posture' },
                  { title: 'Private Suite', desc: 'Luxury wellness atmosphere' },
                  { title: 'Active Lifestyle', desc: 'Ideal for desk workers & athletes' }
                ].map((point, i) => (
                  <div key={i} className="glass p-4 rounded-[var(--radius-lg)]">
                    <strong className="block text-sm mb-1">{point.title}</strong>
                    <span className="text-xs text-[var(--color-text-muted)]">{point.desc}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="glass rounded-[var(--radius-xl)] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src={heroImg}
                    alt="Stretching session" 
                    className="w-full h-full object-cover saturate-[1.05]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-[var(--radius-lg)]">
                    <strong className="block text-sm">Premium Stretch Therapy</strong>
                    <span className="text-xs text-[var(--color-text-muted)]">Focused on hips, back, and shoulders.</span>
                  </div>
                </div>

                <div className="absolute -right-4 top-1/4 glass p-6 rounded-[var(--radius-lg)] max-w-[180px] hidden lg:block">
                  <strong className="block text-2xl text-[var(--color-primary-2)] font-display">$20 OFF</strong>
                  <span className="text-xs text-[var(--color-text-muted)]">First session offer for new clients.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-black/20">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <Reveal>
                <span className="text-[var(--color-primary-2)] text-[10px] uppercase tracking-[0.2em] mb-4 block">Targeted Relief</span>
                <h2 className="text-4xl md:text-5xl font-display mb-6">Target the tension that keeps you from moving freely.</h2>
                <p className="text-[var(--color-text-muted)]">
                  We focus on the areas that impact your daily life the most, using guided recovery techniques that go beyond standard stretching.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { title: 'Hip & Low Back', desc: 'Ease tightness from sitting, training, or driving.' },
                { title: 'Neck & Shoulder', desc: 'Open up the upper body and improve posture.' },
                { title: 'Mobility Flow', desc: 'Improve range of motion with guided assistance.' },
                { title: 'Recovery Support', desc: 'Perfect for active lifestyles and body maintenance.' }
              ].map((benefit, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass p-6 rounded-[var(--radius-xl)] h-full">
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{benefit.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: '45', label: 'Minute Express' },
                { val: '60', label: 'Minute Signature' },
                { val: '90', label: 'Deep Recovery' },
                { val: '3x', label: 'Bundle Options' }
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass p-6 rounded-[var(--radius-lg)] text-center">
                    <strong className="block text-4xl font-display text-[var(--color-primary-2)] mb-1">{stat.val}</strong>
                    <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <Reveal>
                <span className="text-[var(--color-primary-2)] text-[10px] uppercase tracking-[0.2em] mb-4 block">Our Sessions</span>
                <h2 className="text-4xl md:text-5xl font-display mb-6">A cleaner way to recover.</h2>
                <p className="text-[var(--color-text-muted)]">
                  Choose the session that fits your schedule and recovery needs. Each appointment is tailored to your body's specific tension points.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: '45-Minute Reset', 
                  desc: 'Focused release for immediate attention on problem areas.',
                  img: resetImg,
                  points: ['Targeted mobility work', 'Perfect entry point']
                },
                { 
                  title: '60-Minute Signature', 
                  desc: 'Our core offer for full-body balance and recovery flow.',
                  img: signatureImg,
                  points: ['Most balanced session', 'Ideal for repeat clients']
                },
                { 
                  title: '90-Minute Deep Recovery', 
                  desc: 'Detailed work for those who want a slower, deeper experience.',
                  img: deepImg,
                  points: ['Extra time for problem areas', 'Premium recovery feel']
                }
              ].map((service, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass rounded-[var(--radius-xl)] overflow-hidden group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-display mb-4">{service.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] mb-6">{service.desc}</p>
                      <ul className="space-y-3">
                        {service.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="py-24 bg-black/10">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-[var(--color-primary-2)] text-[10px] uppercase tracking-[0.2em] mb-4 block">The Atmosphere</span>
              <h2 className="text-4xl md:text-5xl font-display mb-8">Luxury wellness without the corporate feel.</h2>
              <div className="space-y-6">
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  We've created a space that feels like a private sanctuary. From the warm amber lighting to the carefully curated ambiance, every detail is designed to help you relax while we work on your mobility.
                </p>
                <ul className="space-y-4">
                  {[
                    'Private setting with warm, elevated ambiance',
                    'Professional fully clothed sessions',
                    'Clear focus on mobility and relief',
                    'Premium look that feels personal'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                        <Check size={12} className="text-[var(--color-primary)]" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="glass rounded-[var(--radius-xl)] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src={trustImg}
                    alt="Wellness room" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass p-6 rounded-[var(--radius-lg)]">
                    <h3 className="text-xl font-display mb-2">Designed for Trust</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      A private in-home suite experience that prioritizes your comfort and recovery.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-black/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Reveal delay={0.1} className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden glass">
                <img src={g1} alt="Gallery" className="w-full h-full object-cover" />
              </Reveal>

              <Reveal delay={0.2} className="aspect-square md:aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden glass md:col-span-2">
                <img src={g2} alt="Gallery" className="w-full h-full object-cover" />
              </Reveal>

              <Reveal delay={0.3} className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden glass">
                <img src={g3} alt="Gallery" className="w-full h-full object-cover" />
              </Reveal>

              <Reveal delay={0.4} className="aspect-square md:aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden glass md:col-span-2">
                <img src={g4} alt="Gallery" className="w-full h-full object-cover" />
              </Reveal>

              <Reveal delay={0.5} className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden glass">
                <img src={g5} alt="Gallery" className="w-full h-full object-cover" />
              </Reveal>

              <Reveal delay={0.6} className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden glass">
                <img src={g6} alt="Gallery" className="w-full h-full object-cover" />
              </Reveal>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "I came in tight through my hips and low back and felt a noticeable difference after the session.", author: "Active Professional" },
                { quote: "The setting felt premium and professional, and the stretch work was way more effective than trying to do it alone.", author: "Fitness Enthusiast" },
                { quote: "This is the kind of service desk workers and active people don't realize they need until they try it.", author: "Remote Worker" }
              ].map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass p-8 rounded-[var(--radius-xl)]">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={14} fill="var(--color-primary)" className="text-[var(--color-primary)]" />
                      ))}
                    </div>
                    <p className="text-lg italic mb-6">"{t.quote}"</p>
                    <span className="text-sm font-bold text-[var(--color-primary-2)]">— {t.author}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-black/10">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <h2 className="text-4xl font-display text-center mb-12">Frequently Asked Questions</h2>
              </Reveal>

              <div className="space-y-4">
                {[
                  { q: 'What should I wear to a session?', a: 'Comfortable clothing that allows movement. Because this is assisted stretching, clients stay fully clothed during the session.' },
                  { q: 'Who is this best for?', a: 'Desk workers, active adults, gym clients, and anyone dealing with stiffness, tension, or restricted movement.' },
                  { q: 'Should I book a single session or a bundle?', a: 'A single session is great for relief and trying the service. Bundles are better when the goal is ongoing progress.' },
                  { q: 'What makes this different from stretching on my own?', a: 'A guided session lets the practitioner control angles, pressure, and sequencing in a way most people cannot do alone.' }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <details className="glass rounded-[var(--radius-lg)] group overflow-hidden">
                      <summary className="p-6 cursor-pointer flex items-center justify-between font-bold list-none">
                        {item.q}
                        <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="book" className="py-24">
          <div className="container">
            <Reveal>
              <div className="glass rounded-[var(--radius-xl)] overflow-hidden grid md:grid-cols-2">
                <div className="p-12 md:p-20 flex flex-col justify-center">
                  <span className="text-[var(--color-primary-2)] text-[10px] uppercase tracking-[0.2em] mb-4 block">Book the Experience</span>
                  <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
                    Ready to move <br />without restriction?
                  </h2>
                  <p className="text-[var(--color-text-muted)] mb-10 text-lg">
                    Join our community of clients who prioritize their recovery. Book your first session today and feel the difference.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="mailto:hello@assistedstretching.com" className="btn btn-primary px-10 py-5 text-lg">Book Now</a>
                    <a href="tel:+10000000000" className="btn btn-secondary px-10 py-5 text-lg">Call Us</a>
                  </div>
                </div>

                <div className="hidden md:block relative">
                  <img 
                    src={ctaImg}
                    alt="CTA" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[var(--color-surface)] to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--color-border)]">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[var(--color-primary-2)] to-[var(--color-accent)] flex items-center justify-center text-[#201511] font-extrabold tracking-wider border border-white/20">
                  AS
                </div>
                <div>
                  <span className="block text-sm font-bold uppercase tracking-wider">Assisted Stretching</span>
                  <span className="block text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest">
                    Mobility • Recovery • Flow
                  </span>
                </div>
              </a>

              <p className="text-sm text-[var(--color-text-muted)] max-w-sm mb-6">
                Premium assisted stretching focused on mobility, recovery, and full-body relief in a private, professional setting.
              </p>

              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-[var(--color-primary)] transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-[var(--color-primary)] transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:text-[var(--color-primary)] transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <li><a href="#benefits" className="hover:text-[var(--color-text)] transition-colors">Benefits</a></li>
                <li><a href="#services" className="hover:text-[var(--color-text)] transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-[var(--color-text)] transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-[var(--color-text)] transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>
                    123 Wellness Way, <br />Suite 100, City, ST
                  </span>
                </li>
                <li classname="flex items-center gap-3">
                  <Clock size={16} className="shrink-0" />
                  <span>Mon - Sat: 8am - 8pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between gap-6 text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest">
            <p>© 2026 Assisted Stretching. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[var(--color-text)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--color-text)] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

