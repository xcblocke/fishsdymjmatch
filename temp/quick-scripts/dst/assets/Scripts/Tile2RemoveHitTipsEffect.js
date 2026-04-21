
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2RemoveHitTipsEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '311a8GgsLZL77ABCd8DLeiE', 'Tile2RemoveHitTipsEffect');
// Scripts/Tile2RemoveHitTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RemoveHitTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2RemoveHitTipsEffect = /** @class */ (function (_super) {
    __extends(Tile2RemoveHitTipsEffect, _super);
    function Tile2RemoveHitTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2RemoveHitTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2RemoveHitTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2RemoveHitTipsEffect;
}(BaseEffect_1.default));
exports.Tile2RemoveHitTipsEffect = Tile2RemoveHitTipsEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyUmVtb3ZlSGl0VGlwc0VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwyQ0FBc0M7QUFDdEM7SUFBOEMsNENBQVU7SUFNdEQsa0NBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFSRCxXQUFLLEdBQUcsbUNBQWdCLENBQUMsa0JBQWtCLENBQUM7UUFDNUMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUksMENBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILCtCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVjZDLG9CQUFVLEdBVXZEO0FBVlksNERBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4vbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4vQmFzZUVmZmVjdCc7XG5leHBvcnQgY2xhc3MgVGlsZTJSZW1vdmVIaXRUaXBzRWZmZWN0IGV4dGVuZHMgQmFzZUVmZmVjdCB7XG4gIF9uYW1lID0gQmVoYXZpb3JzTWFwcGluZy5UaWxlMlJlbW92ZUhpdFRpcHM7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19