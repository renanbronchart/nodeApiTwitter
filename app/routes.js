var core = require('./controller/core');
var api = require('./controller/api');

module.exports = function(app) {
  app.get('/', core.home);

  app.get('/top', core.top);

  app.get('/results', core.results);

  app.get('/api/results', api.results);
}
