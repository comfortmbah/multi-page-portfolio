import SectionTitle from "../components/SectionTitle"
import profile from "../data/profile"
import Container from "../components/Container"

const About = () => {
  return (
    <Container>
      <SectionTitle
        title={'About me'}
        subtitle={'Get to know me better'}
      />

      <div className="flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 flex justify-center">
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-80 h-80 rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {profile.role}
          </h3>

          <p className="text-gray-600 mb-4 leading-8">
            {profile.bio}
          </p>

          <p className="text-gray-600 leading-8">
            My goal is to become a professional Full stack React Developer and contribute to building high-quality web
          </p>
        </div>
      </div>
    </Container>
  )
}

export default About