
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/context/BaseContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnRleHQvQmFzZUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ0UsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUtuQixDQUFDO0lBSkMsc0JBQUksZ0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELDZCQUFPLEdBQVAsY0FBVyxDQUFDO0lBQ2Qsa0JBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2VDb250ZXh0IHtcbiAgX2lzVmlkZW8gPSBmYWxzZTtcbiAgZ2V0IGlzVmlkZW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmlkZW87XG4gIH1cbiAgZGlzcG9zZSgpIHt9XG59Il19