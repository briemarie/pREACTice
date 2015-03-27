//Getting started
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

//learning about setting state
var HelloMe = React.createClass({displayName: "HelloMe",
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
  //handleChange
  handleChange: function(e){
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

