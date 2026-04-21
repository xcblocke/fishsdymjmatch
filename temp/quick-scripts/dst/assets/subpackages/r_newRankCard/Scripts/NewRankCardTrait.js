
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_newRankCard/Scripts/NewRankCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f619h6mQNNkpnzUaIMpyuc', 'NewRankCardTrait');
// subpackages/r_newRankCard/Scripts/NewRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var n;
(function (n) {
    n[n["FIRST"] = 1] = "FIRST";
    n[n["SECOND"] = 2] = "SECOND";
    n[n["THIRD"] = 3] = "THIRD";
    n[n["FOURTH"] = 4] = "FOURTH";
    n[n["FIFTH"] = 5] = "FIFTH";
    n[n["SIXTH"] = 6] = "SIXTH";
})(n || (n = {}));
var s = function s(e) {
    return null != e && ("string" != typeof e || 0 != e.length);
};
var NewRankCardTrait = /** @class */ (function (_super) {
    __extends(NewRankCardTrait, _super);
    function NewRankCardTrait() {
        var _this = _super.call(this) || this;
        _this._solutionType = n.SECOND;
        _this.localData.periodTimesArray = s(_this.localData.periodTimesArray) ? _this.localData.periodTimesArray : [0, 0, 0, 0, 0];
        return _this;
    }
    NewRankCardTrait_1 = NewRankCardTrait;
    Object.defineProperty(NewRankCardTrait.prototype, "solutionType", {
        get: function () {
            return null == this._traitData.solutionType ? n.SECOND : this._traitData.solutionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewRankCardTrait.prototype, "replaceCardTimes", {
        get: function () {
            return null == this._traitData.replaceCardTimes ? 2 : this._traitData.replaceCardTimes;
        },
        enumerable: false,
        configurable: true
    });
    NewRankCardTrait.prototype.onRankModel_addCount = function (e, t) {
        t();
        var r = mj.getClassByName("RankModel");
        if (r) {
            var a = r.getInstance().getCurBoardData();
            if (a && !(a.Period > 5)) {
                var o = a.Period - 1;
                this.localData.periodTimesArray[o]++;
                this.localData.periodTimesArray = this.localData.periodTimesArray;
            }
        }
    };
    NewRankCardTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        var a = e.args[0], o = mj.getClassByName("RankModel");
        if (o) {
            var i = o.getInstance().getCurBoardData();
            if (i && i.CollectThing == a) {
                if (i.Period > 5)
                    t();
                else {
                    var l = true, s = i.Period, u = this.localData.periodTimesArray[s - 1];
                    n.FIRST != this.solutionType && u < this.replaceCardTimes && (l = false);
                    if (l) {
                        n.FIRST, this.solutionType;
                        t({
                            returnType: TraitCallbackReturnType.return,
                            isBreak: true,
                            returnVal: {
                                path: "res/" + a,
                                bundleName: NewRankCardTrait_1.BUNDLE_NAME,
                                fromAtlas: false
                            }
                        });
                    }
                    else
                        t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    var NewRankCardTrait_1;
    NewRankCardTrait.traitKey = "NewRankCard";
    NewRankCardTrait.BUNDLE_NAME = "r_newRankCard";
    NewRankCardTrait = NewRankCardTrait_1 = __decorate([
        mj.trait,
        mj.class("NewRankCardTrait")
    ], NewRankCardTrait);
    return NewRankCardTrait;
}(Trait_1.default));
exports.default = NewRankCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX25ld1JhbmtDYXJkL1NjcmlwdHMvTmV3UmFua0NhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELElBQUssQ0FPSjtBQVBELFdBQUssQ0FBQztJQUNKLDJCQUFTLENBQUE7SUFDVCw2QkFBVSxDQUFBO0lBQ1YsMkJBQVMsQ0FBQTtJQUNULDZCQUFVLENBQUE7SUFDViwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtBQUNYLENBQUMsRUFQSSxDQUFDLEtBQUQsQ0FBQyxRQU9MO0FBQ0QsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFHRjtJQUE4QyxvQ0FBSztJQVVqRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQVpELG1CQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQVd2QixLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQUMzSCxDQUFDO3lCQWJrQixnQkFBZ0I7SUFJbkMsc0JBQUksMENBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5lbnVtIG4ge1xuICBGSVJTVCA9IDEsXG4gIFNFQ09ORCA9IDIsXG4gIFRISVJEID0gMyxcbiAgRk9VUlRIID0gNCxcbiAgRklGVEggPSA1LFxuICBTSVhUSCA9IDYsXG59XG52YXIgcyA9IGZ1bmN0aW9uIHMoZSkge1xuICByZXR1cm4gbnVsbCAhPSBlICYmIChcInN0cmluZ1wiICE9IHR5cGVvZiBlIHx8IDAgIT0gZS5sZW5ndGgpO1xufTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTmV3UmFua0NhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UmFua0NhcmRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3NvbHV0aW9uVHlwZSA9IG4uU0VDT05EO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk5ld1JhbmtDYXJkXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwicl9uZXdSYW5rQ2FyZFwiO1xuICBnZXQgc29sdXRpb25UeXBlKCkge1xuICAgIHJldHVybiBudWxsID09IHRoaXMuX3RyYWl0RGF0YS5zb2x1dGlvblR5cGUgPyBuLlNFQ09ORCA6IHRoaXMuX3RyYWl0RGF0YS5zb2x1dGlvblR5cGU7XG4gIH1cbiAgZ2V0IHJlcGxhY2VDYXJkVGltZXMoKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gdGhpcy5fdHJhaXREYXRhLnJlcGxhY2VDYXJkVGltZXMgPyAyIDogdGhpcy5fdHJhaXREYXRhLnJlcGxhY2VDYXJkVGltZXM7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5wZXJpb2RUaW1lc0FycmF5ID0gcyh0aGlzLmxvY2FsRGF0YS5wZXJpb2RUaW1lc0FycmF5KSA/IHRoaXMubG9jYWxEYXRhLnBlcmlvZFRpbWVzQXJyYXkgOiBbMCwgMCwgMCwgMCwgMF07XG4gIH1cbiAgb25SYW5rTW9kZWxfYWRkQ291bnQoZSwgdCkge1xuICAgIHQoKTtcbiAgICB2YXIgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgYSA9IHIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJCb2FyZERhdGEoKTtcbiAgICAgIGlmIChhICYmICEoYS5QZXJpb2QgPiA1KSkge1xuICAgICAgICB2YXIgbyA9IGEuUGVyaW9kIC0gMTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucGVyaW9kVGltZXNBcnJheVtvXSsrO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5wZXJpb2RUaW1lc0FycmF5ID0gdGhpcy5sb2NhbERhdGEucGVyaW9kVGltZXNBcnJheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUoZSwgdCkge1xuICAgIHZhciBhID0gZS5hcmdzWzBdLFxuICAgICAgbyA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgaSA9IG8uZ2V0SW5zdGFuY2UoKS5nZXRDdXJCb2FyZERhdGEoKTtcbiAgICAgIGlmIChpICYmIGkuQ29sbGVjdFRoaW5nID09IGEpIHtcbiAgICAgICAgaWYgKGkuUGVyaW9kID4gNSkgdCgpO2Vsc2Uge1xuICAgICAgICAgIHZhciBsID0gdHJ1ZSxcbiAgICAgICAgICAgIHMgPSBpLlBlcmlvZCxcbiAgICAgICAgICAgIHUgPSB0aGlzLmxvY2FsRGF0YS5wZXJpb2RUaW1lc0FycmF5W3MgLSAxXTtcbiAgICAgICAgICBuLkZJUlNUICE9IHRoaXMuc29sdXRpb25UeXBlICYmIHUgPCB0aGlzLnJlcGxhY2VDYXJkVGltZXMgJiYgKGwgPSBmYWxzZSk7XG4gICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgIG4uRklSU1QsIHRoaXMuc29sdXRpb25UeXBlO1xuICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCJyZXMvXCIgKyBhLFxuICAgICAgICAgICAgICAgIGJ1bmRsZU5hbWU6IE5ld1JhbmtDYXJkVHJhaXQuQlVORExFX05BTUUsXG4gICAgICAgICAgICAgICAgZnJvbUF0bGFzOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=