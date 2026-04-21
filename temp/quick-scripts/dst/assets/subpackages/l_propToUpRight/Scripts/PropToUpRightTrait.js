
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propToUpRight/Scripts/PropToUpRightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '704f7/XlbdDmJV+mVKBGCID', 'PropToUpRightTrait');
// subpackages/l_propToUpRight/Scripts/PropToUpRightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var PropToUpRightTrait = /** @class */ (function (_super) {
    __extends(PropToUpRightTrait, _super);
    function PropToUpRightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropToUpRightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropToUpRightTrait.prototype.onGameUI_onLoad = function (e, t) {
        var o = e.ins;
        if (o && cc.isValid(o.node)) {
            var n = o.node.getChildByName("nodeTop"), r = o.node.getChildByName("nodeBottom"), i = o.btnSettings.position, a = n.width, c = n.convertToWorldSpaceAR(cc.v2(a / 2, 5)), p = r.convertToNodeSpaceAR(c);
            o.btnShuffle.setPosition(p.x - 140 - 72, p.y);
            o.btnHitTips.setPosition(p.x - 20 - 72, p.y);
            this.adjustBtn(o.btnShuffle, "gameplay_icon_refresh");
            this.adjustBtn(o.btnHitTips, "gameplay_icon_hint");
            o.btnSettings.setPosition(-i.x, i.y);
            var s = o.node.getChildByName("nodeTop").getChildByName("levelDesc").getComponent(cc.Label);
            s.fontSize = 36;
            s.node.setAnchorPoint(0.5, 0.5);
            s.node.position = new cc.Vec2(-304.8, 33.83);
            var l = o.node.getChildByName("nodeTop").getChildByName("labelLevel").getComponent(cc.Label);
            l.fontSize = 36;
            l.node.setAnchorPoint(0.5, 0.5);
            l.node.position = new cc.Vec2(-304.9, -14.6);
            t();
        }
        else
            t();
    };
    PropToUpRightTrait.prototype.onGameUI_adaptLv = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    PropToUpRightTrait.prototype.adjustBtn = function (e, t) {
        if (cc.isValid(e)) {
            e.setContentSize(new cc.Size(103, 103));
            var o = e.getChildByName("Background"), n = e.getChildByName("propCornerItem"), r = e.getChildByName("propCornerItem").getChildByName("nodeVideo"), i = e.getChildByName("propCornerItem").getChildByName("nodeNum"), a = e.getChildByName("propCornerItem").getChildByName("nodeNum").getChildByName("labelNum");
            a.getComponent(cc.Label).fontSize = 32;
            a.color = new cc.Color(247, 222, 222);
            a.setPosition(0, 2);
            n.setPosition(50, 27);
            o.setContentSize(new cc.Size(0, 0));
            r.setContentSize(new cc.Size(0, 0));
            r.x = -10;
            i.setContentSize(new cc.Size(0, 0));
            BaseSprite_1.default.refreshWithNode(o, "textures/" + t, false, false, "l_propToUpRight");
            BaseSprite_1.default.refreshWithNode(r, "textures/gameplay_icon_ad", false, false, "l_propToUpRight");
            BaseSprite_1.default.refreshWithNode(i, "textures/gameplay_icon_time", false, false, "l_propToUpRight");
        }
    };
    PropToUpRightTrait.traitKey = "PropToUpRight";
    PropToUpRightTrait = __decorate([
        mj.trait,
        mj.class("PropToUpRightTrait")
    ], PropToUpRightTrait);
    return PropToUpRightTrait;
}(Trait_1.default));
exports.default = PropToUpRightTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BUb1VwUmlnaHQvU2NyaXB0cy9Qcm9wVG9VcFJpZ2h0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwyRUFBc0U7QUFHdEU7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBeURBLENBQUM7SUF2REMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDRDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcs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Q3BCLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDVixDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDaEYsb0JBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUM1RixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQXZETSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0F5RHRDO0lBQUQseUJBQUM7Q0F6REQsQUF5REMsQ0F6RCtDLGVBQUssR0F5RHBEO2tCQXpEb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUHJvcFRvVXBSaWdodFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wVG9VcFJpZ2h0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUHJvcFRvVXBSaWdodFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25HYW1lVUlfb25Mb2FkKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuaW5zO1xuICAgIGlmIChvICYmIGNjLmlzVmFsaWQoby5ub2RlKSkge1xuICAgICAgdmFyIG4gPSBvLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpLFxuICAgICAgICByID0gby5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUJvdHRvbVwiKSxcbiAgICAgICAgaSA9IG8uYnRuU2V0dGluZ3MucG9zaXRpb24sXG4gICAgICAgIGEgPSBuLndpZHRoLFxuICAgICAgICBjID0gbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoYSAvIDIsIDUpKSxcbiAgICAgICAgcCA9IHIuY29udmVydFRvTm9kZVNwYWNlQVIoYyk7XG4gICAgICBvLmJ0blNodWZmbGUuc2V0UG9zaXRpb24ocC54IC0gMTQwIC0gNzIsIHAueSk7XG4gICAgICBvLmJ0bkhpdFRpcHMuc2V0UG9zaXRpb24ocC54IC0gMjAgLSA3MiwgcC55KTtcbiAgICAgIHRoaXMuYWRqdXN0QnRuKG8uYnRuU2h1ZmZsZSwgXCJnYW1lcGxheV9pY29uX3JlZnJlc2hcIik7XG4gICAgICB0aGlzLmFkanVzdEJ0bihvLmJ0bkhpdFRpcHMsIFwiZ2FtZXBsYXlfaWNvbl9oaW50XCIpO1xuICAgICAgby5idG5TZXR0aW5ncy5zZXRQb3NpdGlvbigtaS54LCBpLnkpO1xuICAgICAgdmFyIHMgPSBvLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpLmdldENoaWxkQnlOYW1lKFwibGV2ZWxEZXNjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBzLmZvbnRTaXplID0gMzY7XG4gICAgICBzLm5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzIoLTMwNC44LCAzMy44Myk7XG4gICAgICB2YXIgbCA9IG8ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVUb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbExldmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBsLmZvbnRTaXplID0gMzY7XG4gICAgICBsLm5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgbC5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzIoLTMwNC45LCAtMTQuNik7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkdhbWVVSV9hZGFwdEx2KGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBhZGp1c3RCdG4oZSwgdCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICBlLnNldENvbnRlbnRTaXplKG5ldyBjYy5TaXplKDEwMywgMTAzKSk7XG4gICAgICB2YXIgbyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLFxuICAgICAgICBuID0gZS5nZXRDaGlsZEJ5TmFtZShcInByb3BDb3JuZXJJdGVtXCIpLFxuICAgICAgICByID0gZS5nZXRDaGlsZEJ5TmFtZShcInByb3BDb3JuZXJJdGVtXCIpLmdldENoaWxkQnlOYW1lKFwibm9kZVZpZGVvXCIpLFxuICAgICAgICBpID0gZS5nZXRDaGlsZEJ5TmFtZShcInByb3BDb3JuZXJJdGVtXCIpLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKSxcbiAgICAgICAgYSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9wQ29ybmVySXRlbVwiKS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVOdW1cIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbE51bVwiKTtcbiAgICAgIGEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDMyO1xuICAgICAgYS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNDcsIDIyMiwgMjIyKTtcbiAgICAgIGEuc2V0UG9zaXRpb24oMCwgMik7XG4gICAgICBuLnNldFBvc2l0aW9uKDUwLCAyNyk7XG4gICAgICBvLnNldENvbnRlbnRTaXplKG5ldyBjYy5TaXplKDAsIDApKTtcbiAgICAgIHIuc2V0Q29udGVudFNpemUobmV3IGNjLlNpemUoMCwgMCkpO1xuICAgICAgci54ID0gLTEwO1xuICAgICAgaS5zZXRDb250ZW50U2l6ZShuZXcgY2MuU2l6ZSgwLCAwKSk7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShvLCBcInRleHR1cmVzL1wiICsgdCwgZmFsc2UsIGZhbHNlLCBcImxfcHJvcFRvVXBSaWdodFwiKTtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHIsIFwidGV4dHVyZXMvZ2FtZXBsYXlfaWNvbl9hZFwiLCBmYWxzZSwgZmFsc2UsIFwibF9wcm9wVG9VcFJpZ2h0XCIpO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoaSwgXCJ0ZXh0dXJlcy9nYW1lcGxheV9pY29uX3RpbWVcIiwgZmFsc2UsIGZhbHNlLCBcImxfcHJvcFRvVXBSaWdodFwiKTtcbiAgICB9XG4gIH1cbn0iXX0=