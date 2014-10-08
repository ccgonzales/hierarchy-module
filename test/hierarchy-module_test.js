(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#hierarchy_module', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.hierarchy_module(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.hierarchy_module().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery.hierarchy_module');

  test('is awesome', function() {
    expect(2);
    strictEqual($.hierarchy_module(), 'awesome.', 'should be awesome');
    strictEqual($.hierarchy_module({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':hierarchy_module selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':hierarchy_module').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));
