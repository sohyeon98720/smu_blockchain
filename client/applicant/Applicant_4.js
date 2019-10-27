FlowRouter.route('/Applicant_4', {
  action: function() {
    BlazeLayout.render('Applicant_4');
  }
})

Template.Applicant_4.events({
  'click #btn-submit': function(evt) {
    evt.preventDefault();
    //  alert(11)
    var spec_What= $('#spec_What').val();
    var spec_Name= $('#spec_Name').val();
    var spec_Organization= $('#spec_Organization').val();
    var spec_Number= $('#spec_Number').val();
    var spec_GetDate = $('#spec_GetDate').val();
    var spec_Facebook = $('#spec_Facebook').val();
    var spec_Instagram= $('#spec_Instagram').val();
    var spec_Cafe= $('#spec_Cafe').val();
    var spec_Blog= $('#spec_Blog').val();

    var specData={
      spec_What:spec_What,
      spec_Name:spec_Name,
      spec_Organization:spec_Organization,
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
        alert(err)
      }else{
        alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
      }
    });
  }
})



// //1.db에 비로 넣기
// DB_RESUME.insert({
//   firstNmae: fistName.
//   credit: credit;
// });
