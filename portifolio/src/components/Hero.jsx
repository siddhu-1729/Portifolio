import profileImg from '../assets/me.jpg';
import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './contact';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';
function Hero() {
  const [showTech, setShowTech] = useState(false);
  const [project, setProject] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-svh px-6 md:px-12 py-20 relative overflow-hidden text-left sm:text-center md:text-left">
        <div className="flex-1 max-w-[600px] animate-fade-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--accent-bg) border border-(--accent-border) text-(--accent) text-sm font-medium mb-6 animate-fade-slide-down">
            👋 Available for work
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-bold tracking-tight leading-[1.1] mb-5 text-(--text-h)">
            Hi, I'm <span className="bg-linear-to-br from-(--accent) to-[#7c3aed] bg-clip-text text-transparent">Venkata Siddhardha</span>
            <br />
          </h1>
          <p className="text-md leading-relaxed text-(--text) max-w-[480px] mb-10 sm:mx-auto md:mx-0">
            I am a Full Stack Developer having Hands-on experience with React, Angular and Spring Boot, Node.js and Express.js as major web technologies.
            I am Passionate about AI-driven solutions and building web, Android Applications.
            And Currently exploring AI & Machine Learning. I love to bring the Ideas into reality
          </p>
          <div className="flex flex-wrap py-2 gap-4 mb-12 sm:justify-center md:justify-start">
            <button 
              onClick={() => setProject(!project)}
              className={`px-7 py-3.5 rounded-xl border font-semibold transition-all text-decoration-none shadow-sm ${project ? 'bg-(--accent) text-white border-(--accent)' : 'border-(--border) text-(--text-h) hover:border-(--accent-border)'} hover:-translate-y-0.5`}
            >
              View Projects
            </button>
            
            <button 
              onClick={() => setShowTech(!showTech)}
              className={`px-7 py-3.5 rounded-xl border font-semibold transition-all text-decoration-none shadow-sm ${showTech ? 'bg-(--accent) text-white border-(--accent)' : 'border-(--border) text-(--text-h) hover:border-(--accent-border)'} hover:-translate-y-0.5`}
            >
              Skills
            </button>
            <a
               href="/Siddhardha_Vemulamada_Resume.pdf"
  
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl border font-semibold transition-all text-decoration-none shadow-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
               >
               View Resume
             </a>
          </div>
             
          <AnimatePresence>
            {showTech && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-wrap gap-2.5 sm:justify-center md:justify-start"
              >
                {['React', 'TypeScript', 'TailwindCSS', 'Angular', 'Spring Boot', 'Node.js', 'Express.js', 'FastAPI', 'MySQL', 'Postgress', 'MonngoDB', 'Java', 'Python', 'Git', 'GitHub', 'Docker', 'GitHub Actions'].map((tech) => (
                  <motion.span 
                    key={tech} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-bg)', borderColor: 'var(--accent-border)' }}
                    className="px-3.5 py-1.5 rounded-md text-[13px] font-medium bg-(--code-bg) text-(--text-h) border border-(--border) cursor-default select-none transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative flex shrink-0 items-center justify-center w-56 h-56 md:w-80 md:h-80 animate-fade-slide-up">
          <div className="absolute inset-0 rounded-full bg-radial from-(--accent-bg) to-transparent animate-pulse-slow"></div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-dashed border-(--accent-border) animate-spin-slow"></div>
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-(--accent-bg) border-2 border-(--accent-border) flex items-center justify-center overflow-hidden">
              <img src={profileImg} alt="Venkata Siddhardha" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {project && (
          <motion.section 
            initial={{ opacity: 0, height: 0, y: 50 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.8, bounce: 0.3 }}
            className="overflow-hidden pb-20"
          >
            <Projects name={"Siddhardha Projects"}/>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Work Experience */}
      <div>
        <Experience />
      </div>
{/* Achievements */}
  <div>
     <Achievements />
  </div>

{/* Contact Me  */}
       <div className="">
         <Contact />
      </div>

    </>
  );
}

export default Hero;


