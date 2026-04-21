
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/QRCodeUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0107fwzw9xNbIEhTi5Q33dr', 'QRCodeUtils');
// Scripts/QRCodeUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCorrectLevel = void 0;
var QRCodeUtils = /** @class */ (function () {
    function QRCodeUtils() {
    }
    QRCodeUtils.drawQRCode = function (e, t, o, r) {
        var a = Object.assign(Object.assign({}, {
            errorCorrectLevel: QRCode.ErrorCorrectLevel.M,
            foregroundColor: cc.Color.BLACK,
            backgroundColor: cc.Color.WHITE,
            margin: 1
        }), r), l = new QRCode.Generator(0, a.errorCorrectLevel);
        l.addData(t);
        l.make();
        var s = l.getModuleCount(), c = o / (s + 2 * a.margin), u = o / 2;
        e.clear();
        e.fillColor = a.backgroundColor;
        e.rect(-u, -u, o, o);
        e.fill();
        e.fillColor = a.foregroundColor;
        for (var p = 0; p < s; p++)
            for (var f = 0; f < s; f++)
                if (l.isDark(p, f)) {
                    var d = (f + a.margin) * c - u, h = u - (p + a.margin + 1) * c;
                    e.rect(d, h, c, c);
                }
        e.fill();
    };
    QRCodeUtils.createQRCodeNode = function (e, t, o) {
        var n = new cc.Node("QRCode");
        n.setContentSize(t, t);
        var i = n.addComponent(cc.Graphics);
        this.drawQRCode(i, e, t, o);
        return n;
    };
    QRCodeUtils.getQRCodeMatrix = function (e, t) {
        if (t === void 0) { t = QRCode.ErrorCorrectLevel.M; }
        var o = new QRCode.Generator(0, t);
        o.addData(e);
        o.make();
        return o.getModules();
    };
    return QRCodeUtils;
}());
exports.default = QRCodeUtils;
exports.ErrorCorrectLevel = QRCode.ErrorCorrectLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1FSQ29kZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQXVDQSxDQUFDO0lBdENRLHNCQUFVLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRztZQUNuQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxlQUFlLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQy9CLGVBQWUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDL0IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFDeEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUMxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNWLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDNUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDcEI7UUFDRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBQ00sNEJBQWdCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSwyQkFBZSxHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBOEI7UUFBOUIsa0JBQUEsRUFBQSxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNULE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDSCxrQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7O0FBQ1UsUUFBQSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFSQ29kZVV0aWxzIHtcbiAgc3RhdGljIGRyYXdRUkNvZGUoZSwgdCwgbywgcikge1xuICAgIHZhciBhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAge1xuICAgICAgICAgIGVycm9yQ29ycmVjdExldmVsOiBRUkNvZGUuRXJyb3JDb3JyZWN0TGV2ZWwuTSxcbiAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3I6IGNjLkNvbG9yLkJMQUNLLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2MuQ29sb3IuV0hJVEUsXG4gICAgICAgICAgbWFyZ2luOiAxXG4gICAgICAgIH0pLCByKSxcbiAgICAgIGwgPSBuZXcgUVJDb2RlLkdlbmVyYXRvcigwLCBhLmVycm9yQ29ycmVjdExldmVsKTtcbiAgICBsLmFkZERhdGEodCk7XG4gICAgbC5tYWtlKCk7XG4gICAgdmFyIHMgPSBsLmdldE1vZHVsZUNvdW50KCksXG4gICAgICBjID0gbyAvIChzICsgMiAqIGEubWFyZ2luKSxcbiAgICAgIHUgPSBvIC8gMjtcbiAgICBlLmNsZWFyKCk7XG4gICAgZS5maWxsQ29sb3IgPSBhLmJhY2tncm91bmRDb2xvcjtcbiAgICBlLnJlY3QoLXUsIC11LCBvLCBvKTtcbiAgICBlLmZpbGwoKTtcbiAgICBlLmZpbGxDb2xvciA9IGEuZm9yZWdyb3VuZENvbG9yO1xuICAgIGZvciAodmFyIHAgPSAwOyBwIDwgczsgcCsrKSBmb3IgKHZhciBmID0gMDsgZiA8IHM7IGYrKykgaWYgKGwuaXNEYXJrKHAsIGYpKSB7XG4gICAgICB2YXIgZCA9IChmICsgYS5tYXJnaW4pICogYyAtIHUsXG4gICAgICAgIGggPSB1IC0gKHAgKyBhLm1hcmdpbiArIDEpICogYztcbiAgICAgIGUucmVjdChkLCBoLCBjLCBjKTtcbiAgICB9XG4gICAgZS5maWxsKCk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZVFSQ29kZU5vZGUoZSwgdCwgbykge1xuICAgIHZhciBuID0gbmV3IGNjLk5vZGUoXCJRUkNvZGVcIik7XG4gICAgbi5zZXRDb250ZW50U2l6ZSh0LCB0KTtcbiAgICB2YXIgaSA9IG4uYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICB0aGlzLmRyYXdRUkNvZGUoaSwgZSwgdCwgbyk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgc3RhdGljIGdldFFSQ29kZU1hdHJpeChlLCB0ID0gUVJDb2RlLkVycm9yQ29ycmVjdExldmVsLk0pIHtcbiAgICB2YXIgbyA9IG5ldyBRUkNvZGUuR2VuZXJhdG9yKDAsIHQpO1xuICAgIG8uYWRkRGF0YShlKTtcbiAgICBvLm1ha2UoKTtcbiAgICByZXR1cm4gby5nZXRNb2R1bGVzKCk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgRXJyb3JDb3JyZWN0TGV2ZWwgPSBRUkNvZGUuRXJyb3JDb3JyZWN0TGV2ZWw7Il19