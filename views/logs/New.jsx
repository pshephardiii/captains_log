const React = require('react')

function New(props) {
    return(
      <div>
        <h1>Captain's Log - New Entry</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title"/><br/>
          Entry: <input type="textarea" name="entry"/><br/>
          Ship is Broken: <input type="checkbox" name="shipIsBroken"/><br/>
          <input type="submit" value="Create Log"/>
        </form>
      </div>
    )
}

module.exports = New