import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            userInfo:{
            name:"Dummy",
            loaction:"Default",
        },
    };

     }
    

    async componentDidMount() {
        // console.log("UserClass component mounted");
        // Api call
        const data = await fetch("https://api.github.com/users/FingNaresh");
        const json =await  data.json();

        this.setState({
            userInfo:json,
        });
        // console.log(json);
        
    }

    componentDidUpdate(){
        // console.log("Component Did update")
    }

    componentWillUnmount(){
        // console.log("Component will Unmount")
    }

    

  
  render() {
    const {name, location, avatar_url} = this.state.userInfo;

    return (
      // Your JSX goes here
      <div className='user-card'>
        <img src={avatar_url}/>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact:pinncacleboy@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;