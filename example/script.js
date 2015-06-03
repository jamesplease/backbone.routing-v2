//
// The current refactor keeps the most commonly-used
// API exactly the same. So the following code should
// look very familiar to you...
//

var MyRouter = Backbone.Router.extend({
  routes: {
    'sandwiches': 'sandwiches'
  },

  sandwiches: function() {
    console.log('The sandwiches are ready.');
  }
});

var myRouter = new MyRouter();

myRouter.route('spaghetti/:id', 'spaghetti', function() {
  console.log('The spaghetti is not ready. Please wait 3 minutes.');
});

Backbone.history.start({
  pushState: true
});

myRouter.navigate('spaghetti/2', false);

