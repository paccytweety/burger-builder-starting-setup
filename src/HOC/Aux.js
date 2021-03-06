/* eslint-disable no-useless-constructor */
import React, {Component} from "react";

class Aux extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
export default Aux;