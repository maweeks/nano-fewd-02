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
	]
};

var education = {
	"schools": [
        {
        	"name": "Poole Grammar School",
        	"location": "Poole, Dorset, UK",
        	"degree": "A Levels",
        	"majors": ["Chemistry", "Computer Science", "Maths"],
        	"dates": "Sep 2005 - Jul 2011",
        	"url": "http://www.poolegrammar.com/"
        },
        {
        	"name": "University of Kent",
        	"location": "Canterbury, Kent, UK",
        	"degree": "BSc",
        	"majors": ["Computer Science"],
        	"dates": "Sep 2011 - Jun 2015",
        	"url": "http://www.kent.ac.uk/"
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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = "";
	for(var i = 0; i < bio.skills.length - 1; i++) {
	  	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	  	$("#skills").append(formattedSkill);

	}
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedJob);
	}
}
displayWork()

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






