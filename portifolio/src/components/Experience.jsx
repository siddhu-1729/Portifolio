import { motion } from "framer-motion";

function Experience() {
  const points = [
    "Engineered production-ready Spring Boot backend features, including an automated email notification system using JavaMailSender, enhancing user engagement and communication in a fully remote internship.",
    "Integrated token-based authentication using Spring Security and JWT, enabling secure user logins and independent session management across a distributed user base.",
    "Designed and deployed RESTful APIs using JPA/Hibernate and MySQL, ensuring reliable data persistence for user profiles and submissions in a collaborative team environment."
  ];

  return (
    <>
    {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Experience
        </h2>
  
    <section className="py-16 px-6 bg-black-100 flex justify-center rounded-full">
      <div className="max-w-4xl w-full bg-blue-950 shadow-xl rounded-2xl p-8">
        
        

        {/* Card */}
        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-xl font-semibold text-white-700 mb-4">
            Java Developer Intern
          </h3>

          {/* Animated Points */}
          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.4, duration: 0.9 }}
                viewport={{ once: true }}
                className=" leading-relaxed flex items-start gap-3"
              >
                <span className="text-blue-600 mt-1">•</span>
                <p>{point}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>  </>
  );
}

export default Experience;