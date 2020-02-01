function projectTemplate(projectTemplate) {
return `
	<div class="project" id ="${projectTemplate.id}">
		<div class="projectHeader">
			<h3> ${projectTemplate.name} </h3>
			<h4> ${projectTemplate.type.join(" - ")} </h4>
		</div>
		<a class="projecturl" href="#"></a>
		<div class="projectinner">
			<div class="summary"> ${projectTemplate.summary} </div>
		</div>
		<div class="giturl">
			<a class="gitlaburl" href="${projectTemplate.giturl.laburl}">
				<img alt="gitlab" src="icons/gitlab/gitlab-icon-1-color-black-rgb.png"></a>
				<a class="githuburl" href="${projectTemplate.giturl.huburl}">
				<img alt="github" src="icons/GitHub-Mark/PNG/GitHub-Mark-32px.png"></a>
		</div>
	</div>
	`;
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

var summary = document.getElementsByClassName('summary');
console.log(summary);
// var summary_fr = document.getElementsByClassName("summary_fr");
var button_fr = document.getElementById('button_fr');
console.log(button_fr);
var button_en = document.getElementById('button_en');
console.log(button_en);

var currentLang = "en";
button_en.onclick = function() {
	if (currentLang !== "en")
	{
		var i = -1;
		while (summary[++i])
			summary[i].textContent = projectsData[i].summary;
		console.log("switch to en");
	}
	currentLang = "en";
}
button_fr.onclick = function() {
	if (currentLang !== "fr")
	{
		var i = -1;
		while (summary[++i])
			summary[i].textContent = projectsData[i].summary_fr;
		console.log("coucou");
		console.log("switch to fr");
	}
	currentLang = "fr"
}

// function setupEvents()
// {
// }

// window.onload = function() { setupEvents()};
