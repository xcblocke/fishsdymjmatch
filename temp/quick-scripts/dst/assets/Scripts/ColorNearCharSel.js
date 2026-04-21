
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ColorNearCharSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7126rzrtZJwqU+072yy1P8', 'ColorNearCharSel');
// Scripts/ColorNearCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorNearCharSel = void 0;
var ICharSelection_1 = require("./ICharSelection");
var ColorNearCharSel = /** @class */ (function () {
    function ColorNearCharSel() {
    }
    ColorNearCharSel.prototype.selectCharacterPair = function (e, t, o, r) {
        var a, l, s = new Set(r.recentCharsHistory.slice(-10)), c = [];
        try {
            for (var u = __values(o), p = u.next(); !p.done; p = u.next()) {
                var f = p.value, d = s.has(f[0].resId);
                c.push(d ? 10 : 1);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (l = u.return) && l.call(u);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var h = ICharSelection_1.weightedRandomSelect(c), y = o[h];
        s.has(y[0].resId);
        return h;
    };
    return ColorNearCharSel;
}());
exports.ColorNearCharSel = ColorNearCharSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbG9yTmVhckNoYXJTZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBd0Q7QUFDeEQ7SUFBQTtJQTRCQSxDQUFDO0lBM0JDLDhDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzVDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxxQ0FBb0IsQ0FBQyxDQUFDLENBQUMsRUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWlnaHRlZFJhbmRvbVNlbGVjdCB9IGZyb20gJy4vSUNoYXJTZWxlY3Rpb24nO1xuZXhwb3J0IGNsYXNzIENvbG9yTmVhckNoYXJTZWwge1xuICBzZWxlY3RDaGFyYWN0ZXJQYWlyKGUsIHQsIG8sIHIpIHtcbiAgICB2YXIgYSxcbiAgICAgIGwsXG4gICAgICBzID0gbmV3IFNldChyLnJlY2VudENoYXJzSGlzdG9yeS5zbGljZSgtMTApKSxcbiAgICAgIGMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKG8pLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IHAudmFsdWUsXG4gICAgICAgICAgZCA9IHMuaGFzKGZbMF0ucmVzSWQpO1xuICAgICAgICBjLnB1c2goZCA/IDEwIDogMSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobCA9IHUucmV0dXJuKSAmJiBsLmNhbGwodSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGggPSB3ZWlnaHRlZFJhbmRvbVNlbGVjdChjKSxcbiAgICAgIHkgPSBvW2hdO1xuICAgIHMuaGFzKHlbMF0ucmVzSWQpO1xuICAgIHJldHVybiBoO1xuICB9XG59Il19