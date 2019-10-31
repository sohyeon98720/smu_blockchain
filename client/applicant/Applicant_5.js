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
  },
  contents: function() {
    //CONTENTS 데이터베이스를 화면에 전달
    return Meteor.users.find();
  },
  createdAt: function() {
    //화면에 보이는 날짜 데이터를 정해진 포맷으로 변환하여 전달
    return Codeasy.utils.getStringYMDFromDate(this.createdAt);
  },
  link: function() {
    // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
    var userInfo = Meteor.user();
    return Codeasy.utils.getFileLink(userInfo.profile.uni_file);
  },
  link2: function() {
    // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
    var userInfo = Meteor.user();
    return Codeasy.utils.getFileLink(userInfo.profile.com_File);
  },
  link3: function() {
    // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
    var userInfo = Meteor.user();
    return Codeasy.utils.getFileLink(userInfo.profile.spec_file);
  }
})

Template.Applicant_5.events({
  //경력인증요청 버튼이 눌리면
  'click #btn-submit1': function(evt) {
    evt.preventDefault();
    var comApply=true;
    Meteor.call('saveComApply',comApply,function (err,rslt) {
      if(err){
        //alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  },
  //학력인증요청 버튼이 눌리면
  'click #btn-submit2': function(evt) {
    evt.preventDefault();
    var uniApply=true;
    Meteor.call('saveUniApply',uniApply,function (err,rslt) {
      if(err){
        //alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  },
  //이력서 제출 버튼이 눌리면
  'click #btn-submit3': function(evt) {
    evt.preventDefault();
    var submitAll=true;
    Meteor.call('saveSubmitAll',submitAll,function (err,rslt) {
      if(err){
        //alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  }
})
