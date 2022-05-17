import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Basketball',
    };
  }
  render() {
    let labels = ['Basketball', 'Cricket', 'Laptop', 'Phone', 'Tiger'];
    return (
      <>
        <div className="btn-container">
          {labels.map((label) => {
            return (
              <button
                className={this.state.active === label ? 'active' : ''}
                onClick={() => {
                  this.setState({ active: label });
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="img-box">
          <img
            alt={this.state.active}
            src={`./images/${this.state.active}.jpg`}
          ></img>
        </div>
      </>
    );
  }
}

export default App;
