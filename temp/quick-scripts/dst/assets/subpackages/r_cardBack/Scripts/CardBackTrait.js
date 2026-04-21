
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_cardBack/Scripts/CardBackTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05ad2wGsVxIAJpf7dDsJEBz', 'CardBackTrait');
// subpackages/r_cardBack/Scripts/CardBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardBackTrait = /** @class */ (function (_super) {
    __extends(CardBackTrait, _super);
    function CardBackTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = "default";
        _this._switchType = CardBackTrait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    CardBackTrait_1 = CardBackTrait;
    CardBackTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBackTrait_1.TYPE_SEQUENTIAL;
        var e = this.getCurCardBack(), i = !!this.localData.cardBack;
        this._switchType, CardBackTrait_1.TYPE_RANDOM;
        if (i && CardBackTrait_1.CARD_BACKS.includes(e)) {
            this._curCardBack = e;
            this._curCardBackInd = CardBackTrait_1.CARD_BACKS.indexOf(e);
            this.switchToNextCardBack();
        }
        else {
            this._curCardBackInd = -1;
            this._curCardBack = "default";
            this.setCurCardBack(this._curCardBack);
        }
    };
    CardBackTrait.prototype.getCurCardBack = function () {
        return this.localData.cardBack || "default";
    };
    CardBackTrait.prototype.setCurCardBack = function (t) {
        this.localData.cardBack = t;
        UserModel_1.default.getInstance().setCardBackColor(t);
    };
    CardBackTrait.prototype.switchToNextCardBack = function () {
        if (this._switchType === CardBackTrait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * CardBackTrait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % CardBackTrait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= CardBackTrait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = CardBackTrait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    CardBackTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onGsListener_onReplayGame = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] Replay切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onMainGameBtnBack_onClick = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 返回大厅切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onUISetBtnBack_onBtnClk = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 设置对话框返回切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        try {
            var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
                if ("default" === this._curCardBack) {
                    r();
                    return;
                }
                var c = "texture/" + this._curCardBack + "/" + i;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: c,
                        bundleName: CardBackTrait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onTileNodeObj_playAnim = function (t, r) {
        var e;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
                if ("default" === this._curCardBack) {
                    r();
                    return;
                }
                var i = "spine/" + this._curCardBack + "/gameplay_flip";
                t.args[0] = i;
                t.args[6] = CardBackTrait_1.BUNDLE_NAME;
                r();
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardBackTrait_1;
    CardBackTrait.traitKey = "CardBack";
    CardBackTrait.BUNDLE_NAME = "r_cardBack";
    CardBackTrait.TYPE_SEQUENTIAL = 1;
    CardBackTrait.TYPE_RANDOM = 2;
    CardBackTrait.CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
    CardBackTrait = CardBackTrait_1 = __decorate([
        mj.trait,
        mj.class("CardBackTrait")
    ], CardBackTrait);
    return CardBackTrait;
}(Trait_1.default));
exports.default = CardBackTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NhcmRCYWNrL1NjcmlwdHMvQ2FyZEJhY2tUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBMkMsaUNBQUs7SUFBaEQ7UUFBQSxxRUFrSUM7UUFqSUMscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUN6QixpQkFBVyxHQUFHLGVBQWEsQ0FBQyxlQUFlLENBQUM7O0lBK0g5QyxDQUFDO3NCQWxJb0IsYUFBYTtJQVNoQyw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3BILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLGVBQWEsQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksZUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FB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Q0osT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxlQUFhLENBQUMsV0FBVyxDQUFDO2dCQUN0QyxDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxlQUFhLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoRyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUE3SE0sc0JBQVEsR0FBRyxVQUFVLENBQUM7SUFDdEIseUJBQVcsR0FBRyxZQUFZLENBQUM7SUFDM0IsNkJBQWUsR0FBRyxDQUFDLENBQUM7SUFDcEIseUJBQVcsR0FBRyxDQUFDLENBQUM7SUFDaEIsd0JBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFSdEQsYUFBYTtRQUZqQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQWtJakM7SUFBRCxvQkFBQztDQWxJRCxBQWtJQyxDQWxJMEMsZUFBSyxHQWtJL0M7a0JBbElvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmRCYWNrVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRCYWNrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJDYXJkQmFja0luZCA9IC0xO1xuICBfY3VyQ2FyZEJhY2sgPSBcImRlZmF1bHRcIjtcbiAgX3N3aXRjaFR5cGUgPSBDYXJkQmFja1RyYWl0LlRZUEVfU0VRVUVOVElBTDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDYXJkQmFja1wiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcInJfY2FyZEJhY2tcIjtcbiAgc3RhdGljIFRZUEVfU0VRVUVOVElBTCA9IDE7XG4gIHN0YXRpYyBUWVBFX1JBTkRPTSA9IDI7XG4gIHN0YXRpYyBDQVJEX0JBQ0tTID0gW1wiZGVmYXVsdFwiLCBcImJsdWVcIiwgXCJjeWFuXCIsIFwicGlua1wiLCBcInB1cnBsZVwiLCBcInJlZFwiXTtcbiAgb25Mb2FkKCkge1xuICAgIHZhciByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N3aXRjaFR5cGUgPSAobnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIudCkgfHwgQ2FyZEJhY2tUcmFpdC5UWVBFX1NFUVVFTlRJQUw7XG4gICAgdmFyIGUgPSB0aGlzLmdldEN1ckNhcmRCYWNrKCksXG4gICAgICBpID0gISF0aGlzLmxvY2FsRGF0YS5jYXJkQmFjaztcbiAgICB0aGlzLl9zd2l0Y2hUeXBlLCBDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgIGlmIChpICYmIENhcmRCYWNrVHJhaXQuQ0FSRF9CQUNLUy5pbmNsdWRlcyhlKSkge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2sgPSBlO1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSBDYXJkQmFja1RyYWl0LkNBUkRfQkFDS1MuaW5kZXhPZihlKTtcbiAgICAgIHRoaXMuc3dpdGNoVG9OZXh0Q2FyZEJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAtMTtcbiAgICAgIHRoaXMuX2N1ckNhcmRCYWNrID0gXCJkZWZhdWx0XCI7XG4gICAgICB0aGlzLnNldEN1ckNhcmRCYWNrKHRoaXMuX2N1ckNhcmRCYWNrKTtcbiAgICB9XG4gIH1cbiAgZ2V0Q3VyQ2FyZEJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmNhcmRCYWNrIHx8IFwiZGVmYXVsdFwiO1xuICB9XG4gIHNldEN1ckNhcmRCYWNrKHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jYXJkQmFjayA9IHQ7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0Q2FyZEJhY2tDb2xvcih0KTtcbiAgfVxuICBzd2l0Y2hUb05leHRDYXJkQmFjaygpIHtcbiAgICBpZiAodGhpcy5fc3dpdGNoVHlwZSA9PT0gQ2FyZEJhY2tUcmFpdC5UWVBFX1JBTkRPTSkge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDYXJkQmFja1RyYWl0LkNBUkRfQkFDS1MubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgKyAxKSAlIENhcmRCYWNrVHJhaXQuQ0FSRF9CQUNLUy5sZW5ndGg7XG4gICAgfVxuICAgICh0aGlzLl9jdXJDYXJkQmFja0luZCA8IDAgfHwgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPj0gQ2FyZEJhY2tUcmFpdC5DQVJEX0JBQ0tTLmxlbmd0aCkgJiYgKHRoaXMuX2N1ckNhcmRCYWNrSW5kID0gMCk7XG4gICAgdGhpcy5fY3VyQ2FyZEJhY2sgPSBDYXJkQmFja1RyYWl0LkNBUkRfQkFDS1NbdGhpcy5fY3VyQ2FyZEJhY2tJbmRdO1xuICAgIHRoaXMuc2V0Q3VyQ2FyZEJhY2sodGhpcy5fY3VyQ2FyZEJhY2spO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN3aXRjaFRvTmV4dENhcmRCYWNrKCk7XG4gICAgICB0aGlzLl9zd2l0Y2hUeXBlLCBDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgICAgcigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFja1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWIh+aNouWNoeiDjOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN3aXRjaFRvTmV4dENhcmRCYWNrKCk7XG4gICAgICB0aGlzLl9zd2l0Y2hUeXBlLCBDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgICAgcigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFja1RyYWl0LnRyYWl0S2V5ICsgXCJdIFJlcGxheeWIh+aNouWNoeiDjOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uTWFpbkdhbWVCdG5CYWNrX29uQ2xpY2sodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN3aXRjaFRvTmV4dENhcmRCYWNrKCk7XG4gICAgICB0aGlzLl9zd2l0Y2hUeXBlLCBDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgICAgcigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFja1RyYWl0LnRyYWl0S2V5ICsgXCJdIOi/lOWbnuWkp+WOheWIh+aNouWNoeiDjOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uVUlTZXRCdG5CYWNrX29uQnRuQ2xrKHQsIHIpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zd2l0Y2hUb05leHRDYXJkQmFjaygpO1xuICAgICAgdGhpcy5fc3dpdGNoVHlwZSwgQ2FyZEJhY2tUcmFpdC5UWVBFX1JBTkRPTTtcbiAgICAgIHIoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZEJhY2tUcmFpdC50cmFpdEtleSArIFwiXSDorr7nva7lr7nor53moYbov5Tlm57liIfmjaLljaHog4zlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKGUgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbMF07XG4gICAgICBpZiAoXCJnYW1lcGxheV9pbWdfbWpfZG5cIiA9PT0gaSB8fCBcImdhbWVwbGF5X2ltZ19tal91cFwiID09PSBpKSB7XG4gICAgICAgIGlmIChcImRlZmF1bHRcIiA9PT0gdGhpcy5fY3VyQ2FyZEJhY2spIHtcbiAgICAgICAgICByKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjID0gXCJ0ZXh0dXJlL1wiICsgdGhpcy5fY3VyQ2FyZEJhY2sgKyBcIi9cIiArIGk7XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogYyxcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmRCYWNrVHJhaXQuQlVORExFX05BTUUsXG4gICAgICAgICAgICBmcm9tQXRsYXM6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFja1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeeJjOiDjOWbvueJh+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uVGlsZU5vZGVPYmpfcGxheUFuaW0odCwgcikge1xuICAgIHZhciBlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoXCJzcGluZS9yb2xsY2FyZC9nYW1lcGxheV9mbGlwXCIgPT09IChudWxsID09PSAoZSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVswXSkpIHtcbiAgICAgICAgaWYgKFwiZGVmYXVsdFwiID09PSB0aGlzLl9jdXJDYXJkQmFjaykge1xuICAgICAgICAgIHIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBcInNwaW5lL1wiICsgdGhpcy5fY3VyQ2FyZEJhY2sgKyBcIi9nYW1lcGxheV9mbGlwXCI7XG4gICAgICAgIHQuYXJnc1swXSA9IGk7XG4gICAgICAgIHQuYXJnc1s2XSA9IENhcmRCYWNrVHJhaXQuQlVORExFX05BTUU7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFja1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgee/u+i9rOWFieaViOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19