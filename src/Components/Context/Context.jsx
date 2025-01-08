import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        navItems: [
            { id: 1, text: "Work", path: "/" },
            { id: 2, text: "About", path: "/about" },
            { id: 3, text: "Resume", path: "/resume" },
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