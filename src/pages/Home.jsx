import { useRef,useEffect } from "react";
import { motion,useInView,useAnimation } from "framer-motion"
import { AboutSection, ContactSection, HeroSection, ProjectsSection } from '../components/home'

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{ once: true });

  const mainControls = useAnimation();

  useEffect(() => {
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