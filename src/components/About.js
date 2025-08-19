import { Component } from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full p-10 space-y-8">
          
          {/* Header */}
          <h1 className="text-5xl font-extrabold text-green-900 border-b-4 border-green-200 pb-3 text-center">
            About Us
          </h1>

          {/* Logged-in User */}
          <div className="flex justify-center items-center gap-2 text-lg text-gray-700">
            <span className="font-semibold">Logged-in User:</span>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <span className="text-green-700 font-bold">{loggedInUser}</span>
              )}
            </UserContext.Consumer>
          </div>

          {/* Mission Statement */}
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            We are a passionate team of developers dedicated to crafting amazing web applications. 
            Our focus is on <span className="font-semibold text-green-700">clean code</span>, 
            <span className="font-semibold text-green-700"> modern design</span>, and 
            <span className="font-semibold text-green-700"> top-notch performance</span>.
          </p>

          {/* Team Section */}
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Card */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <UserClass name="Naresh" location="Pune" contact="naresh@example.com" />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <UserClass name="Jane" location="Bangalore" contact="jane@example.com" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;
