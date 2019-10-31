// FlowRouter.template('/UniDetails/:_id');
FlowRouter.route('/UniDetails/:_id', {
    action: function() {
        BlazeLayout.render('UniDetails');
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

Template.UniDetails.onCreated(function() {
    // var _id = FlowRouter.getParam('_id')
    // DB_POSTS.update({_id: _id}, {
    //     $inc: {readCount: 1}  //조회수 1 증가 업데이트
    // });
});
Template.UniDetails.helpers({
    // userInfo: function() {
    //   return Meteor.user();
    // }
    // board: function() {
    //     var _id = FlowRouter.getParam('_id')
    //     return DB_POSTS.findOne({_id: _id});
    // },
    // createdAt: function() {
    //     return this.createdAt.toStringYMDHMS();
    // },
    student: function() {
        var _id = FlowRouter.getParam('_id')
        return Meteor.users.findOne({_id: _id});
    },
    link: function() {
        // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
        var _id = FlowRouter.getParam('_id');
        return Codeasy.utils.getFileLink(Meteor.users.findOne({_id:_id}).profile.uni_file);
    }
});
Template.UniDetails.events({

    //학력인증요청 버튼이 눌리면
    'click #btn-submit1': function(evt) {
        evt.preventDefault();
        var _id = FlowRouter.getParam('_id');
        var uni_Author="승인";
        Meteor.call('saveUniAuthor',uni_Author,_id,function (err,rslt) {
            if(err){
                //alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    },
    'click #btn-submit2': function(evt) {
        evt.preventDefault();
        var _id = FlowRouter.getParam('_id');
        var uni_Author="알 수 없음";
        Meteor.call('saveUniAuthor',uni_Author,_id,function (err,rslt) {
            if(err){
               // alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    },
    'click #btn-submit3': function(evt) {
        evt.preventDefault();
        var _id = FlowRouter.getParam('_id');
        var uni_Author="거절";
        Meteor.call('saveUniAuthor',uni_Author,_id,function (err,rslt) {
            if(err){
               // alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    }
})