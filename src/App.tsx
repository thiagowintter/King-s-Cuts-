/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Clock, MapPin, Menu, X, ChevronRight, Star, Calendar } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ink-900 font-sans text-cream overflow-x-hidden">
      
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-white/5 ${
          isScrolled ? 'bg-ink-950/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-wider text-white">KING'S CUTS</span>
            <span className="text-gold-500 font-medium tracking-[0.2em] text-xs mt-1 hidden sm:block">BARBERSHOP</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase font-medium text-cream/70">
            <a href="#philosophy" className="hover:text-gold-500 transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-gold-500 transition-colors">Services</a>
            <a href="#artisans" className="hover:text-gold-500 transition-colors">Artisans</a>
            <button 
              onClick={() => setBookingOpen(true)}
              className="border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-ink-950 px-6 py-2.5 rounded-sm transition-all duration-300"
            >
              Reserve Chair
            </button>
          </nav>

          <button className="md:hidden text-cream" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-ink-950 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-serif text-2xl tracking-wider text-white">KING'S CUTS</span>
               <button onClick={() => setMobileMenuOpen(false)} className="text-cream/50 hover:text-white">
                <X className="w-8 h-8" />
               </button>
            </div>
            <nav className="flex flex-col gap-8 text-xl font-serif text-center">
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-cream/80 hover:text-gold-500">Our Philosophy</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-cream/80 hover:text-gold-500">The Rituals</a>
              <a href="#artisans" onClick={() => setMobileMenuOpen(false)} className="text-cream/80 hover:text-gold-500">Our Artisans</a>
              <div className="h-px w-12 bg-white/10 mx-auto my-4"></div>
              <button 
                onClick={() => { setMobileMenuOpen(false); setBookingOpen(true); }}
                className="bg-gold-500 text-ink-950 py-4 font-sans font-semibold tracking-widest uppercase text-sm"
              >
                Reserve Chair
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549420088-7517173e35a6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2940" 
            alt="Premium Barbershop Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-transparent to-ink-900"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold-500 tracking-[0.3em] uppercase text-xs font-semibold mb-6 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-gold-500/50"></span>
              A Private Society of Style
              <span className="w-8 h-px bg-gold-500/50"></span>
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-white">
              More Than A Haircut.<br/>
              <span className="italic text-cream/90 font-light">An Elevation of Character.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto mb-12">
              King's Cuts is an exclusive sanctuary for the modern gentleman. We blend heritage craftsmanship with absolute precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold tracking-widest uppercase text-sm px-10 py-5 transition-all flex items-center justify-center gap-2"
              >
                Secure Your Chair <ChevronRight className="w-4 h-4" />
              </button>
              <a href="#philosophy" className="w-full sm:w-auto text-cream/80 hover:text-white uppercase tracking-widest text-sm font-medium transition-colors py-5">
                Explore The Club
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Trust */}
      <section id="philosophy" className="py-24 lg:py-32 bg-ink-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-gold-500 tracking-widest uppercase text-xs font-semibold mb-4 flex items-center gap-4">
               <span className="w-8 h-px bg-gold-500/50"></span> Our Philosophy
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
              Confidence is meticulously crafted, <span className="italic text-cream/70">not accidental.</span>
            </h2>
            <div className="space-y-6 text-cream/60 font-light leading-relaxed">
              <p>
                Most shops rush you in and out. At King's Cuts, time slows down. We engineered an environment where elite professionals, creatives, and industry leaders come to reset.
              </p>
              <p>
                Every detail—from the weight of the hot towel to the precise angle of the straight razor—is designed to remind you who you are at your absolute best.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div>
                <p className="font-serif text-3xl text-gold-500 mb-2">45m</p>
                <p className="text-xs tracking-widest uppercase text-cream/50">Minimum Duration</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-500 mb-2">10+</p>
                <p className="text-xs tracking-widest uppercase text-cream/50">Years Artisan Experience</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200" 
                alt="Barber working with precision" 
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 border border-gold-500/20 translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 bg-ink-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold-500 tracking-widest uppercase text-xs font-semibold mb-4 flex items-center justify-center gap-4">
               <span className="w-8 h-px bg-gold-500/50"></span> Service Menu <span className="w-8 h-px bg-gold-500/50"></span>
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl text-white">The Rituals</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Service 1 */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-baseline mb-3 border-b border-white/10 pb-4 group-hover:border-gold-500/50 transition-colors">
                <h3 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">The Executive Cut</h3>
                <span className="font-serif text-xl tracking-widest text-cream/70">$65</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" /> 45 MIN
              </p>
              <p className="text-cream/60 font-light leading-relaxed">
                A meticulous haircut tailored to your head shape, hair type, and lifestyle. Includes a therapeutic scalp wash, hot towel neck shave, and expert styling instruction.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-baseline mb-3 border-b border-white/10 pb-4 group-hover:border-gold-500/50 transition-colors">
                <h3 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">The Royal Shave</h3>
                <span className="font-serif text-xl tracking-widest text-cream/70">$55</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" /> 40 MIN
              </p>
              <p className="text-cream/60 font-light leading-relaxed">
                An immersive traditional hot towel shave. Pre-shave oil treatment, hot lather, straight razor precision, followed by a cold towel and restorative aftershave balm.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-baseline mb-3 border-b border-white/10 pb-4 group-hover:border-gold-500/50 transition-colors">
                <h3 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">The King's Signature</h3>
                <span className="font-serif text-xl tracking-widest text-cream/70">$110</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" /> 75 MIN
              </p>
              <p className="text-cream/60 font-light leading-relaxed">
                Our ultimate resetting experience. Combines The Executive Cut and The Royal Shave. Complemented by a facial rejuvenation massage and a complimentary premium spirit.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-baseline mb-3 border-b border-white/10 pb-4 group-hover:border-gold-500/50 transition-colors">
                <h3 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">Beard Sculpting</h3>
                <span className="font-serif text-xl tracking-widest text-cream/70">$40</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-cream/40 mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" /> 30 MIN
              </p>
              <p className="text-cream/60 font-light leading-relaxed">
                Precision shaping to enhance your jawline. Includes length reduction, crisp line-ups with a straight razor, and deep conditioning with our house-blended beard oils.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => setBookingOpen(true)}
              className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-ink-950 font-semibold tracking-widest uppercase text-sm px-10 py-4 transition-all"
            >
              Reserve A Ritual
            </button>
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section id="artisans" className="py-24 relative bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-gold-500 tracking-widest uppercase text-xs font-semibold mb-4 flex items-center gap-4">
                <span className="w-8 h-px bg-gold-500/50"></span> Master Craftsmen
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl">Our Artisans</h2>
            </div>
            <p className="text-cream/50 max-w-md text-sm leading-relaxed">
              We employ exclusively senior-level barbers. Each artisan has been rigorously vetted for their technical precision and conversational discretion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Arthur Pendleton', title: 'Master Barber, Founder', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Marcus Thorne', title: 'Senior Razor Specialist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Elias Cross', title: 'Director of Styling', img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((artisan, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-ink-900">
                  <img src={artisan.img} alt={artisan.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <div className="pt-6">
                  <h3 className="font-serif text-2xl mb-1 text-white">{artisan.name}</h3>
                  <p className="text-xs tracking-widest uppercase text-gold-500/80">{artisan.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Quote */}
      <section className="py-32 relative bg-ink-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 text-gold-500 mb-8">
            <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-white">
            "I've been to luxury barbers in London, New York, and Tokyo. The experience at King's Cuts doesn't just rival them—it surpasses them. Flawless execution and a genuinely relaxing environment."
          </h2>
          <p className="tracking-widest uppercase text-xs text-gold-500/80 font-medium">Jonathan V. — Executive Director</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink-950 border-t border-white/5 border-b">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white text-glow">Command The Room.</h2>
          <p className="text-cream/60 leading-relaxed max-w-xl mx-auto mb-10 font-light">
            Our calendar fills quickly. We recommend booking two weeks in advance. Walk-ins are accommodated solely based on last-minute cancellations.
          </p>
          <button 
            onClick={() => setBookingOpen(true)}
            className="bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold tracking-widest uppercase text-sm px-12 py-5 transition-all inline-flex items-center gap-3"
          >
            <Calendar className="w-4 h-4" /> Secure Your Appointment
          </button>
          <p className="mt-6 text-xs text-cream/40 tracking-widest uppercase">Zero Cancellation Fee Up To 24H Prior.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-950 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          <div>
            <span className="font-serif text-2xl tracking-wider text-white mb-6 block">KING'S <span className="text-gold-500">CUTS</span></span>
            <p className="text-cream/40 text-sm leading-relaxed max-w-sm">
              The premier grooming destination for gentlemen of distinction. Elevating the standard of barbering since 2018.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-6">Location</h4>
            <div className="text-cream/60 text-sm space-y-2 flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold-500/50" />
              <p>1423 Premium Avenue<br/>Luxury District, Suite 100<br/>New York, NY 10012</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-6">Hours of Service</h4>
            <ul className="text-cream/60 text-sm space-y-3">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between text-gold-500/80"><span>Sunday</span> <span>Members Only</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-cream/30 uppercase">
          <p>&copy; {new Date().getFullYear()} King's Cuts Barbershop. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>


      {/* Frictionless Booking Modal Slide-over */}
      <AnimatePresence>
        {bookingOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setBookingOpen(false)}
              className="fixed inset-0 bg-ink-950/80 backdrop-blur-sm z-[60]"
            ></motion.div>
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-ink-900 border-l border-white/10 z-[70] flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-ink-950">
                <h2 className="font-serif text-2xl text-white">Reserve Your Chair</h2>
                <button onClick={() => setBookingOpen(false)} className="text-cream/50 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                
                {/* Step 1 */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold-500 text-transparent"></span> Step 1: Select Ritual
                  </h3>
                  <div className="space-y-3">
                    {['The Executive Cut - $65', 'The Royal Shave - $55', "The King's Signature - $110"].map((service, i) => (
                      <label key={i} className="flex items-center justify-between p-4 border border-white/10 hover:border-gold-500/50 cursor-pointer transition-colors bg-ink-950/50">
                        <span className="font-serif text-lg text-cream/90">{service.split(' - ')[0]}</span>
                        <span className="text-gold-500 font-medium">{service.split(' - ')[1]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold-500 text-transparent"></span> Step 2: Choose Artisan
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                     {['Arthur Pendleton', 'Marcus Thorne', 'Elias Cross', 'First Available'].map((artisan, i) => (
                      <div key={i} className={`p-4 border text-center cursor-pointer transition-colors ${i === 3 ? 'border-gold-500/50 bg-gold-500/5 text-gold-500' : 'border-white/10 hover:border-gold-500/30 text-cream/70 bg-ink-950/50'}`}>
                        <span className="font-serif">{artisan}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                   <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold-500 text-transparent"></span> Step 3: Date & Time
                  </h3>
                  <div className="p-4 border border-white/10 bg-ink-950/50 text-center text-cream/40 text-sm py-8 cursor-pointer hover:border-gold-500/30">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-gold-500/50" />
                    Select Date on Calendar
                  </div>
                </div>

              </div>

              <div className="p-6 bg-ink-950 border-t border-white/10">
                <button className="w-full bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold tracking-widest uppercase text-sm py-5 transition-all">
                  Confirm Reservation
                </button>
                <p className="text-center text-[10px] tracking-widest uppercase text-cream/30 mt-4">Payment secured on premise.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
