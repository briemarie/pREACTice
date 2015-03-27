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

//props (state passed from parent to child)
var HelloMe = React.createClass({displayName: "HelloMe",
  render: function(){
    return (
      React.createElement("div", null, " Hello, ", this.props.name)
    )
  }
});

React.render(React.createElement(HelloMe, {name: "Brittney"}), document.getElementById('app'));

//hierarchy
var FriendsContainer = React.createClass({displayName: "FriendsContainer",
  getInitialState: function(){
    return {
      name: 'Brittney Awesome',
      friends: ['Karl', 'Kalen', 'KayKay', 'Keke', 'Kimi']
    }
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, " Name: ", this.state.name, " "), 
        React.createElement(ShowList, {names: this.state.friends})
      )
    )
  }
});

//child component
var ShowList = React.createClass({displayName: "ShowList",
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return (
        React.createElement("li", null, " ", friend, " ")
      )
    });
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, " Friends "), 
        React.createElement("ul", null, 
          listItems
        )
      )
    )
  }
});

