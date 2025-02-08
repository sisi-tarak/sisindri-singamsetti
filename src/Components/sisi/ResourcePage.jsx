import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Consumer } from "../Context/Context";

const ResourcePage = () => {
  const { slug } = useParams();

  return (
    <Consumer>
      {(value) => {
        const { resources } = value;

        const resource = resources.find((resource) => resource.slug === slug);

        return (
          <div className="w-full min-h-screen bg-backgroundBgColor">
            <Container maxWidth="md" className="mt-8 px-2 sm:px-4 lg:px-8 mb-5">
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 w-full">
                {/* <div className="block md:hidden xl:block md:w-[200px]  2xl:w-[300px] flex-shrink-0">
                  <div className="h-48 md:h-dvh w-full bg-adsBgColor rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"></div>
                </div> */}

                {resource ? (
                  <div className="bg-footerBgColor flex-grow-0">
                    <div className="flex flex-col px-2 py-2 md:py-8 md:px-6">
                      <h2 className="font-Montserrat text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl tracking-wide font-semibold">
                        {resource.fullTitle}
                      </h2>

                      <p className="my-8 text-textColor/80 text-sm md:text-base">
                        {resource.description}
                      </p>

                      <div className="flex flex-col md:flex-row justify-center mx-auto gap-y-3 gap-x-5 mb-5 text-center w-full xs:w-[80%] sm:w-[60%] md:w-full">
                        {resource.buttonsSet2 &&
                          resource.buttonsSet2.map((buttonSet2, index) => (
                            <Link
                              key={index}
                              to={buttonSet2.link}
                              className="text-sm md:text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full font-medium"
                            >
                              {buttonSet2.text}
                            </Link>
                          ))}
                      </div>

                      {resource.images && resource.images[0] && (
                        <img
                          src={resource.images[0]}
                          alt={`${resource.title} Image 1`}
                          className="my-6 w-full"
                        />
                      )}

                      {resource.paragraphs &&
                        resource.paragraphs.map((para, index) => (
                          <p
                            key={index}
                            className="mt-6 mb-10 text-base md:text-lg font-Montserrat"
                          >
                            {para}
                          </p>
                        ))}

                      {resource.questions && (
                        <div className="p-2 md:p-4">
                          <h1 className="text-xl md:text-2xl font-bold mb-4 tracking-wider text-textStrong">
                            LeetCode Interview Questions
                          </h1>
                          {resource.questions.map((question) => (
                            <div
                              key={question.id}
                              className="mb-8 p-2 md:p-5 border border-white/40 rounded-2xl"
                            >
                              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                                {question.id}.{" "}
                                <span className="">{question.title}</span>
                              </h2>

                              <div className="mb-4">
                                <p className="text-sm md:text-base font-semibold">
                                  Problem:
                                </p>
                                <p className="px-1 sm:px-2 md:px-6 pt-2 text-sm md:text-base">
                                  {question.problem}
                                </p>
                              </div>
                              {question.code && (
                                <pre className="bg-strongBgColor/60 p-4 rounded mb-4 max-w-full  whitespace-pre-wrap overflow-x-auto">
                                  <code className="block overflow-x-auto text-xs sm:text-sm lg:text-base">
                                    {question.code}
                                  </code>
                                </pre>
                              )}
                              <div>
                                <p className="font-semibold text-sm md:text-base">
                                  Explanation:
                                </p>
                                <p className="px-1 sm:px-2 md:px-6 pt-2 text-textColor/90 text-sm md:text-base">
                                  {question.explanation}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {resource.images && resource.images[1] && (
                        <img
                          src={resource.images[1]}
                          alt={`${resource.title} Image 2`}
                          className="my-6 w-full"
                        />
                      )}

                      <div className="flex flex-col md:flex-row justify-center mx-auto gap-y-3 gap-x-5 mb-5 text-center w-full xs:w-[80%] sm:w-[60%] md:w-full">
                        {resource.buttons &&
                          resource.buttons.map((button, index) => (
                            <Link
                              key={index}
                              to={button.link}
                              className="text-sm md:text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full font-medium"
                            >
                              {button.text}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center text-center mx-auto h-full">
                    <h2 className="text-white tracking-widest font-medium text-5xl font-Montserrat">
                      Resource not found
                    </h2>
                    <p className="mt-4 text-gray-400">
                      The requested service does not exist.
                    </p>
                  </div>
                )}

                {/* <div className="w-full md:w-[200px] 2xl:w-[300px] flex-shrink-0">
                  <div className="h-48 md:h-dvh  w-full bg-adsBgColor rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"></div>
                </div> */}
              </div>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default ResourcePage;
