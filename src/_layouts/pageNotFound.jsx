import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='m-0 text-6xl font-bold'>404</h1>
        <p className='mb-5 text-gray-400 font-thin'>PAGE NOT FOUND</p>
        <Link
          to='/'
          className='block bg-indigo-500 text-white font-bold text-sm p-1 hover:bg-indigo-400 cursor-pointer rounded-full'
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}
export default Index
