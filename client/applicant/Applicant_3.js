FlowRouter.route('/Applicant_3', {
  action: function() {
    BlazeLayout.render('Applicant_3');
  }
})


Template.Applicant_3.onRendered(function() {
  run = function () {
    feather.replace()

  };
  Meteor.setTimeout(function(){
    run()
  }, 1000)

});


Template.Applicant_3.events({
  'click #btn-submit': function(evt) {

    var file = $('#inp-file').prop('files')[0];   //화면에서 선택 된 파일 가져오기
    var db_file = DB_FILES.insert({   //파일 DB에 미리 저장
      file: file

    });
    evt.preventDefault();
  //  alert(11)
    var com_Name = $('#com_Name').val();
    var com_BeginDate = $('#com_BeginDate').val();
    var com_EndDate = $('#com_EndDate').val();
    var com_HowEnd = $('#com_HowEnd').val();
    var com_Number = $('#com_Number').val();
    var com_File = db_file.config.fileId;
    var com_EndReason = $('#com_EndReason').val();
    var com_Position = $('#com_Position').val();
    var com_Field = $('#com_Field').val();
    var com_Region = $('#com_Region').val();

    var careerData={
      com_Name:com_Name,
      com_BeginDate:com_BeginDate,
      com_EndDate:com_EndDate,
      com_HowEnd:com_HowEnd,
      com_File:com_File,
      com_EndReason:com_EndReason,
      com_Position:com_Position,
      com_Field:com_Field,
      com_Region:com_Region,
    }
    console.log(careerData);

    Meteor.call('saveCareer',careerData,com_Number,function(err, rslt) {
      //서버에서 처리다 하고 응답을 주면 그걸 클라이언트가 실행하는 부분
      if(err){
        //alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  },
  'change #inp-file': function(evt, inst) {
    //inp-file에서 파일을 선택 시 파일명 시각화
    var file = $('#inp-file').prop('files')[0];
    $('#lb-file').text(file.name);
  }
})
