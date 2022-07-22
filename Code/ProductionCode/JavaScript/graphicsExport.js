// Function to export the user generated graphics
function exportGraphic()
{
  // find the export option that the use has selected
  let exportOption = document.getElementsByName('dataExport');
  for(let x = 0; x < exportOption.length; x++)
  {
    if(exportOption[x].checked == true)
    {
      var fileExtension = exportOption[x].value;
      break;
    }
  }

  // set the string used for data export
  let exportStr = "image/";
  exportStr += fileExtension;

  // find chart and convert to URL
  let graphArea = document.getElementById("chart");
  let img = graphArea.toDataURL("image/png");

  // create and write new graphic to new tab
  var newTab = window.open("")
  newTab.document.write('<img src="'+img+'"/>')
}