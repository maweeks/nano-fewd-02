var bio = {
  "name": "Matt Weeks",
  "role": "Cloud/Web Developer",
  "welcomeMessage": "Please contact me if you would like to get in touch.",
  "contacts": {
    "mobile": "(+44) 7515 772 568",
    "email": "m_weeks@hotmail.co.uk",
    "github": "maweeks",
    "twitter" : "@mad_mn",
    "location": "Canterbury, UK"
  },
  "skills": [
    "CSS", "HTML", "JavaScript", "Java", "Visual Basic"
  ],
  "pic": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/05e/259/3d8e9fe.jpg"
};

var education = {
  "schools": [
    {
      "name": "University of Kent",
      "location": "Canterbury, Kent, UK",
      "degree": "BSc",
      "majors": ["Computer Science"],
      "dates": "Sep 2011 - Jun 2015",
      "url": "http://www.kent.ac.uk/"
    },
    {
      "name": "Poole Grammar School",
      "location": "Poole, Dorset, UK",
      "degree": "A Levels",
      "majors": ["Computing", " Maths", " Chemistry"],
      "dates": "Sep 2005 - Jul 2011",
      "url": "http://www.poolegrammar.com/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "Sep 2014 - Present",
      "description" : "Awesome thing",
      "url": "https://www.udacity.com/course/nd001",
      "includedCourses" : [
        {
          "course": "Intro to HTML and CSS",
          "link": "https://www.udacity.com/course/ud304"
        },
        {
          "course": "Version Control with Git and GitHub",
          "link": "https://www.udacity.com/course/ud775"
        },
        {
          "course": "JavaScript Basics",
          "link": "https://www.udacity.com/course/ud804"
        },
        {
          "course": "Intro to jQuery",
          "link": "https://www.udacity.com/course/ud245"
        },
        {
          "course": "Object-Oriented Javascript",
          "link": "https://www.udacity.com/course/ud015"
        },
        {
          "course": "HTML5 Canvas",
          "link": "https://www.udacity.com/course/ud292"
        },
        {
          "course": "Website Performance Optimization",
          "link": "https://www.udacity.com/course/ud884"
        },
        {
          "course": "Intro to AJAX",
          "link": "https://www.udacity.com/course/ud110"
        },
        {
          "course": "Javascript Design Patterns",
          "link": "https://www.udacity.com/course/ud989"
        },
        {
          "course": "Javascript Testing",
          "link": "https://www.udacity.com/course/ud549"
        }
      ]
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "KentProjects - University of Kent",
      "dates": "Sep 2014 - May 2015",
      "description": "The solution to my undergraduate final year group project. Creating a system that could replace the existing system for that enables students to get into groups, choose their projects and get them approved by the respective supervisors in as simple a way as possible.",
      "images": [],
      "link" : "http://kentprojects.com/"
    },
    {
      "title": "Feed Reader Testing - FEWD Nanodegree Project 6",
      "dates": "May 2015",
      "description": "Given a prewritten website, the task was to generate tests to check that all required aspects of the website are working correctly automatically using Jasmine.",
      "images": [],
      "link" : "http://maweeks.github.io/nano-fewd-06/"
    },
    {
      "title": "Neighborhood Map - FEWD Nanodegree Project 5",
      "dates": "Apr 2015",
      "description": "The purpose of this project was to develop a neighborhood map application that can retrieve third-party data and highlight specific locations.",
      "images": [],
      "link" : "http://maweeks.github.io/nano-fewd-05/"
    },
    {
      "title": "Web Optimization - FEWD Nanodegree Project 4",
      "dates": "Feb 2015",
      "description": "The purpose of this project was to optimize a specified website that contains multiple optimization and performance related issues to achieve 60 fps and a target PageSpeed score.",
      "images": [],
      "link" : "http://maweeks.github.io/nano-fewd-04/"
    },
    {
      "title": "Frogger Clone - FEWD Nanodegree Project 3",
      "dates": "Jan 2015",
      "description": "The game is called 'Let's go swimming!' The purpose of this project was to create a clone of the popular arcade game Frogger given the visual assets and the game engine. In this version you have to get the player to water avoiding the bugs, if you get hit by a bug you lose, the number of times you reach the water is your score.",
      "images": [],
      "link" : "http://maweeks.github.io/nano-fewd-03/"
    },
    {
      "title": "Interactive Resume - Nanodegree FEWD Project 2",
      "dates": "Oct 2014",
      "description": "A webpage to showcase my skills, education and past work.",
      "images": [],
      "link" : "http://maweeks.github.io/nano-fewd-02/"
    },
    {
      "title": "Portfolio - FEWD Nanodegree Project 1",
      "dates": "Sep 2014",
      "description": "A portfolio created using CSS and HTML to showcase my work.",
      "images": [],
      "link" : "http://maweeks.github.io/nano-fewd-01/"
    },
    {
      "title": "AVOS - Cisco Systems",
      "dates": "Jan 2014 - May 2014",
      "description": "A visualization to improve visibily for OpenStack.",
      "images": [],
      "link" : "http://www.slideshare.net/ddutta1/openstack-atlanta-2014predictiveanalytics"
    }
  ]
};

