const home = require('./home')
const social = require('./social')
const about = require('./about')

const allRoutes = {
    home: home(),
    social: social(),
    about: about()
}

module.exports = allRoutes