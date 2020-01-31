var project_template = `
	<div class="project">
	<h3> ${project_json.name} </h3>
	<a class="projecturl" href="#"></a>
	<div class="projectinner">
	<p> ${project_json.type} </p>
	<div class="giturl">
	<a class="gitlaburl" href=" ${project_json.giturl.laburl} ">
	<img alt="" src="icons/gitlab/gitlab-icon-1-color-black-rgb.png">
	</a>
	<a class="githuburl" href=" ${project_json.giturl.huburl} ">
	<img alt="" src="icons/GitHub-Mark/PNG/GitHub-Mark-32px.png">
	</a>
	</div>
	</div>
	</div>
	`;

function one_project_html(project_json) {
var project_html = [];
	project_html.push('<div class="project">',
		'<h3>', project_json.name, '</h3>',
		'<a class="projecturl" href="#"></a>',
		'<div class="projectinner">',
		'<p>', project_json.type, '</p>',
		'<div class="giturl">',
		'<a class="gitlaburl" href="', project_json.giturl.laburl, '">',
		'<img alt="" src="icons/gitlab/gitlab-icon-1-color-black-rgb.png">',
		'</a>',
		'<a class="githuburl" href="', project_json.giturl.huburl, '">',
		'<img alt="" src="icons/GitHub-Mark/PNG/GitHub-Mark-32px.png">',
		'</a>',
		'</div>',
		'</div>',
		'</div>');
	project_html = project_html.join('');
	return (project_html);
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(xhttp.responseText);
		var projects = response.projects;

		var projects_html = '';
		var i = -1;
		while (projects[++i]){
			projects_html += one_project_html(projects[i]);
		}
		document.getElementById('project_wrap').innerHTML = projects_html;
	}
};
xhttp.open("GET", "json/project.json", true);
xhttp.send();

