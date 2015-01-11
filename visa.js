collCountries = new TAPi18n.Collection("countries");

form_view = (function () { return; })();

if (Meteor.isClient) {
  
  Meteor.startup(function () {
    TAPi18n.subscribe("countries");
    i18n.setLanguage('ee');
    T9n.setLanguage('ee');
    Session.set("currentLang" , i18n.getLanguage());  
      
    TAPi18n.setLanguage(i18n.getLanguage());
    
    initForms();
  });
  
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
      T9n.setLanguage(i18n.getLanguage());
      TAPi18n.setLanguage(i18n.getLanguage());
      
      Session.set("currentLang" , i18n.getLanguage());
      
      Meteor.call('reRenderForm');
    },
    "click #lang-en": function(){
      i18n.setLanguage('en');
      T9n.setLanguage(i18n.getLanguage());
      TAPi18n.setLanguage(i18n.getLanguage());
      Session.set("currentLang" , i18n.getLanguage());

      Meteor.call('reRenderForm');
    },
    'click #signOut': function(event){
      event.preventDefault();
      Meteor.logout();
  },
  });
  
  
  Template.bodyTemplate.events({
    "submit #fields1": function(event){
      return false;
    }
  });
  
  // Refactor
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  

  Template.countryList.helpers({
    countries: function(){
      return collCountries.find({});
    }
  });

  
  
  Template.country.helpers({
    weConsultForThisCountry: function(consult){
      if(consult == 'yes')
        return true;
      
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    dbTranslate();
  });
  
  TAPi18n.publish("countries", function(){
    return collCountries.i18nFind();
  });
}


Meteor.methods({
  'reRenderForm': function(){
    if(Router.current().route.getName() == "form"){
      initForms();

      try{
        if(form_view != undefined)
          Blaze.remove(form_view);
      }catch(err){
        console.log(err);
      }
      form_view = Blaze.render(Template.form, document.getElementById("form-div-id") );
    }
  }
});
