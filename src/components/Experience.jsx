import { motion } from 'framer-motion'
import Badge from './ui/Badge'

const Experience = () => {
    const experiences=[
        {
        title:  "Full Stack Developer Intern",
        company: "Zephyr Technologies & Solutions",
        period: "Mar 2025 - Jun 2025",
        responsibilities: [
        "Developed  dynamic user interfaces using React.js, focusing on performance and reusability.",
        "Developed RESTful APIs with Node.js and Express.js to manage backend logic and server communication.",
        "Developed backend data models and queries with MongoDB.",
        "Developed modern UI designs using Tailwind CSS and Bootstrap for clean and consistent styling.",
        ],
    skills: ["React.js", "Express.js", "Node.js", "MongoDB"],
    },

    {
        title:  "AI and ML Intern",
        company: "Codelab System",
        period: "Oct 2025 - Nov 2025",
        responsibilities: [
        "Gained practical experience in machine learning using Python and industry-standard libraries.",
        "Worked with NumPy and Pandas for data cleaning, analysis, and manipulation.",
        "Visualized results and trends using Matplotlib.",
        ],
    skills: ["Python", "Numpy", "Pandas", "ScikitLearn"],
    },
    ]
return (
    <section id='experience' className='w-full bg-white text-black dark:bg-black dark:text-white py-15'>
    <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4}}
    className='max-w-4xl mx-auto px-2'>
    <h1 className='text-3xl font-bold px-2 py-5'>Experience</h1>
    <div className='space-y-10 pt-6'>
        {experiences.map((exp,idx)=>(
            <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount:0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
            key={idx}
            className='space-y-'>
            <div className='flex flex-col sm:flex-row  sm:justify-between px-2'>
                <div>
                    <h1 className="text-xl font-semibold">{exp.title}</h1>
                    <p className='text-gray-500 text-sm sm:text-[16px] py-1 font-bold'>{exp.company}</p>
                </div>
                <p className='text-gray-500 text-xs sm:text-[13px] py-1 sm:py-0 font-bold flex items-center'>{exp.period}</p>
            </div>

            <ul className='list-disc pl-7 space-y-2'>
                {exp.responsibilities.map((resp,idx)=>(
                    <motion.li
                    initial={{opacity:0,y:20}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.3 }}
                    key={idx} className='text-sm'>
                    {resp}
                    </motion.li>
                ))}
            </ul>

            <div className='flex flex-wrap gap-2 pl-2'>
            {exp.skills.map((skill,idx)=>(
                <Badge key={idx}>
                {skill}
                </Badge>
            ))}
            </div>
            </motion.div>
        ))}
    
    </div>
    

    </motion.div>
    </section>
)
}

export default Experience
