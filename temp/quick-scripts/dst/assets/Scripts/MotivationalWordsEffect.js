
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MotivationalWordsEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bc1aJvcjZLcam44lpx6MpT', 'MotivationalWordsEffect');
// Scripts/MotivationalWordsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivationalWordsEffect = void 0;
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var MotivationalWordsEffect = /** @class */ (function (_super) {
    __extends(MotivationalWordsEffect, _super);
    function MotivationalWordsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.MotivationalWords;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(MotivationalWordsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    MotivationalWordsEffect.soundNameArr = [GameTypeEnums_1.EAudioID.Good, GameTypeEnums_1.EAudioID.Great, GameTypeEnums_1.EAudioID.Excellent, GameTypeEnums_1.EAudioID.Amazing, GameTypeEnums_1.EAudioID.Unbelievable];
    MotivationalWordsEffect.aniCfg = {
        0: "in_good",
        1: "in_great",
        2: "in_excellent",
        3: "in_amazing",
        4: "in_unbelievable"
    };
    return MotivationalWordsEffect;
}(BaseEffect_1.default));
exports.MotivationalWordsEffect = MotivationalWordsEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQW1FO0FBQ25FLCtEQUE4RDtBQUM5RCwyQ0FBc0M7QUFDdEM7SUFBNkMsMkNBQVU7SUFjckQsaUNBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFoQkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLGlCQUFpQixDQUFDO1FBQzNDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFjWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLHlDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFWTSxvQ0FBWSxHQUFHLENBQUMsd0JBQVEsQ0FBQyxJQUFJLEVBQUUsd0JBQVEsQ0FBQyxLQUFLLEVBQUUsd0JBQVEsQ0FBQyxTQUFTLEVBQUUsd0JBQVEsQ0FBQyxPQUFPLEVBQUUsd0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1Ryw4QkFBTSxHQUFHO1FBQ2QsQ0FBQyxFQUFFLFNBQVM7UUFDWixDQUFDLEVBQUUsVUFBVTtRQUNiLENBQUMsRUFBRSxjQUFjO1FBQ2pCLENBQUMsRUFBRSxZQUFZO1FBQ2YsQ0FBQyxFQUFFLGlCQUFpQjtLQUNyQixDQUFDO0lBUUosOEJBQUM7Q0FsQkQsQUFrQkMsQ0FsQjRDLG9CQUFVLEdBa0J0RDtBQWxCWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuTW90aXZhdGlvbmFsV29yZHM7XG4gIF9kYXRhID0gbnVsbDtcbiAgc3RhdGljIHNvdW5kTmFtZUFyciA9IFtFQXVkaW9JRC5Hb29kLCBFQXVkaW9JRC5HcmVhdCwgRUF1ZGlvSUQuRXhjZWxsZW50LCBFQXVkaW9JRC5BbWF6aW5nLCBFQXVkaW9JRC5VbmJlbGlldmFibGVdO1xuICBzdGF0aWMgYW5pQ2ZnID0ge1xuICAgIDA6IFwiaW5fZ29vZFwiLFxuICAgIDE6IFwiaW5fZ3JlYXRcIixcbiAgICAyOiBcImluX2V4Y2VsbGVudFwiLFxuICAgIDM6IFwiaW5fYW1hemluZ1wiLFxuICAgIDQ6IFwiaW5fdW5iZWxpZXZhYmxlXCJcbiAgfTtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19