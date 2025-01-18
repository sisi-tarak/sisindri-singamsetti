import React, { Component } from "react";

const SisiContext = React.createContext();

export class Provider extends Component {
  state = {};
  render() {
    return (
      <SisiContext.Provider value={this.state}>
        {this.props.children}
      </SisiContext.Provider>
    );
  }
}

export const SisiConsumer = SisiContext.SisiConsumer;
