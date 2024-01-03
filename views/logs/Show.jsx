const React = require('react')

function Show(props) {
  return(
    <div>
      <h1>{props.log.title}</h1>
      <h2>{props.log.shipIsBroken ? 'The ship is broken' : 'The ship survives'}</h2>
      <a href='/logs'>Back to Index Page</a>
      <p>{props.log.entry}</p>
    </div>
  )
}

module.exports = Show