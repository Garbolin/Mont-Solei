import './App.css';
import { router } from '@/routes/routes';
import { RouterProvider } from 'react-router-dom';
import { NavbarThemeProvider } from '@/context/NavbarThemeContext';

function App() {
    return (
        <NavbarThemeProvider>
            <RouterProvider router={router} />
        </NavbarThemeProvider>
    );
}

export default App;
