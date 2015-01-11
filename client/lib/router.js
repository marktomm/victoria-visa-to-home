Router.configure({ layoutTemplate: 'bodyTemplate'});


Router.route('/', function () {
  this.render('home');
});


Router.map(function () {
  this.route('form', {
    path: '/form',

    onAfterAction: function (pause) {
      try{
        if(form_view != undefined)
          Blaze.remove(form_view);
      }catch(err){
      }
    }
  })
});

Router.route('/aboutUs', function () {
  this.render('aboutUs');
});


Router.map(function() {
  this.route('login', {
    path: '/login',
    onBeforeAction: function(){
      AccountsTemplates.setState('signIn');
      AccountsTemplates.clearState();
      this.next();
    }
  });
});