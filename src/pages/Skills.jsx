import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import skills from '../data/skills'
import Container from '../components/Container'

const Skills = () => {
  return (
    <Container>
      <SectionTitle
        title={'My Skills'}
        subtitle={'Technologies and tools I use.'}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
    </Container>
  )
}

export default Skills