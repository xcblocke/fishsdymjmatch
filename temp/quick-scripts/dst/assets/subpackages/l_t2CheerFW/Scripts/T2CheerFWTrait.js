
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_t2CheerFW/Scripts/T2CheerFWTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd604as+6HZAYKTA7lVe++xw', 'T2CheerFWTrait');
// subpackages/l_t2CheerFW/Scripts/T2CheerFWTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var s = {
    0: "good",
    1: "great",
    2: "excellent",
    3: "amazing",
    4: "in"
};
var f = {
    0: {
        faceWidth: 80,
        faceHeight: 100,
        wordWidth: 280,
        wordHeight: 120,
        gap: 5
    },
    1: {
        faceWidth: 80,
        faceHeight: 100,
        wordWidth: 320,
        wordHeight: 120,
        gap: 5
    },
    2: {
        faceWidth: 100,
        faceHeight: 100,
        wordWidth: 470,
        wordHeight: 120,
        gap: 5
    },
    3: {
        faceWidth: 120,
        faceHeight: 100,
        wordWidth: 520,
        wordHeight: 120,
        gap: 5
    }
};
var T2CheerFWTrait = /** @class */ (function (_super) {
    __extends(T2CheerFWTrait, _super);
    function T2CheerFWTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2CheerFWTrait.prototype.onT2CheerBhv_createNode = function (e, t) {
        var r = e.args[0], n = e.args[1], i = e.args[2], o = e.args[3], a = 4 === i ? this._createSingleSpineNode(r, n, i, o) : this._createDoubleSpineNode(r, n, i, o);
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: a
        });
    };
    T2CheerFWTrait.prototype.onT2CheerBhv_getAniNm = function (e, t) {
        var r = e.args[0];
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: s[r] || "good"
        });
    };
    T2CheerFWTrait.prototype._createDoubleSpineNode = function (e, t, r, n) {
        var i = new cc.Node("CheerContainer");
        i.parent = e;
        i.position = t;
        var o = new cc.Node("spinFace");
        o.parent = i;
        var a = new cc.Node("spinWord");
        a.parent = i;
        this._alignHorizontalCenter(o, a, r);
        var c = BaseSpine_1.default.refreshWithNode(o, "spine/tile2Cheer/gameplay_word_face_a", "mainRes"), f = BaseSpine_1.default.refreshWithNode(a, "spine/tile2Cheer/gameplay_word_face_b", "mainRes"), u = 0, l = function l() {
            if (!(++u < 2)) {
                var e = s[r] || "good";
                null == c || c.setAnimation(e, 1);
                null == f || f.setAnimation(e, 1, function () {
                    n(i);
                });
            }
        };
        c.setOnReadyCallback(l);
        f.setOnReadyCallback(l);
        return i;
    };
    T2CheerFWTrait.prototype._createSingleSpineNode = function (e, t, r, n) {
        var i = new cc.Node("CheerContainer");
        i.parent = e;
        i.position = t;
        var o = new cc.Node("spinEffect");
        o.parent = i;
        var a = BaseSpine_1.default.refreshWithNode(o, "spine/tile2Cheer/gameplay_moreAwesome", "mainRes");
        a.setOnReadyCallback(function () {
            var e = s[r] || "in";
            a.setAnimation(e, 1, function () {
                n(i);
            });
        });
        return i;
    };
    T2CheerFWTrait.prototype._alignHorizontalCenter = function (e, t, r) {
        var n, i = null !== (n = f[r]) && void 0 !== n ? n : f[0], o = i.faceWidth, a = i.faceHeight, c = i.wordWidth, p = i.wordHeight, s = o + i.gap + c;
        e.setContentSize(o, a);
        e.position = cc.v3(-s / 2 + o / 2, 0, 0);
        t.setContentSize(c, p);
        t.position = cc.v3(s / 2 - c / 2, 0, 0);
    };
    T2CheerFWTrait.traitKey = "T2CheerFW";
    T2CheerFWTrait = __decorate([
        mj.trait,
        mj.class("T2CheerFWTrait")
    ], T2CheerFWTrait);
    return T2CheerFWTrait;
}(Trait_1.default));
exports.default = T2CheerFWTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3QyQ2hlZXJGVy9TY3JpcHRzL1QyQ2hlZXJGV1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHlFQUFvRTtBQUNwRSxJQUFJLENBQUMsR0FBRztJQUNOLENBQUMsRUFBRSxNQUFNO0lBQ1QsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsV0FBVztJQUNkLENBQUMsRUFBRSxTQUFTO0lBQ1osQ0FBQyxFQUFFLElBQUk7Q0FDUixDQUFDO0FBQ0YsSUFBSSxDQUFDLEdBQUc7SUFDTixDQUFDLEVBQUU7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxHQUFHO1FBQ2YsU0FBUyxFQUFFLEdBQUc7UUFDZCxVQUFVLEVBQUUsR0FBRztRQUNmLEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFDRCxDQUFDLEVBQUU7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxHQUFHO1FBQ2YsU0FBUyxFQUFFLEdBQUc7UUFDZCxVQUFVLEVBQUUsR0FBRztRQUNmLEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFDRCxDQUFDLEVBQUU7UUFDRCxTQUFTLEVBQUUsR0FBRztRQUNkLFVBQVUsRUFBRSxHQUFHO1FBQ2YsU0FBUyxFQUFFLEdBQUc7UUFDZCxVQUFVLEVBQUUsR0FBRztRQUNmLEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFDRCxDQUFDLEVBQUU7UUFDRCxTQUFTLEVBQUUsR0FBRztRQUNkLFVBQVUsRUFBRSxHQUFHO1FBQ2YsU0FBUyxFQUFFLEdBQUc7UUFDZCxVQUFVLEVBQUUsR0FBRztRQUNmLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDO0FBR0Y7SUFBNEMsa0NBQUs7SUFBakQ7O0lBMkVBLENBQUM7SUF6RUMsZ0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENB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VSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXpFTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQURYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQTJFbEM7SUFBRCxxQkFBQztDQTNFRCxBQTJFQyxDQTNFMkMsZUFBSyxHQTJFaEQ7a0JBM0VvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG52YXIgcyA9IHtcbiAgMDogXCJnb29kXCIsXG4gIDE6IFwiZ3JlYXRcIixcbiAgMjogXCJleGNlbGxlbnRcIixcbiAgMzogXCJhbWF6aW5nXCIsXG4gIDQ6IFwiaW5cIlxufTtcbnZhciBmID0ge1xuICAwOiB7XG4gICAgZmFjZVdpZHRoOiA4MCxcbiAgICBmYWNlSGVpZ2h0OiAxMDAsXG4gICAgd29yZFdpZHRoOiAyODAsXG4gICAgd29yZEhlaWdodDogMTIwLFxuICAgIGdhcDogNVxuICB9LFxuICAxOiB7XG4gICAgZmFjZVdpZHRoOiA4MCxcbiAgICBmYWNlSGVpZ2h0OiAxMDAsXG4gICAgd29yZFdpZHRoOiAzMjAsXG4gICAgd29yZEhlaWdodDogMTIwLFxuICAgIGdhcDogNVxuICB9LFxuICAyOiB7XG4gICAgZmFjZVdpZHRoOiAxMDAsXG4gICAgZmFjZUhlaWdodDogMTAwLFxuICAgIHdvcmRXaWR0aDogNDcwLFxuICAgIHdvcmRIZWlnaHQ6IDEyMCxcbiAgICBnYXA6IDVcbiAgfSxcbiAgMzoge1xuICAgIGZhY2VXaWR0aDogMTIwLFxuICAgIGZhY2VIZWlnaHQ6IDEwMCxcbiAgICB3b3JkV2lkdGg6IDUyMCxcbiAgICB3b3JkSGVpZ2h0OiAxMjAsXG4gICAgZ2FwOiA1XG4gIH1cbn07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlQyQ2hlZXJGV1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUMkNoZWVyRldUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUMkNoZWVyRldcIjtcbiAgb25UMkNoZWVyQmh2X2NyZWF0ZU5vZGUoZSwgdCkge1xuICAgIHZhciByID0gZS5hcmdzWzBdLFxuICAgICAgbiA9IGUuYXJnc1sxXSxcbiAgICAgIGkgPSBlLmFyZ3NbMl0sXG4gICAgICBvID0gZS5hcmdzWzNdLFxuICAgICAgYSA9IDQgPT09IGkgPyB0aGlzLl9jcmVhdGVTaW5nbGVTcGluZU5vZGUociwgbiwgaSwgbykgOiB0aGlzLl9jcmVhdGVEb3VibGVTcGluZU5vZGUociwgbiwgaSwgbyk7XG4gICAgdCh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiBhXG4gICAgfSk7XG4gIH1cbiAgb25UMkNoZWVyQmh2X2dldEFuaU5tKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuYXJnc1swXTtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IHNbcl0gfHwgXCJnb29kXCJcbiAgICB9KTtcbiAgfVxuICBfY3JlYXRlRG91YmxlU3BpbmVOb2RlKGUsIHQsIHIsIG4pIHtcbiAgICB2YXIgaSA9IG5ldyBjYy5Ob2RlKFwiQ2hlZXJDb250YWluZXJcIik7XG4gICAgaS5wYXJlbnQgPSBlO1xuICAgIGkucG9zaXRpb24gPSB0O1xuICAgIHZhciBvID0gbmV3IGNjLk5vZGUoXCJzcGluRmFjZVwiKTtcbiAgICBvLnBhcmVudCA9IGk7XG4gICAgdmFyIGEgPSBuZXcgY2MuTm9kZShcInNwaW5Xb3JkXCIpO1xuICAgIGEucGFyZW50ID0gaTtcbiAgICB0aGlzLl9hbGlnbkhvcml6b250YWxDZW50ZXIobywgYSwgcik7XG4gICAgdmFyIGMgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKG8sIFwic3BpbmUvdGlsZTJDaGVlci9nYW1lcGxheV93b3JkX2ZhY2VfYVwiLCBcIm1haW5SZXNcIiksXG4gICAgICBmID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShhLCBcInNwaW5lL3RpbGUyQ2hlZXIvZ2FtZXBsYXlfd29yZF9mYWNlX2JcIiwgXCJtYWluUmVzXCIpLFxuICAgICAgdSA9IDAsXG4gICAgICBsID0gZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgaWYgKCEoKyt1IDwgMikpIHtcbiAgICAgICAgICB2YXIgZSA9IHNbcl0gfHwgXCJnb29kXCI7XG4gICAgICAgICAgbnVsbCA9PSBjIHx8IGMuc2V0QW5pbWF0aW9uKGUsIDEpO1xuICAgICAgICAgIG51bGwgPT0gZiB8fCBmLnNldEFuaW1hdGlvbihlLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuKGkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIGMuc2V0T25SZWFkeUNhbGxiYWNrKGwpO1xuICAgIGYuc2V0T25SZWFkeUNhbGxiYWNrKGwpO1xuICAgIHJldHVybiBpO1xuICB9XG4gIF9jcmVhdGVTaW5nbGVTcGluZU5vZGUoZSwgdCwgciwgbikge1xuICAgIHZhciBpID0gbmV3IGNjLk5vZGUoXCJDaGVlckNvbnRhaW5lclwiKTtcbiAgICBpLnBhcmVudCA9IGU7XG4gICAgaS5wb3NpdGlvbiA9IHQ7XG4gICAgdmFyIG8gPSBuZXcgY2MuTm9kZShcInNwaW5FZmZlY3RcIik7XG4gICAgby5wYXJlbnQgPSBpO1xuICAgIHZhciBhID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShvLCBcInNwaW5lL3RpbGUyQ2hlZXIvZ2FtZXBsYXlfbW9yZUF3ZXNvbWVcIiwgXCJtYWluUmVzXCIpO1xuICAgIGEuc2V0T25SZWFkeUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gc1tyXSB8fCBcImluXCI7XG4gICAgICBhLnNldEFuaW1hdGlvbihlLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4oaSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gaTtcbiAgfVxuICBfYWxpZ25Ib3Jpem9udGFsQ2VudGVyKGUsIHQsIHIpIHtcbiAgICB2YXIgbixcbiAgICAgIGkgPSBudWxsICE9PSAobiA9IGZbcl0pICYmIHZvaWQgMCAhPT0gbiA/IG4gOiBmWzBdLFxuICAgICAgbyA9IGkuZmFjZVdpZHRoLFxuICAgICAgYSA9IGkuZmFjZUhlaWdodCxcbiAgICAgIGMgPSBpLndvcmRXaWR0aCxcbiAgICAgIHAgPSBpLndvcmRIZWlnaHQsXG4gICAgICBzID0gbyArIGkuZ2FwICsgYztcbiAgICBlLnNldENvbnRlbnRTaXplKG8sIGEpO1xuICAgIGUucG9zaXRpb24gPSBjYy52MygtcyAvIDIgKyBvIC8gMiwgMCwgMCk7XG4gICAgdC5zZXRDb250ZW50U2l6ZShjLCBwKTtcbiAgICB0LnBvc2l0aW9uID0gY2MudjMocyAvIDIgLSBjIC8gMiwgMCwgMCk7XG4gIH1cbn0iXX0=