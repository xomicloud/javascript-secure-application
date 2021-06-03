"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.html = html;
exports.redirect = redirect;
exports.bodyFromResponse = bodyFromResponse;
exports.internalServerError = internalServerError;
exports.default = void 0;
var _constants = require("./constants");
var _contentTypes = require("./contentTypes");
var _statusCodes = require("./statusCodes");
function html(response, html1) {
    response.setHeader(_constants.CONTENT_TYPE, _contentTypes.TEXT_HTML_CONTENT_TYPE);
    response.status(_statusCodes.OK_200_STATUS_CODE);
    response.end(html1);
}
function redirect(response, location) {
    response.setHeader(_constants.LOCATION, location);
    response.status(_statusCodes.SEE_OTHER_303_STATUS_CODE);
    response.end(_constants.EMPTY_STRING);
}
function bodyFromResponse(response, callback) {
    var body = "";
    response.on(_constants.DATA, function(data) {
        body += data;
    });
    response.on(_constants.END, function() {
        callback(body);
    });
}
function internalServerError(response, error) {
    response.setHeader(_constants.CONTENT_TYPE, _contentTypes.TEXT_PLAIN_CONTENT_TYPE);
    response.status(_statusCodes.INTERNAL_SERVER_ERROR_500_STATUS_CODE);
    response.end(error);
}
var _default = {
    html: html,
    redirect: redirect,
    bodyFromResponse: bodyFromResponse,
    internalServerError: internalServerError
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9odHRwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTkQsIERBVEEsIExPQ0FUSU9OLCBFTVBUWV9TVFJJTkcsIENPTlRFTlRfVFlQRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSwgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IE9LXzIwMF9TVEFUVVNfQ09ERSwgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSwgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSB9IGZyb20gXCIuL3N0YXR1c0NvZGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKHJlc3BvbnNlLCBodG1sKSB7XG4gIHJlc3BvbnNlLnNldEhlYWRlcihDT05URU5UX1RZUEUsIFRFWFRfSFRNTF9DT05URU5UX1RZUEUpO1xuXG4gIHJlc3BvbnNlLnN0YXR1cyhPS18yMDBfU1RBVFVTX0NPREUpO1xuXG4gIHJlc3BvbnNlLmVuZChodG1sKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KHJlc3BvbnNlLCBsb2NhdGlvbikge1xuICByZXNwb25zZS5zZXRIZWFkZXIoTE9DQVRJT04sIGxvY2F0aW9uKTtcblxuICByZXNwb25zZS5zdGF0dXMoU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSk7XG5cbiAgcmVzcG9uc2UuZW5kKEVNUFRZX1NUUklORyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib2R5RnJvbVJlc3BvbnNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICBsZXQgYm9keSA9IFwiXCI7XG5cbiAgcmVzcG9uc2Uub24oREFUQSwgKGRhdGEpID0+IHtcbiAgICBib2R5ICs9IGRhdGE7XG4gIH0pO1xuXG4gIHJlc3BvbnNlLm9uKEVORCwgKCkgPT4ge1xuICAgIGNhbGxiYWNrKGJvZHkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVybmFsU2VydmVyRXJyb3IocmVzcG9uc2UsIGVycm9yKSB7XG4gIHJlc3BvbnNlLnNldEhlYWRlcihDT05URU5UX1RZUEUsIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFKTtcblxuICByZXNwb25zZS5zdGF0dXMoSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSk7XG5cbiAgcmVzcG9uc2UuZW5kKGVycm9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBodG1sLFxuICByZWRpcmVjdCxcbiAgYm9keUZyb21SZXNwb25zZSxcbiAgaW50ZXJuYWxTZXJ2ZXJFcnJvclxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksSUFBSSxHQUFKLElBQUk7UUFRSixRQUFRLEdBQVIsUUFBUTtRQVFSLGdCQUFnQixHQUFoQixnQkFBZ0I7UUFZaEIsbUJBQW1CLEdBQW5CLG1CQUFtQjs7SUFoQzZCLFVBQWE7SUFDYixhQUFnQjtJQUNxQixZQUFlO1NBRXBHLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSTtJQUNqQyxRQUFRLENBQUMsU0FBUyxDQUw0QyxVQUFhLGVBQ2IsYUFBZ0I7SUFNOUUsUUFBUSxDQUFDLE1BQU0sQ0FMb0YsWUFBZTtJQU9sSCxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUk7O1NBR0gsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRO0lBQ3pDLFFBQVEsQ0FBQyxTQUFTLENBYjRDLFVBQWEsV0FhOUMsUUFBUTtJQUVyQyxRQUFRLENBQUMsTUFBTSxDQWJvRixZQUFlO0lBZWxILFFBQVEsQ0FBQyxHQUFHLENBakJrRCxVQUFhOztTQW9CN0QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVE7UUFDN0MsSUFBSTtJQUVSLFFBQVEsQ0FBQyxFQUFFLENBdkJtRCxVQUFhLGdCQXVCeEQsSUFBSTtRQUNyQixJQUFJLElBQUksSUFBSTs7SUFHZCxRQUFRLENBQUMsRUFBRSxDQTNCbUQsVUFBYTtRQTRCekUsUUFBUSxDQUFDLElBQUk7OztTQUlELG1CQUFtQixDQUFDLFFBQVEsRUFBRSxLQUFLO0lBQ2pELFFBQVEsQ0FBQyxTQUFTLENBakM0QyxVQUFhLGVBQ2IsYUFBZ0I7SUFrQzlFLFFBQVEsQ0FBQyxNQUFNLENBakNvRixZQUFlO0lBbUNsSCxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUs7OztJQUlsQixJQUFJLEVBQUosSUFBSTtJQUNKLFFBQVEsRUFBUixRQUFRO0lBQ1IsZ0JBQWdCLEVBQWhCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBbkIsbUJBQW1CIn0=