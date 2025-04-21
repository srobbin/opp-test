import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Home from './pages/Home'

// Dynamically import all page components
const pageModules = import.meta.glob('./pages/**/index.jsx', { eager: true })

// Generate routes dynamically
const routes = Object.entries(pageModules).map(([path, module]) => {
  // Extract route name from path (e.g., './pages/Project1/index.jsx' -> 'project1')
  const routePath = path.match(/\.\/pages\/(.+?)\/index\.jsx$/)?.[1]?.toLowerCase()
  
  if (!routePath) return null
  
  return {
    path: routePath,
    element: <module.default />
  }
}).filter(Boolean)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...routes,
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)