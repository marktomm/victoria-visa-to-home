

Template.body.events({
  'click #signOut': function(event){
      event.preventDefault();
      Meteor.logout();
  },
});

