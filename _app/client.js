const choo = require('choo')
const app = choo()

app.router(['/', require('./pages/home')])

const tree = app.start()

document.body.appendChild(tree)
