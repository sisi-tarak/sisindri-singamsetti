import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../Context/Context";

const Blogs = () => {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <section className="font-Montserrat my-10" id="blogs">
            <h1 className="text-xl md:text-2xl tracking-wide font-semibold">
              Blog Posts
            </h1>
            <div className="flex flex-col gap-x-5 gap-y-2 px-3 md:px-6 xl:px-10 mt-4 w-full">
              {blogs.map((blog, index) => (
                <Link
                  key={index}
                  to={`/sisi/blogs/${blog.slug}`}
                  className="text-base md:text-lg hover:bg-secondaryTextColor/10 rounded-lg hover:text-textStrong transition-all duration-300 ease-in-out px-2 md:px-4 xl:px-6 py-1 md:py-2 xl:py-3"
                >
                  {blog.title}
                </Link>
              ))}
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Blogs;
