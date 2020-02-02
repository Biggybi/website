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

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(xhttp.responseText);
		var projectsData = response.projects;
		document.getElementById('project_wrap').innerHTML = `
		${projectsData.map(projectTemplate).join('')} `
	}
};
xhttp.open("GET", "json/project.json", true);
xhttp.send();

var button_fr = document.getElementById('button_fr');
var button_en = document.getElementById('button_en');
var currentLang = "en"
button_fr.onclick = function() { switchLang('fr'); };
button_en.onclick = function() { switchLang('en'); };

function switchLang(lang) {
	if (currentLang === lang)
		return ;
	var currentButton = document.getElementById('button_' + currentLang);
	var switchButton = document.getElementById('button_' + lang);
	// var switchSummary = 'summary_' + lang;
	var summary = document.getElementsByClassName('summary');
	var i = -1;
	while (summary[++i])
	{
		if (lang == 'en')
			summary[i].textContent = projectsData[i].summary_en;
		else if (lang == 'fr')
			summary[i].textContent = projectsData[i].summary_fr;
	}
	switchButton.className = 'current_language'
	currentButton.className = ''
	currentLang = lang;
}

// function setupEvents()
// {
// }

// window.onload = function() { setupEvents()};
