import { NavLink } from "react-router-dom"
import Button from "../components/Button"
import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"

const Home = () => {
  const profile = useContext(ProfileContext);
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {profile.name}
          </h1>

          <h2 className="text-2xl font-semibold mb-6 text-gray-600">
            {profile.role}
          </h2>

          <p className="text-gray-500 leading-8 mb-8">
            {profile.bio} 
          </p>

          <div className="flex gap-4">
            <NavLink
              to={'/projects'}
            >
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                View Projects
              </Button>
            </NavLink>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Button
                className="boder border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white " 
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img 
            src={profile.image} 
            alt={profile.name}
            className="w-80 h-80 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Home