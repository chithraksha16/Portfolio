import Badge from '../components/ui/Badge'
import { Link } from 'react-router-dom'
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'
const Projects = () => {
  
  const projects=[
    {
      title:"IngreWish",
      discription:"IngreWish generates personalized recipes based on your ingredients and taste cravings, including detailed nutrition like calories and protein.",
      image:"/ingrewish.webp",
      demoUrl:"https://ingre-wish.vercel.app/",
      githubUrl:"https://github.com/chithraksha16/IngreWish",
      tags:["Typescript","React.js","Node.js","Gemini API","MongoDB","Zustand","TailwindCSS"],
      features:[
        "Gemini API powers intelligent recipe generation from ingredients and cravings.",
        "Node.js with TypeScript handles backend, APIs, and AI logic.",
        "React with Zustand manages dynamic UI and global recipe state.",
        "Tailwind and Framer Motion create responsive, animated user experiences.",
      ]

    },

    {
      title:"Pingme",
      discription:"Pingme is a real-time chat app where users can text, share photos, upload profiles, and choose from 10+ themes.",
      image:"/pingme1.webp",
      demoUrl:"https://pingme-theta.vercel.app/",
      githubUrl:"https://github.com/chithraksha16/Pingme",
      tags:["React.js","Node.js","MongoDB","Socket.io","Zustand","TailwindCSS"],
      features:[
        "Real-time messaging powered by Socket.io and Node.js backend server.",
        "React.js with Zustand handles UI state and user interactions.",
        "MongoDB stores user data, messages, and media efficiently.",
        "TailwindCSS with DaisyUI enables themed, responsive, modern styling.",
      ]

    },

    {
      title:"Interest-tok",
      discription:"Ask questions, post ideas, or share facts—Intrest-tok brings people together to comment, discuss, and like what matters to them.",
      image:"/intrest-tok.webp",
      demoUrl:"https://intrest-tok.vercel.app/",
      githubUrl:"https://github.com/chithraksha16/Intrest-tok",
      tags:["React.js","Node.js","Express.js","MongoDB","TailwindCSS"],
      features:[
        "Built with React.js for dynamic, interactive user interface rendering.",
        "Context API manages global state for posts, likes, and comments.",
        "Node.js and Express.js handle server-side logic and REST APIs.",
        "MongoDB stores posts, user data, comments, and engagement details."
      ]

    }

  ]
  return (
    <>
      <section id='project' className="w-full bg-white dark:bg-black text-black dark:text-white py-10">
        <div className="max-w-4xl mx-auto px-2">
          <motion.h1 
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.3}}

          className='text-3xl font-bold px-3 py-5'>Projects</motion.h1>

          <div className='px-3 space-y-12'>
            {projects.map((project,idx)=>(
              <motion.div
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:0.3,delay:0.2*idx}}
              className='w-full border border-gray-300 dark:border-gray-800 p-2 rounded-lg flex  sm:flex-row flex-col' key={idx}>
                <div className='sm:w-1/2 '>
                
                  <img src={project.image}
                  alt='project-image'
                  height={400}
                  width={600}
                  className="w-full h-full object-fill sm:object-cover"
                  />
                </div>
                <div className='sm:w-1/2 space-y-5 px-3'>
                  <h2 className='text-xl font-bold py-1'>{project.title}</h2>
                  <p className='text-base font-medium text-gray-500'>{project.discription}</p>
                  <div className='flex flex-row gap-2 flex-wrap' key={idx}>
                  {project.tags.map((tag,idx)=>(
                      <Badge className='bg-slate-200 dark:bg-gray-800' key={idx}>{tag}</Badge>
                  ))}
                  </div>
                  <div>
                  <h3 className='text-lg font-semibold py-1.5'>Key Features:</h3>
                  <ul className='px-3'>
                    {project.features.map((points,idx)=>(
                      <li className='list-disc text-[14px] ' key={idx}>{points}</li>
                    ))}
                  </ul>
                  </div>
                  <div className='flex justify-center gap-5'>
                  <div className='flex gap-3 px-10 py-2'>
                    <Link 
                    to={project.demoUrl}
                    target='_blank'
                    >
                    <button aria-label='Open live demo' className='px-4 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black flex items-center gap-1 text-sm'> <span className='flex items-center'><RxOpenInNewWindow size={12} /></span> Live</button>
                    </Link>
                    <Link to={project.githubUrl} target='_blank'>
                    <button  aria-label='View source code' className='px-3 py-1 rounded-md border border-gray-500 flex items-center gap-1 text-sm'> <span className='flex items-center'><FaGithub size={12} /></span>Code</button>
                    </Link>
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </section>
    </>
  )
}

export default Projects
