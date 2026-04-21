
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTile2DuoxiaoAuto.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f624bs9O4VH+4vx2zlXFM7a', 'InputTile2DuoxiaoAuto');
// Scripts/InputTile2DuoxiaoAuto.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2DuoxiaoAuto = /** @class */ (function (_super) {
    __extends(InputTile2DuoxiaoAuto, _super);
    function InputTile2DuoxiaoAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2DuoxiaoAuto.prototype.excute = function (e) {
        if (!(this.gameContext.getDuoxiaoClearCount() <= 0)) {
            var t = this.gameContext.getTileMapObject();
            t.updateCanMatchTiles();
            var o = t.getCanMatchTilesHint();
            if (o.length) {
                this.gameContext.duoxiaoModifier.decreaseDuoxiaoClearCount();
                var n = __read(this.findMatchTile(o), 2), i = n[0], a = n[1];
                i && a && ClearHelper_1.default.runClear(this.gameContext, e, this, {
                    tileIds: [i, a]
                });
            }
            else
                this.gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
        }
    };
    InputTile2DuoxiaoAuto.prototype.findMatchTile = function (e) {
        var t, o, n, i, r, l;
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                if (u.length >= 2 && !u[0].getIsInSlotBar() && !u[1].getIsInSlotBar())
                    return [null === (n = u[0]) || void 0 === n ? void 0 : n.id, null === (i = u[1]) || void 0 === i ? void 0 : i.id];
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var p = e[0];
        return [null === (r = p[0]) || void 0 === r ? void 0 : r.id, null === (l = p[1]) || void 0 === l ? void 0 : l.id];
    };
    return InputTile2DuoxiaoAuto;
}(InputBase_1.InputBase));
exports.default = InputTile2DuoxiaoAuto;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VGlsZTJEdW94aWFvQXV0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELDZDQUF3QztBQUN4QztJQUFtRCx5Q0FBUztJQUE1RDs7SUFzQ0EsQ0FBQztJQXJDQyxzQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDNUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2hCLENBQUMsQ0FBQzthQUNKOztnQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUNELDZDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7b0JBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUw7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFDSCw0QkFBQztBQUFELENBdENBLEFBc0NDLENBdENrRCxxQkFBUyxHQXNDM0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IENsZWFySGVscGVyIGZyb20gJy4vQ2xlYXJIZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMkR1b3hpYW9BdXRvIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICBpZiAoISh0aGlzLmdhbWVDb250ZXh0LmdldER1b3hpYW9DbGVhckNvdW50KCkgPD0gMCkpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgICB0LnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICAgIHZhciBvID0gdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgICAgaWYgKG8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZHVveGlhb01vZGlmaWVyLmRlY3JlYXNlRHVveGlhb0NsZWFyQ291bnQoKTtcbiAgICAgICAgdmFyIG4gPSBfX3JlYWQodGhpcy5maW5kTWF0Y2hUaWxlKG8pLCAyKSxcbiAgICAgICAgICBpID0gblswXSxcbiAgICAgICAgICBhID0gblsxXTtcbiAgICAgICAgaSAmJiBhICYmIENsZWFySGVscGVyLnJ1bkNsZWFyKHRoaXMuZ2FtZUNvbnRleHQsIGUsIHRoaXMsIHtcbiAgICAgICAgICB0aWxlSWRzOiBbaSwgYV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdGhpcy5nYW1lQ29udGV4dC5kdW94aWFvTW9kaWZpZXIucmVzZXREdW94aWFvQ2xlYXJDb3VudCgpO1xuICAgIH1cbiAgfVxuICBmaW5kTWF0Y2hUaWxlKGUpIHtcbiAgICB2YXIgdCwgbywgbiwgaSwgciwgbDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGUpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGMudmFsdWU7XG4gICAgICAgIGlmICh1Lmxlbmd0aCA+PSAyICYmICF1WzBdLmdldElzSW5TbG90QmFyKCkgJiYgIXVbMV0uZ2V0SXNJblNsb3RCYXIoKSkgcmV0dXJuIFtudWxsID09PSAobiA9IHVbMF0pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uaWQsIG51bGwgPT09IChpID0gdVsxXSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5pZF07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHAgPSBlWzBdO1xuICAgIHJldHVybiBbbnVsbCA9PT0gKHIgPSBwWzBdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmlkLCBudWxsID09PSAobCA9IHBbMV0pIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuaWRdO1xuICB9XG59Il19