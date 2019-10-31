//FlowRouter.template('/Company_1/:p_Name');

FlowRouter.route('/Company_1/:_id', {
    action: function() {
        BlazeLayout.render('Company_details');
    }
})


Template.Company_details.onRendered(function() {
    run = function () {
        feather.replace()

    };
    Meteor.setTimeout(function(){
        run()
    }, 1000)

});

Template.Company_details.helpers({
    detail:function(){
    var _id = FlowRouter.getParam('_id');
    console.log(_id);
    return Meteor.users.findOne({_id: _id});
    },
    link2: function() {
        // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
        var _id = FlowRouter.getParam('_id');
        return Codeasy.utils.getFileLink(Meteor.users.findOne({_id:_id}).profile.com_File);

    }

})

Template.Company_details.events({
    //경력인증요청 버튼이 눌리면
    'click #btn-submit1': function(evt) {
        evt.preventDefault();
        var _id = FlowRouter.getParam('_id');
        var account1= Meteor.users.findOne({_id:_id}).profile.accountKey;
        var com_Author="승인";
        Meteor.call('saveComAuthor',com_Author,_id,function (err,rslt) {
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
        var com_Author="알 수 없음";
        Meteor.call('saveComAuthor',com_Author,_id,function (err,rslt) {
            if(err){
                //alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    },
    'click #btn-submit3': function(evt) {
        evt.preventDefault();
        var _id = FlowRouter.getParam('_id');
        var com_Author="거절";
        Meteor.call('saveComAuthor',com_Author,_id,function (err,rslt) {
            if(err){
                //alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    }
})