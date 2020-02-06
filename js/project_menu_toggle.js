// show git link on project hover
// const menu = document.getElementById('giturl');
// const projectwrap = document.getElementById('project_wrap');
// console.log("projectwrap = ");
// console.log(projectwrap);

// console.log("projects = ");
// console.log(projects);


// function toggle_project_url_menu() {
// 	console.log("hey");
// 	if (this.target.className !== 'project') {
// 		console.log(this.target.className);
// 		return ;
// 	}
// 	// Note: use siblings
// 	const activeUrl = this.target.parentElement.children[3];
// 	console.log(activeUrl);
// 	activeUrl.classList.add('giturl_active');
// 	activeUrl.classList.remove('giturl');
// }


// var i = -1;
// while (projects[++i])
// {
// 	projects[i].addEventListener('onmouseenter', toggle_project_url_menu());
// 	projects[i].addEventListener('mouseover', toggle_project_url_menu());
// 	// projects[i].addEventListener('onmouseenter', toggle_project_url_menu());
// }

// const projects = document.getElementsByClassName('project');
const projects = document.querySelectorAll('.project');
console.log(Array.from(projects));
console.log(projects);

// const test = document.getElementById('bsq');
// console.log(test);


Array.from(projects).forEach(function(project){
	console.log("coucou");
	console.log("project = ");
	console.log(project);
	// project.addEventListener('click', toggle_project_url_menu())
	project.addEventListener('mouseover', function(e){
		console.log("hey");
		if (e.target.className !== 'project') {
			console.log(e.target.className);
			return ;
		}
		// Note: use siblings
		const activeUrl = e.target.parentElement.children[3];
		console.log(activeUrl);
		activeUrl.classList.add('giturl_active');
		activeUrl.classList.remove('giturl');
	})
});
