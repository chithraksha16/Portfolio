import {motion} from 'framer-motion'

const Education = () => {
    const education=[
    {
    institution: "Shree Devi Institute Of Technology, Mangalore",
    degree: "B.Tech Computer Science and Engineering",
    period: "Oct 2022 - May 2025",
    gpa: "CGPA: 8.37/10",
    icon: "🎓",
    }
    ]
return (
    <section id='education' className="w-full bg-white text-black dark:bg-black dark:text-white pt-10 pb-15">
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{amount:0.5}}
        transition={{duration:0.5,delay:0.1}}
        className="max-w-4xl mx-auto px-2">
        <h1 className='text-3xl font-bold px-3 py-5'>Education</h1>
        
        <div className="pt-10">
            {education.map((edu,idx)=>(
                <div key={idx} className="flex justify-start gap-5 px-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center  text-xl">
                {edu.icon}
                </div>
                <div className="flex flex-col gap-1">
                <div className="space-y-1 ">
                <h3 className="text-xl font-semibold ">{edu.institution}</h3>
                <p className="text-[17px] font-medium text-gray-500">{edu.degree}</p>
                </div>
                <div className="flex flex-col sm:flex-row  gap-2 text-sm text-gray-500">
                <span>{edu.period}</span>
                {edu.gpa && (
                    <>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.gpa}</span>
                    </>
                )}
                </div>
                </div>
                </div>
            ))}
        </div>
        </motion.div>
    </section>
)
}

export default Education
