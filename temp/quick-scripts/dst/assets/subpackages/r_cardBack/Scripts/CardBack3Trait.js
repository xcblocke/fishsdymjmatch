
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_cardBack/Scripts/CardBack3Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11c59YyofdMkYVRcDUHIkvH', 'CardBack3Trait');
// subpackages/r_cardBack/Scripts/CardBack3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardBack3Trait = /** @class */ (function (_super) {
    __extends(CardBack3Trait, _super);
    function CardBack3Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = "default";
        _this._switchType = CardBack3Trait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    CardBack3Trait_1 = CardBack3Trait;
    CardBack3Trait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBack3Trait_1.TYPE_SEQUENTIAL;
        this._switchType, CardBack3Trait_1.TYPE_RANDOM;
    };
    CardBack3Trait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    CardBack3Trait.prototype.getCurCardBack = function () {
        var t = this.getCurrentGameType();
        return this.localData[t] || "default";
    };
    CardBack3Trait.prototype.setCurCardBack = function (t) {
        var r = this.getCurrentGameType();
        this.localData[r] = t;
        this.localData = this.localData;
    };
    CardBack3Trait.prototype.switchToNextCardBack = function () {
        var t = this.getCurCardBack();
        if (t && CardBack3Trait_1.CARD_BACKS.includes(t)) {
            this._curCardBackInd = CardBack3Trait_1.CARD_BACKS.indexOf(t);
        }
        else {
            this._curCardBackInd = -1;
        }
        if (this._switchType === CardBack3Trait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * CardBack3Trait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % CardBack3Trait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= CardBack3Trait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = CardBack3Trait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    CardBack3Trait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            this.getCurrentGameType();
            this.switchToNextCardBack();
            this._switchType, CardBack3Trait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack3Trait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        try {
            var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
                var c = this.getCurCardBack();
                this.getCurrentGameType();
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
                        bundleName: CardBack3Trait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack3Trait.prototype.onTileNodeObj_playAnim = function (t, r) {
        var e;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
                var i = this.getCurCardBack();
                this.getCurrentGameType();
                if ("default" === i) {
                    r();
                    return;
                }
                var c = "spine/" + i + "/gameplay_flip";
                t.args[0] = c;
                t.args[6] = CardBack3Trait_1.BUNDLE_NAME;
                r();
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack3Trait.prototype.onUserModel_cardBackColor = function (t, r) {
        try {
            var e = this.getCurrentGameType(), i = this.localData[e] || "default";
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: i
            });
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 劫持 UserModel.getCardBackColor 失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardBack3Trait_1;
    CardBack3Trait.traitKey = "CardBack3";
    CardBack3Trait.BUNDLE_NAME = "r_cardBack";
    CardBack3Trait.TYPE_SEQUENTIAL = 1;
    CardBack3Trait.TYPE_RANDOM = 2;
    CardBack3Trait.CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
    CardBack3Trait = CardBack3Trait_1 = __decorate([
        mj.trait,
        mj.class("CardBack3Trait")
    ], CardBack3Trait);
    return CardBack3Trait;
}(Trait_1.default));
exports.default = CardBack3Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NhcmRCYWNrL1NjcmlwdHMvQ2FyZEJhY2szVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBdUhDO1FBdEhDLHFCQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsaUJBQVcsR0FBRyxnQkFBYyxDQUFDLGVBQWUsQ0FBQzs7SUFvSC9DLENBQUM7dUJBdkhvQixjQUFjO0lBU2pDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3JILElBQUksQ0FBQyxXQUFXLEVBQUUsZ0JBQWMsQ0FBQyxXQUFXLENBQUM7SUFDL0MsQ0FBQztJQUNELDJDQUFrQixHQUFsQjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsdUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMs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V0FBVyxDQUFDO0lBQ3ZCLDBCQUFXLEdBQUcsWUFBWSxDQUFDO0lBQzNCLDhCQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLDBCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLHlCQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBUnRELGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQXVIbEM7SUFBRCxxQkFBQztDQXZIRCxBQXVIQyxDQXZIMkMsZUFBSyxHQXVIaEQ7a0JBdkhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNhcmRCYWNrM1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkQmFjazNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1ckNhcmRCYWNrSW5kID0gLTE7XG4gIF9jdXJDYXJkQmFjayA9IFwiZGVmYXVsdFwiO1xuICBfc3dpdGNoVHlwZSA9IENhcmRCYWNrM1RyYWl0LlRZUEVfU0VRVUVOVElBTDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDYXJkQmFjazNcIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJyX2NhcmRCYWNrXCI7XG4gIHN0YXRpYyBUWVBFX1NFUVVFTlRJQUwgPSAxO1xuICBzdGF0aWMgVFlQRV9SQU5ET00gPSAyO1xuICBzdGF0aWMgQ0FSRF9CQUNLUyA9IFtcImRlZmF1bHRcIiwgXCJibHVlXCIsIFwiY3lhblwiLCBcInBpbmtcIiwgXCJwdXJwbGVcIiwgXCJyZWRcIl07XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgcjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zd2l0Y2hUeXBlID0gKG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnQpIHx8IENhcmRCYWNrM1RyYWl0LlRZUEVfU0VRVUVOVElBTDtcbiAgICB0aGlzLl9zd2l0Y2hUeXBlLCBDYXJkQmFjazNUcmFpdC5UWVBFX1JBTkRPTTtcbiAgfVxuICBnZXRDdXJyZW50R2FtZVR5cGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICB9XG4gIGdldEN1ckNhcmRCYWNrKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGFbdF0gfHwgXCJkZWZhdWx0XCI7XG4gIH1cbiAgc2V0Q3VyQ2FyZEJhY2sodCkge1xuICAgIHZhciByID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICB0aGlzLmxvY2FsRGF0YVtyXSA9IHQ7XG4gICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgfVxuICBzd2l0Y2hUb05leHRDYXJkQmFjaygpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q3VyQ2FyZEJhY2soKTtcbiAgICBpZiAodCAmJiBDYXJkQmFjazNUcmFpdC5DQVJEX0JBQ0tTLmluY2x1ZGVzKHQpKSB7XG4gICAgICB0aGlzLl9jdXJDYXJkQmFja0luZCA9IENhcmRCYWNrM1RyYWl0LkNBUkRfQkFDS1MuaW5kZXhPZih0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N3aXRjaFR5cGUgPT09IENhcmRCYWNrM1RyYWl0LlRZUEVfUkFORE9NKSB7XG4gICAgICB0aGlzLl9jdXJDYXJkQmFja0luZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENhcmRCYWNrM1RyYWl0LkNBUkRfQkFDS1MubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgKyAxKSAlIENhcmRCYWNrM1RyYWl0LkNBUkRfQkFDS1MubGVuZ3RoO1xuICAgIH1cbiAgICAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgPCAwIHx8IHRoaXMuX2N1ckNhcmRCYWNrSW5kID49IENhcmRCYWNrM1RyYWl0LkNBUkRfQkFDS1MubGVuZ3RoKSAmJiAodGhpcy5fY3VyQ2FyZEJhY2tJbmQgPSAwKTtcbiAgICB0aGlzLl9jdXJDYXJkQmFjayA9IENhcmRCYWNrM1RyYWl0LkNBUkRfQkFDS1NbdGhpcy5fY3VyQ2FyZEJhY2tJbmRdO1xuICAgIHRoaXMuc2V0Q3VyQ2FyZEJhY2sodGhpcy5fY3VyQ2FyZEJhY2spO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgdGhpcy5zd2l0Y2hUb05leHRDYXJkQmFjaygpO1xuICAgICAgdGhpcy5fc3dpdGNoVHlwZSwgQ2FyZEJhY2szVHJhaXQuVFlQRV9SQU5ET007XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRCYWNrM1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWIh+aNouWNoeiDjOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHQsIHIpIHtcbiAgICB2YXIgZTtcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAoZSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVswXTtcbiAgICAgIGlmIChcImdhbWVwbGF5X2ltZ19tal9kblwiID09PSBpIHx8IFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIgPT09IGkpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdldEN1ckNhcmRCYWNrKCk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICAgIGlmIChcImRlZmF1bHRcIiA9PT0gYykge1xuICAgICAgICAgIHIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBcInRleHR1cmUvXCIgKyBjICsgXCIvXCIgKyBpO1xuICAgICAgICByKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIHBhdGg6IG4sXG4gICAgICAgICAgICBidW5kbGVOYW1lOiBDYXJkQmFjazNUcmFpdC5CVU5ETEVfTkFNRSxcbiAgICAgICAgICAgIGZyb21BdGxhczogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRCYWNrM1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeeJjOiDjOWbvueJh+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uVGlsZU5vZGVPYmpfcGxheUFuaW0odCwgcikge1xuICAgIHZhciBlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoXCJzcGluZS9yb2xsY2FyZC9nYW1lcGxheV9mbGlwXCIgPT09IChudWxsID09PSAoZSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVswXSkpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmdldEN1ckNhcmRCYWNrKCk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICAgIGlmIChcImRlZmF1bHRcIiA9PT0gaSkge1xuICAgICAgICAgIHIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGMgPSBcInNwaW5lL1wiICsgaSArIFwiL2dhbWVwbGF5X2ZsaXBcIjtcbiAgICAgICAgdC5hcmdzWzBdID0gYztcbiAgICAgICAgdC5hcmdzWzZdID0gQ2FyZEJhY2szVHJhaXQuQlVORExFX05BTUU7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFjazNUcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIHnv7vovazlhYnmlYjlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxuICBvblVzZXJNb2RlbF9jYXJkQmFja0NvbG9yKHQsIHIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGUgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgICBpID0gdGhpcy5sb2NhbERhdGFbZV0gfHwgXCJkZWZhdWx0XCI7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkQmFjazNUcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIEgVXNlck1vZGVsLmdldENhcmRCYWNrQ29sb3Ig5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=