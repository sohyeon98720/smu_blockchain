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


// 진정원이 작업을 합니다.
// 다섯줄씩 쳐야 이게 겹쳐서 에러가 날 듯 합니다.
// 세줄만 해도 될지는 모르겠지만.
// 아무거나 일단 다섯줄을
// 입력 합니다.