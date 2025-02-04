import { useParams, Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Consumer } from "../Context/Context";

const RoadmapPage = () => {
  const { slug } = useParams();

  return (
    <Consumer>
      {(value) => {
        const { roadmaps } = value;

        const roadmap = roadmaps.find((roadmap) => roadmap.slug === slug);

        return (
          <div className="w-full min-h-screen bg-backgroundBgColor">
            <Container maxWidth="xl" className="mt-8 px-2 sm:px-4 lg:px-8 mb-5">
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 w-full">
                <div className="block md:hidden xl:block md:w-[200px]  2xl:w-[300px] flex-shrink-0">
                  <div className="h-48 md:h-dvh w-full bg-adsBgColor rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"></div>
                </div>

                <div className="bg-footerBgColor flex-grow-0 p-5 w-full">
                  <div className="max-w-4xl mx-auto">
                    {roadmap ? (
                      roadmaps.map((roadmap) => (
                        <div
                          key={roadmap.id}
                          className="mb-10 p-2 md:p-6 shadow-lg"
                        >
                          <h2 className="text-xl md:text-2xl font-bold mb-2">
                            {roadmap.title}
                          </h2>
                          <p className="mb-6 text-sm md:text-base text-textColor/80">
                            {roadmap.description}
                          </p>

                          <div className="flex flex-col md:flex-row justify-center mx-auto gap-y-3 gap-x-5 mb-5 text-center w-full xs:w-[80%] sm:w-[60%] md:w-full">
                            {roadmap.buttons && roadmap.buttons[0] && (
                              <a
                                key={0}
                                href={roadmap.buttons[0].src}
                                className="text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full"
                                download
                              >
                                {roadmap.buttons[0].text}
                              </a>
                            )}
                            {roadmap.buttonsSet2 &&
                              roadmap.buttonsSet2
                                .slice(1, 3)
                                .map((buttonSet2, index) => (
                                  <Link
                                    key={index}
                                    to={buttonSet2.link}
                                    className="text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full"
                                    target="_blank"
                                  >
                                    {buttonSet2.text}
                                  </Link>
                                ))}
                          </div>

                          <h3 className="text-lg md:text-xl font-semibold mt-8 text-textStrong text-center">
                            Concepts:
                          </h3>
                          {Object.entries(roadmap.concepts).map(
                            ([key, topics]) => (
                              <div key={key} className="mb-4 mt-2">
                                <h4 className="text-base md:text-lg font-semibold capitalize">
                                  {key}
                                </h4>
                                <ul className="list-disc pl-5">
                                  {topics.map((topic, index) => (
                                    <li
                                      key={index}
                                      className="text-sm md:text-base"
                                    >
                                      {topic.topic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}

                          <h3 className="text-lg md:text-xl font-semibold mt-8 text-textStrong text-center">
                            Projects:
                          </h3>
                          {Object.entries(roadmap.projects).map(
                            ([level, projects]) => (
                              <div key={level} className="mb-4 mt-2">
                                <h4 className="text-base md:text-lg font-semibold capitalize">
                                  {level} Level
                                </h4>
                                <ul className="list-disc pl-5">
                                  {projects.map((project, index) => (
                                    <li key={index}>
                                      <span className="text-sm md:text-base">
                                        {project.name}
                                      </span>{" "}
                                      -{" "}
                                      <span className="text-sm md:text-base text-textColor/80">
                                        {project.stack.join(", ")}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}

                          <div>
                            <h3 className="text-lg md:text-xl font-semibold mt-8 text-center text-textStrong ">
                              Interview Tips:
                            </h3>
                            <ul className="list-disc pl-5 mt-2">
                              {roadmap.interviewTips.map((tip, index) => (
                                <li
                                  key={index}
                                  className="text-sm md:text-base"
                                >
                                  {tip.tip}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-8">
                            <h3 className="text-lg md:text-xl font-semibold mt-8 text-center text-textStrong">
                              Final Tips:
                            </h3>
                            <ul className="list-disc pl-5 mt-2">
                              {roadmap.finalTips.map((finaltip, index) => (
                                <li key={index}>
                                  <span className="font-medium text-base md:text-lg">
                                    {finaltip.title}:
                                  </span>{" "}
                                  <span className="text-textColor/80 text-sm md:text-base">
                                    {finaltip.description}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-col md:flex-row justify-center mx-auto gap-y-3 gap-x-5 mb-5 text-center w-full xs:w-[80%] sm:w-[60%] md:w-full">
                            {roadmap.buttons && roadmap.buttons[0] && (
                              <a
                                key={0}
                                href={roadmap.buttons[0].src}
                                className="text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full"
                                download
                              >
                                {roadmap.buttons[0].text}
                              </a>
                            )}
                            {roadmap.buttons && roadmap.buttons[1] && (
                              <Link
                                key={roadmap.buttons[1].id}
                                to={roadmap.buttons[1].link}
                                className="text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full"
                                target="_blank"
                              >
                                {roadmap.buttons[1].text}
                              </Link>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-col justify-center items-center h-full">
                        <h2 className="text-white tracking-widest font-medium text-5xl font-Montserrat">
                          Roadmap not found
                        </h2>
                        <p className="mt-4 text-gray-400">
                          The requested service does not exist.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-[200px] 2xl:w-[300px] flex-shrink-0">
                  <div className="h-48 md:h-dvh  w-full bg-adsBgColor rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"></div>
                </div>
              </div>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default RoadmapPage;
