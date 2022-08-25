import { useSelector } from 'react-redux'
import Intro from './intro'
import Form from './form'
import Summary from './summary'
import Error from './error'
const Index = () => {
  const page = useSelector(({ page }) => page)
  const component = [
    { value: 0, el: <Error /> },
    { value: 1, el: <Intro /> },
    { value: 2, el: <Form /> },
    { value: 3, el: <Summary /> },
  ]
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      {component?.find(({ value }) => value === page)?.el}
    </div>
  )
}
export default Index
