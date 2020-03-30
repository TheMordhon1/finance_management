$(".get").click(function () {
  $(".menu").removeClass("active");
  $(this).parent().addClass("active");
});

function showSet() {
  const on = document.getElementById("side");
  on.classList.toggle("on");
}

function showSide() {
  const move = document.getElementById("sidebar");
  move.classList.toggle("move");
}

// Chart

let ctx = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontfamily =
  'Roboto';
Chart.defaults.global.defaultFontSize =
  14;
Chart.defaults.global.defaultFontColor =
  '#fcfcfc';
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
    labels: ['IKEA', 'IPHONE', 'BMW'],
    datasets: [{
      label: 'My Business',
      backgroundColor: [
        '#2B73DF',
        '#23BA44',
        '#B24343'
      ],
      borderWidth: 0,
      data: [30, 40, 30],
    }]

  },

  // Configuration options go here
  options: {
    legend: {
      position: 'right'
    }
  }
});