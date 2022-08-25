import { useSelector } from 'react-redux'
import { setPage } from '@redux/store'
import { summary } from '@helpers'
const Index = () => {
  const state = useSelector(({ form }) => form)
  const { name, age, country, package: packageName, total, code } = summary(state)
  return (
    <div className='grid w-full grid-cols-9'>
      <div className='col-span-full'>
        <div className='text-3xl text-center font-medium mb-5 text-indigo-500'>Summary</div>
      </div>
      <div className='col-start-4 col-end-7 bg-slate-50 p-5 rounded-lg'>
        <div className='w-full mx-auto'>
          <p className='text-2xl text-center font-semibold mb-5'>{name},</p>
          <table className='table-auto mx-auto border-separate border-spacing-x-2 border-spacing-y-1 text-sm mb-5'>
            <tbody>
              <tr>
                <td className='whitespace-nowrap text-slate-400'>Name</td>
                <td>:</td>
                <td className='font-semibold text-indigo-700'>{name}</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap text-slate-400'>Age</td>
                <td>:</td>
                <td className='font-semibold text-indigo-700'>{age}</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap text-slate-400'>Where do you live</td>
                <td>:</td>
                <td className='font-semibold text-indigo-700'>{country}</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap text-slate-400'>Package</td>
                <td>:</td>
                <td className='font-semibold text-indigo-700'>{packageName}</td>
              </tr>
              <tr>
                <td className='whitespace-nowrap text-slate-400'>Premium</td>
                <td>:</td>
                <td className='font-semibold text-indigo-700'>
                  {total}
                  {code}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='grid grid-cols-2 gap-2 border-t-4 pt-4 border-slate-200'>
            <button
              type='button'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-500 hover:text-white bg-slate-100 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setPage(2)}
            >
              Back
            </button>
            <button
              type='button'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setPage(1)}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
