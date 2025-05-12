import React, { useEffect, useState } from 'react'

export default function ScrollIndicator({ sections }) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeLink, setActiveLink] = useState(sections[0]);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
    let section = document.getElementById(sections[1]);
    const rect = section.getBoundingClientRect()
    // console.log(rect.top)
    // console.log(window.scrollY)
    }, [])

    // function to smoothly scroll to a section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const marginTop = 30;
        const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
        window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }

    // function to determine active section 
    const activeSection = () => {
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <=80 && rect.bottom >= rect.height-window.visualViewport.height) {
                    setActiveLink(sections[i]);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
                activeSection();
            }
            else {
                setIsScrolled(false)
            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [activeLink]);

    useEffect(() => {
        setIsVisible(true);

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [activeLink]);

    return (
        <div className='fixed top-1/3 right-5 hidden sm:flex flex-col gap-8 z-70'>
            {
                sections.map((section, index) => (
                    <a onClick={() => scrollToSection(section)} key={index} before={`${section}`} className={`relative w-[10px] h-[10px] ${activeLink === section ? 'bg-secondary before:content-[attr(before)] before:w-fit before:py-1 before:px-3 before:rounded-sm before:text-[12px] before:font-semibold before:tracking-[1px] before:capitalize before:absolute before:top-0 before:right-3 before:z-30 before:bg-secondary before:duration-350' : 'bg-transparent'} ${isVisible? 'before:opacity-100' : 'before:opacity-0'} hover:before:opacity-100 border border-secondary rounded-full cursor-pointer`}></a>
                ))
            }
        </div>
    )
}
