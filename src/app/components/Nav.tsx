import React, {useState, useEffect} from "react";
import { useRouter, usePathname } from "next/navigation";
import './nav.css';
import { navs } from "../data/data";
export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();
    const [navList, setNavList] = useState(navs);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollTo = (section: string) => {
        let header: HTMLElement = document.querySelector('#header')!;
        let offset = header.offsetHeight;
        let targetEl: HTMLElement = document.querySelector('#' + section)!;
        if (pathname === '/') {
            let elementPosition = targetEl.offsetTop;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        } else {
            router.push(`/#${section}`);
        }
    };

    const handleNavActive = () => {};

    return (
        <nav id="navbar" className={`navbar order-last order-lg-0 ${
            open ? 'navbar-mobile' : undefined
        }`}
        >
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        <a
                        className={`nav-link scrollto ${
                            nav.active ? 'active': undefined
                        }`}
                        onClick={() => handleScrollTo(nav.target)}
                        >
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ): (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            <i
            className="bi bi-list mobile-nav-toggle"
            onClick={handleToggleMenu}
            ></i>
        </nav>
    )
}