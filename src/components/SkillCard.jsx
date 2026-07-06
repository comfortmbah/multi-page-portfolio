

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800">
            {skill.name}
        </h3>
    </div>
  )
}

export default SkillCard