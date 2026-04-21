
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/GameBehaviorsBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7235g9rLdDpoHWl2wzviI5', 'GameBehaviorsBase');
// Scripts/base/GameBehaviorsBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBehaviorsBase = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase = /** @class */ (function () {
    function GameBehaviorsBase() {
        this._behaviorId = "";
        this._timeout = 8000;
        this._context = null;
        this._data = null;
        this._cb = null;
    }
    Object.defineProperty(GameBehaviorsBase.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameBehaviorsBase.prototype, "behaviorId", {
        get: function () {
            return this._behaviorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameBehaviorsBase.prototype, "effect", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    GameBehaviorsBase.prototype.getTimeout = function () {
        return this._timeout;
    };
    GameBehaviorsBase.prototype.init = function (e, t) {
        this._context = e;
        t && (this._behaviorId = t);
    };
    GameBehaviorsBase.prototype.execute = function (e, t) {
        this._data = e;
        this._cb = t;
        this.start(e);
    };
    GameBehaviorsBase.prototype.finish = function (e) {
        if (e === void 0) { e = GameInputEnum_1.EBehaviorEnum.Success; }
        if (this._cb) {
            this._cb(e || GameInputEnum_1.EBehaviorEnum.Success);
            this._cb = null;
        }
    };
    GameBehaviorsBase.prototype.fail = function (e) {
        if (this._cb) {
            this._cb(GameInputEnum_1.EBehaviorEnum.Fail, e);
            this._cb = null;
        }
    };
    GameBehaviorsBase.prototype.dispose = function () { };
    GameBehaviorsBase.prototype.onAbort = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Abort);
    };
    GameBehaviorsBase.prototype.forceCleanup = function () {
        this._cb = null;
        this._data = null;
    };
    return GameBehaviorsBase;
}());
exports.GameBehaviorsBase = GameBehaviorsBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEU7SUFBQTtRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsUUFBRyxHQUFHLElBQUksQ0FBQztJQTBDYixDQUFDO0lBekNDLHNCQUFJLHNDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx5Q0FBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkscUNBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUNELHNDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELGdDQUFJLEdBQUosVUFBSyxDQUFDLEVBQUUsQ0FBQztRQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELG1DQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxrQ0FBTSxHQUFOLFVBQU8sQ0FBeUI7UUFBekIsa0JBQUEsRUFBQSxJQUFJLDZCQUFhLENBQUMsT0FBTztRQUM5QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUNELGdDQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0osSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNqQjtJQUNILENBQUM7SUFDRCxtQ0FBTyxHQUFQLGNBQVcsQ0FBQztJQUNaLG1DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHdDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBL0NZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5leHBvcnQgY2xhc3MgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfYmVoYXZpb3JJZCA9IFwiXCI7XG4gIF90aW1lb3V0ID0gODAwMDtcbiAgX2NvbnRleHQgPSBudWxsO1xuICBfZGF0YSA9IG51bGw7XG4gIF9jYiA9IG51bGw7XG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG4gIGdldCBiZWhhdmlvcklkKCkge1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvcklkO1xuICB9XG4gIGdldCBlZmZlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgZ2V0VGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgfVxuICBpbml0KGUsIHQpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gZTtcbiAgICB0ICYmICh0aGlzLl9iZWhhdmlvcklkID0gdCk7XG4gIH1cbiAgZXhlY3V0ZShlLCB0KSB7XG4gICAgdGhpcy5fZGF0YSA9IGU7XG4gICAgdGhpcy5fY2IgPSB0O1xuICAgIHRoaXMuc3RhcnQoZSk7XG4gIH1cbiAgZmluaXNoKGUgPSBFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpIHtcbiAgICBpZiAodGhpcy5fY2IpIHtcbiAgICAgIHRoaXMuX2NiKGUgfHwgRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIHRoaXMuX2NiID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZmFpbChlKSB7XG4gICAgaWYgKHRoaXMuX2NiKSB7XG4gICAgICB0aGlzLl9jYihFQmVoYXZpb3JFbnVtLkZhaWwsIGUpO1xuICAgICAgdGhpcy5fY2IgPSBudWxsO1xuICAgIH1cbiAgfVxuICBkaXNwb3NlKCkge31cbiAgb25BYm9ydCgpIHtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLkFib3J0KTtcbiAgfVxuICBmb3JjZUNsZWFudXAoKSB7XG4gICAgdGhpcy5fY2IgPSBudWxsO1xuICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICB9XG59Il19