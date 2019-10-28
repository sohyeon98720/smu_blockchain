//FlowRouter.template('/Company_1/:p_Name');

FlowRouter.route('/Company_1/:_id', {
    action: function() {
        BlazeLayout.render('Company_datails');
    }
})

Template.Company_datails.helpers({
    detail:function(){
    var _id = FlowRouter.getParam('_id');
    console.log(_id);
    return Meteor.users.findOne({_id: _id});
    }

})

Template.Company_datails.events({
    //경력인증요청 버튼이 눌리면
    'click #btn-submit': function(evt) {
        evt.preventDefault();
        var com_Author="승인";
        Meteor.call('saveComAuthor',com_Author,function (err,rslt) {
            if(err){
                alert(err)
            }else{
                alert(rslt); //서버 수행 이후 클라이언트에서 실행 될 코드.
            }
        });
    }
})