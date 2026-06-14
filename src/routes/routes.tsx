// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout'; // Un diseño común (opcional)
import Home from '@/pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Esto mantiene un Navbar/Header fijo si lo deseas
        children: [
            {
                path: '', // Ruta por defecto (http://localhost:5173/)
                element: <Home />,
            },
        ],
    },
]);
