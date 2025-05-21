import './App.css'
import Header from "./components/Header/Header.tsx";
import {type RefObject, useEffect, useRef, useState} from "react";

function App() {
    const [scrolledDown, setScrolledDown] = useState(false);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    // const textOneRef = useRef<HTMLDivElement>(null);
    // const textTwoRef = useRef<HTMLDivElement>(null);
    // const textThreeRef = useRef<HTMLDivElement>(null);
    // const textFourRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolledDown(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScrollTo = (ref: RefObject<HTMLDivElement | null>) => {
        window.scrollTo({
            top: ref.current?.offsetTop ?? 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className={'relative'}>
            <div className={"gradient-circle"}></div>
            <div className={"gradient-circle-bottom"}></div>
            {scrolledDown && (
                <button
                    className={'fixed bottom-4 right-4 rounded-[48px] border-2 bg-white size-10 flex items-center justify-center'}
                    onClick={scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6 stroke-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"/>
                    </svg>
                </button>
            )}
            <div className={"container mx-auto mb-10 sticky top-10"}>
                <Header scrollTo_Projects={() => handleScrollTo(projectsRef)}
                        scrollTo_Skills={() => handleScrollTo(skillsRef)}
                        scrollTo_About={() => handleScrollTo(aboutRef)}/>
                <div className={"laptop:mt-20 mt-10"}></div>
            </div>
            <div className={"container mx-auto mb-10"}>
                <section className={"text-gray-900 dark:text-gray-100"} style={{height: '100vh'}}></section>
                <section className={"text-gray-900 dark:text-gray-100"} style={{height: '100vh'}} ref={projectsRef}>Projects</section>
                <section className={"text-gray-900 dark:text-gray-100"} style={{height: '100vh'}} ref={skillsRef}>Skills</section>
                <section className={"text-gray-900 dark:text-gray-100"} style={{height: '100vh'}} ref={aboutRef}>About</section>
            </div>
        </div>
    )
}

export default App
