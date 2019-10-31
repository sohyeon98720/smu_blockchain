FlowRouter.route('/Uni', {
  action: function() {
    BlazeLayout.render('Uni');
  }
})


// FlowRouter.route('/Uni', {
//   action: function() {
//     var userInfo = Meteor.user();
//     if(userInfo.profile.p_Type === "학교"){
//       BlazeLayout.render('Uni');
//     }else{
//       alert("권한이 없습니다.")
//     }
//   }
// })

Template.Uni.helpers({
  students: function() {
    return Meteor.users.find({"profile.uniApply":true});

  }
})



