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
        title: "FrontEnd Resources",
        description:
          "Discover the best resources to learn front-end development.",
        link: "#",
      },
    ],
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
