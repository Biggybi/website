function projectTemplate(projectTemplate) {
	return `<div class="project" id="${projectTemplate.id}">
		<a class="projecturl" href="#"></a>
		<div class="projectHeader">
			<h3 class="lang_en lang_active">${projectTemplate.name_en}</h3>
			<h3 class="lang_fr lang_inactive">${projectTemplate.name_fr}</h3>
			<h4>${projectTemplate.type.join(" - ")}</h4>
		</div>
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
