"use strict";

const { cookie, oAuth } = require("@xomicloud/xomi");

const options = require("../options");

function signOutHandler(request, response, next) {
  cookie.removeAuthenticationCookie(options, response);

  oAuth.redirect(options, response);
}

module.exports = signOutHandler;
