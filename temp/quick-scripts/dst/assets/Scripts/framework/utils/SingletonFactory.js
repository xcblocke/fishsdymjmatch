
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/utils/SingletonFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVVBLENBQUM7SUFSUSw0QkFBVyxHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBUk0sMEJBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBUy9CLHVCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpbmdsZXRvbkZhY3Rvcnkge1xuICBzdGF0aWMgaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UodCkge1xuICAgIGlmICghU2luZ2xldG9uRmFjdG9yeS5pbnN0YW5jZXMuaGFzKHQpKSB7XG4gICAgICB2YXIgbyA9IG5ldyB0KCk7XG4gICAgICBTaW5nbGV0b25GYWN0b3J5Lmluc3RhbmNlcy5zZXQodCwgbyk7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgcmV0dXJuIFNpbmdsZXRvbkZhY3RvcnkuaW5zdGFuY2VzLmdldCh0KTtcbiAgfVxufSJdfQ==