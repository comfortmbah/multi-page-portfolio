import Button from '../components/Button'

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300'>
        <img 
          src={project.image} 
          alt={project.title}
          className='w-full h-56 object-cover'
        />

        <div className='p-6'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                {project.title}
            </h3>

            <p className='text-gray-600 mb-6'>
                {project.description}
            </p>

            <div className='flex gap-4'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                    <Button
                      className='bg-blue-600 text-white hover:bg-blue-700'
                    >
                        View Code
                    </Button>
                </a>

                <a
                  href={project.liveDemo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                    <Button
                      className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    >
                        Live Demo
                    </Button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard