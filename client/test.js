FlowRouter.route('/test/:_id',{
  action: function() {
    BlazeLayout.render('test');
  }
})

Template.test.helpers({
  contents: function() {
    var _id = FlowRouter.getParam('_id');
    return DB_CONTENTS.findOne({_id: _id});
  }
})


//김소현이 작업을 합니다.
//다섯줄씩
//또 다섯줄
//다섯줄
//5
///ssss