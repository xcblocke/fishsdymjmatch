
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputDuoxiaoAuto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '488757ZJs5Pk4y1qj/P2g6a', 'InputDuoxiaoAuto');
// Scripts/InputDuoxiaoAuto.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputDuoxiaoAuto = /** @class */ (function (_super) {
    __extends(InputDuoxiaoAuto, _super);
    function InputDuoxiaoAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputDuoxiaoAuto.prototype.excute = function (e) {
        if (!(this.gameContext.getDuoxiaoClearCount() <= 0)) {
            var t = this.gameContext.getTileMapObject(), o = t.getCanMatchTilesHint();
            if (0 == o.length) {
                t.updateCanMatchTiles();
                o = t.getCanMatchTilesHint();
            }
            if (o.length) {
                this.gameContext.duoxiaoModifier.decreaseDuoxiaoClearCount();
                var n = __read(this.findMatchTile(o), 2), i = n[0], r = n[1];
                if (i && r) {
                    t.selcectTileId(i, true);
                    t.selcectTileId(r, true);
                    this.gameContext.clearChecker.checkCanClear2() && ClearHelper_1.default.runClear(this.gameContext, e, this);
                }
            }
            else
                this.gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
        }
    };
    InputDuoxiaoAuto.prototype.findMatchTile = function (e) {
        var t, o, n = e[0];
        return [null === (t = n[0]) || void 0 === t ? void 0 : t.id, null === (o = n[1]) || void 0 === o ? void 0 : o.id];
    };
    __decorate([
        mj.traitEvent("IptDuoxiaoAuto_findMatch")
    ], InputDuoxiaoAuto.prototype, "findMatchTile", null);
    return InputDuoxiaoAuto;
}(InputBase_1.InputBase));
exports.default = InputDuoxiaoAuto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0RHVveGlhb0F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCw2Q0FBd0M7QUFDeEM7SUFBOEMsb0NBQVM7SUFBdkQ7O0lBNkJBLENBQUM7SUE1QkMsaUNBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDVixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuRzthQUNGOztnQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBTEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3lEQU16QztJQUNILHVCQUFDO0NBN0JELEFBNkJDLENBN0I2QyxxQkFBUyxHQTZCdEQ7a0JBN0JvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IENsZWFySGVscGVyIGZyb20gJy4vQ2xlYXJIZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXREdW94aWFvQXV0byBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZShlKSB7XG4gICAgaWYgKCEodGhpcy5nYW1lQ29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpIDw9IDApKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgICBvID0gdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgICAgaWYgKDAgPT0gby5sZW5ndGgpIHtcbiAgICAgICAgdC51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgICAgIG8gPSB0LmdldENhbk1hdGNoVGlsZXNIaW50KCk7XG4gICAgICB9XG4gICAgICBpZiAoby5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5kdW94aWFvTW9kaWZpZXIuZGVjcmVhc2VEdW94aWFvQ2xlYXJDb3VudCgpO1xuICAgICAgICB2YXIgbiA9IF9fcmVhZCh0aGlzLmZpbmRNYXRjaFRpbGUobyksIDIpLFxuICAgICAgICAgIGkgPSBuWzBdLFxuICAgICAgICAgIHIgPSBuWzFdO1xuICAgICAgICBpZiAoaSAmJiByKSB7XG4gICAgICAgICAgdC5zZWxjZWN0VGlsZUlkKGksIHRydWUpO1xuICAgICAgICAgIHQuc2VsY2VjdFRpbGVJZChyLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmNsZWFyQ2hlY2tlci5jaGVja0NhbkNsZWFyMigpICYmIENsZWFySGVscGVyLnJ1bkNsZWFyKHRoaXMuZ2FtZUNvbnRleHQsIGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdGhpcy5nYW1lQ29udGV4dC5kdW94aWFvTW9kaWZpZXIucmVzZXREdW94aWFvQ2xlYXJDb3VudCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdER1b3hpYW9BdXRvX2ZpbmRNYXRjaFwiKVxuICBmaW5kTWF0Y2hUaWxlKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZVswXTtcbiAgICByZXR1cm4gW251bGwgPT09ICh0ID0gblswXSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pZCwgbnVsbCA9PT0gKG8gPSBuWzFdKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmlkXTtcbiAgfVxufSJdfQ==