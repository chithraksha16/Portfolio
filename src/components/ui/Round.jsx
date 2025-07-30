import { motion } from "framer-motion"
const Round = ({children}) => {
return (
    <motion.div
    whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300 }
    }}
    className='size-14 rounded-full flex justify-center items-center bg-gray-200 dark:bg-gray-800 hover:border hover:border-gray-400'>
    {children}
    </motion.div>
)
}

export default Round
