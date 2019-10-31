//FlowRouter.template('/Company_1/:p_Name');

FlowRouter.route('/Company_1/:_id', {
    action: function() {
        BlazeLayout.render('Company_details');
    }
})

Template.Company_details.helpers({
    detail:function(){
    var _id = FlowRouter.getParam('_id');
    console.log(_id);
    return Meteor.users.findOne({_id: _id});
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
               lert(err)
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
                alert(err)
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
                alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    }
})