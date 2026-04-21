
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankCollectCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3e1c+Y2DRH3KINcqUA3nFM', 'RankCollectCard');
// subpackages/l_rank/Scripts/RankCollectCard.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankModel_1 = require("./RankModel");
var RankCollectCard = /** @class */ (function (_super) {
    __extends(RankCollectCard, _super);
    function RankCollectCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lab_count = null;
        _this._cardNode = null;
        _this._cardBgNode = null;
        _this._cardSpriteNode = null;
        _this.bg = null;
        _this._isPlayingScaleAnim = false;
        _this._pendingAnimCount = 0;
        _this._currentCount = 0;
        _this._pendingCardCount = 0;
        return _this;
    }
    RankCollectCard.getUrl = function () {
        return this.prefabUrl;
    };
    RankCollectCard.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bg = this.node.getChildByName("bg");
        this.lab_count = cc.find("bg/lab_count", this.node);
        this._cardNode = cc.find("bg/card_node", this.node);
        this._cardBgNode = this._cardNode.getChildByName("card_bg");
        this._cardSpriteNode = this._cardNode.getChildByName("card");
    };
    RankCollectCard.prototype.initUI = function () {
        var t = RankModel_1.default.getInstance(), e = t.getCurBoardData();
        this.updateCardBg();
        var o = (null == e ? void 0 : e.CollectThing) || "";
        o && this.updateCardSprite(o);
        var n = t.getLevelCollectCount();
        this.updateCount(n);
    };
    RankCollectCard.prototype.updateCount = function (t) {
        if (cc.isValid(this.lab_count)) {
            var e = this.lab_count.getComponent(cc.Label);
            e && (e.string = t.toString());
        }
    };
    RankCollectCard.prototype.updateCardBg = function () {
        if (cc.isValid(this._cardBgNode)) {
            var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), e = t.path, o = t.bundleName, n = t.fromAtlas;
            BaseSprite_1.default.refreshWithNode(this._cardBgNode, e, n, false, o);
        }
    };
    RankCollectCard.prototype.updateCardSprite = function () {
        cc.isValid(this._cardNode) && this.updateImgCard(this._cardSpriteNode);
    };
    RankCollectCard.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankCollectCard.prototype.getCardNode = function () {
        return this._cardNode;
    };
    RankCollectCard.prototype.getCardWorldPosition = function () {
        if (!cc.isValid(this._cardSpriteNode))
            return null;
        var t = this._cardSpriteNode.convertToWorldSpaceAR(cc.v2(0, 0));
        return cc.v2(t.x, t.y);
    };
    RankCollectCard.prototype.addPendingCard = function (t) {
        if (t === void 0) { t = 1; }
        this._pendingCardCount += t;
    };
    RankCollectCard.prototype.onCardArrived = function () {
        var t = this;
        if (cc.isValid(this.node)) {
            this._pendingCardCount > 0 && this._pendingCardCount--;
            if (this._isPlayingScaleAnim) {
                this._pendingAnimCount++;
                this.unschedule(this.hideCard);
            }
            else {
                this._isPlayingScaleAnim = true;
                if (cc.isValid(this.bg)) {
                    cc.Tween.stopAllByTarget(this.bg);
                    cc.tween(this.bg).to(0.2, {
                        scale: 1.2
                    }, {
                        easing: "sineOut"
                    }).to(0.2, {
                        scale: 1
                    }, {
                        easing: "sineIn"
                    }).call(function () {
                        t._currentCount++;
                        t.updateCount(t._currentCount);
                        t._isPlayingScaleAnim = false;
                        if (t._pendingAnimCount > 0) {
                            t._pendingAnimCount--;
                            t.onCardArrived();
                        }
                        else
                            0 === t._pendingCardCount && t.scheduleOnce(t.hideCard, 0.2);
                    }).start();
                }
                else
                    this._isPlayingScaleAnim = false;
            }
        }
    };
    RankCollectCard.prototype.hideCard = function () {
        cc.isValid(this.node) && (this.node.active = false);
    };
    RankCollectCard.prototype.resetCount = function () {
        this._pendingAnimCount = 0;
        this._pendingCardCount = 0;
        this._isPlayingScaleAnim = false;
        var t = RankModel_1.default.getInstance().getLevelCollectCount();
        this._currentCount = Math.max(0, t - 2);
        this.updateCount(this._currentCount);
    };
    RankCollectCard.prototype.startShowAnimation = function () {
        this.resetCount();
        this.playShowAnimation();
    };
    RankCollectCard.prototype.playShowAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            if (cc.isValid(t.node)) {
                t.node.opacity = 0;
                t.node.scale = 0;
                cc.Tween.stopAllByTarget(t.node);
                cc.tween(t.node).to(0.2, {
                    opacity: 255,
                    scale: 1
                }, {
                    easing: "sineOut"
                }).call(function () {
                    e();
                }).start();
            }
            else
                e();
        });
    };
    RankCollectCard.prototype.onDestroy = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.unscheduleAllCallbacks();
        _super.prototype.onDestroy.call(this);
    };
    RankCollectCard.prototype.clearNode = function () {
        this._cardNode = null;
        this._cardSpriteNode = null;
        this.destroy();
    };
    RankCollectCard.prototype.setVisible = function (t) {
        this.node && this._cardNode && (this.node.active = t);
    };
    RankCollectCard.prefabUrl = "prefabs/rank/RankCollectCard";
    __decorate([
        mj.traitEvent("RankColCard_initUI")
    ], RankCollectCard.prototype, "initUI", null);
    __decorate([
        mj.traitEvent("RankColCard_updImgCard")
    ], RankCollectCard.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankColCard_onCardArrived")
    ], RankCollectCard.prototype, "onCardArrived", null);
    __decorate([
        mj.traitEvent("RankColCard_clearNode")
    ], RankCollectCard.prototype, "clearNode", null);
    __decorate([
        mj.traitEvent("RankColCard_setVisible")
    ], RankCollectCard.prototype, "setVisible", null);
    __decorate([
        mj.traitEvent("RankColCard_getUrl")
    ], RankCollectCard, "getUrl", null);
    RankCollectCard = __decorate([
        mj.class
    ], RankCollectCard);
    return RankCollectCard;
}(BaseUI_1.default));
exports.default = RankCollectCard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQ29sbGVjdENhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCwyRUFBc0U7QUFDdEUsb0VBQStEO0FBQy9ELHNFQUFpRTtBQUNqRSx5Q0FBb0M7QUFFcEM7SUFBNkMsbUNBQU07SUFBbkQ7UUFBQSxxRUF3SkM7UUF2SkMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFFBQUUsR0FBRyxJQUFJLENBQUM7UUFDVix5QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFpQixHQUFHLENBQUMsQ0FBQzs7SUErSXhCLENBQUM7SUE1SVEsc0JBQU0sR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FB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QUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBN0lNLHlCQUFTLEdBQUcsOEJBQThCLENBQUM7SUFjbEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2lEQVNuQztJQW9CRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7d0RBUXZDO0lBYUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO3dEQWdDMUM7SUF3Q0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO29EQUt0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztxREFHdkM7SUEzSUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3VDQUduQztJQWRrQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZUFBZSxDQXdKbkM7SUFBRCxzQkFBQztDQXhKRCxBQXdKQyxDQXhKNEMsZ0JBQU0sR0F3SmxEO2tCQXhKb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBSYW5rTW9kZWwgZnJvbSAnLi9SYW5rTW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQ29sbGVjdENhcmQgZXh0ZW5kcyBCYXNlVUkge1xuICBsYWJfY291bnQgPSBudWxsO1xuICBfY2FyZE5vZGUgPSBudWxsO1xuICBfY2FyZEJnTm9kZSA9IG51bGw7XG4gIF9jYXJkU3ByaXRlTm9kZSA9IG51bGw7XG4gIGJnID0gbnVsbDtcbiAgX2lzUGxheWluZ1NjYWxlQW5pbSA9IGZhbHNlO1xuICBfcGVuZGluZ0FuaW1Db3VudCA9IDA7XG4gIF9jdXJyZW50Q291bnQgPSAwO1xuICBfcGVuZGluZ0NhcmRDb3VudCA9IDA7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvcmFuay9SYW5rQ29sbGVjdENhcmRcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQ29sQ2FyZF9nZXRVcmxcIilcbiAgc3RhdGljIGdldFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmYWJVcmw7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICB0aGlzLmxhYl9jb3VudCA9IGNjLmZpbmQoXCJiZy9sYWJfY291bnRcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9jYXJkTm9kZSA9IGNjLmZpbmQoXCJiZy9jYXJkX25vZGVcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9jYXJkQmdOb2RlID0gdGhpcy5fY2FyZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJkX2JnXCIpO1xuICAgIHRoaXMuX2NhcmRTcHJpdGVOb2RlID0gdGhpcy5fY2FyZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJkXCIpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0NvbENhcmRfaW5pdFVJXCIpXG4gIGluaXRVSSgpIHtcbiAgICB2YXIgdCA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgZSA9IHQuZ2V0Q3VyQm9hcmREYXRhKCk7XG4gICAgdGhpcy51cGRhdGVDYXJkQmcoKTtcbiAgICB2YXIgbyA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLkNvbGxlY3RUaGluZykgfHwgXCJcIjtcbiAgICBvICYmIHRoaXMudXBkYXRlQ2FyZFNwcml0ZShvKTtcbiAgICB2YXIgbiA9IHQuZ2V0TGV2ZWxDb2xsZWN0Q291bnQoKTtcbiAgICB0aGlzLnVwZGF0ZUNvdW50KG4pO1xuICB9XG4gIHVwZGF0ZUNvdW50KHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhYl9jb3VudCkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5sYWJfY291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIGUgJiYgKGUuc3RyaW5nID0gdC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQ2FyZEJnKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2NhcmRCZ05vZGUpKSB7XG4gICAgICB2YXIgdCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIiksXG4gICAgICAgIGUgPSB0LnBhdGgsXG4gICAgICAgIG8gPSB0LmJ1bmRsZU5hbWUsXG4gICAgICAgIG4gPSB0LmZyb21BdGxhcztcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2NhcmRCZ05vZGUsIGUsIG4sIGZhbHNlLCBvKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQ2FyZFNwcml0ZSgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX2NhcmROb2RlKSAmJiB0aGlzLnVwZGF0ZUltZ0NhcmQodGhpcy5fY2FyZFNwcml0ZU5vZGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0NvbENhcmRfdXBkSW1nQ2FyZFwiKVxuICB1cGRhdGVJbWdDYXJkKHQpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkUmVzTmFtZSgpLFxuICAgICAgbyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoZSksXG4gICAgICBuID0gby5wYXRoLFxuICAgICAgYSA9IG8uYnVuZGxlTmFtZSxcbiAgICAgIGkgPSBvLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0LCBuLCBpLCBmYWxzZSwgYSk7XG4gIH1cbiAgZ2V0Q2FyZE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmROb2RlO1xuICB9XG4gIGdldENhcmRXb3JsZFBvc2l0aW9uKCkge1xuICAgIGlmICghY2MuaXNWYWxpZCh0aGlzLl9jYXJkU3ByaXRlTm9kZSkpIHJldHVybiBudWxsO1xuICAgIHZhciB0ID0gdGhpcy5fY2FyZFNwcml0ZU5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICByZXR1cm4gY2MudjIodC54LCB0LnkpO1xuICB9XG4gIGFkZFBlbmRpbmdDYXJkKHQgPSAxKSB7XG4gICAgdGhpcy5fcGVuZGluZ0NhcmRDb3VudCArPSB0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0NvbENhcmRfb25DYXJkQXJyaXZlZFwiKVxuICBvbkNhcmRBcnJpdmVkKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLl9wZW5kaW5nQ2FyZENvdW50ID4gMCAmJiB0aGlzLl9wZW5kaW5nQ2FyZENvdW50LS07XG4gICAgICBpZiAodGhpcy5faXNQbGF5aW5nU2NhbGVBbmltKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdBbmltQ291bnQrKztcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaGlkZUNhcmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nU2NhbGVBbmltID0gdHJ1ZTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5iZykpIHtcbiAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5iZyk7XG4gICAgICAgICAgY2MudHdlZW4odGhpcy5iZykudG8oMC4yLCB7XG4gICAgICAgICAgICBzY2FsZTogMS4yXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgICAgIH0pLnRvKDAuMiwge1xuICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwic2luZUluXCJcbiAgICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuX2N1cnJlbnRDb3VudCsrO1xuICAgICAgICAgICAgdC51cGRhdGVDb3VudCh0Ll9jdXJyZW50Q291bnQpO1xuICAgICAgICAgICAgdC5faXNQbGF5aW5nU2NhbGVBbmltID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodC5fcGVuZGluZ0FuaW1Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgdC5fcGVuZGluZ0FuaW1Db3VudC0tO1xuICAgICAgICAgICAgICB0Lm9uQ2FyZEFycml2ZWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSAwID09PSB0Ll9wZW5kaW5nQ2FyZENvdW50ICYmIHQuc2NoZWR1bGVPbmNlKHQuaGlkZUNhcmQsIDAuMik7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuX2lzUGxheWluZ1NjYWxlQW5pbSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoaWRlQ2FyZCgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgKHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgcmVzZXRDb3VudCgpIHtcbiAgICB0aGlzLl9wZW5kaW5nQW5pbUNvdW50ID0gMDtcbiAgICB0aGlzLl9wZW5kaW5nQ2FyZENvdW50ID0gMDtcbiAgICB0aGlzLl9pc1BsYXlpbmdTY2FsZUFuaW0gPSBmYWxzZTtcbiAgICB2YXIgdCA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldExldmVsQ29sbGVjdENvdW50KCk7XG4gICAgdGhpcy5fY3VycmVudENvdW50ID0gTWF0aC5tYXgoMCwgdCAtIDIpO1xuICAgIHRoaXMudXBkYXRlQ291bnQodGhpcy5fY3VycmVudENvdW50KTtcbiAgfVxuICBzdGFydFNob3dBbmltYXRpb24oKSB7XG4gICAgdGhpcy5yZXNldENvdW50KCk7XG4gICAgdGhpcy5wbGF5U2hvd0FuaW1hdGlvbigpO1xuICB9XG4gIHBsYXlTaG93QW5pbWF0aW9uKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgICAgdC5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0Lm5vZGUuc2NhbGUgPSAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodC5ub2RlKTtcbiAgICAgICAgY2MudHdlZW4odC5ub2RlKS50bygwLjIsIHtcbiAgICAgICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJzaW5lT3V0XCJcbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9KTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQ29sQ2FyZF9jbGVhck5vZGVcIilcbiAgY2xlYXJOb2RlKCkge1xuICAgIHRoaXMuX2NhcmROb2RlID0gbnVsbDtcbiAgICB0aGlzLl9jYXJkU3ByaXRlTm9kZSA9IG51bGw7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQ29sQ2FyZF9zZXRWaXNpYmxlXCIpXG4gIHNldFZpc2libGUodCkge1xuICAgIHRoaXMubm9kZSAmJiB0aGlzLl9jYXJkTm9kZSAmJiAodGhpcy5ub2RlLmFjdGl2ZSA9IHQpO1xuICB9XG59Il19