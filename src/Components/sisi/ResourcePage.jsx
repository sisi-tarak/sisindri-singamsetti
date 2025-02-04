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
            <Container maxWidth="xl" className="mt-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="lg:w-[300px] w-full sm:w-0">
                  <div
                    className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                                shadow-lg transition-all duration-300 hover:shadow-xl"
                  ></div>
                </div>

                <div className="bg-footerBgColor w-full ">
                  {resource ? (
                    <div className="flex flex-col py-8 px-6">
                      <h2 className="font-Montserrat text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl tracking-wide font-semibold">
                        {resource.fullTitle}
                      </h2>

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
                        <div className="p-4">
                          <h1 className="text-2xl font-bold mb-4">
                            LeetCode Interview Questions
                          </h1>
                          {resource.questions.map((question, index) => (
                            <div
                              key={index}
                              className="mb-8 p-5 border border-white/40 rounded-2xl"
                            >
                              <h2 className="text-2xl font-semibold mb-4">
                                {question.id}. <span className="">{question.title}</span>
                              </h2>
                              <p className="mb-3">
                                <span className="font-semibold">Problem:</span>{" "}
                                {question.problem}
                              </p>
                              <pre className="bg-strongBgColor/80 p-4 rounded mb-3">
                                <code>{question.code}</code>
                              </pre>
                              <p>
                                <span className="font-semibold">
                                  Explanation:
                                </span>{" "}
                                {question.explanation}
                              </p>
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

                      <div className="flex gap-x-5">
                        {resource.buttons &&
                          resource.buttons.map((button, index) => (
                            <Link
                              key={index}
                              to={button.link}
                              className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                            >
                              {button.text}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center h-full">
                      <h2 className="text-white tracking-widest font-medium text-5xl font-Montserrat">
                        Resource not found
                      </h2>
                      <p className="mt-4 text-gray-400">
                        The requested service does not exist.
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:w-[300px] w-full sm:w-0">
                  <div
                    className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                                shadow-lg transition-all duration-300 hover:shadow-xl"
                  ></div>
                </div>
              </div>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default ResourcePage;
