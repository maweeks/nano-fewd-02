var bio = {
  "name": "Matthew Weeks",
  "role": "Web Developer",
  "welcomeMessage": "Please contact me if you would like to get in touch.",
  "contacts": {
    "mobile": "(+44) 7515 772 568",
    "email": "m_weeks@hotmail.co.uk",
    "github": "maweeks",
    "twitter": "@mad_mn",
    "location": "Canterbury, UK"
  },
  "skills": [
    "Java", "Visual Basic", "JavaScript", "HTML", "CSS"
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
      "majors": ["Chemistry", "Computing", "Maths"],
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
      "url": "https://www.udacity.com/course/ud304",
      "includedCourses" : [
        {"course": "Intro to HTML and CSS", "dates" : "Sep 2014", "link": "https://www.udacity.com/course/ud304"},
        {"course": "Version Control with Git and GitHub", "dates" : "Sep 2014", "link": "https://www.udacity.com/course/ud775"},
        {"course": "JavaScript Basics", "dates" : "Oct 2014", "link": "https://www.udacity.com/course/ud804"},
        {"course": "Intro to jQuery", "dates" : "Nov 2014", "link": "https://www.udacity.com/course/ud245"}
      ]
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "AVOS",
      "dates": "Jan 2014 - May 2014",
      "description": "A visualization to improve visibily for OpenStack.",
      "images": []
    },
    {
      "title": "Portfolio",
      "dates": "Sep 2014",
      "description": "A portfolio created using CSS and HTML to showcase my work.",
      "images": []
    },
    {
      "title": "Interactive Resume",
      "dates": "Oct 2014",
      "description": "A webpage to show my skills, education and past work.",
      "images": []
    }
  ]
};

var skills = [
  {"skill": "C++", "level": "1"},
  {"skill": "CSS", "level": "4"},
  {"skill": "HTML", "level": "4"},
  {"skill": "Java", "level": "4"},
  {"skill": "JavaScript", "level": "3"},
  {"skill": "Visual Basic", "level": "4"}
]

var work = {
  "jobs": [
    {
      "employer": "Cisco Systems",
      "title": "Cloud Developer",
      "location": "San Jose, CA, USA",
      "dates": "Aug 2013 - Jul 2014",
      "description": "Working on the OpenSource project OpenStack, projects include creating a visualization tool to give greater visibility of the stack."
    }
  ]
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLgithub.replace("%data%", bio.contacts.github) + HTMLtwitter.replace("%data%", bio.contacts.twitter) + HTMLlocation.replace("%data%", bio.contacts.location));

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

  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLgithub.replace("%data%", bio.contacts.github) + HTMLtwitter.replace("%data%", bio.contacts.twitter) + HTMLlocation.replace("%data%", bio.contacts.location));
}

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
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
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
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
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors)
    var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
    $(".education-entry:last").append(formattedSchool);
  }
  // Add online courses
  $(".education-entry:last").append(HTMLonlineClasses);
  for(course in education.onlineCourses) {
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    var formattedCourse = formattedTitle + formattedSchool + formattedDates + formattedURL;
    $(".education-entry:last").append(formattedCourse);
  }
}

skills.display = function() {
  for(skill in skills) {
    $("#skillsChart").append(HTMLskillsChartStart);
    var formattedSkillSkill = HTMLskillsChartSkill.replace("%data%", skills[skill].skill);
    var formattedSkillLevel = HTMLskillsChartLevel.replace("%data%", skills[skill].level);
    var formattedSkill = formattedSkillSkill + formattedSkillLevel;
    $(".skills-entry:last").append(formattedSkill);
  }
}

function displayMap() {
  $("#mapDiv").append(googleMap);
}

//Functions to fill page content.
bio.display();
work.display();
projects.display();
education.display();
skills.display();
displayMap();

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