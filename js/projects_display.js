function projectTemplate(projectTemplate) {
	return `<div class="project" id="${projectTemplate.id}">
		<div class="projectHeader">
			<h3>${projectTemplate.name}</h3>
			<h4>${projectTemplate.type.join(" - ")}</h4>
		</div>
		<a class="projecturl" href="#"></a>
		<div class="projectinner">
			<div class="summary lang_en lang_active">${projectTemplate.summary_en}</div>
			<div class="summary lang_fr lang_inactive">${projectTemplate.summary_fr}</div>
		</div>
		<div class="giturl">
			<a class="gitlaburl" href="${projectTemplate.giturl.laburl}">
				<img alt="gitlab" src="icons/gitlab/gitlab-icon-1-color-black-rgb.png"></a>
				<a class="githuburl" href="${projectTemplate.giturl.huburl}">
				<img alt="github" src="icons/GitHub-Mark/PNG/GitHub-Mark-32px.png"></a>
		</div>
	</div>`;
}

// Note: for node
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var projectsData;
var xhttp = new XMLHttpRequest(projectsData);
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		projectsData = JSON.parse(xhttp.responseText).projects;
		document.getElementById('project_wrap').innerHTML =
			`${projectsData.map(projectTemplate).join('')}`
	}
};
xhttp.open("GET", "json/project.json", true);
xhttp.send();

var currentLang = "lang_en"
const flags = document.getElementById('language_pick');
console.log(flags);

flags.addEventListener('click', function(e){
	const activeFlag = document.querySelector('#language_pick .current_language');
	if (e.target.className === 'current_language')
		return ;
	if (e.target.className != 'notcurrent_language')
		return ;
	e.target.classList.add('current_language');
	e.target.classList.remove('notcurrent_language');
	activeFlag.classList.add('notcurrent_language');
	activeFlag.classList.remove('current_language');

	const activeLangText = document.getElementsByClassName('lang_active');
	Array.from(activeLangText).forEach(function(text){
		text.classList.add('lang_inactive');
		text.classList.remove('lang_active');
	})
	currentLang = e.target.id.substr(e.target.id.indexOf('_') + 1);
	const newLangText = document.getElementsByClassName('lang_' + currentLang);
	Array.from(newLangText).forEach(function(text) {
		text.classList.add('lang_active');
		text.classList.remove('lang_inactive');
	})
})
