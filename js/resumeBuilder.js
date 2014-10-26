var bio = {
	"name": "Matthew Weeks",
	"role": "Student",
	"contacts": {
		"email": "m_weeks@hotmail.co.uk",
		"github": "maweeks",
		"location": "Canterbury, UK",
		"mobile": "(+44) 7515 772 568",
		"twitter": "@mad_mn"
	},
	"welcomeMessage": "Welcome to my resume, please contact me if you have any questions.",
	"skills": [
	  "Java", "JavaScript", "HTML", "CSS"
	],
	"bioPic": "http://nano.weeks.codes/img/logof-100.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#main").append(bio.skills);