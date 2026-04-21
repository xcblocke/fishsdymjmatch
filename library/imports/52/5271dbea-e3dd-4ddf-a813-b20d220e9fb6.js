"use strict";
cc._RF.push(module, '5271dvq491N36gTsg0iDp+2', 'ChangeBoard15DaysTrait');
// subpackages/l_cb15Days/Scripts/ChangeBoard15DaysTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChangeBoard15DaysTrait = /** @class */ (function (_super) {
    __extends(ChangeBoard15DaysTrait, _super);
    function ChangeBoard15DaysTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.installDaysThreshold = 15;
        _this.bundleName = "r_cb15days";
        _this.traitFolder = "trait999";
        _this.configPath = null;
        _this.offsetPath = null;
        _this.levelDataPath = null;
        _this.jsonPath = null;
        _this._gameTypes = [GameTypeEnums_1.MjGameType.Normal];
        _this._isAble = false;
        _this._isChange = false;
        return _this;
    }
    ChangeBoard15DaysTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this.installDaysThreshold = null !== (e = this._traitData.installDays) && void 0 !== e ? e : 15;
        this.configPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
        this.offsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
        this.levelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
        this.jsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
        this._gameTypes = null !== (r = this._traitData.gameType) && void 0 !== r ? r : [GameTypeEnums_1.MjGameType.Normal];
        this.tryPreloadBundle();
    };
    ChangeBoard15DaysTrait.prototype.tryPreloadBundle = function () {
        LowPriorityBundleLoader_1.default.getInstance().addTask(this.bundleName);
    };
    ChangeBoard15DaysTrait.prototype.checkFunctionEnabled = function () {
        var t, e = UserModel_1.default.getInstance();
        if (!e)
            return false;
        var r = null === (t = e.getInstallTime) || void 0 === t ? void 0 : t.call(e);
        return !(!r || r <= 0) && Math.floor((Date.now() - r) / 86400000) >= this.installDaysThreshold;
    };
    ChangeBoard15DaysTrait.prototype.isBundleLoaded = function () {
        return LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(this.bundleName);
    };
    ChangeBoard15DaysTrait.prototype.checkCondition = function (t) {
        if (!this.isBundleLoaded())
            return false;
        t || (t = ExtractTool_1.default.getCurrentGameType());
        return !!this._gameTypes.includes(t) && this.checkFunctionEnabled();
    };
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        this._isAble = this.checkCondition(r);
        if (this._isAble) {
            this._isChange = true;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.configPath
            });
        }
        else {
            e();
            this._isChange = false;
        }
    };
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        if (this.checkCondition(r)) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.offsetPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        if (this.checkCondition(r)) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelDataPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        if (this.checkCondition(r) && this._isChange) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.jsonPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoard15DaysTrait.prototype.onIptEnterAniFin_excute = function (t, e) {
        var r, a;
        e();
        if (this._isAble) {
            var n = t.ins, o = null === (a = null === (r = null == n ? void 0 : n.gameContext) || void 0 === r ? void 0 : r.getTileMapObject) || void 0 === a ? void 0 : a.call(r);
            o && this.countCardsByCardId(o);
        }
    };
    ChangeBoard15DaysTrait.prototype.countCardsByCardId = function (t) {
        var e, r, a, n, o, l = new Map(), s = (null === (o = t.mapLayers) || void 0 === o ? void 0 : o.call(t)) || [];
        try {
            for (var u = __values(s), c = u.next(); !c.done; c = u.next()) {
                var d = c.value.allCards || [];
                try {
                    for (var f = (a = void 0, __values(d)), h = f.next(); !h.done; h = f.next()) {
                        var p = h.value;
                        if (p && p.isValid) {
                            var y = p.cardId;
                            l.set(y, (l.get(y) || 0) + 1);
                        }
                    }
                }
                catch (t) {
                    a = {
                        error: t
                    };
                }
                finally {
                    try {
                        h && !h.done && (n = f.return) && n.call(f);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (r = u.return) && r.call(u);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return l;
    };
    ChangeBoard15DaysTrait.traitKey = "ChangeBoard15Days";
    ChangeBoard15DaysTrait = __decorate([
        mj.trait,
        mj.class("ChangeBoard15DaysTrait")
    ], ChangeBoard15DaysTrait);
    return ChangeBoard15DaysTrait;
}(Trait_1.default));
exports.default = ChangeBoard15DaysTrait;

cc._RF.pop();