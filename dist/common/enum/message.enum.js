"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMessage = exports.confilictMessage = exports.NotFoundMessage = exports.BadRequestMessage = exports.PublicMessage = void 0;
var PublicMessage;
(function (PublicMessage) {
    PublicMessage["SendOtpCode"] = "\u06A9\u062F \u0628\u0627\u0645\u0648\u0641\u0642\u0639\u06CC\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F";
    PublicMessage["EntredSuccessfully"] = "\u0628\u0627\u0645\u0648\u0641\u0642\u06CC\u062A \u0648\u0627\u0631\u062F \u0634\u062F\u06CC\u062F";
})(PublicMessage || (exports.PublicMessage = PublicMessage = {}));
var BadRequestMessage;
(function (BadRequestMessage) {
    BadRequestMessage["InvalidMobileNumber"] = "\u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A";
    BadRequestMessage["UnInvalidOtpCode"] = "\u06A9\u062F \u0642\u0628\u0644\u06CC \u0647\u0646\u0648\u0632 \u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A";
})(BadRequestMessage || (exports.BadRequestMessage = BadRequestMessage = {}));
var NotFoundMessage;
(function (NotFoundMessage) {
    NotFoundMessage["NotFoundUser"] = "\u06A9\u0627\u0631\u0628\u0631\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F";
})(NotFoundMessage || (exports.NotFoundMessage = NotFoundMessage = {}));
var confilictMessage;
(function (confilictMessage) {
    confilictMessage["ConfilictMobile"] = "\u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u0642\u0628\u0644\u0627 \u062B\u0628\u062A \u0634\u062F\u0647";
})(confilictMessage || (exports.confilictMessage = confilictMessage = {}));
var AuthMessage;
(function (AuthMessage) {
    AuthMessage["InvalidOtpCode"] = "\u06A9\u062F \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A";
    AuthMessage["ExpiredOtpCode"] = "\u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u0642\u0636\u0627 \u06A9\u062F \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u06CC\u062F\u0647";
    AuthMessage["UnEntredAcoount"] = "\u0644\u0637\u0641\u0627 \u0648\u0627\u0631\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u06CC\u062F";
})(AuthMessage || (exports.AuthMessage = AuthMessage = {}));
//# sourceMappingURL=message.enum.js.map