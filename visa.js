Tasks = new Mongo.Collection("UserForm");
collCountries = new Mongo.Collection("countries");

if (Meteor.isClient) {
  Session.set("currentLang" , i18n.getLanguage());
  
  Template.header.helpers({
    dev_header: function(rt){
      return Router.current().route.getName();
    },
    
    isCurrentLang: function(lang){
      return Session.equals('currentLang', lang);
    },
    
    isCurrentRoute: function(rt){
      return Router.current().route.getName() == rt;
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
  
  
  Template.bodyTemplate.events({
    "submit #fields1": function(event){
      return false;
    }
  });
  
  
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  

  Template.countryList.helpers({
    countries: function(){
      return collCountries.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
