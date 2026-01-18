import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          padding: '20px'
        }}>
          <div className="error-boundary-content" style={{
            maxWidth: '600px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>⚠️</div>
            <h1 style={{ color: '#dc3545', marginBottom: '15px' }}>Oops! Something went wrong</h1>
            <p style={{ color: '#6c757d', marginBottom: '25px' }}>
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Refresh Page
            </button>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{ marginTop: '30px', textAlign: 'left' }}>
                <summary style={{ cursor: 'pointer', color: '#6c757d', marginBottom: '10px' }}>
                  Error Details (Development Only)
                </summary>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  overflow: 'auto',
                  maxHeight: '200px'
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
