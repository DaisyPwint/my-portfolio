import { useRef,useEffect } from "react";
import { motion,useInView,useAnimation } from "framer-motion"
import { AboutSection, ContactSection, HeroSection, ProjectsSection } from '../components/home'

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{ once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div className='max-w-5xl mx-auto w-11/12'
    ref={ref}
      variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{
      duration: 0.5,
      delay: 0.25,
    }}
    >
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </motion.div>
  )
}

export default Home

// import { useRef, useEffect } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
// import { AboutSection, ContactSection, HeroSection, ProjectsSection } from '../components/home';

// const Home = () => {
//   // Refs for each section
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   // In-view controls for each section
//   const heroControls = useAnimation();
//   const aboutControls = useAnimation();
//   const projectsControls = useAnimation();
//   const contactControls = useAnimation();

//   // In-view states for each section
//   const isHeroInView = useInView(heroRef,{ once: true });
//   const isAboutInView= useInView(aboutRef,{ once: true });
//   const isProjectsInView = useInView(projectsRef,{ once: true });
//   const isContactInView = useInView(contactRef,{ once: true });

//   useEffect(() => {
//     // Use in-view states to trigger animations for each section
//     if (isHeroInView) heroControls.start("visible");
//     if (isAboutInView) aboutControls.start("visible");
//     if (isProjectsInView) projectsControls.start("visible");
//     if (isContactInView) contactControls.start("visible");
//   }, [isHeroInView, isAboutInView, isProjectsInView, isContactInView, heroControls, aboutControls, projectsControls, contactControls]);

//   return (
//     <div className='max-w-5xl mx-auto w-11/12'>
//       {/* Hero Section */}
//       <motion.div
//         ref={heroRef}
//         variants={{
//           hidden: { opacity: 0, y: 75 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial="hidden"
//         animate={heroControls}
//         transition={{
//           duration: 0.5,
//           delay: 0.25,
//         }}
//       >
//         <HeroSection />
//       </motion.div>

//       {/* About Section */}
//       <motion.div
//         ref={aboutRef}
//         variants={{
//           hidden: { opacity: 0, y: 75 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial="hidden"
//         animate={aboutControls}
//         transition={{
//           duration: 0.5,
//           delay: 0.25,
//         }}
//       >
//         <AboutSection />
//       </motion.div>

//       {/* Projects Section */}
//       <motion.div
//         ref={projectsRef}
//         variants={{
//           hidden: { opacity: 0, y: 75 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial="hidden"
//         animate={projectsControls}
//         transition={{
//           duration: 0.5,
//           delay: 0.25,
//         }}
//       >
//         <ProjectsSection />
//       </motion.div>

//       {/* Contact Section */}
//       <motion.div
//         ref={contactRef}
//         variants={{
//           hidden: { opacity: 0, y: 75 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial="hidden"
//         animate={contactControls}
//         transition={{
//           duration: 0.5,
//           delay: 0.25,
//         }}
//       >
//         <ContactSection />
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

// import { useRef, useEffect } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
// import { AboutSection, ContactSection, HeroSection, ProjectsSection } from '../components/home';

// const sections = [
//   { Section: HeroSection, ref: useRef(null), controls: useAnimation() },
//   { Section: AboutSection, ref: useRef(null), controls: useAnimation() },
//   { Section: ProjectsSection, ref: useRef(null), controls: useAnimation() },
//   { Section: ContactSection, ref: useRef(null), controls: useAnimation() },
// ];

// const Home = () => {
//   useEffect(() => {
//     sections.forEach(({ ref, controls }) => {
//       const [isInView] = useInView(ref, { once: true });
//       if (isInView) controls.start("visible");
//     });
//   }, []);

//   return (
//     <div className='max-w-5xl mx-auto w-11/12'>
//       {sections.map(({ Section, ref, controls }, index) => (
//         <motion.div
//           key={index}
//           ref={ref}
//           variants={{
//             hidden: { opacity: 0, y: 75 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           initial="hidden"
//           animate={controls}
//           transition={{
//             duration: 0.5,
//             delay: 0.25,
//           }}
//         >
//           <Section />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Home;
