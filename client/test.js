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

//다 필요 없고 여기는 이렇게 돼야겠네.