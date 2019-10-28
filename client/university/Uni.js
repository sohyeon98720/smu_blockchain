FlowRouter.route('/Uni', {
  action: function() {
    BlazeLayout.render('Uni');
  }
})
Template.Uni.onRendered(function() {
  run = function () {
    feather.replace()

  };
  Meteor.setTimeout(function(){
    run()
  }, 1000)
});

Template.Uni.helpers({
  students: function() {
    return Meteor.users.find({"profile.uniApply":true});

  }
})



