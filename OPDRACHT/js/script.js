document.getElementById("dropdownButton").onclick = dropdownMenu;
document.getElementById("navBarDropdownButton").onclick = navBarDropdownMenu;

function dropdownMenu() {
	document.getElementById("dropdown-content").classList.toggle("showDropdown"); 
}

function navBarDropdownMenu() {
	document.getElementById("navBarDropdownButton").classList.toggle("showNavBarDropDown");
	document.getElementById("navBarDropdown").classList.toggle("showNavBarDropDown");
	document.getElementById("navBarDropdown-content").classList.toggle("showNavBarDropDown"); 
}