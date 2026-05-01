import { motion } from "framer-motion";
function Achievements(){
  const points = [
    "Completed GFG 160 Days of Coding Challenge and Solved 150+ DSA Questions",
    "Collaborative Technical Lead - Served as a key executive member of the coding club,fostering a high-performance environment by leading a problem-solving sessions and guiding technical design discussions.",
    "Engineering Lead and Mentor - Spearheaded the technical mentorship of 4+ junior engineers through the end to end development life cycle of the PRAKRITHI QUEST project."
];

    return (
   <>
     {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Achievements
        </h2> 
        <section className="py-16 px-6 bg-black-100 flex justify-center rounded-full">
      <div className="max-w-4xl w-full bg-gray-700 shadow-xl rounded-2xl p-8">
        
        

        {/* Card */}
        <div className="border-l-4 border-yellow-400 pl-6">

          {/* Animated Points */}
          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.4, duration: 0.4}}
                viewport={{ once: true }}
                className="leading-relaxed flex items-start gap-3"
              >
                <span className="text-yellow-600 ">•</span>
                <p>{point}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
   </>
    );
};

export default Achievements;