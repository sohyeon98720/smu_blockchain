FlowRouter.route('/Applicant_1', {
  action: function() {
    BlazeLayout.render('Applicant_1');
  }
})

Template.Applicant_1.events({
  'click #btn-submit': function(evt) {
    evt.preventDefault();

    var phoneNumber = $('#phoneNumber').val();
    var homeAdd = $('#homeAdd').val();
    var email = $('#email').val();
    var gender = $('#gender').val();
    var birth = $('#birth').val();
    //console.log(gender, birth)
    // $('#firstName').val('merong');
    // alert($('#state').val());
    // alert($('#credit').is(":checked"))
    //var credit = $('#credit').is(":checked")
    // alert($('#debit').is(":checked"))
    // alert($('#paypal').is(":checked"))
  //  1. DB에 바로 넣기
  //   var data = {
  //     createdAt: new Date(),
  //     firstName: firstName,
  //     credit: credit
  //   };
  //   DB_RESUME.insert(data);
  //   alert('success');
  //  2. 서버에 전달해서 작업하기

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
      }
    });

  }
})
