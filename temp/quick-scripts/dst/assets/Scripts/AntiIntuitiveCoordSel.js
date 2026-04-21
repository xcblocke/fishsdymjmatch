
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AntiIntuitiveCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '018bdM3JBJIKrgiEvBrSD66', 'AntiIntuitiveCoordSel');
// Scripts/AntiIntuitiveCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiIntuitiveCoordSel = void 0;
var AntiIntuitiveCoordSel = /** @class */ (function () {
    function AntiIntuitiveCoordSel() {
    }
    AntiIntuitiveCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = e.layer !== t.layer, a = this._calculateDistance(e, t), l = this._isAdjacent(e, t), s = o.hasNeighborSelectable(n), c = o.hasNeighborSelectable(i), u = s && c;
        return r && u && a >= 9 ? {
            priority: 100,
            subScore: Math.random()
        } : r && !l && u ? {
            priority: 50,
            subScore: Math.random()
        } : a >= 9 ? {
            priority: 10,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    AntiIntuitiveCoordSel.prototype._calculateDistance = function (e, t) {
        var o = e.gridPosX - t.gridPosX, n = e.gridPosY - t.gridPosY, i = Math.sqrt(o * o + n * n), r = Math.abs(e.layer - t.layer);
        return 0 !== r ? i + Math.log(r) : i;
    };
    AntiIntuitiveCoordSel.prototype._isAdjacent = function (e, t) {
        return Math.abs(e.gridPosX - t.gridPosX) + Math.abs(e.gridPosY - t.gridPosY) + Math.abs(e.layer - t.layer) <= 1;
    };
    return AntiIntuitiveCoordSel;
}());
exports.AntiIntuitiveCoordSel = AntiIntuitiveCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FudGlJbnR1aXRpdmVDb29yZFNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrQ0EsQ0FBQztJQWpDQyxpREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUN2QixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDakMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUM5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixRQUFRLEVBQUUsR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUNELGtEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDJDQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFDSCw0QkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFudGlJbnR1aXRpdmVDb29yZFNlbCB7XG4gIGNhbGN1bGF0ZVByaW9yaXR5KGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IG8udGlsZVRvQ29vcmQoZSksXG4gICAgICBpID0gby50aWxlVG9Db29yZCh0KSxcbiAgICAgIHIgPSBlLmxheWVyICE9PSB0LmxheWVyLFxuICAgICAgYSA9IHRoaXMuX2NhbGN1bGF0ZURpc3RhbmNlKGUsIHQpLFxuICAgICAgbCA9IHRoaXMuX2lzQWRqYWNlbnQoZSwgdCksXG4gICAgICBzID0gby5oYXNOZWlnaGJvclNlbGVjdGFibGUobiksXG4gICAgICBjID0gby5oYXNOZWlnaGJvclNlbGVjdGFibGUoaSksXG4gICAgICB1ID0gcyAmJiBjO1xuICAgIHJldHVybiByICYmIHUgJiYgYSA+PSA5ID8ge1xuICAgICAgcHJpb3JpdHk6IDEwMCxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfSA6IHIgJiYgIWwgJiYgdSA/IHtcbiAgICAgIHByaW9yaXR5OiA1MCxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfSA6IGEgPj0gOSA/IHtcbiAgICAgIHByaW9yaXR5OiAxMCxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfSA6IHtcbiAgICAgIHByaW9yaXR5OiAxLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9O1xuICB9XG4gIF9jYWxjdWxhdGVEaXN0YW5jZShlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdyaWRQb3NYIC0gdC5ncmlkUG9zWCxcbiAgICAgIG4gPSBlLmdyaWRQb3NZIC0gdC5ncmlkUG9zWSxcbiAgICAgIGkgPSBNYXRoLnNxcnQobyAqIG8gKyBuICogbiksXG4gICAgICByID0gTWF0aC5hYnMoZS5sYXllciAtIHQubGF5ZXIpO1xuICAgIHJldHVybiAwICE9PSByID8gaSArIE1hdGgubG9nKHIpIDogaTtcbiAgfVxuICBfaXNBZGphY2VudChlLCB0KSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGUuZ3JpZFBvc1ggLSB0LmdyaWRQb3NYKSArIE1hdGguYWJzKGUuZ3JpZFBvc1kgLSB0LmdyaWRQb3NZKSArIE1hdGguYWJzKGUubGF5ZXIgLSB0LmxheWVyKSA8PSAxO1xuICB9XG59Il19