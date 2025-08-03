
import React, { useState, useRef, RefObject } from 'react';
import { Language, SectionId, NavLink, TeamMember, City } from './types';
import content, { TEAM_MEMBERS, CITIES, GALLERY_IMAGES, FINANCE_DATA } from './constants';
import FinanceChart from './components/FinanceChart';
import { IconMap } from './components/icons';

// SECTION: Sub-components defined outside App to prevent re-renders

const Header: React.FC<{
  navLinks: NavLink[];
  lang: Language;
  setLang: (lang: Language) => void;
  scrollToSection: (id: SectionId) => void;
}> = ({ navLinks, lang, setLang, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <h1 className="text-2xl font-serif font-bold text-indigo-900 cursor-pointer" onClick={() => scrollToSection(SectionId.Home)}>Bharat Roots & Rhythms</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} className="text-slate-700 hover:text-orange-500 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
             <div className="relative">
                <button onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} className="px-3 py-1.5 border border-orange-400 rounded-full text-orange-600 hover:bg-orange-50 transition-colors duration-300 text-sm">
                  {lang === 'en' ? 'हिंदी' : 'English'}
                </button>
            </div>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-indigo-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-orange-100 hover:text-orange-600">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};


const Section = React.forwardRef<HTMLElement, { id: string; children: React.ReactNode; className?: string }>(
  ({ id, children, className = '' }, ref) => (
    <section id={id} ref={ref} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
);
Section.displayName = 'Section';


const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-bold font-serif text-indigo-900 text-center mb-12">{children}</h2>
);


