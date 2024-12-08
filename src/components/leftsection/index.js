import React from "react";
import './index.css'

const LeftSection = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    Bharath S
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Mern Stack Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    I Build Web Applications
                </p>
            </div>
            <nav class="nav hidden lg:block" aria-label="In-page jump links">
                <ul class="mt-16 w-max">
                    <li>
                        <a class="group flex items-center py-3 active" href="#about">
                            <span class="active nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="group flex items-center py-3" href="#experience">
                            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Experience
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="group flex items-center py-3" href="#projects">
                            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Projects
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li class="mr-5 shrink-0 text-xs">
                    <a
                        class="block hover:text-slate-200"
                        href="https://github.com/bharaths6680"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub (opens in a new tab)"
                        title="GitHub"
                    >
                        <span class="sr-only">GitHub</span>
                        <img src="images/github.svg" alt="GitHub" class="h-6 w-6" />
                    </a>
                </li>
                <li class="mr-5 shrink-0 text-xs">
                    <a
                        class="block hover:text-slate-200"
                        href="https://www.linkedin.com/in/bharath-s-07a202145/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="LinkedIn (opens in a new tab)"
                        title="LinkedIn"
                    >
                        <span class="sr-only">LinkedIn</span>
                        <img src="images/linkedin.svg" alt="LinkedIn" class="h-6 w-6" />
                    </a>
                </li>
                <li class="mr-5 shrink-0 text-xs">
                    <a
                        class="block hover:text-slate-200"
                        href="https://codesandbox.io/dashboard/recent?workspace=dcd446ff-ecec-44b2-be49-1d5529bb3f64"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="CodePen (opens in a new tab)"
                        title="CodePen"
                    >
                        <span class="sr-only">CodePen</span>
                        <img src="images/codesandbox.svg" alt="CodePen" class="h-6 w-6" />
                    </a>
                </li>
                <li class="mr-5 shrink-0 text-xs">
                    <a
                        class="block hover:text-slate-200"
                        href="https://instagram.com/bchiang7"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Instagram (opens in a new tab)"
                        title="Instagram"
                    >
                        <span class="sr-only">Instagram</span>
                        <img src="images/instagram.svg" alt="Instagram" class="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default LeftSection;
