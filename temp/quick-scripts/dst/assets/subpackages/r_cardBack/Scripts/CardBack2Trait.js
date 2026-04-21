
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_cardBack/Scripts/CardBack2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60914Gemd1DJIH//1cEsp6I', 'CardBack2Trait');
// subpackages/r_cardBack/Scripts/CardBack2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardBack2Trait = /** @class */ (function (_super) {
    __extends(CardBack2Trait, _super);
    function CardBack2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = "default";
        _this._switchType = CardBack2Trait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    CardBack2Trait_1 = CardBack2Trait;
    CardBack2Trait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBack2Trait_1.TYPE_SEQUENTIAL;
        this._switchType, CardBack2Trait_1.TYPE_RANDOM;
    };
    CardBack2Trait.prototype.getCurCardBack = function () {
        return this.localData.cardBack || "default";
    };
    CardBack2Trait.prototype.setCurCardBack = function (t) {
        this.localData.cardBack = t;
        UserModel_1.default.getInstance().setCardBackColor(t);
    };
    CardBack2Trait.prototype.switchToNextCardBack = function () {
        var t = this.getCurCardBack();
        if (t && CardBack2Trait_1.CARD_BACKS.includes(t)) {
            this._curCardBackInd = CardBack2Trait_1.CARD_BACKS.indexOf(t);
        }
        else {
            this._curCardBackInd = -1;
        }
        if (this._switchType === CardBack2Trait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * CardBack2Trait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % CardBack2Trait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= CardBack2Trait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = CardBack2Trait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    CardBack2Trait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBack2Trait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBack2Trait_1.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack2Trait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        try {
            var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
                var c = this.getCurCardBack();
                if ("default" === c) {
                    r();
                    return;
                }
                var n = "texture/" + c + "/" + i;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: n,
                        bundleName: CardBack2Trait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack2Trait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack2Trait.prototype.onTileNodeObj_playAnim = function (t, r) {
        var e;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
                var i = this.getCurCardBack();
                if ("default" === i) {
                    r();
                    return;
                }
                var c = "spine/" + i + "/gameplay_flip";
                t.args[0] = c;
                t.args[6] = CardBack2Trait_1.BUNDLE_NAME;
                r();
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack2Trait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardBack2Trait_1;
    CardBack2Trait.traitKey = "CardBack2";
    CardBack2Trait.BUNDLE_NAME = "r_cardBack";
    CardBack2Trait.TYPE_SEQUENTIAL = 1;
    CardBack2Trait.TYPE_RANDOM = 2;
    CardBack2Trait.CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
    CardBack2Trait = CardBack2Trait_1 = __decorate([
        mj.trait,
        mj.class("CardBack2Trait")
    ], CardBack2Trait);
    return CardBack2Trait;
}(Trait_1.default));
exports.default = CardBack2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NhcmRCYWNrL1NjcmlwdHMvQ2FyZEJhY2syVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBaUdDO1FBaEdDLHFCQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsaUJBQVcsR0FBRyxnQkFBYyxDQUFDLGVBQWUsQ0FBQzs7SUE4Ri9DLENBQUM7dUJBakdvQixjQUFjO0lBU2pDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3JILElBQUksQ0FBQyxXQUFXLEVBQUUsZ0JBQWMsQ0FBQyxXQUFXLENBQUM7SUFDL0MsQ0FBQztJQUNELHVDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsdUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUIsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsNkNBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLEdB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LENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOztJQTVGTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQUN2QiwwQkFBVyxHQUFHLFlBQVksQ0FBQztJQUMzQiw4QkFBZSxHQUFHLENBQUMsQ0FBQztJQUNwQiwwQkFBVyxHQUFHLENBQUMsQ0FBQztJQUNoQix5QkFBVSxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQVJ0RCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FpR2xDO0lBQUQscUJBQUM7Q0FqR0QsQUFpR0MsQ0FqRzJDLGVBQUssR0FpR2hEO2tCQWpHb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkQmFjazJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZEJhY2syVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJDYXJkQmFja0luZCA9IC0xO1xuICBfY3VyQ2FyZEJhY2sgPSBcImRlZmF1bHRcIjtcbiAgX3N3aXRjaFR5cGUgPSBDYXJkQmFjazJUcmFpdC5UWVBFX1NFUVVFTlRJQUw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FyZEJhY2syXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwicl9jYXJkQmFja1wiO1xuICBzdGF0aWMgVFlQRV9TRVFVRU5USUFMID0gMTtcbiAgc3RhdGljIFRZUEVfUkFORE9NID0gMjtcbiAgc3RhdGljIENBUkRfQkFDS1MgPSBbXCJkZWZhdWx0XCIsIFwiYmx1ZVwiLCBcImN5YW5cIiwgXCJwaW5rXCIsIFwicHVycGxlXCIsIFwicmVkXCJdO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc3dpdGNoVHlwZSA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci50KSB8fCBDYXJkQmFjazJUcmFpdC5UWVBFX1NFUVVFTlRJQUw7XG4gICAgdGhpcy5fc3dpdGNoVHlwZSwgQ2FyZEJhY2syVHJhaXQuVFlQRV9SQU5ET007XG4gIH1cbiAgZ2V0Q3VyQ2FyZEJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmNhcmRCYWNrIHx8IFwiZGVmYXVsdFwiO1xuICB9XG4gIHNldEN1ckNhcmRCYWNrKHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jYXJkQmFjayA9IHQ7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0Q2FyZEJhY2tDb2xvcih0KTtcbiAgfVxuICBzd2l0Y2hUb05leHRDYXJkQmFjaygpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q3VyQ2FyZEJhY2soKTtcbiAgICBpZiAodCAmJiBDYXJkQmFjazJUcmFpdC5DQVJEX0JBQ0tTLmluY2x1ZGVzKHQpKSB7XG4gICAgICB0aGlzLl9jdXJDYXJkQmFja0luZCA9IENhcmRCYWNrMlRyYWl0LkNBUkRfQkFDS1MuaW5kZXhPZih0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N3aXRjaFR5cGUgPT09IENhcmRCYWNrMlRyYWl0LlRZUEVfUkFORE9NKSB7XG4gICAgICB0aGlzLl9jdXJDYXJkQmFja0luZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENhcmRCYWNrMlRyYWl0LkNBUkRfQkFDS1MubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgKyAxKSAlIENhcmRCYWNrMlRyYWl0LkNBUkRfQkFDS1MubGVuZ3RoO1xuICAgIH1cbiAgICAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgPCAwIHx8IHRoaXMuX2N1ckNhcmRCYWNrSW5kID49IENhcmRCYWNrMlRyYWl0LkNBUkRfQkFDS1MubGVuZ3RoKSAmJiAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAwKTtcbiAgICB0aGlzLl9jdXJDYXJkQmFjayA9IENhcmRCYWNrMlRyYWl0LkNBUkRfQkFDS1NbdGhpcy5fY3VyQ2FyZEJhY2tJbmRdO1xuICAgIHRoaXMuc2V0Q3VyQ2FyZEJhY2sodGhpcy5fY3VyQ2FyZEJhY2spO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN3aXRjaFRvTmV4dENhcmRCYWNrKCk7XG4gICAgICB0aGlzLl9zd2l0Y2hUeXBlLCBDYXJkQmFjazJUcmFpdC5UWVBFX1JBTkRPTTtcbiAgICAgIHIoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZEJhY2syVHJhaXQudHJhaXRLZXkgKyBcIl0g5YiH5o2i5Y2h6IOM5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgcikge1xuICAgIHZhciBlO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IG51bGwgPT09IChlID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlWzBdO1xuICAgICAgaWYgKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgPT09IGkgfHwgXCJnYW1lcGxheV9pbWdfbWpfdXBcIiA9PT0gaSkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0Q3VyQ2FyZEJhY2soKTtcbiAgICAgICAgaWYgKFwiZGVmYXVsdFwiID09PSBjKSB7XG4gICAgICAgICAgcigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IFwidGV4dHVyZS9cIiArIGMgKyBcIi9cIiArIGk7XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogbixcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmRCYWNrMlRyYWl0LkJVTkRMRV9OQU1FLFxuICAgICAgICAgICAgZnJvbUF0bGFzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHIoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZEJhY2syVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yqr5oyB54mM6IOM5Zu+54mH5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgb25UaWxlTm9kZU9ial9wbGF5QW5pbSh0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChcInNwaW5lL3JvbGxjYXJkL2dhbWVwbGF5X2ZsaXBcIiA9PT0gKG51bGwgPT09IChlID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlWzBdKSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VyQ2FyZEJhY2soKTtcbiAgICAgICAgaWYgKFwiZGVmYXVsdFwiID09PSBpKSB7XG4gICAgICAgICAgcigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IFwic3BpbmUvXCIgKyBpICsgXCIvZ2FtZXBsYXlfZmxpcFwiO1xuICAgICAgICB0LmFyZ3NbMF0gPSBjO1xuICAgICAgICB0LmFyZ3NbNl0gPSBDYXJkQmFjazJUcmFpdC5CVU5ETEVfTkFNRTtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRCYWNrMlRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgee/u+i9rOWFieaViOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19