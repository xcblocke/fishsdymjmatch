
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/IAllClearStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef54eqXNPtAQ7LVJf1jsbAh', 'IAllClearStrategy');
// Scripts/IAllClearStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAllClearSlotCardNodeScaleToBoard = exports.buildAllClearNodeInfos = void 0;
var buildAllClearNodeInfos = function (e, t) {
    for (var o = [], n = 0; n + 1 < e.length; n += 2) {
        var i = e[n], r = e[n + 1], a = t.getTileNodePos(i), l = t.getTileNodePos(r), s = t.cloneTileNode(i), c = t.cloneTileNode(r);
        if (s && c && a && l) {
            s.parent = t.effectNode;
            c.parent = t.effectNode;
            s.position = a;
            c.position = l;
            s.active = true;
            c.active = false;
            t.removeTileNode(i);
            o.push({
                cardNode1: s,
                cardNode2: c,
                tileId1: i,
                tileId2: r,
                targetPos1: cc.v3(),
                targetPos2: cc.v3(),
                runIndex: 0
            });
        }
        else {
            null == s || s.destroy();
            null == c || c.destroy();
        }
    }
    return o;
};
exports.buildAllClearNodeInfos = buildAllClearNodeInfos;
var applyAllClearSlotCardNodeScaleToBoard = function (e, t, o) {
    if (cc.isValid(e) && cc.isValid(t))
        if (o && cc.isValid(o)) {
            var n = o.getBoundingBoxToWorld().width, i = t.getBoundingBoxToWorld().width;
            if (n < 0.0001 || i < 0.0001)
                e.setScale(1, 1, 1);
            else {
                var r = n / i;
                e.setScale(e.scaleX * r, e.scaleY * r, e.scaleZ);
            }
        }
        else
            e.setScale(1, 1, 1);
};
exports.applyAllClearSlotCardNodeScaleToBoard = applyAllClearSlotCardNodeScaleToBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lBbGxDbGVhclN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBSSxzQkFBc0IsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNaLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUN4QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDeEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTCxTQUFTLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUUsQ0FBQztnQkFDWixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPLEVBQUUsQ0FBQztnQkFDVixVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQS9CUyxRQUFBLHNCQUFzQiwwQkErQi9CO0FBQ0ssSUFBSSxxQ0FBcUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssRUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU07Z0JBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUFLO2dCQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7O1lBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQVRTLFFBQUEscUNBQXFDLHlDQVM5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgYnVpbGRBbGxDbGVhck5vZGVJbmZvcyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gIGZvciAodmFyIG8gPSBbXSwgbiA9IDA7IG4gKyAxIDwgZS5sZW5ndGg7IG4gKz0gMikge1xuICAgIHZhciBpID0gZVtuXSxcbiAgICAgIHIgPSBlW24gKyAxXSxcbiAgICAgIGEgPSB0LmdldFRpbGVOb2RlUG9zKGkpLFxuICAgICAgbCA9IHQuZ2V0VGlsZU5vZGVQb3MociksXG4gICAgICBzID0gdC5jbG9uZVRpbGVOb2RlKGkpLFxuICAgICAgYyA9IHQuY2xvbmVUaWxlTm9kZShyKTtcbiAgICBpZiAocyAmJiBjICYmIGEgJiYgbCkge1xuICAgICAgcy5wYXJlbnQgPSB0LmVmZmVjdE5vZGU7XG4gICAgICBjLnBhcmVudCA9IHQuZWZmZWN0Tm9kZTtcbiAgICAgIHMucG9zaXRpb24gPSBhO1xuICAgICAgYy5wb3NpdGlvbiA9IGw7XG4gICAgICBzLmFjdGl2ZSA9IHRydWU7XG4gICAgICBjLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdC5yZW1vdmVUaWxlTm9kZShpKTtcbiAgICAgIG8ucHVzaCh7XG4gICAgICAgIGNhcmROb2RlMTogcyxcbiAgICAgICAgY2FyZE5vZGUyOiBjLFxuICAgICAgICB0aWxlSWQxOiBpLFxuICAgICAgICB0aWxlSWQyOiByLFxuICAgICAgICB0YXJnZXRQb3MxOiBjYy52MygpLFxuICAgICAgICB0YXJnZXRQb3MyOiBjYy52MygpLFxuICAgICAgICBydW5JbmRleDogMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT0gcyB8fCBzLmRlc3Ryb3koKTtcbiAgICAgIG51bGwgPT0gYyB8fCBjLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuZXhwb3J0IHZhciBhcHBseUFsbENsZWFyU2xvdENhcmROb2RlU2NhbGVUb0JvYXJkID0gZnVuY3Rpb24gKGUsIHQsIG8pIHtcbiAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZCh0KSkgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgIHZhciBuID0gby5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCxcbiAgICAgIGkgPSB0LmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoO1xuICAgIGlmIChuIDwgMC4wMDAxIHx8IGkgPCAwLjAwMDEpIGUuc2V0U2NhbGUoMSwgMSwgMSk7ZWxzZSB7XG4gICAgICB2YXIgciA9IG4gLyBpO1xuICAgICAgZS5zZXRTY2FsZShlLnNjYWxlWCAqIHIsIGUuc2NhbGVZICogciwgZS5zY2FsZVopO1xuICAgIH1cbiAgfSBlbHNlIGUuc2V0U2NhbGUoMSwgMSwgMSk7XG59OyJdfQ==