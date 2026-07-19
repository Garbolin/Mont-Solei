// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout'; // Un diseño común (opcional)
import Home from '@/pages/Home/Index';
import History from '@/pages/History/Index';
import Contact from '@/pages/Contact/Index';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Esto mantiene un Navbar/Header fijo si lo deseas
        children: [
            {
                path: '', // Ruta por defecto (http://localhost:5173/)
                element: <Home />,
            },
            {
                path: '/history', // Ruta para la página de historia (http://localhost:5173/history)
                element: <History />,
            },
            {
                path: '/contact', // Ruta para la página de contacto (http://localhost:5173/contact)
                element: <Contact />,
            },
        ],
    },
]);
