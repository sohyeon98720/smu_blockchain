FlowRouter.route('/Applicant_5/:_id', {
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
    var _id=FlowRouter.getParam('_id')
    return Meteor.users.findOne({_id: _id});
  }
})
