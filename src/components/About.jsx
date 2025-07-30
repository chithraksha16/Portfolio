import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiReactjsFill,RiTailwindCssFill,RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { Mail,MapPin,Download,Github,Linkedin } from 'lucide-react'
const About = () => {
  return (
    <>
    <section id='about'  className='w-full pt-[110px] pb-10  bg-white text-black dark:bg-black dark:text-white '>
        <div className='sm:max-w-4xl flex mx-auto px-4 flex-wrap justify-center gap-3 w-full'>
        <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,delay:0.2}}
        >
        <div className='p-2'>
            <h1 className='text-3xl sm:text-4xl font-bold '>Chithraksha</h1>
            <h4 className='pt-3 text-lg sm:text-[20px] font-semibold text-gray-500'>Full-Stack Developer</h4>
        </div>
        <div className='flex gap-3 sm:px-2 py-4 sm:text-sm text-xs px-1'>
            <a href='mailto:chithrakshakharvi@gmail.com'  className='flex items-center text-gray-500 gap-1'><Mail size={13}/>chithrakshakharvi@gmail.com</a>
            <div className='flex items-center text-gray-500 gap-1'><MapPin size={13}/>Karnataka,India</div>
        </div>
        <div className='sm:w-xl w-full sm:text-[17px] text-base text-gray-500 px-2'>
        <p>A dedicated full stack developer with experience developing web applications using modern tools like React, Node.js, and more. Focused on delivering user-centric solutions that enhance performance and engagement.</p>
        </div>
        <div className='px-2 py-8 flex gap-2'>
        <Link 
        to={''}
        target="_blank"
        /* todo: add download attribute... */
        >
        <button  className=' px-2.5 py-1.5 text-xs sm:text-sm flex items-center border border-gray-600 rounded bg-black text-white dark:bg-white dark:text-black'>
        <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
        </button>
        </Link>

        <Link>
        <button className='px-2 py-2 border border-gray-600 rounded hover:bg-gray-900'>
            <Github className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        </Link>

        <Link>
        <button className='px-2 py-2 border border-gray-600 rounded hover:bg-gray-900'>
            <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        </Link>

        <Link>
        <button className='px-2 py-2 border border-gray-600 rounded hover:bg-gray-900'>
            <Linkedin  className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        </Link>
        </div>
        </motion.div>

        <motion.div
        className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='grid grid-cols-2 gap-8 px-5  md:px-0 sm:ml-1  '>
            <motion.div
            initial={{x:100,y:80}}
            animate={{y:0,x:0}}
            transition={{
                duration:1.3,
                delay:0.2,
                ease:"easeInOut"
            }}
            className='bg-gray-200 dark:bg-gray-800 flex items-center flex-col rounded p-1 '>
            <div className='sm:h-24 sm:w-28 h-20 w-24  bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded'>
            <motion.div
            animate={{rotate:360}}
            transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                    }}>
            <RiReactjsFill size={30} className='text-cyan-500'  />
            </motion.div> 
            </div>
            <motion.p
            animate={{opacity:[0.6,1,0.6]}}
            transition={{duration:2,repeat:Infinity}}
            className=' w-full border-t text-xs sm:text-sm text-center border-gray-400 transform-border'>
            ReactJs
            </motion.p>
            </motion.div>

            <motion.div
            initial={{x:-60,y:80, scale:0.9}}
            animate={{y:0,x:0,scale:[0.9,1,0.9]}}
            transition={{
            x: {
                duration:1.3,
                delay:0.2,
                ease:"easeInOut"
                },
                y: {
                duration:1.3,
                delay:0.2,
                ease:"easeInOut"
                },
                scale: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
                }
            }}
            
            className='bg-gray-200 dark:bg-gray-800 flex items-center flex-col rounded p-1'>
            <div className='sm:h-24 sm:w-28 h-20 w-24  bg-gray-200 dark:bg-gray-800 flex items-center justify-center'>
            <RiNodejsFill  size={30} className='text-green-600' />
            </div>
            <motion.p
            animate={{opacity:[0.6,1,0.6]}}
            transition={{duration:2,repeat:Infinity}}
            className=' w-full border-t text-xs sm:text-sm text-center border-gray-400 transform-border'>
            NodeJs
            </motion.p>
            </motion.div>

            <motion.div 
            initial={{x:100,y:-80}}
            animate={{y:0,x:0}}
            transition={{
                duration:1.3,
                delay:0.2,
                ease:"easeInOut"
            }}
            className='bg-gray-200 dark:bg-gray-800 flex items-center flex-col rounded p-1'>
            <div className='sm:h-24 sm:w-28 h-20 w-24  bg-gray-200 dark:bg-gray-800 flex items-center justify-center'>
            <motion.div 
            animate={{y:[0,-5,0]}}
            transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}>
            <RiTailwindCssFill  size={30} className='text-cyan-500' />
            </motion.div>
            </div>
            <motion.p
            animate={{opacity:[0.6,1,0.6]}}
            transition={{duration:2,repeat:Infinity}}
            className=' w-full border-t text-xs sm:text-sm text-center border-gray-400 transform-border'>
            TailwindCSS
            </motion.p>
            </motion.div>

            <motion.div
            initial={{x:-60,y:-80}}
            animate={{y:0,x:0,boxShadow: [
                    "0 0 0 0px rgba(49, 130, 206, 0.1)",
                    "0 0 0 10px rgba(49, 130, 206, 0.1)",
                    "0 0 0 0px rgba(49, 130, 206, 0.1)"
                ]}}
            transition={{
                x:{
                duration:1.3,
                delay:0.2,
                ease:"easeInOut"
                },
                y:{
                duration:1.3,
                delay:0.2,
                ease:"easeInOut"
                },
                boxShadow:{
                    duration: 4,
                    repeat: Infinity
                }
            }}
            className='bg-gray-200 dark:bg-gray-800 flex items-center flex-col rounded p-1'>
            <div className='sm:h-24 sm:w-28 h-20 w-24  bg-gray-200 dark:bg-gray-800 flex items-center justify-center'>
            <SiMongodb  size={30} className='text-green-600' />
            </div>
            <motion.p
            animate={{opacity:[0.6,1,0.6]}}
            transition={{duration:2,repeat:Infinity}}
            className=' w-full border-t text-xs sm:text-sm text-center border-gray-400 transform-border'>
            MongoDB
            </motion.p>
            </motion.div>

        </div>
        </motion.div>

        </div>
    </section>
    </>
)
}

export default About
