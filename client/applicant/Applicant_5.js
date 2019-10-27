FlowRouter.route('/Applicant_5', {
  action: function() {
    BlazeLayout.render('Applicant_5');
  }
})

Template.Applicant_5.onRendered(function() {
  run = function () {
    feather.replace()

  };
  Meteor.setTimeout(function(){
    run()
  }, 1000)

});

Template.Applicant_5.helpers({
  userInfo: function() {
    return Meteor.users.findOne({_id:Meteor.user()._id});
  }
})
