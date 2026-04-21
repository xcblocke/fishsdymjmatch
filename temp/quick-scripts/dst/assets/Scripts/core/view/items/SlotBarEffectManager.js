
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/items/SlotBarEffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88e507NAYZME6QPzOlc4S9w', 'SlotBarEffectManager');
// Scripts/core/view/items/SlotBarEffectManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../../../gamePlay/base/ui/BaseSpine");
var SlotBarEffectManager = /** @class */ (function () {
    function SlotBarEffectManager(e, t) {
        this._currentLevel = 0;
        this._spineUpper = null;
        this._spineLower = null;
        this._nodeBgEffect = null;
        this._nodeTop = null;
        this._upperNode = null;
        this._lowerNode = null;
        this._nodeBgEffect = e;
        this._nodeTop = t;
        this.createSpineNodes();
    }
    Object.defineProperty(SlotBarEffectManager.prototype, "currentLevel", {
        get: function () {
            return this._currentLevel;
        },
        enumerable: false,
        configurable: true
    });
    SlotBarEffectManager.prototype.createSpineNodes = function () {
        this._upperNode = this.createNode("slotUpper", this._nodeTop, 0);
        this._lowerNode = this.createNode("slotLower", this._nodeBgEffect, 0);
        this._spineUpper = BaseSpine_1.default.refreshWithNode(this._upperNode, "spine/tile2Combo/gameplay_combo_groove_a");
        this._spineLower = BaseSpine_1.default.refreshWithNode(this._lowerNode, "spine/tile2Combo/gameplay_combo_groove_b");
        this.hideAll();
    };
    SlotBarEffectManager.prototype.createNode = function (e, t, o) {
        var n = new cc.Node(e);
        n.parent = t;
        n.zIndex = o;
        n.setPosition(cc.v3(0, 0, 0));
        return n;
    };
    SlotBarEffectManager.prototype.hideAll = function () {
        this._upperNode && (this._upperNode.active = false);
        this._lowerNode && (this._lowerNode.active = false);
    };
    SlotBarEffectManager.prototype.showAll = function () {
        this._upperNode && (this._upperNode.active = true);
        this._lowerNode && (this._lowerNode.active = true);
    };
    SlotBarEffectManager.prototype.advanceToLevel = function (e) {
        var t = this;
        if (!(e <= 0 || e > 5 || e <= this._currentLevel)) {
            this._currentLevel = e;
            this.showAll();
            this._spineUpper.setAnimation("in_" + e, 1, function () {
                cc.isValid(t._upperNode) && (t._upperNode.active = false);
            });
            this._spineLower.setAnimation("idle_" + e, -1);
        }
    };
    SlotBarEffectManager.prototype.initToLevel = function (e) {
        if (!(e <= 0 || e > 5)) {
            this._currentLevel = e;
            this._lowerNode && (this._lowerNode.active = true);
            this._upperNode && (this._upperNode.active = false);
            this._spineLower.setAnimation("idle_" + e, -1);
        }
    };
    SlotBarEffectManager.prototype.reset = function () {
        this._currentLevel = 0;
        this.hideAll();
        var e = function e(e) {
            if (e) {
                var t = e.getSkeleton();
                t && t.clearTracks();
            }
        };
        e(this._spineUpper);
        e(this._spineLower);
    };
    return SlotBarEffectManager;
}());
exports.default = SlotBarEffectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9pdGVtcy9TbG90QmFyRWZmZWN0TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVEO0lBV0UsOEJBQVksQ0FBQyxFQUFFLENBQUM7UUFWaEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFLaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQVBELHNCQUFJLDhDQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBTUQsK0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsMENBQTBDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsMENBQTBDLENBQUMs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QjtRQUNILENBQUMsQ0FBQztRQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90QmFyRWZmZWN0TWFuYWdlciB7XG4gIF9jdXJyZW50TGV2ZWwgPSAwO1xuICBfc3BpbmVVcHBlciA9IG51bGw7XG4gIF9zcGluZUxvd2VyID0gbnVsbDtcbiAgX25vZGVCZ0VmZmVjdCA9IG51bGw7XG4gIF9ub2RlVG9wID0gbnVsbDtcbiAgX3VwcGVyTm9kZSA9IG51bGw7XG4gIF9sb3dlck5vZGUgPSBudWxsO1xuICBnZXQgY3VycmVudExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGV2ZWw7XG4gIH1cbiAgY29uc3RydWN0b3IoZSwgdCkge1xuICAgIHRoaXMuX25vZGVCZ0VmZmVjdCA9IGU7XG4gICAgdGhpcy5fbm9kZVRvcCA9IHQ7XG4gICAgdGhpcy5jcmVhdGVTcGluZU5vZGVzKCk7XG4gIH1cbiAgY3JlYXRlU3BpbmVOb2RlcygpIHtcbiAgICB0aGlzLl91cHBlck5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoXCJzbG90VXBwZXJcIiwgdGhpcy5fbm9kZVRvcCwgMCk7XG4gICAgdGhpcy5fbG93ZXJOb2RlID0gdGhpcy5jcmVhdGVOb2RlKFwic2xvdExvd2VyXCIsIHRoaXMuX25vZGVCZ0VmZmVjdCwgMCk7XG4gICAgdGhpcy5fc3BpbmVVcHBlciA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fdXBwZXJOb2RlLCBcInNwaW5lL3RpbGUyQ29tYm8vZ2FtZXBsYXlfY29tYm9fZ3Jvb3ZlX2FcIik7XG4gICAgdGhpcy5fc3BpbmVMb3dlciA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fbG93ZXJOb2RlLCBcInNwaW5lL3RpbGUyQ29tYm8vZ2FtZXBsYXlfY29tYm9fZ3Jvb3ZlX2JcIik7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gIH1cbiAgY3JlYXRlTm9kZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBuZXcgY2MuTm9kZShlKTtcbiAgICBuLnBhcmVudCA9IHQ7XG4gICAgbi56SW5kZXggPSBvO1xuICAgIG4uc2V0UG9zaXRpb24oY2MudjMoMCwgMCwgMCkpO1xuICAgIHJldHVybiBuO1xuICB9XG4gIGhpZGVBbGwoKSB7XG4gICAgdGhpcy5fdXBwZXJOb2RlICYmICh0aGlzLl91cHBlck5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuX2xvd2VyTm9kZSAmJiAodGhpcy5fbG93ZXJOb2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfVxuICBzaG93QWxsKCkge1xuICAgIHRoaXMuX3VwcGVyTm9kZSAmJiAodGhpcy5fdXBwZXJOb2RlLmFjdGl2ZSA9IHRydWUpO1xuICAgIHRoaXMuX2xvd2VyTm9kZSAmJiAodGhpcy5fbG93ZXJOb2RlLmFjdGl2ZSA9IHRydWUpO1xuICB9XG4gIGFkdmFuY2VUb0xldmVsKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKCEoZSA8PSAwIHx8IGUgPiA1IHx8IGUgPD0gdGhpcy5fY3VycmVudExldmVsKSkge1xuICAgICAgdGhpcy5fY3VycmVudExldmVsID0gZTtcbiAgICAgIHRoaXMuc2hvd0FsbCgpO1xuICAgICAgdGhpcy5fc3BpbmVVcHBlci5zZXRBbmltYXRpb24oXCJpbl9cIiArIGUsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZCh0Ll91cHBlck5vZGUpICYmICh0Ll91cHBlck5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zcGluZUxvd2VyLnNldEFuaW1hdGlvbihcImlkbGVfXCIgKyBlLCAtMSk7XG4gICAgfVxuICB9XG4gIGluaXRUb0xldmVsKGUpIHtcbiAgICBpZiAoIShlIDw9IDAgfHwgZSA+IDUpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50TGV2ZWwgPSBlO1xuICAgICAgdGhpcy5fbG93ZXJOb2RlICYmICh0aGlzLl9sb3dlck5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB0aGlzLl91cHBlck5vZGUgJiYgKHRoaXMuX3VwcGVyTm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB0aGlzLl9zcGluZUxvd2VyLnNldEFuaW1hdGlvbihcImlkbGVfXCIgKyBlLCAtMSk7XG4gICAgfVxuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2N1cnJlbnRMZXZlbCA9IDA7XG4gICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgdmFyIGUgPSBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciB0ID0gZS5nZXRTa2VsZXRvbigpO1xuICAgICAgICB0ICYmIHQuY2xlYXJUcmFja3MoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGUodGhpcy5fc3BpbmVVcHBlcik7XG4gICAgZSh0aGlzLl9zcGluZUxvd2VyKTtcbiAgfVxufSJdfQ==