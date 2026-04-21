
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/NormalBoxTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03808cyfkdHuJb+cBMQCiZL', 'NormalBoxTrait');
// subpackages/l_boxReward/Scripts/NormalBoxTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Tile2NormalGameData_1 = require("../../../Scripts/core/simulator/data/Tile2NormalGameData");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoxRewardUI_1 = require("./BoxRewardUI");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var NormalBoxTrait = /** @class */ (function (_super) {
    __extends(NormalBoxTrait, _super);
    function NormalBoxTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/boxReward/RewardUI", "prefabs/boxReward/OpenAnim", "prefabs/boxReward/BoxBarItem"];
        return _this;
    }
    NormalBoxTrait_1 = NormalBoxTrait;
    NormalBoxTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalBoxTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    NormalBoxTrait.prototype.onTile2WinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    NormalBoxTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        var i = NormalGameData_1.default.getInstance().getLevelId() - 1;
        this.tryGiveBoxReward(i, "主关卡");
        e();
    };
    NormalBoxTrait.prototype.onTile2BfWinBhv_doOthLgc = function (t, e) {
        var i = Tile2NormalGameData_1.default.getInstance().getLevelId() - 1;
        this.tryGiveBoxReward(i, "Tile2关卡");
        e();
    };
    NormalBoxTrait.prototype.onWinVw_popNextView = function (t, e) {
        var o, n = t.ins;
        t.args[0] = t.args[0] || {};
        if (cc.isValid(n)) {
            var a = n.delegate, r = ((null === (o = null == a ? void 0 : a.args) || void 0 === o ? void 0 : o.data) || {}).curLv, s = void 0 === r ? 1 : r, c = n.getContentNode();
            if (cc.isValid(c)) {
                var l = c.getChildByName("RewardUI");
                if (cc.isValid(l))
                    try {
                        l.getComponent(BoxRewardUI_1.default).showBoxRewardUI(s, this._traitData.config, function (i) {
                            i && (t.args[0].hasBoxReward = true);
                            e();
                        });
                    }
                    catch (t) {
                        console.error("[" + NormalBoxTrait_1.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
                        e();
                    }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    NormalBoxTrait.prototype.onTile2WinVw_popNextView = function (t, e) {
        var o, n = t.ins;
        t.args[0] = t.args[0] || {};
        if (cc.isValid(n)) {
            var a = n.delegate, r = ((null === (o = null == a ? void 0 : a.args) || void 0 === o ? void 0 : o.data) || {}).curLv, s = void 0 === r ? 1 : r, c = n.getContentNode();
            if (cc.isValid(c)) {
                var l = c.getChildByName("RewardUI");
                if (cc.isValid(l))
                    try {
                        l.getComponent(BoxRewardUI_1.default).showBoxRewardUI(s, this._traitData.config, function (i) {
                            i && (t.args[0].hasBoxReward = true);
                            e();
                        });
                    }
                    catch (t) {
                        console.error("[" + NormalBoxTrait_1.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
                        e();
                    }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    NormalBoxTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var i = t.ins, o = null == i ? void 0 : i.rootView;
        if (cc.isValid(o)) {
            var n = i._viewComponent;
            if (cc.isValid(n)) {
                var a = n.getContentNode();
                if (cc.isValid(a)) {
                    var r = a.getChildByName("RewardUI");
                    if (!cc.isValid(r)) {
                        r = n.createUISync(BoxRewardUI_1.default);
                        if (cc.isValid(r)) {
                            a.addChild(r);
                            r.opacity = 0;
                        }
                    }
                }
            }
        }
        e();
    };
    NormalBoxTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        var i = t.ins, o = null == i ? void 0 : i.rootView;
        if (cc.isValid(o)) {
            var n = i._viewComponent;
            if (cc.isValid(n)) {
                var a = n.getContentNode();
                if (cc.isValid(a)) {
                    var r = a.getChildByName("RewardUI");
                    if (!cc.isValid(r)) {
                        r = n.createUISync(BoxRewardUI_1.default);
                        if (cc.isValid(r)) {
                            a.addChild(r);
                            r.opacity = 0;
                        }
                    }
                }
            }
        }
        e();
    };
    NormalBoxTrait.prototype.tryGiveBoxReward = function (t, e) {
        if (this.canGainBoxReward(t)) {
            var i = UserModel_1.default.getInstance().getCurrentGameType(), o = GameUtils_1.default.getInputAddPropType(i), n = {
                inputType: o,
                propType: "shuffle",
                num: this.traitData.config.refresh,
                reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBox,
                reasonInfo: e + "宝箱奖励_到达第" + t + "关"
            }, a = {
                inputType: o,
                propType: "hitTips",
                num: this.traitData.config.hint,
                reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBox,
                reasonInfo: e + "宝箱奖励_到达第" + t + "关"
            };
            GameInteraction_1.GameInteraction.input(n);
            GameInteraction_1.GameInteraction.input(a);
        }
    };
    NormalBoxTrait.prototype.canGainBoxReward = function (t) {
        var e = this._traitData.config, i = e.rewardLevels, o = (t - 1) % e.level;
        return i.includes(o + 1);
    };
    NormalBoxTrait.prototype.getRemainingProgress = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, e = this._traitData.config, i = e.rewardLevels, o = t % e.level;
        return i.find(function (t) {
            return t > o;
        }) - o;
    };
    NormalBoxTrait.prototype.getBoxTargetProgress = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, e = this._traitData.config, i = e.rewardLevels, o = t % e.level, n = i.find(function (t) {
            return t > o;
        });
        return void 0 !== n ? n : -1;
    };
    var NormalBoxTrait_1;
    NormalBoxTrait.traitKey = "NormalBox";
    NormalBoxTrait.nextTimeOut = -1;
    __decorate([
        mj.traitEvent("NorBox_tryGiveBoxReward")
    ], NormalBoxTrait.prototype, "tryGiveBoxReward", null);
    __decorate([
        mj.traitEvent("NorBox_canGainBoxReward")
    ], NormalBoxTrait.prototype, "canGainBoxReward", null);
    __decorate([
        mj.traitEvent("NorBox_getRemainProgress")
    ], NormalBoxTrait.prototype, "getRemainingProgress", null);
    __decorate([
        mj.traitEvent("NorBox_getBoxTagProgress")
    ], NormalBoxTrait.prototype, "getBoxTargetProgress", null);
    NormalBoxTrait = NormalBoxTrait_1 = __decorate([
        mj.trait,
        mj.class("NormalBoxTrait")
    ], NormalBoxTrait);
    return NormalBoxTrait;
}(Trait_1.default));
exports.default = NormalBoxTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL05vcm1hbEJveFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBMEY7QUFDMUYsc0ZBQWlGO0FBQ2pGLGdHQUEyRjtBQUMzRixvRkFBbUY7QUFDbkYsZ0VBQTJEO0FBQzNELDZDQUF3QztBQUN4QyxzRUFBaUU7QUFDakUsNEVBQXVFO0FBR3ZFO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBc0tDO1FBcktDLGdCQUFVLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOztJQXFLNUcsQ0FBQzt1QkF0S29CLGNBQWM7SUFJakMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsK0NBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxnREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVB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RmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FzS2xDO0lBQUQscUJBQUM7Q0F0S0QsQUFzS0MsQ0F0SzJDLGVBQUssR0FzS2hEO2tCQXRLb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHZXRJdGVtUmVhc29uSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9Ob3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgVGlsZTJOb3JtYWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvVGlsZTJOb3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCb3hSZXdhcmRVSSBmcm9tICcuL0JveFJld2FyZFVJJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOb3JtYWxCb3hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsQm94VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHJlcXVpcmVSZXMgPSBbXCJwcmVmYWJzL2JveFJld2FyZC9SZXdhcmRVSVwiLCBcInByZWZhYnMvYm94UmV3YXJkL09wZW5BbmltXCIsIFwicHJlZmFicy9ib3hSZXdhcmQvQm94QmFySXRlbVwiXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJOb3JtYWxCb3hcIjtcbiAgc3RhdGljIG5leHRUaW1lT3V0ID0gLTE7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbldpbkN0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucztcbiAgICBudWxsID09IGkgfHwgaS5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIHRoaXMucmVxdWlyZVJlcyk7XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJXaW5DdHJsX2luaXRSZXModCwgZSkge1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgbnVsbCA9PSBpIHx8IGkuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCB0aGlzLnJlcXVpcmVSZXMpO1xuICAgIGUoKTtcbiAgfVxuICBvbkJlZm9yZVdpbkJodl9kb090aExnYyh0LCBlKSB7XG4gICAgdmFyIGkgPSBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldExldmVsSWQoKSAtIDE7XG4gICAgdGhpcy50cnlHaXZlQm94UmV3YXJkKGksIFwi5Li75YWz5Y2hXCIpO1xuICAgIGUoKTtcbiAgfVxuICBvblRpbGUyQmZXaW5CaHZfZG9PdGhMZ2ModCwgZSkge1xuICAgIHZhciBpID0gVGlsZTJOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldExldmVsSWQoKSAtIDE7XG4gICAgdGhpcy50cnlHaXZlQm94UmV3YXJkKGksIFwiVGlsZTLlhbPljaFcIik7XG4gICAgZSgpO1xuICB9XG4gIG9uV2luVndfcG9wTmV4dFZpZXcodCwgZSkge1xuICAgIHZhciBvLFxuICAgICAgbiA9IHQuaW5zO1xuICAgIHQuYXJnc1swXSA9IHQuYXJnc1swXSB8fCB7fTtcbiAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgdmFyIGEgPSBuLmRlbGVnYXRlLFxuICAgICAgICByID0gKChudWxsID09PSAobyA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5kYXRhKSB8fCB7fSkuY3VyTHYsXG4gICAgICAgIHMgPSB2b2lkIDAgPT09IHIgPyAxIDogcixcbiAgICAgICAgYyA9IG4uZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGMpKSB7XG4gICAgICAgIHZhciBsID0gYy5nZXRDaGlsZEJ5TmFtZShcIlJld2FyZFVJXCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChsKSkgdHJ5IHtcbiAgICAgICAgICBsLmdldENvbXBvbmVudChCb3hSZXdhcmRVSSkuc2hvd0JveFJld2FyZFVJKHMsIHRoaXMuX3RyYWl0RGF0YS5jb25maWcsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBpICYmICh0LmFyZ3NbMF0uaGFzQm94UmV3YXJkID0gdHJ1ZSk7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTm9ybWFsQm94VHJhaXQudHJhaXRLZXkgKyBcIl0g5pi+56S65a6d566x5aWW5YqxVUnlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvblRpbGUyV2luVndfcG9wTmV4dFZpZXcodCwgZSkge1xuICAgIHZhciBvLFxuICAgICAgbiA9IHQuaW5zO1xuICAgIHQuYXJnc1swXSA9IHQuYXJnc1swXSB8fCB7fTtcbiAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgdmFyIGEgPSBuLmRlbGVnYXRlLFxuICAgICAgICByID0gKChudWxsID09PSAobyA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5kYXRhKSB8fCB7fSkuY3VyTHYsXG4gICAgICAgIHMgPSB2b2lkIDAgPT09IHIgPyAxIDogcixcbiAgICAgICAgYyA9IG4uZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGMpKSB7XG4gICAgICAgIHZhciBsID0gYy5nZXRDaGlsZEJ5TmFtZShcIlJld2FyZFVJXCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChsKSkgdHJ5IHtcbiAgICAgICAgICBsLmdldENvbXBvbmVudChCb3hSZXdhcmRVSSkuc2hvd0JveFJld2FyZFVJKHMsIHRoaXMuX3RyYWl0RGF0YS5jb25maWcsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBpICYmICh0LmFyZ3NbMF0uaGFzQm94UmV3YXJkID0gdHJ1ZSk7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTm9ybWFsQm94VHJhaXQudHJhaXRLZXkgKyBcIl0g5pi+56S65a6d566x5aWW5YqxVUnlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbldpbkN0cmxfdmlld1Nob3codCwgZSkge1xuICAgIHZhciBpID0gdC5pbnMsXG4gICAgICBvID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5yb290VmlldztcbiAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgdmFyIG4gPSBpLl92aWV3Q29tcG9uZW50O1xuICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgdmFyIGEgPSBuLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgICAgdmFyIHIgPSBhLmdldENoaWxkQnlOYW1lKFwiUmV3YXJkVUlcIik7XG4gICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgICAgICByID0gbi5jcmVhdGVVSVN5bmMoQm94UmV3YXJkVUkpO1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgICAgICAgYS5hZGRDaGlsZChyKTtcbiAgICAgICAgICAgICAgci5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJXaW5DdHJsX3ZpZXdTaG93KHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgbyA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkucm9vdFZpZXc7XG4gICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgIHZhciBuID0gaS5fdmlld0NvbXBvbmVudDtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgIHZhciBhID0gbi5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChhKSkge1xuICAgICAgICAgIHZhciByID0gYS5nZXRDaGlsZEJ5TmFtZShcIlJld2FyZFVJXCIpO1xuICAgICAgICAgIGlmICghY2MuaXNWYWxpZChyKSkge1xuICAgICAgICAgICAgciA9IG4uY3JlYXRlVUlTeW5jKEJveFJld2FyZFVJKTtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgICAgICAgIGEuYWRkQ2hpbGQocik7XG4gICAgICAgICAgICAgIHIub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk5vckJveF90cnlHaXZlQm94UmV3YXJkXCIpXG4gIHRyeUdpdmVCb3hSZXdhcmQodCwgZSkge1xuICAgIGlmICh0aGlzLmNhbkdhaW5Cb3hSZXdhcmQodCkpIHtcbiAgICAgIHZhciBpID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICAgIG8gPSBHYW1lVXRpbHMuZ2V0SW5wdXRBZGRQcm9wVHlwZShpKSxcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBpbnB1dFR5cGU6IG8sXG4gICAgICAgICAgcHJvcFR5cGU6IFwic2h1ZmZsZVwiLFxuICAgICAgICAgIG51bTogdGhpcy50cmFpdERhdGEuY29uZmlnLnJlZnJlc2gsXG4gICAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuTGV2ZWxCb3gsXG4gICAgICAgICAgcmVhc29uSW5mbzogZSArIFwi5a6d566x5aWW5YqxX+WIsOi+vuesrFwiICsgdCArIFwi5YWzXCJcbiAgICAgICAgfSxcbiAgICAgICAgYSA9IHtcbiAgICAgICAgICBpbnB1dFR5cGU6IG8sXG4gICAgICAgICAgcHJvcFR5cGU6IFwiaGl0VGlwc1wiLFxuICAgICAgICAgIG51bTogdGhpcy50cmFpdERhdGEuY29uZmlnLmhpbnQsXG4gICAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuTGV2ZWxCb3gsXG4gICAgICAgICAgcmVhc29uSW5mbzogZSArIFwi5a6d566x5aWW5YqxX+WIsOi+vuesrFwiICsgdCArIFwi5YWzXCJcbiAgICAgICAgfTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dChuKTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dChhKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJOb3JCb3hfY2FuR2FpbkJveFJld2FyZFwiKVxuICBjYW5HYWluQm94UmV3YXJkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWcsXG4gICAgICBpID0gZS5yZXdhcmRMZXZlbHMsXG4gICAgICBvID0gKHQgLSAxKSAlIGUubGV2ZWw7XG4gICAgcmV0dXJuIGkuaW5jbHVkZXMobyArIDEpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTm9yQm94X2dldFJlbWFpblByb2dyZXNzXCIpXG4gIGdldFJlbWFpbmluZ1Byb2dyZXNzKCkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpIC0gMSxcbiAgICAgIGUgPSB0aGlzLl90cmFpdERhdGEuY29uZmlnLFxuICAgICAgaSA9IGUucmV3YXJkTGV2ZWxzLFxuICAgICAgbyA9IHQgJSBlLmxldmVsO1xuICAgIHJldHVybiBpLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID4gbztcbiAgICB9KSAtIG87XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJOb3JCb3hfZ2V0Qm94VGFnUHJvZ3Jlc3NcIilcbiAgZ2V0Qm94VGFyZ2V0UHJvZ3Jlc3MoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgLSAxLFxuICAgICAgZSA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWcsXG4gICAgICBpID0gZS5yZXdhcmRMZXZlbHMsXG4gICAgICBvID0gdCAlIGUubGV2ZWwsXG4gICAgICBuID0gaS5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ID4gbztcbiAgICAgIH0pO1xuICAgIHJldHVybiB2b2lkIDAgIT09IG4gPyBuIDogLTE7XG4gIH1cbn0iXX0=