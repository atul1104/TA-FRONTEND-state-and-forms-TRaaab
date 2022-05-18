import React from 'react';
import './style.css';
import faqs from './data.json';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>AltCampus</h1>
        <ul>
          {faqs.map((faq, index) => {
            return (
              <li>
                <h2
                  onClick={() => {
                    this.setState({
                      activeIndex:
                        this.state.activeIndex === index ? null : index,
                    });
                  }}
                >
                  {faq.Q} {this.state.activeIndex === index ? '🔼' : '🔽'}
                </h2>
                {index === this.state.activeIndex ? <p>{faq.A}</p> : ''}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
