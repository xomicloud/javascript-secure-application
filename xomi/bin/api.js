"use strict";

const { requestUtilities } = require("necessary"),
      { pipelineUtilities, authorisationUtilities } = require("@xomicloud/xomi");

const { POST_METHOD, API_XOMI_CLOUD_HOST } = require("./constants");

const { pipeline } = pipelineUtilities,
      { request: remoteRequest } = requestUtilities,
      { createBasicAuthorisationHeader } = authorisationUtilities;

function api(options, request, response) {
  const { method, query, originalUrl } = request,
        authorisationHeader = createBasicAuthorisationHeader(options),
        authorization = authorisationHeader,  ///
        host = API_XOMI_CLOUD_HOST,  ///
        uri = originalUrl,  ///
        parameters = query, ///
        headers = {
          authorization
        };

  if (method === POST_METHOD) {
    const contentHeaders = contentHeadersFromRequest(request);

    Object.assign(headers, contentHeaders);
  }

  const _request = remoteRequest(host, uri, parameters, method, headers, (error, _response) => {
    if (error) {
      debugger

      return;
    }

    pipeline(_response, response);
  });

  request.pipe(_request);
}

module.exports = api;