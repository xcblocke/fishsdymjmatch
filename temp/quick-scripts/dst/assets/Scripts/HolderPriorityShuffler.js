
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HolderPriorityShuffler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20658F24WhPJZup64VBHiCx', 'HolderPriorityShuffler');
// Scripts/HolderPriorityShuffler.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HolderPriorityShuffler = void 0;
var BaseCoreObject_1 = require("./BaseCoreObject");
var HolderPriorityShuffler = /** @class */ (function (_super) {
    __extends(HolderPriorityShuffler, _super);
    function HolderPriorityShuffler(t) {
        return _super.call(this, t) || this;
    }
    HolderPriorityShuffler.prototype.apply = function (e) {
        var t = this._context.getTileMapObject(), o = this._context.getGameData(), n = this.pickHolderCardIds(o, t, e);
        if (0 !== n.length)
            for (var i = 0; i < n.length; i++)
                this.ensureMatchable(n[i], t, e);
    };
    HolderPriorityShuffler.prototype.hasSolution = function () {
        var e = this._context.getTileMapObject();
        e.updateCanMatchTiles();
        return e.getCanMatchCardPairNum() > 0;
    };
    HolderPriorityShuffler.prototype.ensureMatchable = function (e, t, o) {
        var n = t.getAllCardTiles().filter(function (e) {
            return !e.getIsInSlotBar() && 0 === t.isCardLock(e) && !e.generating;
        });
        if (!n.some(function (t) {
            return t.cardId === e && (o.includeBack || !t.getIsBack());
        })) {
            var i = t.getAllCardTiles().filter(function (o) {
                return !o.getIsInSlotBar() && o.cardId === e && 0 !== t.isCardLock(o);
            })[0];
            if (i) {
                var r = n.filter(function (t) {
                    return t.cardId !== e;
                });
                if (0 !== r.length) {
                    var a = r[Math.floor(Math.random() * r.length)];
                    t.swapTilePositions(i.id, a.id);
                }
            }
        }
    };
    HolderPriorityShuffler.prototype.pickHolderCardIds = function (e, t, o) {
        var n = e.slotBarIds;
        if (!n || 0 === n.length)
            return [];
        var i = n.map(function (e) {
            return t.getTileObjectByPosId(e);
        }).filter(function (e) {
            return !!e;
        });
        if (0 === i.length)
            return [];
        switch (o.holderPickMode) {
            case "all":
                return i.map(function (e) {
                    return e.cardId;
                });
            case "eachOne":
                return __spreadArrays(new Set(i.map(function (e) {
                    return e.cardId;
                })));
            case "mostCountOne":
                var r = new Map();
                i.forEach(function (e) {
                    var t;
                    r.set(e.cardId, (null !== (t = r.get(e.cardId)) && void 0 !== t ? t : 0) + 1);
                });
                var l = -1, s = 0;
                r.forEach(function (e, t) {
                    if (e > s) {
                        s = e;
                        l = t;
                    }
                });
                return -1 === l ? [] : i.filter(function (e) {
                    return e.cardId === l;
                }).map(function (e) {
                    return e.cardId;
                });
            default:
                return [];
        }
    };
    return HolderPriorityShuffler;
}(BaseCoreObject_1.BaseCoreObject));
exports.HolderPriorityShuffler = HolderPriorityShuffler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0hvbGRlclByaW9yaXR5U2h1ZmZsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQ7SUFBNEMsMENBQWM7SUFDeEQsZ0NBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCxzQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQy9CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELGdEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLElBQUks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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNULENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDUDtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDekMsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDaEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNMO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQTdFQSxBQTZFQyxDQTdFMkMsK0JBQWMsR0E2RXpEO0FBN0VZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi9CYXNlQ29yZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgSG9sZGVyUHJpb3JpdHlTaHVmZmxlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGFwcGx5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbyA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgIG4gPSB0aGlzLnBpY2tIb2xkZXJDYXJkSWRzKG8sIHQsIGUpO1xuICAgIGlmICgwICE9PSBuLmxlbmd0aCkgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB0aGlzLmVuc3VyZU1hdGNoYWJsZShuW2ldLCB0LCBlKTtcbiAgfVxuICBoYXNTb2x1dGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgIGUudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHJldHVybiBlLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSA+IDA7XG4gIH1cbiAgZW5zdXJlTWF0Y2hhYmxlKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IHQuZ2V0QWxsQ2FyZFRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gIWUuZ2V0SXNJblNsb3RCYXIoKSAmJiAwID09PSB0LmlzQ2FyZExvY2soZSkgJiYgIWUuZ2VuZXJhdGluZztcbiAgICB9KTtcbiAgICBpZiAoIW4uc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlICYmIChvLmluY2x1ZGVCYWNrIHx8ICF0LmdldElzQmFjaygpKTtcbiAgICB9KSkge1xuICAgICAgdmFyIGkgPSB0LmdldEFsbENhcmRUaWxlcygpLmZpbHRlcihmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gIW8uZ2V0SXNJblNsb3RCYXIoKSAmJiBvLmNhcmRJZCA9PT0gZSAmJiAwICE9PSB0LmlzQ2FyZExvY2sobyk7XG4gICAgICB9KVswXTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciByID0gbi5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5jYXJkSWQgIT09IGU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoMCAhPT0gci5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgYSA9IHJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogci5sZW5ndGgpXTtcbiAgICAgICAgICB0LnN3YXBUaWxlUG9zaXRpb25zKGkuaWQsIGEuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBpY2tIb2xkZXJDYXJkSWRzKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IGUuc2xvdEJhcklkcztcbiAgICBpZiAoIW4gfHwgMCA9PT0gbi5sZW5ndGgpIHJldHVybiBbXTtcbiAgICB2YXIgaSA9IG4ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdC5nZXRUaWxlT2JqZWN0QnlQb3NJZChlKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhIWU7XG4gICAgfSk7XG4gICAgaWYgKDAgPT09IGkubGVuZ3RoKSByZXR1cm4gW107XG4gICAgc3dpdGNoIChvLmhvbGRlclBpY2tNb2RlKSB7XG4gICAgICBjYXNlIFwiYWxsXCI6XG4gICAgICAgIHJldHVybiBpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmNhcmRJZDtcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiZWFjaE9uZVwiOlxuICAgICAgICByZXR1cm4gWy4uLm5ldyBTZXQoaS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5jYXJkSWQ7XG4gICAgICAgIH0pKV07XG4gICAgICBjYXNlIFwibW9zdENvdW50T25lXCI6XG4gICAgICAgIHZhciByID0gbmV3IE1hcCgpO1xuICAgICAgICBpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICByLnNldChlLmNhcmRJZCwgKG51bGwgIT09ICh0ID0gci5nZXQoZS5jYXJkSWQpKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMCkgKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBsID0gLTEsXG4gICAgICAgICAgcyA9IDA7XG4gICAgICAgIHIuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGlmIChlID4gcykge1xuICAgICAgICAgICAgcyA9IGU7XG4gICAgICAgICAgICBsID0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLTEgPT09IGwgPyBbXSA6IGkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuY2FyZElkID09PSBsO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5jYXJkSWQ7XG4gICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufSJdfQ==