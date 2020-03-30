const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/submit-application/v1/eligibility-yes', function (req, res) {

	let qualifiedEligible = req.session.data['qualified']
	
		if (qualifiedEligible === 'false') {
			res.redirect('/submit-application/v1/eligibility-no')
		} else {
			res.redirect('/submit-application/v1/eligibility-yes')
		}
	})

router.post('/submit-application/v1/eligibility-yes', function (req, res) {

	let characterEligible = req.session.data['character']
	
		if (characterEligible === 'false') {
			res.redirect('/submit-application/v1/eligibility-no')
		} else {
			res.redirect('/submit-application/v1/eligibility-yes')
		}
	})

router.post('/submit-application/v1/eligibility-yes', function (req, res) {

	let retirementEligible = req.session.data['retirement']
	
		if (retirementEligible === 'false') {
			res.redirect('/submit-application/v1/eligibility-no')
		} else {
			res.redirect('/submit-application/v1/eligibility-yes')
		}
	})

router.post('/submit-application/v1/eligibility-yes', function (req, res) {

	let citizenshipEligible = req.session.data['citizenship']

		if (citizenshipEligible === 'false') {
			res.redirect('/submit-application/v1/eligibility-no')
		} else {
			res.redirect('/submit-application/v1/eligibility-yes')
		}
	})

module.exports = router

