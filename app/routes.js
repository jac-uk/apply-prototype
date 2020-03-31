const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// 'eligibility-router' page does not exist and use same url for form action
router.post('/submit-application/v1/eligibility-router', function (req, res) {
	if (
		// if the session data called 'qualified' has a value (i.e. it exists) AND the session data called 'qualified' has a value of "no"
		(req.session.data['qualified'] && (req.session.data['qualified'] == "no")) || 
		(req.session.data['character'] && (req.session.data['character'] == "no")) ||  
		(req.session.data['retirement'] && (req.session.data['retirement'] == "no")) ||  
		(req.session.data['citizenship'] && (req.session.data['citizenship'] == "no") 
  		) 
	){
	res.redirect('/submit-application/v1/eligibility-no')
		} else {
    	// everything is either blank or yes
		res.redirect('/submit-application/v1/eligibility-yes')
		}
	})

module.exports = router

