
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_flip2dCardBack/Scripts/Flip2dCardBackTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d40eMhuqpHZL/dU4gMEsW0', 'Flip2dCardBackTrait');
// subpackages/r_flip2dCardBack/Scripts/Flip2dCardBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var n = {
    DEFAULT: "default",
    BLUE: "blue",
    CYAN: "cyan",
    PINK: "pink",
    PURPLE: "purple",
    RED: "red"
};
var Flip2dCardBackTrait = /** @class */ (function (_super) {
    __extends(Flip2dCardBackTrait, _super);
    function Flip2dCardBackTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = n.DEFAULT;
        _this._switchType = Flip2dCardBackTrait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    Flip2dCardBackTrait_1 = Flip2dCardBackTrait;
    Flip2dCardBackTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || Flip2dCardBackTrait_1.TYPE_SEQUENTIAL;
        var e = this.getCurCardBack(), i = !!this.localData.cardBack;
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        if (i && Flip2dCardBackTrait_1.CARD_BACKS.includes(e)) {
            this._curCardBack = e;
            this._curCardBackInd = Flip2dCardBackTrait_1.CARD_BACKS.indexOf(e);
            this.switchToNextCardBack();
        }
        else {
            this._curCardBackInd = -1;
            this._curCardBack = n.DEFAULT;
            this.setCurCardBack(this._curCardBack);
        }
    };
    Flip2dCardBackTrait.prototype.getCurCardBack = function () {
        return this.localData.cardBack || n.DEFAULT;
    };
    Flip2dCardBackTrait.prototype.setCurCardBack = function (t) {
        this.localData.cardBack = t;
        UserModel_1.default.getInstance().setCardBackColor(t);
    };
    Flip2dCardBackTrait.prototype.switchToNextCardBack = function () {
        if (this._switchType === Flip2dCardBackTrait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * Flip2dCardBackTrait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % Flip2dCardBackTrait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= Flip2dCardBackTrait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = Flip2dCardBackTrait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    Flip2dCardBackTrait.prototype.onGsListener_onNewGame = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onGsListener_onReplayGame = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onMainGameBtnBack_onClick = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onUISetBtnBack_onBtnClk = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onFlipCardEff_frontNode = function (t, r) {
        if ("default" !== this._curCardBack) {
            var e = BaseSprite_1.default.create("texture/" + this._curCardBack + "/gameplay_img_mj_up", Flip2dCardBackTrait_1.BUNDLE_NAME);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: e.node
            });
        }
        else
            r();
    };
    Flip2dCardBackTrait.prototype.onFlipCardEff_backNode = function (t, r) {
        if ("default" !== this._curCardBack) {
            var e = BaseSprite_1.default.create("texture/" + this._curCardBack + "/gameplay_img_mj_dn", Flip2dCardBackTrait_1.BUNDLE_NAME);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: e.node
            });
        }
        else
            r();
    };
    Flip2dCardBackTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e, i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
        if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i)
            r();
        else {
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
                    bundleName: Flip2dCardBackTrait_1.BUNDLE_NAME,
                    fromAtlas: false
                }
            });
        }
    };
    var Flip2dCardBackTrait_1;
    Flip2dCardBackTrait.traitKey = "Flip2dCardBack";
    Flip2dCardBackTrait.BUNDLE_NAME = "r_flip2dCardBack";
    Flip2dCardBackTrait.TYPE_SEQUENTIAL = 1;
    Flip2dCardBackTrait.TYPE_RANDOM = 2;
    Flip2dCardBackTrait.CARD_BACKS = [n.DEFAULT, n.BLUE, n.CYAN, n.PINK, n.PURPLE, n.RED];
    Flip2dCardBackTrait = Flip2dCardBackTrait_1 = __decorate([
        mj.trait,
        mj.class("Flip2dCardBackTrait")
    ], Flip2dCardBackTrait);
    return Flip2dCardBackTrait;
}(Trait_1.default));
exports.default = Flip2dCardBackTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2ZsaXAyZENhcmRCYWNrL1NjcmlwdHMvRmxpcDJkQ2FyZEJhY2tUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUMzRCwyRUFBc0U7QUFDdEUsc0VBQWlFO0FBQ2pFLElBQUksQ0FBQyxHQUFHO0lBQ04sT0FBTyxFQUFFLFNBQVM7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLEtBQUs7Q0FDWCxDQUFDO0FBR0Y7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUF1R0M7UUF0R0MscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDekIsaUJBQVcsR0FBRyxxQkFBbUIsQ0FBQyxlQUFlLENBQUM7O0lBb0dwRCxDQUFDOzRCQXZHb0IsbUJBQW1CO0lBU3RDLG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLHFCQUFtQixDQUFDLGVBQWUsQ0FBQztRQUMxSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFB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YWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xudmFyIG4gPSB7XG4gIERFRkFVTFQ6IFwiZGVmYXVsdFwiLFxuICBCTFVFOiBcImJsdWVcIixcbiAgQ1lBTjogXCJjeWFuXCIsXG4gIFBJTks6IFwicGlua1wiLFxuICBQVVJQTEU6IFwicHVycGxlXCIsXG4gIFJFRDogXCJyZWRcIlxufTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmxpcDJkQ2FyZEJhY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcDJkQ2FyZEJhY2tUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1ckNhcmRCYWNrSW5kID0gLTE7XG4gIF9jdXJDYXJkQmFjayA9IG4uREVGQVVMVDtcbiAgX3N3aXRjaFR5cGUgPSBGbGlwMmRDYXJkQmFja1RyYWl0LlRZUEVfU0VRVUVOVElBTDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbGlwMmRDYXJkQmFja1wiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcInJfZmxpcDJkQ2FyZEJhY2tcIjtcbiAgc3RhdGljIFRZUEVfU0VRVUVOVElBTCA9IDE7XG4gIHN0YXRpYyBUWVBFX1JBTkRPTSA9IDI7XG4gIHN0YXRpYyBDQVJEX0JBQ0tTID0gW24uREVGQVVMVCwgbi5CTFVFLCBuLkNZQU4sIG4uUElOSywgbi5QVVJQTEUsIG4uUkVEXTtcbiAgb25Mb2FkKCkge1xuICAgIHZhciByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N3aXRjaFR5cGUgPSAobnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIudCkgfHwgRmxpcDJkQ2FyZEJhY2tUcmFpdC5UWVBFX1NFUVVFTlRJQUw7XG4gICAgdmFyIGUgPSB0aGlzLmdldEN1ckNhcmRCYWNrKCksXG4gICAgICBpID0gISF0aGlzLmxvY2FsRGF0YS5jYXJkQmFjaztcbiAgICB0aGlzLl9zd2l0Y2hUeXBlLCBGbGlwMmRDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgIGlmIChpICYmIEZsaXAyZENhcmRCYWNrVHJhaXQuQ0FSRF9CQUNLUy5pbmNsdWRlcyhlKSkge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2sgPSBlO1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSBGbGlwMmRDYXJkQmFja1RyYWl0LkNBUkRfQkFDS1MuaW5kZXhPZihlKTtcbiAgICAgIHRoaXMuc3dpdGNoVG9OZXh0Q2FyZEJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAtMTtcbiAgICAgIHRoaXMuX2N1ckNhcmRCYWNrID0gbi5ERUZBVUxUO1xuICAgICAgdGhpcy5zZXRDdXJDYXJkQmFjayh0aGlzLl9jdXJDYXJkQmFjayk7XG4gICAgfVxuICB9XG4gIGdldEN1ckNhcmRCYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jYXJkQmFjayB8fCBuLkRFRkFVTFQ7XG4gIH1cbiAgc2V0Q3VyQ2FyZEJhY2sodCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmNhcmRCYWNrID0gdDtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRDYXJkQmFja0NvbG9yKHQpO1xuICB9XG4gIHN3aXRjaFRvTmV4dENhcmRCYWNrKCkge1xuICAgIGlmICh0aGlzLl9zd2l0Y2hUeXBlID09PSBGbGlwMmRDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NKSB7XG4gICAgICB0aGlzLl9jdXJDYXJkQmFja0luZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZsaXAyZENhcmRCYWNrVHJhaXQuQ0FSRF9CQUNLUy5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jdXJDYXJkQmFja0luZCA9ICh0aGlzLl9jdXJDYXJkQmFja0luZCArIDEpICUgRmxpcDJkQ2FyZEJhY2tUcmFpdC5DQVJEX0JBQ0tTLmxlbmd0aDtcbiAgICB9XG4gICAgKHRoaXMuX2N1ckNhcmRCYWNrSW5kIDwgMCB8fCB0aGlzLl9jdXJDYXJkQmFja0luZCA+PSBGbGlwMmRDYXJkQmFja1RyYWl0LkNBUkRfQkFDS1MubGVuZ3RoKSAmJiAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAwKTtcbiAgICB0aGlzLl9jdXJDYXJkQmFjayA9IEZsaXAyZENhcmRCYWNrVHJhaXQuQ0FSRF9CQUNLU1t0aGlzLl9jdXJDYXJkQmFja0luZF07XG4gICAgdGhpcy5zZXRDdXJDYXJkQmFjayh0aGlzLl9jdXJDYXJkQmFjayk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCByKSB7XG4gICAgdGhpcy5zd2l0Y2hUb05leHRDYXJkQmFjaygpO1xuICAgIHRoaXMuX3N3aXRjaFR5cGUsIEZsaXAyZENhcmRCYWNrVHJhaXQuVFlQRV9SQU5ET007XG4gICAgcigpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUodCwgcikge1xuICAgIHRoaXMuc3dpdGNoVG9OZXh0Q2FyZEJhY2soKTtcbiAgICB0aGlzLl9zd2l0Y2hUeXBlLCBGbGlwMmRDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgIHIoKTtcbiAgfVxuICBvbk1haW5HYW1lQnRuQmFja19vbkNsaWNrKHQsIHIpIHtcbiAgICB0aGlzLnN3aXRjaFRvTmV4dENhcmRCYWNrKCk7XG4gICAgdGhpcy5fc3dpdGNoVHlwZSwgRmxpcDJkQ2FyZEJhY2tUcmFpdC5UWVBFX1JBTkRPTTtcbiAgICByKCk7XG4gIH1cbiAgb25VSVNldEJ0bkJhY2tfb25CdG5DbGsodCwgcikge1xuICAgIHRoaXMuc3dpdGNoVG9OZXh0Q2FyZEJhY2soKTtcbiAgICB0aGlzLl9zd2l0Y2hUeXBlLCBGbGlwMmRDYXJkQmFja1RyYWl0LlRZUEVfUkFORE9NO1xuICAgIHIoKTtcbiAgfVxuICBvbkZsaXBDYXJkRWZmX2Zyb250Tm9kZSh0LCByKSB7XG4gICAgaWYgKFwiZGVmYXVsdFwiICE9PSB0aGlzLl9jdXJDYXJkQmFjaykge1xuICAgICAgdmFyIGUgPSBCYXNlU3ByaXRlLmNyZWF0ZShcInRleHR1cmUvXCIgKyB0aGlzLl9jdXJDYXJkQmFjayArIFwiL2dhbWVwbGF5X2ltZ19tal91cFwiLCBGbGlwMmRDYXJkQmFja1RyYWl0LkJVTkRMRV9OQU1FKTtcbiAgICAgIHIoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZS5ub2RlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgcigpO1xuICB9XG4gIG9uRmxpcENhcmRFZmZfYmFja05vZGUodCwgcikge1xuICAgIGlmIChcImRlZmF1bHRcIiAhPT0gdGhpcy5fY3VyQ2FyZEJhY2spIHtcbiAgICAgIHZhciBlID0gQmFzZVNwcml0ZS5jcmVhdGUoXCJ0ZXh0dXJlL1wiICsgdGhpcy5fY3VyQ2FyZEJhY2sgKyBcIi9nYW1lcGxheV9pbWdfbWpfZG5cIiwgRmxpcDJkQ2FyZEJhY2tUcmFpdC5CVU5ETEVfTkFNRSk7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGUubm9kZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCByKSB7XG4gICAgdmFyIGUsXG4gICAgICBpID0gbnVsbCA9PT0gKGUgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbMF07XG4gICAgaWYgKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgIT09IGkgJiYgXCJnYW1lcGxheV9pbWdfbWpfdXBcIiAhPT0gaSAmJiBcImdhbWVwbGF5X3NlbGVjdF9talwiICE9PSBpKSByKCk7ZWxzZSB7XG4gICAgICBpZiAoXCJkZWZhdWx0XCIgPT09IHRoaXMuX2N1ckNhcmRCYWNrKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSBcInRleHR1cmUvXCIgKyB0aGlzLl9jdXJDYXJkQmFjayArIFwiL1wiICsgaTtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgIHBhdGg6IGMsXG4gICAgICAgICAgYnVuZGxlTmFtZTogRmxpcDJkQ2FyZEJhY2tUcmFpdC5CVU5ETEVfTkFNRSxcbiAgICAgICAgICBmcm9tQXRsYXM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==