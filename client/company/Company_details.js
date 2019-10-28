FlowRouter.route('/Company_details', {
    action: function() {
        BlazeLayout.render('Company_details');
    }
})
Template.Company_details.onRendered(function() {
    run = function () {
        Meteor.call('getEduRequest',function(err,result){
            if(err){
                alert(err);
            }
            else{
                Session.set('uni_data',result);
            }
        })
    }
});


Template.Company_details.helpers({
    data1:function(){
        return Session.get('uni_data');
    }
})