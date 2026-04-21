
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianZanStyle/Scripts/DianZanStyleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c933LZfEhBy5RRApyJdXVF', 'DianZanStyleTrait');
// subpackages/l_dianZanStyle/Scripts/DianZanStyleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var l;
(function (l) {
    l[l["RandomDiff"] = 1] = "RandomDiff";
    l[l["IntervalRandomDiff"] = 2] = "IntervalRandomDiff";
})(l || (l = {}));
var DianZanStyleTrait = /** @class */ (function (_super) {
    __extends(DianZanStyleTrait, _super);
    function DianZanStyleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._gameType = null;
        return _this;
    }
    DianZanStyleTrait_1 = DianZanStyleTrait;
    Object.defineProperty(DianZanStyleTrait.prototype, "styleCount", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.styleCount) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "switchMode", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchMode) || l.RandomDiff;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "switchInterval", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchInterval) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "animPrefix", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.animPrefix) || "in_";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStyle";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "spinePath", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spinePath) || "spine/dianzan_styles";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "isMergeGameType", {
        get: function () {
            var t;
            return !!(null === (t = this.traitData) || void 0 === t ? void 0 : t.isMergeGameType);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStyleTrait.prototype, "gameTypes", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [];
        },
        enumerable: false,
        configurable: true
    });
    DianZanStyleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DianZanStyleTrait.prototype.isActiveForCurrentMode = function () {
        if (1 === NormalGameData_1.default.getInstance().getCurrentLevelId())
            return false;
        var t = this.gameTypes;
        return !t || 0 === t.length || t.includes(String(this._gameType));
    };
    DianZanStyleTrait.prototype.getDataKey = function () {
        var t;
        return this.isMergeGameType ? "all" : String(null !== (t = this._gameType) && void 0 !== t ? t : "all");
    };
    DianZanStyleTrait.prototype.getStyleData = function () {
        if (!this.localData.modeData) {
            this.localData.modeData = {};
            this.localData.modeData = this.localData.modeData;
        }
        var t = this.getDataKey();
        if (!this.localData.modeData[t]) {
            this.localData.modeData[t] = Object.assign({}, DianZanStyleTrait_1.DEFAULT_STYLE_DATA);
            this.localData.modeData = this.localData.modeData;
        }
        return this.localData.modeData[t];
    };
    DianZanStyleTrait.prototype.saveStyleData = function (t) {
        var e = this.getDataKey();
        this.localData.modeData[e] = t;
        this.localData.modeData = this.localData.modeData;
    };
    DianZanStyleTrait.prototype.getLastGameKey = function () {
        var t, e, a = String(null !== (t = this._gameType) && void 0 !== t ? t : "unknown");
        return (null === (e = this.localData.lastGameKeys) || void 0 === e ? void 0 : e[a]) || "";
    };
    DianZanStyleTrait.prototype.setLastGameKey = function (t) {
        var e;
        this.localData.lastGameKeys || (this.localData.lastGameKeys = {});
        this.localData.lastGameKeys[String(null !== (e = this._gameType) && void 0 !== e ? e : "unknown")] = t;
        this.localData.lastGameKeys = this.localData.lastGameKeys;
    };
    DianZanStyleTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var a, r, n, i;
        this._gameType = null === (r = null === (a = t.ins) || void 0 === a ? void 0 : a._context) || void 0 === r ? void 0 : r.gameType;
        if (this.isActiveForCurrentMode()) {
            var o = this.getStyleData(), l = this.getCurrentGameKey(), s = this.getLastGameKey();
            if (!(!l || l === s)) {
                o.gameCount += 1;
                o.currentGameStyleIndex = 0;
                this.saveStyleData(o);
                this.setLastGameKey(l);
            }
            this.loadSpine(null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr);
            e();
        }
        else {
            this._currSkData = null;
            e();
        }
    };
    DianZanStyleTrait.prototype.getCurrentGameKey = function () {
        var t, e;
        try {
            var a = UserModel_1.default.getInstance();
            if (null != this._gameType && a) {
                var r = a.getGameDataByGameType(this._gameType);
                return ((null === (t = null == r ? void 0 : r.getLevelId) || void 0 === t ? void 0 : t.call(r)) || 0) + "_" + ((null === (e = null == r ? void 0 : r.getReplayCount) || void 0 === e ? void 0 : e.call(r)) || 0);
            }
        }
        catch (t) { }
        return "";
    };
    DianZanStyleTrait.prototype.loadSpine = function (t) {
        var e = this;
        if (t && "function" == typeof t.loadRes) {
            this._currSkData = null;
            t.loadRes(this.spinePath, sp.SkeletonData, this.bundleName).then(function (t) {
                var a = Array.isArray(t) ? t[0] : t;
                e._currSkData = a || null;
            }).catch(function () {
                e._currSkData = null;
            });
        }
    };
    DianZanStyleTrait.prototype.onDianZanItem_initComp = function (t, e) {
        var a;
        if (this.isActiveForCurrentMode()) {
            var r = null === (a = t.ins) || void 0 === a ? void 0 : a._spineAnim, n = this._currSkData;
            if (n && r && r.skeletonData !== n) {
                r.clearTracks();
                r.setToSetupPose();
                r.skeletonData = n;
            }
            e();
        }
        else
            e();
    };
    DianZanStyleTrait.prototype.onDianZanBhv_getAniName = function (t, e) {
        if (this.isActiveForCurrentMode()) {
            if (this._currSkData) {
                this.getStyleData().lastPlayedStyleIndex;
                var a = this.getNextStyleIndex(), r = "" + this.animPrefix + a;
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.jump,
                    returnVal: r
                });
            }
            else
                e();
        }
        else
            e();
    };
    DianZanStyleTrait.prototype.onDianZanBhv_playAni = function (t, e) {
        var a;
        if (this.isActiveForCurrentMode()) {
            if (this._currSkData) {
                var r = null === (a = t.args) || void 0 === a ? void 0 : a[2];
                if (r && r.startsWith(this.animPrefix)) {
                    var n = parseInt(r.substring(this.animPrefix.length), 10);
                    if (!isNaN(n)) {
                        var i = this.getStyleData();
                        i.lastPlayedStyleIndex;
                        i.lastPlayedStyleIndex = n;
                        this.saveStyleData(i);
                    }
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    DianZanStyleTrait.prototype.getNextStyleIndex = function () {
        var t = this.getStyleData();
        if (this.switchMode === l.RandomDiff)
            return this.randomStyleExcludeLast(t);
        if (t.currentGameStyleIndex > 0)
            return t.currentGameStyleIndex;
        var e;
        e = t.gameCount % this.switchInterval == 1 || 0 === t.lastPlayedStyleIndex ? this.randomStyleExcludeLast(t) : t.lastPlayedStyleIndex;
        t.currentGameStyleIndex = e;
        this.saveStyleData(t);
        return e;
    };
    DianZanStyleTrait.prototype.randomStyleExcludeLast = function (t) {
        var e = (t || this.getStyleData()).lastPlayedStyleIndex || 0, a = Array.from({
            length: this.styleCount
        }, function (t, e) {
            return e + 1;
        }), r = a.indexOf(e);
        if (-1 !== r) {
            a.splice(r, 1);
            a.push(e);
            return a[Math.floor(Math.random() * (a.length - 1))];
        }
        return a[Math.floor(Math.random() * a.length)];
    };
    var DianZanStyleTrait_1;
    DianZanStyleTrait.traitKey = "DianZanStyle";
    DianZanStyleTrait.DEFAULT_STYLE_DATA = {
        gameCount: 0,
        currentGameStyleIndex: 0,
        lastPlayedStyleIndex: 0
    };
    DianZanStyleTrait = DianZanStyleTrait_1 = __decorate([
        mj.trait,
        mj.class("DianZanStyleTrait")
    ], DianZanStyleTrait);
    return DianZanStyleTrait;
}(Trait_1.default));
exports.default = DianZanStyleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW5aYW5TdHlsZS9TY3JpcHRzL0RpYW5aYW5TdHlsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBaUY7QUFDakYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSxJQUFLLENBR0o7QUFIRCxXQUFLLENBQUM7SUFDSixxQ0FBYyxDQUFBO0lBQ2QscURBQXNCLENBQUE7QUFDeEIsQ0FBQyxFQUhJLENBQUMsS0FBRCxDQUFDLFFBR0w7QUFHRDtJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQW1NQztRQWxNQyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWlNbkIsQ0FBQzswQkFuTW9CLGlCQUFpQjtJQVNwQyxzQkFBSSx5Q0FBVTthQUFkO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RGLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQVU7YUFBZDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDakcsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBYzthQUFsQjtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksS0FB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QUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtTQUN4QixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNaLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOztJQS9MTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQUMxQixvQ0FBa0IsR0FBRztRQUMxQixTQUFTLEVBQUUsQ0FBQztRQUNaLHFCQUFxQixFQUFFLENBQUM7UUFDeEIsb0JBQW9CLEVBQUUsQ0FBQztLQUN4QixDQUFDO0lBUmlCLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FtTXJDO0lBQUQsd0JBQUM7Q0FuTUQsQUFtTUMsQ0FuTThDLGVBQUssR0FtTW5EO2tCQW5Nb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9Ob3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmVudW0gbCB7XG4gIFJhbmRvbURpZmYgPSAxLFxuICBJbnRlcnZhbFJhbmRvbURpZmYgPSAyLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEaWFuWmFuU3R5bGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhblphblN0eWxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX2dhbWVUeXBlID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEaWFuWmFuU3R5bGVcIjtcbiAgc3RhdGljIERFRkFVTFRfU1RZTEVfREFUQSA9IHtcbiAgICBnYW1lQ291bnQ6IDAsXG4gICAgY3VycmVudEdhbWVTdHlsZUluZGV4OiAwLFxuICAgIGxhc3RQbGF5ZWRTdHlsZUluZGV4OiAwXG4gIH07XG4gIGdldCBzdHlsZUNvdW50KCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zdHlsZUNvdW50KSB8fCA1O1xuICB9XG4gIGdldCBzd2l0Y2hNb2RlKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zd2l0Y2hNb2RlKSB8fCBsLlJhbmRvbURpZmY7XG4gIH1cbiAgZ2V0IHN3aXRjaEludGVydmFsKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zd2l0Y2hJbnRlcnZhbCkgfHwgNTtcbiAgfVxuICBnZXQgYW5pbVByZWZpeCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYW5pbVByZWZpeCkgfHwgXCJpbl9cIjtcbiAgfVxuICBnZXQgYnVuZGxlTmFtZSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3BpbmVCdW5kbGUpIHx8IFwibF9kaWFuWmFuU3R5bGVcIjtcbiAgfVxuICBnZXQgc3BpbmVQYXRoKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zcGluZVBhdGgpIHx8IFwic3BpbmUvZGlhbnphbl9zdHlsZXNcIjtcbiAgfVxuICBnZXQgaXNNZXJnZUdhbWVUeXBlKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAhIShudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzTWVyZ2VHYW1lVHlwZSk7XG4gIH1cbiAgZ2V0IGdhbWVUeXBlcygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2FtZVR5cGVzKSB8fCBbXTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNBY3RpdmVGb3JDdXJyZW50TW9kZSgpIHtcbiAgICBpZiAoMSA9PT0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50TGV2ZWxJZCgpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVUeXBlcztcbiAgICByZXR1cm4gIXQgfHwgMCA9PT0gdC5sZW5ndGggfHwgdC5pbmNsdWRlcyhTdHJpbmcodGhpcy5fZ2FtZVR5cGUpKTtcbiAgfVxuICBnZXREYXRhS2V5KCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiB0aGlzLmlzTWVyZ2VHYW1lVHlwZSA/IFwiYWxsXCIgOiBTdHJpbmcobnVsbCAhPT0gKHQgPSB0aGlzLl9nYW1lVHlwZSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IFwiYWxsXCIpO1xuICB9XG4gIGdldFN0eWxlRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLm1vZGVEYXRhKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YSA9IHt9O1xuICAgICAgdGhpcy5sb2NhbERhdGEubW9kZURhdGEgPSB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YTtcbiAgICB9XG4gICAgdmFyIHQgPSB0aGlzLmdldERhdGFLZXkoKTtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLm1vZGVEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YVt0XSA9IE9iamVjdC5hc3NpZ24oe30sIERpYW5aYW5TdHlsZVRyYWl0LkRFRkFVTFRfU1RZTEVfREFUQSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YSA9IHRoaXMubG9jYWxEYXRhLm1vZGVEYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubW9kZURhdGFbdF07XG4gIH1cbiAgc2F2ZVN0eWxlRGF0YSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldERhdGFLZXkoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YVtlXSA9IHQ7XG4gICAgdGhpcy5sb2NhbERhdGEubW9kZURhdGEgPSB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YTtcbiAgfVxuICBnZXRMYXN0R2FtZUtleSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICBhID0gU3RyaW5nKG51bGwgIT09ICh0ID0gdGhpcy5fZ2FtZVR5cGUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBcInVua25vd25cIik7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IHRoaXMubG9jYWxEYXRhLmxhc3RHYW1lS2V5cykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVthXSkgfHwgXCJcIjtcbiAgfVxuICBzZXRMYXN0R2FtZUtleSh0KSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdEdhbWVLZXlzIHx8ICh0aGlzLmxvY2FsRGF0YS5sYXN0R2FtZUtleXMgPSB7fSk7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdEdhbWVLZXlzW1N0cmluZyhudWxsICE9PSAoZSA9IHRoaXMuX2dhbWVUeXBlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogXCJ1bmtub3duXCIpXSA9IHQ7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdEdhbWVLZXlzID0gdGhpcy5sb2NhbERhdGEubGFzdEdhbWVLZXlzO1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKHQsIGUpIHtcbiAgICB2YXIgYSwgciwgbiwgaTtcbiAgICB0aGlzLl9nYW1lVHlwZSA9IG51bGwgPT09IChyID0gbnVsbCA9PT0gKGEgPSB0LmlucykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5fY29udGV4dCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lVHlwZTtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZUZvckN1cnJlbnRNb2RlKCkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5nZXRTdHlsZURhdGEoKSxcbiAgICAgICAgbCA9IHRoaXMuZ2V0Q3VycmVudEdhbWVLZXkoKSxcbiAgICAgICAgcyA9IHRoaXMuZ2V0TGFzdEdhbWVLZXkoKTtcbiAgICAgIGlmICghKCFsIHx8IGwgPT09IHMpKSB7XG4gICAgICAgIG8uZ2FtZUNvdW50ICs9IDE7XG4gICAgICAgIG8uY3VycmVudEdhbWVTdHlsZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zYXZlU3R5bGVEYXRhKG8pO1xuICAgICAgICB0aGlzLnNldExhc3RHYW1lS2V5KGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkU3BpbmUobnVsbCA9PT0gKGkgPSBudWxsID09PSAobiA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2FtZUN0cik7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBnZXRDdXJyZW50R2FtZUtleSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmIChudWxsICE9IHRoaXMuX2dhbWVUeXBlICYmIGEpIHtcbiAgICAgICAgdmFyIHIgPSBhLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLl9nYW1lVHlwZSk7XG4gICAgICAgIHJldHVybiAoKG51bGwgPT09ICh0ID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5nZXRMZXZlbElkKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwocikpIHx8IDApICsgXCJfXCIgKyAoKG51bGwgPT09IChlID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5nZXRSZXBsYXlDb3VudCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKHIpKSB8fCAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7fVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGxvYWRTcGluZSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5sb2FkUmVzKSB7XG4gICAgICB0aGlzLl9jdXJyU2tEYXRhID0gbnVsbDtcbiAgICAgIHQubG9hZFJlcyh0aGlzLnNwaW5lUGF0aCwgc3AuU2tlbGV0b25EYXRhLCB0aGlzLmJ1bmRsZU5hbWUpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGEgPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQ7XG4gICAgICAgIGUuX2N1cnJTa0RhdGEgPSBhIHx8IG51bGw7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uRGlhblphbkl0ZW1faW5pdENvbXAodCwgZSkge1xuICAgIHZhciBhO1xuICAgIGlmICh0aGlzLmlzQWN0aXZlRm9yQ3VycmVudE1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBudWxsID09PSAoYSA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLl9zcGluZUFuaW0sXG4gICAgICAgIG4gPSB0aGlzLl9jdXJyU2tEYXRhO1xuICAgICAgaWYgKG4gJiYgciAmJiByLnNrZWxldG9uRGF0YSAhPT0gbikge1xuICAgICAgICByLmNsZWFyVHJhY2tzKCk7XG4gICAgICAgIHIuc2V0VG9TZXR1cFBvc2UoKTtcbiAgICAgICAgci5za2VsZXRvbkRhdGEgPSBuO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25EaWFuWmFuQmh2X2dldEFuaU5hbWUodCwgZSkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlRm9yQ3VycmVudE1vZGUoKSkge1xuICAgICAgaWYgKHRoaXMuX2N1cnJTa0RhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRTdHlsZURhdGEoKS5sYXN0UGxheWVkU3R5bGVJbmRleDtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldE5leHRTdHlsZUluZGV4KCksXG4gICAgICAgICAgciA9IFwiXCIgKyB0aGlzLmFuaW1QcmVmaXggKyBhO1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgICAgcmV0dXJuVmFsOiByXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRGlhblphbkJodl9wbGF5QW5pKHQsIGUpIHtcbiAgICB2YXIgYTtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZUZvckN1cnJlbnRNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLl9jdXJyU2tEYXRhKSB7XG4gICAgICAgIHZhciByID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMl07XG4gICAgICAgIGlmIChyICYmIHIuc3RhcnRzV2l0aCh0aGlzLmFuaW1QcmVmaXgpKSB7XG4gICAgICAgICAgdmFyIG4gPSBwYXJzZUludChyLnN1YnN0cmluZyh0aGlzLmFuaW1QcmVmaXgubGVuZ3RoKSwgMTApO1xuICAgICAgICAgIGlmICghaXNOYU4obikpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5nZXRTdHlsZURhdGEoKTtcbiAgICAgICAgICAgIGkubGFzdFBsYXllZFN0eWxlSW5kZXg7XG4gICAgICAgICAgICBpLmxhc3RQbGF5ZWRTdHlsZUluZGV4ID0gbjtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVN0eWxlRGF0YShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldE5leHRTdHlsZUluZGV4KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRTdHlsZURhdGEoKTtcbiAgICBpZiAodGhpcy5zd2l0Y2hNb2RlID09PSBsLlJhbmRvbURpZmYpIHJldHVybiB0aGlzLnJhbmRvbVN0eWxlRXhjbHVkZUxhc3QodCk7XG4gICAgaWYgKHQuY3VycmVudEdhbWVTdHlsZUluZGV4ID4gMCkgcmV0dXJuIHQuY3VycmVudEdhbWVTdHlsZUluZGV4O1xuICAgIHZhciBlO1xuICAgIGUgPSB0LmdhbWVDb3VudCAlIHRoaXMuc3dpdGNoSW50ZXJ2YWwgPT0gMSB8fCAwID09PSB0Lmxhc3RQbGF5ZWRTdHlsZUluZGV4ID8gdGhpcy5yYW5kb21TdHlsZUV4Y2x1ZGVMYXN0KHQpIDogdC5sYXN0UGxheWVkU3R5bGVJbmRleDtcbiAgICB0LmN1cnJlbnRHYW1lU3R5bGVJbmRleCA9IGU7XG4gICAgdGhpcy5zYXZlU3R5bGVEYXRhKHQpO1xuICAgIHJldHVybiBlO1xuICB9XG4gIHJhbmRvbVN0eWxlRXhjbHVkZUxhc3QodCkge1xuICAgIHZhciBlID0gKHQgfHwgdGhpcy5nZXRTdHlsZURhdGEoKSkubGFzdFBsYXllZFN0eWxlSW5kZXggfHwgMCxcbiAgICAgIGEgPSBBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiB0aGlzLnN0eWxlQ291bnRcbiAgICAgIH0sIGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiBlICsgMTtcbiAgICAgIH0pLFxuICAgICAgciA9IGEuaW5kZXhPZihlKTtcbiAgICBpZiAoLTEgIT09IHIpIHtcbiAgICAgIGEuc3BsaWNlKHIsIDEpO1xuICAgICAgYS5wdXNoKGUpO1xuICAgICAgcmV0dXJuIGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGEubGVuZ3RoIC0gMSkpXTtcbiAgICB9XG4gICAgcmV0dXJuIGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYS5sZW5ndGgpXTtcbiAgfVxufSJdfQ==