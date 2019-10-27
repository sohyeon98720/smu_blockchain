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

//이지민이 작업을 합니다.
//호호호호ㅗㅎ호ㅗ호호홓
//집가고싶다요
//김소현 한나연 김나혜
//하ㅏ하하핳하하ㅏㅎ