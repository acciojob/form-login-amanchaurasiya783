function getFormvalue() {
    //Write your code here
	let fname = document.getElementsByTagName("input")[0].value;
	let lname = document.getElementsByTagName("input")[1].value;
	let submit = document.getElementsByTagName("input")[2];
	alert(fname + " " + lname);
}