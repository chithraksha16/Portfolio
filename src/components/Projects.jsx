const Projects = () => {

  const projects=[
    {
      title:"IngreWish",
      discription:"IngreWish generates personalized recipes based on your ingredients and taste cravings, including detailed nutrition like calories and protein.",
      image:"",
      demoUrl:"",
      githubUrl:"",
      tags:["Typescript","React.js","Node.js","Gemini API","MongoDB","Zustand","TailwindCSS"],
      features:[
        "","","",
      ]

    },

    {
      title:"Pingme",
      discription:"Pingme is a real-time chat app where users can text, share photos, upload profiles, and choose from 10+ themes.",
      image:"",
      demoUrl:"",
      githubUrl:"",
      tags:["React.js","Node.js","MongoDB","Socket.io","Zustand","TailwindCSS"],
      features:[
        "","","",
      ]

    },

    {
      title:"Interest-tok",
      discription:"Ask questions, post ideas, or share facts—Intrest-tok brings people together to comment, discuss, and like what matters to them.",
      image:"",
      demoUrl:"",
      githubUrl:"",
      tags:["React.js","Node.js","Express.js","MongoDB","TailwindCSS"],
      features:[
        "","","",
      ]

    }

  ]
  return (
    <>
      <section className="w-full bg-white dark:bg-black text-black dark:text-white py-10">
        <div className="max-w-4xl mx-auto px-2">
          <h1 className='text-3xl font-bold px-3 py-5'>Projects</h1>

          <div>
            <div></div>
            <div></div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Projects
