FlowRouter.route('/Company_2', {
  action: function() {
    BlazeLayout.render('Company_2');
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

Template.Company_2.helpers({
  // data:function(){
  //   return Meteor.users.find({comApply:true}).fetch();
  // },
  data2:function() {

    //return Meteor.users.find({_id:Meteor.user()._id}).fetch();
    //return Meteor.users.find({profile:{comApply:true}}).fetch();
    return Meteor.users.find({"profile.submitAll":true});

  }

})
