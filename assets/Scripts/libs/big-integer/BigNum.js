var bigNum = function() {
"use strict";
var t = 1e7, e = 7, r = 9007199254740992, o = l(r), n = "0123456789abcdefghijklmnopqrstuvwxyz", i = "function" == typeof BigInt;
function u(t, e, r, o) {
return "undefined" == typeof t ? u[0] : "undefined" == typeof e || 10 == +e && !r ? tt(t) : H(t, e, r, o);
}
function p(t, e) {
this.value = t;
this.sign = e;
this.isSmall = !1;
}
p.prototype = Object.create(u.prototype);
function a(t) {
this.value = t;
this.sign = t < 0;
this.isSmall = !0;
}
a.prototype = Object.create(u.prototype);
function s(t) {
this.value = t;
}
s.prototype = Object.create(u.prototype);
function f(t) {
return -r < t && t < r;
}
function l(t) {
return t < 1e7 ? [ t ] : t < 1e14 ? [ t % 1e7, Math.floor(t / 1e7) ] : [ t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14) ];
}
function v(e) {
h(e);
var r = e.length;
if (r < 4 && x(e, o) < 0) switch (r) {
case 0:
return 0;

case 1:
return e[0];

case 2:
return e[0] + e[1] * t;

default:
return e[0] + (e[1] + e[2] * t) * t;
}
return e;
}
function h(t) {
for (var e = t.length; 0 === t[--e]; ) ;
t.length = e + 1;
}
function y(t) {
for (var e = new Array(t), r = -1; ++r < t; ) e[r] = 0;
return e;
}
function g(t) {
return t > 0 ? Math.floor(t) : Math.ceil(t);
}
function c(e, r) {
var o, n, i = e.length, u = r.length, p = new Array(i), a = 0, s = t;
for (n = 0; n < u; n++) {
a = (o = e[n] + r[n] + a) >= s ? 1 : 0;
p[n] = o - a * s;
}
for (;n < i; ) {
a = (o = e[n] + a) === s ? 1 : 0;
p[n++] = o - a * s;
}
a > 0 && p.push(a);
return p;
}
function m(t, e) {
return t.length >= e.length ? c(t, e) : c(e, t);
}
function d(e, r) {
var o, n, i = e.length, u = new Array(i), p = t;
for (n = 0; n < i; n++) {
o = e[n] - p + r;
r = Math.floor(o / p);
u[n] = o - r * p;
r += 1;
}
for (;r > 0; ) {
u[n++] = r % p;
r = Math.floor(r / p);
}
return u;
}
p.prototype.add = function(t) {
var e = tt(t);
if (this.sign !== e.sign) return this.subtract(e.negate());
var r = this.value, o = e.value;
return e.isSmall ? new p(d(r, Math.abs(o)), this.sign) : new p(m(r, o), this.sign);
};
p.prototype.plus = p.prototype.add;
a.prototype.add = function(t) {
var e = tt(t), r = this.value;
if (r < 0 !== e.sign) return this.subtract(e.negate());
var o = e.value;
if (e.isSmall) {
if (f(r + o)) return new a(r + o);
o = l(Math.abs(o));
}
return new p(d(o, Math.abs(r)), r < 0);
};
a.prototype.plus = a.prototype.add;
s.prototype.add = function(t) {
return new s(this.value + tt(t).value);
};
s.prototype.plus = s.prototype.add;
function b(e, r) {
var o, n, i = e.length, u = r.length, p = new Array(i), a = 0, s = t;
for (o = 0; o < u; o++) {
if ((n = e[o] - a - r[o]) < 0) {
n += s;
a = 1;
} else a = 0;
p[o] = n;
}
for (o = u; o < i; o++) {
if (!((n = e[o] - a) < 0)) {
p[o++] = n;
break;
}
n += s;
p[o] = n;
}
for (;o < i; o++) p[o] = e[o];
h(p);
return p;
}
function w(t, e, r) {
var o;
if (x(t, e) >= 0) o = b(t, e); else {
o = b(e, t);
r = !r;
}
if ("number" == typeof (o = v(o))) {
r && (o = -o);
return new a(o);
}
return new p(o, r);
}
function N(e, r, o) {
var n, i, u = e.length, s = new Array(u), f = -r, l = t;
for (n = 0; n < u; n++) {
i = e[n] + f;
f = Math.floor(i / l);
i %= l;
s[n] = i < 0 ? i + l : i;
}
if ("number" == typeof (s = v(s))) {
o && (s = -s);
return new a(s);
}
return new p(s, o);
}
p.prototype.subtract = function(t) {
var e = tt(t);
if (this.sign !== e.sign) return this.add(e.negate());
var r = this.value, o = e.value;
return e.isSmall ? N(r, Math.abs(o), this.sign) : w(r, o, this.sign);
};
p.prototype.minus = p.prototype.subtract;
a.prototype.subtract = function(t) {
var e = tt(t), r = this.value;
if (r < 0 !== e.sign) return this.add(e.negate());
var o = e.value;
return e.isSmall ? new a(r - o) : N(o, Math.abs(r), r >= 0);
};
a.prototype.minus = a.prototype.subtract;
s.prototype.subtract = function(t) {
return new s(this.value - tt(t).value);
};
s.prototype.minus = s.prototype.subtract;
p.prototype.negate = function() {
return new p(this.value, !this.sign);
};
a.prototype.negate = function() {
var t = this.sign, e = new a(-this.value);
e.sign = !t;
return e;
};
s.prototype.negate = function() {
return new s(-this.value);
};
p.prototype.abs = function() {
return new p(this.value, !1);
};
a.prototype.abs = function() {
return new a(Math.abs(this.value));
};
s.prototype.abs = function() {
return new s(this.value >= 0 ? this.value : -this.value);
};
function S(e, r) {
var o, n, i, u, p = e.length, a = r.length, s = y(p + a), f = t;
for (i = 0; i < p; ++i) {
u = e[i];
for (var l = 0; l < a; ++l) {
o = u * r[l] + s[i + l];
n = Math.floor(o / f);
s[i + l] = o - n * f;
s[i + l + 1] += n;
}
}
h(s);
return s;
}
function q(e, r) {
var o, n, i = e.length, u = new Array(i), p = t, a = 0;
for (n = 0; n < i; n++) {
o = e[n] * r + a;
a = Math.floor(o / p);
u[n] = o - a * p;
}
for (;a > 0; ) {
u[n++] = a % p;
a = Math.floor(a / p);
}
return u;
}
function M(t, e) {
for (var r = []; e-- > 0; ) r.push(0);
return r.concat(t);
}
function E(t, e) {
var r = Math.max(t.length, e.length);
if (r <= 30) return S(t, e);
r = Math.ceil(r / 2);
var o = t.slice(r), n = t.slice(0, r), i = e.slice(r), u = e.slice(0, r), p = E(n, u), a = E(o, i), s = E(m(n, o), m(u, i)), f = m(m(p, M(b(b(s, p), a), r)), M(a, 2 * r));
h(f);
return f;
}
p.prototype.multiply = function(e) {
var r, o, n, i = tt(e), a = this.value, s = i.value, f = this.sign !== i.sign;
if (i.isSmall) {
if (0 === s) return u[0];
if (1 === s) return this;
if (-1 === s) return this.negate();
if ((r = Math.abs(s)) < t) return new p(q(a, r), f);
s = l(r);
}
return new p(-.012 * (o = a.length) - .012 * (n = s.length) + 15e-6 * o * n > 0 ? E(a, s) : S(a, s), f);
};
p.prototype.times = p.prototype.multiply;
function I(e, r, o) {
return new p(e < t ? q(r, e) : S(r, l(e)), o);
}
a.prototype._multiplyBySmall = function(t) {
return f(t.value * this.value) ? new a(t.value * this.value) : I(Math.abs(t.value), l(Math.abs(this.value)), this.sign !== t.sign);
};
p.prototype._multiplyBySmall = function(t) {
return 0 === t.value ? u[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : I(Math.abs(t.value), this.value, this.sign !== t.sign);
};
a.prototype.multiply = function(t) {
return tt(t)._multiplyBySmall(this);
};
a.prototype.times = a.prototype.multiply;
s.prototype.multiply = function(t) {
return new s(this.value * tt(t).value);
};
s.prototype.times = s.prototype.multiply;
function O(e) {
var r, o, n, i, u = e.length, p = y(u + u), a = t;
for (n = 0; n < u; n++) {
o = 0 - (i = e[n]) * i;
for (var s = n; s < u; s++) {
r = i * e[s] * 2 + p[n + s] + o;
o = Math.floor(r / a);
p[n + s] = r - o * a;
}
p[n + u] = o;
}
h(p);
return p;
}
p.prototype.square = function() {
return new p(O(this.value), !1);
};
a.prototype.square = function() {
var t = this.value * this.value;
return f(t) ? new a(t) : new p(O(l(Math.abs(this.value))), !1);
};
s.prototype.square = function() {
return new s(this.value * this.value);
};
function B(e, r) {
var o, n, i, u, p, a, s, f = e.length, l = r.length, h = t, g = y(r.length), c = r[l - 1], m = Math.ceil(h / (2 * c)), d = q(e, m), b = q(r, m);
d.length <= f && d.push(0);
b.push(0);
c = b[l - 1];
for (n = f - l; n >= 0; n--) {
o = h - 1;
d[n + l] !== c && (o = Math.floor((d[n + l] * h + d[n + l - 1]) / c));
i = 0;
u = 0;
a = b.length;
for (p = 0; p < a; p++) {
i += o * b[p];
s = Math.floor(i / h);
u += d[n + p] - (i - s * h);
i = s;
if (u < 0) {
d[n + p] = u + h;
u = -1;
} else {
d[n + p] = u;
u = 0;
}
}
for (;0 !== u; ) {
o -= 1;
i = 0;
for (p = 0; p < a; p++) if ((i += d[n + p] - h + b[p]) < 0) {
d[n + p] = i + h;
i = 0;
} else {
d[n + p] = i;
i = 1;
}
u += i;
}
g[n] = o;
}
d = P(d, m)[0];
return [ v(g), v(d) ];
}
function A(e, r) {
for (var o, n, i, u, p, a = e.length, s = r.length, f = [], l = [], y = t; a; ) {
l.unshift(e[--a]);
h(l);
if (x(l, r) < 0) f.push(0); else {
i = l[(n = l.length) - 1] * y + l[n - 2];
u = r[s - 1] * y + r[s - 2];
n > s && (i = (i + 1) * y);
o = Math.ceil(i / u);
do {
if (x(p = q(r, o), l) <= 0) break;
o--;
} while (o);
f.push(o);
l = b(l, p);
}
}
f.reverse();
return [ v(f), v(l) ];
}
function P(e, r) {
var o, n, i, u, p = e.length, a = y(p), s = t;
i = 0;
for (o = p - 1; o >= 0; --o) {
i = (u = i * s + e[o]) - (n = g(u / r)) * r;
a[o] = 0 | n;
}
return [ a, 0 | i ];
}
function Z(e, r) {
var o, n = tt(r);
if (i) return [ new s(e.value / n.value), new s(e.value % n.value) ];
var f, h = e.value, y = n.value;
if (0 === y) throw new Error("Cannot divide by zero");
if (e.isSmall) return n.isSmall ? [ new a(g(h / y)), new a(h % y) ] : [ u[0], e ];
if (n.isSmall) {
if (1 === y) return [ e, u[0] ];
if (-1 == y) return [ e.negate(), u[0] ];
var c = Math.abs(y);
if (c < t) {
f = v((o = P(h, c))[0]);
var m = o[1];
e.sign && (m = -m);
if ("number" == typeof f) {
e.sign !== n.sign && (f = -f);
return [ new a(f), new a(m) ];
}
return [ new p(f, e.sign !== n.sign), new a(m) ];
}
y = l(c);
}
var d = x(h, y);
if (-1 === d) return [ u[0], e ];
if (0 === d) return [ u[e.sign === n.sign ? 1 : -1], u[0] ];
f = (o = h.length + y.length <= 200 ? B(h, y) : A(h, y))[0];
var b = e.sign !== n.sign, w = o[1], N = e.sign;
if ("number" == typeof f) {
b && (f = -f);
f = new a(f);
} else f = new p(f, b);
if ("number" == typeof w) {
N && (w = -w);
w = new a(w);
} else w = new p(w, N);
return [ f, w ];
}
p.prototype.divmod = function(t) {
var e = Z(this, t);
return {
quotient: e[0],
remainder: e[1]
};
};
s.prototype.divmod = a.prototype.divmod = p.prototype.divmod;
p.prototype.divide = function(t) {
return Z(this, t)[0];
};
s.prototype.over = s.prototype.divide = function(t) {
return new s(this.value / tt(t).value);
};
a.prototype.over = a.prototype.divide = p.prototype.over = p.prototype.divide;
p.prototype.mod = function(t) {
return Z(this, t)[1];
};
s.prototype.mod = s.prototype.remainder = function(t) {
return new s(this.value % tt(t).value);
};
a.prototype.remainder = a.prototype.mod = p.prototype.remainder = p.prototype.mod;
p.prototype.pow = function(t) {
var e, r, o, n = tt(t), i = this.value, p = n.value;
if (0 === p) return u[1];
if (0 === i) return u[0];
if (1 === i) return u[1];
if (-1 === i) return n.isEven() ? u[1] : u[-1];
if (n.sign) return u[0];
if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
if (this.isSmall && f(e = Math.pow(i, p))) return new a(g(e));
r = this;
o = u[1];
for (;;) {
if (!0 & p) {
o = o.times(r);
--p;
}
if (0 === p) break;
p /= 2;
r = r.square();
}
return o;
};
a.prototype.pow = p.prototype.pow;
s.prototype.pow = function(t) {
var e = tt(t), r = this.value, o = e.value, n = BigInt(0), i = BigInt(1), p = BigInt(2);
if (o === n) return u[1];
if (r === n) return u[0];
if (r === i) return u[1];
if (r === BigInt(-1)) return e.isEven() ? u[1] : u[-1];
if (e.isNegative()) return new s(n);
for (var a = this, f = u[1]; ;) {
if ((o & i) === i) {
f = f.times(a);
--o;
}
if (o === n) break;
o /= p;
a = a.square();
}
return f;
};
p.prototype.modPow = function(t, e) {
t = tt(t);
if ((e = tt(e)).isZero()) throw new Error("Cannot take modPow with modulus 0");
var r = u[1], o = this.mod(e);
if (t.isNegative()) {
t = t.multiply(u[-1]);
o = o.modInv(e);
}
for (;t.isPositive(); ) {
if (o.isZero()) return u[0];
t.isOdd() && (r = r.multiply(o).mod(e));
t = t.divide(2);
o = o.square().mod(e);
}
return r;
};
s.prototype.modPow = a.prototype.modPow = p.prototype.modPow;
function x(t, e) {
if (t.length !== e.length) return t.length > e.length ? 1 : -1;
for (var r = t.length - 1; r >= 0; r--) if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
return 0;
}
p.prototype.compareAbs = function(t) {
var e = tt(t), r = this.value, o = e.value;
return e.isSmall ? 1 : x(r, o);
};
a.prototype.compareAbs = function(t) {
var e = tt(t), r = Math.abs(this.value), o = e.value;
return e.isSmall ? r === (o = Math.abs(o)) ? 0 : r > o ? 1 : -1 : -1;
};
s.prototype.compareAbs = function(t) {
var e = this.value, r = tt(t).value;
return (e = e >= 0 ? e : -e) === (r = r >= 0 ? r : -r) ? 0 : e > r ? 1 : -1;
};
p.prototype.compare = function(t) {
if (Infinity === t) return -1;
if (-Infinity === t) return 1;
var e = tt(t), r = this.value, o = e.value;
return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : x(r, o) * (this.sign ? -1 : 1);
};
p.prototype.compareTo = p.prototype.compare;
a.prototype.compare = function(t) {
if (Infinity === t) return -1;
if (-Infinity === t) return 1;
var e = tt(t), r = this.value, o = e.value;
return e.isSmall ? r == o ? 0 : r > o ? 1 : -1 : r < 0 !== e.sign ? r < 0 ? -1 : 1 : r < 0 ? 1 : -1;
};
a.prototype.compareTo = a.prototype.compare;
s.prototype.compare = function(t) {
if (Infinity === t) return -1;
if (-Infinity === t) return 1;
var e = this.value, r = tt(t).value;
return e === r ? 0 : e > r ? 1 : -1;
};
s.prototype.compareTo = s.prototype.compare;
p.prototype.equals = function(t) {
return 0 === this.compare(t);
};
s.prototype.eq = s.prototype.equals = a.prototype.eq = a.prototype.equals = p.prototype.eq = p.prototype.equals;
p.prototype.notEquals = function(t) {
return 0 !== this.compare(t);
};
s.prototype.neq = s.prototype.notEquals = a.prototype.neq = a.prototype.notEquals = p.prototype.neq = p.prototype.notEquals;
p.prototype.greater = function(t) {
return this.compare(t) > 0;
};
s.prototype.gt = s.prototype.greater = a.prototype.gt = a.prototype.greater = p.prototype.gt = p.prototype.greater;
p.prototype.lesser = function(t) {
return this.compare(t) < 0;
};
s.prototype.lt = s.prototype.lesser = a.prototype.lt = a.prototype.lesser = p.prototype.lt = p.prototype.lesser;
p.prototype.greaterOrEquals = function(t) {
return this.compare(t) >= 0;
};
s.prototype.geq = s.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals = p.prototype.geq = p.prototype.greaterOrEquals;
p.prototype.lesserOrEquals = function(t) {
return this.compare(t) <= 0;
};
s.prototype.leq = s.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals = p.prototype.leq = p.prototype.lesserOrEquals;
p.prototype.isEven = function() {
return 0 == (1 & this.value[0]);
};
a.prototype.isEven = function() {
return 0 == (1 & this.value);
};
s.prototype.isEven = function() {
return (this.value & BigInt(1)) === BigInt(0);
};
p.prototype.isOdd = function() {
return 1 == (1 & this.value[0]);
};
a.prototype.isOdd = function() {
return 1 == (1 & this.value);
};
s.prototype.isOdd = function() {
return (this.value & BigInt(1)) === BigInt(1);
};
p.prototype.isPositive = function() {
return !this.sign;
};
a.prototype.isPositive = function() {
return this.value > 0;
};
s.prototype.isPositive = a.prototype.isPositive;
p.prototype.isNegative = function() {
return this.sign;
};
a.prototype.isNegative = function() {
return this.value < 0;
};
s.prototype.isNegative = a.prototype.isNegative;
p.prototype.isUnit = function() {
return !1;
};
a.prototype.isUnit = function() {
return 1 === Math.abs(this.value);
};
s.prototype.isUnit = function() {
return this.abs().value === BigInt(1);
};
p.prototype.isZero = function() {
return !1;
};
a.prototype.isZero = function() {
return 0 === this.value;
};
s.prototype.isZero = function() {
return this.value === BigInt(0);
};
p.prototype.isDivisibleBy = function(t) {
var e = tt(t);
return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()));
};
s.prototype.isDivisibleBy = a.prototype.isDivisibleBy = p.prototype.isDivisibleBy;
function J(t) {
var e = t.abs();
return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0));
}
function L(t, e) {
for (var r, o, n, i = t.prev(), u = i, p = 0; u.isEven(); ) u = u.divide(2), p++;
t: for (o = 0; o < e.length; o++) if (!t.lesser(e[o]) && !(n = bigNum(e[o]).modPow(u, t)).isUnit() && !n.equals(i)) {
for (r = p - 1; 0 != r; r--) {
if ((n = n.square().mod(t)).isUnit()) return !1;
if (n.equals(i)) continue t;
}
return !1;
}
return !0;
}
p.prototype.isPrime = function(t) {
var e = J(this);
if (void 0 !== e) return e;
var r = this.abs(), o = r.bitLength();
if (o <= 64) return L(r, [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
for (var n = Math.log(2) * o.toJSNumber(), i = Math.ceil(!0 === t ? 2 * Math.pow(n, 2) : n), u = [], p = 0; p < i; p++) u.push(bigNum(p + 2));
return L(r, u);
};
s.prototype.isPrime = a.prototype.isPrime = p.prototype.isPrime;
p.prototype.isProbablePrime = function(t, e) {
var r = J(this);
if (void 0 !== r) return r;
for (var o = this.abs(), n = void 0 === t ? 5 : t, i = [], u = 0; u < n; u++) i.push(bigNum.randBetween(2, o.minus(2), e));
return L(o, i);
};
s.prototype.isProbablePrime = a.prototype.isProbablePrime = p.prototype.isProbablePrime;
p.prototype.modInv = function(t) {
for (var e, r, o, n = bigNum.zero, i = bigNum.one, u = tt(t), p = this.abs(); !p.isZero(); ) {
e = u.divide(p);
r = n;
o = u;
n = i;
u = p;
i = r.subtract(e.multiply(i));
p = o.subtract(e.multiply(p));
}
if (!u.isUnit()) throw new Error(this.toString() + " and " + t.toString() + " are not co-prime");
-1 === n.compare(0) && (n = n.add(t));
return this.isNegative() ? n.negate() : n;
};
s.prototype.modInv = a.prototype.modInv = p.prototype.modInv;
p.prototype.next = function() {
var t = this.value;
return this.sign ? N(t, 1, this.sign) : new p(d(t, 1), this.sign);
};
a.prototype.next = function() {
var t = this.value;
return t + 1 < r ? new a(t + 1) : new p(o, !1);
};
s.prototype.next = function() {
return new s(this.value + BigInt(1));
};
p.prototype.prev = function() {
var t = this.value;
return this.sign ? new p(d(t, 1), !0) : N(t, 1, this.sign);
};
a.prototype.prev = function() {
var t = this.value;
return t - 1 > -r ? new a(t - 1) : new p(o, !0);
};
s.prototype.prev = function() {
return new s(this.value - BigInt(1));
};
for (var U = [ 1 ]; 2 * U[U.length - 1] <= t; ) U.push(2 * U[U.length - 1]);
var T = U.length, j = U[T - 1];
function k(e) {
return Math.abs(e) <= t;
}
p.prototype.shiftLeft = function(t) {
var e = tt(t).toJSNumber();
if (!k(e)) throw new Error(String(e) + " is too large for shifting.");
if (e < 0) return this.shiftRight(-e);
var r = this;
if (r.isZero()) return r;
for (;e >= T; ) {
r = r.multiply(j);
e -= T - 1;
}
return r.multiply(U[e]);
};
s.prototype.shiftLeft = a.prototype.shiftLeft = p.prototype.shiftLeft;
p.prototype.shiftRight = function(t) {
var e, r = tt(t).toJSNumber();
if (!k(r)) throw new Error(String(r) + " is too large for shifting.");
if (r < 0) return this.shiftLeft(-r);
for (var o = this; r >= T; ) {
if (o.isZero() || o.isNegative() && o.isUnit()) return o;
o = (e = Z(o, j))[1].isNegative() ? e[0].prev() : e[0];
r -= T - 1;
}
return (e = Z(o, U[r]))[1].isNegative() ? e[0].prev() : e[0];
};
s.prototype.shiftRight = a.prototype.shiftRight = p.prototype.shiftRight;
function C(t, e, r) {
e = tt(e);
for (var o = t.isNegative(), n = e.isNegative(), i = o ? t.not() : t, u = n ? e.not() : e, p = 0, a = 0, s = null, f = null, l = []; !i.isZero() || !u.isZero(); ) {
p = (s = Z(i, j))[1].toJSNumber();
o && (p = j - 1 - p);
a = (f = Z(u, j))[1].toJSNumber();
n && (a = j - 1 - a);
i = s[0];
u = f[0];
l.push(r(p, a));
}
for (var v = 0 !== r(o ? 1 : 0, n ? 1 : 0) ? bigNum(-1) : bigNum(0), h = l.length - 1; h >= 0; h -= 1) v = v.multiply(j).add(bigNum(l[h]));
return v;
}
p.prototype.not = function() {
return this.negate().prev();
};
s.prototype.not = a.prototype.not = p.prototype.not;
p.prototype.and = function(t) {
return C(this, t, function(t, e) {
return t & e;
});
};
s.prototype.and = a.prototype.and = p.prototype.and;
p.prototype.or = function(t) {
return C(this, t, function(t, e) {
return t | e;
});
};
s.prototype.or = a.prototype.or = p.prototype.or;
p.prototype.xor = function(t) {
return C(this, t, function(t, e) {
return t ^ e;
});
};
s.prototype.xor = a.prototype.xor = p.prototype.xor;
var D = 1 << 30, z = (t & -t) * (t & -t) | D;
function R(e) {
var r = e.value, o = "number" == typeof r ? r | D : "bigint" == typeof r ? r | BigInt(D) : r[0] + r[1] * t | z;
return o & -o;
}
function _(t, e) {
if (e.compareTo(t) <= 0) {
var r = _(t, e.square(e)), o = r.p, n = r.e, i = o.multiply(e);
return i.compareTo(t) <= 0 ? {
p: i,
e: 2 * n + 1
} : {
p: o,
e: 2 * n
};
}
return {
p: bigNum(1),
e: 0
};
}
p.prototype.bitLength = function() {
var t = this;
t.compareTo(bigNum(0)) < 0 && (t = t.negate().subtract(bigNum(1)));
return 0 === t.compareTo(bigNum(0)) ? bigNum(0) : bigNum(_(t, bigNum(2)).e).add(bigNum(1));
};
s.prototype.bitLength = a.prototype.bitLength = p.prototype.bitLength;
function $(t, e) {
t = tt(t);
e = tt(e);
return t.greater(e) ? t : e;
}
function F(t, e) {
t = tt(t);
e = tt(e);
return t.lesser(e) ? t : e;
}
function G(t, e) {
t = tt(t).abs();
e = tt(e).abs();
if (t.equals(e)) return t;
if (t.isZero()) return e;
if (e.isZero()) return t;
for (var r, o, n = u[1]; t.isEven() && e.isEven(); ) {
r = F(R(t), R(e));
t = t.divide(r);
e = e.divide(r);
n = n.multiply(r);
}
for (;t.isEven(); ) t = t.divide(R(t));
do {
for (;e.isEven(); ) e = e.divide(R(e));
if (t.greater(e)) {
o = e;
e = t;
t = o;
}
e = e.subtract(t);
} while (!e.isZero());
return n.isUnit() ? t : t.multiply(n);
}
var H = function(t, e, r, o) {
r = r || n;
t = String(t);
if (!o) {
t = t.toLowerCase();
r = r.toLowerCase();
}
var i, u = t.length, p = Math.abs(e), a = {};
for (i = 0; i < r.length; i++) a[r[i]] = i;
for (i = 0; i < u; i++) if ("-" !== (l = t[i]) && l in a && a[l] >= p) {
if ("1" === l && 1 === p) continue;
throw new Error(l + " is not a valid digit in base " + e + ".");
}
e = tt(e);
var s = [], f = "-" === t[0];
for (i = f ? 1 : 0; i < t.length; i++) {
var l;
if ((l = t[i]) in a) s.push(tt(a[l])); else {
if ("<" !== l) throw new Error(l + " is not a valid character");
var v = i;
do {
i++;
} while (">" !== t[i] && i < t.length);
s.push(tt(t.slice(v + 1, i)));
}
}
return K(s, e, f);
};
function K(t, e, r) {
var o, n = u[0], i = u[1];
for (o = t.length - 1; o >= 0; o--) {
n = n.add(t[o].times(i));
i = i.times(e);
}
return r ? n.negate() : n;
}
function Q(t, e) {
return t < (e = e || n).length ? e[t] : "<" + t + ">";
}
function V(t, e) {
if ((e = bigNum(e)).isZero()) {
if (t.isZero()) return {
value: [ 0 ],
isNegative: !1
};
throw new Error("Cannot convert nonzero numbers to base 0.");
}
if (e.equals(-1)) {
if (t.isZero()) return {
value: [ 0 ],
isNegative: !1
};
if (t.isNegative()) return {
value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [ 1, 0 ])),
isNegative: !1
};
var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [ 0, 1 ]);
r.unshift([ 1 ]);
return {
value: [].concat.apply([], r),
isNegative: !1
};
}
var o = !1;
if (t.isNegative() && e.isPositive()) {
o = !0;
t = t.abs();
}
if (e.isUnit()) return t.isZero() ? {
value: [ 0 ],
isNegative: !1
} : {
value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
isNegative: o
};
for (var n, i = [], u = t; u.isNegative() || u.compareAbs(e) >= 0; ) {
n = u.divmod(e);
u = n.quotient;
var p = n.remainder;
if (p.isNegative()) {
p = e.minus(p).abs();
u = u.next();
}
i.push(p.toJSNumber());
}
i.push(u.toJSNumber());
return {
value: i.reverse(),
isNegative: o
};
}
function W(t, e, r) {
var o = V(t, e);
return (o.isNegative ? "-" : "") + o.value.map(function(t) {
return Q(t, r);
}).join("");
}
p.prototype.toArray = function(t) {
return V(this, t);
};
a.prototype.toArray = function(t) {
return V(this, t);
};
s.prototype.toArray = function(t) {
return V(this, t);
};
p.prototype.toString = function(t, e) {
void 0 === t && (t = 10);
if (10 !== t || e) return W(this, t, e);
for (var r, o = this.value, n = o.length, i = String(o[--n]); --n >= 0; ) {
r = String(o[n]);
i += "0000000".slice(r.length) + r;
}
return (this.sign ? "-" : "") + i;
};
a.prototype.toString = function(t, e) {
void 0 === t && (t = 10);
return 10 != t || e ? W(this, t, e) : String(this.value);
};
s.prototype.toString = a.prototype.toString;
s.prototype.toJSON = p.prototype.toJSON = a.prototype.toJSON = function() {
return this.toString();
};
p.prototype.valueOf = function() {
return parseInt(this.toString(), 10);
};
p.prototype.toJSNumber = p.prototype.valueOf;
a.prototype.valueOf = function() {
return this.value;
};
a.prototype.toJSNumber = a.prototype.valueOf;
s.prototype.valueOf = s.prototype.toJSNumber = function() {
return parseInt(this.toString(), 10);
};
function X(t) {
if (f(+t)) {
var r = +t;
if (r === g(r)) return i ? new s(BigInt(r)) : new a(r);
throw new Error("Invalid integer: " + t);
}
var o = "-" === t[0];
o && (t = t.slice(1));
var n = t.split(/e/i);
if (n.length > 2) throw new Error("Invalid integer: " + n.join("e"));
if (2 === n.length) {
var u = n[1];
"+" === u[0] && (u = u.slice(1));
if ((u = +u) !== g(u) || !f(u)) throw new Error("Invalid integer: " + u + " is not a valid exponent.");
var l = n[0], v = l.indexOf(".");
if (v >= 0) {
u -= l.length - v - 1;
l = l.slice(0, v) + l.slice(v + 1);
}
if (u < 0) throw new Error("Cannot include negative exponent part for integers");
t = l += new Array(u + 1).join("0");
}
if (!/^([0-9][0-9]*)$/.test(t)) throw new Error("Invalid integer: " + t);
if (i) return new s(BigInt(o ? "-" + t : t));
for (var y = [], c = t.length, m = e, d = c - m; c > 0; ) {
y.push(+t.slice(d, c));
(d -= m) < 0 && (d = 0);
c -= m;
}
h(y);
return new p(y, o);
}
function Y(t) {
if (i) return new s(BigInt(t));
if (f(t)) {
if (t !== g(t)) throw new Error(t + " is not an integer.");
return new a(t);
}
return X(t.toString());
}
function tt(t) {
return "number" == typeof t ? Y(t) : "string" == typeof t ? X(t) : "bigint" == typeof t ? new s(t) : t;
}
for (var et = 0; et < 1e3; et++) {
u[et] = tt(et);
et > 0 && (u[-et] = tt(-et));
}
u.one = u[1];
u.zero = u[0];
u.minusOne = u[-1];
u.max = $;
u.min = F;
u.gcd = G;
u.lcm = function(t, e) {
t = tt(t).abs();
e = tt(e).abs();
return t.divide(G(t, e)).multiply(e);
};
u.isInstance = function(t) {
return t instanceof p || t instanceof a || t instanceof s;
};
u.randBetween = function(e, r, o) {
e = tt(e);
r = tt(r);
var n = o || Math.random, i = F(e, r), p = $(e, r).subtract(i).add(1);
if (p.isSmall) return i.add(Math.floor(n() * p));
for (var a = V(p, t).value, s = [], f = !0, l = 0; l < a.length; l++) {
var v = f ? a[l] + (l + 1 < a.length ? a[l + 1] / t : 0) : t, h = g(n() * v);
s.push(h);
h < a[l] && (f = !1);
}
return i.add(u.fromArray(s, t, !1));
};
u.fromArray = function(t, e, r) {
return K(t.map(tt), tt(e || 10), r);
};
return u;
}();

"undefined" != typeof module && module.hasOwnProperty("exports") && (module.exports = bigNum);

"function" == typeof define && define.amd && define(function() {
return bigNum;
});

window.bigNum = bigNum;