$(document).ready(function (){
	$('.burger_menu').click(function(event){
		$('.nav, .ann, .right_content, .left_b_divs, .messages, .courses, .main_nav, .nav_text, .nav_point, .nav_footer, .user_name, .location, .location_text, .activity, .user, .user_ava, .right_b_divs, .calendar').toggleClass('active');
	});
});

$(document).ready(function(){
	$.getJSON("data_ann.json", function (data){
		var data_v = '';
		$.each(data, function (key, value){
			data_v += '<div class="ann_c '+value.pearson+'">';
			data_v += '<div class="views">';
			data_v += '<h3>'+value.views+'</h3>';
			data_v += '<img src="img/view.png" alt="view">';
			data_v += '</div>';
			data_v += '<div class="ann_c_text">';
			data_v += '<h2>'+value.t_text+'</h2>';
			data_v += '<p>'+value.b_text+'</p>';
			data_v += '</div>';
			data_v += '</div>';
		});
		$('#ann_content').append(data_v);
	});
});

function generate_year_range(start, end) {
	var years = "";
	for (var year = start; year <= end; year++) {
		years += "<option value='" + year + "'>" + year + "</option>";
	}
	return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
	months = monthDefault;
	days = dayDefault;
} else if (lang == "id") {
	months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
	months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
	days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
	months = monthDefault;
	days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
	$dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function previous() {
	currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
	currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function jump() {
	currentYear = parseInt(selectYear.value);
	currentMonth = parseInt(selectMonth.value);
	showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

	var firstDay = ( new Date( year, month ) ).getDay();

	tbl = document.getElementById("calendar-body");


	tbl.innerHTML = "";


	monthAndYear.innerHTML = months[month] + " " + year;
	selectYear.value = year;
	selectMonth.value = month;

	// creating all cells
	var date = 1;
	for ( var i = 0; i < 6; i++ ) {

		var row = document.createElement("tr");


		for ( var j = 0; j < 7; j++ ) {
			if ( i === 0 && j < firstDay ) {
				cell = document.createElement( "td" );
				cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			} else if (date > daysInMonth(month, year)) {
				break;
			} else {
				cell = document.createElement("td");
				cell.setAttribute("data-date", date);
				cell.setAttribute("data-month", month + 1);
				cell.setAttribute("data-year", year);
				cell.setAttribute("data-month_name", months[month]);
				cell.className = "date-picker";
				cell.innerHTML = "<span>" + date + "</span>";

				if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
					cell.className = "date-picker selected";
				}
				row.appendChild(cell);
				date++;
			}


		}

		tbl.appendChild(row);
	}

}

function daysInMonth(iMonth, iYear) {
	return 32 - new Date(iYear, iMonth, 32).getDate();
}