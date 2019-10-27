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
    // return Meteor.users.find({UniApply: 'true', }).fetch();
    // return Meteor.users.find({p_Type: '상명대학교'}).fetch();
    return Meteor.users.find({_id:Meteor.user()._id}).fetch();
  },
  students2: function() {
    return Meteor.users.find({UniApply: 'true'}, {"p_Name": true, "birth": true, "email": true, "uni_Name": true, "uni_Author":true})[18].fetch();
  }

})
