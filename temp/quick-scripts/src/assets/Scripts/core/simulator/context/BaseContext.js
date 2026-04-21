"use strict";
cc._RF.push(module, '52c99DqZQZD6rylesUUdI4l', 'BaseContext');
// Scripts/core/simulator/context/BaseContext.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseContext = void 0;
var BaseContext = /** @class */ (function () {
    function BaseContext() {
        this._isVideo = false;
    }
    Object.defineProperty(BaseContext.prototype, "isVideo", {
        get: function () {
            return this._isVideo;
        },
        enumerable: false,
        configurable: true
    });
    BaseContext.prototype.dispose = function () { };
    return BaseContext;
}());
exports.BaseContext = BaseContext;

cc._RF.pop();