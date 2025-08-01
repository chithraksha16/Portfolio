import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5,FaCss3, FaBootstrap, FaGitAlt,FaGithub,FaDocker } from "react-icons/fa";
import { RiReactjsFill,RiTailwindCssFill,RiNodejsFill,RiVercelFill } from "react-icons/ri";
import { SiExpress,SiMysql, SiMongodb, SiSocketdotio,SiPostman,SiRender,SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import Round from "./ui/Round";
const Skills = () => {
    const skillsList=[
        {
            title:"Languages",
            skills:[
                {name:"C",icon:<img src="/DeviconC.png" className="size-6"/>},
                {name:"Javascript",icon:<IoLogoJavascript size={20} className="text-yellow-300 bg-black"  />},
                {name:"Python",icon:<img src="/DeviconPython.png" className="size-6"/>},
                
            ]
        },
        {
            title:"Front End",
            skills:[
                {name:"Javascript",icon:<IoLogoJavascript size={20} className="text-yellow-300 bg-black" />},
                {name:"Typescript",icon:<SiTypescript size={20} className="text-blue-600"  />},
                {name:"React.js",icon:<RiReactjsFill size={20} className="text-cyan-500" />},
                {name:"HTML",icon:<FaHtml5 size={20} className="text-orange-500" />},
                {name:"CSS",icon:<FaCss3 size={20} className="text-blue-500" />},
                {name:"TailwindCSS",icon:<RiTailwindCssFill size={20} className="text-cyan-500"/>},
                {name:"Bootstrap",icon:<FaBootstrap size={20} className="text-fuchsia-600" />},
                {name:"Zustand",icon:<img src="/DeviconZustand.png" className="size-6"/>}
            ]
        },
        {
            title:"Back End",
            skills:[
                {name:"Typescript",icon:<SiTypescript size={20} className="text-blue-600"  />},
                {name:"Node.js",icon:<RiNodejsFill size={20} className="text-green-600"/>},
                {name:"Express.js",icon:<div className="bg-white p-1 rounded"><SiExpress className="text-black" /></div>},
                {name:"Socket.io",icon:<SiSocketdotio size={20} />}
            ]
        },
        {
            title:"Database",
            skills:[
                {name:"MongoDB",icon:<SiMongodb size={20} className="text-green-600"/>},
                {name:"My SQL",icon:<SiMysql size={20} className="text-blue-700" />},
            ]
        },
        {
            title:"Tools and Platform",
            skills:[
                {name:"Git",icon:<FaGitAlt size={20} className="text-orange-500" />},
                {name:"GitHub",icon:<FaGithub size={20} />},
                {name:"Docker",icon:<FaDocker size={20} className="text-blue-600"/>},
                {name:"Postman",icon:<SiPostman size={20} className="text-orange-500" />},
                {name:"VS Code",icon:<VscVscode size={20} className="text-blue-600" />},
                {name:"Vercel",icon:<RiVercelFill size={20} />},
                {name:"Render",icon:<SiRender size={20} />}
            ]
        },

    ]
return (
    <section id='skills' className='w-full bg-white text-black dark:bg-black  dark:text-white py-15'>
    <motion.div
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    viewport={{amount:0.2}}
    transition={{duration:0.3}}
    className='max-w-4xl mx-auto px-2'>
    <h1 className='text-3xl font-bold px-3 py-5'> My Skills</h1>
    <p className="text-gray-500 text-lg  px-3">Technologies and tools I've worked with throughout my projects and experience</p>
    <div>
        
            {skillsList.map((skill,idx)=>(
                <div key={idx} className="py-7 px-3">
                    <h3 className="text-lg font-bold py-4">{skill.title}</h3>
                    <motion.div
                    initial={{ opacity:0,y:20,x:-10}} 
                    whileInView={{opacity:1,y:20,x:0}}
                    viewport={{amount:0.2}}
                    transition={{duration:0.5, delay: 0.1 * idx}}
                    className="flex flex-wrap gap-7">
                    {skill.skills.map((sk,idx)=>(
                        <motion.div
                        key={idx} 
                        initial={{x:-20,y:0}}
                        whileInView={{x:0, y:[0,-5,-10,-15,-10,-5,0]}}
                        viewport={{once:true}}
                        transition={{duration:0.5,delay:0.2 * idx}}
                        className="flex flex-col justify-center items-center">
                            <Round>
                            {sk.icon}
                            </Round>
                            <p className="text-center text-sm mt-1">{sk.name}</p>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            ))}
    </div>

    </motion.div>
    </section>
)
}

export default Skills
