
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/FullComboBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f404e+RpD1O5aU3hIcQyTMn', 'FullComboBehavior');
// Scripts/base/FullComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FullComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var FullComboItem_1 = require("../items/FullComboItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var FullComboBehavior = /** @class */ (function (_super) {
    __extends(FullComboBehavior, _super);
    function FullComboBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 12000;
        return _this;
    }
    FullComboBehavior.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, o, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = this;
                        if (this.shouldSkip()) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        e = this.context.gameView.effectNode;
                        return [4 /*yield*/, FullComboItem_1.default.createUI()];
                    case 1:
                        if (!(t = _a.sent())) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        t.setParent(e);
                        t.position = cc.v3(0, 0, 0);
                        if (!(o = t.getComponent(FullComboItem_1.default))) {
                            t.destroy();
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        this.playAudio();
                        this.context.gameView.setSwallowEventNodeActive(true);
                        o.startPlayAni(t, function () {
                            n.shouldSkipAutoMerge() || n.autoMerger();
                        }, function () {
                            n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FullComboBehavior.prototype.autoMerger = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.StartAutoMerge,
            type: "fullCombo"
        });
    };
    FullComboBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.FullCombo);
    };
    FullComboBehavior.prototype.shouldSkip = function () {
        return false;
    };
    FullComboBehavior.prototype.shouldSkipAutoMerge = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("FullComboBhv_playAudio")
    ], FullComboBehavior.prototype, "playAudio", null);
    __decorate([
        mj.traitEvent("FullComboBhv_shouldSkip")
    ], FullComboBehavior.prototype, "shouldSkip", null);
    __decorate([
        mj.traitEvent("FullComboBhv_skipMerge")
    ], FullComboBehavior.prototype, "shouldSkipAutoMerge", null);
    return FullComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.FullComboBehavior = FullComboBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRnVsbENvbWJvQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0Y7QUFDcEYsMEVBQW9FO0FBQ3BFLHNFQUFxRTtBQUNyRSx3REFBbUQ7QUFDbkQseURBQXdEO0FBQ3hEO0lBQXVDLHFDQUFpQjtJQUF4RDtRQUFBLHFFQWtEQztRQWpEQyxjQUFRLEdBQUcsS0FBSyxDQUFDOztJQWlEbkIsQ0FBQztJQWhETyxpQ0FBSyxHQUFYOzs7Ozs7d0JBSUksQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDWCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs0QkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUNuQyxzQkFBTzt5QkFDUjt3QkFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO3dCQUMzQixxQkFBTSx1QkFBYSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQThCLENBQUMsRUFBRTs0QkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUNuQyxzQkFBTzt5QkFDUjt3QkFDRCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUMsRUFBRTs0QkFDeEMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDbkMsc0JBQU87eUJBQ1I7d0JBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7NEJBQ2hCLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDNUMsQ0FBQyxFQUFFOzRCQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbEMsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsc0JBQU87Ozs7S0FDUjtJQUNELHNDQUFVLEdBQVY7UUFDRSxpQ0FBZSxDQUFDLEtBQUssQ0FBQztZQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxjQUFjO1lBQ3hDLElBQUksRUFBRSxXQUFXO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtDQUFtQixHQUFuQjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQVZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztzREFHdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7dURBR3hDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO2dFQUd2QztJQUNILHdCQUFDO0NBbERELEFBa0RDLENBbERzQyxxQ0FBaUIsR0FrRHZEO0FBbERZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0sIEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IEZ1bGxDb21ib0l0ZW0gZnJvbSAnLi4vaXRlbXMvRnVsbENvbWJvSXRlbSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIEZ1bGxDb21ib0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdGltZW91dCA9IDEyMDAwO1xuICBhc3luYyBzdGFydCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2tpcCgpKSB7XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmVmZmVjdE5vZGU7XG4gICAgaWYgKCEodCA9IGF3YWl0IEZ1bGxDb21ib0l0ZW0uY3JlYXRlVUkoKSkpIHtcbiAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHQuc2V0UGFyZW50KGUpO1xuICAgIHQucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICBpZiAoIShvID0gdC5nZXRDb21wb25lbnQoRnVsbENvbWJvSXRlbSkpKSB7XG4gICAgICB0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxheUF1ZGlvKCk7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgby5zdGFydFBsYXlBbmkodCwgZnVuY3Rpb24gKCkge1xuICAgICAgbi5zaG91bGRTa2lwQXV0b01lcmdlKCkgfHwgbi5hdXRvTWVyZ2VyKCk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbi5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgYXV0b01lcmdlcigpIHtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydEF1dG9NZXJnZSxcbiAgICAgIHR5cGU6IFwiZnVsbENvbWJvXCJcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZ1bGxDb21ib0Jodl9wbGF5QXVkaW9cIilcbiAgcGxheUF1ZGlvKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkZ1bGxDb21ibyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGdWxsQ29tYm9CaHZfc2hvdWxkU2tpcFwiKVxuICBzaG91bGRTa2lwKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZ1bGxDb21ib0Jodl9za2lwTWVyZ2VcIilcbiAgc2hvdWxkU2tpcEF1dG9NZXJnZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=