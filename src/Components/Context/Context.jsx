import React, { Component } from "react";

import Project1 from "../../assets/Projects/01.png";
import Project2 from "../../assets/Projects/02.png";
import Project3 from "../../assets/Projects/03.png";
import Project4 from "../../assets/Projects/04.png";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    navItems: [
      {
        id: 1,
        text: "Work",
        path: "/",
      },
      {
        id: 2,
        text: "About",
        path: "/about",
      },
      {
        id: 3,
        text: "Resume",
        path: "/resume",
      },
      ],
      
    projectsLists: [
      {
        id: 1,
        title: "64 Frames",
        description: "",
        img: Project1,
        link: "https://www.64framez.com/",
      },
      {
        id: 2,
        title: "Webortex",
        description: "",
        img: Project2,
        link: "https://webortex.com/",
      },
      {
        id: 3,
        title: "Yes Telugu",
        description: "",
        img: Project3,
        link: "",
      },
      {
        id: 4,
        title: "Aaharadhaan",
        description: "",
        img: Project4,
        link: "",
      },
      ],
    
      documentationsData: [
        {
          id: 1,
          title: "React JS",
          subtitle: "Interview Q&A",
          headtext: "React JS",
          subtext: "Interview Questions",
          description: "A collection of frequently asked React interview questions to help you prepare, providing insight into potential topics without focusing on memorization.",
          link: "https://github.com/sisi-tarak/react-interview-questions.git",
        },
        {
          id: 2,
          title: "Data Analysis",
          subtitle: "Roadmap",
          headtext: "Data Analysis",
          subtext: "Roadmap",
          description: "A 100-day guide to mastering data analytics, including core skills, practical projects, and advanced techniques to shape your career.",
          link: "https://github.com/sisi-tarak/data-analysis-roadmap.git",
        },
        {
          id: 3,
          title: "Resume",
          subtitle: "Formats",
          headtext: "Resume",
          subtext: "Formats",
          description: "Explore various resume formats tailored to different career stages and job requirements, designed to highlight your skills effectively.",
          link: "https://github.com/sisi-tarak/resume-format.git",
        },
        {
          id: 4,
          title: "Resume",
          subtitle: "Guide",
          headtext: "Resume",
          subtext: "Guide",
          description: "A step-by-step guide to crafting a professional, ATS-friendly resume that highlights your skills and boosts your job opportunities.",
          link: "https://github.com/sisi-tarak/resume-guide.git",
        },
        {
          id: 5,
          title: "Git",
          subtitle: "Cheatsheet",
          headtext: "Git",
          subtext: "Cheatsheet",
          description: " A beginner-friendly Git cheat sheet covering essential commands, workflows, and precautions for reliable version control practices.",
          link: "https://github.com/sisi-tarak/Git-Cheat-Sheet.git",
        },
        {
          id: 6,
          title: "Tailwind CSS",
          subtitle: "Cheatsheet",
          headtext: "Tailwind CSS",
          subtext: "Cheatsheet",
          description: "A comprehensive guide to essential Tailwind CSS classes, from basic layouts to advanced effects and transitions, mapped to CSS properties.",
          link: "https://github.com/sisi-tarak/tailwindcssCheatsheat.git",
        },
      ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
