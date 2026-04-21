
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2RollCardLight/Scripts/Tile2RollCardLightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7619bjULKZDG5Yq1G8dgjo2', 'Tile2RollCardLightTrait');
// subpackages/l_tile2RollCardLight/Scripts/Tile2RollCardLightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseTileNode_1 = require("../../../Scripts/BaseTileNode");
var Tile2RollCardLightTrait = /** @class */ (function (_super) {
    __extends(Tile2RollCardLightTrait, _super);
    function Tile2RollCardLightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardLightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2RollCardLightTrait.prototype.getSpineCfg = function () {
        return {
            path: "spine/gameplay_mj_choose_light",
            bundle: this.traitData.bundleName || "l_tile2RollCardLight"
        };
    };
    Tile2RollCardLightTrait.prototype.getLightSize = function () {
        return cc.v2(163, 201);
    };
    Tile2RollCardLightTrait.prototype.onTile2FlipAni_playEnter = function (e, t) {
        var i = this.getTile2Node(e), r = this.getSpineCfg();
        if (i && r.path) {
            var o = i.tileNode;
            if (cc.isValid(o)) {
                var n = o.getChildByName("Tile2RollCardLight");
                if (!n || !cc.isValid(n)) {
                    (n = new cc.Node("Tile2RollCardLight")).parent = o;
                    n.zIndex = BaseTileNode_1.ETileNodeZIndex.RollCardLight;
                    var l = o.getChildByName(BaseTileNode_1.ETileNodeNames.imgCardBg);
                    if (l) {
                        var s = this.getLightSize();
                        if (l.width && l.height) {
                            var p = l.width, d = l.height, f = p / s.x, u = d / s.y;
                            n.setScale(f, u, 1);
                        }
                    }
                }
                if (n) {
                    n.active = true;
                    var h = BaseSpine_1.default.refreshWithNode(n, r.path, r.bundle);
                    h.setAnimation("in", 1, function () {
                        h.setAnimation("idle", -1);
                    });
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    Tile2RollCardLightTrait.prototype.onTile2FlipAni_playExit = function (e, t) {
        var i = this.getTile2Node(e);
        if (i && cc.isValid(i.tileNode)) {
            var r = i.tileNode.getChildByName("Tile2RollCardLight");
            if (r && r.activeInHierarchy) {
                var o = r.getComponent(BaseSpine_1.default);
                o && o.setAnimation("out", 1);
            }
            t();
        }
        else
            t();
    };
    Tile2RollCardLightTrait.prototype.onRollCrdComp_playFly = function (e, t) {
        var i, r = null === (i = e.ins._host) || void 0 === i ? void 0 : i.tileNode;
        if (r && cc.isValid(r)) {
            var o = r.getChildByName("Tile2RollCardLight");
            if (o && o.activeInHierarchy) {
                var n = o.getComponent(BaseSpine_1.default);
                n && n.setAnimation("fly", 1, function () {
                    o.active = false;
                });
            }
            t();
        }
        else
            t();
    };
    Tile2RollCardLightTrait.prototype.getTile2Node = function (e) {
        var t = null == e ? void 0 : e.ins;
        return (null == t ? void 0 : t._baseTileNode) || null;
    };
    Tile2RollCardLightTrait.traitKey = "Tile2RollCardLight";
    Tile2RollCardLightTrait = __decorate([
        mj.trait,
        mj.class("Tile2RollCardLightTrait")
    ], Tile2RollCardLightTrait);
    return Tile2RollCardLightTrait;
}(Trait_1.default));
exports.default = Tile2RollCardLightTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyUm9sbENhcmRMaWdodC9TY3JpcHRzL1RpbGUyUm9sbENhcmRMaWdodFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBQ3BFLDhEQUFnRjtBQUdoRjtJQUFxRCwyQ0FBSztJQUExRDs7SUE0RUEsQ0FBQztJQTFFQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkNBQVcsR0FBWDtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsZ0NBQWdDO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxzQkFBc0I7U0FDNUQsQ0FBQztJQUNKLENBQUM7SUFDRCw4Q0FBWSxHQUFaO1FBQ0UsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsMERBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbkIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN4QixDQUFDLENBQUMsR0FBRyxJ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LENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtvQkFDNUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDhDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3hELENBQUM7SUExRU0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBNEUzQztJQUFELDhCQUFDO0NBNUVELEFBNEVDLENBNUVvRCxlQUFLLEdBNEV6RDtrQkE1RW9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRVRpbGVOb2RlWkluZGV4LCBFVGlsZU5vZGVOYW1lcyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmFzZVRpbGVOb2RlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJSb2xsQ2FyZExpZ2h0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyUm9sbENhcmRMaWdodFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyUm9sbENhcmRMaWdodFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0U3BpbmVDZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IFwic3BpbmUvZ2FtZXBsYXlfbWpfY2hvb3NlX2xpZ2h0XCIsXG4gICAgICBidW5kbGU6IHRoaXMudHJhaXREYXRhLmJ1bmRsZU5hbWUgfHwgXCJsX3RpbGUyUm9sbENhcmRMaWdodFwiXG4gICAgfTtcbiAgfVxuICBnZXRMaWdodFNpemUoKSB7XG4gICAgcmV0dXJuIGNjLnYyKDE2MywgMjAxKTtcbiAgfVxuICBvblRpbGUyRmxpcEFuaV9wbGF5RW50ZXIoZSwgdCkge1xuICAgIHZhciBpID0gdGhpcy5nZXRUaWxlMk5vZGUoZSksXG4gICAgICByID0gdGhpcy5nZXRTcGluZUNmZygpO1xuICAgIGlmIChpICYmIHIucGF0aCkge1xuICAgICAgdmFyIG8gPSBpLnRpbGVOb2RlO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwiVGlsZTJSb2xsQ2FyZExpZ2h0XCIpO1xuICAgICAgICBpZiAoIW4gfHwgIWNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgICAobiA9IG5ldyBjYy5Ob2RlKFwiVGlsZTJSb2xsQ2FyZExpZ2h0XCIpKS5wYXJlbnQgPSBvO1xuICAgICAgICAgIG4uekluZGV4ID0gRVRpbGVOb2RlWkluZGV4LlJvbGxDYXJkTGlnaHQ7XG4gICAgICAgICAgdmFyIGwgPSBvLmdldENoaWxkQnlOYW1lKEVUaWxlTm9kZU5hbWVzLmltZ0NhcmRCZyk7XG4gICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy5nZXRMaWdodFNpemUoKTtcbiAgICAgICAgICAgIGlmIChsLndpZHRoICYmIGwuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHZhciBwID0gbC53aWR0aCxcbiAgICAgICAgICAgICAgICBkID0gbC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgZiA9IHAgLyBzLngsXG4gICAgICAgICAgICAgICAgdSA9IGQgLyBzLnk7XG4gICAgICAgICAgICAgIG4uc2V0U2NhbGUoZiwgdSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHZhciBoID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShuLCByLnBhdGgsIHIuYnVuZGxlKTtcbiAgICAgICAgICBoLnNldEFuaW1hdGlvbihcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGguc2V0QW5pbWF0aW9uKFwiaWRsZVwiLCAtMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVGlsZTJGbGlwQW5pX3BsYXlFeGl0KGUsIHQpIHtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0VGlsZTJOb2RlKGUpO1xuICAgIGlmIChpICYmIGNjLmlzVmFsaWQoaS50aWxlTm9kZSkpIHtcbiAgICAgIHZhciByID0gaS50aWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRpbGUyUm9sbENhcmRMaWdodFwiKTtcbiAgICAgIGlmIChyICYmIHIuYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgdmFyIG8gPSByLmdldENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgICBvICYmIG8uc2V0QW5pbWF0aW9uKFwib3V0XCIsIDEpO1xuICAgICAgfVxuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25Sb2xsQ3JkQ29tcF9wbGF5Rmx5KGUsIHQpIHtcbiAgICB2YXIgaSxcbiAgICAgIHIgPSBudWxsID09PSAoaSA9IGUuaW5zLl9ob3N0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLnRpbGVOb2RlO1xuICAgIGlmIChyICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgIHZhciBvID0gci5nZXRDaGlsZEJ5TmFtZShcIlRpbGUyUm9sbENhcmRMaWdodFwiKTtcbiAgICAgIGlmIChvICYmIG8uYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgdmFyIG4gPSBvLmdldENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgICBuICYmIG4uc2V0QW5pbWF0aW9uKFwiZmx5XCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGdldFRpbGUyTm9kZShlKSB7XG4gICAgdmFyIHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmlucztcbiAgICByZXR1cm4gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuX2Jhc2VUaWxlTm9kZSkgfHwgbnVsbDtcbiAgfVxufSJdfQ==