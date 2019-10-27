FlowRouter.route('/Company_1', {
  action: function() {
    BlazeLayout.render('Company_1');
  }
})
Template.Company_1.onRendered(function() {
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


Template.Company_1.helpers({
  data1:function(){
    return Session.get('uni_data').a;
  },
  data2:function(){
    return Session.get('uni_data').b;
  },
  data3:function(){
    return Session.get('uni_data').c;
  }
})