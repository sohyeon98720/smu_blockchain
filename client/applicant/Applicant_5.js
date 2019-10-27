FlowRouter.route('/Applicant_5', {
  action: function() {
    BlazeLayout.render('Applicant_5');
  }
})

Template.Applicant_5.onRendered(function() {
  run = function () {
    feather.replace()

  };
  DB_RESUME.find({gender: '남성'})
  console.log(birth);



  Meteor.setTimeout(function(){
    run()
  }, 1000)

});
