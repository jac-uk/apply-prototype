/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// MOJ Multi select component
new MOJFrontend.MultiSelect({
	container: $('.moj-multi-select__select-all-container'),
	checkboxes: $('.govuk-checkboxes__input')
});