var skills = [
  {"skill": "C++", "level": "1"},
  {"skill": "CSS", "level": "4"},
  {"skill": "Git", "level": "3"},
  {"skill": "HTML", "level": "4"},
  {"skill": "Java", "level": "4"},
  {"skill": "JavaScript", "level": "3"},
  {"skill": "Visual Basic", "level": "4"}
]

var work = {
  "jobs": [
    {
      "employer" : "Cisco Systems",
      "title" : "Cloud Developer",
      "location" : "San Jose, CA, USA",
      "dates" : "Aug 2013 - Jul 2014",
      "description" : "Working on the OpenSource project OpenStack, projects include creating a visualization tool to give greater visibility of the stack.",
      "link" : "http://lnkd.in/dMcQJ2J"
    }
  ]
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  $("#topContacts").append(bio.getContacts());

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
  	$("#header").append(HTMLskillsStart);
  	var formattedSkill = "";
  	for(var i = 0; i < bio.skills.length - 1; i++) {
  	  	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  	  	$("#skills").append(formattedSkill);
  	}
  }
}

bio.getContacts = function() {
  var formattedContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
  formattedContacts += HTMLemail.replace("%data%", bio.contacts.email).replace("#", "mailto:" + bio.contacts.email);
  formattedContacts += HTMLgithub.replace("%data%", bio.contacts.github).replace("#", "https://github.com/" + bio.contacts.github);
  formattedContacts += HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#", "https://twitter.com/" + bio.contacts.twitter);
  formattedContacts += HTMLlocation.replace("%data%", bio.contacts.location);
  return formattedContacts;
}

bio.displayFooter = function() {
  $("#footerContacts").append(bio.getContacts());
}

work.display = function() {
	for(job in work.jobs) {
		$("#workContent").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#",work.jobs[job].link);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedJob);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projectsContent").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].link);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {
  // Add schools
  for(school in education.schools) {
    $("#educationContent").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors)
    var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
    $(".education-entry:last").append(formattedSchool);
  }
  // Add online courses
  $("#educationContent").append(HTMLonlineClasses);
  for(course in education.onlineCourses) {
    $("#educationContent").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedSubCourses = "<br/>";
    for (subCourse in education.onlineCourses[course].includedCourses) {
      formattedSubCourses += HTMLonlineSubCourseTitle.replace("%data%", education.onlineCourses[course].includedCourses[subCourse].course).replace("#", education.onlineCourses[course].includedCourses[subCourse].link);
    }
    var formattedCourse = formattedTitle + formattedSchool + formattedDates + formattedSubCourses;
    $(".education-entry:last").append(formattedCourse);
  }
}

skills.display = function() {
  $("#chartContent").append(HTMLskillsChartStart);

  // var data = [4, 8, 15, 16, 23, 42];

  var x = d3.scale.linear()
      .domain([0, 50])
      .range([0, 50]);

  d3.select("#skillsChart")
    .selectAll("div")
      .data(skills)
    .enter().append("div")
      .attr("class", "skills-entry")
      .style("width", function(d) { return x(d.level*18) + "%"; })
      .text(function(d) { return d.skill; });
}

function displayMap() {
  $("#mapHolder").append(googleMap);
}

//Functions to fill page content.
bio.display();
work.display();
projects.display();
education.display();
skills.display();
displayMap();
bio.displayFooter();

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});

function locationizer(work_obj) {
  var locationArray = [];
  for (job in work_obj.jobs) {
    locationArray.push(work_obj.jobs[job].location);
  }
  return locationArray;
}

//Shows hidden content divs, hides shown content divs, and switch between plus and minus images.
function showHideDiv(divID) {
  if (document.getElementById(divID + "Content").style.display == "none") {
    document.getElementById(divID + "Content").style.display = "block";
    document.getElementById(divID + "SH").src = "images/icon-minus.png";
    if (divID == "map") { resizeMap(); }
  }
  else {
    document.getElementById(divID + "Content").style.display = "none";
    document.getElementById(divID + "SH").src = "images/icon-plus.png";
  }
}

//Google maps breaks if container size is changed while map is not shown until it is shown again.
//This fixes that issue.
function resizeMap() {
  google.maps.event.trigger(map, 'resize');
}