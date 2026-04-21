
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FlowLevelSerializer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04dbdAb28lDJqWnc0akEMPa', 'FlowLevelSerializer');
// Scripts/FlowLevelSerializer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowLevelSerializer = void 0;
var LevelDataParser_1 = require("./core/simulator/config/LevelDataParser");
var FlowLevelSerializer = /** @class */ (function () {
    function FlowLevelSerializer() {
    }
    FlowLevelSerializer.serialize = function (t) {
        var o = FlowLevelSerializer.toCardTileDatas(t);
        return LevelDataParser_1.LevelDataParser.convertCardTileDatasToString(o);
    };
    FlowLevelSerializer.toCardTileDatas = function (e) {
        var t, o, i = e.filter(function (e) {
            return e.isValid;
        }).map(function (e) {
            return {
                id: e.cardId,
                pos: {
                    x: e.gridX,
                    y: e.gridY,
                    z: e.layer
                },
                isAlive: true
            };
        }), r = 0, a = 0;
        try {
            for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                c.pos.y > r && (r = c.pos.y);
                c.pos.x > a && (a = c.pos.x);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var u = (r + 1) * (a + 1);
        i.sort(function (e, t) {
            return e.pos.z * u + e.pos.y * (a + 1) + e.pos.x - (t.pos.z * u + t.pos.y * (a + 1) + t.pos.x);
        });
        return i;
    };
    return FlowLevelSerializer;
}());
exports.FlowLevelSerializer = FlowLevelSerializer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0Zsb3dMZXZlbFNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBMEU7QUFDMUU7SUFBQTtJQThDQSxDQUFDO0lBN0NRLDZCQUFTLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8saUNBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ00sbUNBQWUsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO2dCQUNaLEdBQUcsRUFBRTtvQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7b0JBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO29CQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztpQkFDWDtnQkFDRCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7UUFDSixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMZXZlbERhdGFQYXJzZXIgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbERhdGFQYXJzZXInO1xuZXhwb3J0IGNsYXNzIEZsb3dMZXZlbFNlcmlhbGl6ZXIge1xuICBzdGF0aWMgc2VyaWFsaXplKHQpIHtcbiAgICB2YXIgbyA9IEZsb3dMZXZlbFNlcmlhbGl6ZXIudG9DYXJkVGlsZURhdGFzKHQpO1xuICAgIHJldHVybiBMZXZlbERhdGFQYXJzZXIuY29udmVydENhcmRUaWxlRGF0YXNUb1N0cmluZyhvKTtcbiAgfVxuICBzdGF0aWMgdG9DYXJkVGlsZURhdGFzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBpID0gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaXNWYWxpZDtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBlLmNhcmRJZCxcbiAgICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgIHg6IGUuZ3JpZFgsXG4gICAgICAgICAgICB5OiBlLmdyaWRZLFxuICAgICAgICAgICAgejogZS5sYXllclxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNBbGl2ZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICByID0gMCxcbiAgICAgIGEgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoaSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gcy52YWx1ZTtcbiAgICAgICAgYy5wb3MueSA+IHIgJiYgKHIgPSBjLnBvcy55KTtcbiAgICAgICAgYy5wb3MueCA+IGEgJiYgKGEgPSBjLnBvcy54KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdSA9IChyICsgMSkgKiAoYSArIDEpO1xuICAgIGkuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGUucG9zLnogKiB1ICsgZS5wb3MueSAqIChhICsgMSkgKyBlLnBvcy54IC0gKHQucG9zLnogKiB1ICsgdC5wb3MueSAqIChhICsgMSkgKyB0LnBvcy54KTtcbiAgICB9KTtcbiAgICByZXR1cm4gaTtcbiAgfVxufSJdfQ==