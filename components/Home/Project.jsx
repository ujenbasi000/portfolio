import ProjectCard from "../sub-components/card";
import { projects } from "../../utils/projects";

const Project = () => {
  return (
    <section className="container mx-auto px-6" style={{ marginTop: "50px" }}>
      <div className="w-full xl:w-9/12 mx-auto py-6">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold text-white mb-4">
            Some Things I&apos;ve Built
          </h1>
          <p className="text-xl text-white">
            Here are some of my favorite projects. I&apos;ve worked on a few of
            them, but I&apos;m always looking for new and exciting projects to
            work on.
          </p>
        </header>
        <main>
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default Project;
