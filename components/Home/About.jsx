import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="container mx-auto px-6">
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          // delay: 0.3,
        }}
        className="w-full xl:w-9/12 mx-auto py-6 lg:w-11/12"
      >
        <h1 className="text-4xl font-semibold text-white mb-8">
          👋 Hello, I&apos;m Ujen Basi
        </h1>
        <p className="text-gray-100 text-xl mb-4">
          I&apos;m a self-taught Front End Developer who is passionate about
          building beautiful, responsive websites. My interest in web
          development started back in 2019 during lockdown.
        </p>

        <p ref={ref} className="mt-6 text-gray-100 text-xl mb-4">
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <ul className="tech-grid">
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">
              JavaScript (ES6+)
            </span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Next.js</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Node.js</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Mongodb</span>
          </li>
          <li className="text-gray-100 text-xl mb-4">
            <i className="uil uil-angle-right-b mr-1" />
            <span className="text-gray-100 text-xl mb-4">Graphql</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
