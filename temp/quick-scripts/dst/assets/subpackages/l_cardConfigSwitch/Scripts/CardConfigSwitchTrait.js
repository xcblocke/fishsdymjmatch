
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardConfigSwitch/Scripts/CardConfigSwitchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRDb25maWdTd2l0Y2gvU2NyaXB0cy9DYXJkQ29uZmlnU3dpdGNoVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsNkVBQTRFO0FBQzVFLG9FQUErRDtBQUcvRDtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQXlFQztRQXhFQyxpQkFBVyxHQUFHLHVCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzs7SUF3RTVDLENBQUM7OEJBekVvQixxQkFBcUI7SUFLeEMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDL0UsQ0FBQztJQUNELGtEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixrQkFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDckQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxxREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFF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Q0F5RXpDO0lBQUQsNEJBQUM7Q0F6RUQsQUF5RUMsQ0F6RWtELGVBQUssR0F5RXZEO2tCQXpFb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkQ29uZmlnU3dpdGNoVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRDb25maWdTd2l0Y2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZ05hbWUgPSBDb25maWdUeXBlLmNhcmRfY29uZmlnLm5hbWU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FyZENvbmZpZ1N3aXRjaFwiO1xuICBzdGF0aWMgU1BFQ0lBTF9SRVNfSURTID0gWzM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTEsIDUyLCA1MywgNTRdO1xuICBzdGF0aWMgVEFSR0VUX1JFU19JRFMgPSBbMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDYxLCA2Ml07XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWdOYW1lID0gdGhpcy5fdHJhaXREYXRhLmNvbmZpZ05hbWUgfHwgQ29uZmlnVHlwZS5jYXJkX2NvbmZpZy5uYW1lO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgQ2FyZFV0aWwuc2V0Q29uZmlnTmFtZSh0aGlzLl9jb25maWdOYW1lKTtcbiAgICBlKCk7XG4gIH1cbiAgb25GbHdDZFNlcmllc19pc09sZEZsdyh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZ05hbWUgPT09IENvbmZpZ1R5cGUuY2FyZF9jb25maWcyLm5hbWUpIHtcbiAgICAgIHQuYXJnc1sxXS5pc0Zsb3dlciA9IGZhbHNlO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbklwdFNldEx2X3JlR2VuRmFjZXModCwgZSkge1xuICAgIHZhciBuLCBpLCBvLCBjLCBsO1xuICAgIGlmICh0aGlzLl9jb25maWdOYW1lID09PSBDb25maWdUeXBlLmNhcmRfY29uZmlnMi5uYW1lKSB7XG4gICAgICB2YXIgdSA9IHQuYXJnc1swXTtcbiAgICAgIGlmIChudWxsID09PSAobCA9IG51bGwgPT0gdSA/IHZvaWQgMCA6IHUubGV2ZWxEYXRhKSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLmlzTmV3R2FtZSkge1xuICAgICAgICB2YXIgcCA9IHQuaW5zLFxuICAgICAgICAgIGQgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLnRpbGVNYXBPYmplY3Q7XG4gICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgdmFyIHkgPSBuZXcgU2V0KENhcmRDb25maWdTd2l0Y2hUcmFpdC5TUEVDSUFMX1JFU19JRFMpLFxuICAgICAgICAgICAgXyA9IENhcmRDb25maWdTd2l0Y2hUcmFpdC5UQVJHRVRfUkVTX0lEUyxcbiAgICAgICAgICAgIGggPSBkLnRpbGVPYmplY3RNYXAoKSxcbiAgICAgICAgICAgIGcgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHYgPSBfX3ZhbHVlcyhDYXJkQ29uZmlnU3dpdGNoVHJhaXQuU1BFQ0lBTF9SRVNfSURTKSwgbSA9IHYubmV4dCgpOyAhbS5kb25lOyBtID0gdi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIHcgPSBtLnZhbHVlO1xuICAgICAgICAgICAgICBnLnNldCh3LCBfW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF8ubGVuZ3RoKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKGkgPSB2LnJldHVybikgJiYgaS5jYWxsKHYpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBTID0gX192YWx1ZXMoaC5lbnRyaWVzKCkpLCBDID0gUy5uZXh0KCk7ICFDLmRvbmU7IEMgPSBTLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgVCA9IF9fcmVhZChDLnZhbHVlLCAyKSxcbiAgICAgICAgICAgICAgICBiID0gVFswXSxcbiAgICAgICAgICAgICAgICBSID0gVFsxXTtcbiAgICAgICAgICAgICAgUiAmJiBSLmlzVmFsaWQgJiYgeS5oYXMoUi5yZXNJZCkgJiYgZC5jaGFuZ2VUaWxlUmVzSWQoYiwgZy5nZXQoUi5yZXNJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBDICYmICFDLmRvbmUgJiYgKGMgPSBTLnJldHVybikgJiYgYy5jYWxsKFMpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==