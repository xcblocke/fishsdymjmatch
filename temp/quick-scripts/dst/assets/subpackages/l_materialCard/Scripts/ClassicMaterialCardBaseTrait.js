
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/ClassicMaterialCardBaseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80ec9E5qGZP24JhjLHabju7', 'ClassicMaterialCardBaseTrait');
// subpackages/l_materialCard/Scripts/ClassicMaterialCardBaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var h = ["gameplay_img_mj_dn", "gameplay_img_mj_up", "gameplay_select_mj"];
var ClassicMaterialCardBaseTrait = /** @class */ (function (_super) {
    __extends(ClassicMaterialCardBaseTrait, _super);
    function ClassicMaterialCardBaseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._preloadedMaterialIds = [];
        return _this;
    }
    ClassicMaterialCardBaseTrait_1 = ClassicMaterialCardBaseTrait;
    ClassicMaterialCardBaseTrait.prototype.switchToNextMaterialCard = function () {
        var e;
        if (0 !== this._preloadedMaterialIds.length) {
            var a = this.getCurMaterialCard(), i = this._preloadedMaterialIds.filter(function (t) {
                return t !== a;
            }), o = i.length > 0 ? i[Math.floor(Math.random() * i.length)] : this._preloadedMaterialIds[0];
            this.setCurMaterialCard(o);
            if (this._preloadedMaterialIds.length < ClassicMaterialCardBaseTrait_1.MAX_PRELOAD_SETS) {
                var l = this.pickTwoNotInPreloaded();
                if (l.length > 0) {
                    (e = this._preloadedMaterialIds).push.apply(e, __spreadArrays(l));
                    this.loadRes(l);
                }
            }
        }
        else
            _super.prototype.switchToNextMaterialCard.call(this);
    };
    ClassicMaterialCardBaseTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        var r, a, i;
        if ((null !== (a = null === (r = t.ins) || void 0 === r ? void 0 : r.gameType) && void 0 !== a ? a : null === (i = t.ins) || void 0 === i ? void 0 : i._gameType) === GameTypeEnums_1.MjGameType.Classic) {
            this._preloadedMaterialIds = [];
            this._preloadedMaterialIds = this.pickPreloadMaterialIds();
            this._preloadedMaterialIds.length > 0 && this.addPreloadRes(t.ins, this._preloadedMaterialIds);
            e();
        }
        else
            e();
    };
    ClassicMaterialCardBaseTrait.prototype.pickPreloadMaterialIds = function () {
        var t, e = null !== (t = UserModel_1.default.getInstance().classicData.getCardMaterialID()) && void 0 !== t ? t : 0, r = this.pickTwoNotInPreloaded([]);
        0 === e || r.includes(e) || r.push(e);
        return __spreadArrays([0], r);
    };
    ClassicMaterialCardBaseTrait.prototype.pickTwoNotInPreloaded = function (t, e) {
        if (e === void 0) { e = 2; }
        var r = null != t ? t : this._preloadedMaterialIds, a = this.getAvailableMaterials().filter(function (t) {
            return 0 !== t && !r.includes(t);
        });
        if (0 === a.length)
            return [];
        for (var i = Math.min(e, a.length), o = [], l = 0; l < i; l++) {
            var n = Math.floor(Math.random() * a.length);
            o.push(a[n]);
            a.splice(n, 1);
        }
        return o;
    };
    ClassicMaterialCardBaseTrait.prototype.addPreloadRes = function (t, e) {
        var r, a, i, o;
        if (t && "function" == typeof t.addPreloadRes) {
            var l = Array.isArray(e) ? e : [e];
            try {
                for (var n = __values(l), c = n.next(); !c.done; c = n.next()) {
                    var d = c.value;
                    if (0 !== d) {
                        var u = this.getBundleNameById(d);
                        if (u)
                            try {
                                for (var p = (i = void 0, __values(h)), f = p.next(); !f.done; f = p.next()) {
                                    var v = u + ":texture/" + f.value;
                                    t.addPreloadRes("SpriteFrame", v);
                                }
                            }
                            catch (t) {
                                i = {
                                    error: t
                                };
                            }
                            finally {
                                try {
                                    f && !f.done && (o = p.return) && o.call(p);
                                }
                                finally {
                                    if (i)
                                        throw i.error;
                                }
                            }
                    }
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (a = n.return) && a.call(n);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
        }
    };
    ClassicMaterialCardBaseTrait.prototype.loadRes = function (t) {
        var e, a, i, o, l = ControllerManager_1.default.getInstance().getControByName(ClassicMaterialCardBaseTrait_1.CLASSIC_CTRL_NAME);
        if (l && "function" == typeof l.loadRes) {
            var n = Array.isArray(t) ? t : [t];
            try {
                for (var d = __values(n), u = d.next(); !u.done; u = d.next()) {
                    var p = u.value;
                    if (0 !== p) {
                        var f = this.getBundleNameById(p);
                        if (f) {
                            var v = function v(t) {
                                l.loadRes("texture/" + t, cc.SpriteFrame, f).then(function () { }).catch(function () { });
                            };
                            try {
                                for (var y = (i = void 0, __values(h)), _ = y.next(); !_.done; _ = y.next())
                                    v(_.value);
                            }
                            catch (t) {
                                i = {
                                    error: t
                                };
                            }
                            finally {
                                try {
                                    _ && !_.done && (o = y.return) && o.call(y);
                                }
                                finally {
                                    if (i)
                                        throw i.error;
                                }
                            }
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
                    u && !u.done && (a = d.return) && a.call(d);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    ClassicMaterialCardBaseTrait.prototype.onCardUtil_atlasPathBundle = function (e, r) {
        var a, i = null === (a = e.args) || void 0 === a ? void 0 : a[0];
        if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i || !this.isClassicMode() || 0 !== this.getCurMaterialCard()) {
            _super.prototype.onCardUtil_atlasPathBundle.call(this, e, r);
        }
        else {
            r({
                isBreak: true
            });
        }
    };
    ClassicMaterialCardBaseTrait.prototype.onTileNodeObj_playAnim = function (e, r) {
        var a;
        if ("spine/rollcard/gameplay_flip" === (null === (a = e.args) || void 0 === a ? void 0 : a[0]) && this.isClassicMode() && 0 === this.getCurMaterialCard()) {
            r({
                isBreak: true
            });
        }
        else {
            _super.prototype.onTileNodeObj_playAnim.call(this, e, r);
        }
    };
    var ClassicMaterialCardBaseTrait_1;
    ClassicMaterialCardBaseTrait.traitKey = "ClassicMaterialCardBase";
    ClassicMaterialCardBaseTrait.MAX_PRELOAD_SETS = 20;
    ClassicMaterialCardBaseTrait.CLASSIC_CTRL_NAME = "ClassicController";
    ClassicMaterialCardBaseTrait = ClassicMaterialCardBaseTrait_1 = __decorate([
        mj.trait,
        mj.class("ClassicMaterialCardBaseTrait")
    ], ClassicMaterialCardBaseTrait);
    return ClassicMaterialCardBaseTrait;
}(MaterialCardBaseTrait_1.default));
exports.default = ClassicMaterialCardBaseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL0NsYXNzaWNNYXRlcmlhbENhcmRCYXNlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRix3RkFBb0Y7QUFDcEYsaUVBQTREO0FBQzVELHNFQUFpRTtBQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFHM0U7SUFBMEQsZ0RBQXFCO0lBQS9FO1FBQUEscUVBK0pDO1FBOUpDLDJCQUFxQixHQUFHLEVBQUUsQ0FBQzs7SUE4SjdCLENBQUM7cUNBL0pvQiw0QkFBNEI7SUFLL0MsK0RBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUMvQixDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsOEJBQTRCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JGLElBQUks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QUM7SUFKNUIsNEJBQTRCO1FBRmhELEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztPQUNwQiw0QkFBNEIsQ0ErSmhEO0lBQUQsbUNBQUM7Q0EvSkQsQUErSkMsQ0EvSnlELCtCQUFxQixHQStKOUU7a0JBL0pvQiw0QkFBNEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBNYXRlcmlhbENhcmRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRCYXNlVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbnZhciBoID0gW1wiZ2FtZXBsYXlfaW1nX21qX2RuXCIsIFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIsIFwiZ2FtZXBsYXlfc2VsZWN0X21qXCJdO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDbGFzc2ljTWF0ZXJpYWxDYXJkQmFzZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IHtcbiAgX3ByZWxvYWRlZE1hdGVyaWFsSWRzID0gW107XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xhc3NpY01hdGVyaWFsQ2FyZEJhc2VcIjtcbiAgc3RhdGljIE1BWF9QUkVMT0FEX1NFVFMgPSAyMDtcbiAgc3RhdGljIENMQVNTSUNfQ1RSTF9OQU1FID0gXCJDbGFzc2ljQ29udHJvbGxlclwiO1xuICBzd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKDAgIT09IHRoaXMuX3ByZWxvYWRlZE1hdGVyaWFsSWRzLmxlbmd0aCkge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpLFxuICAgICAgICBpID0gdGhpcy5fcHJlbG9hZGVkTWF0ZXJpYWxJZHMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQgIT09IGE7XG4gICAgICAgIH0pLFxuICAgICAgICBvID0gaS5sZW5ndGggPiAwID8gaVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpLmxlbmd0aCldIDogdGhpcy5fcHJlbG9hZGVkTWF0ZXJpYWxJZHNbMF07XG4gICAgICB0aGlzLnNldEN1ck1hdGVyaWFsQ2FyZChvKTtcbiAgICAgIGlmICh0aGlzLl9wcmVsb2FkZWRNYXRlcmlhbElkcy5sZW5ndGggPCBDbGFzc2ljTWF0ZXJpYWxDYXJkQmFzZVRyYWl0Lk1BWF9QUkVMT0FEX1NFVFMpIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzLnBpY2tUd29Ob3RJblByZWxvYWRlZCgpO1xuICAgICAgICBpZiAobC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgKGUgPSB0aGlzLl9wcmVsb2FkZWRNYXRlcmlhbElkcykucHVzaC5hcHBseShlLCBbLi4ubF0pO1xuICAgICAgICAgIHRoaXMubG9hZFJlcyhsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBzdXBlci5zd2l0Y2hUb05leHRNYXRlcmlhbENhcmQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pbml0UmVzKHQsIGUpIHtcbiAgICB2YXIgciwgYSwgaTtcbiAgICBpZiAoKG51bGwgIT09IChhID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lVHlwZSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IG51bGwgPT09IChpID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuX2dhbWVUeXBlKSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLl9wcmVsb2FkZWRNYXRlcmlhbElkcyA9IFtdO1xuICAgICAgdGhpcy5fcHJlbG9hZGVkTWF0ZXJpYWxJZHMgPSB0aGlzLnBpY2tQcmVsb2FkTWF0ZXJpYWxJZHMoKTtcbiAgICAgIHRoaXMuX3ByZWxvYWRlZE1hdGVyaWFsSWRzLmxlbmd0aCA+IDAgJiYgdGhpcy5hZGRQcmVsb2FkUmVzKHQuaW5zLCB0aGlzLl9wcmVsb2FkZWRNYXRlcmlhbElkcyk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBwaWNrUHJlbG9hZE1hdGVyaWFsSWRzKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IG51bGwgIT09ICh0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuY2xhc3NpY0RhdGEuZ2V0Q2FyZE1hdGVyaWFsSUQoKSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDAsXG4gICAgICByID0gdGhpcy5waWNrVHdvTm90SW5QcmVsb2FkZWQoW10pO1xuICAgIDAgPT09IGUgfHwgci5pbmNsdWRlcyhlKSB8fCByLnB1c2goZSk7XG4gICAgcmV0dXJuIFsuLi5bMF0sIC4uLnJdO1xuICB9XG4gIHBpY2tUd29Ob3RJblByZWxvYWRlZCh0LCBlID0gMikge1xuICAgIHZhciByID0gbnVsbCAhPSB0ID8gdCA6IHRoaXMuX3ByZWxvYWRlZE1hdGVyaWFsSWRzLFxuICAgICAgYSA9IHRoaXMuZ2V0QXZhaWxhYmxlTWF0ZXJpYWxzKCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAwICE9PSB0ICYmICFyLmluY2x1ZGVzKHQpO1xuICAgICAgfSk7XG4gICAgaWYgKDAgPT09IGEubGVuZ3RoKSByZXR1cm4gW107XG4gICAgZm9yICh2YXIgaSA9IE1hdGgubWluKGUsIGEubGVuZ3RoKSwgbyA9IFtdLCBsID0gMDsgbCA8IGk7IGwrKykge1xuICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhLmxlbmd0aCk7XG4gICAgICBvLnB1c2goYVtuXSk7XG4gICAgICBhLnNwbGljZShuLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgYWRkUHJlbG9hZFJlcyh0LCBlKSB7XG4gICAgdmFyIHIsIGEsIGksIG87XG4gICAgaWYgKHQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LmFkZFByZWxvYWRSZXMpIHtcbiAgICAgIHZhciBsID0gQXJyYXkuaXNBcnJheShlKSA/IGUgOiBbZV07XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMobCksIGMgPSBuLm5leHQoKTsgIWMuZG9uZTsgYyA9IG4ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGQgPSBjLnZhbHVlO1xuICAgICAgICAgIGlmICgwICE9PSBkKSB7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMuZ2V0QnVuZGxlTmFtZUJ5SWQoZCk7XG4gICAgICAgICAgICBpZiAodSkgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IChpID0gdm9pZCAwLCBfX3ZhbHVlcyhoKSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB1ICsgXCI6dGV4dHVyZS9cIiArIGYudmFsdWU7XG4gICAgICAgICAgICAgICAgdC5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgdik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKG8gPSBwLnJldHVybikgJiYgby5jYWxsKHApO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYyAmJiAhYy5kb25lICYmIChhID0gbi5yZXR1cm4pICYmIGEuY2FsbChuKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2FkUmVzKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIGEsXG4gICAgICBpLFxuICAgICAgbyxcbiAgICAgIGwgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENvbnRyb0J5TmFtZShDbGFzc2ljTWF0ZXJpYWxDYXJkQmFzZVRyYWl0LkNMQVNTSUNfQ1RSTF9OQU1FKTtcbiAgICBpZiAobCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwubG9hZFJlcykge1xuICAgICAgdmFyIG4gPSBBcnJheS5pc0FycmF5KHQpID8gdCA6IFt0XTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGQgPSBfX3ZhbHVlcyhuKSwgdSA9IGQubmV4dCgpOyAhdS5kb25lOyB1ID0gZC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgICAgaWYgKDAgIT09IHApIHtcbiAgICAgICAgICAgIHZhciBmID0gdGhpcy5nZXRCdW5kbGVOYW1lQnlJZChwKTtcbiAgICAgICAgICAgIGlmIChmKSB7XG4gICAgICAgICAgICAgIHZhciB2ID0gZnVuY3Rpb24gdih0KSB7XG4gICAgICAgICAgICAgICAgbC5sb2FkUmVzKFwidGV4dHVyZS9cIiArIHQsIGNjLlNwcml0ZUZyYW1lLCBmKS50aGVuKGZ1bmN0aW9uICgpIHt9KS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IChpID0gdm9pZCAwLCBfX3ZhbHVlcyhoKSksIF8gPSB5Lm5leHQoKTsgIV8uZG9uZTsgXyA9IHkubmV4dCgpKSB2KF8udmFsdWUpO1xuICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgXyAmJiAhXy5kb25lICYmIChvID0geS5yZXR1cm4pICYmIG8uY2FsbCh5KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIGUgPSB7XG4gICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChhID0gZC5yZXR1cm4pICYmIGEuY2FsbChkKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZShlLCByKSB7XG4gICAgdmFyIGEsXG4gICAgICBpID0gbnVsbCA9PT0gKGEgPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF07XG4gICAgaWYgKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgIT09IGkgJiYgXCJnYW1lcGxheV9pbWdfbWpfdXBcIiAhPT0gaSAmJiBcImdhbWVwbGF5X3NlbGVjdF9talwiICE9PSBpIHx8ICF0aGlzLmlzQ2xhc3NpY01vZGUoKSB8fCAwICE9PSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpKSB7XG4gICAgICBzdXBlci5vbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZS5jYWxsKHRoaXMsIGUsIHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uVGlsZU5vZGVPYmpfcGxheUFuaW0oZSwgcikge1xuICAgIHZhciBhO1xuICAgIGlmIChcInNwaW5lL3JvbGxjYXJkL2dhbWVwbGF5X2ZsaXBcIiA9PT0gKG51bGwgPT09IChhID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdKSAmJiB0aGlzLmlzQ2xhc3NpY01vZGUoKSAmJiAwID09PSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpKSB7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLm9uVGlsZU5vZGVPYmpfcGxheUFuaW0uY2FsbCh0aGlzLCBlLCByKTtcbiAgICB9XG4gIH1cbn0iXX0=