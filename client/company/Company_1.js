FlowRouter.route('/Company_1', {
  action: function() {
    BlazeLayout.render('Company_1');
  }
})

Template.Company_1.onRendered(function() {
  run = function () {
    feather.replace()

  };

  Meteor.setTimeout(function(){
    run()
  }, 1000)
});
