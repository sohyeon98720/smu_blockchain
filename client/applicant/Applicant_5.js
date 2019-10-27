
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

  Template.Applicant_5.helpers({
    boards: function() {
      return DB_RESUME.findAll({}, {sort: {createdAt: -1}});
    },
    YMD: function() {
      return this.createdAt.toStringYMD();
    },
    HMS: function() {
      return this.createdAt.toStringHMS();
    }
  });

  Meteor.call('savePost', infoData, function(err, infoData) {
    //서버에서 처리 할거 다하고 응답을 주면 그 리턴을 받아서 클라이언트가 실행하는 부분
    if(err) {
      alert(err);
    } else {
      find(infoData); //결과를 가지고 클라이언트에서 수행해야 하는 것이 있으면 여기서 하면 됨.
    }
  });

});
