// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Printf = require("bs-platform/lib/js/printf.js");

function pct(pct$1) {
  return Curry._1(Printf.sprintf(/* Format */[
                  /* Float */Block.__(8, [
                      /* Float_f */0,
                      /* No_padding */0,
                      /* Lit_precision */[2],
                      /* Char_literal */Block.__(12, [
                          /* "%" */37,
                          /* End_of_format */0
                        ])
                    ]),
                  "%.2f%%"
                ]), pct$1);
}

exports.pct = pct;
/* No side effect */
