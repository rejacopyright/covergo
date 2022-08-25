import { countries, packages } from '@api/mock'
import { useSelector } from 'react-redux'
import { setName, setAge, setCountry, setPackage, setPage } from '@redux/store'
import { summary } from '@helpers'

const Index = () => {
  const state = useSelector(({ form }) => form)
  const { subTotal, total, code, age, name } = summary(state)
  return (
    <div className='grid w-full grid-cols-6'>
      <div className='col-span-full'>
        <div className='text-2xl font-medium text-center mb-5'>Tell us about yourself</div>
      </div>
      <div className='col-start-2 col-end-6 bg-slate-50 p-5 rounded-xl'>
        <form
          className='w-1/2 mx-auto'
          action='#'
          method='POST'
          onSubmit={() => {
            setPage(age && age <= 100 ? 3 : 0)
          }}
        >
          {/* NAME */}
          <div className='mb-3'>
            <label className='block text-sm mb-1'>Name</label>
            <input
              name='name'
              defaultValue={name}
              type='text'
              required
              className='rounded relative block w-full px-3 py-2 border border-indigo-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 text-sm'
              placeholder='Enter Name'
              onChange={({ target: { value } }) => setName(value || '')}
            />
          </div>
          {/* AGE */}
          <div className='mb-3'>
            <label className='block text-sm mb-1'>Age</label>
            <input
              name='age'
              defaultValue={age}
              type='number'
              required
              className='rounded relative block w-full px-3 py-2 border border-indigo-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 text-sm'
              placeholder='Enter Age'
              onChange={({ target: { value } }) => setAge(parseInt(value) || 0)}
            />
          </div>
          {/* COUNTRY */}
          <div className='mb-3'>
            <label className='block text-sm mb-1'>Where do you live</label>
            <select
              name='country'
              required
              value={code}
              className='rounded relative block w-full p-2 border border-indigo-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 text-sm'
              onChange={({ target: { value } }) => setCountry(value)}
            >
              {countries?.map(({ code: countryCode, name }) => (
                <option key={countryCode} value={countryCode}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          {/* PACKAGE */}
          <div className='mb-3 mt-5'>
            <div className='uppercase text-xs font-bold text-indigo-500'>Choose Package</div>
            {packages?.map(({ key, name, value: percent }, index) => (
              <label
                key={index}
                className='flex border-l-2 border-indigo-200 bg-white items-center w-auto cursor-pointer my-2 rounded-md py-2 px-3 shadow-sm hover:shadow-2xl'
              >
                <input
                  name='package'
                  type='radio'
                  value={key}
                  className='appearance-none rounded-full checked:bg-indigo-500 p-2 border border-indigo-500 outline-none'
                  defaultChecked={state?.package === key}
                  onChange={({ target: { value } }) => setPackage(value)}
                />
                <div className='ml-2 text-sm'>
                  <span className='font-semibold text-indigo-700'>{name} </span>
                  {percent > 0 && (
                    <span className='text-slate-400'>
                      (+{subTotal * percent}
                      {code}, {percent * 100}%)
                    </span>
                  )}
                </div>
              </label>
            ))}
          </div>
          {/* SUM */}
          <div className='mt-5'>
            <div className='text-2xl flex items-center justify-center font-bold text-indigo-500 mb-5'>
              <div className='text-slate-400 text-lg mr-2 font-normal'>Your premium is :</div>
              {total}
              {code}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <button
              type='button'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-500 hover:text-white bg-slate-100 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setPage(1)}
            >
              Back
            </button>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Index
