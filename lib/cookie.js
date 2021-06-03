"use strict";
var _constants = require("./constants");
function setAuthenticationCookie(options, response, accessToken, param) {
    var rememberMe = param === void 0 ? false : param;
    var authenticationCookieName = getAuthenticationCookieName(options), json = {
        accessToken: accessToken
    }, name = authenticationCookieName, value = JSON.stringify(json), parameters = getParameters(rememberMe);
    response.cookie(name, value, parameters);
}
function removeAuthenticationCookie(options, response) {
    var authenticationCookieNAme = getAuthenticationCookieName(options), name = authenticationCookieNAme; ///
    response.clearCookie(name);
}
function isAuthenticationCookiePresent(options, request) {
    var cookies = request.cookies, authenticationCookieNAme = getAuthenticationCookieName(options), name = authenticationCookieNAme, authenticationCookiePresent = !!cookies[name];
    return authenticationCookiePresent;
}
module.exports = {
    setAuthenticationCookie: setAuthenticationCookie,
    removeAuthenticationCookie: removeAuthenticationCookie,
    isAuthenticationCookiePresent: isAuthenticationCookiePresent
};
function getAuthenticationCookieName(options) {
    var clientId = options.clientId, authenticationCookieName = "".concat(_constants.AUTHENTICATION_COOKIE_NAME_PREFIX, ".").concat(clientId);
    return authenticationCookieName;
}
function getParameters(rememberMe) {
    var parameters = {
    };
    if (rememberMe) {
        var expires = _constants.AUTHENTICATION_COOKIE_EXPIRES;
        Object.assign(parameters, {
            expires: expires
        });
    }
    return parameters;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb29raWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFVVEhFTlRJQ0FUSU9OX0NPT0tJRV9FWFBJUkVTLCBBVVRIRU5USUNBVElPTl9DT09LSUVfTkFNRV9QUkVGSVggfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gc2V0QXV0aGVudGljYXRpb25Db29raWUob3B0aW9ucywgcmVzcG9uc2UsIGFjY2Vzc1Rva2VuLCByZW1lbWJlck1lID0gZmFsc2UpIHtcbiAgY29uc3QgYXV0aGVudGljYXRpb25Db29raWVOYW1lID0gZ2V0QXV0aGVudGljYXRpb25Db29raWVOYW1lKG9wdGlvbnMpLFxuICAgICAgICBqc29uID0ge1xuICAgICAgICAgIGFjY2Vzc1Rva2VuXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWUgPSBhdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IGdldFBhcmFtZXRlcnMocmVtZW1iZXJNZSk7XG5cbiAgcmVzcG9uc2UuY29va2llKG5hbWUsIHZhbHVlLCBwYXJhbWV0ZXJzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXV0aGVudGljYXRpb25Db29raWUob3B0aW9ucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgYXV0aGVudGljYXRpb25Db29raWVOQW1lID0gZ2V0QXV0aGVudGljYXRpb25Db29raWVOYW1lKG9wdGlvbnMpLFxuICAgICAgICBuYW1lID0gYXV0aGVudGljYXRpb25Db29raWVOQW1lOyAgLy8vXG5cbiAgcmVzcG9uc2UuY2xlYXJDb29raWUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzQXV0aGVudGljYXRpb25Db29raWVQcmVzZW50KG9wdGlvbnMsIHJlcXVlc3QpIHtcbiAgY29uc3QgeyBjb29raWVzIH0gPSByZXF1ZXN0LFxuICAgICAgICBhdXRoZW50aWNhdGlvbkNvb2tpZU5BbWUgPSBnZXRBdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUob3B0aW9ucyksXG4gICAgICAgIG5hbWUgPSBhdXRoZW50aWNhdGlvbkNvb2tpZU5BbWUsICAvLy9cbiAgICAgICAgYXV0aGVudGljYXRpb25Db29raWVQcmVzZW50ID0gISFjb29raWVzW25hbWVdO1xuXG4gIHJldHVybiBhdXRoZW50aWNhdGlvbkNvb2tpZVByZXNlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRBdXRoZW50aWNhdGlvbkNvb2tpZSxcbiAgcmVtb3ZlQXV0aGVudGljYXRpb25Db29raWUsXG4gIGlzQXV0aGVudGljYXRpb25Db29raWVQcmVzZW50XG59O1xuXG5mdW5jdGlvbiBnZXRBdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUob3B0aW9ucykge1xuICBjb25zdCB7IGNsaWVudElkIH0gPSBvcHRpb25zLFxuICAgICAgICBhdXRoZW50aWNhdGlvbkNvb2tpZU5hbWUgPSBgJHtBVVRIRU5USUNBVElPTl9DT09LSUVfTkFNRV9QUkVGSVh9LiR7Y2xpZW50SWR9YDtcblxuICByZXR1cm4gYXV0aGVudGljYXRpb25Db29raWVOYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJzKHJlbWVtYmVyTWUpIHtcbiAgY29uc3QgcGFyYW1ldGVycyA9IHt9O1xuXG4gIGlmIChyZW1lbWJlck1lKSB7XG4gICAgY29uc3QgZXhwaXJlcyA9IEFVVEhFTlRJQ0FUSU9OX0NPT0tJRV9FWFBJUkVTO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbWV0ZXJzLCB7XG4gICAgICBleHBpcmVzXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZO0lBRXFFLFVBQWE7U0FFckYsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBa0I7UUFBbEIsVUFBVSxHQUFWLEtBQWtCLGNBQUwsS0FBSyxHQUFsQixLQUFrQjtRQUMzRSx3QkFBd0IsR0FBRywyQkFBMkIsQ0FBQyxPQUFPLEdBQzlELElBQUk7UUFDRixXQUFXLEVBQVgsV0FBVztPQUViLElBQUksR0FBRyx3QkFBd0IsRUFDL0IsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUMzQixVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVU7SUFFM0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVU7O1NBR2hDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxRQUFRO1FBQzdDLHdCQUF3QixHQUFHLDJCQUEyQixDQUFDLE9BQU8sR0FDOUQsSUFBSSxHQUFHLHdCQUF3QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUzQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUk7O1NBR2xCLDZCQUE2QixDQUFDLE9BQU8sRUFBRSxPQUFPO1FBQzdDLE9BQU8sR0FBSyxPQUFPLENBQW5CLE9BQU8sRUFDVCx3QkFBd0IsR0FBRywyQkFBMkIsQ0FBQyxPQUFPLEdBQzlELElBQUksR0FBRyx3QkFBd0IsRUFDL0IsMkJBQTJCLEtBQUssT0FBTyxDQUFDLElBQUk7V0FFM0MsMkJBQTJCOztBQUdwQyxNQUFNLENBQUMsT0FBTztJQUNaLHVCQUF1QixFQUF2Qix1QkFBdUI7SUFDdkIsMEJBQTBCLEVBQTFCLDBCQUEwQjtJQUMxQiw2QkFBNkIsRUFBN0IsNkJBQTZCOztTQUd0QiwyQkFBMkIsQ0FBQyxPQUFPO1FBQ2xDLFFBQVEsR0FBSyxPQUFPLENBQXBCLFFBQVEsRUFDVix3QkFBd0IsTUFBMkMsTUFBUSxDQXRDRixVQUFhLHFDQXNDdEIsQ0FBQyxHQUFXLE1BQUEsQ0FBVCxRQUFRO1dBRTFFLHdCQUF3Qjs7U0FHeEIsYUFBYSxDQUFDLFVBQVU7UUFDekIsVUFBVTs7UUFFWixVQUFVO1lBQ04sT0FBTyxHQS9DZ0UsVUFBYTtRQWlEMUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQ3RCLE9BQU8sRUFBUCxPQUFPOzs7V0FJSixVQUFVIn0=