
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_multiFlipTimer/Scripts/MultiFlipTimerTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '146b0RYTIJFSbq65HIFwVU+', 'MultiFlipTimerTrait');
// subpackages/l_multiFlipTimer/Scripts/MultiFlipTimerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var MultiFlipTimerTrait = /** @class */ (function (_super) {
    __extends(MultiFlipTimerTrait, _super);
    function MultiFlipTimerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._totalBudget = 6000;
        _this._minDisplayTime = 500;
        _this._state = {
            openedTileIds: new Set(),
            flippingTileIds: new Set(),
            tileNodeMap: new Map(),
            timer: null,
            remainingBudget: 6000,
            lastCalculateTime: 0,
            currentCardCount: 0
        };
        return _this;
    }
    MultiFlipTimerTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        var a = (null === (e = this._traitData) || void 0 === e ? void 0 : e.totalBudgetSeconds) || 6, r = (null === (i = this._traitData) || void 0 === i ? void 0 : i.minDisplayTime) || 0.5;
        this._totalBudget = 1000 * a;
        this._minDisplayTime = 1000 * r;
        this._state.remainingBudget = this._totalBudget;
        mj.EventManager.on(GameEvent_1.EGameEvent.TileNode_SelectedFinish, this.onTileSelectedFinish, this);
    };
    MultiFlipTimerTrait.prototype.onTileNodeObj_BeginSelected = function (t, e) {
        var i, a = t.ins, r = null == a ? void 0 : a.tileObject;
        if (r && r.type === TileTypeEnum_1.ETileType.RollCard) {
            var s = r.id;
            (null === (i = a) || void 0 === i ? void 0 : i.isBack) && this._state.flippingTileIds.add(s);
        }
        e();
    };
    MultiFlipTimerTrait.prototype.onTileSelectedFinish = function (t) {
        var e = null == t ? void 0 : t.tileObject;
        if (e && e.type === TileTypeEnum_1.ETileType.RollCard) {
            var i = e.id;
            if (this._state.flippingTileIds.has(i)) {
                this._state.flippingTileIds.delete(i);
                this._state.tileNodeMap.set(i, t);
                if (0 === this._state.openedTileIds.size && null === this._state.timer) {
                    this.startTimer(i);
                }
                else {
                    this.addCardAndRecalculate(i);
                }
            }
        }
    };
    MultiFlipTimerTrait.prototype.startTimer = function (t) {
        var e = this;
        this._state.openedTileIds.add(t);
        this._state.remainingBudget = this._totalBudget;
        this._state.lastCalculateTime = Date.now();
        this._state.currentCardCount = 1;
        this._state.timer = setTimeout(function () {
            e.flipBackAllCards();
        }, this._totalBudget);
    };
    MultiFlipTimerTrait.prototype.addCardAndRecalculate = function (t) {
        if (!this._state.openedTileIds.has(t)) {
            var e = Date.now(), i = (e - this._state.lastCalculateTime) * this._state.currentCardCount;
            this._state.remainingBudget -= i;
            if (this._state.remainingBudget <= 0)
                this.flipBackAllCards();
            else {
                this._state.openedTileIds.add(t);
                this._state.currentCardCount++;
                this._state.lastCalculateTime = e;
                var a = this._state.remainingBudget / this._state.currentCardCount, r = Math.max(a, this._minDisplayTime);
                this.restartTimer(r);
            }
        }
    };
    MultiFlipTimerTrait.prototype.restartTimer = function (t) {
        var e = this;
        this._state.timer && clearTimeout(this._state.timer);
        this._state.timer = setTimeout(function () {
            e.flipBackAllCards();
        }, t);
    };
    MultiFlipTimerTrait.prototype.flipBackAllCards = function () {
        var t = this, e = Array.from(this._state.openedTileIds);
        if (0 !== e.length) {
            this._state.flippingTileIds.size;
            var i = new Map(this._state.tileNodeMap);
            this.clearState();
            e.forEach(function (e) {
                t.flipBackCard(e, i);
            });
        }
        else
            this.clearState();
    };
    MultiFlipTimerTrait.prototype.flipBackCard = function (t, e) {
        var i = (e || this._state.tileNodeMap).get(t);
        if (i && cc.isValid(i.cardNode)) {
            var a = i._tileFlipStateCtl;
            a && a.playExitAni();
        }
    };
    MultiFlipTimerTrait.prototype.onRollCTNode_keepOpen = function (t, e) {
        var i = t.ins, a = null == i ? void 0 : i.tileObject;
        if (a && a.type === TileTypeEnum_1.ETileType.RollCard) {
            var r = a.id, s = this._state.openedTileIds.has(r);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: s
            });
        }
        else
            e();
    };
    MultiFlipTimerTrait.prototype.clearState = function () {
        if (this._state.timer) {
            clearTimeout(this._state.timer);
            this._state.timer = null;
        }
        this._state.openedTileIds.clear();
        this._state.tileNodeMap.clear();
        this._state.remainingBudget = this._totalBudget;
        this._state.lastCalculateTime = 0;
        this._state.currentCardCount = 0;
    };
    MultiFlipTimerTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        this.clearState();
        this._state.flippingTileIds.clear();
        e();
    };
    MultiFlipTimerTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        this.clearState();
        this._state.flippingTileIds.clear();
        e();
    };
    MultiFlipTimerTrait.traitKey = "MultiFlipTimer";
    MultiFlipTimerTrait = __decorate([
        mj.trait,
        mj.class("MultiFlipTimerTrait")
    ], MultiFlipTimerTrait);
    return MultiFlipTimerTrait;
}(Trait_1.default));
exports.default = MultiFlipTimerTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX211bHRpRmxpcFRpbWVyL1NjcmlwdHMvTXVsdGlGbGlwVGltZXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTZFO0FBQzdFLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsMkVBQTJFO0FBRzNFO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBcUlDO1FBcElDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHFCQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFlBQU0sR0FBRztZQUNQLGFBQWEsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUN4QixlQUFlLEVBQUUsSUFBSSxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFFLElBQUksR0FBRyxFQUFFO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1lBQ1gsZUFBZSxFQUFFLElBQUk7WUFDckIsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BCLENBQUM7O0lBMEhKLENBQUM7SUF4SEMsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFDM0YsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQzFGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoRCxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0QseURBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDYixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQW9CLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyx3QkFBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsd0NBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDN0IsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUFLO2dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQ2hFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUM3QixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ0QsOENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyx3QkFBUyxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHdDQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELGlEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUF4SE0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQVpoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBcUl2QztJQUFELDBCQUFDO0NBcklELEFBcUlDLENBcklnRCxlQUFLLEdBcUlyRDtrQkFySW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk11bHRpRmxpcFRpbWVyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRmxpcFRpbWVyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF90b3RhbEJ1ZGdldCA9IDYwMDA7XG4gIF9taW5EaXNwbGF5VGltZSA9IDUwMDtcbiAgX3N0YXRlID0ge1xuICAgIG9wZW5lZFRpbGVJZHM6IG5ldyBTZXQoKSxcbiAgICBmbGlwcGluZ1RpbGVJZHM6IG5ldyBTZXQoKSxcbiAgICB0aWxlTm9kZU1hcDogbmV3IE1hcCgpLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHJlbWFpbmluZ0J1ZGdldDogNjAwMCxcbiAgICBsYXN0Q2FsY3VsYXRlVGltZTogMCxcbiAgICBjdXJyZW50Q2FyZENvdW50OiAwXG4gIH07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTXVsdGlGbGlwVGltZXJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBhID0gKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnRvdGFsQnVkZ2V0U2Vjb25kcykgfHwgNixcbiAgICAgIHIgPSAobnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubWluRGlzcGxheVRpbWUpIHx8IDAuNTtcbiAgICB0aGlzLl90b3RhbEJ1ZGdldCA9IDEwMDAgKiBhO1xuICAgIHRoaXMuX21pbkRpc3BsYXlUaW1lID0gMTAwMCAqIHI7XG4gICAgdGhpcy5fc3RhdGUucmVtYWluaW5nQnVkZ2V0ID0gdGhpcy5fdG90YWxCdWRnZXQ7XG4gICAgbWouRXZlbnRNYW5hZ2VyLm9uKEVHYW1lRXZlbnQuVGlsZU5vZGVfU2VsZWN0ZWRGaW5pc2gsIHRoaXMub25UaWxlU2VsZWN0ZWRGaW5pc2gsIHRoaXMpO1xuICB9XG4gIG9uVGlsZU5vZGVPYmpfQmVnaW5TZWxlY3RlZCh0LCBlKSB7XG4gICAgdmFyIGksXG4gICAgICBhID0gdC5pbnMsXG4gICAgICByID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS50aWxlT2JqZWN0O1xuICAgIGlmIChyICYmIHIudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkKSB7XG4gICAgICB2YXIgcyA9IHIuaWQ7XG4gICAgICAobnVsbCA9PT0gKGkgPSBhKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmlzQmFjaykgJiYgdGhpcy5fc3RhdGUuZmxpcHBpbmdUaWxlSWRzLmFkZChzKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZVNlbGVjdGVkRmluaXNoKHQpIHtcbiAgICB2YXIgZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQudGlsZU9iamVjdDtcbiAgICBpZiAoZSAmJiBlLnR5cGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCkge1xuICAgICAgdmFyIGkgPSBlLmlkO1xuICAgICAgaWYgKHRoaXMuX3N0YXRlLmZsaXBwaW5nVGlsZUlkcy5oYXMoaSkpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUuZmxpcHBpbmdUaWxlSWRzLmRlbGV0ZShpKTtcbiAgICAgICAgdGhpcy5fc3RhdGUudGlsZU5vZGVNYXAuc2V0KGksIHQpO1xuICAgICAgICBpZiAoMCA9PT0gdGhpcy5fc3RhdGUub3BlbmVkVGlsZUlkcy5zaXplICYmIG51bGwgPT09IHRoaXMuX3N0YXRlLnRpbWVyKSB7XG4gICAgICAgICAgdGhpcy5zdGFydFRpbWVyKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEFuZFJlY2FsY3VsYXRlKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXJ0VGltZXIodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLl9zdGF0ZS5vcGVuZWRUaWxlSWRzLmFkZCh0KTtcbiAgICB0aGlzLl9zdGF0ZS5yZW1haW5pbmdCdWRnZXQgPSB0aGlzLl90b3RhbEJ1ZGdldDtcbiAgICB0aGlzLl9zdGF0ZS5sYXN0Q2FsY3VsYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fc3RhdGUuY3VycmVudENhcmRDb3VudCA9IDE7XG4gICAgdGhpcy5fc3RhdGUudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuZmxpcEJhY2tBbGxDYXJkcygpO1xuICAgIH0sIHRoaXMuX3RvdGFsQnVkZ2V0KTtcbiAgfVxuICBhZGRDYXJkQW5kUmVjYWxjdWxhdGUodCkge1xuICAgIGlmICghdGhpcy5fc3RhdGUub3BlbmVkVGlsZUlkcy5oYXModCkpIHtcbiAgICAgIHZhciBlID0gRGF0ZS5ub3coKSxcbiAgICAgICAgaSA9IChlIC0gdGhpcy5fc3RhdGUubGFzdENhbGN1bGF0ZVRpbWUpICogdGhpcy5fc3RhdGUuY3VycmVudENhcmRDb3VudDtcbiAgICAgIHRoaXMuX3N0YXRlLnJlbWFpbmluZ0J1ZGdldCAtPSBpO1xuICAgICAgaWYgKHRoaXMuX3N0YXRlLnJlbWFpbmluZ0J1ZGdldCA8PSAwKSB0aGlzLmZsaXBCYWNrQWxsQ2FyZHMoKTtlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUub3BlbmVkVGlsZUlkcy5hZGQodCk7XG4gICAgICAgIHRoaXMuX3N0YXRlLmN1cnJlbnRDYXJkQ291bnQrKztcbiAgICAgICAgdGhpcy5fc3RhdGUubGFzdENhbGN1bGF0ZVRpbWUgPSBlO1xuICAgICAgICB2YXIgYSA9IHRoaXMuX3N0YXRlLnJlbWFpbmluZ0J1ZGdldCAvIHRoaXMuX3N0YXRlLmN1cnJlbnRDYXJkQ291bnQsXG4gICAgICAgICAgciA9IE1hdGgubWF4KGEsIHRoaXMuX21pbkRpc3BsYXlUaW1lKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGltZXIocik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlc3RhcnRUaW1lcih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuX3N0YXRlLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLl9zdGF0ZS50aW1lcik7XG4gICAgdGhpcy5fc3RhdGUudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuZmxpcEJhY2tBbGxDYXJkcygpO1xuICAgIH0sIHQpO1xuICB9XG4gIGZsaXBCYWNrQWxsQ2FyZHMoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IEFycmF5LmZyb20odGhpcy5fc3RhdGUub3BlbmVkVGlsZUlkcyk7XG4gICAgaWYgKDAgIT09IGUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5mbGlwcGluZ1RpbGVJZHMuc2l6ZTtcbiAgICAgIHZhciBpID0gbmV3IE1hcCh0aGlzLl9zdGF0ZS50aWxlTm9kZU1hcCk7XG4gICAgICB0aGlzLmNsZWFyU3RhdGUoKTtcbiAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB0LmZsaXBCYWNrQ2FyZChlLCBpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0aGlzLmNsZWFyU3RhdGUoKTtcbiAgfVxuICBmbGlwQmFja0NhcmQodCwgZSkge1xuICAgIHZhciBpID0gKGUgfHwgdGhpcy5fc3RhdGUudGlsZU5vZGVNYXApLmdldCh0KTtcbiAgICBpZiAoaSAmJiBjYy5pc1ZhbGlkKGkuY2FyZE5vZGUpKSB7XG4gICAgICB2YXIgYSA9IGkuX3RpbGVGbGlwU3RhdGVDdGw7XG4gICAgICBhICYmIGEucGxheUV4aXRBbmkoKTtcbiAgICB9XG4gIH1cbiAgb25Sb2xsQ1ROb2RlX2tlZXBPcGVuKHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgYSA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkudGlsZU9iamVjdDtcbiAgICBpZiAoYSAmJiBhLnR5cGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCkge1xuICAgICAgdmFyIHIgPSBhLmlkLFxuICAgICAgICBzID0gdGhpcy5fc3RhdGUub3BlbmVkVGlsZUlkcy5oYXMocik7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgY2xlYXJTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUudGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdGF0ZS50aW1lcik7XG4gICAgICB0aGlzLl9zdGF0ZS50aW1lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlLm9wZW5lZFRpbGVJZHMuY2xlYXIoKTtcbiAgICB0aGlzLl9zdGF0ZS50aWxlTm9kZU1hcC5jbGVhcigpO1xuICAgIHRoaXMuX3N0YXRlLnJlbWFpbmluZ0J1ZGdldCA9IHRoaXMuX3RvdGFsQnVkZ2V0O1xuICAgIHRoaXMuX3N0YXRlLmxhc3RDYWxjdWxhdGVUaW1lID0gMDtcbiAgICB0aGlzLl9zdGF0ZS5jdXJyZW50Q2FyZENvdW50ID0gMDtcbiAgfVxuICBvbklwdFNldEx2X25ld0dDb21wKHQsIGUpIHtcbiAgICB0aGlzLmNsZWFyU3RhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5mbGlwcGluZ1RpbGVJZHMuY2xlYXIoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXModCwgZSkge1xuICAgIHRoaXMuY2xlYXJTdGF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLmZsaXBwaW5nVGlsZUlkcy5jbGVhcigpO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==