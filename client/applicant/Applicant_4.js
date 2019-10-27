FlowRouter.route('/Applicant_4', {
  action: function() {
    BlazeLayout.render('Applicant_4');
  }
})

Template.Applicant_4.onRendered(function() {
  run = function () {
    feather.replace()

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
