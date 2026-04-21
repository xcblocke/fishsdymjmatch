
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameUIEdge/Scripts/MainGameUIEdgeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '119bcRRkatAl4/NoJPlVPHQ', 'MainGameUIEdgeTrait');
// subpackages/l_mainGameUIEdge/Scripts/MainGameUIEdgeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MainGameUIEdgeTrait = /** @class */ (function (_super) {
    __extends(MainGameUIEdgeTrait, _super);
    function MainGameUIEdgeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameUIEdgeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameUIEdgeTrait.prototype.onGameUI_onLoad = function (t, e) {
        var o = t.ins;
        if (o && cc.isValid(o.node)) {
            var i = UserModel_1.default.getInstance().getCurrentGameType();
            if (i === GameTypeEnums_1.MjGameType.DailyChallenge || i === GameTypeEnums_1.MjGameType.Normal) {
                var n = cc.find("nodeTop/gameplay_bg_up", o.node), r = cc.find("nodeTop/gameplay_bg_mask_top", o.node);
                if (n && cc.isValid(n)) {
                    var a = n.getComponent(cc.Widget);
                    a && a.isAlignTop && (a.top = a.top - 20);
                }
                if (r && cc.isValid(r)) {
                    var s = r.getComponent(cc.Widget);
                    s && s.isAlignTop && (s.top = s.top - 20);
                }
            }
            o.btnShuffle && cc.isValid(o.btnShuffle) && (o.btnShuffle.position = new cc.Vec3(o.btnShuffle.position.x, o.btnShuffle.position.y + 10, 0));
            o.btnHitTips && cc.isValid(o.btnHitTips) && (o.btnHitTips.position = new cc.Vec3(o.btnHitTips.position.x, o.btnHitTips.position.y + 10, 0));
            e();
        }
        else
            e();
    };
    MainGameUIEdgeTrait.traitKey = "MainGameUIEdge";
    MainGameUIEdgeTrait = __decorate([
        mj.trait,
        mj.class("MainGameUIEdgeTrait")
    ], MainGameUIEdgeTrait);
    return MainGameUIEdgeTrait;
}(Trait_1.default));
exports.default = MainGameUIEdgeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lVUlFZGdlL1NjcmlwdHMvTWFpbkdhbWVVSUVkZ2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFHcEY7SUFBaUQsdUNBQUs7SUFBdEQ7O0lBMEJBLENBQUM7SUF4QkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDZDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMvQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUMzQzthQUNGO1lBQ0QsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVJLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1SSxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXhCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0EwQnZDO0lBQUQsMEJBQUM7Q0ExQkQsQUEwQkMsQ0ExQmdELGVBQUssR0EwQnJEO2tCQTFCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWFpbkdhbWVVSUVkZ2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWVVSUVkZ2VUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYWluR2FtZVVJRWRnZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25HYW1lVUlfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgbyA9IHQuaW5zO1xuICAgIGlmIChvICYmIGNjLmlzVmFsaWQoby5ub2RlKSkge1xuICAgICAgdmFyIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIGlmIChpID09PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlIHx8IGkgPT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIHZhciBuID0gY2MuZmluZChcIm5vZGVUb3AvZ2FtZXBsYXlfYmdfdXBcIiwgby5ub2RlKSxcbiAgICAgICAgICByID0gY2MuZmluZChcIm5vZGVUb3AvZ2FtZXBsYXlfYmdfbWFza190b3BcIiwgby5ub2RlKTtcbiAgICAgICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgICAgIHZhciBhID0gbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgICBhICYmIGEuaXNBbGlnblRvcCAmJiAoYS50b3AgPSBhLnRvcCAtIDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAociAmJiBjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgICAgdmFyIHMgPSByLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICAgIHMgJiYgcy5pc0FsaWduVG9wICYmIChzLnRvcCA9IHMudG9wIC0gMjApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvLmJ0blNodWZmbGUgJiYgY2MuaXNWYWxpZChvLmJ0blNodWZmbGUpICYmIChvLmJ0blNodWZmbGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhvLmJ0blNodWZmbGUucG9zaXRpb24ueCwgby5idG5TaHVmZmxlLnBvc2l0aW9uLnkgKyAxMCwgMCkpO1xuICAgICAgby5idG5IaXRUaXBzICYmIGNjLmlzVmFsaWQoby5idG5IaXRUaXBzKSAmJiAoby5idG5IaXRUaXBzLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoby5idG5IaXRUaXBzLnBvc2l0aW9uLngsIG8uYnRuSGl0VGlwcy5wb3NpdGlvbi55ICsgMTAsIDApKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19