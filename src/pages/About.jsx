import SectionTitle from "../components/SectionTitle"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title={'About me'}
        subtitle={'Get to know me better'}
      />

      <div className="flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 flex justify-center">
          <img 
            src="/profile.jpg" 
            alt="Sly" 
            className="w-80 h-80 rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Frontend React Developer
          </h3>

          <p className="text-gray-600 mb-4 leading-8">
            Hi, I'm Sly, a passionate Frontend Developer currently learning Full stack Javascript.
            I enjoy building modern, responsive, and user-friendly web applications with react and tailwind CSS.
          </p>

          <p className="text-gray-600 leading-8">
            My goal is to become a professional Full stack React Developer and contribute to building high-quality web
          </p>
        </div>
      </div>
    </section>
  )
}

export default About