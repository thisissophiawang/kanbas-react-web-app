// src/Labs/TOC.tsx
import { useLocation } from 'react-router-dom';

const TOC: React.FC = () => {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills" id="wd-toc">
            <li className="nav-item">
                <a id="wd-a" href="/Labs" className="nav-link">
                    Labs
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a1" href="/Labs/Lab1" className={`nav-link ${pathname.includes("/Labs/Lab1") ? "active" : ""}`}>
                    Lab 1
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a2" href="/Labs/Lab2" className={`nav-link ${pathname.includes("/Labs/Lab2") ? "active" : ""}`}>
                    Lab 2
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a3" href="/Labs/Lab3" className={`nav-link ${pathname.includes("/Labs/Lab3") ? "active" : ""}`}>
                    Lab 3
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a4" href="/Labs/Lab4" className={`nav-link ${pathname.includes("/Labs/Lab4") ? "active" : ""}`}>
                    Lab 4
                </a>
            </li>   
            <li className="nav-item">
                <a id="wd-a5" href="/Labs/Lab5" className={`nav-link ${pathname.includes("/Labs/Lab5") ? "active" : ""}`}>
                    Lab 5
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-github" href="https://github.com/thisissophiawang" className="nav-link" target="_blank">
                    My GitHub
                </a>
            </li>
        </ul>
    );
};

export default TOC;
