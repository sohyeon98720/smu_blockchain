// FlowRouter.template('/UniDetails/:_id');
FlowRouter.route('/UniDetails/:_id', {
    action: function() {
        BlazeLayout.render('UniDetails');
    }
})

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
        // return Meteor.users.findOne({_id:Meteor.user()._id});
        // return Meteor.users.find({"profile.uniApply":true});
        return Meteor.users.findOne({_id: _id});
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
                alert(err)
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
                alert(err)
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
                alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    }
})