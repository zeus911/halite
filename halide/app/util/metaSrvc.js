// Generated by CoffeeScript 1.6.3
(function() {
  var base, buildRegex, metaservice, regexify, views;

  metaservice = angular.module("metaService", []);

  base = '/halide';

  views = {
    otherwise: {
      label: "home",
      route: "" + base + "/app/home",
      template: "" + base + "/static/app/view/home.html",
      controller: "HomeCtlr"
    },
    watch: {
      label: "watch",
      route: "" + base + "/app/watch/:id",
      template: "" + base + "/static/app/view/watch.html",
      controller: "WatchCtlr"
    },
    test: {
      label: "test",
      route: "" + base + "/app/test",
      template: "" + base + "/static/app/view/test.html",
      controller: "testCtlr"
    }
  };

  buildRegex = function(url) {
    var chunk, chunks, i, regex, _i, _len;
    chunks = url.split("/");
    for (i = _i = 0, _len = chunks.length; _i < _len; i = ++_i) {
      chunk = chunks[i];
      if (chunk.match("^:\\w+$") != null) {
        chunks[i] = "\\\\w*";
      }
    }
    regex = "^" + chunks.join("/") + "$";
    return regex;
  };

  regexify = function(views) {
    var name, view, _results;
    _results = [];
    for (name in views) {
      view = views[name];
      _results.push(views[name].regex = buildRegex(view.route));
    }
    return _results;
  };

  regexify(views);

  metaservice.constant('MetaConstants', {
    baseUrl: "" + base,
    date: '20120625',
    views: views
  });

}).call(this);
