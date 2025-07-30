import  { useEffect, useState } from 'react'
import { Sun,Moon,Menu,X } from 'lucide-react'
const Navbar = () => {
    const [toggleDark,setToggledark]=useState(false)
    const [isMenu,setIsMenu]=useState(false)
    const [isScroll,setIsScroll]=useState(false)
    const navItems=[
        {name:"About",to:"#about"},
        {name:"Experience",to:"#experience"},
        {name:"Education",to:"#education"},
        {name:"Skills",to:"#skills"},
        {name:"Project",to:"#project"},
        {name:"Contact",to:"#contact"}
    ]
    
useEffect(()=>{
    const handleScroll=()=>{
        setIsScroll(window.scrollY > 10)
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
},[])

useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        setToggledark(true);
        document.documentElement.classList.add('dark');
    } else {
        setToggledark(false);
        document.documentElement.classList.remove('dark');
    }
}, [toggleDark]);



const toggleTheme = () => {
    const newTheme = !toggleDark;
    setToggledark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
};

    const toggleMenu=()=>{
        setIsMenu(!isMenu)
    }
  return (
    <>
    <header >
        <div className={`w-full h-16 fixed z-50 top-0 text-black dark:text-white ${isScroll ? "bg-transparent backdrop-blur-2xl"  : "bg-white dark:bg-black"}`}>
        <div className='max-w-4xl mx-auto flex justify-between items-center h-16 px-4 '>
            <div className='font-bold text-lg px-2'>
                Chithrax
            </div>
            <nav className=' hidden sm:flex justify-between gap-5 font-medium'>
            {navItems.map((item,idx)=>(
            <div key={idx}>
            <a className='hover:text-gray-700' href={item.to}>{item.name}</a>
            </div>
            ))}
            <button onClick={toggleTheme} className='ml-4' >
                {toggleDark ? <Sun />:<Moon />}
                </button>
            </nav>
            <div className='sm:hidden flex gap-2 px-4'>
                <button onClick={toggleTheme} >
                {toggleDark ? <Sun />  :<Moon />}
                </button>
                <button onClick={toggleMenu}>
                    {!isMenu ? <Menu /> :<X />}
                    </button></div>
        </div>
    </div>
    {isMenu &&(
            <div className='w-full mt-16 sm:hidden fixed z-50 bg-white dark:bg-black dark:text-white flex flex-col justify-between items-center gap-4 font-medium py-5 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden'>
            {navItems.map((item,idx)=>(
            <div key={idx}>
            <a className='hover:text-white/80' href={item.to}>{item.name}</a>
            </div>
            ))}
            </div>
        )}
    </header>
    </>
)
}

export default Navbar
