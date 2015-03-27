//Getting started
var HelloSomebody = React.createClass({
  //render is basically the template for the component
  render: function(){
    return (
      <div>
      Hello Somebody!
      </div>
    )
  }
});

//First argument = component you want to render, second argument = the DOM node where you want to render the component
React.render(<HelloSomebody/>, document.getElementById('app'));

//learning about setting state
var HelloMe = React.createClass({
  //getInitialState returns an object which contains the state or data for component
  getInitialState: function(){
    return {
      username: 'briemarie'
    }
  },
  render: function(){
    return (
      <div>
      Hey {this.state.username}
      </div>
    )
  }
});

//updating state change
var HelloMe = React.createClass({
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
      <div>
      Hey {this.state.username} <br />
      Change name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});

//props (state passed from parent to child)
var HelloMe = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});

React.render(<HelloMe name="Brittney"/>, document.getElementById('app'));

//hierarchy
var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Brittney Awesome',
      friends: ['Karl', 'Kalen', 'KayKay', 'Keke', 'Kimi']
    }
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

//child component
var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return (
        <li> {friend} </li>
      )
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

