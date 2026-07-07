import projects from "../data/projects"
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'

const Projects = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Projects;