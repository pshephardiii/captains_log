const React = require('react')

function Index(props) {
  return(
    <div>
      <h1>Captain's Log - Index</h1>
      <a href="/logs/new">Update Captain's Log</a>
      <ul>
        {
          props.logs.map((log) => {
            return(
              <li key={log._id}>
                <a href={`/logs/${log._id}`}>{log.title}</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value={"Delete this entry"}/>
                </form>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

module.exports = Index