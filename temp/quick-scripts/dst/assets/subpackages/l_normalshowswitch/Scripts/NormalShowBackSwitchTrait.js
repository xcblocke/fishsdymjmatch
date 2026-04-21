
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_normalshowswitch/Scripts/NormalShowBackSwitchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42babiJCz5AIb4dG8j1zqpQ', 'NormalShowBackSwitchTrait');
// subpackages/l_normalshowswitch/Scripts/NormalShowBackSwitchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalShowBackSwitchTrait = /** @class */ (function (_super) {
    __extends(NormalShowBackSwitchTrait, _super);
    function NormalShowBackSwitchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalShowBackSwitchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalShowBackSwitchTrait.prototype.onIptSetLv_setData = function (t, e) {
        var r = t.ins;
        this.switchNormalShowBack(r);
        e();
    };
    NormalShowBackSwitchTrait.prototype.onIptT2SetLv_setData = function (t, e) {
        var r = t.ins;
        this.switchNormalShowBack(r);
        e();
    };
    NormalShowBackSwitchTrait.prototype.isCurLevelCanGainBoxReward = function (t) {
        if (t.gameContext.gameType != GameTypeEnums_1.MjGameType.Normal && t.gameContext.gameType != GameTypeEnums_1.MjGameType.Tile2Normal)
            return false;
        var e = mj.getClassByName("NormalBoxTrait");
        if (e && true === e.getInstance().eventEnabled)
            return 1 === e.getInstance().getRemainingProgress();
        var r = mj.getClassByName("LevelBoxTrait");
        return !(!r || true !== r.getInstance().eventEnabled) && 1 === r.getInstance().getRemainingProgress();
    };
    NormalShowBackSwitchTrait.prototype.switchNormalShowBack = function (t) {
        var e = this.isCurLevelCanGainBoxReward(t), r = mj.getClassByName("NormalShowBackTrait");
        r && (r.getInstance().eventEnabled = e);
        var o = mj.getClassByName("Tile2NormalShowBackTrait");
        o && (o.getInstance().eventEnabled = e);
    };
    NormalShowBackSwitchTrait.traitKey = "NormalShowBackSwitch";
    NormalShowBackSwitchTrait = __decorate([
        mj.trait,
        mj.class("NormalShowBackSwitchTrait")
    ], NormalShowBackSwitchTrait);
    return NormalShowBackSwitchTrait;
}(Trait_1.default));
exports.default = NormalShowBackSwitchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vcm1hbHNob3dzd2l0Y2gvU2NyaXB0cy9Ob3JtYWxTaG93QmFja1N3aXRjaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBRzNEO0lBQXVELDZDQUFLO0lBQTVEOztJQTZCQSxDQUFDO0lBM0JDLDBDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx3REFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw4REFBMEIsR0FBMUIsVUFBMkIsQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLDBCQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLDBCQUFVLENBQUMsV0FBVztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2xILElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVk7WUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNwRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hHLENBQUM7SUFDRCx3REFBb0IsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLEVBQ3hDLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBM0JNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFEdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0E2QjdDO0lBQUQsZ0NBQUM7Q0E3QkQsQUE2QkMsQ0E3QnNELGVBQUssR0E2QjNEO2tCQTdCb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOb3JtYWxTaG93QmFja1N3aXRjaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxTaG93QmFja1N3aXRjaFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk5vcm1hbFNob3dCYWNrU3dpdGNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdFNldEx2X3NldERhdGEodCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgdGhpcy5zd2l0Y2hOb3JtYWxTaG93QmFjayhyKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRUMlNldEx2X3NldERhdGEodCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgdGhpcy5zd2l0Y2hOb3JtYWxTaG93QmFjayhyKTtcbiAgICBlKCk7XG4gIH1cbiAgaXNDdXJMZXZlbENhbkdhaW5Cb3hSZXdhcmQodCkge1xuICAgIGlmICh0LmdhbWVDb250ZXh0LmdhbWVUeXBlICE9IE1qR2FtZVR5cGUuTm9ybWFsICYmIHQuZ2FtZUNvbnRleHQuZ2FtZVR5cGUgIT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJOb3JtYWxCb3hUcmFpdFwiKTtcbiAgICBpZiAoZSAmJiB0cnVlID09PSBlLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkKSByZXR1cm4gMSA9PT0gZS5nZXRJbnN0YW5jZSgpLmdldFJlbWFpbmluZ1Byb2dyZXNzKCk7XG4gICAgdmFyIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIkxldmVsQm94VHJhaXRcIik7XG4gICAgcmV0dXJuICEoIXIgfHwgdHJ1ZSAhPT0gci5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCkgJiYgMSA9PT0gci5nZXRJbnN0YW5jZSgpLmdldFJlbWFpbmluZ1Byb2dyZXNzKCk7XG4gIH1cbiAgc3dpdGNoTm9ybWFsU2hvd0JhY2sodCkge1xuICAgIHZhciBlID0gdGhpcy5pc0N1ckxldmVsQ2FuR2FpbkJveFJld2FyZCh0KSxcbiAgICAgIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIk5vcm1hbFNob3dCYWNrVHJhaXRcIik7XG4gICAgciAmJiAoci5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCA9IGUpO1xuICAgIHZhciBvID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUaWxlMk5vcm1hbFNob3dCYWNrVHJhaXRcIik7XG4gICAgbyAmJiAoby5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCA9IGUpO1xuICB9XG59Il19