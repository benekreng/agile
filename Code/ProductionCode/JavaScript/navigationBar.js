// function to see if pre-loaded data is selected to update the nav bar
const dropDownMenu = document.getElementById("dataSelectorDropDown")
const navBar1 = document.getElementById("navBar1");
const navBar2 = document.getElementById("navBar2");
const navBar3 = document.getElementById("navBar3");


dropDownMenu.addEventListener("change", function(e)
{
  if(dropDownMenu.value == "Pre_Loaded_Data")
  {
    navBar1.style.backgroundColor = "red"

  }
  else
  {
    navBar1.style.backgroundColor = "inherit";
    navBar2.style.backgroundColor = "inherit";
    navBar3.style.backgroundColor = "inherit";
  }
}
)

// File selected is located on the fileSelector.js file