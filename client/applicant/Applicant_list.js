FlowRouter.route('/Applicant_list', {
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
    userInfoList: function() {
        return users.find({});
    }
})
