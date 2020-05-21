const express = require('express')
const router = express.Router()

// Start folder specific routes
//router.use('/v1', require('./views/v1/_routes'));
// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));

module.exports = router