"use strict";
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