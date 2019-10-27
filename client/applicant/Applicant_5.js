FlowRouter.template('/Applicant_5/:_id');

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


  var infoData={
    phoneNumber:phoneNumber,
    homeAdd:homeAdd,
    email:email,
    gender:gender,
    birth:birth
  }

  Meteor.call('saveInfo',infoData, function(err, rslt) {
    //서버에서 처리다 하고 응답을 주면 그걸 클라이언트가 실행하는 부분
    if(err){
      alert(err)
    }else{
      alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      console.log('good')
    }
  });

  Template.Applicant_5.helpers({
    board: function() {
      var _id = FlowRouter.getParam('_id')
      return DB_RESUME.findOne({_id: _id});
    },
    createdAt: function() {
      return this.createdAt.toStringYMDHMS();
    }
  });


});
