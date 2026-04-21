"use strict";
cc._RF.push(module, '05608r5ObZHu4ovXb7gf9mm', 'Tile2AniActionBase');
// Scripts/base/Tile2AniActionBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2AniActionBase = void 0;
var Tile2AniActionBase = /** @class */ (function () {
    function Tile2AniActionBase() {
        this._isPlaying = false;
        this._cb = null;
    }
    Object.defineProperty(Tile2AniActionBase.prototype, "isPlaying", {
        get: function () {
            return this._isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    Tile2AniActionBase.prototype._fireCb = function () {
        var e = this._cb;
        this._cb = void 0;
        null == e || e();
    };
    Tile2AniActionBase.prototype.play = function (e, t) {
        if (this._isPlaying) {
            this._log("play: interrupt current, fire old cb");
            this._isPlaying = false;
            this.onCancel();
            this._fireCb();
            if (this._isPlaying) {
                this._log("play: preempted by re-entrant call, fire cb immediately");
                null == t || t();
                return;
            }
        }
        this._log("play: start");
        this._cb = t;
        this._isPlaying = true;
        this.onPlay(e);
    };
    Tile2AniActionBase.prototype.cancel = function () {
        if (this._isPlaying) {
            this._log("cancel");
            this._isPlaying = false;
            this.onCancel();
            this._fireCb();
        }
    };
    Tile2AniActionBase.prototype.interrupt = function () {
        if (this._isPlaying) {
            this._log("interrupt");
            this._isPlaying = false;
            this.onInterrupt();
            this._fireCb();
        }
    };
    Tile2AniActionBase.prototype.finish = function () {
        if (this._isPlaying) {
            this._log("finish");
            this._isPlaying = false;
            this._fireCb();
        }
    };
    Tile2AniActionBase.prototype.onInterrupt = function () {
        this.onCancel();
    };
    Tile2AniActionBase.prototype._log = function () {
        Tile2AniActionBase.CONST_SHOW_DEBUG_INFO;
    };
    Tile2AniActionBase.prototype._reparent = function (e, t) {
        if (cc.isValid(e) && cc.isValid(t) && e.parent !== t) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
            e.parent = t;
            e.setPosition(n.x, n.y);
        }
    };
    Tile2AniActionBase.CONST_SHOW_DEBUG_INFO = false;
    return Tile2AniActionBase;
}());
exports.Tile2AniActionBase = Tile2AniActionBase;

cc._RF.pop();