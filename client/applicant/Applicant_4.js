FlowRouter.route('/Applicant_4', {
  action: function() {
    BlazeLayout.render('Applicant_4');
  }
})

Template.Applicant_4.events({
  'click #btn-submit': function(evt) {

    var file = $('#inp-file').prop('files')[0];   //화면에서 선택 된 파일 가져오기
    var db_file = DB_FILES.insert({   //파일 DB에 미리 저장
      file: file
    });

    Meteor.setTimeout(function() {  // DB에 이미지 삽입 후 link에 바로 접근 시 이미지가 브라우저에 나타나지 않음
      location.reload();            // 따라서 삽입 후 해당 link 접근에 가능한 시간 경과 후 화면을 갱신 해주는 과정
    }, 1000);

    Meteor.setTimeout(function () {  // DB에 이미지 삽입 후 link에 바로 접근 시 이미지가 브라우저에 나타나지 않음
      location.reload();            // 따라서 삽입 후 해당 link 접근에 가능한 시간 경과 후 화면을 갱신 해주는 과정
    }, 1000);

    evt.preventDefault();
    //  alert(11)
    var spec_What= $('#spec_What').val();
    var spec_Name= $('#spec_Name').val();
    var spec_Organization= $('#spec_Organization').val();
    var spec_Number= $('#spec_Number').val();
    var spec_file =  db_file.config.fileId;
    var spec_GetDate = $('#spec_GetDate').val();
    var spec_Facebook = $('#spec_Facebook').val();
    var spec_Instagram= $('#spec_Instagram').val();
    var spec_Cafe= $('#spec_Cafe').val();
    var spec_Blog= $('#spec_Blog').val();

    var specData={
      spec_What:spec_What,
      spec_Name:spec_Name,
      spec_Organization:spec_Organization,
      spec_Number:spec_Number,
      spec_file:spec_file,
      spec_GetDate :spec_GetDate ,
      spec_Facebook :spec_Facebook ,
      spec_Instagram:spec_Instagram,
      spec_Cafe:spec_Cafe,
      spec_Blog:spec_Blog
    }
    console.log(specData)

    Meteor.call('saveSpec',specData,spec_Number,function(err, rslt) {
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
