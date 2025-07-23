import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Lifecycle hook
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          <span>loggedInUser: </span>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>We are a team of passionate developers.</h2>
        <UserClass name={"First"} location={"Pune class"} />
        <p>
          Our mission is to create amazing web applications that enhance user
          experience.
        </p>
      </div>
    );
  }
}

export default About;
