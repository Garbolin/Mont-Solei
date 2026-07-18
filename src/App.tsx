import './App.css';
import { router } from '@/routes/routes';
import { RouterProvider } from 'react-router-dom';
import { NavbarThemeProvider } from '@/context/NavbarThemeContext';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
    return (
        <NavbarThemeProvider>
            <RouterProvider router={router} />
            <WhatsAppButton />
        </NavbarThemeProvider>
    );
}

export default App;
