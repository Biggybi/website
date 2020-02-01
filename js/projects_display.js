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
			<a class="gitlaburl" href=" ${projectTemplate.giturl.laburl} ">
				<img alt="" src="icons/gitlab/gitlab-icon-1-color-black-rgb.png">
			</a>
				<a class="githuburl" href=" ${projectTemplate.giturl.huburl} ">
				<img alt="" src="icons/GitHub-Mark/PNG/GitHub-Mark-32px.png">
			</a>
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

