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

//한나연이 작업을 합니다.
//츄파츕스는 쵸코맛이죠
//밀크딸기의 시대는 지나갔습니다
//아아 님은 갔습니다.
//바이바이