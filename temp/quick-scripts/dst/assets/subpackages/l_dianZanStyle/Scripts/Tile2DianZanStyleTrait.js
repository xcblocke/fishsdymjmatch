
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianZanStyle/Scripts/Tile2DianZanStyleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3b74/wOB9ENavLLsebK6/z', 'Tile2DianZanStyleTrait');
// subpackages/l_dianZanStyle/Scripts/Tile2DianZanStyleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DianZanStyleTrait = /** @class */ (function (_super) {
    __extends(Tile2DianZanStyleTrait, _super);
    function Tile2DianZanStyleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "styleCount", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.styleCount) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "switchInterval", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchInterval) || 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "animPrefix", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.animPrefix) || "in_";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStyle";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "spinePath", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spinePath) || "spine/dianzan_styles";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "scale", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.scale) || 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "gameTypes", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2DianZanStyleTrait.prototype, "levelLimit", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) || 1;
        },
        enumerable: false,
        configurable: true
    });
    Tile2DianZanStyleTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    Tile2DianZanStyleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DianZanStyleTrait.prototype.isMatchGameType = function (t) {
        var e = UserModel_1.default.getInstance().getCurrentGameData();
        if (1 === ((null == e ? void 0 : e.getLevelId()) || 0))
            return false;
        var a = this.gameTypes;
        return !a || 0 === a.length || a.includes(t);
    };
    Tile2DianZanStyleTrait.prototype.getStyleData = function () {
        this.localData.modeData || (this.localData.modeData = {});
        var t = this.getCurrentGameType();
        if (!this.localData.modeData[t]) {
            this.localData.modeData[t] = {
                gameCount: 0,
                currentGameStyleIndex: 0,
                lastPlayedStyleIndex: 0
            };
            this.localData.modeData = this.localData.modeData;
        }
        return this.localData.modeData[t];
    };
    Tile2DianZanStyleTrait.prototype.saveStyleData = function (t) {
        var e = this.getCurrentGameType();
        this.localData.modeData[e] = t;
        this.localData.modeData = this.localData.modeData;
    };
    Tile2DianZanStyleTrait.prototype.onT2DianZCheck_isDianZan = function (t, e) {
        var a, r = (null === (a = UserModel_1.default.getInstance().getCurrentGameData()) || void 0 === a ? void 0 : a.getLevelId()) || 0;
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r > this.levelLimit
        });
    };
    Tile2DianZanStyleTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.isMatchGameType(this.getCurrentGameType()) && this.increaseGameCount();
        e();
    };
    Tile2DianZanStyleTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.isMatchGameType(this.getCurrentGameType()) && this.increaseGameCount();
        e();
    };
    Tile2DianZanStyleTrait.prototype.increaseGameCount = function () {
        var t = this.getStyleData();
        t.gameCount += 1;
        if (t.currentGameStyleIndex > 0) {
            t.lastPlayedStyleIndex = t.currentGameStyleIndex;
            t.currentGameStyleIndex = 0;
        }
        this.saveStyleData(t);
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_spUrl = function (t, e) {
        var a;
        if (this.isMatchGameType(this.getCurrentGameType())) {
            null === (a = t.args) || void 0 === a || a[0];
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.spinePath
            });
        }
        else
            e();
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_spBundle = function (t, e) {
        var a;
        if (this.isMatchGameType(this.getCurrentGameType())) {
            null === (a = t.args) || void 0 === a || a[0];
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.bundleName
            });
        }
        else
            e();
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_scale = function (t, e) {
        if (this.isMatchGameType(this.getCurrentGameType())) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.scale
            });
        }
        else {
            e();
        }
    };
    Tile2DianZanStyleTrait.prototype.onTile2DZanBhv_animName = function (t, e) {
        var a;
        if (this.isMatchGameType(this.getCurrentGameType())) {
            null === (a = t.args) || void 0 === a || a[0], this.getStyleData().lastPlayedStyleIndex;
            var r = this.getNextStyleIndex(), n = "" + this.animPrefix + r;
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: n
            });
        }
        else
            e();
    };
    Tile2DianZanStyleTrait.prototype.getNextStyleIndex = function () {
        var t, e = this.getStyleData();
        if (0 !== e.currentGameStyleIndex)
            return e.currentGameStyleIndex;
        t = e.gameCount % this.switchInterval == 1 || 0 === e.lastPlayedStyleIndex ? this.randomStyleExcludeLast(e) : e.lastPlayedStyleIndex;
        e.currentGameStyleIndex = t;
        this.saveStyleData(e);
        return t;
    };
    Tile2DianZanStyleTrait.prototype.randomStyleExcludeLast = function (t) {
        var e = (t || this.getStyleData()).lastPlayedStyleIndex || 0, a = Array.from({
            length: this.styleCount
        }, function (t, e) {
            return e + 1;
        }), r = a.indexOf(e);
        -1 !== r && a.splice(r, 1);
        return a[Math.floor(Math.random() * a.length)];
    };
    Tile2DianZanStyleTrait.traitKey = "Tile2DianZanStyle";
    Tile2DianZanStyleTrait = __decorate([
        mj.trait,
        mj.class("Tile2DianZanStyleTrait")
    ], Tile2DianZanStyleTrait);
    return Tile2DianZanStyleTrait;
}(Trait_1.default));
exports.default = Tile2DianZanStyleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW5aYW5TdHlsZS9TY3JpcHRzL1RpbGUyRGlhblphblN0eWxlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBb0QsMENBQUs7SUFBekQ7O0lBNEpBLENBQUM7SUExSkMsc0JBQUksOENBQVU7YUFBZDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGtEQUFjO2FBQWxCO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFGLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQVU7YUFBZDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUMxRixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDhDQUFVO2FBQWQ7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztRQUN0RyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZDQUFTO2FBQWI7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxzQkFBc0IsQ0FBQztRQUMxRyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFLO2FBQVQ7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakYsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBUzthQUFiO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RGLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQVU7YUFBZDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RixDQUFDOzs7T0FBQTtJQUNELG1EQUFrQixHQUFsQjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFDRCx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0RBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELDZDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDM0IsU0FBUyxFQUFFLENBQUM7Z0JBQ1oscUJBQXFCLEVBQUUsQ0FBQztnQkFDeEIsb0JBQW9CLEVBQUUsQ0FBQzthQUN4QixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCw4Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNwRCxDQUFDO0lBQ0QseURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkgsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1REFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUUsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLHFCQUFxQixHQUFHLENBQUMsRUFBRTtZQUMvQixDQUFDLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1lBQ2pELENBQUMsQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRTtZQUNuRCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsd0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzNCLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHFEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRTtZQUNuRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSzthQUN0QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx3REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRTtZQUNuRCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ3hGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUI7WUFBRSxPQUFPLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztRQUNySSxDQUFDLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxFQUMxRCxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtTQUN4QixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQTFKTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0E0SjFDO0lBQUQsNkJBQUM7Q0E1SkQsQUE0SkMsQ0E1Sm1ELGVBQUssR0E0SnhEO2tCQTVKb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyRGlhblphblN0eWxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRGlhblphblN0eWxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJEaWFuWmFuU3R5bGVcIjtcbiAgZ2V0IHN0eWxlQ291bnQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnN0eWxlQ291bnQpIHx8IDU7XG4gIH1cbiAgZ2V0IHN3aXRjaEludGVydmFsKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zd2l0Y2hJbnRlcnZhbCkgfHwgNTtcbiAgfVxuICBnZXQgYW5pbVByZWZpeCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYW5pbVByZWZpeCkgfHwgXCJpbl9cIjtcbiAgfVxuICBnZXQgYnVuZGxlTmFtZSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3BpbmVCdW5kbGUpIHx8IFwibF9kaWFuWmFuU3R5bGVcIjtcbiAgfVxuICBnZXQgc3BpbmVQYXRoKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zcGluZVBhdGgpIHx8IFwic3BpbmUvZGlhbnphbl9zdHlsZXNcIjtcbiAgfVxuICBnZXQgc2NhbGUoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnNjYWxlKSB8fCAxO1xuICB9XG4gIGdldCBnYW1lVHlwZXMoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdhbWVUeXBlcykgfHwgW107XG4gIH1cbiAgZ2V0IGxldmVsTGltaXQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmxldmVsTGltaXQpIHx8IDE7XG4gIH1cbiAgZ2V0Q3VycmVudEdhbWVUeXBlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNNYXRjaEdhbWVUeXBlKHQpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpO1xuICAgIGlmICgxID09PSAoKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0TGV2ZWxJZCgpKSB8fCAwKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBhID0gdGhpcy5nYW1lVHlwZXM7XG4gICAgcmV0dXJuICFhIHx8IDAgPT09IGEubGVuZ3RoIHx8IGEuaW5jbHVkZXModCk7XG4gIH1cbiAgZ2V0U3R5bGVEYXRhKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLm1vZGVEYXRhIHx8ICh0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YSA9IHt9KTtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YVt0XSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEubW9kZURhdGFbdF0gPSB7XG4gICAgICAgIGdhbWVDb3VudDogMCxcbiAgICAgICAgY3VycmVudEdhbWVTdHlsZUluZGV4OiAwLFxuICAgICAgICBsYXN0UGxheWVkU3R5bGVJbmRleDogMFxuICAgICAgfTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm1vZGVEYXRhID0gdGhpcy5sb2NhbERhdGEubW9kZURhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5tb2RlRGF0YVt0XTtcbiAgfVxuICBzYXZlU3R5bGVEYXRhKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgdGhpcy5sb2NhbERhdGEubW9kZURhdGFbZV0gPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLm1vZGVEYXRhID0gdGhpcy5sb2NhbERhdGEubW9kZURhdGE7XG4gIH1cbiAgb25UMkRpYW5aQ2hlY2tfaXNEaWFuWmFuKHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIgPSAobnVsbCA9PT0gKGEgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiByID4gdGhpcy5sZXZlbExpbWl0XG4gICAgfSk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdGhpcy5pc01hdGNoR2FtZVR5cGUodGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSkgJiYgdGhpcy5pbmNyZWFzZUdhbWVDb3VudCgpO1xuICAgIGUoKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25SZXBsYXlHYW1lKHQsIGUpIHtcbiAgICB0aGlzLmlzTWF0Y2hHYW1lVHlwZSh0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpKSAmJiB0aGlzLmluY3JlYXNlR2FtZUNvdW50KCk7XG4gICAgZSgpO1xuICB9XG4gIGluY3JlYXNlR2FtZUNvdW50KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRTdHlsZURhdGEoKTtcbiAgICB0LmdhbWVDb3VudCArPSAxO1xuICAgIGlmICh0LmN1cnJlbnRHYW1lU3R5bGVJbmRleCA+IDApIHtcbiAgICAgIHQubGFzdFBsYXllZFN0eWxlSW5kZXggPSB0LmN1cnJlbnRHYW1lU3R5bGVJbmRleDtcbiAgICAgIHQuY3VycmVudEdhbWVTdHlsZUluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5zYXZlU3R5bGVEYXRhKHQpO1xuICB9XG4gIG9uVGlsZTJEWmFuQmh2X3NwVXJsKHQsIGUpIHtcbiAgICB2YXIgYTtcbiAgICBpZiAodGhpcy5pc01hdGNoR2FtZVR5cGUodGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSkpIHtcbiAgICAgIG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgfHwgYVswXTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5zcGluZVBhdGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25UaWxlMkRaYW5CaHZfc3BCdW5kbGUodCwgZSkge1xuICAgIHZhciBhO1xuICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZSh0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpKSkge1xuICAgICAgbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSB8fCBhWzBdO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmJ1bmRsZU5hbWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25UaWxlMkRaYW5CaHZfc2NhbGUodCwgZSkge1xuICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZSh0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLnNjYWxlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRpbGUyRFphbkJodl9hbmltTmFtZSh0LCBlKSB7XG4gICAgdmFyIGE7XG4gICAgaWYgKHRoaXMuaXNNYXRjaEdhbWVUeXBlKHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCkpKSB7XG4gICAgICBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhIHx8IGFbMF0sIHRoaXMuZ2V0U3R5bGVEYXRhKCkubGFzdFBsYXllZFN0eWxlSW5kZXg7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0TmV4dFN0eWxlSW5kZXgoKSxcbiAgICAgICAgbiA9IFwiXCIgKyB0aGlzLmFuaW1QcmVmaXggKyByO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldE5leHRTdHlsZUluZGV4KCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuZ2V0U3R5bGVEYXRhKCk7XG4gICAgaWYgKDAgIT09IGUuY3VycmVudEdhbWVTdHlsZUluZGV4KSByZXR1cm4gZS5jdXJyZW50R2FtZVN0eWxlSW5kZXg7XG4gICAgdCA9IGUuZ2FtZUNvdW50ICUgdGhpcy5zd2l0Y2hJbnRlcnZhbCA9PSAxIHx8IDAgPT09IGUubGFzdFBsYXllZFN0eWxlSW5kZXggPyB0aGlzLnJhbmRvbVN0eWxlRXhjbHVkZUxhc3QoZSkgOiBlLmxhc3RQbGF5ZWRTdHlsZUluZGV4O1xuICAgIGUuY3VycmVudEdhbWVTdHlsZUluZGV4ID0gdDtcbiAgICB0aGlzLnNhdmVTdHlsZURhdGEoZSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmFuZG9tU3R5bGVFeGNsdWRlTGFzdCh0KSB7XG4gICAgdmFyIGUgPSAodCB8fCB0aGlzLmdldFN0eWxlRGF0YSgpKS5sYXN0UGxheWVkU3R5bGVJbmRleCB8fCAwLFxuICAgICAgYSA9IEFycmF5LmZyb20oe1xuICAgICAgICBsZW5ndGg6IHRoaXMuc3R5bGVDb3VudFxuICAgICAgfSwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuIGUgKyAxO1xuICAgICAgfSksXG4gICAgICByID0gYS5pbmRleE9mKGUpO1xuICAgIC0xICE9PSByICYmIGEuc3BsaWNlKHIsIDEpO1xuICAgIHJldHVybiBhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGEubGVuZ3RoKV07XG4gIH1cbn0iXX0=