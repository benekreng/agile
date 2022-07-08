import './index.css'

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

var csvinput = $( "#csvinput" );
$( "#dataOptions" ).on( "click", function( event ) {
    var conceptName = $('#dataOptions').find(":selected").text();
    if(conceptName == 'Load CSV'){
        csvinput.show();
    } else{
        csvinput.hide();
    }
});