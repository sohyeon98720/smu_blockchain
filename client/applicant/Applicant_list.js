FlowRouter.route('/Applicant_list/:_id', {
    action: function() {
        BlazeLayout.render('Applicant_list');
    }
})

Template.Applicant_list.onRendered(function() {
    run = function () {
        feather.replace()

    };
    Meteor.setTimeout(function(){
        run()
    }, 1000)

});

Template.Applicant_list.helpers({
    userInfo: function() {
        var _id=FlowRouter.getParam('_id')
        return users.findOne({_id: _id});
    }
})
