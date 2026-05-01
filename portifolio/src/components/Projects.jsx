import { motion } from 'framer-motion';
import {FaGithub} from 'react-icons/fa';
function Projects({name}) {
    console.log(name);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        }
    };

    const projectList = [
        {
            title: "Clubs Collab",
            description: "A collaborative platform for campus clubs to organize events and manage members efficiently.",
            stack:"Angular , Node.js , Express.js , MongoDB",
            link:"https://github.com/siddhu-1729/CollegeCLubsFrontend"
        },
        {
            title: "Alumni Management",
            description: "A comprehensive system to connect students with alumni for mentorship and networking opportunities.",
            stack:"React ,TypeScript, Spring Boot , Postgress",
            link:"https://github.com/siddhu-1729/Alumni_Backend"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion.",
            stack:"React ,TypeScript, Tailwind CSS, Framer Motion",
            link:""
        },
        {
            title:"Heal",
            description:"Android Application for Health care and helps for Digital Diagnosis, Treatment and Creating Awareness among people regarding health issues.",
            stack:"Android,React-Native,FastAPI,Postgress",
            link:"https://github.com/siddhu-1729/HEAL"
        }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center md:text-left"
                >
                    Featured Projects
                </motion.h2>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectList.map((project, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10, 
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "var(--accent)"
                            }}
                            className="bg-(--bg-card) rounded-2xl p-8 shadow-md border border-(--border) transition-colors group h-full flex flex-col"
                        >
                            <h3 className="text-xl font-bold mb-4 group-hover:text-(--accent) transition-colors">{project.title}</h3>
                            <p className="text-(--text) mb-8 line-clamp-3 grow">{project.description}</p>
                            {/* Stack used */}
                            <div className='flex flex-wrap gap-1 mb-2'>
                            {project.stack.split(",").map(item=>item.trim())
                                .map((tech,id)=>{
                                return <span key={id} className={'border border-(--border) rounded-md px-2 py-1 text-sm'}>{tech}</span>
                                })}
                            </div>
                            <div className="flex flex-wrap gap-4 mt-auto">
                                <a href={`${project.link}`} className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-(--border) text-(--text-h) font-semibold hover:border-(--accent-border) transition-all text-sm no-underline">
                                <FaGithub />
                                 <span>GitHub</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
          
        </section>
    );
}

export default Projects;