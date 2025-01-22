import React, { Component } from "react";

const SisiContext = React.createContext();

export class Provider extends Component {
  state = {
    buttonLabels: [
      {
        id: 1,
        label: "Roadmaps",
        link: "roadmaps",
      },
      {
        id: 2,
        label: "Resources",
        link: "resources",
      },
      {
        id: 3,
        label: "Projects",
        link: "",
      },
      {
        id: 4,
        label: "Tutorials",
        link: "",
      },
      {
        id: 5,
        label: "Contact",
        link: "",
      },
    ],
    roadmaps: [
      {
        id: 1,
        title: "Front-end Roadmap",
        description:
          "Discover the best practices for building a stunning front-end application.",
        link: "#",
      },
      {
        id: 2,
        title: "Back-end Roadmap",
        description:
          "Learn how to build scalable and maintainable back-end applications.",
        link: "#",
      },
      {
        id: 3,
        title: "Mobile App Roadmap",
        description:
          "Learn how to create cross-platform mobile apps using modern technologies.",
        link: "#",
      },
    ],
    resources: [
      {
        id: 1,
        title: "Top20 Java Leet Questions",
        description:
          "A comprehensive list of top 20 Java coding questions and answers.",
        link: "#",
      },
    ],

    resourcePage: {
      title: "",
      para1: "",
      para2: "",
      buttons: {
        btn1: {
          text: "",
          link: "/",
        },
        btn2: {
          text: "",
          link: "/",
        },
        btn3: {
          text: "",
          link: "/",
        },
      },
      images: {
        image1: {
          src: "",
          alt: "",
        },
        image2: {
          src: "",
          alt: "",
        },
      },
    },
    roadmapPage: {
      title: "",
      para1: "",
      para2: "",
      buttons: {
        btn1: {
          text: "",
          link: "/",
        },
        btn2: {
          text: "",
          link: "/",
        },
        btn3: {
          text: "",
          link: "/",
        },
      },
      images: {
        image1: {
          src: "",
          alt: "",
        },
        image2: {
          src: "",
          alt: "",
        },
      },
    },
  };
  render() {
    return (
      <SisiContext.Provider value={this.state}>
        {this.props.children}
      </SisiContext.Provider>
    );
  }
}

export const Consumer = SisiContext.Consumer;
