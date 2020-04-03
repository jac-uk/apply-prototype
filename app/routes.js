const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// 'eligibility-router' page does not exist and use same url for form action
router.post('/submit-application/v1/eligibility-router', function (req, res) {
	if (
		// if the session data called 'qualified' has a value (i.e. it exists) AND the session data called 'qualified' has a value of "no"
		(req.session.data['qualified-check'] && (req.session.data['qualified-check'] == "no")) || 
		(req.session.data['character-check'] && (req.session.data['character-check'] == "no")) ||  
		(req.session.data['retirement-check'] && (req.session.data['retirement-check'] == "no")) ||  
		(req.session.data['citizenship-check'] && (req.session.data['citizenship-check'] == "no") 
  		) 
	){
	res.redirect('/submit-application/v1/eligibility-no')
		} else {
    	// everything is either blank or yes
		res.redirect('/submit-application/v1/eligibility-yes')
		}
	})

router.post('/submit-application/v1/criminal-offences-router', function (req, res) {
	// Get the answer from session data
	// The name between the quotes is the same as the 'name' attribute on the input elements
	// However in JavaScript we can't use hyphens in variable names
	
	let cautionConviction = req.session.data['caution-conviction']
	
	if (cautionConviction === 'Yes') {
		res.redirect('/submit-application/v1/task-list')
	} else {
		res.redirect('/submit-application/v1/fixed-penalty')
	}
})

module.exports = router

