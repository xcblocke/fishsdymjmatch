
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBonusCollectEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a57c93nErdDzY9e96bH/oJw', 'RankBonusCollectEffect');
// subpackages/l_rank/Scripts/RankBonusCollectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankModel_1 = require("./RankModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankBonusCollectEffect = /** @class */ (function (_super) {
    __extends(RankBonusCollectEffect, _super);
    function RankBonusCollectEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card_node = null;
        _this.sp_light = null;
        return _this;
    }
    RankBonusCollectEffect.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.card_node = this.node.getChildByName("card_node");
        var e = this.node.getChildByName("sp_light");
        e && (this.sp_light = e.getComponent(sp.Skeleton));
        this.updateCardSprite();
    };
    RankBonusCollectEffect.prototype.updateCardSprite = function () {
        if (cc.isValid(this.card_node)) {
            var t = RankModel_1.default.getInstance().getCurBoardData();
            if (t && t.CollectThing) {
                this.updateImgCard(this.card_node.getChildByName("card"));
                var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), o = e.path, n = e.bundleName, a = e.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this.card_node.getChildByName("card_bg"), o, a, false, n);
            }
        }
    };
    RankBonusCollectEffect.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankBonusCollectEffect.prototype.playEffect = function (t, e, o) {
        var n = this;
        if (this.card_node) {
            this.card_node.scale = 0;
            this.card_node.position = cc.v3(0, 0, 0);
            if (this.sp_light) {
                this.sp_light.node.position = cc.v3(0, 0, 0);
                this.sp_light.node.active = false;
            }
            this.card_node.parent.convertToWorldSpaceAR(this.card_node.position);
            cc.tween(this.card_node).to(0.16, {
                scale: 1.3
            }, {
                easing: "cubicIn"
            }).call(function () {
                var a = n.card_node.parent.convertToNodeSpaceAR(t);
                n.sp_light.node.position = cc.v3(a.x, a.y, 0);
                cc.tween(n.card_node).parallel(cc.tween().to(0.34, {
                    scale: 1
                }, {
                    easing: "cubicIn"
                }), cc.tween().to(0.34, {
                    position: cc.v3(a.x, a.y, 0)
                }, {
                    easing: "sineInOut"
                })).call(function () {
                    n.card_node.active = false;
                    n.playLightEffect(e);
                    o && o();
                }).start();
            }).start();
        }
        else
            o && o();
    };
    RankBonusCollectEffect.prototype.playLightEffect = function (t) {
        var e = this;
        this.sp_light;
        this.sp_light.node.active = true;
        var o = t ? "in_2" : "in_1";
        this.sp_light.setAnimation(0, o, false);
        this.sp_light.setCompleteListener(function () {
            e.sp_light.setCompleteListener(null);
            e.node.destroy();
        });
    };
    RankBonusCollectEffect.prototype.stopEffect = function () {
        this.card_node && cc.Tween.stopAllByTarget(this.card_node);
        this.sp_light && this.sp_light.setCompleteListener(null);
    };
    RankBonusCollectEffect.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        this.stopEffect();
    };
    RankBonusCollectEffect.prefabUrl = "prefabs/rank/RankBonusCollectEffect";
    __decorate([
        mj.traitEvent("RankColEff_updImgCard")
    ], RankBonusCollectEffect.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankColEff_playLightEff")
    ], RankBonusCollectEffect.prototype, "playLightEffect", null);
    RankBonusCollectEffect = __decorate([
        mj.class
    ], RankBonusCollectEffect);
    return RankBonusCollectEffect;
}(BaseUI_1.default));
exports.default = RankBonusCollectEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm9udXNDb2xsZWN0RWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQseUNBQW9DO0FBQ3BDLDJFQUFzRTtBQUN0RSxvRUFBK0Q7QUFDL0Qsc0VBQWlFO0FBRWpFO0lBQW9ELDBDQUFNO0lBQTFEO1FBQUEscUVBc0ZDO1FBckZDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUFvRmxCLENBQUM7SUFsRkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELGlEQUFnQixHQUFoQjtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFH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QztJQUNELDBDQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLElBQUksaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQWxGTSxnQ0FBUyxHQUFHLHFDQUFxQyxDQUFDO0lBc0J6RDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7K0RBUXRDO0lBbUNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztpRUFXeEM7SUE3RWtCLHNCQUFzQjtRQUQxQyxFQUFFLENBQUMsS0FBSztPQUNZLHNCQUFzQixDQXNGMUM7SUFBRCw2QkFBQztDQXRGRCxBQXNGQyxDQXRGbUQsZ0JBQU0sR0FzRnpEO2tCQXRGb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IFJhbmtNb2RlbCBmcm9tICcuL1JhbmtNb2RlbCc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtCb251c0NvbGxlY3RFZmZlY3QgZXh0ZW5kcyBCYXNlVUkge1xuICBjYXJkX25vZGUgPSBudWxsO1xuICBzcF9saWdodCA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvcmFuay9SYW5rQm9udXNDb2xsZWN0RWZmZWN0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNhcmRfbm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNhcmRfbm9kZVwiKTtcbiAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwX2xpZ2h0XCIpO1xuICAgIGUgJiYgKHRoaXMuc3BfbGlnaHQgPSBlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikpO1xuICAgIHRoaXMudXBkYXRlQ2FyZFNwcml0ZSgpO1xuICB9XG4gIHVwZGF0ZUNhcmRTcHJpdGUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkX25vZGUpKSB7XG4gICAgICB2YXIgdCA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckJvYXJkRGF0YSgpO1xuICAgICAgaWYgKHQgJiYgdC5Db2xsZWN0VGhpbmcpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbWdDYXJkKHRoaXMuY2FyZF9ub2RlLmdldENoaWxkQnlOYW1lKFwiY2FyZFwiKSk7XG4gICAgICAgIHZhciBlID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X3NwZWNpYWxfbWpfMlwiKSxcbiAgICAgICAgICBvID0gZS5wYXRoLFxuICAgICAgICAgIG4gPSBlLmJ1bmRsZU5hbWUsXG4gICAgICAgICAgYSA9IGUuZnJvbUF0bGFzO1xuICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmNhcmRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImNhcmRfYmdcIiksIG8sIGEsIGZhbHNlLCBuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQ29sRWZmX3VwZEltZ0NhcmRcIilcbiAgdXBkYXRlSW1nQ2FyZCh0KSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSxcbiAgICAgIG8gPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKGUpLFxuICAgICAgbiA9IG8ucGF0aCxcbiAgICAgIGEgPSBvLmJ1bmRsZU5hbWUsXG4gICAgICBpID0gby5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodCwgbiwgaSwgZmFsc2UsIGEpO1xuICB9XG4gIHBsYXlFZmZlY3QodCwgZSwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAodGhpcy5jYXJkX25vZGUpIHtcbiAgICAgIHRoaXMuY2FyZF9ub2RlLnNjYWxlID0gMDtcbiAgICAgIHRoaXMuY2FyZF9ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICBpZiAodGhpcy5zcF9saWdodCkge1xuICAgICAgICB0aGlzLnNwX2xpZ2h0Lm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5zcF9saWdodC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5jYXJkX25vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmNhcmRfbm9kZS5wb3NpdGlvbik7XG4gICAgICBjYy50d2Vlbih0aGlzLmNhcmRfbm9kZSkudG8oMC4xNiwge1xuICAgICAgICBzY2FsZTogMS4zXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJjdWJpY0luXCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IG4uY2FyZF9ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgICAgbi5zcF9saWdodC5ub2RlLnBvc2l0aW9uID0gY2MudjMoYS54LCBhLnksIDApO1xuICAgICAgICBjYy50d2VlbihuLmNhcmRfbm9kZSkucGFyYWxsZWwoY2MudHdlZW4oKS50bygwLjM0LCB7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJjdWJpY0luXCJcbiAgICAgICAgfSksIGNjLnR3ZWVuKCkudG8oMC4zNCwge1xuICAgICAgICAgIHBvc2l0aW9uOiBjYy52MyhhLngsIGEueSwgMClcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgICB9KSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbi5jYXJkX25vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbi5wbGF5TGlnaHRFZmZlY3QoZSk7XG4gICAgICAgICAgbyAmJiBvKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSBvICYmIG8oKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtDb2xFZmZfcGxheUxpZ2h0RWZmXCIpXG4gIHBsYXlMaWdodEVmZmVjdCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuc3BfbGlnaHQ7XG4gICAgdGhpcy5zcF9saWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIG8gPSB0ID8gXCJpbl8yXCIgOiBcImluXzFcIjtcbiAgICB0aGlzLnNwX2xpZ2h0LnNldEFuaW1hdGlvbigwLCBvLCBmYWxzZSk7XG4gICAgdGhpcy5zcF9saWdodC5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuc3BfbGlnaHQuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgIGUubm9kZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgc3RvcEVmZmVjdCgpIHtcbiAgICB0aGlzLmNhcmRfbm9kZSAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5jYXJkX25vZGUpO1xuICAgIHRoaXMuc3BfbGlnaHQgJiYgdGhpcy5zcF9saWdodC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5zdG9wRWZmZWN0KCk7XG4gIH1cbn0iXX0=