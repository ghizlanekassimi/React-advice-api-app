import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state={
    advice:''
  };
  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = ()=>{
    axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
          const {advice} = response.data.slip;
          this.setState({advice})
        })
        .catch((error)=>{
          console.log(error)

        })
  }
  render(){
    const {advice} =this.state;
    return(
      <div className="app">
        <div className="card">
          <h1>REMINDER</h1>
          <h2 className="heading">{advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <h3  >Another advice!</h3>
          </button>
        </div>
      </div>
      )
  }
}
export default App;