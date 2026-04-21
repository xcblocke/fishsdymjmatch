"use strict";
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