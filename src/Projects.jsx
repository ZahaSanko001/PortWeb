import './Projects.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)


const Projects = () => {

    const pRef = useRef(null);

    useEffect(() => {
        const el = pRef.current;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                markers: true
            }
        });

        tl.to(el, {
            x: 50
        })




        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
        lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);


    }, []);


    return(
        <>
            <div className='Projects-Container'>
                <div className='Projects animated-element' ref={pRef}>
                    <h1>Projects</h1>
                    <h1 className='web'>.</h1>
                </div>

                <div className='spacer'></div>
            </div>
        </>
    )
}

export default Projects;