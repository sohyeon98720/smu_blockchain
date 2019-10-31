// FlowRouter.route('/Company_1', {
//   action: function() {
//     BlazeLayout.render('Company_1');
//   }
// })

FlowRouter.route('/Company_1', {
  action: function() {
    var userInfo = Meteor.user();
    if(userInfo.profile.p_Type === "기업"){
      BlazeLayout.render('Company_1');
    }else{
      alert("권한이 없습니다.")
    }
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


Template.Company_1.helpers({
  // data:function(){
  //   return Meteor.users.find({comApply:true}).fetch();
  // },
  data1:function() {

    //return Meteor.users.find({_id:Meteor.user()._id}).fetch();
    //return Meteor.users.find({profile:{comApply:true}}).fetch();
    return Meteor.users.find({"profile.comApply":true});
  }

})
