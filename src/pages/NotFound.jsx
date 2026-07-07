import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-24 text-center'>
      <h1 className='text-7xl font-bold text-blue-600 mb-4'>
        404
      </h1>

      <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
        Page Not Found
      </h2>

      <p className='text-gray-600 mb-8'>
        Sorry, the page you are looking for doesn't exist.
      </p>

      <NavLink
        to={'/'}
      >
        <Button
          className='bg-blue-600 text-white hover:bg-blue-700'
        >
          Go Back Home
        </Button>
      </NavLink>
    </section>
  )
}

export default NotFound