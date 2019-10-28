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