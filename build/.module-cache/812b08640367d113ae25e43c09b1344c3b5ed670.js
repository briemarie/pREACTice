//Getting started
var HelloSomebody = React.createClass({displayName: "HelloSomebody",
  //render is basically the template for the component
  render: function(){
    return (
      React.createElement("div", null, 
      "Hello Somebody!"
      )
    )
  }
});

//First argument = component you want to render, second argument = the DOM node where you want to render the component
React.render(React.createElement(HelloSomebody, null), document.getElementById('app'));

//learning about setting state
var HelloMe = React.createClass({displayName: "HelloMe",
  //getInitialState returns an object which contains the state or data for component
  getInitialState: function(){
    return {
      username: 'briemarie'
    }
  },
  render: function(){
    return (
      React.createElement("div", null, 
      "Hey ", this.state.username
      )
    )
  }
});

//updating state change
var HelloMe = React.createClass({displayName: "HelloMe",
  getInitialState: function(){
    return {
      username: 'briemarie'
    }
  },
  //handleChange invoked when user fills in text box
  handleChange: function(e){
    //setState- creates a new virtual DOM
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      React.createElement("div", null, 
      "Hey ", this.state.username, " ", React.createElement("br", null), 
      "Change name: ", React.createElement("input", {type: "text", value: this.state.username, onChange: this.handleChange})
      )
    )
  }
});

//props (data passed from parent to child)
var HelloMe = React.createClass({displayName: "HelloMe",
  render: function(){
    return (
      React.createElement("div", null, " Hello, ", this.props.name)
    )
  }
});

React.render(React.createElement(HelloMe, {name: "Brittney"}), document.getElementById('app'));

