import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: props.name || "Dummy",
        location: props.location || "Default",
        contact: props.contact || "pinnacleboy@gmail.com",
      },
    };
  }

  render() {
    const { name, location, contact } = this.state.userInfo;

    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center space-y-3 hover:shadow-2xl transition-shadow duration-300">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-3xl font-bold">
          {name.charAt(0)}
        </div>
        <h2 className="text-xl font-bold text-green-700">{name}</h2>
        <h3 className="text-gray-600">Location: {location}</h3>
        <h4 className="text-gray-600">Contact: {contact}</h4>
        <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
          Contact
        </button>
      </div>
    );
  }
}

export default UserClass;
