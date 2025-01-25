import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Context } from "../Context/Context";

const ResourcePage = () => {
  const { slug } = useParams();
  const { getResourceBySlug } = useContext(Context);
  const resource = getResourceBySlug(slug);

  if (!resource) return <div>Resource Not Found</div>;

  return (
    <div className="w-full min-h-screen bg-backgroundBgColor">
      <Container maxWidth="xl" className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex bg-footerBgColor w-full">
            <div className="py-8 px-6">
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
              
              {resource.paragraphs && resource.paragraphs.map((para, index) => (
                <p 
                  key={index} 
                  className="mt-6 mb-10 text-base md:text-lg font-Montserrat"
                >
                  {para}
                </p>
              ))}

              {resource.images && resource.images[1] && (
                <img 
                  src={resource.images[1]} 
                  alt={`${resource.title} Image 2`} 
                  className="my-6 w-full"
                />
              )}
              
              <div className="flex gap-x-5">
                {resource.buttons && resource.buttons.map((button, index) => (
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResourcePage;