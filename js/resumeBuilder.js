var bio = {
	"name": "Matthew Weeks",
	"role": "Student",
	"welcomeMessage": "Welcome to my resume, please contact me if you have any questions.",
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
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "Sep 2014",
			"url": "https://www.udacity.com/course/ud304"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": "Oct 2014",
			"url": "https://www.udacity.com/course/ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "Oct 2014",
			"url": "https://www.udacity.com/course/ud804"
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

function formatContact() {
  var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
  formattedContact += HTMLemail.replace("%data%", bio.contacts.email);
  formattedContact += HTMLgithub.replace("%data%", bio.contacts.github);
  formattedContact += HTMLtwitter.replace("%data%", bio.contacts.twitter);
  formattedContact += HTMLlocation.replace("%data%", bio.contacts.location);
  return formattedContact;
}

function displayBio() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  $("#topContacts").append(formatContact());

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
displayBio();

function displayWork() {
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
displayWork()

function displayProjects() {
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
displayProjects();

function displayEducation() {
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
displayEducation();

function displayMap() {
  $("#mapDiv").append(googleMap);
}
displayMap()

function displayFooterContacts() {
  $("#footerContacts").append(formatContact());
}
displayFooterContacts();





function hideExcess(){
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
}