FlowRouter.route('/Applicant_2', {
  action: function() {
    BlazeLayout.render('Applicant_2');
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


Template.Applicant_2.events({
  'click #btn-submit': function (evt) {

    var file = $('#inp-file').prop('files')[0];   //화면에서 선택 된 파일 가져오기
    var db_file = DB_FILES.insert({   //파일 DB에 미리 저장
      file: file

    });

    // Meteor.setTimeout(function() {  // DB에 이미지 삽입 후 link에 바로 접근 시 이미지가 브라우저에 나타나지 않음
    //   location.reload();            // 따라서 삽입 후 해당 link 접근에 가능한 시간 경과 후 화면을 갱신 해주는 과정
    // }, 1000);
    //
    // Meteor.setTimeout(function () {  // DB에 이미지 삽입 후 link에 바로 접근 시 이미지가 브라우저에 나타나지 않음
    //   location.reload();            // 따라서 삽입 후 해당 link 접근에 가능한 시간 경과 후 화면을 갱신 해주는 과정
    // }, 1000);

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
    var uni_file =  db_file.config.fileId;
    var uni_Journal = $('#uni_Journal').val();
    //var uniApply=false;

    var eduData = {
      uni_Year: uni_Year,
      uni_Name: uni_Name,
      uni_Region: uni_Region,
      uni_Major: uni_Major,
      uni_MajorBelong: uni_MajorBelong,
      uni_Department: uni_Department,
      uni_BeginDate: uni_BeginDate,
      uni_HowBegin: uni_HowBegin,
      uni_EndDate: uni_EndDate,
      uni_HowEnd: uni_HowEnd,
      uni_DaynNight: uni_DaynNight,
      uni_Grade: uni_Grade,
      uni_Total: uni_Total,
      uni_GradeNumber: uni_GradeNumber,
      uni_file:uni_file,  //파일의 id
      uni_Journal: uni_Journal
    }
    console.log(eduData);

    Meteor.call('saveEdu',eduData,uni_GraduNumber,function(err, rslt) {
      //서버에서 처리다 하고 응답을 주면 그걸 클라이언트가 실행하는 부분
      if (err) {
        //alert(err)
      } else {
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    })
    },

  'change #inp-file': function(evt, inst) {
    //inp-file에서 파일을 선택 시 파일명 시각화
    var file = $('#inp-file').prop('files')[0];
    $('#lb-file').text(file.name);
  }
});


