import projects from "../data/projects"
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title={'My Projects'}
        subtitle={"Here are some of the projects I've built."}
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects;