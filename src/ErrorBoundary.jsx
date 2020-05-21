import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <div
        style={{
          margin: 4,
          padding: 6,
          color: "maroon",
          backgroundColor: "pink",
          border: "1px solid maroon",
        }}
      >
        <div>Error: {this.state.error && this.state.error.toString()}</div>
        <div>
          Info: {this.state.errorInfo && JSON.stringify(this.state.errorInfo)}
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
