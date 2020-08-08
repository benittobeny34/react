import React, { useState,useEffect } from 'react';
import image from '../kane.jpg'



const Images = () => {

 //This is componentWillUnmount in rfc
   useEffect(()=>{
   	const myinterval = setInterval(()=>{
   		console.log('interval')
   	},1000);
   	return ()=>{
   		clearInterval(myinterval)
   	}
   },[])
    return (
        <img src={image} alt="missing" /> 
    );
};


export default Images;


// class Images extends Component {
    

//     constructor(props) {
//         super(props);
//         this.state = {
//         	interval:''
//         }
//     }

//   componentDidMount(){
//      this.setState({
//      	interval:setInterval(()=>{
//      	console.log('mounted')
//      },2000)
//      })
//   }

//   componentWillUnmount(){
//      clearInterval(this.state.interval)
//   }

//     render() {
//         return (
//           <img src={image} alt="missing" />  
//         );
//     }
// }

// export default Images;
