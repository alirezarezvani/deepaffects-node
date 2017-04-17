/**
 * DeepAffects
 * OpenAPI Specification of DeepAffects APIs
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DeepAffects);
  }
}(this, function(expect, DeepAffects) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DeepAffects.Audio();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Audio', function() {
    it('should create an instance of Audio', function() {
      // uncomment below and update the code to test Audio
      //var instane = new DeepAffects.Audio();
      //expect(instance).to.be.a(DeepAffects.Audio);
    });

    it('should have the property encoding (base name: "encoding")', function() {
      // uncomment below and update the code to test the property encoding
      //var instane = new DeepAffects.Audio();
      //expect(instance).to.be();
    });

    it('should have the property sampleRate (base name: "sampleRate")', function() {
      // uncomment below and update the code to test the property sampleRate
      //var instane = new DeepAffects.Audio();
      //expect(instance).to.be();
    });

    it('should have the property languageCode (base name: "languageCode")', function() {
      // uncomment below and update the code to test the property languageCode
      //var instane = new DeepAffects.Audio();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new DeepAffects.Audio();
      //expect(instance).to.be();
    });

  });

}));
