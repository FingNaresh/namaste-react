import {Component} from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends Component {
  constructor(props) {
    super(props);
  }


   componentDidMount() {
        // console.log("Parent component mounted");
   }
  

  

  render() {
    return (
      <div>
        <h1>About  Class Component</h1>
        <h2>We are a team of passionate developers.</h2>
       
        <UserClass name={"First"} location={"Pune class"} />
        <p>Our mission is to create amazing web applications that enhance user experience.</p>
      </div>
    );
  }
}





export default About
