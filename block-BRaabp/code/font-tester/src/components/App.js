import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      fontSize: 20,
    };
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  changeSlider = (event) => {
    console.log(event);
    this.setState({ fontSize: event.target.value });
  };

  render() {
    let styles = [
      'Lato',
      'hurricane',
      'inspiration',
      'montserrat',
      'opensans',
      'oswald',
      'palette',
      'poppins',
      'red',
      'roboto',
      'condensed',
      'source',
    ];
    return (
      <>
        <div className="container">
          <h1>Font Tester</h1>
          <div className="header">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Enter The Text"
            />
            <input
              type="range"
              min="10"
              max="30"
              onChange={this.changeSlider}
            />
          </div>
          <div className="grid">
            {styles.map((style, index) => (
              <div key={index} className="box">
                <h2>{style.toUpperCase()}</h2>
                <p className={style} style={{ fontSize: this.state.fontSize }}>
                  {this.state.inputText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
