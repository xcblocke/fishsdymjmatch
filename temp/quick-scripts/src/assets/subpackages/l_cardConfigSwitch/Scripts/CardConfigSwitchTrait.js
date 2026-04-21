"use strict";
cc._RF.push(module, '27664FKfYlJjLNWXvwKswCO', 'CardConfigSwitchTrait');
// subpackages/l_cardConfigSwitch/Scripts/CardConfigSwitchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardConfigSwitchTrait = /** @class */ (function (_super) {
    __extends(CardConfigSwitchTrait, _super);
    function CardConfigSwitchTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._configName = ConfigType_1.ConfigType.card_config.name;
        return _this;
    }
    CardConfigSwitchTrait_1 = CardConfigSwitchTrait;
    CardConfigSwitchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._configName = this._traitData.configName || ConfigType_1.ConfigType.card_config.name;
    };
    CardConfigSwitchTrait.prototype.onLoginM_enterGame = function (t, e) {
        CardUtil_1.default.setConfigName(this._configName);
        e();
    };
    CardConfigSwitchTrait.prototype.onFlwCdSeries_isOldFlw = function (t, e) {
        if (this._configName === ConfigType_1.ConfigType.card_config2.name) {
            t.args[1].isFlower = false;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    CardConfigSwitchTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
        var n, i, o, c, l;
        if (this._configName === ConfigType_1.ConfigType.card_config2.name) {
            var u = t.args[0];
            if (null === (l = null == u ? void 0 : u.levelData) || void 0 === l ? void 0 : l.isNewGame) {
                var p = t.ins, d = null == p ? void 0 : p.tileMapObject;
                if (d) {
                    var y = new Set(CardConfigSwitchTrait_1.SPECIAL_RES_IDS), _ = CardConfigSwitchTrait_1.TARGET_RES_IDS, h = d.tileObjectMap(), g = new Map();
                    try {
                        for (var v = __values(CardConfigSwitchTrait_1.SPECIAL_RES_IDS), m = v.next(); !m.done; m = v.next()) {
                            var w = m.value;
                            g.set(w, _[Math.floor(Math.random() * _.length)]);
                        }
                    }
                    catch (t) {
                        n = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            m && !m.done && (i = v.return) && i.call(v);
                        }
                        finally {
                            if (n)
                                throw n.error;
                        }
                    }
                    try {
                        for (var S = __values(h.entries()), C = S.next(); !C.done; C = S.next()) {
                            var T = __read(C.value, 2), b = T[0], R = T[1];
                            R && R.isValid && y.has(R.resId) && d.changeTileResId(b, g.get(R.resId));
                        }
                    }
                    catch (t) {
                        o = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            C && !C.done && (c = S.return) && c.call(S);
                        }
                        finally {
                            if (o)
                                throw o.error;
                        }
                    }
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
    var CardConfigSwitchTrait_1;
    CardConfigSwitchTrait.traitKey = "CardConfigSwitch";
    CardConfigSwitchTrait.SPECIAL_RES_IDS = [34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54];
    CardConfigSwitchTrait.TARGET_RES_IDS = [27, 28, 29, 30, 31, 32, 33, 55, 56, 57, 58, 59, 60, 61, 62];
    CardConfigSwitchTrait = CardConfigSwitchTrait_1 = __decorate([
        mj.trait,
        mj.class("CardConfigSwitchTrait")
    ], CardConfigSwitchTrait);
    return CardConfigSwitchTrait;
}(Trait_1.default));
exports.default = CardConfigSwitchTrait;

cc._RF.pop();