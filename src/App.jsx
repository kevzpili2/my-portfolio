import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Menu, X, Code, Globe, Layout, Server, Database, BookOpen, Briefcase, MessageCircle, Volume2, Award, Terminal, CircuitBoard, Cpu, Palette, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

const Github = ({ size, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const Linkedin = ({ size, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { profile, skills, projects, certifications } = portfolioData;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const brandColor = "#245741";

  const getProjectIcon = (type) => {
    switch(type) {
      case 'audio': return <Volume2 size={24} />;
      case 'web': return <Globe size={24} />;
      case 'dashboard': return <Database size={24} />;
      default: return <Code size={24} />;
    }
  };

  const getSkillIcon = (category) => {
    if (category.includes('Frontend')) return <Layout size={28} />;
    if (category.includes('Backend')) return <Server size={28} />;
    return <Palette size={28} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      
      <style>{`
        .text-brand { color: ${brandColor}; }
        .bg-brand { background-color: ${brandColor}; }
        .border-brand { border-color: ${brandColor}; }
        .hover-bg-brand:hover { background-color: #1a4131; }
        .ring-brand { --tw-ring-color: ${brandColor}; }
      `}</style>

      {/* --- HEADER --- */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50' : 'bg-transparent'}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center cursor-pointer select-none" 
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-black text-xl mr-3 shadow-lg shadow-brand/20 leading-none">K</div>
              <span className="text-xl font-black text-slate-800 tracking-tight leading-none pt-1">Kevz<span className="text-brand">.dev</span></span>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-sm font-semibold text-slate-600 hover:text-brand transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full rounded-full"></span>
                </button>
              ))}
            </nav>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-3 text-base font-bold text-slate-700 hover:text-brand hover:bg-emerald-50/50 rounded-xl transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-300/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="flex-1 text-center md:text-left z-10"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-bold mb-8">
                <Terminal size={14} className="text-brand" />
                <span>{profile.role}</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
                {profile.name.split(' ').slice(0, 2).join(' ')} <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">{profile.name.split(' ').slice(2).join(' ')}.</span>
              </motion.h1>
              
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-slate-500 mb-8 leading-tight">
                Designing hardware. <br className="hidden md:block" />
                <span className="text-slate-800">Optimizing software.</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                {profile.description}
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="w-full sm:w-auto bg-brand hover-bg-brand text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2"
                >
                  View My Work
                  <ExternalLink size={18} />
                </motion.button>
                <div className="flex items-center gap-4 px-4 mt-4 sm:mt-0">
                   <motion.a whileHover={{ y: -5, color: brandColor }} href={profile.github} target="_blank" rel="noreferrer" className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 shadow-sm transition-colors"><Github size={20} /></motion.a>
                   <motion.a whileHover={{ y: -5, color: brandColor }} href={profile.linkedin} className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 shadow-sm transition-colors"><Linkedin size={20} /></motion.a>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex-1 relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg"
            >
               <div className="relative group mx-auto aspect-square">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand to-emerald-300 rounded-[3rem] rotate-6 opacity-30 blur-lg group-hover:rotate-12 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-inner"></div>
                  <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-20">
                    <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt={profile.name} className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000 ease-out" />
                  </div>
                  
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 z-30 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white hidden lg:flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg"><Cpu size={24} /></div>
                    <div><p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Specialization</p><p className="text-base font-black text-slate-900">CompEng</p></div>
                  </motion.div>

                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-8 -left-8 z-30 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white hidden lg:flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg"><Code size={24} /></div>
                    <div><p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Developer</p><p className="text-base font-black text-slate-900">Full-Stack</p></div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="py-24 bg-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeUp} className="space-y-8">
                <div className="inline-block">
                  <h3 className="text-4xl font-black text-slate-900 flex items-center gap-4"><span className="text-brand font-mono text-xl">01.</span>Background</h3>
                  <div className="h-1 w-12 bg-brand mt-4 rounded-full"></div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  As a Computer Engineering student, I bring a unique <span className="font-bold text-brand">"under-the-hood"</span> perspective to web development. I understand how code affects system resources, ensuring that the applications I build are highly performant and secure.
                </p>
                <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-3 text-lg"><div className="p-2 bg-emerald-100 text-brand rounded-lg"><BookOpen size={20} /></div>Current Studies</h4>
                  <div className="border-l-4 border-brand pl-5 ml-4 py-2">
                    <h5 className="font-black text-slate-800 text-lg">B.S. in Computer Engineering</h5>
                    <p className="text-brand font-bold">{profile.location}</p>
                    <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">Expected Graduation: {profile.graduation.split(' - ')[1]}</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={slideInRight} className="space-y-8">
                <div className="inline-block">
                  <h3 className="text-4xl font-black text-slate-900 flex items-center gap-4"><span className="text-brand font-mono text-xl">02.</span>Certifications</h3>
                  <div className="h-1 w-12 bg-brand mt-4 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand/30 transition-all group">
                      <div className="flex justify-between items-start mb-3">
                        <div className="p-3 bg-slate-50 group-hover:bg-brand/10 transition-colors rounded-xl"><Award className="text-slate-400 group-hover:text-brand transition-colors" size={24} /></div>
                        <span className="text-xs bg-slate-100 text-slate-600 py-1.5 px-3 rounded-full font-bold uppercase tracking-wider">{cert.date}</span>
                      </div>
                      <h5 className="font-black text-slate-900 text-lg mb-1">{cert.title}</h5>
                      <p className="text-xs text-brand font-bold mb-3 uppercase tracking-wide">{cert.issuer}</p>
                      <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">{cert.description}</p>
                      {cert.certId && (<div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2"><ShieldCheck size={14} className="text-brand" /><p className="text-[10px] font-mono text-slate-400 font-semibold">{cert.certId}</p></div>)}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section id="skills" className="py-24 bg-slate-50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Technical Arsenal</motion.h2>
            <div className="h-1 w-24 bg-brand mx-auto rounded-full mb-20"></div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div key={index} variants={fadeUp} whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-white border border-slate-200/60 shadow-sm text-left group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                    {getSkillIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((item, idx) => (
                      <span key={idx} className="bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-100 group-hover:border-emerald-100 transition-colors">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
              <div><motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-6">Featured Work</motion.h2><div className="h-1.5 w-24 bg-brand rounded-full"></div></div>
              <motion.a whileHover={{ x: 10 }} href={profile.github} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold pb-2 text-sm tracking-widest uppercase">View full GitHub <Github size={18} /></motion.a>
            </div>
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <motion.div key={p.id} variants={fadeUp} whileHover={{ y: -10 }} className="bg-slate-800/50 backdrop-blur-xl rounded-[2rem] border border-slate-700/50 p-8 hover:bg-slate-800 transition-all flex flex-col group hover:border-brand/50 shadow-xl">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-slate-700/50 group-hover:bg-brand rounded-2xl text-slate-300 group-hover:text-white transition-all shadow-inner">{getProjectIcon(p.type)}</div>
                    <div className="flex gap-3"><a href={p.githubLink} target="_blank" className="p-2 bg-slate-700/30 rounded-full hover:bg-white hover:text-slate-900 transition-all"><Github size={20} /></a><a href={p.liveLink} target="_blank" className="p-2 bg-slate-700/30 rounded-full hover:bg-white hover:text-slate-900 transition-all"><ExternalLink size={20} /></a></div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-emerald-400 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{p.description}</p>
                  <div className="flex flex-wrap gap-2">{p.tags.map((tag, idx) => (<span key={idx} className="text-[10px] uppercase font-black tracking-widest bg-slate-900/50 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300">{tag}</span>))}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-32 bg-white flex items-center relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-4 z-10 w-full">
            <h2 className="text-brand font-black tracking-widest uppercase text-sm mb-4">Contact Me</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-12">Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">together.</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <motion.a whileHover={{ y: -10 }} href={`mailto:${profile.email}`} className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-emerald-50 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-400 group-hover:text-brand transition-colors mb-6"><Mail size={32} /></div>
                <span className="font-black text-xl text-slate-900 mb-2">Email</span>
                <span className="text-sm font-semibold text-slate-500 truncate w-full">{profile.email}</span>
              </motion.a>
              <motion.a whileHover={{ y: -10 }} href={profile.facebook} target="_blank" className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-emerald-50 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-400 group-hover:text-brand transition-colors mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <span className="font-black text-xl text-slate-900 mb-2">Facebook</span>
                <span className="text-sm font-semibold text-slate-500">@kevinpili</span>
              </motion.a>
              <motion.a whileHover={{ y: -10 }} href={profile.whatsapp} target="_blank" className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-emerald-50 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-400 group-hover:text-brand transition-colors mb-6"><MessageCircle size={32} /></div>
                <span className="font-black text-xl text-slate-900 mb-2">WhatsApp</span>
                <span className="text-sm font-semibold text-slate-500">Message Me</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div><span className="text-2xl font-black text-slate-900">Kevz<span className="text-brand">.dev</span></span><p className="text-slate-500 font-medium text-sm mt-2">{profile.location} • {profile.graduation}</p></div>
          <div className="flex gap-4"><a href={profile.github} target="_blank" className="p-3 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-brand transition-all shadow-sm"><Github size={20} /></a><a href={profile.linkedin} className="p-3 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-brand transition-all shadow-sm"><Linkedin size={20} /></a></div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">&copy; {new Date().getFullYear()} {profile.name}.</p>
        </div>
      </footer>
    </div>
  );
}
