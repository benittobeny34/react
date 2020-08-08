import React,{useState} from 'react';
import Images from './components/Images'

const App = () => {

   const [title,setTitle] = useState('hello React')

   const [isShowing,setIsShowing] = useState(false)

   const  handleClick = () => {   // NO need to bind if we use arrow function
         setIsShowing(!isShowing)
  }

    return (
        <div className = "App container" >
            <section className="d-flex justify-content-center">
              <button className = "p-1 text-primary " onClick={handleClick}>toggle image < /button>
            </section>

            <section className = " py-2 d-flex justify-content-center" >
               {
                isShowing ? (<Images/>):("")
               }
            </section> 
          < /div>
    );
};


export default App;

















// import React, { Component } from 'react';
// import Images from './components/Images'

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {isShowing:false};
    
//     console.log('constructor executed')
//   }
//   handleClick = () => {   // NO need to bind if we use arrow function
//          this.setState({isShowing:!this.state.isShowing})
//   }


//     render() {
//       console.log('app rendered')
//         return (
//          <div className = "App container" >
//             <section className="d-flex justify-content-center">
//               <button className = "p-1 text-primary " onClick={this.handleClick} > toggle image < /button>
//             </section>

//             <section className = " py-2 d-flex justify-content-center" >
//                {
//                 this.state.isShowing ? (<Images/>):("")
//                }
//             </section> 
//           < /div>);
//     }
// }
// export default App;