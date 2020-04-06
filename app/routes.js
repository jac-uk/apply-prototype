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

router.post('/submit-application/v1/caution-conviction-router', function (req, res) {
	
	let cautionConviction = req.session.data['caution-conviction']
	
	if (cautionConviction === 'Yes') {
		res.redirect('/submit-application/v1/caution-conviction-details')
	} else {
		res.redirect('/submit-application/v1/penalty-notice')
	}
})

router.post('/submit-application/v1/penalty-notice-router', function (req, res) {
	
	let penaltyNotice = req.session.data['penalty-notice']
	
	if (penaltyNotice === 'Yes') {
		res.redirect('/submit-application/v1/penalty-notice-details')
	} else {
		res.redirect('/submit-application/v1/driving-offences')
	}
})

router.post('/submit-application/v1/driving-offences-router', function (req, res) {
	
	let drivingOffence = req.session.data['driving-conviction']
	
	if (drivingOffence === 'Yes') {
		res.redirect('/submit-application/v1/driving-offences-details')
	} else {
		res.redirect('/submit-application/v1/endorsement-notices')
	}
})

router.post('/submit-application/v1/endorsement-notices-router', function (req, res) {
	
	let endorsementNotice = req.session.data['endorsement-notice']
	
	if (endorsementNotice === 'Yes') {
		res.redirect('/submit-application/v1/endorsement-notices-details')
	} else {
		res.redirect('/submit-application/v1/declared-bankrupt')
	}
})

router.post('/submit-application/v1/declared-bankrupt-router', function (req, res) {
	
	let declaredBankrupt = req.session.data['bankrupt']
	
	if (declaredBankrupt === 'Yes') {
		res.redirect('/submit-application/v1/declared-bankrupt-details')
	} else {
		res.redirect('/submit-application/v1/late-returns')
	}
})

router.post('/submit-application/v1/late-returns-router', function (req, res) {
	
	let lateReturns = req.session.data['late-returns']
	
	if (lateReturns === 'Yes') {
		res.redirect('/submit-application/v1/late-returns-details')
	} else {
		res.redirect('/submit-application/v1/professional-proceeds')
	}
})

router.post('/submit-application/v1/professional-proceeds-router', function (req, res) {
	
	let professionalProceeds = req.session.data['professional-proceeds']
	
	if (professionalProceeds === 'Yes') {
		res.redirect('/submit-application/v1/professional-proceeds-details')
	} else {
		res.redirect('/submit-application/v1/professional-complaints')
	}
})

router.post('/submit-application/v1/professional-complaints-router', function (req, res) {
	
	let professionalComplaints = req.session.data['professional-complaints']
	
	if (professionalComplaints === 'Yes') {
		res.redirect('/submit-application/v1/professional-complaints-details')
	} else {
		res.redirect('/submit-application/v1/other-issues')
	}
})

router.post('/submit-application/v1/other-issues-router', function (req, res) {
	
	let otherIssues = req.session.data['other-issues']
	
	if (otherIssues === 'Yes') {
		res.redirect('/submit-application/v1/other-issues-details')
	} else {
		res.redirect('/submit-application/v1/task-list')
	}
})

module.exports = router

