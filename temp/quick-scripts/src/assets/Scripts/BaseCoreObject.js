"use strict";
cc._RF.push(module, '762b3NzGClO1LwDGLzCOLZr', 'BaseCoreObject');
// Scripts/BaseCoreObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCoreObject = void 0;
var BaseCoreObject = /** @class */ (function () {
    function BaseCoreObject(e) {
        this._context = null;
        this._context = e;
        this.init();
    }
    Object.defineProperty(BaseCoreObject.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    BaseCoreObject.prototype.init = function () { };
    BaseCoreObject.prototype.dispose = function () { };
    return BaseCoreObject;
}());
exports.BaseCoreObject = BaseCoreObject;

cc._RF.pop();