if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.header.helpers({
    img_logo: "/img/sample_logo.png"
  });

  Template.hello.events({
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
