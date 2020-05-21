const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// 'eligibility-router' page does not exist and use same url for form action
router.all('/submit-application/eligibility-router', function (req, res) {
	if (
		// if the session data called 'qualified' has a value (i.e. it exists) AND the session data called 'qualified' has a value of "no"
		(req.session.data['qualified-check'] && (req.session.data['qualified-check'] == "no")) || 
		(req.session.data['character-check'] && (req.session.data['character-check'] == "no")) ||  
		(req.session.data['retirement-check'] && (req.session.data['retirement-check'] == "no")) ||  
		(req.session.data['citizenship-check'] && (req.session.data['citizenship-check'] == "no") 
  		) 
	){
	res.redirect('eligibility-no')
		} else {
    	// everything is either blank or yes
		res.redirect('eligibility-yes')
		}
	})

router.all('/submit-application/ethnic-group-router', function (req, res) {

	let ethnicGroup = req.session.data['ethnic-group']
	
	if (ethnicGroup === 'Asian or Asian British') {
		res.redirect('ethnic-group-asian')
	}
	else if (ethnicGroup === 'Black, African, Black British or Caribbean') {
		res.redirect('ethnic-group-black')
	}
	else if (ethnicGroup === 'Mixed or multiple ethnic groups') {
		res.redirect('ethnic-group-mixed')
	}
	else if (ethnicGroup === 'White') {
		res.redirect('ethnic-group-white')
	} 
	else if (ethnicGroup === 'Another ethnic group') {
		res.redirect('ethnic-group-another')
	} else {
		res.redirect('gender')
	}
})

router.all('/submit-application/caution-conviction-router', function (req, res) {
	
	let cautionConviction = req.session.data['caution-conviction']
	
	if (cautionConviction === 'Yes') {
		res.redirect('caution-conviction-details')
	} else {
		res.redirect('penalty-notice')
	}
})

router.all('/submit-application/penalty-notice-router', function (req, res) {
	
	let penaltyNotice = req.session.data['penalty-notice']
	
	if (penaltyNotice === 'Yes') {
		res.redirect('penalty-notice-details')
	} else {
		res.redirect('driving-offences')
	}
})

router.all('/submit-application/driving-offences-router', function (req, res) {
	
	let drivingOffence = req.session.data['driving-conviction']
	
	if (drivingOffence === 'Yes') {
		res.redirect('driving-offences-details')
	} else {
		res.redirect('endorsement-notices')
	}
})

router.all('/submit-application/endorsement-notices-router', function (req, res) {
	
	let endorsementNotice = req.session.data['endorsement-notice']
	
	if (endorsementNotice === 'Yes') {
		res.redirect('endorsement-notices-details')
	} else {
		res.redirect('declared-bankrupt')
	}
})

router.all('/submit-application/declared-bankrupt-router', function (req, res) {
	
	let declaredBankrupt = req.session.data['bankrupt']
	
	if (declaredBankrupt === 'Yes') {
		res.redirect('declared-bankrupt-details')
	} else {
		res.redirect('late-returns')
	}
})

router.all('/submit-application/late-returns-router', function (req, res) {
	
	let lateReturns = req.session.data['late-returns']
	
	if (lateReturns === 'Yes') {
		res.redirect('late-returns-details')
	} else {
		res.redirect('professional-proceeds')
	}
})

router.all('/submit-application/professional-proceeds-router', function (req, res) {
	
	let professionalProceeds = req.session.data['professional-proceeds']
	
	if (professionalProceeds === 'Yes') {
		res.redirect('professional-proceeds-details')
	} else {
		res.redirect('professional-complaints')
	}
})

router.all('/submit-application/professional-complaints-router', function (req, res) {
	
	let professionalComplaints = req.session.data['professional-complaints']
	
	if (professionalComplaints === 'Yes') {
		res.redirect('professional-complaints-details')
	} else {
		res.redirect('other-issues')
	}
})

router.all('/submit-application/other-issues-router', function (req, res) {
	
	let otherIssues = req.session.data['other-issues']
	
	if (otherIssues === 'Yes') {
		res.redirect('other-issues-details')
	} else {
		res.redirect('task-list')
	}
})

module.exports = router

