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