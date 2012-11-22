// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

define('helpers.events', function(require, module) {

  var listeners = {};
  module.exports.addListener = function(name) {
    return function(f) {
      if(!listeners[name]) {
        listeners[name] = [f];
      } else {
        listeners[name].push(f);
      }
    };
  };

  module.exports.fire = function(name) {
    return function() {
      var len = listeners[name] ? listeners[name].length : 0;
      for (var i = 0; i < len; i++) {
        listeners[name][i]();
      }
    };
  };
});

