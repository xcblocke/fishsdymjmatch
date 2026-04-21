
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DailyChallengeDateEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6831egHyylEYJ3V/K5asyVY', 'DailyChallengeDateEffect');
// Scripts/DailyChallengeDateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeDateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DailyChallengeDateEffect = /** @class */ (function (_super) {
    __extends(DailyChallengeDateEffect, _super);
    function DailyChallengeDateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DailyChallengeDate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DailyChallengeDateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DailyChallengeDateEffect;
}(BaseEffect_1.default));
exports.DailyChallengeDateEffect = DailyChallengeDateEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RhaWx5Q2hhbGxlbmdlRGF0ZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwyQ0FBc0M7QUFDdEM7SUFBOEMsNENBQVU7SUFNdEQsa0NBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFSRCxXQUFLLEdBQUcsbUNBQWdCLENBQUMsa0JBQWtCLENBQUM7UUFDNUMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUksMENBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILCtCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVjZDLG9CQUFVLEdBVXZEO0FBVlksNERBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4vbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4vQmFzZUVmZmVjdCc7XG5leHBvcnQgY2xhc3MgRGFpbHlDaGFsbGVuZ2VEYXRlRWZmZWN0IGV4dGVuZHMgQmFzZUVmZmVjdCB7XG4gIF9uYW1lID0gQmVoYXZpb3JzTWFwcGluZy5EYWlseUNoYWxsZW5nZURhdGU7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19