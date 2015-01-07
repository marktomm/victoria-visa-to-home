if (Meteor.isClient) {

  Router.configure({ layoutTemplate: 'bodyTemplate'});
  
  
  Router.route('/', function () {
    this.render('home');
  });
  
  Router.route('/form', function () {
    this.render('form');
  });
}