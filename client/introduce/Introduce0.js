
FlowRouter.route('/Introduce', {
  action: function() {
    var userInfo = Meteor.user();
    if(userInfo.profile.p_Type === "기업"){
      BlazeLayout.render('Introduce');
    }else{
      alert("권한이 없습니다.")
    }

  }
})
