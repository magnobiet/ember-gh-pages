'use strict';

define("ember-gh-pages/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("ember-gh-pages/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-gh-pages/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-gh-pages/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-gh-pages/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("ember-gh-pages/tests/test-helper", ["ember-gh-pages/app", "ember-gh-pages/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('ember-gh-pages/config/environment', [], function() {
  var prefix = 'ember-gh-pages';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-gh-pages/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
