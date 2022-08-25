import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
const Index = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  )
}

export default Index
