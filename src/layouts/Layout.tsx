import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Layout() {
    return (
        <div className="flex relative flex-col min-h-screen w-full">
            <ScrollToTop />
            <header className="fixed top-0 left-0 z-50 w-full">
                <Navbar />
            </header>
            <main className="flex flex-col flex-1 w-full">
                <Outlet />
            </main>
            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    );
}
