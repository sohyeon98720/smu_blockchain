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

//나혜가 작업중!!
//다섯줄 겹쳐야 에러
//아무거나~~
//내일은 월요일~~
//흐헤헤헤헤헤ㅔ