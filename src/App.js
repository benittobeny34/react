import React, { Component } from 'react';
import image from './kane.jpg'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {isShowing:false};
    // this.handleClick = this.handleClick.bind(this);
    console.log('constructor executed')
  }
  handleClick = () => {   // NO need to bind if we use arrow function
         this.setState({isShowing:!this.state.isShowing})
  }

  // handleClick() {  // need to bind this keyword to this function in constructor
  //   this.setState({isShowing:!this.state.isShowing})
  // }

  componentDidMount(){
     console.log('app mounted')
  }

  componentWillUnMount(){
    
  }
    render() {
      console.log('app rendered')
        return (
         <div className = "App container" >
            <section className="d-flex justify-content-center">
              <button className = "p-1 text-primary " onClick={this.handleClick} > toggle image < /button>
            </section>

            <section className = " py-2 d-flex justify-content-center" >
               {
                this.state.isShowing ? (<img src={image} alt="missing" />):("")
               }
            </section> 
          < /div>);
    }
}
export default App;