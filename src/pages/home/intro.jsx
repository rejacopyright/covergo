import { setPage } from '@redux/store'
const Index = () => {
  return (
    <div className='grid w-full grid-cols-6 gap-4'>
      <div className='col-start-2 col-end-6 bg-slate-50 text-center py-20 rounded-xl'>
        <div className='text-3xl font-medium mb-2'>Hello There!</div>
        <p className='text-sm mb-10'>
          Let's buy some insurance. It is going to take only a few steps
        </p>
        <div
          className='inline-flex items-center justify-center w-1/4 h-10 bg-indigo-500 hover:bg-indigo-400 text-white text-lg p-1 cursor-pointer rounded'
          onClick={() => setPage(2)}
        >
          Start
        </div>
      </div>
    </div>
  )
}
export default Index
