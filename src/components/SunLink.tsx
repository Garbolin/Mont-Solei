export default function SunLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} className="sun-link">
            {children}
            <svg viewBox="0 0 64 64">
                <circle className="sun-core" cx="32" cy="32" r="14" />
                <line className="sun-ray" x1="32" y1="4" x2="32" y2="12" />
                <line className="sun-ray" x1="32" y1="52" x2="32" y2="60" />
                <line className="sun-ray" x1="4" y1="32" x2="12" y2="32" />
                <line className="sun-ray" x1="52" y1="32" x2="60" y2="32" />
                <line className="sun-ray" x1="12.7" y1="12.7" x2="18.3" y2="18.3" />
                <line className="sun-ray" x1="45.7" y1="45.7" x2="51.3" y2="51.3" />
                <line className="sun-ray" x1="12.7" y1="51.3" x2="18.3" y2="45.7" />
                <line className="sun-ray" x1="45.7" y1="18.3" x2="51.3" y2="12.7" />
            </svg>
        </a>
    );
}
