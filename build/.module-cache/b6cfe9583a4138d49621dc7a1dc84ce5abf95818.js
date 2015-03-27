var HelloSomebody = React.createClass({displayName: "HelloSomebody",
  render: function(){
    return (
      React.createElement("div", null,
      "Hello Somebody!"
      )
    )
  }
});

React.render(React.createElement(HelloSomebody, null), document.getElementById('app'));