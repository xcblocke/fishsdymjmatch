"use strict";
cc._RF.push(module, '4be63S0EiZOe4l+40h6HpUe', 'DynamicAccumComp');
// Scripts/core/simulator/component/DynamicAccumComp.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicAccumHandler = void 0;
var DynamicAccumHandler = /** @class */ (function () {
    function DynamicAccumHandler(e, t, o, n, i, r) {
        if (i === void 0) { i = null; }
        if (r === void 0) { r = null; }
        this.elapsedTime = 0;
        this.currentValue = 0;
        this.id = null;
        this.fromValue = null;
        this.toValue = null;
        this.duration = null;
        this.progressCallback = null;
        this.finishedCallback = null;
        this.id = e;
        this.fromValue = t;
        this.toValue = o;
        this.duration = n;
        this.progressCallback = i;
        this.finishedCallback = r;
    }
    DynamicAccumHandler.prototype.tick = function (e) {
        this.elapsedTime += e;
        var t = Math.min(this.elapsedTime / this.duration, 1);
        this.currentValue = this.fromValue + t * (this.toValue - this.fromValue);
        null !== this.progressCallback && this.progressCallback(this.currentValue, t);
        if (this.isCompleted() && null !== this.finishedCallback) {
            this.finishedCallback(this.toValue);
            this.finishedCallback = null;
        }
    };
    DynamicAccumHandler.prototype.isCompleted = function () {
        return this.elapsedTime >= this.duration;
    };
    DynamicAccumHandler.prototype.updateTargetValue = function (e) {
        this.toValue = e;
        this.elapsedTime = 0;
        this.fromValue = this.currentValue;
    };
    DynamicAccumHandler.prototype.getCurrentValue = function () {
        return this.currentValue;
    };
    return DynamicAccumHandler;
}());
exports.DynamicAccumHandler = DynamicAccumHandler;
var DynamicAccumComp = /** @class */ (function () {
    function DynamicAccumComp() {
        this.handlers = [];
    }
    DynamicAccumComp.prototype.create = function (t, o, i, r, a) {
        if (r === void 0) { r = null; }
        if (a === void 0) { a = null; }
        var l = DynamicAccumComp.nextId++, s = new DynamicAccumHandler(l, t, o, i, r, a);
        this.handlers.push(s);
        return s;
    };
    DynamicAccumComp.prototype.removeById = function (e) {
        var t = this.handlers.findIndex(function (t) {
            return t.id === e;
        });
        if (t > -1) {
            this.handlers.splice(t, 1);
            return true;
        }
        return false;
    };
    DynamicAccumComp.prototype.removeHandler = function (e) {
        return null !== e && this.removeById(e.id);
    };
    DynamicAccumComp.prototype.update = function (e) {
        if (0 !== this.handlers.length)
            for (var t = this.handlers.length - 1; t >= 0; t--) {
                var o = this.handlers[t];
                o.tick(e);
                o.isCompleted() && this.handlers.splice(t, 1);
            }
    };
    DynamicAccumComp.prototype.getActiveHandlerCount = function () {
        return this.handlers.length;
    };
    DynamicAccumComp.prototype.hasActiveHandlers = function () {
        return this.handlers.length > 0;
    };
    DynamicAccumComp.prototype.getHandlerById = function (e) {
        return this.handlers.find(function (t) {
            return t.id === e;
        }) || null;
    };
    DynamicAccumComp.prototype.clear = function () {
        this.handlers = [];
        DynamicAccumComp.nextId = 1;
    };
    DynamicAccumComp.nextId = 1;
    return DynamicAccumComp;
}());
exports.default = DynamicAccumComp;

cc._RF.pop();