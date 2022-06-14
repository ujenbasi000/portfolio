import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectCard = ({ project, delayStarting = 0.3 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  useEffect(() => {
    if (inView) {
      console.log(true);
      control.start("visible");
    } else {
      console.log(false);
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: delayStarting + 0.1,
      }}
      div
      className="py-10 card"
    >
      <a target="_blank" rel="noreferrer" href={project.link}>
        <div className="cursor-pointer">
          <div className="relative image-parent">
            <div className="image"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full object-fit rounded-md"
              src={project.image}
              alt={project.title}
            />
          </div>
        </div>
      </a>
      <div className="card-content mt-10 lg:mt-0">
        <Link href={project.link}>
          <h1 className="text-3xl mb-4 font-semibold text-gray-200 cursor-pointer hover:text-gray-300 transition duration-150">
            {project.title}
          </h1>
        </Link>
        <p className="text-lg text-gray-300 text-justify">
          {project.description}
        </p>
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-lightSecondary text-white text-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 items-center mt-6">
          {/* <button className="px-3 py-2 rounded-full">
            <a rel="noreferrer" target="_blank" href={project.link}>
              <i className="uil uil-external-link-alt text-2xl text-white hover:text-primary transition duration-200 " />
            </a>
          </button> */}
          <button className="px-3 py-2 rounded-full">
            <a rel="noreferrer" target="_blank" href={project.link}>
              <i className="uil uil-github-alt text-white text-2xl hover:text-primary transition duration-200" />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
