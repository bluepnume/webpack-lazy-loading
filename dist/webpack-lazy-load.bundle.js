(window.webpackJsonp = window.webpackJsonp || []).push([ [ 1 ], {
    2: function(n, o, c) {
        "use strict";
        function t() {
            console.log("baz123");
        }
        function u() {
            console.log("lazybaz123");
        }
        c.r(o), c.d(o, "baz", function() {
            return t;
        }), c.d(o, "lazyBaz", function() {
            return u;
        });
    }
} ]);