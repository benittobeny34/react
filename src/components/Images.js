import React, { Component } from 'react';
import image from '../kane.jpg'

class Images extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
        	interval:''
        }
    }

  componentDidMount(){
     this.setState({
     	interval:setInterval(()=>{
     	console.log('mounted')
     },2000)
     })
  }

  componentWillUnmount(){
     clearInterval(this.state.interval)
  }

    render() {
        return (
          <img src={image} alt="missing" />  
        );
    }
}

export default Images;
