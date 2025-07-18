/*
*
* <div id="parent">
*   <div id="child">
*     <h1 >I 'm h1 tag</h1>
*     <h2>I 'm h2 tag</h2>
*   </div>
*
*
*
*
*
*
*/



const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      [ // Wrap multiple children in an array
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [ // Wrap multiple children in an array
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
      ]
    )
  ]
);

//JSX


const element = React.createElement(
            'h1',
            { className: 'greeting',xyz:"abc" },
            'Namaste React'
        );
        console.log(element); //object
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);