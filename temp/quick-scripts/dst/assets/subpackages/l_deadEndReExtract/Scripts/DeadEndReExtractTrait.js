
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deadEndReExtract/Scripts/DeadEndReExtractTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYWRFbmRSZUV4dHJhY3QvU2NyaXB0cy9EZWFkRW5kUmVFeHRyYWN0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCxpR0FBa0g7QUFDbEgsOEVBQXdGO0FBQ3hGLDRFQUEyRTtBQUMzRSxzRUFBaUU7QUFHakU7SUFBbUQseUNBQVk7SUFBL0Q7O0lBdUdBLENBQUM7OEJBdkdvQixxQkFBcUI7SUFJeEMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELCtDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxtREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUs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QUFFLENBQUM7YUFDWjtZQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztJQXJHTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBQzlCLG9DQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLHdDQUFrQixHQUFHLEVBQUUsQ0FBQztJQUhaLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0F1R3pDO0lBQUQsNEJBQUM7Q0F2R0QsQUF1R0MsQ0F2R2tELHNCQUFZLEdBdUc5RDtrQkF2R29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IEV4dHJhY3ROb3JtYWxMZXZlbHMsIHsgRXh0cmFjdERpbWVuc2lvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdE5vcm1hbExldmVscyc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRlYWRFbmRSZUV4dHJhY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhZEVuZFJlRXh0cmFjdFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEZWFkRW5kUmVFeHRyYWN0XCI7XG4gIHN0YXRpYyBfaXNEZWF0aFJlcGxheSA9IGZhbHNlO1xuICBzdGF0aWMgX21vZGlmaWVkTGV2ZWxOYW1lID0gXCJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG1vZGlmeUxldmVsTmFtZShlKSB7XG4gICAgdmFyIHQgPSBlLnNwbGl0KFwiX1wiKTtcbiAgICBpZiAodC5sZW5ndGggPj0gNCkge1xuICAgICAgdmFyIHIgPSBwYXJzZUludCh0WzJdKTtcbiAgICAgIHIgPSBNYXRoLm1heChyIC0gMSwgMSk7XG4gICAgICB0WzJdID0gci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHRbM10gPSBcIjA0XCI7XG4gICAgfVxuICAgIHJldHVybiB0LmpvaW4oXCJfXCIpO1xuICB9XG4gIG9uSXB0UmVzdGFydF9leGN1dGUoZSwgdCkge1xuICAgIHZhciBhID0gZS5hcmdzWzBdO1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgaWYgKDAgPT09IGEuZGllUmVzdWx0ICYmIFwiZmFpbFwiID09PSBhLmNhbGxGcm9tKSB7XG4gICAgICAgIERlYWRFbmRSZUV4dHJhY3RUcmFpdC5faXNEZWF0aFJlcGxheSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEZWFkRW5kUmVFeHRyYWN0VHJhaXQuX2lzRGVhdGhSZXBsYXkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX25leHRMdihlLCB0KSB7XG4gICAgdmFyIGEgPSBlLmFyZ3NbMF07XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICBpZiAoYSAmJiBEZWFkRW5kUmVFeHRyYWN0VHJhaXQuX2lzRGVhdGhSZXBsYXkpIHtcbiAgICAgICAgRGVhZEVuZFJlRXh0cmFjdFRyYWl0Ll9pc0RlYXRoUmVwbGF5ID0gZmFsc2U7XG4gICAgICAgIHZhciBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICAgICAgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShuKTtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB2YXIgbyA9IGkuZ2V0TGV2ZWxOYW1lKCk7XG4gICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgIERlYWRFbmRSZUV4dHJhY3RUcmFpdC5fbW9kaWZpZWRMZXZlbE5hbWUgPSB0aGlzLm1vZGlmeUxldmVsTmFtZShvKTtcbiAgICAgICAgICAgIGkuc2F2ZUxldmVsRGF0YShcIlwiKTtcbiAgICAgICAgICAgIGUuYXJnc1swXSA9IGZhbHNlO1xuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0Q29udGVudChlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgYSA9IERlYWRFbmRSZUV4dHJhY3RUcmFpdC5fbW9kaWZpZWRMZXZlbE5hbWU7XG4gICAgICBpZiAoYSkge1xuICAgICAgICBEZWFkRW5kUmVFeHRyYWN0VHJhaXQuX21vZGlmaWVkTGV2ZWxOYW1lID0gXCJcIjtcbiAgICAgICAgdmFyIG4gPSBlLmFyZ3NbMF0sXG4gICAgICAgICAgaSA9IEV4dHJhY3ROb3JtYWxMZXZlbHMuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICBvID0gdGhpcy5leHRyYWN0V2l0aE1vZGlmaWVkTmFtZShpLCBhLCBuKTtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiBvXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGV4dHJhY3RXaXRoTW9kaWZpZWROYW1lKGUsIHQsIHIpIHtcbiAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgYSA9IGUuZ2V0QWxsTmFtZXNEYXRhKCk7XG4gICAgaWYgKCFhIHx8IDAgPT09IGEubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwi6KGo5ZCN5pWw5o2u5Li656m6XCIpKTtcbiAgICB2YXIgbiA9IEV4dHJhY3REaW1lbnNpb24uZ2V0TGV2ZWxOYW1lKGEsIHQpLFxuICAgICAgaSA9IEV4dHJhY3REaW1lbnNpb24uZ2V0RGF0YSgpLFxuICAgICAgcyA9IChudWxsID09IGkgPyB2b2lkIDAgOiBpLmRpZmZjdWx0KSB8fCA1MCxcbiAgICAgIGwgPSBlLmdldEJ5dGVDb250ZW50QnlUeXBlKG4sIHMpO1xuICAgIGlmICghbCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIuiOt+WPluWFs+WNoeWGheWuueWksei0pVwiKSk7XG4gICAgdmFyIHUgPSBsLmZpbGVOYW1lLnNwbGl0KFwiX1wiKVswXSArIFwiX1wiICsgbC5maWxlTmFtZS5zcGxpdChcIl9cIilbMV0sXG4gICAgICBwID0gbC5jb250ZW50Qnl0ZURhdGEsXG4gICAgICBkID0gZS5nZXQxNkJpdFZhbHVlKHAuc3BsaXQoXCIsXCIpWzBdLnRyaW0oKSksXG4gICAgICBtID0gZS5nZXRCb2FyZENvbmZpZygpLFxuICAgICAgdiA9IG0uZ2V0KHUpLFxuICAgICAgeSA9IGZ1bmN0aW9uIHkodCkge1xuICAgICAgICB2YXIgciA9IFwiXCI7XG4gICAgICAgIGlmICh0KSBmb3IgKHZhciBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspIGlmIChOdW1iZXIodFthXS5JbmRleCkgPT09IE51bWJlcihkKSkge1xuICAgICAgICAgIHIgPSAodFthXS5Db250ZW50ICsgXCJ8XCIgKyBwKS50b1N0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHIgfHwgKHIgPSBlLmdldERvdURpRGF0YSgpKTtcbiAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHJldHVybiBbciwgbC5jb250ZW50RGlmZiwgbC5pbmRleCwgbC5maWxlTmFtZSwgbC5maWxlTmFtZS5zcGxpdChcIl9cIilbMF1dO1xuICAgICAgfTtcbiAgICBpZiAodikgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh5KHYpKTtcbiAgICB2YXIgXyA9IF9fcmVhZChlLmdldEpzb25QYXRoKHUsIHIuZ2FtZVR5cGUsIHIuam91cm5leVR5cGUpLCAyKSxcbiAgICAgIGcgPSBfWzBdLFxuICAgICAgaCA9IF9bMV07XG4gICAgcmV0dXJuIHJlc01hbmFnZXIubG9hZFJlcyhnICsgdSwgY2MuSnNvbkFzc2V0LCBoKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGU7XG4gICAgICBpZiAodCkge1xuICAgICAgICB2ID0gdC5qc29uO1xuICAgICAgICBtLnNldCh1LCB2KTtcbiAgICAgICAgdC5kZWNSZWYoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB5KHYpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB5KG51bGwpO1xuICAgIH0pO1xuICB9XG59Il19