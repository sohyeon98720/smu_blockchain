FlowRouter.route('/Company_1', {
  action: function() {
    BlazeLayout.render('Company_1');
  }
})
// Template.Company_1.onRendered(function() {
//   run = function () {
//     Meteor.call('getEduRequest',function(err,result){
//       if(err){
//         alert(err);
//       }
//       else{
//         Session.set('uni_data',result);
//       }
//     })
//   }
// });


Template.Company_1.helpers({
  // data:function(){
  //   return Meteor.users.find({comApply:true}).fetch();
  // },
  data1:function(){
    //return Meteor.users.find({comApply:true},{"p_Name":true});

    return Meteor.users.find({_id:Meteor.user()._id}).fetch();
    //return Meteor.users.find().fetch({"com_Region":{$in:["f","F"]}});
    //return Meteor.users.find({username:"user04"}).fetch();
    //return Meteor.users.find({},{username:"true"}).fetch();

  }

})
