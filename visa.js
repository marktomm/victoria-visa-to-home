Tasks = new Mongo.Collection("UserForm");



if (Meteor.isClient) {
  Session.set("currentLang" , i18n.getLanguage());
  
  Template.header.helpers({
    dev_header: "none",
    isCurrentLang: function(lang){
      return Session.equals('currentLang', lang);
    }
  });
  
  Template.header.events({
    "click #lang-ee": function(){
      i18n.setLanguage('ee');
      Session.set("currentLang" , i18n.getLanguage());
    },
    "click #lang-en": function(){
      i18n.setLanguage('en');
      Session.set("currentLang" , i18n.getLanguage());
    }
  });
  
  Template.body.events({
    "submit #fields1": function(event){
      return false;
    }
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
