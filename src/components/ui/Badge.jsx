const Badge = ({children,className=""}) => {
return (
    <div  className={`inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold ${className}`}>
    {children}
    </div>
)
}

export default Badge
