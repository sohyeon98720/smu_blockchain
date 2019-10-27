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

Template.Applicant_5.events({
  'click #btn-submit1': function(evt) {
    evt.preventDefault();
    var comApply=true;
    Meteor.call('saveComApply',comApply,function (err,rslt) {
      if(err){
        alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  },
  'click #btn-submit2': function(evt) {
    evt.preventDefault();
    var uniApply=true;
    Meteor.call('saveUniApply',uniApply,function (err,rslt) {
      if(err){
        alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  }
})
