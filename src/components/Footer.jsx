

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-white">
        <div className="max-w-7xl mx-auto p-6 flex items-center gap-5 justify-center">
          <h2 className="text-xl font-semibold">
            Sly@Dev
          </h2>

          <p className="text-sm text-gray-400">
            Build modern web applications with react.
          </p>

          <p className="text-sm">
            @ {new Date().getFullYear()} Sly all right reserved.
          </p>
        </div>
    </footer>
  )
}

export default Footer