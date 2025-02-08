import React from "react";
import { Consumer } from "../Context/Context";
import { Link, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { div } from "framer-motion/client";

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        const blog = blogs.find((blog) => blog.slug === slug);
        return (
          <div className="w-full min-h-screen bg-backgroundBgColor">
            <Container maxWidth="md" className="mt-8 px-2 sm:px-4 lg:px-8 mb-5">
              <div className="flex w-full">
                {blog ? (
                  <div className="bg-footerBgColor flex-grow-0 p-3 sm:p-6 lg:p-8">
                    <div className="mb-12">
                      <h2 className="font-Montserrat text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
                        {blog.title}
                      </h2>
                      <p className="my-8 text-textColor/80 text-sm md:text-base">
                        {blog.introduction}
                      </p>
                      <div className="flex flex-col md:flex-row justify-center mx-auto gap-y-3 gap-x-5 mb-5 text-center w-full xs:w-[80%] sm:w-[60%] md:w-full">
                        {blog.buttonsSet2 && blog.buttonsSet2[0] && (
                          <a
                            key={0}
                            href={blog.buttonsSet2[0].src}
                            className="text-sm md:text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full font-medium"
                            download
                          >
                            {blog.buttonsSet2[0].text}
                          </a>
                        )}
                        {blog.buttonsSet2 &&
                          blog.buttonsSet2
                            .slice(1, 3)
                            .map((buttonSet2, index) => (
                              <Link
                                key={index}
                                to={buttonSet2.link}
                                className="text-sm md:text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full font-medium"
                                target="_blank"
                              >
                                {buttonSet2.text}
                              </Link>
                            ))}
                      </div>
                    </div>

                    {blog.sections && (
                      <div className=" ">
                        {blog.sections.map((section, index) => (
                          <section key={index} className="mb-12">
                            <h2 className="text-lg md:text-xl font-semibold mt-8 text-textStrong mb-6">
                              {section.title}
                            </h2>
                            <div className="bg-strongBgColor/60 shadow-md hover:shadow-lg  transition-shadow rounded-lg py-5 space-y-6">
                              {section.websites.map((website, index) => (
                                <div
                                  key={index}
                                  className="px-3 sm:px-4 lg:px-6"
                                >
                                  <Link
                                    to={website.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base md:text-lg font-semibold text-textColor/95 hover:text-textColor transition-all duration-300 ease-in-out"
                                  >
                                    {website.name}
                                  </Link>
                                  <p className="text-sm md:text-base mt-2 text-textColor/70 px-1 sm:px-4 lg:px-6">
                                    {website.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                    )}

                    {blog.libraries && (
                      <div className=" ">
                        {blog.libraries.map((library, index) => (
                          <section key={index} className="mb-12">
                            <h2 className="text-lg md:text-xl font-semibold mt-8 text-textColor mb-6">
                              {library.name}
                            </h2>
                          </section>
                        ))}
                      </div>
                    )}

                    {blog.exploreLinks && (
                      <div className="flex flex-col gap-y-2 mb-10">
                        <h2 className="text-lg md:text-xl font-semibold mt-8 text-textStrong">
                          Explore Links:
                        </h2>
                        {blog.exploreLinks.map((exploreLink, index) => (
                          <Link
                            key={index}
                            to={exploreLink.url}
                            className="text-sm md:text-base transition-all duration-300 ease-in-out self-center h-full w-full font-medium px-2 sm:px-4 lg:px-6"
                            target="_blank"
                          >
                            {exploreLink.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    <div className="mt-12">
                      <p className="my-8 text-textColor/80 text-sm md:text-base">
                        {blog.conclusion}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center mx-auto gap-y-3 gap-x-5 mb-5 text-center w-full xs:w-[80%] sm:w-[60%] md:w-full">
                      {blog.buttons && blog.buttons[0] && (
                        <a
                          key={0}
                          href={blog.buttons[0].src}
                          className="text-sm md:text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full font-medium"
                          download
                        >
                          {blog.buttons[0].text}
                        </a>
                      )}
                      {blog.buttons && blog.buttons[1] && (
                        <Link
                          key={blog.buttons[1].id}
                          to={blog.buttons[1].link}
                          className="text-sm md:text-base bg-strongBgColor hover:bg-strongBgColor/20 rounded-lg text-textStrong hover:text-textColor transition-all duration-300 ease-in-out px-6 py-3 self-center h-full w-full font-medium"
                          target="_blank"
                        >
                          {blog.buttons[1].text}
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center text-center mx-auto h-full">
                    <h2 className="text-textColor tracking-widest font-medium text-5xl font-Montserrat">
                      Blog not found
                    </h2>
                    <p className="mt-4 text-textColor">
                      The requested service does not exist.
                    </p>
                  </div>
                )}
              </div>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default BlogPage;
