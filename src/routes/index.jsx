import { lazy, createElement } from 'react'

const routes = [
  {
    path: '/*',
    element: createElement(lazy(() => import('@layouts'))),
    children: [
      { index: true, element: createElement(lazy(() => import('@pages/home'))) },
      {
        path: 'home',
        index: true,
        element: createElement(lazy(() => import('@pages/home'))),
      },
      // 404
      {
        path: '*',
        index: true,
        element: createElement(lazy(() => import('@layouts/pageNotFound'))),
      },
    ],
  },
]

export default routes
