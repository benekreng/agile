// function to see if pre-loaded data is selected to update the nav bar
const dropDownMenu = document.getElementById("dataSelectorDropDown")
const navBarElement = document.getElementById("navBar1");


dropDownMenu.addEventListener("change", function(e)
{
  if(dropDownMenu.value == "Pre_Loaded_Data")
  {
    navBarElement.style.backgroundColor = "red"

  }
  else
  {
    navBarElement.style.backgroundColor = "inherit"
  }
}
)

// File selected is located on the fileSelector.js file