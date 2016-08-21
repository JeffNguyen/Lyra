var React = require('react');

var BookList = React.createClass({

  render: function(){
    var list;
    if (this.props.matches){
      list = this.props.matches.map(function(match, index){
        var title = match.volumeInfo.title
        var authors = match.volumeInfo.authors
        var str = ''
        if (authors) {
          for (var i = 0; i < authors.length; i++){
            str += (authors[i] + ', ');
          }
        }
        str = str.slice(0, str.length - 2)
        console.log(str)
        return (
          <li key={index}>{title} - {str} </li>
        );
      });
    }
    return (
      <ul>
        {list}
      </ul>
    );
  }

});

module.exports = BookList