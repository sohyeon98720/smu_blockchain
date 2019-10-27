FlowRouter.route('/Applicant_2', {
  action: function() {
    BlazeLayout.render('Applicant_2');
  }
})

Template.Applicant_2.onRendered(function() {
  run = function () {
    var uni_GraduNumber=2;
    Meteor.call('setEdu',uni_GraduNumber,function(err,result){
      if(err){
        alert(err);
      }
      else {
        alert(result);
      }
    })
  }
})

Template.Applicant_2.events({
  'click #btn-submit': function(evt) {
    evt.preventDefault();
  //  alert(11)
    var uni_Year = $('#uni_Year').val();
    var uni_Name = $('#uni_Name').val();
    var uni_Region = $('#uni_Region').val();
    var uni_Major = $('#uni_Major').val();
    var uni_MajorBelong = $('#uni_MajorBelong').val();
    var uni_Department = $('#uni_Department').val();
    var uni_BeginDate = $('#uni_BeginDate').val();
    var uni_HowBegin = $('#uni_HowBegin').val();
    var uni_EndDate = $('#uni_EndDate').val();
    var uni_HowEnd = $('#uni_HowEnd').val();
    var uni_GraduNumber = $('#uni_GraduNumber').val();
    var uni_DaynNight = $('#uni_DaynNight').val();
    var uni_Grade = $('#uni_Grade').val();
    var uni_Total = $('#uni_Total').val();
    var uni_GradeNumber = $('#uni_GradeNumber').val();
    var uni_File = $('#uni_File').val();
    var uni_Journal = $('#uni_Journal').val();

    var eduData={
      uni_Year:uni_Year,
      uni_Name:uni_Name,
      uni_Region:uni_Region,
      uni_Major:uni_Major,
      uni_MajorBelong:uni_MajorBelong,
      uni_Department:uni_Department,
      uni_BeginDate:uni_BeginDate,
      uni_HowBegin:uni_HowBegin,
      uni_EndDate:uni_EndDate,
      uni_HowEnd:uni_HowEnd,
      uni_DaynNight:uni_DaynNight,
      uni_Grade:uni_Grade,
      uni_Total:uni_Total,
      uni_GradeNumber:uni_GradeNumber,
      uni_File:uni_File,
      uni_Journal:uni_Journal
    }
    console.log(eduData);
    // Meteor.call('setEdu',uni_GraduNumber,function(err,result){
    //   if(err){
    //     alert(err);
    //   }
    //   else {
    //     alert(result);
    //   }
    // })

    Meteor.call('saveEdu',eduData,uni_GraduNumber,function(err, rslt) {
      //서버에서 처리다 하고 응답을 주면 그걸 클라이언트가 실행하는 부분
      if(err){
        alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  }
})
