
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTile2AutoMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8d43wW5TNIpZsX66+pgOp9', 'InputTile2AutoMerge');
// Scripts/InputTile2AutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2AutoMerge = /** @class */ (function (_super) {
    __extends(InputTile2AutoMerge, _super);
    function InputTile2AutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2AutoMerge.prototype.excute = function (e) {
        var t, o, n, i, a, s = this.gameContext.getTileMapObject();
        s.updateCanMatchTiles();
        var c = s.getCanMatchTilesHint(), u = null !== (a = this.gameContext.getGameData().slotBarIds) && void 0 !== a ? a : [], p = [], f = null;
        try {
            for (var d = __values(s.tileObjectMap().values()), h = d.next(); !h.done; h = d.next()) {
                var y = h.value;
                if (y.isValid && 0 === y.isCardLock() && false === y.getIsInSlotBar()) {
                    p.push(y.id);
                    !f && this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(y.id) && (f = y.id);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (o = d.return) && o.call(d);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var m = [], v = [];
        if (u.length >= 3) {
            var g = new Set();
            try {
                for (var _ = __values(u), T = _.next(); !T.done; T = _.next()) {
                    var C = T.value, b = s.getTileObjectByPosId(C);
                    (null == b ? void 0 : b.isValid) && g.add(b.cardId);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    T && !T.done && (i = _.return) && i.call(_);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            var E = s.getAllCardTiles().find(function (e) {
                return g.has(e.cardId) && !e.getIsInSlotBar();
            });
            E && (v = [E.id]);
        }
        if (0 === m.length && f) {
            m = [f];
        }
        else {
            0 === m.length && c.length > 0 && (m = c[0].slice(0, 2).map(function (e) {
                return e.id;
            }));
        }
        if (0 === m.length) {
            var S = this.gameContext.tile2HitTipsChecker.computeTile2Hint();
            if (S) {
                m = [S.clearId1, S.clearId2].filter(Boolean);
            }
            else {
                p.length > 0 && (m = [p[0]]);
            }
        }
        m.length > 0 && ClearHelper_1.default.runClear(this.gameContext, e, this, {
            tileIds: m,
            outTiles: v
        });
    };
    return InputTile2AutoMerge;
}(InputBase_1.InputBase));
exports.default = InputTile2AutoMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VGlsZTJBdXRvTWVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCw2Q0FBd0M7QUFDeEM7SUFBaUQsdUNBQVM7SUFBMUQ7O0lBOEVBLENBQUM7SUE3RUMsb0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsRUFDOUIsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3JGLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFF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QUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsRUFBRTtnQkFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7WUFDOUQsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwwQkFBQztBQUFELENBOUVBLEFBOEVDLENBOUVnRCxxQkFBUyxHQThFekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IENsZWFySGVscGVyIGZyb20gJy4vQ2xlYXJIZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMkF1dG9NZXJnZSBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgcyA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgIHMudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHZhciBjID0gcy5nZXRDYW5NYXRjaFRpbGVzSGludCgpLFxuICAgICAgdSA9IG51bGwgIT09IChhID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnNsb3RCYXJJZHMpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiBbXSxcbiAgICAgIHAgPSBbXSxcbiAgICAgIGYgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMocy50aWxlT2JqZWN0TWFwKCkudmFsdWVzKCkpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgeSA9IGgudmFsdWU7XG4gICAgICAgIGlmICh5LmlzVmFsaWQgJiYgMCA9PT0geS5pc0NhcmRMb2NrKCkgJiYgZmFsc2UgPT09IHkuZ2V0SXNJblNsb3RCYXIoKSkge1xuICAgICAgICAgIHAucHVzaCh5LmlkKTtcbiAgICAgICAgICAhZiAmJiB0aGlzLmdhbWVDb250ZXh0LnRpbGUyU2xvdEJhckNoZWNrZXIuY2hlY2tDYW5DbGVhcldpdGhUaWxlSWQoeS5pZCkgJiYgKGYgPSB5LmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBoICYmICFoLmRvbmUgJiYgKG8gPSBkLnJldHVybikgJiYgby5jYWxsKGQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBtID0gW10sXG4gICAgICB2ID0gW107XG4gICAgaWYgKHUubGVuZ3RoID49IDMpIHtcbiAgICAgIHZhciBnID0gbmV3IFNldCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgXyA9IF9fdmFsdWVzKHUpLCBUID0gXy5uZXh0KCk7ICFULmRvbmU7IFQgPSBfLm5leHQoKSkge1xuICAgICAgICAgIHZhciBDID0gVC52YWx1ZSxcbiAgICAgICAgICAgIGIgPSBzLmdldFRpbGVPYmplY3RCeVBvc0lkKEMpO1xuICAgICAgICAgIChudWxsID09IGIgPyB2b2lkIDAgOiBiLmlzVmFsaWQpICYmIGcuYWRkKGIuY2FyZElkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIFQgJiYgIVQuZG9uZSAmJiAoaSA9IF8ucmV0dXJuKSAmJiBpLmNhbGwoXyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBFID0gcy5nZXRBbGxDYXJkVGlsZXMoKS5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBnLmhhcyhlLmNhcmRJZCkgJiYgIWUuZ2V0SXNJblNsb3RCYXIoKTtcbiAgICAgIH0pO1xuICAgICAgRSAmJiAodiA9IFtFLmlkXSk7XG4gICAgfVxuICAgIGlmICgwID09PSBtLmxlbmd0aCAmJiBmKSB7XG4gICAgICBtID0gW2ZdO1xuICAgIH0gZWxzZSB7XG4gICAgICAwID09PSBtLmxlbmd0aCAmJiBjLmxlbmd0aCA+IDAgJiYgKG0gPSBjWzBdLnNsaWNlKDAsIDIpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKDAgPT09IG0ubGVuZ3RoKSB7XG4gICAgICB2YXIgUyA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJIaXRUaXBzQ2hlY2tlci5jb21wdXRlVGlsZTJIaW50KCk7XG4gICAgICBpZiAoUykge1xuICAgICAgICBtID0gW1MuY2xlYXJJZDEsIFMuY2xlYXJJZDJdLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHAubGVuZ3RoID4gMCAmJiAobSA9IFtwWzBdXSk7XG4gICAgICB9XG4gICAgfVxuICAgIG0ubGVuZ3RoID4gMCAmJiBDbGVhckhlbHBlci5ydW5DbGVhcih0aGlzLmdhbWVDb250ZXh0LCBlLCB0aGlzLCB7XG4gICAgICB0aWxlSWRzOiBtLFxuICAgICAgb3V0VGlsZXM6IHZcbiAgICB9KTtcbiAgfVxufSJdfQ==