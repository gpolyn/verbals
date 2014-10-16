/**
 * thereExistsALabeledNameField.js - verify presence of field labeled "name" of some defined width
 */

casper.test.begin('Tests verbals widget structure', 2, function suite(test) {

  casper.start('http://162.242.253.23', function() {
    test.assertExists('label.verbal-label', 'label has "verbal-label" class');
    test.assertExists('label#verbal-label-1', 'label has "verbal-label-1" id.');
  });

  casper.run(function() {
    test.done();
  });
});
