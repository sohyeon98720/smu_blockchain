FlowRouter.route('/Company_2', {
  action: function() {
    BlazeLayout.render('Company_2');
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
