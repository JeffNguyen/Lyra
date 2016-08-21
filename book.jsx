var React = require('react');
var ReactDOM = require('react-dom');
var Util = require('./util')
var BookList = require('./book_list')

var Book = React.createClass({

  getInitialState: function(){
    return {
      matches: []
    }
  },

  _onMessage: function(e){
    // if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    console.log('Searching for ' + text)

    // if the text is blank, do nothing
    if (text === "") return;

    // send text query to Google Books API
    Util.search(text, function(result){
      this.setState({matches: result['items']})
    }.bind(this))
  },

  render: function () {
    return(
      <div>
        <input placeholder="" onKeyUp={this._onMessage}/>
        <BookList matches={this.state.matches}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Book />, document.getElementById('main'));
});