const App = () => {
  const [lang, setLang] = useState<Language>('en');
  const currentContent = content[lang];

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    events: useRef<HTMLElement>(null),
    exhibit: useRef<HTMLElement>(null),
    innovation: useRef<HTMLElement>(null),
    finance: useRef<HTMLElement>(null),
    digital: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  
  const scrollToSection = (id: SectionId) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5 seconds
  };
  
  return (
    <div className="bg-stone-50 text-slate-700 font-sans leading-relaxed antialiased">
      <Header navLinks={currentContent.navLinks} lang={lang} setLang={setLang} scrollToSection={scrollToSection} />

      <main>
        {/* Hero Section */}
        <section ref={sectionRefs.home} id="home" className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"}}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-black font-serif drop-shadow-2xl">{currentContent.hero.tagline}</h1>
            <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.Events)}} className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
              {currentContent.hero.cta}
            </a>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" ref={sectionRefs.about}>
          <SectionTitle>{currentContent.about.title}</SectionTitle>
          <p className="max-w-3xl mx-auto text-center text-lg mb-16">{currentContent.about.intro}</p>
          <div className="grid md:grid-cols-2 gap-12 mb-20 text-center">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-orange-100">
                <h3 className="text-3xl font-serif text-teal-700 font-bold mb-4">{currentContent.about.vision.title}</h3>
                <p>{currentContent.about.vision.text}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-indigo-100">
                <h3 className="text-3xl font-serif text-indigo-800 font-bold mb-4">{currentContent.about.mission.title}</h3>
                <p>{currentContent.about.mission.text}</p>
            </div>
          </div>
          <h3 className="text-3xl font-serif text-indigo-900 font-bold text-center mb-12">{currentContent.about.teamTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {TEAM_MEMBERS.map((member: TeamMember) => (
              <div key={member.name} className="text-center group">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-white group-hover:border-orange-300 transition-all duration-300 group-hover:scale-105"/>
                <h4 className="mt-4 font-bold text-indigo-900">{member.name}</h4>
                <p className="text-sm text-teal-600">{member.title}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Events Section */}
        <Section id="events" ref={sectionRefs.events} className="bg-orange-50/50">
            <SectionTitle>{currentContent.events.title}</SectionTitle>
            <p className="max-w-3xl mx-auto text-center text-lg mb-12">{currentContent.events.mapIntro}</p>
            <div className="relative w-full max-w-5xl mx-auto mb-16 aspect-video bg-blue-100/50 rounded-xl shadow-lg overflow-hidden border border-indigo-200">
              <svg viewBox="0 0 1000 600" className="w-full h-full">
                {/* Placeholder world map path */}
                <path d="M500,50 C200,100 100,300 300,550 C500,450 800,400 900,200 C700,50 600,0 500,50Z" fill="#a5f3fc" stroke="#0c4a6e" strokeWidth="1"/>
                {CITIES.map(city => (
                  <g key={city.name} onMouseEnter={() => setHoveredCity(city)} onMouseLeave={() => setHoveredCity(null)}>
                    <circle cx={city.x} cy={city.y} r="12" fill={city.country === 'India' ? 'rgba(249, 115, 22, 0.5)' : 'rgba(20, 184, 166, 0.5)'} stroke={city.country === 'India' ? '#c2410c' : '#0d9488'} strokeWidth="2" className="cursor-pointer transition-all duration-300 hover:r-16" />
                     <circle cx={city.x} cy={city.y} r="5" fill={city.country === 'India' ? '#c2410c' : '#0d9488'} className="pointer-events-none"/>
                  </g>
                ))}
                {hoveredCity && (
                  <g className="pointer-events-none" style={{ transition: 'opacity 0.2s', opacity: 1 }}>
                    <rect x={hoveredCity.x + 15} y={hoveredCity.y - 15} width={100} height={30} fill="rgba(255, 255, 255, 0.9)" rx="5" />
                    <text x={hoveredCity.x + 20} y={hoveredCity.y + 5} fill="#1e3a8a" className="font-bold">{hoveredCity.name}</text>
                  </g>
                )}
              </svg>
            </div>
            <h3 className="text-3xl font-serif text-indigo-900 font-bold text-center mb-10">{currentContent.events.componentsTitle}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentContent.events.components.map((comp: {title: string, description: string, icon: string}) => {
                    const Icon = IconMap[comp.icon];
                    return (
                        <div key={comp.title} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                            <div className="bg-orange-100 text-orange-600 p-4 rounded-full mb-4">
                               {Icon && <Icon className="w-8 h-8" />}
                            </div>
                            <h4 className="text-xl font-bold font-serif text-indigo-800 mb-2">{comp.title}</h4>
                            <p className="text-slate-600">{comp.description}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
        
        {/* Why Exhibit With Us Section */}
        <Section id="exhibit" ref={sectionRefs.exhibit}>
            <SectionTitle>{currentContent.exhibit.title}</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {currentContent.exhibit.benefits.map((benefit: { title: string, description: string, icon: string }) => {
                    const Icon = IconMap[benefit.icon];
                    return (
                        <div key={benefit.title} className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-teal-100">
                           <div className="flex-shrink-0 bg-teal-100 text-teal-600 p-3 rounded-full">
                                {Icon && <Icon className="w-6 h-6" />}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-serif text-teal-800">{benefit.title}</h4>
                                <p className="mt-1 text-slate-600">{benefit.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-center mt-16">
                 <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.Contact)}} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
                    {currentContent.exhibit.cta}
                </a>
            </div>
        </Section>

        {/* Innovation & Tech Section */}
        <Section id="innovation" ref={sectionRefs.innovation} className="bg-indigo-50/50">
            <SectionTitle>{currentContent.innovation.title}</SectionTitle>
            <p className="max-w-3xl mx-auto text-center text-lg mb-16">{currentContent.innovation.intro}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentContent.innovation.features.map((feature: { title: string, description: string, icon: string }) => {
                    const Icon = IconMap[feature.icon];
                    return (
                        <div key={feature.title} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full mb-4">
                                {Icon && <Icon className="w-8 h-8" />}
                            </div>
                            <h4 className="text-xl font-bold font-serif text-indigo-800 mb-2">{feature.title}</h4>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
        
        {/* Finance Section */}
        <Section id="finance" ref={sectionRefs.finance}>
            <SectionTitle>{currentContent.finance.title}</SectionTitle>
            <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-serif text-indigo-800 font-bold text-center mb-6">{currentContent.finance.chartTitle}</h3>
                    <FinanceChart data={FINANCE_DATA} lang={lang} />
                </div>
                <div className="lg:col-span-2">
                    <h3 className="text-3xl font-serif text-teal-700 font-bold mb-6">{currentContent.finance.incomeTitle}</h3>
                    <ul className="space-y-3">
                        {currentContent.finance.incomeStreams.map((stream: string) => (
                            <li key={stream} className="flex items-center text-lg">
                                <span className="text-orange-500 mr-3">◆</span>
                                {stream}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>

        {/* Digital Expansion Section */}
        <Section id="digital" ref={sectionRefs.digital} className="bg-teal-50/40">
            <SectionTitle>{currentContent.digital.title}</SectionTitle>
             <p className="max-w-3xl mx-auto text-center text-lg mb-16">{currentContent.digital.intro}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentContent.digital.features.map((feature: { title: string, description: string, icon: string }) => {
                    const Icon = IconMap[feature.icon];
                    return (
                        <div key={feature.title} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                            <div className="bg-teal-100 text-teal-600 p-4 rounded-full mb-4">
                                {Icon && <Icon className="w-8 h-8" />}
                            </div>
                            <h4 className="text-xl font-bold font-serif text-indigo-800 mb-2">{feature.title}</h4>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </Section>

        {/* Gallery Section */}
        <Section id="gallery" ref={sectionRefs.gallery}>
          <SectionTitle>{currentContent.gallery.title}</SectionTitle>
          <p className="max-w-3xl mx-auto text-center text-lg mb-16">{currentContent.gallery.intro}</p>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALLERY_IMAGES.map((src, index) => (
                <img key={index} src={src} alt={`Gallery image ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105" />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" ref={sectionRefs.contact} className="bg-indigo-900/90 text-white">
            <div className="container mx-auto">
              <SectionTitle><span className="text-white">{currentContent.contact.title}</span></SectionTitle>
              <p className="max-w-3xl mx-auto text-center text-lg text-indigo-200 mb-12">{currentContent.contact.intro}</p>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md">
                      <h3 className="text-2xl font-bold font-serif mb-6 text-orange-400">Get in Touch</h3>
                      <div className="space-y-4 text-lg">
                          <p><strong>Email:</strong> <a href={`mailto:${currentContent.contact.info.email}`} className="hover:text-orange-300">{currentContent.contact.info.email}</a></p>
                          <p><strong>Phone:</strong> <a href={`tel:${currentContent.contact.info.phone.replace(/\s/g, '')}`} className="hover:text-orange-300">{currentContent.contact.info.phone}</a></p>
                      </div>
                  </div>
                  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md">
                    {formSubmitted ? (
                      <div className="text-center py-10">
                        <p className="text-xl font-bold text-teal-300">{currentContent.contact.form.success}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">{currentContent.contact.form.name}</label>
                          <input type="text" name="name" id="name" required placeholder={currentContent.contact.form.name} className="w-full bg-white/20 border-2 border-transparent focus:border-orange-400 rounded-lg py-3 px-4 text-white placeholder-indigo-200 focus:outline-none transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="email" className="sr-only">{currentContent.contact.form.email}</label>
                          <input type="email" name="email" id="email" required placeholder={currentContent.contact.form.email} className="w-full bg-white/20 border-2 border-transparent focus:border-orange-400 rounded-lg py-3 px-4 text-white placeholder-indigo-200 focus:outline-none transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="message" className="sr-only">{currentContent.contact.form.message}</label>
                          <textarea name="message" id="message" rows={4} required placeholder={currentContent.contact.form.message} className="w-full bg-white/20 border-2 border-transparent focus:border-orange-400 rounded-lg py-3 px-4 text-white placeholder-indigo-200 focus:outline-none transition-colors"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
                          {currentContent.contact.form.submit}
                        </button>
                      </form>
                    )}
                  </div>
              </div>
            </div>
        </Section>

      </main>

      <footer className="bg-indigo-900 text-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
              <p>&copy; {new Date().getFullYear()} Bharat Roots and Rhythms. All Rights Reserved.</p>
              <p className="mt-2 text-sm">Crafted with ❤️ in India</p>
          </div>
      </footer>
    </div>
  );
};

export default App;
