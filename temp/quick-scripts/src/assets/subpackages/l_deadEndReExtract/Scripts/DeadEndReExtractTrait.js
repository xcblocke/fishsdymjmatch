"use strict";
cc._RF.push(module, 'bf29ekwtxxDkZQoBkobK0VB', 'DeadEndReExtractTrait');
// subpackages/l_deadEndReExtract/Scripts/DeadEndReExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DeadEndReExtractTrait = /** @class */ (function (_super) {
    __extends(DeadEndReExtractTrait, _super);
    function DeadEndReExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeadEndReExtractTrait_1 = DeadEndReExtractTrait;
    DeadEndReExtractTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DeadEndReExtractTrait.prototype.modifyLevelName = function (e) {
        var t = e.split("_");
        if (t.length >= 4) {
            var r = parseInt(t[2]);
            r = Math.max(r - 1, 1);
            t[2] = r.toString().padStart(2, "0");
            t[3] = "04";
        }
        return t.join("_");
    };
    DeadEndReExtractTrait.prototype.onIptRestart_excute = function (e, t) {
        var a = e.args[0];
        if (this.checkGameMode()) {
            if (0 === a.dieResult && "fail" === a.callFrom) {
                DeadEndReExtractTrait_1._isDeathReplay = true;
            }
            else {
                DeadEndReExtractTrait_1._isDeathReplay = false;
            }
            t();
        }
        else
            t();
    };
    DeadEndReExtractTrait.prototype.onMainGameCtrl_nextLv = function (e, t) {
        var a = e.args[0];
        if (this.checkGameMode()) {
            if (a && DeadEndReExtractTrait_1._isDeathReplay) {
                DeadEndReExtractTrait_1._isDeathReplay = false;
                var n = UserModel_1.default.getInstance().getCurrentGameType(), i = UserModel_1.default.getInstance().getGameDataByGameType(n);
                if (i) {
                    var o = i.getLevelName();
                    if (o) {
                        DeadEndReExtractTrait_1._modifiedLevelName = this.modifyLevelName(o);
                        i.saveLevelData("");
                        e.args[0] = false;
                        t();
                    }
                    else
                        t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    DeadEndReExtractTrait.prototype.onExtNormLv_getContent = function (e, t) {
        if (this.checkGameMode()) {
            var a = DeadEndReExtractTrait_1._modifiedLevelName;
            if (a) {
                DeadEndReExtractTrait_1._modifiedLevelName = "";
                var n = e.args[0], i = ExtractNormalLevels_1.default.getInstance(), o = this.extractWithModifiedName(i, a, n);
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: o
                });
            }
            else
                t();
        }
        else
            t();
    };
    DeadEndReExtractTrait.prototype.extractWithModifiedName = function (e, t, r) {
        new Date().getTime();
        var a = e.getAllNamesData();
        if (!a || 0 === a.length)
            return Promise.reject(new Error("表名数据为空"));
        var n = ExtractNormalLevels_1.ExtractDimension.getLevelName(a, t), i = ExtractNormalLevels_1.ExtractDimension.getData(), s = (null == i ? void 0 : i.diffcult) || 50, l = e.getByteContentByType(n, s);
        if (!l)
            return Promise.reject(new Error("获取关卡内容失败"));
        var u = l.fileName.split("_")[0] + "_" + l.fileName.split("_")[1], p = l.contentByteData, d = e.get16BitValue(p.split(",")[0].trim()), m = e.getBoardConfig(), v = m.get(u), y = function y(t) {
            var r = "";
            if (t)
                for (var a = 0; a < t.length; a++)
                    if (Number(t[a].Index) === Number(d)) {
                        r = (t[a].Content + "|" + p).toString();
                        break;
                    }
            r || (r = e.getDouDiData());
            new Date().getTime();
            return [r, l.contentDiff, l.index, l.fileName, l.fileName.split("_")[0]];
        };
        if (v)
            return Promise.resolve(y(v));
        var _ = __read(e.getJsonPath(u, r.gameType, r.journeyType), 2), g = _[0], h = _[1];
        return ResManager_1.resManager.loadRes(g + u, cc.JsonAsset, h).then(function (e) {
            var t = e;
            if (t) {
                v = t.json;
                m.set(u, v);
                t.decRef();
            }
            return y(v);
        }).catch(function () {
            return y(null);
        });
    };
    var DeadEndReExtractTrait_1;
    DeadEndReExtractTrait.traitKey = "DeadEndReExtract";
    DeadEndReExtractTrait._isDeathReplay = false;
    DeadEndReExtractTrait._modifiedLevelName = "";
    DeadEndReExtractTrait = DeadEndReExtractTrait_1 = __decorate([
        mj.trait,
        mj.class("DeadEndReExtractTrait")
    ], DeadEndReExtractTrait);
    return DeadEndReExtractTrait;
}(ExtractTrait_1.default));
exports.default = DeadEndReExtractTrait;

cc._RF.pop();