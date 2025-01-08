import React, { Component } from "react";


import Project1 from "../../assets/Projects/01.png";
import Project2 from "../../assets/Projects/02.png";
import Project3 from "../../assets/Projects/03.png";
import Project4 from "../../assets/Projects/04.png";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        navItems: [
            { id: 1, text: "Work", path: "/" },
            { id: 2, text: "About", path: "/about" },
            { id: 3, text: "Resume", path: "/resume" },
        ],
        projectsLists: [
            {
              id: 1,
              title: "64 Frames",
              description: "",
              img: Project1,
              link: "https://www.64frames.com",
            },
            {
              id: 2,
              title: "Webortex",
              description: "",
              img: Project2,
              link: "https://webortex.com",
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
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;