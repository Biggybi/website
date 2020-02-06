var projects = document.getElementsByClassName('project');

Array.from(projects).forEach(function(project){
	project.addEventListener('mouseenter', function(e){
		if (e.target.className !== 'project') {
			return ;
		}
		const activeUrl = e.target.lastElementChild;
		activeUrl.classList.add('giturl_active');
		activeUrl.classList.remove('giturl');
	})
	project.addEventListener('mouseleave', function(e){
		if (e.target.className !== 'project')
			return ;
		const activeUrl = e.target.lastElementChild;
		activeUrl.classList.remove('giturl_active');
		activeUrl.classList.add('giturl');
	})
});
