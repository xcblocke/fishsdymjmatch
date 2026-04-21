"use strict";
cc._RF.push(module, 'a0248b5Af1HDIP0DSY3fwx/', 'SingletonFactory');
// Scripts/framework/utils/SingletonFactory.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonFactory = void 0;
var SingletonFactory = /** @class */ (function () {
    function SingletonFactory() {
    }
    SingletonFactory.getInstance = function (t) {
        if (!SingletonFactory.instances.has(t)) {
            var o = new t();
            SingletonFactory.instances.set(t, o);
            return o;
        }
        return SingletonFactory.instances.get(t);
    };
    SingletonFactory.instances = new Map();
    return SingletonFactory;
}());
exports.SingletonFactory = SingletonFactory;

cc._RF.pop();