import Head from "next/head";
import GetInTouch from "../components/Home/GetInTouch";
import ProjectCard from "../components/sub-components/card";
import { projects } from "../utils/projects";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <section className="container mx-auto px-6">
        <header className="my-28 w-full lg:w-8/12 mx-auto text-center">
          <h1 className="text-white text-5xl font-bold text-center mb-8">
            Projects
          </h1>
          <p className="text-gray-200 text-lg">
            Over the time of learning web development, I have build many awesome
            projects. These are my recent and best projects i have created till
            this date. You can find all projects source code in my{" "}
            <a
              href="https://github.com/ujenBasi000"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              github
            </a>
            . All small to medium projects are listed here.
          </p>
        </header>
        <main>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </main>
      </section>
      <GetInTouch />
    </>
  );
};

export default ProjectPage;
