//FlowRouter.template('/Company_1/:p_Name');

FlowRouter.route('/Company_2/:_id', {
    action: function() {
        BlazeLayout.render('Company2_details');
    }
})

Template.Company2_details.helpers({

    userInfo:function() {
        var _id = FlowRouter.getParam('_id');
        return Meteor.users.findOne({_id:_id});
        //return Meteor.users.findOne({_id:_id});
    },
    link: function() {
        // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
        var _id = FlowRouter.getParam('_id');
        return Codeasy.utils.getFileLink(Meteor.users.findOne({_id:_id}).profile.uni_file);
    },
    link2: function() {
        // 컨테츠 데이터베이스에 저장 되어 있는 파일(이미지)의 _id를 이용하여 실제 링크로 변환하여 전달
        var _id = FlowRouter.getParam('_id');
        return Codeasy.utils.getFileLink(Meteor.users.findOne({_id:_id}).profile.com_File);

    }

})

Template.Company2_details.events({
    'click #btn-delete':function(evt){
        evt.preventDefault();
        var _id = FlowRouter.getParam('_id');
        var submitAll=false;
        Meteor.call('deleteApplicant',_id,submitAll,function(err,rslt){
            if(err){
                alert(err)
            }
            else{
                alert(rslt);
            }
        })
    }
})