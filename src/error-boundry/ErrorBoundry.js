import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <span>We're sorry, something went wrong.</span>;
    }

    return this.props.children; 
  }
}