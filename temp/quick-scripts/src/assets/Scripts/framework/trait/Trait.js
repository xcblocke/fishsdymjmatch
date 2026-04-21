"use strict";
cc._RF.push(module, 'b8b2cHReQVC76XX2kOCRb8H', 'Trait');
// Scripts/framework/trait/Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../data/Model");
var ResManager_1 = require("../manager/ResManager");
var Trait = /** @class */ (function (_super) {
    __extends(Trait, _super);
    function Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eventEnabled = false;
        _this._pendingEvents = null;
        _this._initEventTriggered = false;
        return _this;
    }
    Object.defineProperty(Trait.prototype, "traitData", {
        get: function () {
            return this._traitData;
        },
        enumerable: false,
        configurable: true
    });
    Trait.prototype.__init = function (e) {
        var t = this;
        if (!this._traitData) {
            this._traitData = e;
            this._tm = cc.js.getClassByName("TraitManager").getInstance();
            var o = function o() {
                t._traitData.onlyDownload || t.onLoad();
            };
            if (this._traitData.bundle) {
                this.prepare(function (e, t) {
                    if (t) {
                        var n = "Failed to load bundle " + e + ": " + t;
                        -3 != t.cause && console.error(n);
                    }
                    else
                        o();
                });
            }
            else {
                o();
            }
        }
    };
    Trait.prototype.prepare = function (e) {
        if (ResManager_1.resManager.isRemoteBundle(this._traitData.bundle)) {
            this._tm.preloadAllRes(this._traitData.bundle, e);
        }
        else {
            e();
        }
    };
    Trait.prototype.onLoad = function () {
        this.eventEnabled = true;
        this.initEvent();
    };
    Trait.prototype.initEvent = function () {
        var e = this._traitData.events;
        if (e && 0 !== e.length) {
            var t = e.filter(function (e) {
                return e.isPre;
            });
            if (1 === t.length) {
                this._pendingEvents = e.filter(function (e) {
                    return !e.isPre;
                });
                this._initEventTriggered = false;
                this.registerEvent(t);
            }
            else
                this.registerEvent(e);
        }
    };
    Trait.prototype._registerPendingEvents = function () {
        if (!this._initEventTriggered && this._pendingEvents && 0 !== this._pendingEvents.length) {
            this._initEventTriggered = true;
            this.registerEvent(this._pendingEvents);
            this._pendingEvents = null;
        }
    };
    Trait.prototype.registerEvent = function (e) {
        var t, o;
        new Set();
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                var r = i.value, l = r.type, s = r.event, c = r.priority, u = r.isPre, p = this["on" + s];
                if (c) {
                    c += c < 0 ? -1000 : 1000;
                }
                else {
                    c = this._tm.getTraitIndex(this._traitData);
                }
                l = l || TraitEventPositionType.befor;
                if (p) {
                    u && (p = this._wrapPreEventCallback(p));
                    this._tm.registerEvent(s, c, p, l, this);
                }
                else if (this.onDefCallback) {
                    var f = this.onDefCallback;
                    u && (f = this._wrapPreEventCallback(f));
                    this._tm.registerEvent(s, c, f, l, this);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    Trait.prototype._wrapPreEventCallback = function (e) {
        var t = this;
        return function (o, n) {
            t._registerPendingEvents();
            e.call(t, o, n);
        };
    };
    Trait.traitKey = "";
    Trait.nextTimeOut = 5;
    Trait = __decorate([
        mj.class("Trait")
    ], Trait);
    return Trait;
}(Model_1.default));
exports.default = Trait;

cc._RF.pop();