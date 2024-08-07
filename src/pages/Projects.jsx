import { Link } from "react-router-dom";
import { projects, socialLinks } from "../constants";
import { arrow } from "../assets/icons";
import CallToAction from "../components/CallToAction";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Here are some of the projects I have either built from scratch or
          contributed to. I have worked on multiple frontend and backend teams,
          and am as excited about a polished, accessible UI as I am about a
          structurally sound backend! I also am experienced with AWS. I can develop
          event driven microservices if monolithic architecture isn't suited
          for the application.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-blue-500"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
        <div>
          <h4 className="subhead-text">Want to explore more of my work?</h4>
          <p className="mt-2 flex flex-col gap-3 text-slate-500">
            Checkout my Github to see my project's repositories. Feel free to
            stop by my Linkedin as well.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CallToAction />
    </section>
  );
};

export default Projects;
