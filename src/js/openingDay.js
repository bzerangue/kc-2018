const today = new Date();

const headingId = "openingDay";
const openingDay2018=new Date(today.getFullYear() + '-' +'03-29 00:00:00 GMT-0500' );

/*if (today.getMonth()==02 && today.getDate()>25) {
  openingDay2018.setFullYear(openingDay2018.getFullYear()+1);
}*/

const one_day=1000*60*60*24;
const counter=Math.ceil((openingDay2018.getTime()-today.getTime())/(one_day));

if (counter > 1) {
   document.getElementById(headingId).innerHTML = `${counter} days left until Opening Day!`;
} else if (counter == 1) {
   document.getElementById(headingId).innerHTML = `${counter} day left until Opening Day!`;
} else if (counter == 0) {
   document.getElementById(headingId).innerHTML = "Today is Opening Day!";
} else {
   document.getElementById(headingId).innerHTML = "This season is in full swing!";
}
