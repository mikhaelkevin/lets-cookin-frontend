import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return children;
  }
}
