
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2AniActionBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJBbmlBY3Rpb25CYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBRyxHQUFHLElBQUksQ0FBQztJQWdFYixDQUFDO0lBOURDLHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCxvQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELGlDQUFJLEdBQUosVUFBSyxDQUFDLEVBQUUsQ0FBQztRQUNQLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDRCxzQ0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELGlDQUFJLEdBQUo7UUFDRSxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsc0NBQVMsR0FBVCxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ1osSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQTlETSx3Q0FBcUIsR0FBRyxLQUFLLENBQUM7SUErRHZDLHlCQUFDO0NBbEVELEFBa0VDLElBQUE7QUFsRVksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbGUyQW5pQWN0aW9uQmFzZSB7XG4gIF9pc1BsYXlpbmcgPSBmYWxzZTtcbiAgX2NiID0gbnVsbDtcbiAgc3RhdGljIENPTlNUX1NIT1dfREVCVUdfSU5GTyA9IGZhbHNlO1xuICBnZXQgaXNQbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1BsYXlpbmc7XG4gIH1cbiAgX2ZpcmVDYigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2NiO1xuICAgIHRoaXMuX2NiID0gdm9pZCAwO1xuICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbiAgcGxheShlLCB0KSB7XG4gICAgaWYgKHRoaXMuX2lzUGxheWluZykge1xuICAgICAgdGhpcy5fbG9nKFwicGxheTogaW50ZXJydXB0IGN1cnJlbnQsIGZpcmUgb2xkIGNiXCIpO1xuICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgICB0aGlzLl9maXJlQ2IoKTtcbiAgICAgIGlmICh0aGlzLl9pc1BsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9nKFwicGxheTogcHJlZW1wdGVkIGJ5IHJlLWVudHJhbnQgY2FsbCwgZmlyZSBjYiBpbW1lZGlhdGVseVwiKTtcbiAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9sb2coXCJwbGF5OiBzdGFydFwiKTtcbiAgICB0aGlzLl9jYiA9IHQ7XG4gICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcbiAgICB0aGlzLm9uUGxheShlKTtcbiAgfVxuICBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuX2lzUGxheWluZykge1xuICAgICAgdGhpcy5fbG9nKFwiY2FuY2VsXCIpO1xuICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgICB0aGlzLl9maXJlQ2IoKTtcbiAgICB9XG4gIH1cbiAgaW50ZXJydXB0KCkge1xuICAgIGlmICh0aGlzLl9pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuX2xvZyhcImludGVycnVwdFwiKTtcbiAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkludGVycnVwdCgpO1xuICAgICAgdGhpcy5fZmlyZUNiKCk7XG4gICAgfVxuICB9XG4gIGZpbmlzaCgpIHtcbiAgICBpZiAodGhpcy5faXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLl9sb2coXCJmaW5pc2hcIik7XG4gICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpcmVDYigpO1xuICAgIH1cbiAgfVxuICBvbkludGVycnVwdCgpIHtcbiAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gIH1cbiAgX2xvZygpIHtcbiAgICBUaWxlMkFuaUFjdGlvbkJhc2UuQ09OU1RfU0hPV19ERUJVR19JTkZPO1xuICB9XG4gIF9yZXBhcmVudChlLCB0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZCh0KSAmJiBlLnBhcmVudCAhPT0gdCkge1xuICAgICAgdmFyIG8gPSBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXG4gICAgICAgIG4gPSB0LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgZS5wYXJlbnQgPSB0O1xuICAgICAgZS5zZXRQb3NpdGlvbihuLngsIG4ueSk7XG4gICAgfVxuICB9XG59Il19