import { createContext, useContext, useState, type ReactNode } from 'react';

type NavbarTheme = 'light' | 'dark'; // 'light' = letras blancas, 'dark' = letras negras

interface NavbarThemeContextType {
    theme: NavbarTheme;
    setTheme: (theme: NavbarTheme) => void;
}

const NavbarThemeContext = createContext<NavbarThemeContextType | undefined>(undefined);

export function NavbarThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<NavbarTheme>('dark'); // por defecto negro

    return (
        <NavbarThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </NavbarThemeContext.Provider>
    );
}

export function useNavbarTheme() {
    const context = useContext(NavbarThemeContext);
    if (!context) {
        throw new Error('useNavbarTheme debe usarse dentro de NavbarThemeProvider');
    }
    return context;
}
