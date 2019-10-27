FlowRouter.route('/Applicant_4', {
  action: function() {
    BlazeLayout.render('Applicant_4');
  }
})

Template.Applicant_4.onRendered(function() {
  run = function () {
    feather.replace()

    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  };


  Meteor.setTimeout(function(){
    run()
  }, 1000)
});



// //1.db에 비로 넣기
// DB_RESUME.insert({
//   firstNmae: fistName.
//   credit: credit;
// });
