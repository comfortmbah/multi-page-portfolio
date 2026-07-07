

const Error = ({ message }) => {
  return (
    <div className="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
      <p>{message}</p>
    </div>
  )
}

export default Error