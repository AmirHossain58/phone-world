import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
  </AuthProvider>
</HelmetProvider>
)
