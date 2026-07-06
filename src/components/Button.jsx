

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer ${className}`}
      {...props}
    >
        {children}
    </button>
  )
}

export default Button