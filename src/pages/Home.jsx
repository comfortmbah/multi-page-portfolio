import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Sly
          </h1>

          <h2 className="text-2xl font-semibold mb-6 text-gray-600">
            Frontend React Developer
          </h2>

          <p className="text-gray-500 leading-8 mb-8">
            I'm passionate about building clean, responsive and user-friendly web applications using react and tailwind CSS. 
            I'm currently learning full stack javascipt and building real-world projects. 
          </p>

          <div className="flex gap-4">
            <NavLink
              to={'/projects'}
              className={'bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'}
            >
              View Projects
            </NavLink>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="boder border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img 
            src={'/profile.jpg'} 
            alt="Sly" 
            className="w-80 h-80 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Home