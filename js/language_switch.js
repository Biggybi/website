// var currentLang = "lang_en"
const flagsBlock = document.getElementById('language_pick');
// console.log(flags);

flagsBlock.addEventListener('click', function(e) {
	// check toggle
	if (e.target.className === 'current_language')
		return ;
	if (e.target.className != 'notcurrent_language')
		return ;

	// switch active flag
	const activeFlag = document.querySelector('#language_pick .current_language');
	e.target.classList.add('current_language');
	e.target.classList.remove('notcurrent_language');
	activeFlag.classList.add('notcurrent_language');
	activeFlag.classList.remove('current_language');

	// hide old language
	const activeLangTexts = document.getElementsByClassName('lang_active');
	Array.from(activeLangTexts).forEach(function(text){
		text.classList.add('lang_inactive');
		text.classList.remove('lang_active');
	})

	// display new language
	var newLang = e.target.id.substr(e.target.id.indexOf('_') + 1);
	const newLangText = document.getElementsByClassName('lang_' + newLang);
	Array.from(newLangText).forEach(function(text) {
		text.classList.add('lang_active');
		text.classList.remove('lang_inactive');
	})
})
