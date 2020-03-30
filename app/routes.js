const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/submit-application/v1/eligibility-router', function (req, res) {
	if (
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

