const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Recorder 
// 'eligibility-router' page does not exist and use same url for form action
router.all('/submit-application/recorder/eligibility-router', function (req, res) {
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

router.all('/submit-application/recorder/ethnic-group-router', function (req, res) {

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


// Senior Circuit Judge 
// 'eligibility-router' page does not exist and use same url for form action
router.all('/submit-application/scj/eligibility-router', function (req, res) {
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

router.all('/submit-application/scj/ethnic-group-router', function (req, res) {

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

router.all('/submit-application/scj/fee-paid-salaried-judge-router', function (req, res) {
	
	let feePaidSalariedJudge = req.session.data['fee-paid-salaried-judge']
	
	if (feePaidSalariedJudge === 'Yes') {
		res.redirect('sat-30-days')
	} else {
		res.redirect('quasi-judicial')
	}
})

router.all('/submit-application/scj/sat-30-days-router', function (req, res) {
	
	let sat30days = req.session.data['sat-30-days']
	
	if (sat30days === 'Yes') {
		res.redirect('task-list')
	} else {
		res.redirect('quasi-judicial')
	}
})

router.all('/submit-application/scj/least-30-days-appointment-router', function (req, res) {
	
	let least30DaysAppointment = req.session.data['least-30-days-appointment']
	
	if (least30DaysAppointment === 'Yes') {
		res.redirect('task-list')
	} else {
		res.redirect('acquired-skills-other')
	}
})

router.all('/submit-application/scj/quasi-judicial-router', function (req, res) {
	
	let quasiJudicial = req.session.data['quasi-judicial']
	
	if (quasiJudicial === 'Yes') {
		res.redirect('least-30-days-appointment')
	} else {
		res.redirect('acquired-skills-other')
	}
})

module.exports = router

