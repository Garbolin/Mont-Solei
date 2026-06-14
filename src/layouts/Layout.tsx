import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function Layout() {
    return (
        <div className="flex relative flex-col min-h-screen w-full">
            <header className="absolute top-0 left-0 z-50 w-full">
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
