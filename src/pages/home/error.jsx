import { setPage } from '@redux/store'
const Index = () => {
  return (
    <div className='grid w-full grid-cols-6 gap-4'>
      <div className='col-start-2 col-end-6 bg-slate-50 text-center py-20 rounded-xl'>
        <div className='text-3xl font-medium mb-5'>Ooops!</div>
        <p className='text-sm'>Your age is over our accepted limit.</p>
        <p className='text-sm mb-10'>We are sorry but we cannot insure you now</p>
        <div
          className='inline-flex items-center justify-center w-1/4 h-10 bg-indigo-500 hover:bg-indigo-400 text-white text-lg p-1 cursor-pointer rounded'
          onClick={() => setPage(1)}
        >
          Go To Home
        </div>
      </div>
    </div>
  )
}
export default Index
