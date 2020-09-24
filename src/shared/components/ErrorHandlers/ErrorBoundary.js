import React, { Component } from "react";
import AppError from "./AppError";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <AppError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
