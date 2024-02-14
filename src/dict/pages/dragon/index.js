/*! For license information please see main.939cd96f.js.LICENSE.txt */
!(function () {
	var e = {
			463: function (e, t, n) {
				var r = n(791),
					a = n(296);
				function o(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
				}
				var i = new Set(),
					l = {};
				function u(e, t) {
					s(e, t), s(e + "Capture", t);
				}
				function s(e, t) {
					for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
				}
				var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
					f = Object.prototype.hasOwnProperty,
					d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					h = {};
				function g(e, t, n, r, a, o, i) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = a), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o), (this.removeEmptyString = i);
				}
				var m = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
					m[e] = new g(e, 0, !1, e, null, !1, !1);
				}),
					[
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
					].forEach(function (e) {
						var t = e[0];
						m[t] = new g(t, 1, !1, e[1], null, !1, !1);
					}),
					["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
						m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
					}),
					["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
						m[e] = new g(e, 2, !1, e, null, !1, !1);
					}),
					"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
						m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
					}),
					["checked", "multiple", "muted", "selected"].forEach(function (e) {
						m[e] = new g(e, 3, !0, e, null, !1, !1);
					}),
					["capture", "download"].forEach(function (e) {
						m[e] = new g(e, 4, !1, e, null, !1, !1);
					}),
					["cols", "rows", "size", "span"].forEach(function (e) {
						m[e] = new g(e, 6, !1, e, null, !1, !1);
					}),
					["rowSpan", "start"].forEach(function (e) {
						m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var v = /[\-:]([a-z])/g;
				function y(e) {
					return e[1].toUpperCase();
				}
				function b(e, t, n, r) {
					var a = m.hasOwnProperty(t) ? m[t] : null;
					(null !== a ? 0 !== a.type : r || !(2 < t.length) || ("o" !== t[0] && "O" !== t[0]) || ("n" !== t[1] && "N" !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								"undefined" === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case "function":
										case "symbol":
											return !0;
										case "boolean":
											return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, a, r) && (n = null),
						r || null === a
							? (function (e) {
									return !!f.call(h, e) || (!f.call(p, e) && (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)));
							  })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
							: a.mustUseProperty
							? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
							: ((t = a.attributeName), (r = a.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(v, y);
						m[t] = new g(t, 1, !1, e, null, !1, !1);
					}),
					"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
						var t = e.replace(v, y);
						m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
					}),
					["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
						var t = e.replace(v, y);
						m[t] = new g(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
					}),
					["tabIndex", "crossOrigin"].forEach(function (e) {
						m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(m.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
					["src", "href", "action", "formAction"].forEach(function (e) {
						m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					w = Symbol.for("react.element"),
					S = Symbol.for("react.portal"),
					x = Symbol.for("react.fragment"),
					O = Symbol.for("react.strict_mode"),
					E = Symbol.for("react.profiler"),
					C = Symbol.for("react.provider"),
					P = Symbol.for("react.context"),
					N = Symbol.for("react.forward_ref"),
					L = Symbol.for("react.suspense"),
					_ = Symbol.for("react.suspense_list"),
					R = Symbol.for("react.memo"),
					j = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var T = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var z = Symbol.iterator;
				function F(e) {
					return null === e || "object" !== typeof e ? null : "function" === typeof (e = (z && e[z]) || e["@@iterator"]) ? e : null;
				}
				var D,
					I = Object.assign;
				function M(e) {
					if (void 0 === D)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							D = (t && t[1]) || "";
						}
					return "\n" + D + e;
				}
				var A = !1;
				function U(e, t) {
					if (!e || A) return "";
					A = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								"object" === typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (s) {
									var r = s;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (s) {
									r = s;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (s) {
								r = s;
							}
							e();
						}
					} catch (s) {
						if (s && r && "string" === typeof s.stack) {
							for (var a = s.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l]; ) l--;
							for (; 1 <= i && 0 <= l; i--, l--)
								if (a[i] !== o[l]) {
									if (1 !== i || 1 !== l)
										do {
											if ((i--, 0 > --l || a[i] !== o[l])) {
												var u = "\n" + a[i].replace(" at new ", " at ");
												return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
											}
										} while (1 <= i && 0 <= l);
									break;
								}
						}
					} finally {
						(A = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : "") ? M(e) : "";
				}
				function V(e) {
					switch (e.tag) {
						case 5:
							return M(e.type);
						case 16:
							return M("Lazy");
						case 13:
							return M("Suspense");
						case 19:
							return M("SuspenseList");
						case 0:
						case 2:
						case 15:
							return (e = U(e.type, !1));
						case 11:
							return (e = U(e.type.render, !1));
						case 1:
							return (e = U(e.type, !0));
						default:
							return "";
					}
				}
				function B(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case x:
							return "Fragment";
						case S:
							return "Portal";
						case E:
							return "Profiler";
						case O:
							return "StrictMode";
						case L:
							return "Suspense";
						case _:
							return "SuspenseList";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case P:
								return (e.displayName || "Context") + ".Consumer";
							case C:
								return (e._context.displayName || "Context") + ".Provider";
							case N:
								var t = e.render;
								return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
							case R:
								return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
							case j:
								(t = e._payload), (e = e._init);
								try {
									return B(e(t));
								} catch (n) {}
						}
					return null;
				}
				function W(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return (e = (e = t.render).displayName || e.name || ""), t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return B(t);
						case 8:
							return t === O ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" === typeof t) return t.displayName || t.name || null;
							if ("string" === typeof t) return t;
					}
					return null;
				}
				function H(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function $(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
				}
				function K(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = $(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = "" + e[t];
							if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
								var a = n.get,
									o = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = "" + e), o.call(this, e);
										},
									}),
									Object.defineProperty(e, t, {enumerable: n.enumerable}),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function Q(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return e && (r = $(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
				}
				function q(e) {
					if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function G(e, t) {
					var n = t.checked;
					return I({}, t, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked});
				}
				function J(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = H(null != t.value ? t.value : n)), (e._wrapperState = {initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value});
				}
				function Y(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1);
				}
				function X(e, t) {
					Y(e, t);
					var n = H(t.value),
						r = t.type;
					if (null != n) "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
				}
				function Z(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
						(t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
					}
					"" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
				}
				function ee(e, t, n) {
					("number" === t && q(e.ownerDocument) === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++) (a = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return I({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue});
				}
				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ""), (n = t);
					}
					e._wrapperState = {initialValue: H(n)};
				}
				function oe(e, t) {
					var n = H(t.value),
						r = H(t.defaultValue);
					null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
				}
				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
				}
				function le(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml";
					}
				}
				function ue(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
				}
				var se,
					ce,
					fe =
						((ce = function (e, t) {
							if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
							else {
								for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						"undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ce(e, t);
									});
							  }
							: ce);
				function de(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var pe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					he = ["Webkit", "ms", "Moz", "O"];
				function ge(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e]) ? ("" + t).trim() : t + "px";
				}
				function me(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								a = ge(n, t[n], r);
							"float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
						}
				}
				Object.keys(pe).forEach(function (e) {
					he.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
					});
				});
				var ve = I({menuitem: !0}, {area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0});
				function ye(e, t) {
					if (t) {
						if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
						}
						if (null != t.style && "object" !== typeof t.style) throw Error(o(62));
					}
				}
				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var ke = null;
				function we(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
				}
				var Se = null,
					xe = null,
					Oe = null;
				function Ee(e) {
					if ((e = ba(e))) {
						if ("function" !== typeof Se) throw Error(o(280));
						var t = e.stateNode;
						t && ((t = wa(t)), Se(e.stateNode, e.type, t));
					}
				}
				function Ce(e) {
					xe ? (Oe ? Oe.push(e) : (Oe = [e])) : (xe = e);
				}
				function Pe() {
					if (xe) {
						var e = xe,
							t = Oe;
						if (((Oe = xe = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
					}
				}
				function Ne(e, t) {
					return e(t);
				}
				function Le() {}
				var _e = !1;
				function Re(e, t, n) {
					if (_e) return e(t, n);
					_e = !0;
					try {
						return Ne(e, t, n);
					} finally {
						(_e = !1), (null !== xe || null !== Oe) && (Le(), Pe());
					}
				}
				function je(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = wa(n);
					if (null === r) return null;
					n = r[t];
					switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
							break;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
					return n;
				}
				var Te = !1;
				if (c)
					try {
						var ze = {};
						Object.defineProperty(ze, "passive", {
							get: function () {
								Te = !0;
							},
						}),
							window.addEventListener("test", ze, ze),
							window.removeEventListener("test", ze, ze);
					} catch (ce) {
						Te = !1;
					}
				function Fe(e, t, n, r, a, o, i, l, u) {
					var s = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, s);
					} catch (c) {
						this.onError(c);
					}
				}
				var De = !1,
					Ie = null,
					Me = !1,
					Ae = null,
					Ue = {
						onError: function (e) {
							(De = !0), (Ie = e);
						},
					};
				function Ve(e, t, n, r, a, o, i, l, u) {
					(De = !1), (Ie = null), Fe.apply(Ue, arguments);
				}
				function Be(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function We(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
					}
					return null;
				}
				function He(e) {
					if (Be(e) !== e) throw Error(o(188));
				}
				function $e(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = Be(e))) throw Error(o(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var i = a.alternate;
								if (null === i) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === i.child) {
									for (i = a.child; i; ) {
										if (i === n) return He(a), e;
										if (i === r) return He(a), t;
										i = i.sibling;
									}
									throw Error(o(188));
								}
								if (n.return !== r.return) (n = a), (r = i);
								else {
									for (var l = !1, u = a.child; u; ) {
										if (u === n) {
											(l = !0), (n = a), (r = i);
											break;
										}
										if (u === r) {
											(l = !0), (r = a), (n = i);
											break;
										}
										u = u.sibling;
									}
									if (!l) {
										for (u = i.child; u; ) {
											if (u === n) {
												(l = !0), (n = i), (r = a);
												break;
											}
											if (u === r) {
												(l = !0), (r = i), (n = a);
												break;
											}
											u = u.sibling;
										}
										if (!l) throw Error(o(189));
									}
								}
								if (n.alternate !== r) throw Error(o(190));
							}
							if (3 !== n.tag) throw Error(o(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? Ke(e)
						: null;
				}
				function Ke(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = Ke(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Qe = a.unstable_scheduleCallback,
					qe = a.unstable_cancelCallback,
					Ge = a.unstable_shouldYield,
					Je = a.unstable_requestPaint,
					Ye = a.unstable_now,
					Xe = a.unstable_getCurrentPriorityLevel,
					Ze = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					ot = null;
				var it = Math.clz32
						? Math.clz32
						: function (e) {
								return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
						  },
					lt = Math.log,
					ut = Math.LN2;
				var st = 64,
					ct = 4194304;
				function ft(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function dt(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						o = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var l = i & ~a;
						0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
					} else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
					if (0 === r) return 0;
					if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))) return t;
					if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))) for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
					return r;
				}
				function pt(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function ht(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
				}
				function gt() {
					var e = st;
					return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
				}
				function mt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function vt(e, t, n) {
					(e.pendingLanes |= t), 536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), ((e = e.eventTimes)[(t = 31 - it(t))] = n);
				}
				function yt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - it(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				var bt = 0;
				function kt(e) {
					return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
				}
				var wt,
					St,
					xt,
					Ot,
					Et,
					Ct = !1,
					Pt = [],
					Nt = null,
					Lt = null,
					_t = null,
					Rt = new Map(),
					jt = new Map(),
					Tt = [],
					zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
				function Ft(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Nt = null;
							break;
						case "dragenter":
						case "dragleave":
							Lt = null;
							break;
						case "mouseover":
						case "mouseout":
							_t = null;
							break;
						case "pointerover":
						case "pointerout":
							Rt.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							jt.delete(t.pointerId);
					}
				}
				function Dt(e, t, n, r, a, o) {
					return null === e || e.nativeEvent !== o ? ((e = {blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a]}), null !== t && null !== (t = ba(t)) && St(t), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
				}
				function It(e) {
					var t = ya(e.target);
					if (null !== t) {
						var n = Be(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = We(n)))
									return (
										(e.blockedOn = t),
										void Et(e.priority, function () {
											xt(n);
										})
									);
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function Mt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = ba(n)) && St(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(ke = r), n.target.dispatchEvent(r), (ke = null), t.shift();
					}
					return !0;
				}
				function At(e, t, n) {
					Mt(e) && n.delete(t);
				}
				function Ut() {
					(Ct = !1), null !== Nt && Mt(Nt) && (Nt = null), null !== Lt && Mt(Lt) && (Lt = null), null !== _t && Mt(_t) && (_t = null), Rt.forEach(At), jt.forEach(At);
				}
				function Vt(e, t) {
					e.blockedOn === t && ((e.blockedOn = null), Ct || ((Ct = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
				}
				function Bt(e) {
					function t(t) {
						return Vt(t, e);
					}
					if (0 < Pt.length) {
						Vt(Pt[0], e);
						for (var n = 1; n < Pt.length; n++) {
							var r = Pt[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (null !== Nt && Vt(Nt, e), null !== Lt && Vt(Lt, e), null !== _t && Vt(_t, e), Rt.forEach(t), jt.forEach(t), n = 0; n < Tt.length; n++) (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; ) It(n), null === n.blockedOn && Tt.shift();
				}
				var Wt = k.ReactCurrentBatchConfig,
					Ht = !0;
				function $t(e, t, n, r) {
					var a = bt,
						o = Wt.transition;
					Wt.transition = null;
					try {
						(bt = 1), Qt(e, t, n, r);
					} finally {
						(bt = a), (Wt.transition = o);
					}
				}
				function Kt(e, t, n, r) {
					var a = bt,
						o = Wt.transition;
					Wt.transition = null;
					try {
						(bt = 4), Qt(e, t, n, r);
					} finally {
						(bt = a), (Wt.transition = o);
					}
				}
				function Qt(e, t, n, r) {
					if (Ht) {
						var a = Gt(e, t, n, r);
						if (null === a) Hr(e, t, r, qt, n), Ft(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return (Nt = Dt(Nt, e, t, n, r, a)), !0;
									case "dragenter":
										return (Lt = Dt(Lt, e, t, n, r, a)), !0;
									case "mouseover":
										return (_t = Dt(_t, e, t, n, r, a)), !0;
									case "pointerover":
										var o = a.pointerId;
										return Rt.set(o, Dt(Rt.get(o) || null, e, t, n, r, a)), !0;
									case "gotpointercapture":
										return (o = a.pointerId), jt.set(o, Dt(jt.get(o) || null, e, t, n, r, a)), !0;
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((Ft(e, r), 4 & t && -1 < zt.indexOf(e))) {
							for (; null !== a; ) {
								var o = ba(a);
								if ((null !== o && wt(o), null === (o = Gt(e, t, n, r)) && Hr(e, t, r, qt, n), o === a)) break;
								a = o;
							}
							null !== a && r.stopPropagation();
						} else Hr(e, t, r, null, n);
					}
				}
				var qt = null;
				function Gt(e, t, n, r) {
					if (((qt = null), null !== (e = ya((e = we(r))))))
						if (null === (t = Be(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = We(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (qt = e), null;
				}
				function Jt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Xe()) {
								case Ze:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Yt = null,
					Xt = null,
					Zt = null;
				function en() {
					if (Zt) return Zt;
					var e,
						t,
						n = Xt,
						r = n.length,
						a = "value" in Yt ? Yt.value : Yt.textContent,
						o = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
					return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function an(e) {
					function t(t, n, r, a, o) {
						for (var i in ((this._reactName = t), (this._targetInst = r), (this.type = n), (this.nativeEvent = a), (this.target = o), (this.currentTarget = null), e)) e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
						return (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn), (this.isPropagationStopped = rn), this;
					}
					return (
						I(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var on,
					ln,
					un,
					sn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					cn = an(sn),
					fn = I({}, sn, {view: 0, detail: 0}),
					dn = an(fn),
					pn = I({}, fn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: En,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? ((on = e.screenX - un.screenX), (ln = e.screenY - un.screenY)) : (ln = on = 0), (un = e)), on);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : ln;
						},
					}),
					hn = an(pn),
					gn = an(I({}, pn, {dataTransfer: 0})),
					mn = an(I({}, fn, {relatedTarget: 0})),
					vn = an(I({}, sn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})),
					yn = I({}, sn, {
						clipboardData: function (e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData;
						},
					}),
					bn = an(yn),
					kn = an(I({}, sn, {data: 0})),
					wn = {Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified"},
					Sn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					xn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
				function On(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e];
				}
				function En() {
					return On;
				}
				var Cn = I({}, fn, {
						key: function (e) {
							if (e.key) {
								var t = wn[e.key] || e.key;
								if ("Unidentified" !== t) return t;
							}
							return "keypress" === e.type ? (13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : "";
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: En,
						charCode: function (e) {
							return "keypress" === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
					}),
					Pn = an(Cn),
					Nn = an(I({}, pn, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0})),
					Ln = an(I({}, fn, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: En})),
					_n = an(I({}, sn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})),
					Rn = I({}, pn, {
						deltaX: function (e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
						},
						deltaY: function (e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					jn = an(Rn),
					Tn = [9, 13, 27, 32],
					zn = c && "CompositionEvent" in window,
					Fn = null;
				c && "documentMode" in document && (Fn = document.documentMode);
				var Dn = c && "TextEvent" in window && !Fn,
					In = c && (!zn || (Fn && 8 < Fn && 11 >= Fn)),
					Mn = String.fromCharCode(32),
					An = !1;
				function Un(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Tn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Vn(e) {
					return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
				}
				var Bn = !1;
				var Wn = {color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0};
				function Hn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Wn[e.type] : "textarea" === t;
				}
				function $n(e, t, n, r) {
					Ce(r), 0 < (t = Kr(t, "onChange")).length && ((n = new cn("onChange", "change", null, n, r)), e.push({event: n, listeners: t}));
				}
				var Kn = null,
					Qn = null;
				function qn(e) {
					Mr(e, 0);
				}
				function Gn(e) {
					if (Q(ka(e))) return e;
				}
				function Jn(e, t) {
					if ("change" === e) return t;
				}
				var Yn = !1;
				if (c) {
					var Xn;
					if (c) {
						var Zn = "oninput" in document;
						if (!Zn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"), (Zn = "function" === typeof er.oninput);
						}
						Xn = Zn;
					} else Xn = !1;
					Yn = Xn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					Kn && (Kn.detachEvent("onpropertychange", nr), (Qn = Kn = null));
				}
				function nr(e) {
					if ("value" === e.propertyName && Gn(Qn)) {
						var t = [];
						$n(t, Qn, e, we(e)), Re(qn, t);
					}
				}
				function rr(e, t, n) {
					"focusin" === e ? (tr(), (Qn = n), (Kn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr();
				}
				function ar(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(Qn);
				}
				function or(e, t) {
					if ("click" === e) return Gn(t);
				}
				function ir(e, t) {
					if ("input" === e || "change" === e) return Gn(t);
				}
				var lr =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
						  };
				function ur(e, t) {
					if (lr(e, t)) return !0;
					if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
					}
					return !0;
				}
				function sr(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function cr(e, t) {
					var n,
						r = sr(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t)) return {node: r, offset: t - e};
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = sr(r);
					}
				}
				function fr(e, t) {
					return !(!e || !t) && (e === t || ((!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))));
				}
				function dr() {
					for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = "string" === typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = q((e = t.contentWindow).document);
					}
					return t;
				}
				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
				}
				function hr(e) {
					var t = dr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
						if (null !== r && pr(n))
							if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
							else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
								e = e.getSelection();
								var a = n.textContent.length,
									o = Math.min(r.start, a);
								(r = void 0 === r.end ? o : Math.min(r.end, a)), !e.extend && o > r && ((a = r), (r = o), (o = a)), (a = cr(n, o));
								var i = cr(n, r);
								a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); ) 1 === e.nodeType && t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
						for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++) ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
					}
				}
				var gr = c && "documentMode" in document && 11 >= document.documentMode,
					mr = null,
					vr = null,
					yr = null,
					br = !1;
				function kr(e, t, n) {
					var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					br ||
						null == mr ||
						mr !== q(r) ||
						("selectionStart" in (r = mr) && pr(r) ? (r = {start: r.selectionStart, end: r.selectionEnd}) : (r = {anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset}),
						(yr && ur(yr, r)) || ((yr = r), 0 < (r = Kr(vr, "onSelect")).length && ((t = new cn("onSelect", "select", null, t, n)), e.push({event: t, listeners: r}), (t.target = mr))));
				}
				function wr(e, t) {
					var n = {};
					return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
				}
				var Sr = {animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd")},
					xr = {},
					Or = {};
				function Er(e) {
					if (xr[e]) return xr[e];
					if (!Sr[e]) return e;
					var t,
						n = Sr[e];
					for (t in n) if (n.hasOwnProperty(t) && t in Or) return (xr[e] = n[t]);
					return e;
				}
				c && ((Or = document.createElement("div").style), "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
				var Cr = Er("animationend"),
					Pr = Er("animationiteration"),
					Nr = Er("animationstart"),
					Lr = Er("transitionend"),
					_r = new Map(),
					Rr =
						"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
							" ",
						);
				function jr(e, t) {
					_r.set(e, t), u(t, [e]);
				}
				for (var Tr = 0; Tr < Rr.length; Tr++) {
					var zr = Rr[Tr];
					jr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
				}
				jr(Cr, "onAnimationEnd"),
					jr(Pr, "onAnimationIteration"),
					jr(Nr, "onAnimationStart"),
					jr("dblclick", "onDoubleClick"),
					jr("focusin", "onFocus"),
					jr("focusout", "onBlur"),
					jr(Lr, "onTransitionEnd"),
					s("onMouseEnter", ["mouseout", "mouseover"]),
					s("onMouseLeave", ["mouseout", "mouseover"]),
					s("onPointerEnter", ["pointerout", "pointerover"]),
					s("onPointerLeave", ["pointerout", "pointerover"]),
					u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
					u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
					u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
					u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
					u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
					u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
				function Ir(e, t, n) {
					var r = e.type || "unknown-event";
					(e.currentTarget = n),
						(function (e, t, n, r, a, i, l, u, s) {
							if ((Ve.apply(this, arguments), De)) {
								if (!De) throw Error(o(198));
								var c = Ie;
								(De = !1), (Ie = null), Me || ((Me = !0), (Ae = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Mr(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var l = r[i],
										u = l.instance,
										s = l.currentTarget;
									if (((l = l.listener), u !== o && a.isPropagationStopped())) break e;
									Ir(a, l, s), (o = u);
								}
							else
								for (i = 0; i < r.length; i++) {
									if (((u = (l = r[i]).instance), (s = l.currentTarget), (l = l.listener), u !== o && a.isPropagationStopped())) break e;
									Ir(a, l, s), (o = u);
								}
						}
					}
					if (Me) throw ((e = Ae), (Me = !1), (Ae = null), e);
				}
				function Ar(e, t) {
					var n = t[ga];
					void 0 === n && (n = t[ga] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Wr(t, e, 2, !1), n.add(r));
				}
				function Ur(e, t, n) {
					var r = 0;
					t && (r |= 4), Wr(n, e, r, t);
				}
				var Vr = "_reactListening" + Math.random().toString(36).slice(2);
				function Br(e) {
					if (!e[Vr]) {
						(e[Vr] = !0),
							i.forEach(function (t) {
								"selectionchange" !== t && (Dr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Vr] || ((t[Vr] = !0), Ur("selectionchange", !1, t));
					}
				}
				function Wr(e, t, n, r) {
					switch (Jt(t)) {
						case 1:
							var a = $t;
							break;
						case 4:
							a = Kt;
							break;
						default:
							a = Qt;
					}
					(n = a.bind(null, t, n, e)), (a = void 0), !Te || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0), r ? (void 0 !== a ? e.addEventListener(t, n, {capture: !0, passive: a}) : e.addEventListener(t, n, !0)) : void 0 !== a ? e.addEventListener(t, n, {passive: a}) : e.addEventListener(t, n, !1);
				}
				function Hr(e, t, n, r, a) {
					var o = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var i = r.tag;
							if (3 === i || 4 === i) {
								var l = r.stateNode.containerInfo;
								if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
								if (4 === i)
									for (i = r.return; null !== i; ) {
										var u = i.tag;
										if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === a || (8 === u.nodeType && u.parentNode === a))) return;
										i = i.return;
									}
								for (; null !== l; ) {
									if (null === (i = ya(l))) return;
									if (5 === (u = i.tag) || 6 === u) {
										r = o = i;
										continue e;
									}
									l = l.parentNode;
								}
							}
							r = r.return;
						}
					Re(function () {
						var r = o,
							a = we(n),
							i = [];
						e: {
							var l = _r.get(e);
							if (void 0 !== l) {
								var u = cn,
									s = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										u = Pn;
										break;
									case "focusin":
										(s = "focus"), (u = mn);
										break;
									case "focusout":
										(s = "blur"), (u = mn);
										break;
									case "beforeblur":
									case "afterblur":
										u = mn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										u = hn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										u = gn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										u = Ln;
										break;
									case Cr:
									case Pr:
									case Nr:
										u = vn;
										break;
									case Lr:
										u = _n;
										break;
									case "scroll":
										u = dn;
										break;
									case "wheel":
										u = jn;
										break;
									case "copy":
									case "cut":
									case "paste":
										u = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										u = Nn;
								}
								var c = 0 !== (4 & t),
									f = !c && "scroll" === e,
									d = c ? (null !== l ? l + "Capture" : null) : l;
								c = [];
								for (var p, h = r; null !== h; ) {
									var g = (p = h).stateNode;
									if ((5 === p.tag && null !== g && ((p = g), null !== d && null != (g = je(h, d)) && c.push($r(h, g, p))), f)) break;
									h = h.return;
								}
								0 < c.length && ((l = new u(l, s, null, n, a)), i.push({event: l, listeners: c}));
							}
						}
						if (0 === (7 & t)) {
							if (
								((u = "mouseout" === e || "pointerout" === e),
								(!(l = "mouseover" === e || "pointerover" === e) || n === ke || !(s = n.relatedTarget || n.fromElement) || (!ya(s) && !s[ha])) &&
									(u || l) &&
									((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window), u ? ((u = r), null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) && (s = null)) : ((u = null), (s = r)), u !== s))
							) {
								if (
									((c = hn),
									(g = "onMouseLeave"),
									(d = "onMouseEnter"),
									(h = "mouse"),
									("pointerout" !== e && "pointerover" !== e) || ((c = Nn), (g = "onPointerLeave"), (d = "onPointerEnter"), (h = "pointer")),
									(f = null == u ? l : ka(u)),
									(p = null == s ? l : ka(s)),
									((l = new c(g, h + "leave", u, n, a)).target = f),
									(l.relatedTarget = p),
									(g = null),
									ya(a) === r && (((c = new c(d, h + "enter", s, n, a)).target = p), (c.relatedTarget = f), (g = c)),
									(f = g),
									u && s)
								)
									e: {
										for (d = s, h = 0, p = c = u; p; p = Qr(p)) h++;
										for (p = 0, g = d; g; g = Qr(g)) p++;
										for (; 0 < h - p; ) (c = Qr(c)), h--;
										for (; 0 < p - h; ) (d = Qr(d)), p--;
										for (; h--; ) {
											if (c === d || (null !== d && c === d.alternate)) break e;
											(c = Qr(c)), (d = Qr(d));
										}
										c = null;
									}
								else c = null;
								null !== u && qr(i, l, u, c, !1), null !== s && null !== f && qr(i, f, s, c, !0);
							}
							if ("select" === (u = (l = r ? ka(r) : window).nodeName && l.nodeName.toLowerCase()) || ("input" === u && "file" === l.type)) var m = Jn;
							else if (Hn(l))
								if (Yn) m = ir;
								else {
									m = ar;
									var v = rr;
								}
							else (u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (m = or);
							switch ((m && (m = m(e, r)) ? $n(i, m, n, a) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && ee(l, "number", l.value)), (v = r ? ka(r) : window), e)) {
								case "focusin":
									(Hn(v) || "true" === v.contentEditable) && ((mr = v), (vr = r), (yr = null));
									break;
								case "focusout":
									yr = vr = mr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(br = !1), kr(i, n, a);
									break;
								case "selectionchange":
									if (gr) break;
								case "keydown":
								case "keyup":
									kr(i, n, a);
							}
							var y;
							if (zn)
								e: {
									switch (e) {
										case "compositionstart":
											var b = "onCompositionStart";
											break e;
										case "compositionend":
											b = "onCompositionEnd";
											break e;
										case "compositionupdate":
											b = "onCompositionUpdate";
											break e;
									}
									b = void 0;
								}
							else Bn ? Un(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
							b && (In && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (y = en()) : ((Xt = "value" in (Yt = a) ? Yt.value : Yt.textContent), (Bn = !0))), 0 < (v = Kr(r, b)).length && ((b = new kn(b, e, null, n, a)), i.push({event: b, listeners: v}), y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
								(y = Dn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Vn(t);
												case "keypress":
													return 32 !== t.which ? null : ((An = !0), Mn);
												case "textInput":
													return (e = t.data) === Mn && An ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Bn) return "compositionend" === e || (!zn && Un(e, t)) ? ((e = en()), (Zt = Xt = Yt = null), (Bn = !1), e) : null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return In && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (r = Kr(r, "onBeforeInput")).length &&
									((a = new kn("onBeforeInput", "beforeinput", null, n, a)), i.push({event: a, listeners: r}), (a.data = y));
						}
						Mr(i, t);
					});
				}
				function $r(e, t, n) {
					return {instance: e, listener: t, currentTarget: n};
				}
				function Kr(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var a = e,
							o = a.stateNode;
						5 === a.tag && null !== o && ((a = o), null != (o = je(e, n)) && r.unshift($r(e, o, a)), null != (o = je(e, t)) && r.push($r(e, o, a))), (e = e.return);
					}
					return r;
				}
				function Qr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function qr(e, t, n, r, a) {
					for (var o = t._reactName, i = []; null !== n && n !== r; ) {
						var l = n,
							u = l.alternate,
							s = l.stateNode;
						if (null !== u && u === r) break;
						5 === l.tag && null !== s && ((l = s), a ? null != (u = je(n, o)) && i.unshift($r(n, u, l)) : a || (null != (u = je(n, o)) && i.push($r(n, u, l)))), (n = n.return);
					}
					0 !== i.length && e.push({event: t, listeners: i});
				}
				var Gr = /\r\n?/g,
					Jr = /\u0000|\uFFFD/g;
				function Yr(e) {
					return ("string" === typeof e ? e : "" + e).replace(Gr, "\n").replace(Jr, "");
				}
				function Xr(e, t, n) {
					if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(o(425));
				}
				function Zr() {}
				var ea = null,
					ta = null;
				function na(e, t) {
					return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || ("object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html);
				}
				var ra = "function" === typeof setTimeout ? setTimeout : void 0,
					aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
					oa = "function" === typeof Promise ? Promise : void 0,
					ia =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof oa
							? function (e) {
									return oa.resolve(null).then(e).catch(la);
							  }
							: ra;
				function la(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function ua(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if ((e.removeChild(n), a && 8 === a.nodeType))
							if ("/$" === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void Bt(t);
								r--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = a;
					} while (n);
					Bt(t);
				}
				function sa(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function ca(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var fa = Math.random().toString(36).slice(2),
					da = "__reactFiber$" + fa,
					pa = "__reactProps$" + fa,
					ha = "__reactContainer$" + fa,
					ga = "__reactEvents$" + fa,
					ma = "__reactListeners$" + fa,
					va = "__reactHandles$" + fa;
				function ya(e) {
					var t = e[da];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[ha] || n[da])) {
							if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
								for (e = ca(e); null !== e; ) {
									if ((n = e[da])) return n;
									e = ca(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function ba(e) {
					return !(e = e[da] || e[ha]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
				}
				function ka(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33));
				}
				function wa(e) {
					return e[pa] || null;
				}
				var Sa = [],
					xa = -1;
				function Oa(e) {
					return {current: e};
				}
				function Ea(e) {
					0 > xa || ((e.current = Sa[xa]), (Sa[xa] = null), xa--);
				}
				function Ca(e, t) {
					xa++, (Sa[xa] = e.current), (e.current = t);
				}
				var Pa = {},
					Na = Oa(Pa),
					La = Oa(!1),
					_a = Pa;
				function Ra(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Pa;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
					var a,
						o = {};
					for (a in n) o[a] = t[a];
					return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
				}
				function ja(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function Ta() {
					Ea(La), Ea(Na);
				}
				function za(e, t, n) {
					if (Na.current !== Pa) throw Error(o(168));
					Ca(Na, t), Ca(La, n);
				}
				function Fa(e, t, n) {
					var r = e.stateNode;
					if (((t = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
					for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
					return I({}, n, r);
				}
				function Da(e) {
					return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pa), (_a = Na.current), Ca(Na, e), Ca(La, La.current), !0;
				}
				function Ia(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n ? ((e = Fa(e, t, _a)), (r.__reactInternalMemoizedMergedChildContext = e), Ea(La), Ea(Na), Ca(Na, e)) : Ea(La), Ca(La, n);
				}
				var Ma = null,
					Aa = !1,
					Ua = !1;
				function Va(e) {
					null === Ma ? (Ma = [e]) : Ma.push(e);
				}
				function Ba() {
					if (!Ua && null !== Ma) {
						Ua = !0;
						var e = 0,
							t = bt;
						try {
							var n = Ma;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Ma = null), (Aa = !1);
						} catch (a) {
							throw (null !== Ma && (Ma = Ma.slice(e + 1)), Qe(Ze, Ba), a);
						} finally {
							(bt = t), (Ua = !1);
						}
					}
					return null;
				}
				var Wa = [],
					Ha = 0,
					$a = null,
					Ka = 0,
					Qa = [],
					qa = 0,
					Ga = null,
					Ja = 1,
					Ya = "";
				function Xa(e, t) {
					(Wa[Ha++] = Ka), (Wa[Ha++] = $a), ($a = e), (Ka = t);
				}
				function Za(e, t, n) {
					(Qa[qa++] = Ja), (Qa[qa++] = Ya), (Qa[qa++] = Ga), (Ga = e);
					var r = Ja;
					e = Ya;
					var a = 32 - it(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var o = 32 - it(t) + a;
					if (30 < o) {
						var i = a - (a % 5);
						(o = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (a -= i), (Ja = (1 << (32 - it(t) + a)) | (n << a) | r), (Ya = o + e);
					} else (Ja = (1 << o) | (n << a) | r), (Ya = e);
				}
				function eo(e) {
					null !== e.return && (Xa(e, 1), Za(e, 1, 0));
				}
				function to(e) {
					for (; e === $a; ) ($a = Wa[--Ha]), (Wa[Ha] = null), (Ka = Wa[--Ha]), (Wa[Ha] = null);
					for (; e === Ga; ) (Ga = Qa[--qa]), (Qa[qa] = null), (Ya = Qa[--qa]), (Qa[qa] = null), (Ja = Qa[--qa]), (Qa[qa] = null);
				}
				var no = null,
					ro = null,
					ao = !1,
					oo = null;
				function io(e, t) {
					var n = js(5, null, null, 0);
					(n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
				}
				function lo(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), (no = e), (ro = null), !0);
						case 13:
							return null !== (t = 8 !== t.nodeType ? null : t) && ((n = null !== Ga ? {id: Ja, overflow: Ya} : null), (e.memoizedState = {dehydrated: t, treeContext: n, retryLane: 1073741824}), ((n = js(18, null, null, 0)).stateNode = t), (n.return = e), (e.child = n), (no = e), (ro = null), !0);
						default:
							return !1;
					}
				}
				function uo(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function so(e) {
					if (ao) {
						var t = ro;
						if (t) {
							var n = t;
							if (!lo(e, t)) {
								if (uo(e)) throw Error(o(418));
								t = sa(n.nextSibling);
								var r = no;
								t && lo(e, t) ? io(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
							}
						} else {
							if (uo(e)) throw Error(o(418));
							(e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
						}
					}
				}
				function co(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
					no = e;
				}
				function fo(e) {
					if (e !== no) return !1;
					if (!ao) return co(e), (ao = !0), !1;
					var t;
					if (((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro))) {
						if (uo(e)) throw (po(), Error(o(418)));
						for (; t; ) io(e, t), (t = sa(t.nextSibling));
					}
					if ((co(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ro = sa(e.nextSibling);
											break e;
										}
										t--;
									} else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
								}
								e = e.nextSibling;
							}
							ro = null;
						}
					} else ro = no ? sa(e.stateNode.nextSibling) : null;
					return !0;
				}
				function po() {
					for (var e = ro; e; ) e = sa(e.nextSibling);
				}
				function ho() {
					(ro = no = null), (ao = !1);
				}
				function go(e) {
					null === oo ? (oo = [e]) : oo.push(e);
				}
				var mo = k.ReactCurrentBatchConfig;
				function vo(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = I({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var yo = Oa(null),
					bo = null,
					ko = null,
					wo = null;
				function So() {
					wo = ko = bo = null;
				}
				function xo(e) {
					var t = yo.current;
					Ea(yo), (e._currentValue = t);
				}
				function Oo(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (((e.childLanes & t) !== t ? ((e.childLanes |= t), null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
						e = e.return;
					}
				}
				function Eo(e, t) {
					(bo = e), (wo = ko = null), null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (kl = !0), (e.firstContext = null));
				}
				function Co(e) {
					var t = e._currentValue;
					if (wo !== e)
						if (((e = {context: e, memoizedValue: t, next: null}), null === ko)) {
							if (null === bo) throw Error(o(308));
							(ko = e), (bo.dependencies = {lanes: 0, firstContext: e});
						} else ko = ko.next = e;
					return t;
				}
				var Po = null;
				function No(e) {
					null === Po ? (Po = [e]) : Po.push(e);
				}
				function Lo(e, t, n, r) {
					var a = t.interleaved;
					return null === a ? ((n.next = n), No(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), _o(e, r);
				}
				function _o(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; ) (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var Ro = !1;
				function jo(e) {
					e.updateQueue = {baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
				}
				function To(e, t) {
					(e = e.updateQueue), t.updateQueue === e && (t.updateQueue = {baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects});
				}
				function zo(e, t) {
					return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null};
				}
				function Fo(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & Lu))) {
						var a = r.pending;
						return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), _o(e, n);
					}
					return null === (a = r.interleaved) ? ((t.next = t), No(r)) : ((t.next = a.next), (a.next = t)), (r.interleaved = t), _o(e, n);
				}
				function Do(e, t, n) {
					if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				function Io(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null};
								null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
							} while (null !== n);
							null === o ? (a = o = t) : (o = o.next = t);
						} else a = o = t;
						return (n = {baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects}), void (e.updateQueue = n);
					}
					null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
				}
				function Mo(e, t, n, r) {
					var a = e.updateQueue;
					Ro = !1;
					var o = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						l = a.shared.pending;
					if (null !== l) {
						a.shared.pending = null;
						var u = l,
							s = u.next;
						(u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
						var c = e.alternate;
						null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
					}
					if (null !== o) {
						var f = a.baseState;
						for (i = 0, c = s = u = null, l = o; ; ) {
							var d = l.lane,
								p = l.eventTime;
							if ((r & d) === d) {
								null !== c && (c = c.next = {eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null});
								e: {
									var h = e,
										g = l;
									switch (((d = t), (p = n), g.tag)) {
										case 1:
											if ("function" === typeof (h = g.payload)) {
												f = h.call(p, f, d);
												break e;
											}
											f = h;
											break e;
										case 3:
											h.flags = (-65537 & h.flags) | 128;
										case 0:
											if (null === (d = "function" === typeof (h = g.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
											f = I({}, f, d);
											break e;
										case 2:
											Ro = !0;
									}
								}
								null !== l.callback && 0 !== l.lane && ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
							} else (p = {eventTime: p, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null}), null === c ? ((s = c = p), (u = f)) : (c = c.next = p), (i |= d);
							if (null === (l = l.next)) {
								if (null === (l = a.shared.pending)) break;
								(l = (d = l).next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null);
							}
						}
						if ((null === c && (u = f), (a.baseState = u), (a.firstBaseUpdate = s), (a.lastBaseUpdate = c), null !== (t = a.shared.interleaved))) {
							a = t;
							do {
								(i |= a.lane), (a = a.next);
							} while (a !== t);
						} else null === o && (a.shared.lanes = 0);
						(Iu |= i), (e.lanes = i), (e.memoizedState = f);
					}
				}
				function Ao(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (((r.callback = null), (r = n), "function" !== typeof a)) throw Error(o(191, a));
								a.call(r);
							}
						}
				}
				var Uo = new r.Component().refs;
				function Vo(e, t, n, r) {
					(n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : I({}, t, n)), (e.memoizedState = n), 0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var Bo = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && Be(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = ts(),
							a = ns(e),
							o = zo(r, a);
						(o.payload = t), void 0 !== n && null !== n && (o.callback = n), null !== (t = Fo(e, o, a)) && (rs(t, e, a, r), Do(t, e, a));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = ts(),
							a = ns(e),
							o = zo(r, a);
						(o.tag = 1), (o.payload = t), void 0 !== n && null !== n && (o.callback = n), null !== (t = Fo(e, o, a)) && (rs(t, e, a, r), Do(t, e, a));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = ts(),
							r = ns(e),
							a = zo(n, r);
						(a.tag = 2), void 0 !== t && null !== t && (a.callback = t), null !== (t = Fo(e, a, r)) && (rs(t, e, r, n), Do(t, e, r));
					},
				};
				function Wo(e, t, n, r, a, o, i) {
					return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(a, o);
				}
				function Ho(e, t, n) {
					var r = !1,
						a = Pa,
						o = t.contextType;
					return (
						"object" === typeof o && null !== o ? (o = Co(o)) : ((a = ja(t) ? _a : Na.current), (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ra(e, a) : Pa)),
						(t = new t(n, o)),
						(e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = Bo),
						(e.stateNode = t),
						(t._reactInternals = e),
						r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a), (e.__reactInternalMemoizedMaskedChildContext = o)),
						t
					);
				}
				function $o(e, t, n, r) {
					(e = t.state), "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
				}
				function Ko(e, t, n, r) {
					var a = e.stateNode;
					(a.props = n), (a.state = e.memoizedState), (a.refs = Uo), jo(e);
					var o = t.contextType;
					"object" === typeof o && null !== o ? (a.context = Co(o)) : ((o = ja(t) ? _a : Na.current), (a.context = Ra(e, o))),
						(a.state = e.memoizedState),
						"function" === typeof (o = t.getDerivedStateFromProps) && (Vo(e, t, o, n), (a.state = e.memoizedState)),
						"function" === typeof t.getDerivedStateFromProps ||
							"function" === typeof a.getSnapshotBeforeUpdate ||
							("function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount) ||
							((t = a.state), "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bo.enqueueReplaceState(a, a.state, null), Mo(e, n, a, r), (a.state = e.memoizedState)),
						"function" === typeof a.componentDidMount && (e.flags |= 4194308);
				}
				function Qo(e, t, n) {
					if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(o(147, e));
							var a = r,
								i = "" + e;
							return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i
								? t.ref
								: ((t = function (e) {
										var t = a.refs;
										t === Uo && (t = a.refs = {}), null === e ? delete t[i] : (t[i] = e);
								  }),
								  (t._stringRef = i),
								  t);
						}
						if ("string" !== typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e));
					}
					return e;
				}
				function qo(e, t) {
					throw ((e = Object.prototype.toString.call(t)), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
				}
				function Go(e) {
					return (0, e._init)(e._payload);
				}
				function Jo(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
						return e;
					}
					function a(e, t) {
						return ((e = zs(e, t)).index = 0), (e.sibling = null), e;
					}
					function i(t, n, r) {
						return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags |= 2), n) : r) : ((t.flags |= 2), n)) : ((t.flags |= 1048576), n);
					}
					function l(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function u(e, t, n, r) {
						return null === t || 6 !== t.tag ? (((t = Ms(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
					}
					function s(e, t, n, r) {
						var o = n.type;
						return o === x ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || ("object" === typeof o && null !== o && o.$$typeof === j && Go(o) === t.type)) ? (((r = a(t, n.props)).ref = Qo(e, t, n)), (r.return = e), r) : (((r = Fs(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(e, t, n)), (r.return = e), r);
					}
					function c(e, t, n, r) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (((t = As(n, e.mode, r)).return = e), t) : (((t = a(t, n.children || [])).return = e), t);
					}
					function f(e, t, n, r, o) {
						return null === t || 7 !== t.tag ? (((t = Ds(n, e.mode, r, o)).return = e), t) : (((t = a(t, n)).return = e), t);
					}
					function d(e, t, n) {
						if (("string" === typeof t && "" !== t) || "number" === typeof t) return ((t = Ms("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case w:
									return ((n = Fs(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(e, null, t)), (n.return = e), n;
								case S:
									return ((t = As(t, e.mode, n)).return = e), t;
								case j:
									return d(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || F(t)) return ((t = Ds(t, e.mode, n, null)).return = e), t;
							qo(e, t);
						}
						return null;
					}
					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if (("string" === typeof n && "" !== n) || "number" === typeof n) return null !== a ? null : u(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case w:
									return n.key === a ? s(e, t, n, r) : null;
								case S:
									return n.key === a ? c(e, t, n, r) : null;
								case j:
									return p(e, t, (a = n._init)(n._payload), r);
							}
							if (te(n) || F(n)) return null !== a ? null : f(e, t, n, r, null);
							qo(e, n);
						}
						return null;
					}
					function h(e, t, n, r, a) {
						if (("string" === typeof r && "" !== r) || "number" === typeof r) return u(t, (e = e.get(n) || null), "" + r, a);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case w:
									return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
								case S:
									return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
								case j:
									return h(e, t, n, (0, r._init)(r._payload), a);
							}
							if (te(r) || F(r)) return f(t, (e = e.get(n) || null), r, a, null);
							qo(t, r);
						}
						return null;
					}
					function g(a, o, l, u) {
						for (var s = null, c = null, f = o, g = (o = 0), m = null; null !== f && g < l.length; g++) {
							f.index > g ? ((m = f), (f = null)) : (m = f.sibling);
							var v = p(a, f, l[g], u);
							if (null === v) {
								null === f && (f = m);
								break;
							}
							e && f && null === v.alternate && t(a, f), (o = i(v, o, g)), null === c ? (s = v) : (c.sibling = v), (c = v), (f = m);
						}
						if (g === l.length) return n(a, f), ao && Xa(a, g), s;
						if (null === f) {
							for (; g < l.length; g++) null !== (f = d(a, l[g], u)) && ((o = i(f, o, g)), null === c ? (s = f) : (c.sibling = f), (c = f));
							return ao && Xa(a, g), s;
						}
						for (f = r(a, f); g < l.length; g++) null !== (m = h(f, a, g, l[g], u)) && (e && null !== m.alternate && f.delete(null === m.key ? g : m.key), (o = i(m, o, g)), null === c ? (s = m) : (c.sibling = m), (c = m));
						return (
							e &&
								f.forEach(function (e) {
									return t(a, e);
								}),
							ao && Xa(a, g),
							s
						);
					}
					function m(a, l, u, s) {
						var c = F(u);
						if ("function" !== typeof c) throw Error(o(150));
						if (null == (u = c.call(u))) throw Error(o(151));
						for (var f = (c = null), g = l, m = (l = 0), v = null, y = u.next(); null !== g && !y.done; m++, y = u.next()) {
							g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
							var b = p(a, g, y.value, s);
							if (null === b) {
								null === g && (g = v);
								break;
							}
							e && g && null === b.alternate && t(a, g), (l = i(b, l, m)), null === f ? (c = b) : (f.sibling = b), (f = b), (g = v);
						}
						if (y.done) return n(a, g), ao && Xa(a, m), c;
						if (null === g) {
							for (; !y.done; m++, y = u.next()) null !== (y = d(a, y.value, s)) && ((l = i(y, l, m)), null === f ? (c = y) : (f.sibling = y), (f = y));
							return ao && Xa(a, m), c;
						}
						for (g = r(a, g); !y.done; m++, y = u.next()) null !== (y = h(g, a, m, y.value, s)) && (e && null !== y.alternate && g.delete(null === y.key ? m : y.key), (l = i(y, l, m)), null === f ? (c = y) : (f.sibling = y), (f = y));
						return (
							e &&
								g.forEach(function (e) {
									return t(a, e);
								}),
							ao && Xa(a, m),
							c
						);
					}
					return function e(r, o, i, u) {
						if (("object" === typeof i && null !== i && i.type === x && null === i.key && (i = i.props.children), "object" === typeof i && null !== i)) {
							switch (i.$$typeof) {
								case w:
									e: {
										for (var s = i.key, c = o; null !== c; ) {
											if (c.key === s) {
												if ((s = i.type) === x) {
													if (7 === c.tag) {
														n(r, c.sibling), ((o = a(c, i.props.children)).return = r), (r = o);
														break e;
													}
												} else if (c.elementType === s || ("object" === typeof s && null !== s && s.$$typeof === j && Go(s) === c.type)) {
													n(r, c.sibling), ((o = a(c, i.props)).ref = Qo(r, c, i)), (o.return = r), (r = o);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										i.type === x ? (((o = Ds(i.props.children, r.mode, u, i.key)).return = r), (r = o)) : (((u = Fs(i.type, i.key, i.props, null, r.mode, u)).ref = Qo(r, o, i)), (u.return = r), (r = u));
									}
									return l(r);
								case S:
									e: {
										for (c = i.key; null !== o; ) {
											if (o.key === c) {
												if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
													n(r, o.sibling), ((o = a(o, i.children || [])).return = r), (r = o);
													break e;
												}
												n(r, o);
												break;
											}
											t(r, o), (o = o.sibling);
										}
										((o = As(i, r.mode, u)).return = r), (r = o);
									}
									return l(r);
								case j:
									return e(r, o, (c = i._init)(i._payload), u);
							}
							if (te(i)) return g(r, o, i, u);
							if (F(i)) return m(r, o, i, u);
							qo(r, i);
						}
						return ("string" === typeof i && "" !== i) || "number" === typeof i ? ((i = "" + i), null !== o && 6 === o.tag ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o)) : (n(r, o), ((o = Ms(i, r.mode, u)).return = r), (r = o)), l(r)) : n(r, o);
					};
				}
				var Yo = Jo(!0),
					Xo = Jo(!1),
					Zo = {},
					ei = Oa(Zo),
					ti = Oa(Zo),
					ni = Oa(Zo);
				function ri(e) {
					if (e === Zo) throw Error(o(174));
					return e;
				}
				function ai(e, t) {
					switch ((Ca(ni, t), Ca(ti, e), Ca(ei, Zo), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
							break;
						default:
							t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
					}
					Ea(ei), Ca(ei, t);
				}
				function oi() {
					Ea(ei), Ea(ti), Ea(ni);
				}
				function ii(e) {
					ri(ni.current);
					var t = ri(ei.current),
						n = ue(t, e.type);
					t !== n && (Ca(ti, e), Ca(ei, n));
				}
				function li(e) {
					ti.current === e && (Ea(ei), Ea(ti));
				}
				var ui = Oa(0);
				function si(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var ci = [];
				function fi() {
					for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
					ci.length = 0;
				}
				var di = k.ReactCurrentDispatcher,
					pi = k.ReactCurrentBatchConfig,
					hi = 0,
					gi = null,
					mi = null,
					vi = null,
					yi = !1,
					bi = !1,
					ki = 0,
					wi = 0;
				function Si() {
					throw Error(o(321));
				}
				function xi(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
					return !0;
				}
				function Oi(e, t, n, r, a, i) {
					if (((hi = i), (gi = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (di.current = null === e || null === e.memoizedState ? ll : ul), (e = n(r, a)), bi)) {
						i = 0;
						do {
							if (((bi = !1), (ki = 0), 25 <= i)) throw Error(o(301));
							(i += 1), (vi = mi = null), (t.updateQueue = null), (di.current = sl), (e = n(r, a));
						} while (bi);
					}
					if (((di.current = il), (t = null !== mi && null !== mi.next), (hi = 0), (vi = mi = gi = null), (yi = !1), t)) throw Error(o(300));
					return e;
				}
				function Ei() {
					var e = 0 !== ki;
					return (ki = 0), e;
				}
				function Ci() {
					var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
					return null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e), vi;
				}
				function Pi() {
					if (null === mi) {
						var e = gi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = mi.next;
					var t = null === vi ? gi.memoizedState : vi.next;
					if (null !== t) (vi = t), (mi = e);
					else {
						if (null === e) throw Error(o(310));
						(e = {memoizedState: (mi = e).memoizedState, baseState: mi.baseState, baseQueue: mi.baseQueue, queue: mi.queue, next: null}), null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e);
					}
					return vi;
				}
				function Ni(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function Li(e) {
					var t = Pi(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = mi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var l = a.next;
							(a.next = i.next), (i.next = l);
						}
						(r.baseQueue = a = i), (n.pending = null);
					}
					if (null !== a) {
						(i = a.next), (r = r.baseState);
						var u = (l = null),
							s = null,
							c = i;
						do {
							var f = c.lane;
							if ((hi & f) === f) null !== s && (s = s.next = {lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null}), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
							else {
								var d = {lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null};
								null === s ? ((u = s = d), (l = r)) : (s = s.next = d), (gi.lanes |= f), (Iu |= f);
							}
							c = c.next;
						} while (null !== c && c !== i);
						null === s ? (l = r) : (s.next = u), lr(r, t.memoizedState) || (kl = !0), (t.memoizedState = r), (t.baseState = l), (t.baseQueue = s), (n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							(i = a.lane), (gi.lanes |= i), (Iu |= i), (a = a.next);
						} while (a !== e);
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function _i(e) {
					var t = Pi(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var l = (a = a.next);
						do {
							(i = e(i, l.action)), (l = l.next);
						} while (l !== a);
						lr(i, t.memoizedState) || (kl = !0), (t.memoizedState = i), null === t.baseQueue && (t.baseState = i), (n.lastRenderedState = i);
					}
					return [i, r];
				}
				function Ri() {}
				function ji(e, t) {
					var n = gi,
						r = Pi(),
						a = t(),
						i = !lr(r.memoizedState, a);
					if ((i && ((r.memoizedState = a), (kl = !0)), (r = r.queue), Hi(Fi.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (null !== vi && 1 & vi.memoizedState.tag))) {
						if (((n.flags |= 2048), Ai(9, zi.bind(null, n, r, a, t), void 0, null), null === _u)) throw Error(o(349));
						0 !== (30 & hi) || Ti(n, t, a);
					}
					return a;
				}
				function Ti(e, t, n) {
					(e.flags |= 16384), (e = {getSnapshot: t, value: n}), null === (t = gi.updateQueue) ? ((t = {lastEffect: null, stores: null}), (gi.updateQueue = t), (t.stores = [e])) : null === (n = t.stores) ? (t.stores = [e]) : n.push(e);
				}
				function zi(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Di(t) && Ii(e);
				}
				function Fi(e, t, n) {
					return n(function () {
						Di(t) && Ii(e);
					});
				}
				function Di(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !lr(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Ii(e) {
					var t = _o(e, 1);
					null !== t && rs(t, e, 1, -1);
				}
				function Mi(e) {
					var t = Ci();
					return "function" === typeof e && (e = e()), (t.memoizedState = t.baseState = e), (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ni, lastRenderedState: e}), (t.queue = e), (e = e.dispatch = nl.bind(null, gi, e)), [t.memoizedState, e];
				}
				function Ai(e, t, n, r) {
					return (e = {tag: e, create: t, destroy: n, deps: r, next: null}), null === (t = gi.updateQueue) ? ((t = {lastEffect: null, stores: null}), (gi.updateQueue = t), (t.lastEffect = e.next = e)) : null === (n = t.lastEffect) ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)), e;
				}
				function Ui() {
					return Pi().memoizedState;
				}
				function Vi(e, t, n, r) {
					var a = Ci();
					(gi.flags |= e), (a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function Bi(e, t, n, r) {
					var a = Pi();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== mi) {
						var i = mi.memoizedState;
						if (((o = i.destroy), null !== r && xi(r, i.deps))) return void (a.memoizedState = Ai(t, n, o, r));
					}
					(gi.flags |= e), (a.memoizedState = Ai(1 | t, n, o, r));
				}
				function Wi(e, t) {
					return Vi(8390656, 8, e, t);
				}
				function Hi(e, t) {
					return Bi(2048, 8, e, t);
				}
				function $i(e, t) {
					return Bi(4, 2, e, t);
				}
				function Ki(e, t) {
					return Bi(4, 4, e, t);
				}
				function Qi(e, t) {
					return "function" === typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null !== t && void 0 !== t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function qi(e, t, n) {
					return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Bi(4, 4, Qi.bind(null, t, e), n);
				}
				function Gi() {}
				function Ji(e, t) {
					var n = Pi();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && xi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
				}
				function Yi(e, t) {
					var n = Pi();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && xi(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Xi(e, t, n) {
					return 0 === (21 & hi) ? (e.baseState && ((e.baseState = !1), (kl = !0)), (e.memoizedState = n)) : (lr(n, t) || ((n = gt()), (gi.lanes |= n), (Iu |= n), (e.baseState = !0)), t);
				}
				function Zi(e, t) {
					var n = bt;
					(bt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = pi.transition;
					pi.transition = {};
					try {
						e(!1), t();
					} finally {
						(bt = n), (pi.transition = r);
					}
				}
				function el() {
					return Pi().memoizedState;
				}
				function tl(e, t, n) {
					var r = ns(e);
					if (((n = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null}), rl(e))) al(t, n);
					else if (null !== (n = Lo(e, t, n, r))) {
						rs(n, e, r, ts()), ol(n, t, r);
					}
				}
				function nl(e, t, n) {
					var r = ns(e),
						a = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
					if (rl(e)) al(t, a);
					else {
						var o = e.alternate;
						if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
							try {
								var i = t.lastRenderedState,
									l = o(i, n);
								if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
									var u = t.interleaved;
									return null === u ? ((a.next = a), No(t)) : ((a.next = u.next), (u.next = a)), void (t.interleaved = a);
								}
							} catch (s) {}
						null !== (n = Lo(e, t, a, r)) && (rs(n, e, r, (a = ts())), ol(n, t, r));
					}
				}
				function rl(e) {
					var t = e.alternate;
					return e === gi || (null !== t && t === gi);
				}
				function al(e, t) {
					bi = yi = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
				}
				function ol(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				var il = {readContext: Co, useCallback: Si, useContext: Si, useEffect: Si, useImperativeHandle: Si, useInsertionEffect: Si, useLayoutEffect: Si, useMemo: Si, useReducer: Si, useRef: Si, useState: Si, useDebugValue: Si, useDeferredValue: Si, useTransition: Si, useMutableSource: Si, useSyncExternalStore: Si, useId: Si, unstable_isNewReconciler: !1},
					ll = {
						readContext: Co,
						useCallback: function (e, t) {
							return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: Co,
						useEffect: Wi,
						useImperativeHandle: function (e, t, n) {
							return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Vi(4194308, 4, Qi.bind(null, t, e), n);
						},
						useLayoutEffect: function (e, t) {
							return Vi(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Vi(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = Ci();
							return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
						},
						useReducer: function (e, t, n) {
							var r = Ci();
							return (t = void 0 !== n ? n(t) : t), (r.memoizedState = r.baseState = t), (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t}), (r.queue = e), (e = e.dispatch = tl.bind(null, gi, e)), [r.memoizedState, e];
						},
						useRef: function (e) {
							return (e = {current: e}), (Ci().memoizedState = e);
						},
						useState: Mi,
						useDebugValue: Gi,
						useDeferredValue: function (e) {
							return (Ci().memoizedState = e);
						},
						useTransition: function () {
							var e = Mi(!1),
								t = e[0];
							return (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e];
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = gi,
								a = Ci();
							if (ao) {
								if (void 0 === n) throw Error(o(407));
								n = n();
							} else {
								if (((n = t()), null === _u)) throw Error(o(349));
								0 !== (30 & hi) || Ti(r, t, n);
							}
							a.memoizedState = n;
							var i = {value: n, getSnapshot: t};
							return (a.queue = i), Wi(Fi.bind(null, r, i, e), [e]), (r.flags |= 2048), Ai(9, zi.bind(null, r, i, n, t), void 0, null), n;
						},
						useId: function () {
							var e = Ci(),
								t = _u.identifierPrefix;
							if (ao) {
								var n = Ya;
								(t = ":" + t + "R" + (n = (Ja & ~(1 << (32 - it(Ja) - 1))).toString(32) + n)), 0 < (n = ki++) && (t += "H" + n.toString(32)), (t += ":");
							} else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					ul = {
						readContext: Co,
						useCallback: Ji,
						useContext: Co,
						useEffect: Hi,
						useImperativeHandle: qi,
						useInsertionEffect: $i,
						useLayoutEffect: Ki,
						useMemo: Yi,
						useReducer: Li,
						useRef: Ui,
						useState: function () {
							return Li(Ni);
						},
						useDebugValue: Gi,
						useDeferredValue: function (e) {
							return Xi(Pi(), mi.memoizedState, e);
						},
						useTransition: function () {
							return [Li(Ni)[0], Pi().memoizedState];
						},
						useMutableSource: Ri,
						useSyncExternalStore: ji,
						useId: el,
						unstable_isNewReconciler: !1,
					},
					sl = {
						readContext: Co,
						useCallback: Ji,
						useContext: Co,
						useEffect: Hi,
						useImperativeHandle: qi,
						useInsertionEffect: $i,
						useLayoutEffect: Ki,
						useMemo: Yi,
						useReducer: _i,
						useRef: Ui,
						useState: function () {
							return _i(Ni);
						},
						useDebugValue: Gi,
						useDeferredValue: function (e) {
							var t = Pi();
							return null === mi ? (t.memoizedState = e) : Xi(t, mi.memoizedState, e);
						},
						useTransition: function () {
							return [_i(Ni)[0], Pi().memoizedState];
						},
						useMutableSource: Ri,
						useSyncExternalStore: ji,
						useId: el,
						unstable_isNewReconciler: !1,
					};
				function cl(e, t) {
					try {
						var n = "",
							r = t;
						do {
							(n += V(r)), (r = r.return);
						} while (r);
						var a = n;
					} catch (o) {
						a = "\nError generating stack: " + o.message + "\n" + o.stack;
					}
					return {value: e, source: t, stack: a, digest: null};
				}
				function fl(e, t, n) {
					return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null};
				}
				function dl(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var pl = "function" === typeof WeakMap ? WeakMap : Map;
				function hl(e, t, n) {
					((n = zo(-1, n)).tag = 3), (n.payload = {element: null});
					var r = t.value;
					return (
						(n.callback = function () {
							$u || (($u = !0), (Ku = r)), dl(0, t);
						}),
						n
					);
				}
				function gl(e, t, n) {
					(n = zo(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var a = t.value;
						(n.payload = function () {
							return r(a);
						}),
							(n.callback = function () {
								dl(0, t);
							});
					}
					var o = e.stateNode;
					return (
						null !== o &&
							"function" === typeof o.componentDidCatch &&
							(n.callback = function () {
								dl(0, t), "function" !== typeof r && (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""});
							}),
						n
					);
				}
				function ml(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new pl();
						var a = new Set();
						r.set(t, a);
					} else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
					a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
				}
				function vl(e) {
					do {
						var t;
						if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function yl(e, t, n, r, a) {
					return 0 === (1 & e.mode) ? (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), 1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = zo(-1, 1)).tag = 2), Fo(n, t, 1))), (n.lanes |= 1)), e) : ((e.flags |= 65536), (e.lanes = a), e);
				}
				var bl = k.ReactCurrentOwner,
					kl = !1;
				function wl(e, t, n, r) {
					t.child = null === e ? Xo(t, null, n, r) : Yo(t, e.child, n, r);
				}
				function Sl(e, t, n, r, a) {
					n = n.render;
					var o = t.ref;
					return Eo(t, a), (r = Oi(e, t, n, r, o, a)), (n = Ei()), null === e || kl ? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child) : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $l(e, t, a));
				}
				function xl(e, t, n, r, a) {
					if (null === e) {
						var o = n.type;
						return "function" !== typeof o || Ts(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? (((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e)) : ((t.tag = 15), (t.type = o), Ol(e, t, o, r, a));
					}
					if (((o = e.child), 0 === (e.lanes & a))) {
						var i = o.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return $l(e, t, a);
					}
					return (t.flags |= 1), ((e = zs(o, r)).ref = t.ref), (e.return = t), (t.child = e);
				}
				function Ol(e, t, n, r, a) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (ur(o, r) && e.ref === t.ref) {
							if (((kl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a))) return (t.lanes = e.lanes), $l(e, t, a);
							0 !== (131072 & e.flags) && (kl = !0);
						}
					}
					return Pl(e, t, n, r, a);
				}
				function El(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode)) (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), Ca(zu, Tu), (Tu |= n);
						else {
							if (0 === (1073741824 & n)) return (e = null !== o ? o.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = {baseLanes: e, cachePool: null, transitions: null}), (t.updateQueue = null), Ca(zu, Tu), (Tu |= e), null;
							(t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), (r = null !== o ? o.baseLanes : n), Ca(zu, Tu), (Tu |= r);
						}
					else null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), Ca(zu, Tu), (Tu |= r);
					return wl(e, t, a, n), t.child;
				}
				function Cl(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
				}
				function Pl(e, t, n, r, a) {
					var o = ja(n) ? _a : Na.current;
					return (o = Ra(t, o)), Eo(t, a), (n = Oi(e, t, n, r, o, a)), (r = Ei()), null === e || kl ? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child) : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $l(e, t, a));
				}
				function Nl(e, t, n, r, a) {
					if (ja(n)) {
						var o = !0;
						Da(t);
					} else o = !1;
					if ((Eo(t, a), null === t.stateNode)) Hl(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
					else if (null === e) {
						var i = t.stateNode,
							l = t.memoizedProps;
						i.props = l;
						var u = i.context,
							s = n.contextType;
						"object" === typeof s && null !== s ? (s = Co(s)) : (s = Ra(t, (s = ja(n) ? _a : Na.current)));
						var c = n.getDerivedStateFromProps,
							f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
						f || ("function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps) || ((l !== r || u !== s) && $o(t, i, r, s)), (Ro = !1);
						var d = t.memoizedState;
						(i.state = d),
							Mo(t, r, i, a),
							(u = t.memoizedState),
							l !== r || d !== u || La.current || Ro
								? ("function" === typeof c && (Vo(t, n, c, r), (u = t.memoizedState)),
								  (l = Ro || Wo(t, n, l, r, d, u, s))
										? (f || ("function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount) || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308))
										: ("function" === typeof i.componentDidMount && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = u)),
								  (i.props = r),
								  (i.state = u),
								  (i.context = s),
								  (r = l))
								: ("function" === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
					} else {
						(i = t.stateNode), To(e, t), (l = t.memoizedProps), (s = t.type === t.elementType ? l : vo(t.type, l)), (i.props = s), (f = t.pendingProps), (d = i.context), "object" === typeof (u = n.contextType) && null !== u ? (u = Co(u)) : (u = Ra(t, (u = ja(n) ? _a : Na.current)));
						var p = n.getDerivedStateFromProps;
						(c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || ("function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps) || ((l !== f || d !== u) && $o(t, i, r, u)), (Ro = !1), (d = t.memoizedState), (i.state = d), Mo(t, r, i, a);
						var h = t.memoizedState;
						l !== f || d !== h || La.current || Ro
							? ("function" === typeof p && (Vo(t, n, p, r), (h = t.memoizedState)),
							  (s = Ro || Wo(t, n, s, r, d, h, u) || !1)
									? (c || ("function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate) || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)),
									  "function" === typeof i.componentDidUpdate && (t.flags |= 4),
									  "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
									: ("function" !== typeof i.componentDidUpdate || (l === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || (l === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = h)),
							  (i.props = r),
							  (i.state = h),
							  (i.context = u),
							  (r = s))
							: ("function" !== typeof i.componentDidUpdate || (l === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || (l === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024), (r = !1));
					}
					return Ll(e, t, n, r, o, a);
				}
				function Ll(e, t, n, r, a, o) {
					Cl(e, t);
					var i = 0 !== (128 & t.flags);
					if (!r && !i) return a && Ia(t, n, !1), $l(e, t, o);
					(r = t.stateNode), (bl.current = t);
					var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
					return (t.flags |= 1), null !== e && i ? ((t.child = Yo(t, e.child, null, o)), (t.child = Yo(t, null, l, o))) : wl(e, t, l, o), (t.memoizedState = r.state), a && Ia(t, n, !0), t.child;
				}
				function _l(e) {
					var t = e.stateNode;
					t.pendingContext ? za(0, t.pendingContext, t.pendingContext !== t.context) : t.context && za(0, t.context, !1), ai(e, t.containerInfo);
				}
				function Rl(e, t, n, r, a) {
					return ho(), go(a), (t.flags |= 256), wl(e, t, n, r), t.child;
				}
				var jl,
					Tl,
					zl,
					Fl,
					Dl = {dehydrated: null, treeContext: null, retryLane: 0};
				function Il(e) {
					return {baseLanes: e, cachePool: null, transitions: null};
				}
				function Ml(e, t, n) {
					var r,
						a = t.pendingProps,
						i = ui.current,
						l = !1,
						u = 0 !== (128 & t.flags);
					if (((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? ((l = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1), Ca(ui, 1 & i), null === e))
						return (
							so(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 === (1 & t.mode) ? (t.lanes = 1) : "$!" === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
								: ((u = a.children),
								  (e = a.fallback),
								  l ? ((a = t.mode), (l = t.child), (u = {mode: "hidden", children: u}), 0 === (1 & a) && null !== l ? ((l.childLanes = 0), (l.pendingProps = u)) : (l = Is(u, a, 0, null)), (e = Ds(e, a, n, null)), (l.return = t), (e.return = t), (l.sibling = e), (t.child = l), (t.child.memoizedState = Il(n)), (t.memoizedState = Dl), e) : Al(t, u))
						);
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
						return (function (e, t, n, r, a, i, l) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), Ul(e, t, l, (r = fl(Error(o(422))))))
									: null !== t.memoizedState
									? ((t.child = e.child), (t.flags |= 128), null)
									: ((i = r.fallback), (a = t.mode), (r = Is({mode: "visible", children: r.children}, a, 0, null)), ((i = Ds(i, a, l, null)).flags |= 2), (r.return = t), (i.return = t), (r.sibling = i), (t.child = r), 0 !== (1 & t.mode) && Yo(t, e.child, null, l), (t.child.memoizedState = Il(l)), (t.memoizedState = Dl), i);
							if (0 === (1 & t.mode)) return Ul(e, t, l, null);
							if ("$!" === a.data) {
								if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst;
								return (r = u), Ul(e, t, l, (r = fl((i = Error(o(419))), r, void 0)));
							}
							if (((u = 0 !== (l & e.childLanes)), kl || u)) {
								if (null !== (r = _u)) {
									switch (l & -l) {
										case 4:
											a = 2;
											break;
										case 16:
											a = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											a = 32;
											break;
										case 536870912:
											a = 268435456;
											break;
										default:
											a = 0;
									}
									0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== i.retryLane && ((i.retryLane = a), _o(e, a), rs(r, e, a, -1));
								}
								return ms(), Ul(e, t, l, (r = fl(Error(o(421)))));
							}
							return "$?" === a.data ? ((t.flags |= 128), (t.child = e.child), (t = Ns.bind(null, e)), (a._reactRetry = t), null) : ((e = i.treeContext), (ro = sa(a.nextSibling)), (no = t), (ao = !0), (oo = null), null !== e && ((Qa[qa++] = Ja), (Qa[qa++] = Ya), (Qa[qa++] = Ga), (Ja = e.id), (Ya = e.overflow), (Ga = t)), (t = Al(t, r.children)), (t.flags |= 4096), t);
						})(e, t, u, a, r, i, n);
					if (l) {
						(l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
						var s = {mode: "hidden", children: a.children};
						return (
							0 === (1 & u) && t.child !== i ? (((a = t.child).childLanes = 0), (a.pendingProps = s), (t.deletions = null)) : ((a = zs(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
							null !== r ? (l = zs(r, l)) : ((l = Ds(l, u, n, null)).flags |= 2),
							(l.return = t),
							(a.return = t),
							(a.sibling = l),
							(t.child = a),
							(a = l),
							(l = t.child),
							(u = null === (u = e.child.memoizedState) ? Il(n) : {baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions}),
							(l.memoizedState = u),
							(l.childLanes = e.childLanes & ~n),
							(t.memoizedState = Dl),
							a
						);
					}
					return (e = (l = e.child).sibling), (a = zs(l, {mode: "visible", children: a.children})), 0 === (1 & t.mode) && (a.lanes = n), (a.return = t), (a.sibling = null), null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = a), (t.memoizedState = null), a;
				}
				function Al(e, t) {
					return ((t = Is({mode: "visible", children: t}, e.mode, 0, null)).return = e), (e.child = t);
				}
				function Ul(e, t, n, r) {
					return null !== r && go(r), Yo(t, e.child, null, n), ((e = Al(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e;
				}
				function Vl(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Oo(e.return, t, n);
				}
				function Bl(e, t, n, r, a) {
					var o = e.memoizedState;
					null === o ? (e.memoizedState = {isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a}) : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = a));
				}
				function Wl(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						o = r.tail;
					if ((wl(e, t, r.children, n), 0 !== (2 & (r = ui.current)))) (r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Vl(e, n, t);
								else if (19 === e.tag) Vl(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((Ca(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (a) {
							case "forwards":
								for (n = t.child, a = null; null !== n; ) null !== (e = n.alternate) && null === si(e) && (a = n), (n = n.sibling);
								null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)), Bl(t, !1, a, n, o);
								break;
							case "backwards":
								for (n = null, a = t.child, t.child = null; null !== a; ) {
									if (null !== (e = a.alternate) && null === si(e)) {
										t.child = a;
										break;
									}
									(e = a.sibling), (a.sibling = n), (n = a), (a = e);
								}
								Bl(t, !0, n, null, o);
								break;
							case "together":
								Bl(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function Hl(e, t) {
					0 === (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function $l(e, t, n) {
					if ((null !== e && (t.dependencies = e.dependencies), (Iu |= t.lanes), 0 === (n & t.childLanes))) return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (n = zs((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = zs(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function Kl(e, t) {
					if (!ao)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
								null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
						}
				}
				function Ql(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t) for (var a = e.child; null !== a; ) (n |= a.lanes | a.childLanes), (r |= 14680064 & a.subtreeFlags), (r |= 14680064 & a.flags), (a.return = e), (a = a.sibling);
					else for (a = e.child; null !== a; ) (n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function ql(e, t, n) {
					var r = t.pendingProps;
					switch ((to(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Ql(t), null;
						case 1:
						case 17:
							return ja(t.type) && Ta(), Ql(t), null;
						case 3:
							return (r = t.stateNode), oi(), Ea(La), Ea(Na), fi(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (null !== e && null !== e.child) || (fo(t) ? (t.flags |= 4) : null === e || (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) || ((t.flags |= 1024), null !== oo && (ls(oo), (oo = null)))), Tl(e, t), Ql(t), null;
						case 5:
							li(t);
							var a = ri(ni.current);
							if (((n = t.type), null !== e && null != t.stateNode)) zl(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(o(166));
									return Ql(t), null;
								}
								if (((e = ri(ei.current)), fo(t))) {
									(r = t.stateNode), (n = t.type);
									var i = t.memoizedProps;
									switch (((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)) {
										case "dialog":
											Ar("cancel", r), Ar("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											Ar("load", r);
											break;
										case "video":
										case "audio":
											for (a = 0; a < Fr.length; a++) Ar(Fr[a], r);
											break;
										case "source":
											Ar("error", r);
											break;
										case "img":
										case "image":
										case "link":
											Ar("error", r), Ar("load", r);
											break;
										case "details":
											Ar("toggle", r);
											break;
										case "input":
											J(r, i), Ar("invalid", r);
											break;
										case "select":
											(r._wrapperState = {wasMultiple: !!i.multiple}), Ar("invalid", r);
											break;
										case "textarea":
											ae(r, i), Ar("invalid", r);
									}
									for (var u in (ye(n, i), (a = null), i))
										if (i.hasOwnProperty(u)) {
											var s = i[u];
											"children" === u
												? "string" === typeof s
													? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Xr(r.textContent, s, e), (a = ["children", s]))
													: "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Xr(r.textContent, s, e), (a = ["children", "" + s]))
												: l.hasOwnProperty(u) && null != s && "onScroll" === u && Ar("scroll", r);
										}
									switch (n) {
										case "input":
											K(r), Z(r, i, !0);
											break;
										case "textarea":
											K(r), ie(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof i.onClick && (r.onclick = Zr);
									}
									(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(u = 9 === a.nodeType ? a : a.ownerDocument),
										"http://www.w3.org/1999/xhtml" === e && (e = le(n)),
										"http://www.w3.org/1999/xhtml" === e
											? "script" === n
												? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
												: "string" === typeof r.is
												? (e = u.createElement(n, {is: r.is}))
												: ((e = u.createElement(n)), "select" === n && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
											: (e = u.createElementNS(e, n)),
										(e[da] = t),
										(e[pa] = r),
										jl(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((u = be(n, r)), n)) {
											case "dialog":
												Ar("cancel", e), Ar("close", e), (a = r);
												break;
											case "iframe":
											case "object":
											case "embed":
												Ar("load", e), (a = r);
												break;
											case "video":
											case "audio":
												for (a = 0; a < Fr.length; a++) Ar(Fr[a], e);
												a = r;
												break;
											case "source":
												Ar("error", e), (a = r);
												break;
											case "img":
											case "image":
											case "link":
												Ar("error", e), Ar("load", e), (a = r);
												break;
											case "details":
												Ar("toggle", e), (a = r);
												break;
											case "input":
												J(e, r), (a = G(e, r)), Ar("invalid", e);
												break;
											case "option":
											default:
												a = r;
												break;
											case "select":
												(e._wrapperState = {wasMultiple: !!r.multiple}), (a = I({}, r, {value: void 0})), Ar("invalid", e);
												break;
											case "textarea":
												ae(e, r), (a = re(e, r)), Ar("invalid", e);
										}
										for (i in (ye(n, a), (s = a)))
											if (s.hasOwnProperty(i)) {
												var c = s[i];
												"style" === i
													? me(e, c)
													: "dangerouslySetInnerHTML" === i
													? null != (c = c ? c.__html : void 0) && fe(e, c)
													: "children" === i
													? "string" === typeof c
														? ("textarea" !== n || "" !== c) && de(e, c)
														: "number" === typeof c && de(e, "" + c)
													: "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Ar("scroll", e) : null != c && b(e, i, c, u));
											}
										switch (n) {
											case "input":
												K(e), Z(e, r, !1);
												break;
											case "textarea":
												K(e), ie(e);
												break;
											case "option":
												null != r.value && e.setAttribute("value", "" + H(r.value));
												break;
											case "select":
												(e.multiple = !!r.multiple), null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof a.onClick && (e.onclick = Zr);
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return Ql(t), null;
						case 6:
							if (e && null != t.stateNode) Fl(e, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
								if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
									if (((r = t.stateNode), (n = t.memoizedProps), (r[da] = t), (i = r.nodeValue !== n) && null !== (e = no)))
										switch (e.tag) {
											case 3:
												Xr(r.nodeValue, n, 0 !== (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning && Xr(r.nodeValue, n, 0 !== (1 & e.mode));
										}
									i && (t.flags |= 4);
								} else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t), (t.stateNode = r);
							}
							return Ql(t), null;
						case 13:
							if ((Ea(ui), (r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
								if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(), ho(), (t.flags |= 98560), (i = !1);
								else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
										i[da] = t;
									} else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
									Ql(t), (i = !1);
								} else null !== oo && (ls(oo), (oo = null)), (i = !0);
								if (!i) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags) ? ((t.lanes = n), t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && ((t.child.flags |= 8192), 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ui.current) ? 0 === Fu && (Fu = 3) : ms())), null !== t.updateQueue && (t.flags |= 4), Ql(t), null);
						case 4:
							return oi(), Tl(e, t), null === e && Br(t.stateNode.containerInfo), Ql(t), null;
						case 10:
							return xo(t.type._context), Ql(t), null;
						case 19:
							if ((Ea(ui), null === (i = t.memoizedState))) return Ql(t), null;
							if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
								if (r) Kl(i, !1);
								else {
									if (0 !== Fu || (null !== e && 0 !== (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (u = si(e))) {
												for (t.flags |= 128, Kl(i, !1), null !== (r = u.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; null !== n; )
													(e = r),
														((i = n).flags &= 14680066),
														null === (u = i.alternate)
															? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null))
															: ((i.childLanes = u.childLanes),
															  (i.lanes = u.lanes),
															  (i.child = u.child),
															  (i.subtreeFlags = 0),
															  (i.deletions = null),
															  (i.memoizedProps = u.memoizedProps),
															  (i.memoizedState = u.memoizedState),
															  (i.updateQueue = u.updateQueue),
															  (i.type = u.type),
															  (e = u.dependencies),
															  (i.dependencies = null === e ? null : {lanes: e.lanes, firstContext: e.firstContext})),
														(n = n.sibling);
												return Ca(ui, (1 & ui.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== i.tail && Ye() > Wu && ((t.flags |= 128), (r = !0), Kl(i, !1), (t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = si(u))) {
										if (((t.flags |= 128), (r = !0), null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)), Kl(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !ao)) return Ql(t), null;
									} else 2 * Ye() - i.renderingStartTime > Wu && 1073741824 !== n && ((t.flags |= 128), (r = !0), Kl(i, !1), (t.lanes = 4194304));
								i.isBackwards ? ((u.sibling = t.child), (t.child = u)) : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u), (i.last = u));
							}
							return null !== i.tail ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = Ye()), (t.sibling = null), (n = ui.current), Ca(ui, r ? (1 & n) | 2 : 1 & n), t) : (Ql(t), null);
						case 22:
						case 23:
							return ds(), (r = null !== t.memoizedState), null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Tu) && (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ql(t), null;
						case 24:
						case 25:
							return null;
					}
					throw Error(o(156, t.tag));
				}
				function Gl(e, t) {
					switch ((to(t), t.tag)) {
						case 1:
							return ja(t.type) && Ta(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 3:
							return oi(), Ea(La), Ea(Na), fi(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 5:
							return li(t), null;
						case 13:
							if ((Ea(ui), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
								if (null === t.alternate) throw Error(o(340));
								ho();
							}
							return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 19:
							return Ea(ui), null;
						case 4:
							return oi(), null;
						case 10:
							return xo(t.type._context), null;
						case 22:
						case 23:
							return ds(), null;
						default:
							return null;
					}
				}
				(jl = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Tl = function () {}),
					(zl = function (e, t, n, r) {
						var a = e.memoizedProps;
						if (a !== r) {
							(e = t.stateNode), ri(ei.current);
							var o,
								i = null;
							switch (n) {
								case "input":
									(a = G(e, a)), (r = G(e, r)), (i = []);
									break;
								case "select":
									(a = I({}, a, {value: void 0})), (r = I({}, r, {value: void 0})), (i = []);
									break;
								case "textarea":
									(a = re(e, a)), (r = re(e, r)), (i = []);
									break;
								default:
									"function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr);
							}
							for (c in (ye(n, r), (n = null), a))
								if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
									if ("style" === c) {
										var u = a[c];
										for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
									} else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
							for (c in r) {
								var s = r[c];
								if (((u = null != a ? a[c] : void 0), r.hasOwnProperty(c) && s !== u && (null != s || null != u)))
									if ("style" === c)
										if (u) {
											for (o in u) !u.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
											for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
										} else n || (i || (i = []), i.push(c, n)), (n = s);
									else
										"dangerouslySetInnerHTML" === c
											? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), null != s && u !== s && (i = i || []).push(c, s))
											: "children" === c
											? ("string" !== typeof s && "number" !== typeof s) || (i = i || []).push(c, "" + s)
											: "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ar("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
							}
							n && (i = i || []).push("style", n);
							var c = i;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(Fl = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Jl = !1,
					Yl = !1,
					Xl = "function" === typeof WeakSet ? WeakSet : Set,
					Zl = null;
				function eu(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n)
							try {
								n(null);
							} catch (r) {
								Es(e, t, r);
							}
						else n.current = null;
				}
				function tu(e, t, n) {
					try {
						n();
					} catch (r) {
						Es(e, t, r);
					}
				}
				var nu = !1;
				function ru(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = (r = r.next);
						do {
							if ((a.tag & e) === e) {
								var o = a.destroy;
								(a.destroy = void 0), void 0 !== o && tu(t, n, o);
							}
							a = a.next;
						} while (a !== r);
					}
				}
				function au(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function ou(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
					}
				}
				function iu(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), iu(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag && null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[ga], delete t[ma], delete t[va]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function lu(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function uu(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || lu(e.return)) return null;
							e = e.return;
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function su(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) (e = e.stateNode), t ? (8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = Zr));
					else if (4 !== r && null !== (e = e.child)) for (su(e, t, n), e = e.sibling; null !== e; ) su(e, t, n), (e = e.sibling);
				}
				function cu(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child)) for (cu(e, t, n), e = e.sibling; null !== e; ) cu(e, t, n), (e = e.sibling);
				}
				var fu = null,
					du = !1;
				function pu(e, t, n) {
					for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
				}
				function hu(e, t, n) {
					if (ot && "function" === typeof ot.onCommitFiberUnmount)
						try {
							ot.onCommitFiberUnmount(at, n);
						} catch (l) {}
					switch (n.tag) {
						case 5:
							Yl || eu(n, t);
						case 6:
							var r = fu,
								a = du;
							(fu = null), pu(e, t, n), (du = a), null !== (fu = r) && (du ? ((e = fu), (n = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
							break;
						case 18:
							null !== fu && (du ? ((e = fu), (n = n.stateNode), 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Bt(e)) : ua(fu, n.stateNode));
							break;
						case 4:
							(r = fu), (a = du), (fu = n.stateNode.containerInfo), (du = !0), pu(e, t, n), (fu = r), (du = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Yl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
								a = r = r.next;
								do {
									var o = a,
										i = o.destroy;
									(o = o.tag), void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && tu(n, t, i), (a = a.next);
								} while (a !== r);
							}
							pu(e, t, n);
							break;
						case 1:
							if (!Yl && (eu(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount))
								try {
									(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
								} catch (l) {
									Es(n, t, l);
								}
							pu(e, t, n);
							break;
						case 21:
							pu(e, t, n);
							break;
						case 22:
							1 & n.mode ? ((Yl = (r = Yl) || null !== n.memoizedState), pu(e, t, n), (Yl = r)) : pu(e, t, n);
							break;
						default:
							pu(e, t, n);
					}
				}
				function gu(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Xl()),
							t.forEach(function (t) {
								var r = Ls.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function mu(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									l = t,
									u = l;
								e: for (; null !== u; ) {
									switch (u.tag) {
										case 5:
											(fu = u.stateNode), (du = !1);
											break e;
										case 3:
										case 4:
											(fu = u.stateNode.containerInfo), (du = !0);
											break e;
									}
									u = u.return;
								}
								if (null === fu) throw Error(o(160));
								hu(i, l, a), (fu = null), (du = !1);
								var s = a.alternate;
								null !== s && (s.return = null), (a.return = null);
							} catch (c) {
								Es(a, t, c);
							}
						}
					if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
				}
				function vu(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((mu(t, e), yu(e), 4 & r)) {
								try {
									ru(3, e, e.return), au(3, e);
								} catch (m) {
									Es(e, e.return, m);
								}
								try {
									ru(5, e, e.return);
								} catch (m) {
									Es(e, e.return, m);
								}
							}
							break;
						case 1:
							mu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
							break;
						case 5:
							if ((mu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags)) {
								var a = e.stateNode;
								try {
									de(a, "");
								} catch (m) {
									Es(e, e.return, m);
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									l = null !== n ? n.memoizedProps : i,
									u = e.type,
									s = e.updateQueue;
								if (((e.updateQueue = null), null !== s))
									try {
										"input" === u && "radio" === i.type && null != i.name && Y(a, i), be(u, l);
										var c = be(u, i);
										for (l = 0; l < s.length; l += 2) {
											var f = s[l],
												d = s[l + 1];
											"style" === f ? me(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c);
										}
										switch (u) {
											case "input":
												X(a, i);
												break;
											case "textarea":
												oe(a, i);
												break;
											case "select":
												var p = a._wrapperState.wasMultiple;
												a._wrapperState.wasMultiple = !!i.multiple;
												var h = i.value;
												null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
										}
										a[pa] = i;
									} catch (m) {
										Es(e, e.return, m);
									}
							}
							break;
						case 6:
							if ((mu(t, e), yu(e), 4 & r)) {
								if (null === e.stateNode) throw Error(o(162));
								(a = e.stateNode), (i = e.memoizedProps);
								try {
									a.nodeValue = i;
								} catch (m) {
									Es(e, e.return, m);
								}
							}
							break;
						case 3:
							if ((mu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
								try {
									Bt(t.containerInfo);
								} catch (m) {
									Es(e, e.return, m);
								}
							break;
						case 4:
						default:
							mu(t, e), yu(e);
							break;
						case 13:
							mu(t, e), yu(e), 8192 & (a = e.child).flags && ((i = null !== a.memoizedState), (a.stateNode.isHidden = i), !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (Bu = Ye())), 4 & r && gu(e);
							break;
						case 22:
							if (((f = null !== n && null !== n.memoizedState), 1 & e.mode ? ((Yl = (c = Yl) || f), mu(t, e), (Yl = c)) : mu(t, e), yu(e), 8192 & r)) {
								if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode)))
									for (Zl = e, f = e.child; null !== f; ) {
										for (d = Zl = f; null !== Zl; ) {
											switch (((h = (p = Zl).child), p.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													ru(4, p, p.return);
													break;
												case 1:
													eu(p, p.return);
													var g = p.stateNode;
													if ("function" === typeof g.componentWillUnmount) {
														(r = p), (n = p.return);
														try {
															(t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
														} catch (m) {
															Es(r, n, m);
														}
													}
													break;
												case 5:
													eu(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														Su(d);
														continue;
													}
											}
											null !== h ? ((h.return = p), (Zl = h)) : Su(d);
										}
										f = f.sibling;
									}
								e: for (f = null, d = e; ; ) {
									if (5 === d.tag) {
										if (null === f) {
											f = d;
											try {
												(a = d.stateNode), c ? ("function" === typeof (i = a.style).setProperty ? i.setProperty("display", "none", "important") : (i.display = "none")) : ((u = d.stateNode), (l = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null), (u.style.display = ge("display", l)));
											} catch (m) {
												Es(e, e.return, m);
											}
										}
									} else if (6 === d.tag) {
										if (null === f)
											try {
												d.stateNode.nodeValue = c ? "" : d.memoizedProps;
											} catch (m) {
												Es(e, e.return, m);
											}
									} else if (((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) && null !== d.child) {
										(d.child.return = d), (d = d.child);
										continue;
									}
									if (d === e) break;
									for (; null === d.sibling; ) {
										if (null === d.return || d.return === e) break e;
										f === d && (f = null), (d = d.return);
									}
									f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
								}
							}
							break;
						case 19:
							mu(t, e), yu(e), 4 & r && gu(e);
						case 21:
					}
				}
				function yu(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (lu(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(o(160));
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (de(a, ""), (r.flags &= -33)), cu(e, uu(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									su(e, uu(e), i);
									break;
								default:
									throw Error(o(161));
							}
						} catch (l) {
							Es(e, e.return, l);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function bu(e, t, n) {
					(Zl = e), ku(e, t, n);
				}
				function ku(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
						var a = Zl,
							o = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Jl;
							if (!i) {
								var l = a.alternate,
									u = (null !== l && null !== l.memoizedState) || Yl;
								l = Jl;
								var s = Yl;
								if (((Jl = i), (Yl = u) && !s)) for (Zl = a; null !== Zl; ) (u = (i = Zl).child), 22 === i.tag && null !== i.memoizedState ? xu(a) : null !== u ? ((u.return = i), (Zl = u)) : xu(a);
								for (; null !== o; ) (Zl = o), ku(o, t, n), (o = o.sibling);
								(Zl = a), (Jl = l), (Yl = s);
							}
							wu(e);
						} else 0 !== (8772 & a.subtreeFlags) && null !== o ? ((o.return = a), (Zl = o)) : wu(e);
					}
				}
				function wu(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Yl || au(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Yl)
												if (null === n) r.componentDidMount();
												else {
													var a = t.elementType === t.type ? n.memoizedProps : vo(t.type, n.memoizedProps);
													r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
												}
											var i = t.updateQueue;
											null !== i && Ao(t, i, r);
											break;
										case 3:
											var l = t.updateQueue;
											if (null !== l) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Ao(t, l, n);
											}
											break;
										case 5:
											var u = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = u;
												var s = t.memoizedProps;
												switch (t.type) {
													case "button":
													case "input":
													case "select":
													case "textarea":
														s.autoFocus && n.focus();
														break;
													case "img":
														s.src && (n.src = s.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var f = c.memoizedState;
													if (null !== f) {
														var d = f.dehydrated;
														null !== d && Bt(d);
													}
												}
											}
											break;
										default:
											throw Error(o(163));
									}
								Yl || (512 & t.flags && ou(t));
							} catch (p) {
								Es(t, t.return, p);
							}
						}
						if (t === e) {
							Zl = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Zl = n);
							break;
						}
						Zl = t.return;
					}
				}
				function Su(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						if (t === e) {
							Zl = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Zl = n);
							break;
						}
						Zl = t.return;
					}
				}
				function xu(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										au(4, t);
									} catch (u) {
										Es(t, n, u);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount();
										} catch (u) {
											Es(t, a, u);
										}
									}
									var o = t.return;
									try {
										ou(t);
									} catch (u) {
										Es(t, o, u);
									}
									break;
								case 5:
									var i = t.return;
									try {
										ou(t);
									} catch (u) {
										Es(t, i, u);
									}
							}
						} catch (u) {
							Es(t, t.return, u);
						}
						if (t === e) {
							Zl = null;
							break;
						}
						var l = t.sibling;
						if (null !== l) {
							(l.return = t.return), (Zl = l);
							break;
						}
						Zl = t.return;
					}
				}
				var Ou,
					Eu = Math.ceil,
					Cu = k.ReactCurrentDispatcher,
					Pu = k.ReactCurrentOwner,
					Nu = k.ReactCurrentBatchConfig,
					Lu = 0,
					_u = null,
					Ru = null,
					ju = 0,
					Tu = 0,
					zu = Oa(0),
					Fu = 0,
					Du = null,
					Iu = 0,
					Mu = 0,
					Au = 0,
					Uu = null,
					Vu = null,
					Bu = 0,
					Wu = 1 / 0,
					Hu = null,
					$u = !1,
					Ku = null,
					Qu = null,
					qu = !1,
					Gu = null,
					Ju = 0,
					Yu = 0,
					Xu = null,
					Zu = -1,
					es = 0;
				function ts() {
					return 0 !== (6 & Lu) ? Ye() : -1 !== Zu ? Zu : (Zu = Ye());
				}
				function ns(e) {
					return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Lu) && 0 !== ju ? ju & -ju : null !== mo.transition ? (0 === es && (es = gt()), es) : 0 !== (e = bt) ? e : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
				}
				function rs(e, t, n, r) {
					if (50 < Yu) throw ((Yu = 0), (Xu = null), Error(o(185)));
					vt(e, n, r), (0 !== (2 & Lu) && e === _u) || (e === _u && (0 === (2 & Lu) && (Mu |= n), 4 === Fu && us(e, ju)), as(e, r), 1 === n && 0 === Lu && 0 === (1 & t.mode) && ((Wu = Ye() + 500), Aa && Ba()));
				}
				function as(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
							var i = 31 - it(o),
								l = 1 << i,
								u = a[i];
							-1 === u ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t)) : u <= t && (e.expiredLanes |= l), (o &= ~l);
						}
					})(e, t);
					var r = dt(e, e === _u ? ju : 0);
					if (0 === r) null !== n && qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && qe(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Aa = !0), Va(e);
								  })(ss.bind(null, e))
								: Va(ss.bind(null, e)),
								ia(function () {
									0 === (6 & Lu) && Ba();
								}),
								(n = null);
						else {
							switch (kt(r)) {
								case 1:
									n = Ze;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = _s(n, os.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function os(e, t) {
					if (((Zu = -1), (es = 0), 0 !== (6 & Lu))) throw Error(o(327));
					var n = e.callbackNode;
					if (xs() && e.callbackNode !== n) return null;
					var r = dt(e, e === _u ? ju : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
					else {
						t = r;
						var a = Lu;
						Lu |= 2;
						var i = gs();
						for ((_u === e && ju === t) || ((Hu = null), (Wu = Ye() + 500), ps(e, t)); ; )
							try {
								bs();
								break;
							} catch (u) {
								hs(e, u);
							}
						So(), (Cu.current = i), (Lu = a), null !== Ru ? (t = 0) : ((_u = null), (ju = 0), (t = Fu));
					}
					if (0 !== t) {
						if ((2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))), 1 === t)) throw ((n = Du), ps(e, 0), us(e, r), as(e, Ye()), n);
						if (6 === t) us(e, r);
						else {
							if (
								((a = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var a = n[r],
															o = a.getSnapshot;
														a = a.value;
														try {
															if (!lr(o(), a)) return !1;
														} catch (l) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(a) &&
									(2 === (t = vs(e, r)) && 0 !== (i = ht(e)) && ((r = i), (t = is(e, i))), 1 === t))
							)
								throw ((n = Du), ps(e, 0), us(e, r), as(e, Ye()), n);
							switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									Ss(e, Vu, Hu);
									break;
								case 3:
									if ((us(e, r), (130023424 & r) === r && 10 < (t = Bu + 500 - Ye()))) {
										if (0 !== dt(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											ts(), (e.pingedLanes |= e.suspendedLanes & a);
											break;
										}
										e.timeoutHandle = ra(Ss.bind(null, e, Vu, Hu), t);
										break;
									}
									Ss(e, Vu, Hu);
									break;
								case 4:
									if ((us(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, a = -1; 0 < r; ) {
										var l = 31 - it(r);
										(i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
									}
									if (((r = a), 10 < (r = (120 > (r = Ye() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r))) {
										e.timeoutHandle = ra(Ss.bind(null, e, Vu, Hu), r);
										break;
									}
									Ss(e, Vu, Hu);
									break;
								default:
									throw Error(o(329));
							}
						}
					}
					return as(e, Ye()), e.callbackNode === n ? os.bind(null, e) : null;
				}
				function is(e, t) {
					var n = Uu;
					return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = vs(e, t)) && ((t = Vu), (Vu = n), null !== t && ls(t)), e;
				}
				function ls(e) {
					null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
				}
				function us(e, t) {
					for (t &= ~Au, t &= ~Mu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
						var n = 31 - it(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function ss(e) {
					if (0 !== (6 & Lu)) throw Error(o(327));
					xs();
					var t = dt(e, 0);
					if (0 === (1 & t)) return as(e, Ye()), null;
					var n = vs(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && ((t = r), (n = is(e, r)));
					}
					if (1 === n) throw ((n = Du), ps(e, 0), us(e, t), as(e, Ye()), n);
					if (6 === n) throw Error(o(345));
					return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Ss(e, Vu, Hu), as(e, Ye()), null;
				}
				function cs(e, t) {
					var n = Lu;
					Lu |= 1;
					try {
						return e(t);
					} finally {
						0 === (Lu = n) && ((Wu = Ye() + 500), Aa && Ba());
					}
				}
				function fs(e) {
					null !== Gu && 0 === Gu.tag && 0 === (6 & Lu) && xs();
					var t = Lu;
					Lu |= 1;
					var n = Nu.transition,
						r = bt;
					try {
						if (((Nu.transition = null), (bt = 1), e)) return e();
					} finally {
						(bt = r), (Nu.transition = n), 0 === (6 & (Lu = t)) && Ba();
					}
				}
				function ds() {
					(Tu = zu.current), Ea(zu);
				}
				function ps(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ru))
						for (n = Ru.return; null !== n; ) {
							var r = n;
							switch ((to(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) && void 0 !== r && Ta();
									break;
								case 3:
									oi(), Ea(La), Ea(Na), fi();
									break;
								case 5:
									li(r);
									break;
								case 4:
									oi();
									break;
								case 13:
								case 19:
									Ea(ui);
									break;
								case 10:
									xo(r.type._context);
									break;
								case 22:
								case 23:
									ds();
							}
							n = n.return;
						}
					if (((_u = e), (Ru = e = zs(e.current, null)), (ju = Tu = t), (Fu = 0), (Du = null), (Au = Mu = Iu = 0), (Vu = Uu = null), null !== Po)) {
						for (t = 0; t < Po.length; t++)
							if (null !== (r = (n = Po[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									o = n.pending;
								if (null !== o) {
									var i = o.next;
									(o.next = a), (r.next = i);
								}
								n.pending = r;
							}
						Po = null;
					}
					return e;
				}
				function hs(e, t) {
					for (;;) {
						var n = Ru;
						try {
							if ((So(), (di.current = il), yi)) {
								for (var r = gi.memoizedState; null !== r; ) {
									var a = r.queue;
									null !== a && (a.pending = null), (r = r.next);
								}
								yi = !1;
							}
							if (((hi = 0), (vi = mi = gi = null), (bi = !1), (ki = 0), (Pu.current = null), null === n || null === n.return)) {
								(Fu = 1), (Du = t), (Ru = null);
								break;
							}
							e: {
								var i = e,
									l = n.return,
									u = n,
									s = t;
								if (((t = ju), (u.flags |= 32768), null !== s && "object" === typeof s && "function" === typeof s.then)) {
									var c = s,
										f = u,
										d = f.tag;
									if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
										var p = f.alternate;
										p ? ((f.updateQueue = p.updateQueue), (f.memoizedState = p.memoizedState), (f.lanes = p.lanes)) : ((f.updateQueue = null), (f.memoizedState = null));
									}
									var h = vl(l);
									if (null !== h) {
										(h.flags &= -257), yl(h, l, u, 0, t), 1 & h.mode && ml(i, c, t), (s = c);
										var g = (t = h).updateQueue;
										if (null === g) {
											var m = new Set();
											m.add(s), (t.updateQueue = m);
										} else g.add(s);
										break e;
									}
									if (0 === (1 & t)) {
										ml(i, c, t), ms();
										break e;
									}
									s = Error(o(426));
								} else if (ao && 1 & u.mode) {
									var v = vl(l);
									if (null !== v) {
										0 === (65536 & v.flags) && (v.flags |= 256), yl(v, l, u, 0, t), go(cl(s, u));
										break e;
									}
								}
								(i = s = cl(s, u)), 4 !== Fu && (Fu = 2), null === Uu ? (Uu = [i]) : Uu.push(i), (i = l);
								do {
									switch (i.tag) {
										case 3:
											(i.flags |= 65536), (t &= -t), (i.lanes |= t), Io(i, hl(0, s, t));
											break e;
										case 1:
											u = s;
											var y = i.type,
												b = i.stateNode;
											if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || (null !== b && "function" === typeof b.componentDidCatch && (null === Qu || !Qu.has(b))))) {
												(i.flags |= 65536), (t &= -t), (i.lanes |= t), Io(i, gl(i, u, t));
												break e;
											}
									}
									i = i.return;
								} while (null !== i);
							}
							ws(n);
						} catch (k) {
							(t = k), Ru === n && null !== n && (Ru = n = n.return);
							continue;
						}
						break;
					}
				}
				function gs() {
					var e = Cu.current;
					return (Cu.current = il), null === e ? il : e;
				}
				function ms() {
					(0 !== Fu && 3 !== Fu && 2 !== Fu) || (Fu = 4), null === _u || (0 === (268435455 & Iu) && 0 === (268435455 & Mu)) || us(_u, ju);
				}
				function vs(e, t) {
					var n = Lu;
					Lu |= 2;
					var r = gs();
					for ((_u === e && ju === t) || ((Hu = null), ps(e, t)); ; )
						try {
							ys();
							break;
						} catch (a) {
							hs(e, a);
						}
					if ((So(), (Lu = n), (Cu.current = r), null !== Ru)) throw Error(o(261));
					return (_u = null), (ju = 0), Fu;
				}
				function ys() {
					for (; null !== Ru; ) ks(Ru);
				}
				function bs() {
					for (; null !== Ru && !Ge(); ) ks(Ru);
				}
				function ks(e) {
					var t = Ou(e.alternate, e, Tu);
					(e.memoizedProps = e.pendingProps), null === t ? ws(e) : (Ru = t), (Pu.current = null);
				}
				function ws(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = ql(n, t, Tu))) return void (Ru = n);
						} else {
							if (null !== (n = Gl(n, t))) return (n.flags &= 32767), void (Ru = n);
							if (null === e) return (Fu = 6), void (Ru = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Ru = t);
						Ru = t = e;
					} while (null !== t);
					0 === Fu && (Fu = 5);
				}
				function Ss(e, t, n) {
					var r = bt,
						a = Nu.transition;
					try {
						(Nu.transition = null),
							(bt = 1),
							(function (e, t, n, r) {
								do {
									xs();
								} while (null !== Gu);
								if (0 !== (6 & Lu)) throw Error(o(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(o(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var i = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var a = 31 - it(n),
												o = 1 << a;
											(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
										}
									})(e, i),
									e === _u && ((Ru = _u = null), (ju = 0)),
									(0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
										qu ||
										((qu = !0),
										_s(tt, function () {
											return xs(), null;
										})),
									(i = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || i)
								) {
									(i = Nu.transition), (Nu.transition = null);
									var l = bt;
									bt = 1;
									var u = Lu;
									(Lu |= 4),
										(Pu.current = null),
										(function (e, t) {
											if (((ea = Ht), pr((e = dr())))) {
												if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd};
												else
													e: {
														var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var a = r.anchorOffset,
																i = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, i.nodeType;
															} catch (w) {
																n = null;
																break e;
															}
															var l = 0,
																u = -1,
																s = -1,
																c = 0,
																f = 0,
																d = e,
																p = null;
															t: for (;;) {
																for (var h; d !== n || (0 !== a && 3 !== d.nodeType) || (u = l + a), d !== i || (0 !== r && 3 !== d.nodeType) || (s = l + r), 3 === d.nodeType && (l += d.nodeValue.length), null !== (h = d.firstChild); ) (p = d), (d = h);
																for (;;) {
																	if (d === e) break t;
																	if ((p === n && ++c === a && (u = l), p === i && ++f === r && (s = l), null !== (h = d.nextSibling))) break;
																	p = (d = p).parentNode;
																}
																d = h;
															}
															n = -1 === u || -1 === s ? null : {start: u, end: s};
														} else n = null;
													}
												n = n || {start: 0, end: 0};
											} else n = null;
											for (ta = {focusedElem: e, selectionRange: n}, Ht = !1, Zl = t; null !== Zl; )
												if (((e = (t = Zl).child), 0 !== (1028 & t.subtreeFlags) && null !== e)) (e.return = t), (Zl = e);
												else
													for (; null !== Zl; ) {
														t = Zl;
														try {
															var g = t.alternate;
															if (0 !== (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== g) {
																			var m = g.memoizedProps,
																				v = g.memoizedState,
																				y = t.stateNode,
																				b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : vo(t.type, m), v);
																			y.__reactInternalSnapshotBeforeUpdate = b;
																		}
																		break;
																	case 3:
																		var k = t.stateNode.containerInfo;
																		1 === k.nodeType ? (k.textContent = "") : 9 === k.nodeType && k.documentElement && k.removeChild(k.documentElement);
																		break;
																	default:
																		throw Error(o(163));
																}
														} catch (w) {
															Es(t, t.return, w);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Zl = e);
															break;
														}
														Zl = t.return;
													}
											(g = nu), (nu = !1);
										})(e, n),
										vu(n, e),
										hr(ta),
										(Ht = !!ea),
										(ta = ea = null),
										(e.current = n),
										bu(n, e, a),
										Je(),
										(Lu = u),
										(bt = l),
										(Nu.transition = i);
								} else e.current = n;
								if (
									(qu && ((qu = !1), (Gu = e), (Ju = a)),
									(i = e.pendingLanes),
									0 === i && (Qu = null),
									(function (e) {
										if (ot && "function" === typeof ot.onCommitFiberRoot)
											try {
												ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
											} catch (t) {}
									})(n.stateNode),
									as(e, Ye()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++) (a = t[n]), r(a.value, {componentStack: a.stack, digest: a.digest});
								if ($u) throw (($u = !1), (e = Ku), (Ku = null), e);
								0 !== (1 & Ju) && 0 !== e.tag && xs(), (i = e.pendingLanes), 0 !== (1 & i) ? (e === Xu ? Yu++ : ((Yu = 0), (Xu = e))) : (Yu = 0), Ba();
							})(e, t, n, r);
					} finally {
						(Nu.transition = a), (bt = r);
					}
					return null;
				}
				function xs() {
					if (null !== Gu) {
						var e = kt(Ju),
							t = Nu.transition,
							n = bt;
						try {
							if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Gu)) var r = !1;
							else {
								if (((e = Gu), (Gu = null), (Ju = 0), 0 !== (6 & Lu))) throw Error(o(331));
								var a = Lu;
								for (Lu |= 4, Zl = e.current; null !== Zl; ) {
									var i = Zl,
										l = i.child;
									if (0 !== (16 & Zl.flags)) {
										var u = i.deletions;
										if (null !== u) {
											for (var s = 0; s < u.length; s++) {
												var c = u[s];
												for (Zl = c; null !== Zl; ) {
													var f = Zl;
													switch (f.tag) {
														case 0:
														case 11:
														case 15:
															ru(8, f, i);
													}
													var d = f.child;
													if (null !== d) (d.return = f), (Zl = d);
													else
														for (; null !== Zl; ) {
															var p = (f = Zl).sibling,
																h = f.return;
															if ((iu(f), f === c)) {
																Zl = null;
																break;
															}
															if (null !== p) {
																(p.return = h), (Zl = p);
																break;
															}
															Zl = h;
														}
												}
											}
											var g = i.alternate;
											if (null !== g) {
												var m = g.child;
												if (null !== m) {
													g.child = null;
													do {
														var v = m.sibling;
														(m.sibling = null), (m = v);
													} while (null !== m);
												}
											}
											Zl = i;
										}
									}
									if (0 !== (2064 & i.subtreeFlags) && null !== l) (l.return = i), (Zl = l);
									else
										for (; null !== Zl; ) {
											if (0 !== (2048 & (i = Zl).flags))
												switch (i.tag) {
													case 0:
													case 11:
													case 15:
														ru(9, i, i.return);
												}
											var y = i.sibling;
											if (null !== y) {
												(y.return = i.return), (Zl = y);
												break;
											}
											Zl = i.return;
										}
								}
								var b = e.current;
								for (Zl = b; null !== Zl; ) {
									var k = (l = Zl).child;
									if (0 !== (2064 & l.subtreeFlags) && null !== k) (k.return = l), (Zl = k);
									else
										for (l = b; null !== Zl; ) {
											if (0 !== (2048 & (u = Zl).flags))
												try {
													switch (u.tag) {
														case 0:
														case 11:
														case 15:
															au(9, u);
													}
												} catch (S) {
													Es(u, u.return, S);
												}
											if (u === l) {
												Zl = null;
												break;
											}
											var w = u.sibling;
											if (null !== w) {
												(w.return = u.return), (Zl = w);
												break;
											}
											Zl = u.return;
										}
								}
								if (((Lu = a), Ba(), ot && "function" === typeof ot.onPostCommitFiberRoot))
									try {
										ot.onPostCommitFiberRoot(at, e);
									} catch (S) {}
								r = !0;
							}
							return r;
						} finally {
							(bt = n), (Nu.transition = t);
						}
					}
					return !1;
				}
				function Os(e, t, n) {
					(e = Fo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)), (t = ts()), null !== e && (vt(e, 1, t), as(e, t));
				}
				function Es(e, t, n) {
					if (3 === e.tag) Os(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								Os(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if ("function" === typeof t.type.getDerivedStateFromError || ("function" === typeof r.componentDidCatch && (null === Qu || !Qu.has(r)))) {
									(t = Fo(t, (e = gl(t, (e = cl(n, e)), 1)), 1)), (e = ts()), null !== t && (vt(t, 1, e), as(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Cs(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t), (t = ts()), (e.pingedLanes |= e.suspendedLanes & n), _u === e && (ju & n) === n && (4 === Fu || (3 === Fu && (130023424 & ju) === ju && 500 > Ye() - Bu) ? ps(e, 0) : (Au |= n)), as(e, t);
				}
				function Ps(e, t) {
					0 === t && (0 === (1 & e.mode) ? (t = 1) : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = ts();
					null !== (e = _o(e, t)) && (vt(e, t, n), as(e, n));
				}
				function Ns(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Ps(e, n);
				}
				function Ls(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314));
					}
					null !== r && r.delete(t), Ps(e, n);
				}
				function _s(e, t) {
					return Qe(e, t);
				}
				function Rs(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function js(e, t, n, r) {
					return new Rs(e, t, n, r);
				}
				function Ts(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function zs(e, t) {
					var n = e.alternate;
					return (
						null === n ? (((n = js(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies = null === t ? null : {lanes: t.lanes, firstContext: t.firstContext}),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function Fs(e, t, n, r, a, i) {
					var l = 2;
					if (((r = e), "function" === typeof e)) Ts(e) && (l = 1);
					else if ("string" === typeof e) l = 5;
					else
						e: switch (e) {
							case x:
								return Ds(n.children, a, i, t);
							case O:
								(l = 8), (a |= 8);
								break;
							case E:
								return ((e = js(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e;
							case L:
								return ((e = js(13, n, t, a)).elementType = L), (e.lanes = i), e;
							case _:
								return ((e = js(19, n, t, a)).elementType = _), (e.lanes = i), e;
							case T:
								return Is(n, a, i, t);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case C:
											l = 10;
											break e;
										case P:
											l = 9;
											break e;
										case N:
											l = 11;
											break e;
										case R:
											l = 14;
											break e;
										case j:
											(l = 16), (r = null);
											break e;
									}
								throw Error(o(130, null == e ? e : typeof e, ""));
						}
					return ((t = js(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
				}
				function Ds(e, t, n, r) {
					return ((e = js(7, e, r, t)).lanes = n), e;
				}
				function Is(e, t, n, r) {
					return ((e = js(22, e, r, t)).elementType = T), (e.lanes = n), (e.stateNode = {isHidden: !1}), e;
				}
				function Ms(e, t, n) {
					return ((e = js(6, e, null, t)).lanes = n), e;
				}
				function As(e, t, n) {
					return ((t = js(4, null !== e.children ? e.children : [], e.key, t)).lanes = n), (t.stateNode = {containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}), t;
				}
				function Us(e, t, n, r, a) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = mt(0)),
						(this.expirationTimes = mt(-1)),
						(this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
						(this.entanglements = mt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = a),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Vs(e, t, n, r, a, o, i, l, u) {
					return (e = new Us(e, t, n, l, u)), 1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0), (o = js(3, null, null, t)), (e.current = o), (o.stateNode = e), (o.memoizedState = {element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null}), jo(o), e;
				}
				function Bs(e) {
					if (!e) return Pa;
					e: {
						if (Be((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(o(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (ja(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(o(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (ja(n)) return Fa(e, n, t);
					}
					return t;
				}
				function Ws(e, t, n, r, a, o, i, l, u) {
					return ((e = Vs(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null)), (n = e.current), ((o = zo((r = ts()), (a = ns(n)))).callback = void 0 !== t && null !== t ? t : null), Fo(n, o, a), (e.current.lanes = a), vt(e, a, r), as(e, r), e;
				}
				function Hs(e, t, n, r) {
					var a = t.current,
						o = ts(),
						i = ns(a);
					return (n = Bs(n)), null === t.context ? (t.context = n) : (t.pendingContext = n), ((t = zo(o, i)).payload = {element: e}), null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Fo(a, t, i)) && (rs(e, a, i, o), Do(e, a, i)), i;
				}
				function $s(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
				}
				function Ks(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Qs(e, t) {
					Ks(e, t), (e = e.alternate) && Ks(e, t);
				}
				Ou = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || La.current) kl = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(kl = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												_l(t), ho();
												break;
											case 5:
												ii(t);
												break;
											case 1:
												ja(t.type) && Da(t);
												break;
											case 4:
												ai(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													a = t.memoizedProps.value;
												Ca(yo, r._currentValue), (r._currentValue = a);
												break;
											case 13:
												if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ca(ui, 1 & ui.current), (t.flags |= 128), null) : 0 !== (n & t.child.childLanes) ? Ml(e, t, n) : (Ca(ui, 1 & ui.current), null !== (e = $l(e, t, n)) ? e.sibling : null);
												Ca(ui, 1 & ui.current);
												break;
											case 19:
												if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
													if (r) return Wl(e, t, n);
													t.flags |= 128;
												}
												if ((null !== (a = t.memoizedState) && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)), Ca(ui, ui.current), r)) break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), El(e, t, n);
										}
										return $l(e, t, n);
									})(e, t, n)
								);
							kl = 0 !== (131072 & e.flags);
						}
					else (kl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							Hl(e, t), (e = t.pendingProps);
							var a = Ra(t, Na.current);
							Eo(t, n), (a = Oi(null, t, r, e, a, n));
							var i = Ei();
							return (
								(t.flags |= 1),
								"object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof
									? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ja(r) ? ((i = !0), Da(t)) : (i = !1), (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null), jo(t), (a.updater = Bo), (t.stateNode = a), (a._reactInternals = t), Ko(t, r, e, n), (t = Ll(null, t, r, !0, i, n)))
									: ((t.tag = 0), ao && i && eo(t), wl(null, t, a, n), (t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(Hl(e, t),
									(e = t.pendingProps),
									(r = (a = r._init)(r._payload)),
									(t.type = r),
									(a = t.tag =
										(function (e) {
											if ("function" === typeof e) return Ts(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === N) return 11;
												if (e === R) return 14;
											}
											return 2;
										})(r)),
									(e = vo(r, e)),
									a)
								) {
									case 0:
										t = Pl(null, t, r, e, n);
										break e;
									case 1:
										t = Nl(null, t, r, e, n);
										break e;
									case 11:
										t = Sl(null, t, r, e, n);
										break e;
									case 14:
										t = xl(null, t, r, vo(r.type, e), n);
										break e;
								}
								throw Error(o(306, r, ""));
							}
							return t;
						case 0:
							return (r = t.type), (a = t.pendingProps), Pl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n);
						case 1:
							return (r = t.type), (a = t.pendingProps), Nl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n);
						case 3:
							e: {
								if ((_l(t), null === e)) throw Error(o(387));
								(r = t.pendingProps), (a = (i = t.memoizedState).element), To(e, t), Mo(t, r, null, n);
								var l = t.memoizedState;
								if (((r = l.element), i.isDehydrated)) {
									if (((i = {element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions}), (t.updateQueue.baseState = i), (t.memoizedState = i), 256 & t.flags)) {
										t = Rl(e, t, r, n, (a = cl(Error(o(423)), t)));
										break e;
									}
									if (r !== a) {
										t = Rl(e, t, r, n, (a = cl(Error(o(424)), t)));
										break e;
									}
									for (ro = sa(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Xo(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((ho(), r === a)) {
										t = $l(e, t, n);
										break e;
									}
									wl(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return ii(t), null === e && so(t), (r = t.type), (a = t.pendingProps), (i = null !== e ? e.memoizedProps : null), (l = a.children), na(r, a) ? (l = null) : null !== i && na(r, i) && (t.flags |= 32), Cl(e, t), wl(e, t, l, n), t.child;
						case 6:
							return null === e && so(t), null;
						case 13:
							return Ml(e, t, n);
						case 4:
							return ai(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = Yo(t, null, r, n)) : wl(e, t, r, n), t.child;
						case 11:
							return (r = t.type), (a = t.pendingProps), Sl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n);
						case 7:
							return wl(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return wl(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (((r = t.type._context), (a = t.pendingProps), (i = t.memoizedProps), (l = a.value), Ca(yo, r._currentValue), (r._currentValue = l), null !== i))
									if (lr(i.value, l)) {
										if (i.children === a.children && !La.current) {
											t = $l(e, t, n);
											break e;
										}
									} else
										for (null !== (i = t.child) && (i.return = t); null !== i; ) {
											var u = i.dependencies;
											if (null !== u) {
												l = i.child;
												for (var s = u.firstContext; null !== s; ) {
													if (s.context === r) {
														if (1 === i.tag) {
															(s = zo(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var f = (c = c.shared).pending;
																null === f ? (s.next = s) : ((s.next = f.next), (f.next = s)), (c.pending = s);
															}
														}
														(i.lanes |= n), null !== (s = i.alternate) && (s.lanes |= n), Oo(i.return, n, t), (u.lanes |= n);
														break;
													}
													s = s.next;
												}
											} else if (10 === i.tag) l = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (l = i.return)) throw Error(o(341));
												(l.lanes |= n), null !== (u = l.alternate) && (u.lanes |= n), Oo(l, n, t), (l = i.sibling);
											} else l = i.child;
											if (null !== l) l.return = i;
											else
												for (l = i; null !== l; ) {
													if (l === t) {
														l = null;
														break;
													}
													if (null !== (i = l.sibling)) {
														(i.return = l.return), (l = i);
														break;
													}
													l = l.return;
												}
											i = l;
										}
								wl(e, t, a.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (a = t.type), (r = t.pendingProps.children), Eo(t, n), (r = r((a = Co(a)))), (t.flags |= 1), wl(e, t, r, n), t.child;
						case 14:
							return (a = vo((r = t.type), t.pendingProps)), xl(e, t, r, (a = vo(r.type, a)), n);
						case 15:
							return Ol(e, t, t.type, t.pendingProps, n);
						case 17:
							return (r = t.type), (a = t.pendingProps), (a = t.elementType === r ? a : vo(r, a)), Hl(e, t), (t.tag = 1), ja(r) ? ((e = !0), Da(t)) : (e = !1), Eo(t, n), Ho(t, r, a), Ko(t, r, a, n), Ll(null, t, r, !0, e, n);
						case 19:
							return Wl(e, t, n);
						case 22:
							return El(e, t, n);
					}
					throw Error(o(156, t.tag));
				};
				var qs =
					"function" === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Gs(e) {
					this._internalRoot = e;
				}
				function Js(e) {
					this._internalRoot = e;
				}
				function Ys(e) {
					return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
				}
				function Xs(e) {
					return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
				}
				function Zs() {}
				function ec(e, t, n, r, a) {
					var o = n._reactRootContainer;
					if (o) {
						var i = o;
						if ("function" === typeof a) {
							var l = a;
							a = function () {
								var e = $s(i);
								l.call(e);
							};
						}
						Hs(t, i, e, a);
					} else
						i = (function (e, t, n, r, a) {
							if (a) {
								if ("function" === typeof r) {
									var o = r;
									r = function () {
										var e = $s(i);
										o.call(e);
									};
								}
								var i = Ws(t, r, e, 0, null, !1, 0, "", Zs);
								return (e._reactRootContainer = i), (e[ha] = i.current), Br(8 === e.nodeType ? e.parentNode : e), fs(), i;
							}
							for (; (a = e.lastChild); ) e.removeChild(a);
							if ("function" === typeof r) {
								var l = r;
								r = function () {
									var e = $s(u);
									l.call(e);
								};
							}
							var u = Vs(e, 0, !1, null, 0, !1, 0, "", Zs);
							return (
								(e._reactRootContainer = u),
								(e[ha] = u.current),
								Br(8 === e.nodeType ? e.parentNode : e),
								fs(function () {
									Hs(t, u, n, r);
								}),
								u
							);
						})(n, t, e, a, r);
					return $s(i);
				}
				(Js.prototype.render = Gs.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(o(409));
						Hs(e, t, null, null);
					}),
					(Js.prototype.unmount = Gs.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								fs(function () {
									Hs(null, e, null, null);
								}),
									(t[ha] = null);
							}
						}),
					(Js.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Ot();
							e = {blockedOn: null, target: e, priority: t};
							for (var n = 0; n < Tt.length && 0 !== t && t < Tt[n].priority; n++);
							Tt.splice(n, 0, e), 0 === n && It(e);
						}
					}),
					(wt = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = ft(t.pendingLanes);
									0 !== n && (yt(t, 1 | n), as(t, Ye()), 0 === (6 & Lu) && ((Wu = Ye() + 500), Ba()));
								}
								break;
							case 13:
								fs(function () {
									var t = _o(e, 1);
									if (null !== t) {
										var n = ts();
										rs(t, e, 1, n);
									}
								}),
									Qs(e, 1);
						}
					}),
					(St = function (e) {
						if (13 === e.tag) {
							var t = _o(e, 134217728);
							if (null !== t) rs(t, e, 134217728, ts());
							Qs(e, 134217728);
						}
					}),
					(xt = function (e) {
						if (13 === e.tag) {
							var t = ns(e),
								n = _o(e, t);
							if (null !== n) rs(n, e, t, ts());
							Qs(e, t);
						}
					}),
					(Ot = function () {
						return bt;
					}),
					(Et = function (e, t) {
						var n = bt;
						try {
							return (bt = e), t();
						} finally {
							bt = n;
						}
					}),
					(Se = function (e, t, n) {
						switch (t) {
							case "input":
								if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = wa(r);
											if (!a) throw Error(o(90));
											Q(r), X(r, a);
										}
									}
								}
								break;
							case "textarea":
								oe(e, n);
								break;
							case "select":
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(Ne = cs),
					(Le = fs);
				var tc = {usingClientEntryPoint: !1, Events: [ba, ka, wa, Ce, Pe, cs]},
					nc = {findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: k.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = $e(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							nc.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ac.isDisabled && ac.supportsFiber)
						try {
							(at = ac.inject(rc)), (ot = ac);
						} catch (ce) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
					(t.createPortal = function (e, t) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
						if (!Ys(t)) throw Error(o(200));
						return (function (e, t, n) {
							var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
							return {$$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n};
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Ys(e)) throw Error(o(299));
						var n = !1,
							r = "",
							a = qs;
						return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), (t = Vs(e, 1, !1, null, 0, n, 0, r, a)), (e[ha] = t.current), Br(8 === e.nodeType ? e.parentNode : e), new Gs(t);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ("function" === typeof e.render) throw Error(o(188));
							throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
						}
						return (e = null === (e = $e(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return fs(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Xs(t)) throw Error(o(200));
						return ec(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Ys(e)) throw Error(o(405));
						var r = (null != n && n.hydratedSources) || null,
							a = !1,
							i = "",
							l = qs;
						if ((null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, i, l)), (e[ha] = t.current), Br(e), r))
							for (e = 0; e < r.length; e++) (a = (a = (n = r[e])._getVersion)(n._source)), null == t.mutableSourceEagerHydrationData ? (t.mutableSourceEagerHydrationData = [n, a]) : t.mutableSourceEagerHydrationData.push(n, a);
						return new Js(t);
					}),
					(t.render = function (e, t, n) {
						if (!Xs(t)) throw Error(o(200));
						return ec(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Xs(e)) throw Error(o(40));
						return (
							!!e._reactRootContainer &&
							(fs(function () {
								ec(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[ha] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = cs),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Xs(n)) throw Error(o(200));
						if (null == e || void 0 === e._reactInternals) throw Error(o(38));
						return ec(e, t, n, !1, r);
					}),
					(t.version = "18.2.0-next-9e3b772b8-20220608");
			},
			250: function (e, t, n) {
				var r = n(164);
				(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
			},
			164: function (e, t, n) {
				!(function e() {
					if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(463));
			},
			374: function (e, t, n) {
				var r = n(791),
					a = Symbol.for("react.element"),
					o = Symbol.for("react.fragment"),
					i = Object.prototype.hasOwnProperty,
					l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					u = {key: !0, ref: !0, __self: !0, __source: !0};
				function s(e, t, n) {
					var r,
						o = {},
						s = null,
						c = null;
					for (r in (void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)) i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
					return {$$typeof: a, type: e, key: s, ref: c, props: o, _owner: l.current};
				}
				(t.jsx = s), (t.jsxs = s);
			},
			117: function (e, t) {
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					l = Symbol.for("react.provider"),
					u = Symbol.for("react.context"),
					s = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					f = Symbol.for("react.memo"),
					d = Symbol.for("react.lazy"),
					p = Symbol.iterator;
				var h = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					g = Object.assign,
					m = {};
				function v(e, t, n) {
					(this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
				}
				function y() {}
				function b(e, t, n) {
					(this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
				}
				(v.prototype.isReactComponent = {}),
					(v.prototype.setState = function (e, t) {
						if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(v.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(y.prototype = v.prototype);
				var k = (b.prototype = new y());
				(k.constructor = b), g(k, v.prototype), (k.isPureReactComponent = !0);
				var w = Array.isArray,
					S = Object.prototype.hasOwnProperty,
					x = {current: null},
					O = {key: !0, ref: !0, __self: !0, __source: !0};
				function E(e, t, r) {
					var a,
						o = {},
						i = null,
						l = null;
					if (null != t) for (a in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t)) S.call(t, a) && !O.hasOwnProperty(a) && (o[a] = t[a]);
					var u = arguments.length - 2;
					if (1 === u) o.children = r;
					else if (1 < u) {
						for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
						o.children = s;
					}
					if (e && e.defaultProps) for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
					return {$$typeof: n, type: e, key: i, ref: l, props: o, _owner: x.current};
				}
				function C(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n;
				}
				var P = /\/+/g;
				function N(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = {"=": "=0", ":": "=2"};
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function L(e, t, a, o, i) {
					var l = typeof e;
					("undefined" !== l && "boolean" !== l) || (e = null);
					var u = !1;
					if (null === e) u = !0;
					else
						switch (l) {
							case "string":
							case "number":
								u = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										u = !0;
								}
						}
					if (u)
						return (
							(i = i((u = e))),
							(e = "" === o ? "." + N(u, 0) : o),
							w(i)
								? ((a = ""),
								  null != e && (a = e.replace(P, "$&/") + "/"),
								  L(i, t, a, "", function (e) {
										return e;
								  }))
								: null != i &&
								  (C(i) &&
										(i = (function (e, t) {
											return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner};
										})(i, a + (!i.key || (u && u.key === i.key) ? "" : ("" + i.key).replace(P, "$&/") + "/") + e)),
								  t.push(i)),
							1
						);
					if (((u = 0), (o = "" === o ? "." : o + ":"), w(e)))
						for (var s = 0; s < e.length; s++) {
							var c = o + N((l = e[s]), s);
							u += L(l, t, a, c, i);
						}
					else if (
						((c = (function (e) {
							return null === e || "object" !== typeof e ? null : "function" === typeof (e = (p && e[p]) || e["@@iterator"]) ? e : null;
						})(e)),
						"function" === typeof c)
					)
						for (e = c.call(e), s = 0; !(l = e.next()).done; ) u += L((l = l.value), t, a, (c = o + N(l, s++)), i);
					else if ("object" === l) throw ((t = String(e)), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."));
					return u;
				}
				function _(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						L(e, r, "", "", function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function R(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
							},
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var j = {current: null},
					T = {transition: null},
					z = {ReactCurrentDispatcher: j, ReactCurrentBatchConfig: T, ReactCurrentOwner: x};
				(t.Children = {
					map: _,
					forEach: function (e, t, n) {
						_(
							e,
							function () {
								t.apply(this, arguments);
							},
							n,
						);
					},
					count: function (e) {
						var t = 0;
						return (
							_(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							_(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e;
					},
				}),
					(t.Component = v),
					(t.Fragment = a),
					(t.Profiler = i),
					(t.PureComponent = b),
					(t.StrictMode = o),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
						var a = g({}, e.props),
							o = e.key,
							i = e.ref,
							l = e._owner;
						if (null != t) {
							if ((void 0 !== t.ref && ((i = t.ref), (l = x.current)), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
							for (s in t) S.call(t, s) && !O.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
						}
						var s = arguments.length - 2;
						if (1 === s) a.children = r;
						else if (1 < s) {
							u = Array(s);
							for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
							a.children = u;
						}
						return {$$typeof: n, type: e.type, key: o, ref: i, props: a, _owner: l};
					}),
					(t.createContext = function (e) {
						return ((e = {$$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null}).Provider = {$$typeof: l, _context: e}), (e.Consumer = e);
					}),
					(t.createElement = E),
					(t.createFactory = function (e) {
						var t = E.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return {current: null};
					}),
					(t.forwardRef = function (e) {
						return {$$typeof: s, render: e};
					}),
					(t.isValidElement = C),
					(t.lazy = function (e) {
						return {$$typeof: d, _payload: {_status: -1, _result: e}, _init: R};
					}),
					(t.memo = function (e, t) {
						return {$$typeof: f, type: e, compare: void 0 === t ? null : t};
					}),
					(t.startTransition = function (e) {
						var t = T.transition;
						T.transition = {};
						try {
							e();
						} finally {
							T.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error("act(...) is not supported in production builds of React.");
					}),
					(t.useCallback = function (e, t) {
						return j.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return j.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return j.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return j.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return j.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return j.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return j.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return j.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return j.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return j.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return j.current.useRef(e);
					}),
					(t.useState = function (e) {
						return j.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return j.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return j.current.useTransition();
					}),
					(t.version = "18.2.0");
			},
			791: function (e, t, n) {
				e.exports = n(117);
			},
			184: function (e, t, n) {
				e.exports = n(374);
			},
			813: function (e, t) {
				function n(e, t) {
					var n = e.length;
					e.push(t);
					for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
							var l = 2 * (r + 1) - 1,
								u = e[l],
								s = l + 1,
								c = e[s];
							if (0 > o(u, n)) s < a && 0 > o(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[l] = n), (r = l));
							else {
								if (!(s < a && 0 > o(c, n))) break;
								(e[r] = c), (e[s] = n), (r = s);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if ("object" === typeof performance && "function" === typeof performance.now) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var l = Date,
						u = l.now();
					t.unstable_now = function () {
						return l.now() - u;
					};
				}
				var s = [],
					c = [],
					f = 1,
					d = null,
					p = 3,
					h = !1,
					g = !1,
					m = !1,
					v = "function" === typeof setTimeout ? setTimeout : null,
					y = "function" === typeof clearTimeout ? clearTimeout : null,
					b = "undefined" !== typeof setImmediate ? setImmediate : null;
				function k(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), (t.sortIndex = t.expirationTime), n(s, t);
						}
						t = r(c);
					}
				}
				function w(e) {
					if (((m = !1), k(e), !g))
						if (null !== r(s)) (g = !0), T(S);
						else {
							var t = r(c);
							null !== t && z(w, t.startTime - e);
						}
				}
				function S(e, n) {
					(g = !1), m && ((m = !1), y(C), (C = -1)), (h = !0);
					var o = p;
					try {
						for (k(n), d = r(s); null !== d && (!(d.expirationTime > n) || (e && !L())); ) {
							var i = d.callback;
							if ("function" === typeof i) {
								(d.callback = null), (p = d.priorityLevel);
								var l = i(d.expirationTime <= n);
								(n = t.unstable_now()), "function" === typeof l ? (d.callback = l) : d === r(s) && a(s), k(n);
							} else a(s);
							d = r(s);
						}
						if (null !== d) var u = !0;
						else {
							var f = r(c);
							null !== f && z(w, f.startTime - n), (u = !1);
						}
						return u;
					} finally {
						(d = null), (p = o), (h = !1);
					}
				}
				"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var x,
					O = !1,
					E = null,
					C = -1,
					P = 5,
					N = -1;
				function L() {
					return !(t.unstable_now() - N < P);
				}
				function _() {
					if (null !== E) {
						var e = t.unstable_now();
						N = e;
						var n = !0;
						try {
							n = E(!0, e);
						} finally {
							n ? x() : ((O = !1), (E = null));
						}
					} else O = !1;
				}
				if ("function" === typeof b)
					x = function () {
						b(_);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var R = new MessageChannel(),
						j = R.port2;
					(R.port1.onmessage = _),
						(x = function () {
							j.postMessage(null);
						});
				} else
					x = function () {
						v(_, 0);
					};
				function T(e) {
					(E = e), O || ((O = !0), x());
				}
				function z(e, n) {
					C = v(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						g || h || ((g = !0), T(S));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (P = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(s);
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, a, o) {
						var i = t.unstable_now();
						switch (("object" === typeof o && null !== o ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i) : (o = i), e)) {
							case 1:
								var l = -1;
								break;
							case 2:
								l = 250;
								break;
							case 5:
								l = 1073741823;
								break;
							case 4:
								l = 1e4;
								break;
							default:
								l = 5e3;
						}
						return (e = {id: f++, callback: a, priorityLevel: e, startTime: o, expirationTime: (l = o + l), sortIndex: -1}), o > i ? ((e.sortIndex = o), n(c, e), null === r(s) && e === r(c) && (m ? (y(C), (C = -1)) : (m = !0), z(w, o - i))) : ((e.sortIndex = l), n(s, e), g || h || ((g = !0), T(S))), e;
					}),
					(t.unstable_shouldYield = L),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			296: function (e, t, n) {
				e.exports = n(813);
			},
			399: function (e) {
				e.exports = {area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0};
			},
		},
		t = {};
	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var o = (t[r] = {exports: {}});
		return e[r](o, o.exports, n), o.exports;
	}
	(n.m = e),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, {a: t}), t;
		}),
		(n.d = function (e, t) {
			for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]});
		}),
		(n.f = {}),
		(n.e = function (e) {
			return Promise.all(
				Object.keys(n.f).reduce(function (t, r) {
					return n.f[r](e, t), t;
				}, []),
			);
		}),
		(n.u = function (e) {
			return "static/js/" + e + ".28cb0dcd.chunk.js";
		}),
		(n.miniCssF = function (e) {}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(function () {
			var e = {},
				t = "my-app:";
			n.l = function (r, a, o, i) {
				if (e[r]) e[r].push(a);
				else {
					var l, u;
					if (void 0 !== o)
						for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
							var f = s[c];
							if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
								l = f;
								break;
							}
						}
					l || ((u = !0), ((l = document.createElement("script")).charset = "utf-8"), (l.timeout = 120), n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + o), (l.src = r)), (e[r] = [a]);
					var d = function (t, n) {
							(l.onerror = l.onload = null), clearTimeout(p);
							var a = e[r];
							if (
								(delete e[r],
								l.parentNode && l.parentNode.removeChild(l),
								a &&
									a.forEach(function (e) {
										return e(n);
									}),
								t)
							)
								return t(n);
						},
						p = setTimeout(d.bind(null, void 0, {type: "timeout", target: l}), 12e4);
					(l.onerror = d.bind(null, l.onerror)), (l.onload = d.bind(null, l.onload)), u && document.head.appendChild(l);
				}
			};
		})(),
		(n.r = function (e) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0});
		}),
		(n.p = "/"),
		(function () {
			var e = {179: 0};
			n.f.j = function (t, r) {
				var a = n.o(e, t) ? e[t] : void 0;
				if (0 !== a)
					if (a) r.push(a[2]);
					else {
						var o = new Promise(function (n, r) {
							a = e[t] = [n, r];
						});
						r.push((a[2] = o));
						var i = n.p + n.u(t),
							l = new Error();
						n.l(
							i,
							function (r) {
								if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
									var o = r && ("load" === r.type ? "missing" : r.type),
										i = r && r.target && r.target.src;
									(l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"), (l.name = "ChunkLoadError"), (l.type = o), (l.request = i), a[1](l);
								}
							},
							"chunk-" + t,
							t,
						);
					}
			};
			var t = function (t, r) {
					var a,
						o,
						i = r[0],
						l = r[1],
						u = r[2],
						s = 0;
					if (
						i.some(function (t) {
							return 0 !== e[t];
						})
					) {
						for (a in l) n.o(l, a) && (n.m[a] = l[a]);
						if (u) u(n);
					}
					for (t && t(r); s < i.length; s++) (o = i[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
				},
				r = (self.webpackChunkmy_app = self.webpackChunkmy_app || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(function () {
			var e = n(791),
				t = n(250),
				r = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(787)
							.then(n.bind(n, 787))
							.then(function (t) {
								var n = t.getCLS,
									r = t.getFID,
									a = t.getFCP,
									o = t.getLCP,
									i = t.getTTFB;
								n(e), r(e), a(e), o(e), i(e);
							});
				};
			n(399);
			Object.create(null);
			function a(e) {
				return (
					(a =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
							  }),
					a(e)
				);
			}
			function o(e) {
				var t = (function (e, t) {
					if ("object" !== a(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== a(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" === a(t) ? t : String(t);
			}
			function i(e, t, n) {
				return (t = o(t)) in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : (e[t] = n), e;
			}
			var l = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
				u = {"&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "\xa9", "&#169;": "\xa9", "&reg;": "\xae", "&#174;": "\xae", "&hellip;": "\u2026", "&#8230;": "\u2026", "&#x2F;": "/", "&#47;": "/"},
				s = function (e) {
					return u[e];
				};
			function c(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function f(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: c(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			var d = {
				bindI18n: "languageChanged",
				bindI18nStore: "",
				transEmptyNodeValue: "",
				transSupportBasicHtmlNodes: !0,
				transWrapTextNodes: "",
				transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
				useSuspense: !0,
				unescape: function (e) {
					return e.replace(l, s);
				},
			};
			function p(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
			}
			function h(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r);
				}
			}
			function g(e, t, n) {
				return t && h(e.prototype, t), n && h(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e;
			}
			var m = {
				type: "3rdParty",
				init: function (e) {
					!(function () {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						d = f(f({}, d), e);
					})(e.options.react),
						(function (e) {
							e;
						})(e);
				},
			};
			var v = (0, e.createContext)();
			!(function () {
				function e() {
					p(this, e), (this.usedNamespaces = {});
				}
				g(e, [
					{
						key: "addUsedNamespaces",
						value: function (e) {
							var t = this;
							e.forEach(function (e) {
								t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
							});
						},
					},
					{
						key: "getUsedNamespaces",
						value: function () {
							return Object.keys(this.usedNamespaces);
						},
					},
				]);
			})();
			function y(t) {
				var n = t.i18n,
					r = t.defaultNS,
					a = t.children,
					o = (0, e.useMemo)(
						function () {
							return {i18n: n, defaultNS: r};
						},
						[n, r],
					);
				return (0, e.createElement)(v.Provider, {value: o}, a);
			}
			function b(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e;
			}
			function k(e, t) {
				return (
					(k = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
						  }),
					k(e, t)
				);
			}
			function w(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				(e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: !0, configurable: !0}})), Object.defineProperty(e, "prototype", {writable: !1}), t && k(e, t);
			}
			function S(e, t) {
				if (t && ("object" === a(t) || "function" === typeof t)) return t;
				if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
				return b(e);
			}
			function x(e) {
				return (
					(x = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					x(e)
				);
			}
			function O(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function E(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e) {
						if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (e) {
							if ("string" === typeof e) return O(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0;
						}
					})(e) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function C(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function P(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? C(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: C(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			var N = {
					type: "logger",
					log: function (e) {
						this.output("log", e);
					},
					warn: function (e) {
						this.output("warn", e);
					},
					error: function (e) {
						this.output("error", e);
					},
					output: function (e, t) {
						console && console[e] && console[e].apply(console, t);
					},
				},
				L = (function () {
					function e(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						p(this, e), this.init(t, n);
					}
					return (
						g(e, [
							{
								key: "init",
								value: function (e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									(this.prefix = t.prefix || "i18next:"), (this.logger = e || N), (this.options = t), (this.debug = t.debug);
								},
							},
							{
								key: "setDebug",
								value: function (e) {
									this.debug = e;
								},
							},
							{
								key: "log",
								value: function () {
									for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									return this.forward(t, "log", "", !0);
								},
							},
							{
								key: "warn",
								value: function () {
									for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									return this.forward(t, "warn", "", !0);
								},
							},
							{
								key: "error",
								value: function () {
									for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									return this.forward(t, "error", "");
								},
							},
							{
								key: "deprecate",
								value: function () {
									for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
								},
							},
							{
								key: "forward",
								value: function (e, t, n, r) {
									return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
								},
							},
							{
								key: "create",
								value: function (t) {
									return new e(this.logger, P(P({}, {prefix: "".concat(this.prefix, ":").concat(t, ":")}), this.options));
								},
							},
							{
								key: "clone",
								value: function (t) {
									return ((t = t || this.options).prefix = t.prefix || this.prefix), new e(this.logger, t);
								},
							},
						]),
						e
					);
				})(),
				_ = new L(),
				R = (function () {
					function e() {
						p(this, e), (this.observers = {});
					}
					return (
						g(e, [
							{
								key: "on",
								value: function (e, t) {
									var n = this;
									return (
										e.split(" ").forEach(function (e) {
											(n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
										}),
										this
									);
								},
							},
							{
								key: "off",
								value: function (e, t) {
									this.observers[e] &&
										(t
											? (this.observers[e] = this.observers[e].filter(function (e) {
													return e !== t;
											  }))
											: delete this.observers[e]);
								},
							},
							{
								key: "emit",
								value: function (e) {
									for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
									this.observers[e] &&
										[].concat(this.observers[e]).forEach(function (e) {
											e.apply(void 0, n);
										});
									this.observers["*"] &&
										[].concat(this.observers["*"]).forEach(function (t) {
											t.apply(t, [e].concat(n));
										});
								},
							},
						]),
						e
					);
				})();
			function j() {
				var e,
					t,
					n = new Promise(function (n, r) {
						(e = n), (t = r);
					});
				return (n.resolve = e), (n.reject = t), n;
			}
			function T(e) {
				return null == e ? "" : "" + e;
			}
			function z(e, t, n) {
				function r(e) {
					return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
				}
				function a() {
					return !e || "string" === typeof e;
				}
				for (var o = "string" !== typeof t ? [].concat(t) : t.split("."); o.length > 1; ) {
					if (a()) return {};
					var i = r(o.shift());
					!e[i] && n && (e[i] = new n()), (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {});
				}
				return a() ? {} : {obj: e, k: r(o.shift())};
			}
			function F(e, t, n) {
				var r = z(e, t, Object);
				r.obj[r.k] = n;
			}
			function D(e, t) {
				var n = z(e, t),
					r = n.obj,
					a = n.k;
				if (r) return r[a];
			}
			function I(e, t, n) {
				for (var r in t) "__proto__" !== r && "constructor" !== r && (r in e ? ("string" === typeof e[r] || e[r] instanceof String || "string" === typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : I(e[r], t[r], n)) : (e[r] = t[r]));
				return e;
			}
			function M(e) {
				return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			}
			var A = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"};
			function U(e) {
				return "string" === typeof e
					? e.replace(/[&<>"'\/]/g, function (e) {
							return A[e];
					  })
					: e;
			}
			var V = "undefined" !== typeof window && window.navigator && "undefined" === typeof window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
				B = [" ", ",", "?", "!", ";"];
			function W(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
				if (e) {
					if (e[t]) return e[t];
					for (var r = t.split(n), a = e, o = 0; o < r.length; ++o) {
						if (!a) return;
						if ("string" === typeof a[r[o]] && o + 1 < r.length) return;
						if (void 0 === a[r[o]]) {
							for (var i = 2, l = r.slice(o, o + i).join(n), u = a[l]; void 0 === u && r.length > o + i; ) i++, (u = a[(l = r.slice(o, o + i).join(n))]);
							if (void 0 === u) return;
							if (null === u) return null;
							if (t.endsWith(l)) {
								if ("string" === typeof u) return u;
								if (l && "string" === typeof u[l]) return u[l];
							}
							var s = r.slice(o + i).join(n);
							return s ? W(u, s, n) : void 0;
						}
						a = a[r[o]];
					}
					return a;
				}
			}
			function H(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function $(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? H(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: H(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function K(e) {
				var t = (function () {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = x(e);
					if (t) {
						var a = x(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return S(this, n);
				};
			}
			var Q = (function (e) {
					w(n, e);
					var t = K(n);
					function n(e) {
						var r,
							a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {ns: ["translation"], defaultNS: "translation"};
						return p(this, n), (r = t.call(this)), V && R.call(b(r)), (r.data = e || {}), (r.options = a), void 0 === r.options.keySeparator && (r.options.keySeparator = "."), void 0 === r.options.ignoreJSONStructure && (r.options.ignoreJSONStructure = !0), r;
					}
					return (
						g(n, [
							{
								key: "addNamespaces",
								value: function (e) {
									this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
								},
							},
							{
								key: "removeNamespaces",
								value: function (e) {
									var t = this.options.ns.indexOf(e);
									t > -1 && this.options.ns.splice(t, 1);
								},
							},
							{
								key: "getResource",
								value: function (e, t, n) {
									var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
										a = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
										o = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
										i = [e, t];
									n && "string" !== typeof n && (i = i.concat(n)), n && "string" === typeof n && (i = i.concat(a ? n.split(a) : n)), e.indexOf(".") > -1 && (i = e.split("."));
									var l = D(this.data, i);
									return l || !o || "string" !== typeof n ? l : W(this.data && this.data[e] && this.data[e][t], n, a);
								},
							},
							{
								key: "addResource",
								value: function (e, t, n, r) {
									var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {silent: !1},
										o = this.options.keySeparator;
									void 0 === o && (o = ".");
									var i = [e, t];
									n && (i = i.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && ((r = t), (t = (i = e.split("."))[1])), this.addNamespaces(t), F(this.data, i, r), a.silent || this.emit("added", e, t, n, r);
								},
							},
							{
								key: "addResources",
								value: function (e, t, n) {
									var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {silent: !1};
									for (var a in n) ("string" !== typeof n[a] && "[object Array]" !== Object.prototype.toString.apply(n[a])) || this.addResource(e, t, a, n[a], {silent: !0});
									r.silent || this.emit("added", e, t, n);
								},
							},
							{
								key: "addResourceBundle",
								value: function (e, t, n, r, a) {
									var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {silent: !1},
										i = [e, t];
									e.indexOf(".") > -1 && ((r = n), (n = t), (t = (i = e.split("."))[1])), this.addNamespaces(t);
									var l = D(this.data, i) || {};
									r ? I(l, n, a) : (l = $($({}, l), n)), F(this.data, i, l), o.silent || this.emit("added", e, t, n);
								},
							},
							{
								key: "removeResourceBundle",
								value: function (e, t) {
									this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
								},
							},
							{
								key: "hasResourceBundle",
								value: function (e, t) {
									return void 0 !== this.getResource(e, t);
								},
							},
							{
								key: "getResourceBundle",
								value: function (e, t) {
									return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? $($({}, {}), this.getResource(e, t)) : this.getResource(e, t);
								},
							},
							{
								key: "getDataByLanguage",
								value: function (e) {
									return this.data[e];
								},
							},
							{
								key: "hasLanguageSomeTranslations",
								value: function (e) {
									var t = this.getDataByLanguage(e);
									return !!((t && Object.keys(t)) || []).find(function (e) {
										return t[e] && Object.keys(t[e]).length > 0;
									});
								},
							},
							{
								key: "toJSON",
								value: function () {
									return this.data;
								},
							},
						]),
						n
					);
				})(R),
				q = {
					processors: {},
					addPostProcessor: function (e) {
						this.processors[e.name] = e;
					},
					handle: function (e, t, n, r, a) {
						var o = this;
						return (
							e.forEach(function (e) {
								o.processors[e] && (t = o.processors[e].process(t, n, r, a));
							}),
							t
						);
					},
				};
			function G(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function J(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? G(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: G(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function Y(e) {
				var t = (function () {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = x(e);
					if (t) {
						var a = x(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return S(this, n);
				};
			}
			var X = {},
				Z = (function (e) {
					w(n, e);
					var t = Y(n);
					function n(e) {
						var r,
							a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return (
							p(this, n),
							(r = t.call(this)),
							V && R.call(b(r)),
							(function (e, t, n) {
								e.forEach(function (e) {
									t[e] && (n[e] = t[e]);
								});
							})(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, b(r)),
							(r.options = a),
							void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
							(r.logger = _.create("translator")),
							r
						);
					}
					return (
						g(
							n,
							[
								{
									key: "changeLanguage",
									value: function (e) {
										e && (this.language = e);
									},
								},
								{
									key: "exists",
									value: function (e) {
										var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {interpolation: {}};
										if (void 0 === e || null === e) return !1;
										var n = this.resolve(e, t);
										return n && void 0 !== n.res;
									},
								},
								{
									key: "extractFromKey",
									value: function (e, t) {
										var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
										void 0 === n && (n = ":");
										var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
											a = t.ns || this.options.defaultNS || [],
											o = n && e.indexOf(n) > -1,
											i =
												!this.options.userDefinedKeySeparator &&
												!t.keySeparator &&
												!this.options.userDefinedNsSeparator &&
												!t.nsSeparator &&
												!(function (e, t, n) {
													(t = t || ""), (n = n || "");
													var r = B.filter(function (e) {
														return t.indexOf(e) < 0 && n.indexOf(e) < 0;
													});
													if (0 === r.length) return !0;
													var a = new RegExp(
															"(".concat(
																r
																	.map(function (e) {
																		return "?" === e ? "\\?" : e;
																	})
																	.join("|"),
																")",
															),
														),
														o = !a.test(e);
													if (!o) {
														var i = e.indexOf(n);
														i > 0 && !a.test(e.substring(0, i)) && (o = !0);
													}
													return o;
												})(e, n, r);
										if (o && !i) {
											var l = e.match(this.interpolator.nestingRegexp);
											if (l && l.length > 0) return {key: e, namespaces: a};
											var u = e.split(n);
											(n !== r || (n === r && this.options.ns.indexOf(u[0]) > -1)) && (a = u.shift()), (e = u.join(r));
										}
										return "string" === typeof a && (a = [a]), {key: e, namespaces: a};
									},
								},
								{
									key: "translate",
									value: function (e, t, r) {
										var o = this;
										if (("object" !== a(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" === a(t) && (t = J({}, t)), t || (t = {}), void 0 === e || null === e)) return "";
										Array.isArray(e) || (e = [String(e)]);
										var i = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
											l = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
											u = this.extractFromKey(e[e.length - 1], t),
											s = u.key,
											c = u.namespaces,
											f = c[c.length - 1],
											d = t.lng || this.language,
											p = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
										if (d && "cimode" === d.toLowerCase()) {
											if (p) {
												var h = t.nsSeparator || this.options.nsSeparator;
												return i ? {res: "".concat(f).concat(h).concat(s), usedKey: s, exactUsedKey: s, usedLng: d, usedNS: f} : "".concat(f).concat(h).concat(s);
											}
											return i ? {res: s, usedKey: s, exactUsedKey: s, usedLng: d, usedNS: f} : s;
										}
										var g = this.resolve(e, t),
											m = g && g.res,
											v = (g && g.usedKey) || s,
											y = (g && g.exactUsedKey) || s,
											b = Object.prototype.toString.apply(m),
											k = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
											w = !this.i18nFormat || this.i18nFormat.handleAsObject;
										if (w && m && "string" !== typeof m && "boolean" !== typeof m && "number" !== typeof m && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(b) < 0 && ("string" !== typeof k || "[object Array]" !== b)) {
											if (!t.returnObjects && !this.options.returnObjects) {
												this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
												var S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, J(J({}, t), {}, {ns: c})) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
												return i ? ((g.res = S), g) : S;
											}
											if (l) {
												var x = "[object Array]" === b,
													O = x ? [] : {},
													E = x ? y : v;
												for (var C in m)
													if (Object.prototype.hasOwnProperty.call(m, C)) {
														var P = "".concat(E).concat(l).concat(C);
														(O[C] = this.translate(P, J(J({}, t), {joinArrays: !1, ns: c}))), O[C] === P && (O[C] = m[C]);
													}
												m = O;
											}
										} else if (w && "string" === typeof k && "[object Array]" === b) (m = m.join(k)) && (m = this.extendTranslation(m, e, t, r));
										else {
											var N = !1,
												L = !1,
												_ = void 0 !== t.count && "string" !== typeof t.count,
												R = n.hasDefaultValue(t),
												j = _ ? this.pluralResolver.getSuffix(d, t.count, t) : "",
												T = t["defaultValue".concat(j)] || t.defaultValue;
											!this.isValidLookup(m) && R && ((N = !0), (m = T)), this.isValidLookup(m) || ((L = !0), (m = s));
											var z = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : m,
												F = R && T !== m && this.options.updateMissing;
											if (L || N || F) {
												if ((this.logger.log(F ? "updateKey" : "missingKey", d, f, s, F ? T : m), l)) {
													var D = this.resolve(s, J(J({}, t), {}, {keySeparator: !1}));
													D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
												}
												var I = [],
													M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
												if ("fallback" === this.options.saveMissingTo && M && M[0]) for (var A = 0; A < M.length; A++) I.push(M[A]);
												else "all" === this.options.saveMissingTo ? (I = this.languageUtils.toResolveHierarchy(t.lng || this.language)) : I.push(t.lng || this.language);
												var U = function (e, n, r) {
													var a = R && r !== m ? r : z;
													o.options.missingKeyHandler ? o.options.missingKeyHandler(e, f, n, a, F, t) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, f, n, a, F, t), o.emit("missingKey", e, f, n, m);
												};
												this.options.saveMissing &&
													(this.options.saveMissingPlurals && _
														? I.forEach(function (e) {
																o.pluralResolver.getSuffixes(e, t).forEach(function (n) {
																	U([e], s + n, t["defaultValue".concat(n)] || T);
																});
														  })
														: U(I, s, T));
											}
											(m = this.extendTranslation(m, e, t, g, r)),
												L && m === s && this.options.appendNamespaceToMissingKey && (m = "".concat(f, ":").concat(s)),
												(L || N) && this.options.parseMissingKeyHandler && (m = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(f, ":").concat(s) : s, N ? m : void 0) : this.options.parseMissingKeyHandler(m));
										}
										return i ? ((g.res = m), g) : m;
									},
								},
								{
									key: "extendTranslation",
									value: function (e, t, n, r, a) {
										var o = this;
										if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, J(J({}, this.options.interpolation.defaultVariables), n), r.usedLng, r.usedNS, r.usedKey, {resolved: r});
										else if (!n.skipInterpolation) {
											n.interpolation && this.interpolator.init(J(J({}, n), {interpolation: J(J({}, this.options.interpolation), n.interpolation)}));
											var i,
												l = "string" === typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
											if (l) {
												var u = e.match(this.interpolator.nestingRegexp);
												i = u && u.length;
											}
											var s = n.replace && "string" !== typeof n.replace ? n.replace : n;
											if ((this.options.interpolation.defaultVariables && (s = J(J({}, this.options.interpolation.defaultVariables), s)), (e = this.interpolator.interpolate(e, s, n.lng || this.language, n)), l)) {
												var c = e.match(this.interpolator.nestingRegexp);
												i < (c && c.length) && (n.nest = !1);
											}
											!n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = r.usedLng),
												!1 !== n.nest &&
													(e = this.interpolator.nest(
														e,
														function () {
															for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
															return a && a[0] === r[0] && !n.context ? (o.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])), null) : o.translate.apply(o, r.concat([t]));
														},
														n,
													)),
												n.interpolation && this.interpolator.reset();
										}
										var f = n.postProcess || this.options.postProcess,
											d = "string" === typeof f ? [f] : f;
										return void 0 !== e && null !== e && d && d.length && !1 !== n.applyPostProcessor && (e = q.handle(d, e, t, this.options && this.options.postProcessPassResolved ? J({i18nResolved: r}, n) : n, this)), e;
									},
								},
								{
									key: "resolve",
									value: function (e) {
										var t,
											n,
											r,
											a,
											o,
											i = this,
											l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
										return (
											"string" === typeof e && (e = [e]),
											e.forEach(function (e) {
												if (!i.isValidLookup(t)) {
													var u = i.extractFromKey(e, l),
														s = u.key;
													n = s;
													var c = u.namespaces;
													i.options.fallbackNS && (c = c.concat(i.options.fallbackNS));
													var f = void 0 !== l.count && "string" !== typeof l.count,
														d = f && !l.ordinal && 0 === l.count && i.pluralResolver.shouldUseIntlApi(),
														p = void 0 !== l.context && ("string" === typeof l.context || "number" === typeof l.context) && "" !== l.context,
														h = l.lngs ? l.lngs : i.languageUtils.toResolveHierarchy(l.lng || i.language, l.fallbackLng);
													c.forEach(function (e) {
														i.isValidLookup(t) ||
															((o = e),
															!X["".concat(h[0], "-").concat(e)] &&
																i.utils &&
																i.utils.hasLoadedNamespace &&
																!i.utils.hasLoadedNamespace(o) &&
																((X["".concat(h[0], "-").concat(e)] = !0),
																i.logger.warn(
																	'key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(o, '" was not yet loaded'),
																	"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
																)),
															h.forEach(function (n) {
																if (!i.isValidLookup(t)) {
																	a = n;
																	var o,
																		u = [s];
																	if (i.i18nFormat && i.i18nFormat.addLookupKeys) i.i18nFormat.addLookupKeys(u, s, n, e, l);
																	else {
																		var c;
																		f && (c = i.pluralResolver.getSuffix(n, l.count, l));
																		var h = "".concat(i.options.pluralSeparator, "zero");
																		if ((f && (u.push(s + c), d && u.push(s + h)), p)) {
																			var g = "".concat(s).concat(i.options.contextSeparator).concat(l.context);
																			u.push(g), f && (u.push(g + c), d && u.push(g + h));
																		}
																	}
																	for (; (o = u.pop()); ) i.isValidLookup(t) || ((r = o), (t = i.getResource(n, e, o, l)));
																}
															}));
													});
												}
											}),
											{res: t, usedKey: n, exactUsedKey: r, usedLng: a, usedNS: o}
										);
									},
								},
								{
									key: "isValidLookup",
									value: function (e) {
										return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e);
									},
								},
								{
									key: "getResource",
									value: function (e, t, n) {
										var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
										return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
									},
								},
							],
							[
								{
									key: "hasDefaultValue",
									value: function (e) {
										var t = "defaultValue";
										for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, 12) && void 0 !== e[n]) return !0;
										return !1;
									},
								},
							],
						),
						n
					);
				})(R);
			function ee(e) {
				return e.charAt(0).toUpperCase() + e.slice(1);
			}
			var te = (function () {
					function e(t) {
						p(this, e), (this.options = t), (this.supportedLngs = this.options.supportedLngs || !1), (this.logger = _.create("languageUtils"));
					}
					return (
						g(e, [
							{
								key: "getScriptPartFromCode",
								value: function (e) {
									if (!e || e.indexOf("-") < 0) return null;
									var t = e.split("-");
									return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")));
								},
							},
							{
								key: "getLanguagePartFromCode",
								value: function (e) {
									if (!e || e.indexOf("-") < 0) return e;
									var t = e.split("-");
									return this.formatLanguageCode(t[0]);
								},
							},
							{
								key: "formatLanguageCode",
								value: function (e) {
									if ("string" === typeof e && e.indexOf("-") > -1) {
										var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
											n = e.split("-");
										return (
											this.options.lowerCaseLng
												? (n = n.map(function (e) {
														return e.toLowerCase();
												  }))
												: 2 === n.length
												? ((n[0] = n[0].toLowerCase()), (n[1] = n[1].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = ee(n[1].toLowerCase())))
												: 3 === n.length && ((n[0] = n[0].toLowerCase()), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = ee(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = ee(n[2].toLowerCase()))),
											n.join("-")
										);
									}
									return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
								},
							},
							{
								key: "isSupportedCode",
								value: function (e) {
									return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
								},
							},
							{
								key: "getBestMatchFromCodes",
								value: function (e) {
									var t,
										n = this;
									return e
										? (e.forEach(function (e) {
												if (!t) {
													var r = n.formatLanguageCode(e);
													(n.options.supportedLngs && !n.isSupportedCode(r)) || (t = r);
												}
										  }),
										  !t &&
												this.options.supportedLngs &&
												e.forEach(function (e) {
													if (!t) {
														var r = n.getLanguagePartFromCode(e);
														if (n.isSupportedCode(r)) return (t = r);
														t = n.options.supportedLngs.find(function (e) {
															return e === r ? e : e.indexOf("-") < 0 && r.indexOf("-") < 0 ? void 0 : 0 === e.indexOf(r) ? e : void 0;
														});
													}
												}),
										  t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
										  t)
										: null;
								},
							},
							{
								key: "getFallbackCodes",
								value: function (e, t) {
									if (!e) return [];
									if (("function" === typeof e && (e = e(t)), "string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e))) return e;
									if (!t) return e.default || [];
									var n = e[t];
									return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
								},
							},
							{
								key: "toResolveHierarchy",
								value: function (e, t) {
									var n = this,
										r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
										a = [],
										o = function (e) {
											e && (n.isSupportedCode(e) ? a.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
										};
									return (
										"string" === typeof e && e.indexOf("-") > -1
											? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e)))
											: "string" === typeof e && o(this.formatLanguageCode(e)),
										r.forEach(function (e) {
											a.indexOf(e) < 0 && o(n.formatLanguageCode(e));
										}),
										a
									);
								},
							},
						]),
						e
					);
				})(),
				ne = [
					{lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1},
					{
						lngs: [
							"af",
							"an",
							"ast",
							"az",
							"bg",
							"bn",
							"ca",
							"da",
							"de",
							"dev",
							"el",
							"en",
							"eo",
							"es",
							"et",
							"eu",
							"fi",
							"fo",
							"fur",
							"fy",
							"gl",
							"gu",
							"ha",
							"hi",
							"hu",
							"hy",
							"ia",
							"it",
							"kk",
							"kn",
							"ku",
							"lb",
							"mai",
							"ml",
							"mn",
							"mr",
							"nah",
							"nap",
							"nb",
							"ne",
							"nl",
							"nn",
							"no",
							"nso",
							"pa",
							"pap",
							"pms",
							"ps",
							"pt-PT",
							"rm",
							"sco",
							"se",
							"si",
							"so",
							"son",
							"sq",
							"sv",
							"sw",
							"ta",
							"te",
							"tk",
							"ur",
							"yo",
						],
						nr: [1, 2],
						fc: 2,
					},
					{lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3},
					{lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4},
					{lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5},
					{lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6},
					{lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7},
					{lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8},
					{lngs: ["fr"], nr: [1, 2], fc: 9},
					{lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10},
					{lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11},
					{lngs: ["is"], nr: [1, 2], fc: 12},
					{lngs: ["jv"], nr: [0, 1], fc: 13},
					{lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14},
					{lngs: ["lt"], nr: [1, 2, 10], fc: 15},
					{lngs: ["lv"], nr: [1, 2, 0], fc: 16},
					{lngs: ["mk"], nr: [1, 2], fc: 17},
					{lngs: ["mnk"], nr: [0, 1, 2], fc: 18},
					{lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19},
					{lngs: ["or"], nr: [2, 1], fc: 2},
					{lngs: ["ro"], nr: [1, 2, 20], fc: 20},
					{lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21},
					{lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22},
				],
				re = {
					1: function (e) {
						return Number(e > 1);
					},
					2: function (e) {
						return Number(1 != e);
					},
					3: function (e) {
						return 0;
					},
					4: function (e) {
						return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
					},
					5: function (e) {
						return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
					},
					6: function (e) {
						return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
					},
					7: function (e) {
						return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
					},
					8: function (e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
					},
					9: function (e) {
						return Number(e >= 2);
					},
					10: function (e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
					},
					11: function (e) {
						return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
					},
					12: function (e) {
						return Number(e % 10 != 1 || e % 100 == 11);
					},
					13: function (e) {
						return Number(0 !== e);
					},
					14: function (e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
					},
					15: function (e) {
						return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
					},
					16: function (e) {
						return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
					},
					17: function (e) {
						return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
					},
					18: function (e) {
						return Number(0 == e ? 0 : 1 == e ? 1 : 2);
					},
					19: function (e) {
						return Number(1 == e ? 0 : 0 == e || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
					},
					20: function (e) {
						return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
					},
					21: function (e) {
						return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
					},
					22: function (e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
					},
				},
				ae = ["v1", "v2", "v3"],
				oe = {zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5};
			var ie = (function () {
				function e(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					p(this, e),
						(this.languageUtils = t),
						(this.options = n),
						(this.logger = _.create("pluralResolver")),
						(this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON) || ("undefined" !== typeof Intl && Intl.PluralRules) || ((this.options.compatibilityJSON = "v3"), this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
						(this.rules = (function () {
							var e = {};
							return (
								ne.forEach(function (t) {
									t.lngs.forEach(function (n) {
										e[n] = {numbers: t.nr, plurals: re[t.fc]};
									});
								}),
								e
							);
						})());
				}
				return (
					g(e, [
						{
							key: "addRule",
							value: function (e, t) {
								this.rules[e] = t;
							},
						},
						{
							key: "getRule",
							value: function (e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (this.shouldUseIntlApi())
									try {
										return new Intl.PluralRules(e, {type: t.ordinal ? "ordinal" : "cardinal"});
									} catch (n) {
										return;
									}
								return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
							},
						},
						{
							key: "needsPlural",
							value: function (e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
									n = this.getRule(e, t);
								return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
							},
						},
						{
							key: "getPluralFormsOfKey",
							value: function (e, t) {
								var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
								return this.getSuffixes(e, n).map(function (e) {
									return "".concat(t).concat(e);
								});
							},
						},
						{
							key: "getSuffixes",
							value: function (e) {
								var t = this,
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
									r = this.getRule(e, n);
								return r
									? this.shouldUseIntlApi()
										? r
												.resolvedOptions()
												.pluralCategories.sort(function (e, t) {
													return oe[e] - oe[t];
												})
												.map(function (e) {
													return "".concat(t.options.prepend).concat(e);
												})
										: r.numbers.map(function (r) {
												return t.getSuffix(e, r, n);
										  })
									: [];
							},
						},
						{
							key: "getSuffix",
							value: function (e, t) {
								var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
									r = this.getRule(e, n);
								return r ? (this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(t)) : this.getSuffixRetroCompatible(r, t)) : (this.logger.warn("no plural rule found for: ".concat(e)), "");
							},
						},
						{
							key: "getSuffixRetroCompatible",
							value: function (e, t) {
								var n = this,
									r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
									a = e.numbers[r];
								this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === a ? (a = "plural") : 1 === a && (a = ""));
								var o = function () {
									return n.options.prepend && a.toString() ? n.options.prepend + a.toString() : a.toString();
								};
								return "v1" === this.options.compatibilityJSON ? (1 === a ? "" : "number" === typeof a ? "_plural_".concat(a.toString()) : o()) : "v2" === this.options.compatibilityJSON || (this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0]) ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
							},
						},
						{
							key: "shouldUseIntlApi",
							value: function () {
								return !ae.includes(this.options.compatibilityJSON);
							},
						},
					]),
					e
				);
			})();
			function le(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function ue(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? le(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: le(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function se(e, t, n) {
				var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
					a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
					o = (function (e, t, n) {
						var r = D(e, n);
						return void 0 !== r ? r : D(t, n);
					})(e, t, n);
				return !o && a && "string" === typeof n && void 0 === (o = W(e, n, r)) && (o = W(t, n, r)), o;
			}
			var ce = (function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					p(this, e),
						(this.logger = _.create("interpolator")),
						(this.options = t),
						(this.format =
							(t.interpolation && t.interpolation.format) ||
							function (e) {
								return e;
							}),
						this.init(t);
				}
				return (
					g(e, [
						{
							key: "init",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								e.interpolation || (e.interpolation = {escapeValue: !0});
								var t = e.interpolation;
								(this.escape = void 0 !== t.escape ? t.escape : U),
									(this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
									(this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
									(this.prefix = t.prefix ? M(t.prefix) : t.prefixEscaped || "{{"),
									(this.suffix = t.suffix ? M(t.suffix) : t.suffixEscaped || "}}"),
									(this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","),
									(this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
									(this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
									(this.nestingPrefix = t.nestingPrefix ? M(t.nestingPrefix) : t.nestingPrefixEscaped || M("$t(")),
									(this.nestingSuffix = t.nestingSuffix ? M(t.nestingSuffix) : t.nestingSuffixEscaped || M(")")),
									(this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ","),
									(this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
									(this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
									this.resetRegExp();
							},
						},
						{
							key: "reset",
							value: function () {
								this.options && this.init(this.options);
							},
						},
						{
							key: "resetRegExp",
							value: function () {
								var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
								this.regexp = new RegExp(e, "g");
								var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
								this.regexpUnescape = new RegExp(t, "g");
								var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
								this.nestingRegexp = new RegExp(n, "g");
							},
						},
						{
							key: "interpolate",
							value: function (e, t, n, r) {
								var a,
									o,
									i,
									l = this,
									u = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
								function s(e) {
									return e.replace(/\$/g, "$$$$");
								}
								var c = function (e) {
									if (e.indexOf(l.formatSeparator) < 0) {
										var a = se(t, u, e, l.options.keySeparator, l.options.ignoreJSONStructure);
										return l.alwaysFormat ? l.format(a, void 0, n, ue(ue(ue({}, r), t), {}, {interpolationkey: e})) : a;
									}
									var o = e.split(l.formatSeparator),
										i = o.shift().trim(),
										s = o.join(l.formatSeparator).trim();
									return l.format(se(t, u, i, l.options.keySeparator, l.options.ignoreJSONStructure), s, n, ue(ue(ue({}, r), t), {}, {interpolationkey: i}));
								};
								this.resetRegExp();
								var f = (r && r.missingInterpolationHandler) || this.options.missingInterpolationHandler,
									d = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
								return (
									[
										{
											regex: this.regexpUnescape,
											safeValue: function (e) {
												return s(e);
											},
										},
										{
											regex: this.regexp,
											safeValue: function (e) {
												return l.escapeValue ? s(l.escape(e)) : s(e);
											},
										},
									].forEach(function (t) {
										for (i = 0; (a = t.regex.exec(e)); ) {
											var n = a[1].trim();
											if (void 0 === (o = c(n)))
												if ("function" === typeof f) {
													var u = f(e, a, r);
													o = "string" === typeof u ? u : "";
												} else if (r && Object.prototype.hasOwnProperty.call(r, n)) o = "";
												else {
													if (d) {
														o = a[0];
														continue;
													}
													l.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)), (o = "");
												}
											else "string" === typeof o || l.useRawValueToEscape || (o = T(o));
											var s = t.safeValue(o);
											if (((e = e.replace(a[0], s)), d ? ((t.regex.lastIndex += o.length), (t.regex.lastIndex -= a[0].length)) : (t.regex.lastIndex = 0), ++i >= l.maxReplaces)) break;
										}
									}),
									e
								);
							},
						},
						{
							key: "nest",
							value: function (e, t) {
								var n,
									r,
									a,
									o = this,
									i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
								function l(e, t) {
									var n = this.nestingOptionsSeparator;
									if (e.indexOf(n) < 0) return e;
									var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
										o = "{".concat(r[1]);
									e = r[0];
									var i = (o = this.interpolate(o, a)).match(/'/g),
										l = o.match(/"/g);
									((i && i.length % 2 === 0 && !l) || l.length % 2 !== 0) && (o = o.replace(/'/g, '"'));
									try {
										(a = JSON.parse(o)), t && (a = ue(ue({}, t), a));
									} catch (u) {
										return this.logger.warn("failed parsing options string in nesting for key ".concat(e), u), "".concat(e).concat(n).concat(o);
									}
									return delete a.defaultValue, e;
								}
								for (; (n = this.nestingRegexp.exec(e)); ) {
									var u = [];
									((a = (a = ue({}, i)).replace && "string" !== typeof a.replace ? a.replace : a).applyPostProcessor = !1), delete a.defaultValue;
									var s = !1;
									if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
										var c = n[1].split(this.formatSeparator).map(function (e) {
											return e.trim();
										});
										(n[1] = c.shift()), (u = c), (s = !0);
									}
									if ((r = t(l.call(this, n[1].trim(), a), a)) && n[0] === e && "string" !== typeof r) return r;
									"string" !== typeof r && (r = T(r)),
										r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), (r = "")),
										s &&
											(r = u.reduce(function (e, t) {
												return o.format(e, t, i.lng, ue(ue({}, i), {}, {interpolationkey: n[1].trim()}));
											}, r.trim())),
										(e = e.replace(n[0], r)),
										(this.regexp.lastIndex = 0);
								}
								return e;
							},
						},
					]),
					e
				);
			})();
			function fe(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function de(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? fe(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: fe(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function pe(e) {
				var t = {};
				return function (n, r, a) {
					var o = r + JSON.stringify(a),
						i = t[o];
					return i || ((i = e(r, a)), (t[o] = i)), i(n);
				};
			}
			var he = (function () {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					p(this, e),
						(this.logger = _.create("formatter")),
						(this.options = t),
						(this.formats = {
							number: pe(function (e, t) {
								var n = new Intl.NumberFormat(e, de({}, t));
								return function (e) {
									return n.format(e);
								};
							}),
							currency: pe(function (e, t) {
								var n = new Intl.NumberFormat(e, de(de({}, t), {}, {style: "currency"}));
								return function (e) {
									return n.format(e);
								};
							}),
							datetime: pe(function (e, t) {
								var n = new Intl.DateTimeFormat(e, de({}, t));
								return function (e) {
									return n.format(e);
								};
							}),
							relativetime: pe(function (e, t) {
								var n = new Intl.RelativeTimeFormat(e, de({}, t));
								return function (e) {
									return n.format(e, t.range || "day");
								};
							}),
							list: pe(function (e, t) {
								var n = new Intl.ListFormat(e, de({}, t));
								return function (e) {
									return n.format(e);
								};
							}),
						}),
						this.init(t);
				}
				return (
					g(e, [
						{
							key: "init",
							value: function (e) {
								var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {interpolation: {}}).interpolation;
								this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",";
							},
						},
						{
							key: "add",
							value: function (e, t) {
								this.formats[e.toLowerCase().trim()] = t;
							},
						},
						{
							key: "addCached",
							value: function (e, t) {
								this.formats[e.toLowerCase().trim()] = pe(t);
							},
						},
						{
							key: "format",
							value: function (e, t, n) {
								var r = this,
									a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
								return t.split(this.formatSeparator).reduce(function (e, t) {
									var o = (function (e) {
											var t = e.toLowerCase().trim(),
												n = {};
											if (e.indexOf("(") > -1) {
												var r = e.split("(");
												t = r[0].toLowerCase().trim();
												var a = r[1].substring(0, r[1].length - 1);
												"currency" === t && a.indexOf(":") < 0
													? n.currency || (n.currency = a.trim())
													: "relativetime" === t && a.indexOf(":") < 0
													? n.range || (n.range = a.trim())
													: a.split(";").forEach(function (e) {
															if (e) {
																var t = E(e.split(":")),
																	r = t[0],
																	a = t
																		.slice(1)
																		.join(":")
																		.trim()
																		.replace(/^'+|'+$/g, "");
																n[r.trim()] || (n[r.trim()] = a), "false" === a && (n[r.trim()] = !1), "true" === a && (n[r.trim()] = !0), isNaN(a) || (n[r.trim()] = parseInt(a, 10));
															}
													  });
											}
											return {formatName: t, formatOptions: n};
										})(t),
										i = o.formatName,
										l = o.formatOptions;
									if (r.formats[i]) {
										var u = e;
										try {
											var s = (a && a.formatParams && a.formatParams[a.interpolationkey]) || {},
												c = s.locale || s.lng || a.locale || a.lng || n;
											u = r.formats[i](e, c, de(de(de({}, l), a), s));
										} catch (f) {
											r.logger.warn(f);
										}
										return u;
									}
									return r.logger.warn("there was no format function for ".concat(i)), e;
								}, e);
							},
						},
					]),
					e
				);
			})();
			function ge(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function me(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? ge(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: ge(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function ve(e) {
				var t = (function () {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = x(e);
					if (t) {
						var a = x(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return S(this, n);
				};
			}
			var ye = (function (e) {
				w(n, e);
				var t = ve(n);
				function n(e, r, a) {
					var o,
						i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
					return (
						p(this, n),
						(o = t.call(this)),
						V && R.call(b(o)),
						(o.backend = e),
						(o.store = r),
						(o.services = a),
						(o.languageUtils = a.languageUtils),
						(o.options = i),
						(o.logger = _.create("backendConnector")),
						(o.waitingReads = []),
						(o.maxParallelReads = i.maxParallelReads || 10),
						(o.readingCalls = 0),
						(o.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
						(o.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
						(o.state = {}),
						(o.queue = []),
						o.backend && o.backend.init && o.backend.init(a, i.backend, i),
						o
					);
				}
				return (
					g(n, [
						{
							key: "queueLoad",
							value: function (e, t, n, r) {
								var a = this,
									o = {},
									i = {},
									l = {},
									u = {};
								return (
									e.forEach(function (e) {
										var r = !0;
										t.forEach(function (t) {
											var l = "".concat(e, "|").concat(t);
											!n.reload && a.store.hasResourceBundle(e, t) ? (a.state[l] = 2) : a.state[l] < 0 || (1 === a.state[l] ? void 0 === i[l] && (i[l] = !0) : ((a.state[l] = 1), (r = !1), void 0 === i[l] && (i[l] = !0), void 0 === o[l] && (o[l] = !0), void 0 === u[t] && (u[t] = !0)));
										}),
											r || (l[e] = !0);
									}),
									(Object.keys(o).length || Object.keys(i).length) && this.queue.push({pending: i, pendingCount: Object.keys(i).length, loaded: {}, errors: [], callback: r}),
									{toLoad: Object.keys(o), pending: Object.keys(i), toLoadLanguages: Object.keys(l), toLoadNamespaces: Object.keys(u)}
								);
							},
						},
						{
							key: "loaded",
							value: function (e, t, n) {
								var r = e.split("|"),
									a = r[0],
									o = r[1];
								t && this.emit("failedLoading", a, o, t), n && this.store.addResourceBundle(a, o, n), (this.state[e] = t ? -1 : 2);
								var i = {};
								this.queue.forEach(function (n) {
									!(function (e, t, n, r) {
										var a = z(e, t, Object),
											o = a.obj,
											i = a.k;
										(o[i] = o[i] || []), r && (o[i] = o[i].concat(n)), r || o[i].push(n);
									})(n.loaded, [a], o),
										(function (e, t) {
											void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--);
										})(n, e),
										t && n.errors.push(t),
										0 !== n.pendingCount ||
											n.done ||
											(Object.keys(n.loaded).forEach(function (e) {
												i[e] || (i[e] = {});
												var t = n.loaded[e];
												t.length &&
													t.forEach(function (t) {
														void 0 === i[e][t] && (i[e][t] = !0);
													});
											}),
											(n.done = !0),
											n.errors.length ? n.callback(n.errors) : n.callback());
								}),
									this.emit("loaded", i),
									(this.queue = this.queue.filter(function (e) {
										return !e.done;
									}));
							},
						},
						{
							key: "read",
							value: function (e, t, n) {
								var r = this,
									a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
									o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
									i = arguments.length > 5 ? arguments[5] : void 0;
								if (!e.length) return i(null, {});
								if (this.readingCalls >= this.maxParallelReads) this.waitingReads.push({lng: e, ns: t, fcName: n, tried: a, wait: o, callback: i});
								else {
									this.readingCalls++;
									var l = function (l, u) {
											if ((r.readingCalls--, r.waitingReads.length > 0)) {
												var s = r.waitingReads.shift();
												r.read(s.lng, s.ns, s.fcName, s.tried, s.wait, s.callback);
											}
											l && u && a < r.maxRetries
												? setTimeout(function () {
														r.read.call(r, e, t, n, a + 1, 2 * o, i);
												  }, o)
												: i(l, u);
										},
										u = this.backend[n].bind(this.backend);
									if (2 !== u.length) return u(e, t, l);
									try {
										var s = u(e, t);
										s && "function" === typeof s.then
											? s
													.then(function (e) {
														return l(null, e);
													})
													.catch(l)
											: l(null, s);
									} catch (c) {
										l(c);
									}
								}
							},
						},
						{
							key: "prepareLoading",
							value: function (e, t) {
								var n = this,
									r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
									a = arguments.length > 3 ? arguments[3] : void 0;
								if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
								"string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
								var o = this.queueLoad(e, t, r, a);
								if (!o.toLoad.length) return o.pending.length || a(), null;
								o.toLoad.forEach(function (e) {
									n.loadOne(e);
								});
							},
						},
						{
							key: "load",
							value: function (e, t, n) {
								this.prepareLoading(e, t, {}, n);
							},
						},
						{
							key: "reload",
							value: function (e, t, n) {
								this.prepareLoading(e, t, {reload: !0}, n);
							},
						},
						{
							key: "loadOne",
							value: function (e) {
								var t = this,
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
									r = e.split("|"),
									a = r[0],
									o = r[1];
								this.read(a, o, "read", void 0, void 0, function (r, i) {
									r && t.logger.warn("".concat(n, "loading namespace ").concat(o, " for language ").concat(a, " failed"), r), !r && i && t.logger.log("".concat(n, "loaded namespace ").concat(o, " for language ").concat(a), i), t.loaded(e, r, i);
								});
							},
						},
						{
							key: "saveMissing",
							value: function (e, t, n, r, a) {
								var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
									i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
								if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t))
									this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
								else if (void 0 !== n && null !== n && "" !== n) {
									if (this.backend && this.backend.create) {
										var l = me(me({}, o), {}, {isUpdate: a}),
											u = this.backend.create.bind(this.backend);
										if (u.length < 6)
											try {
												var s;
												(s = 5 === u.length ? u(e, t, n, r, l) : u(e, t, n, r)) && "function" === typeof s.then
													? s
															.then(function (e) {
																return i(null, e);
															})
															.catch(i)
													: i(null, s);
											} catch (c) {
												i(c);
											}
										else u(e, t, n, r, i, l);
									}
									e && e[0] && this.store.addResource(e[0], t, n, r);
								}
							},
						},
					]),
					n
				);
			})(R);
			function be() {
				return {
					debug: !1,
					initImmediate: !0,
					ns: ["translation"],
					defaultNS: ["translation"],
					fallbackLng: ["dev"],
					fallbackNS: !1,
					supportedLngs: !1,
					nonExplicitSupportedLngs: !1,
					load: "all",
					preload: !1,
					simplifyPluralSuffix: !0,
					keySeparator: ".",
					nsSeparator: ":",
					pluralSeparator: "_",
					contextSeparator: "_",
					partialBundledLanguages: !1,
					saveMissing: !1,
					updateMissing: !1,
					saveMissingTo: "fallback",
					saveMissingPlurals: !0,
					missingKeyHandler: !1,
					missingInterpolationHandler: !1,
					postProcess: !1,
					postProcessPassResolved: !1,
					returnNull: !0,
					returnEmptyString: !0,
					returnObjects: !1,
					joinArrays: !1,
					returnedObjectHandler: !1,
					parseMissingKeyHandler: !1,
					appendNamespaceToMissingKey: !1,
					appendNamespaceToCIMode: !1,
					overloadTranslationOptionHandler: function (e) {
						var t = {};
						if (("object" === a(e[1]) && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === a(e[2]) || "object" === a(e[3]))) {
							var n = e[3] || e[2];
							Object.keys(n).forEach(function (e) {
								t[e] = n[e];
							});
						}
						return t;
					},
					interpolation: {
						escapeValue: !0,
						format: function (e, t, n, r) {
							return e;
						},
						prefix: "{{",
						suffix: "}}",
						formatSeparator: ",",
						unescapePrefix: "-",
						nestingPrefix: "$t(",
						nestingSuffix: ")",
						nestingOptionsSeparator: ",",
						maxReplaces: 1e3,
						skipOnVariables: !0,
					},
				};
			}
			function ke(e) {
				return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
			}
			function we(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function Se(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? we(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: we(Object(n)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
						  });
				}
				return e;
			}
			function xe(e) {
				var t = (function () {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = x(e);
					if (t) {
						var a = x(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return S(this, n);
				};
			}
			function Oe() {}
			var Ee = (function (e) {
				w(n, e);
				var t = xe(n);
				function n() {
					var e,
						r,
						a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						o = arguments.length > 1 ? arguments[1] : void 0;
					if (
						(p(this, n),
						(e = t.call(this)),
						V && R.call(b(e)),
						(e.options = ke(a)),
						(e.services = {}),
						(e.logger = _),
						(e.modules = {external: []}),
						(r = b(e)),
						Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(function (e) {
							"function" === typeof r[e] && (r[e] = r[e].bind(r));
						}),
						o && !e.isInitialized && !a.isClone)
					) {
						if (!e.options.initImmediate) return e.init(a, o), S(e, b(e));
						setTimeout(function () {
							e.init(a, o);
						}, 0);
					}
					return e;
				}
				return (
					g(n, [
						{
							key: "init",
							value: function () {
								var e = this,
									t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									n = arguments.length > 1 ? arguments[1] : void 0;
								"function" === typeof t && ((n = t), (t = {})), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" === typeof t.ns ? (t.defaultNS = t.ns) : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
								var r = be();
								function a(e) {
									return e ? ("function" === typeof e ? new e() : e) : null;
								}
								if (
									((this.options = Se(Se(Se({}, r), this.options), ke(t))),
									"v1" !== this.options.compatibilityAPI && (this.options.interpolation = Se(Se({}, r.interpolation), this.options.interpolation)),
									void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
									void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
									!this.options.isClone)
								) {
									var o;
									this.modules.logger ? _.init(a(this.modules.logger), this.options) : _.init(null, this.options), this.modules.formatter ? (o = this.modules.formatter) : "undefined" !== typeof Intl && (o = he);
									var i = new te(this.options);
									this.store = new Q(this.options.resources, this.options);
									var l = this.services;
									(l.logger = _),
										(l.resourceStore = this.store),
										(l.languageUtils = i),
										(l.pluralResolver = new ie(i, {prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix})),
										!o || (this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format) || ((l.formatter = a(o)), l.formatter.init(l, this.options), (this.options.interpolation.format = l.formatter.format.bind(l.formatter))),
										(l.interpolator = new ce(this.options)),
										(l.utils = {hasLoadedNamespace: this.hasLoadedNamespace.bind(this)}),
										(l.backendConnector = new ye(a(this.modules.backend), l.resourceStore, l, this.options)),
										l.backendConnector.on("*", function (t) {
											for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
											e.emit.apply(e, [t].concat(r));
										}),
										this.modules.languageDetector && ((l.languageDetector = a(this.modules.languageDetector)), l.languageDetector.init && l.languageDetector.init(l, this.options.detection, this.options)),
										this.modules.i18nFormat && ((l.i18nFormat = a(this.modules.i18nFormat)), l.i18nFormat.init && l.i18nFormat.init(this)),
										(this.translator = new Z(this.services, this.options)),
										this.translator.on("*", function (t) {
											for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
											e.emit.apply(e, [t].concat(r));
										}),
										this.modules.external.forEach(function (t) {
											t.init && t.init(e);
										});
								}
								if (((this.format = this.options.interpolation.format), n || (n = Oe), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)) {
									var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
									u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0]);
								}
								this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
								["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (t) {
									e[t] = function () {
										var n;
										return (n = e.store)[t].apply(n, arguments);
									};
								});
								["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(function (t) {
									e[t] = function () {
										var n;
										return (n = e.store)[t].apply(n, arguments), e;
									};
								});
								var s = j(),
									c = function () {
										var t = function (t, r) {
											e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), (e.isInitialized = !0), e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), s.resolve(r), n(t, r);
										};
										if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
										e.changeLanguage(e.options.lng, t);
									};
								return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), s;
							},
						},
						{
							key: "loadResources",
							value: function (e) {
								var t = this,
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oe,
									r = "string" === typeof e ? e : this.language;
								if (("function" === typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages)) {
									if (r && "cimode" === r.toLowerCase()) return n();
									var a = [],
										o = function (e) {
											e &&
												t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
													a.indexOf(e) < 0 && a.push(e);
												});
										};
									if (r) o(r);
									else
										this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) {
											return o(e);
										});
									this.options.preload &&
										this.options.preload.forEach(function (e) {
											return o(e);
										}),
										this.services.backendConnector.load(a, this.options.ns, function (e) {
											e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language), n(e);
										});
								} else n(null);
							},
						},
						{
							key: "reloadResources",
							value: function (e, t, n) {
								var r = j();
								return (
									e || (e = this.languages),
									t || (t = this.options.ns),
									n || (n = Oe),
									this.services.backendConnector.reload(e, t, function (e) {
										r.resolve(), n(e);
									}),
									r
								);
							},
						},
						{
							key: "use",
							value: function (e) {
								if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
								if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
								return (
									"backend" === e.type && (this.modules.backend = e),
									("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
									"languageDetector" === e.type && (this.modules.languageDetector = e),
									"i18nFormat" === e.type && (this.modules.i18nFormat = e),
									"postProcessor" === e.type && q.addPostProcessor(e),
									"formatter" === e.type && (this.modules.formatter = e),
									"3rdParty" === e.type && this.modules.external.push(e),
									this
								);
							},
						},
						{
							key: "setResolvedLanguage",
							value: function (e) {
								if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
									for (var t = 0; t < this.languages.length; t++) {
										var n = this.languages[t];
										if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
											this.resolvedLanguage = n;
											break;
										}
									}
							},
						},
						{
							key: "changeLanguage",
							value: function (e, t) {
								var n = this;
								this.isLanguageChangingTo = e;
								var r = j();
								this.emit("languageChanging", e);
								var a = function (e) {
										(n.language = e), (n.languages = n.services.languageUtils.toResolveHierarchy(e)), (n.resolvedLanguage = void 0), n.setResolvedLanguage(e);
									},
									o = function (o) {
										e || o || !n.services.languageDetector || (o = []);
										var i = "string" === typeof o ? o : n.services.languageUtils.getBestMatchFromCodes(o);
										i && (n.language || a(i), n.translator.language || n.translator.changeLanguage(i), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage && n.services.languageDetector.cacheUserLanguage(i)),
											n.loadResources(i, function (e) {
												!(function (e, o) {
													o ? (a(o), n.translator.changeLanguage(o), (n.isLanguageChangingTo = void 0), n.emit("languageChanged", o), n.logger.log("languageChanged", o)) : (n.isLanguageChangingTo = void 0),
														r.resolve(function () {
															return n.t.apply(n, arguments);
														}),
														t &&
															t(e, function () {
																return n.t.apply(n, arguments);
															});
												})(e, i);
											});
									};
								return (
									e || !this.services.languageDetector || this.services.languageDetector.async ? (!e && this.services.languageDetector && this.services.languageDetector.async ? (0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o)) : o(e)) : o(this.services.languageDetector.detect()), r
								);
							},
						},
						{
							key: "getFixedT",
							value: function (e, t, n) {
								var r = this,
									o = function e(t, o) {
										var i;
										if ("object" !== a(o)) {
											for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), s = 2; s < l; s++) u[s - 2] = arguments[s];
											i = r.options.overloadTranslationOptionHandler([t, o].concat(u));
										} else i = Se({}, o);
										(i.lng = i.lng || e.lng), (i.lngs = i.lngs || e.lngs), (i.ns = i.ns || e.ns), (i.keyPrefix = i.keyPrefix || n || e.keyPrefix);
										var c,
											f = r.options.keySeparator || ".";
										return (
											(c =
												i.keyPrefix && Array.isArray(t)
													? t.map(function (e) {
															return "".concat(i.keyPrefix).concat(f).concat(e);
													  })
													: i.keyPrefix
													? "".concat(i.keyPrefix).concat(f).concat(t)
													: t),
											r.t(c, i)
										);
									};
								return "string" === typeof e ? (o.lng = e) : (o.lngs = e), (o.ns = t), (o.keyPrefix = n), o;
							},
						},
						{
							key: "t",
							value: function () {
								var e;
								return this.translator && (e = this.translator).translate.apply(e, arguments);
							},
						},
						{
							key: "exists",
							value: function () {
								var e;
								return this.translator && (e = this.translator).exists.apply(e, arguments);
							},
						},
						{
							key: "setDefaultNamespace",
							value: function (e) {
								this.options.defaultNS = e;
							},
						},
						{
							key: "hasLoadedNamespace",
							value: function (e) {
								var t = this,
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
								if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
								var r = n.lng || this.resolvedLanguage || this.languages[0],
									a = !!this.options && this.options.fallbackLng,
									o = this.languages[this.languages.length - 1];
								if ("cimode" === r.toLowerCase()) return !0;
								var i = function (e, n) {
									var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
									return -1 === r || 2 === r;
								};
								if (n.precheck) {
									var l = n.precheck(this, i);
									if (void 0 !== l) return l;
								}
								return !!this.hasResourceBundle(r, e) || !(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!i(r, e) || (a && !i(o, e)));
							},
						},
						{
							key: "loadNamespaces",
							value: function (e, t) {
								var n = this,
									r = j();
								return this.options.ns
									? ("string" === typeof e && (e = [e]),
									  e.forEach(function (e) {
											n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
									  }),
									  this.loadResources(function (e) {
											r.resolve(), t && t(e);
									  }),
									  r)
									: (t && t(), Promise.resolve());
							},
						},
						{
							key: "loadLanguages",
							value: function (e, t) {
								var n = j();
								"string" === typeof e && (e = [e]);
								var r = this.options.preload || [],
									a = e.filter(function (e) {
										return r.indexOf(e) < 0;
									});
								return a.length
									? ((this.options.preload = r.concat(a)),
									  this.loadResources(function (e) {
											n.resolve(), t && t(e);
									  }),
									  n)
									: (t && t(), Promise.resolve());
							},
						},
						{
							key: "dir",
							value: function (e) {
								if ((e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)) return "rtl";
								var t = (this.services && this.services.languageUtils) || new te(be());
								return [
									"ar",
									"shu",
									"sqr",
									"ssh",
									"xaa",
									"yhd",
									"yud",
									"aao",
									"abh",
									"abv",
									"acm",
									"acq",
									"acw",
									"acx",
									"acy",
									"adf",
									"ads",
									"aeb",
									"aec",
									"afb",
									"ajp",
									"apc",
									"apd",
									"arb",
									"arq",
									"ars",
									"ary",
									"arz",
									"auz",
									"avl",
									"ayh",
									"ayl",
									"ayn",
									"ayp",
									"bbz",
									"pga",
									"he",
									"iw",
									"ps",
									"pbt",
									"pbu",
									"pst",
									"prp",
									"prd",
									"ug",
									"ur",
									"ydd",
									"yds",
									"yih",
									"ji",
									"yi",
									"hbo",
									"men",
									"xmn",
									"fa",
									"jpr",
									"peo",
									"pes",
									"prs",
									"dv",
									"sam",
									"ckb",
								].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1
									? "rtl"
									: "ltr";
							},
						},
						{
							key: "cloneInstance",
							value: function () {
								var e = this,
									t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oe,
									a = Se(Se(Se({}, this.options), t), {isClone: !0}),
									o = new n(a);
								(void 0 === t.debug && void 0 === t.prefix) || (o.logger = o.logger.clone(t));
								return (
									["store", "services", "language"].forEach(function (t) {
										o[t] = e[t];
									}),
									(o.services = Se({}, this.services)),
									(o.services.utils = {hasLoadedNamespace: o.hasLoadedNamespace.bind(o)}),
									(o.translator = new Z(o.services, o.options)),
									o.translator.on("*", function (e) {
										for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
										o.emit.apply(o, [e].concat(n));
									}),
									o.init(a, r),
									(o.translator.options = o.options),
									(o.translator.backendConnector.services.utils = {hasLoadedNamespace: o.hasLoadedNamespace.bind(o)}),
									o
								);
							},
						},
						{
							key: "toJSON",
							value: function () {
								return {options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage};
							},
						},
					]),
					n
				);
			})(R);
			i(Ee, "createInstance", function () {
				return new Ee(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
			});
			var Ce = Ee.createInstance();
			Ce.createInstance = Ee.createInstance;
			Ce.createInstance, Ce.dir, Ce.init, Ce.loadResources, Ce.reloadResources, Ce.use, Ce.changeLanguage, Ce.getFixedT, Ce.t, Ce.exists, Ce.setDefaultNamespace, Ce.hasLoadedNamespace, Ce.loadNamespaces, Ce.loadLanguages;
			var Pe = JSON.parse(
					'{"reel":{"title":"Hello we\u2019re EGGWORM.","subtitle1":"As a results-driven Marketing Strategy Company, our goal is to go above and beyond expectations in order to craft empowering interactions that breathe new life into the brand narratives of our partners. Our objective is to add a focused element to our work that connects on a deeper emotional level, elevating, inspiring, and creating lasting connections. We recognize that emotions shape how people experience the world.","subtitle2":"At our core, we believe in harmoniously blending innovation and functionality. We create experiences that ignite joy and serve their purpose with unmatched efficiency, amplifying the ideas of our clients and partners. Our dedication extends beyond physical or digital realms. In an ever-evolving world, we embrace a seamless fusion, crafting dynamic experiences that adapt and flourish amidst change. We support our partners wholeheartedly, nurturing visionary ideas into successful realities.","subtitle3":"Our success hinges on both client and team satisfaction. We believe passionate employees create exceptional products and experiences. So, we nurture a growth-focused environment for every individual where challenges become opportunities. We master the art of harmonizing work and play, empowering our team to triumph through dedication and enjoyment, creating an epic life adventure."},"HWA":{"title":"WHO WE ARE","subtitle1":"Since 2010, we have been improving the way brands, companies, and communities in Japan collaborate, forging invaluable connections that propel growth and success. Our specialization lies in crafting dynamic business and marketing strategies tailored to the unique needs of both our international and domestic partners.","subtitle2":"Our team boasts unparalleled expertise in content creation, brand activation, and event production, enabling us to craft unforgettable experiences that resonate with our partners\' audiences. By leveraging the power of PR and marketing, we amplify their message, ensuring it captivates and engages its target audience.","subtitle3":"At the heart of our success is our distinctive perspective, combined with our skilled team and our network of trusted partners. Together, we navigate the ever-changing landscape, steering our clients towards a prosperous and thriving future."},"OB":{"title":"OUR BUSINESS","subtitle1":"How we work","subtitle2":"We thrive at the intersection of business and creative, collaborating with our partners to truly understand their needs, motivations, challenges, and vision. Through in-depth analysis and exploration, we uncover valuable insights and opportunities. Our end-to-end strategy comes with clearly defined action items whilst providing a roadmap for success. And when it comes to execution, we\'re here to provide the solutions you need to bring your vision to life.","boxTitle1":"OUR BRANDS","boxTitle2":"MEDIA","boxTitle3":"CONTENT"},"OS":{"title":"OUR SERVICES","box1":"STRATEGY","box1-content":"Our dynamic network of strategists, carefully curated for each client and brief, come together under our dedicated strategy team to create extraordinary experiences and deliver exceptional results.","box2":"CREATION","box2-content":"We are passionate about designing authentic and unforgettable experiences that resonate with your brand and business on a deep level. Our goal is to create moments that leave a lasting impact, forging a genuine connection between your audience and your company or brand.","box3":"AMPLIFICATION","box3-content":"With strategic amplification, we make your message stand out and deeply resonate with your audience amidst all the clutter and noise. By crafting impactful channels using our own tools and across our extensive network, we elevate your voice to create a lasting connection with your target audience.","box4":"Our approach is tailored to meet your every need, providing dedicated support from strategy development to message amplification, ultimately ensuring your message resonates deeply with your audience."},"OC":{"title":"OUR PARTNERS"},"CI":{"title":"COMPANY INFO","companyName":"Company name","companyNameValue":"EGGWORM K.K","CEO":"CEO","CEOValue":"Masaki Kawamura","date":"Founded","dateValue":"26.01.2010","address":"Address","addressValue":"Higashi 1-4-6 1F, Shibuya-Ku,Tokyo","phoneNumber":"Phone number","phoneNumberValue":"+81-3-6277-0087"},"UH":{"title":"Our Journey","text1":"Founded in 2010, we embarked on a mission to redefine the events industry in Japan. Our goal was to create immersive experiences where every detail mattered, leaving a lasting impression on people\'s memories.","text2":"Driven by our passion, we pushed boundaries and overcame scepticism with the unwavering support of our friends and partners. They believed in our vision, transforming them into devoted fans and fostering deep connections. The unique and captivating aspect of our work lies in the carefully designed and orchestrated chaos.","text3":"From concepting mind-bending ideas to executing flawless experiences, we found exhilaration in every step of the journey. From concepting mind-bending ideas to negotiating contracts with talent and venues and programming to building out awe-inspiring spaces we love it all.","text4":"Along our path, we formed partnerships with influential events companies and as the stakes grew higher, we embraced the adventure whilst fearlessly exploring diverse concepts and spaces across Japan. Recognizing the significance of taking risks and the trust placed in us, this shared understanding forms the cornerstone of our longevity in the industry. We thrive in the face of challenges, drawing strength from the trust placed in us by companies and brands.","text5":"Amid the digital revolution, we harnessed social media and digital marketing, realising that traditional methods like flyers and posters were no longer effective. Our expertise in the digital realm allowed us to connect with a wider audience, revolutionising our approach to sponsorship and forming impactful partnerships.","text6":"Resilience and flexibility became our hallmarks as we created extraordinary experiences in event spaces that became our dynamic canvases. Talkability was key as we designed moments that sparked conversations and kept the excitement alive long after the events concluded.","text7":"With our captivating energy, visuals and work ethic, brands and companies sought us out, wanting to know more. We eagerly embraced the challenge, expanding our expertise to encompass a diverse range of problem-solving solutions for our partners. This journey shaped us into masters of our craft, excelling in strategy, creation, and amplification.","text8":"Trust is the foundation of our relationships, as many partners have stood by our side for over a decade. At EGGWORM, our passion lies in crafting extraordinary experiences that captivate hearts, stimulate minds, and ignite imaginations."},"WOKR":{"1":"Bruichladdich were looking to create awareness in 2022 for their product range in the Japanese market. They wanted a launch event in line with their target demographic and PR reach that would assist them in telling their brand story on a national scale.","2":"To help the hospitals combat Covid-19 with Taxi Ovation \u2013 a fundraiser was created to provide free taxi-ride services for healthcare workers in partnership with Makita General Hospital and Kyoritsu Taxi Co., Ltd. The aim was to increase the welfare of hospital staff during this pandemic as well as providing business for companies who were affected by it.","3":"To mark 69 years of selling sneakers, Onitsuka Tiger opened up a flagship store in the heart of Tokyo. The opening night enhanced the relevance of the brand as one of Japan\'s original sneaker brands.","detail":"View Details","all":"View All"}}',
				),
				Ne = JSON.parse(
					'{"reel":{"title":"\u300c\u904a\u3076\u3053\u3068\u306f\u3001\u751f\u304d\u308b\u3053\u3068\u3002\u300d\\n\\nHello, we\u2019re EGGWORM.\\n\\n\u30d6\u30e9\u30f3\u30c9\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u4f1d\u9054\u3067\u56f0\u3063\u3066\u3044\u307e\u305b\u3093\u304b\uff1f\\n\u65b0\u305f\u306a\u30d6\u30e9\u30f3\u30c9\u4f53\u9a13\u3092\u751f\u307f\u51fa\u3059\u624b\u304c\u304b\u308a\u3092\\n\u63a2\u3057\u3066\u3044\u307e\u305b\u3093\u304b\uff1f","subtitle1":"\u4f53\u9a13\u3053\u305d\u304c\u30d6\u30e9\u30f3\u30c9\u306b\u306a\u308b\u6642\u4ee3\u3002\\n\u4f53\u9a13\u304c\u5171\u611f\u3092\u547c\u3073\u3001\u7269\u8a9e\u3092\u3064\u3080\u304e\u3001\\n\u4e16\u306e\u4e2d\u306b\u65b0\u3057\u3044\u4fa1\u5024\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002\\n\\n\u300c\u4f53\u9a13\u300d\u3067\u30d6\u30e9\u30f3\u30c9\u306e\u300c\u60f3\u3044\u300d\u3092\u4f1d\u3048\u308b\u3002\\n\u305d\u308c\u304c\u79c1\u305f\u3061\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u3067\u3059\u3002\\n\\n\u30d6\u30e9\u30f3\u30c9\u304c\u5c4a\u3051\u305f\u3044\u771f\u306e\u60f3\u3044\u306b\u3001\u79c1\u305f\u3061\u306f\u8033\u3092\u50be\u3051\u307e\u3059\u3002\\n\u30aa\u30f3\u30e9\u30a4\u30f3\u3068\u30aa\u30d5\u30e9\u30a4\u30f3\u306e\u5883\u754c\u3092\u8d8a\u3048\u3001\\n\u30ea\u30a2\u30eb\u3068\u30aa\u30f3\u30e9\u30a4\u30f3\u306e\u65bd\u7b56\u3092\u30df\u30c3\u30af\u30b9\u3057\u305f\\n\u7d71\u5408\u7684\u306a\u4f53\u9a13\u8a2d\u8a08\u3092\u30d7\u30ed\u30c7\u30e5\u30fc\u30b9\u3057\u307e\u3059\u3002","subtitle2":"\u79c1\u305f\u3061\u306e\u4f53\u9a13\u8a2d\u8a08\u306e\u30ad\u30fc\u306f\u300c\u904a\u3073\u5fc3\u300d\u3002\\n\\n\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306b\u3088\u308a\u3001\\n\u3042\u3089\u3086\u308b\u4e0d\u4fbf\u306f\u89e3\u6d88\u3055\u308c\u3066\u3044\u304d\u307e\u3059\u3002\\n\u305d\u3093\u306a\u6642\u4ee3\u3060\u304b\u3089\u3053\u305d\\n\u4eba\u9593\u306b\u3057\u304b\u4f5c\u308a\u51fa\u305b\u306a\u3044\u300c\u904a\u3073\u5fc3\u300d\u304c\\n\u5927\u5207\u3060\u3068\u79c1\u305f\u3061\u306f\u4fe1\u3058\u3066\u3044\u307e\u3059\u3002\\n\\n\u904a\u3073\u5fc3\u3068\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u3001\\n\u305d\u3057\u3066\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306e\u529b\u3067\u3001\\n\u30d6\u30e9\u30f3\u30c9\u304c\u5c4a\u3051\u305f\u3044\u60f3\u3044\u3092\u4f53\u9a13\u306b\u5909\u3048\u307e\u3059\u3002\\n\u305d\u308c\u304c\u3001\u79c1\u305f\u3061EGGWORM\u306e\u4f7f\u547d\u3002","subtitle3":"\\n\u904a\u3073\u5fc3\u3067\u672a\u6765\u3092\u5f69\u308a\u3001\\n\u4e00\u7dd2\u306b\u611f\u52d5\u306e\u7269\u8a9e\u3092\u7d21\u304e\u307e\u305b\u3093\u304b\uff1f"},"HWA":{"title":"\u79c1\u305f\u3061\u306e\u5b58\u5728\u610f\u7fa9","subtitle1":"\u79c1\u305f\u3061\u306f\u30d6\u30e9\u30f3\u30c9\u306e\u300c\u60f3\u3044\u300d\u3092\\n\u5fc3\u306b\u97ff\u304f\u300c\u4f53\u9a13\u300d\u306b\u5909\u3048\u308b\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8\u3067\u3059\u3002\\n\\n2010\u5e74\u304b\u3089\u56fd\u5185\u5916\u306e\u30d6\u30e9\u30f3\u30c9\u3068\u5171\u306b\u6b69\u307f\u3001\\n\u5f7c\u3089\u306e\u60f3\u3044\u3092\u3072\u3068\u308a\u3072\u3068\u308a\u306b\u5c4a\u3051\u308b\u6226\u7565\u3068\u6226\u8853\u3092\\n\u4e00\u7dd2\u306b\u4f5c\u308a\u4e0a\u3052\u3066\u304d\u307e\u3057\u305f\u3002","subtitle2":"SNS\u304b\u3089\u30ea\u30a2\u30eb\u30a4\u30d9\u30f3\u30c8\u307e\u3067\\nPR\u3068\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306e\u529b\u3092\u6d3b\u7528\u3057\u3001\\n\u30d6\u30e9\u30f3\u30c9\u306e\u771f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\\n\u30e6\u30cb\u30fc\u30af\u306a\u5f62\u3067\u30bf\u30fc\u30b2\u30c3\u30c8\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u306b\u5c4a\u304f\u3088\u3046\u306b\\n\u30d7\u30ed\u30c7\u30e5\u30fc\u30b9\u3059\u308b\u306e\u304c\u79c1\u305f\u3061\u306e\u5f79\u76ee\u3067\u3059\u3002","subtitle3":"\u79c1\u305f\u3061\u306e\u5f37\u307f\u306f\u72ec\u81ea\u306e\u8996\u70b9\u3068\u904a\u3073\u5fc3\u6ea2\u308c\u308b\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u3001\\n\u305d\u3057\u3066\u30a2\u30a4\u30c7\u30a2\u3092\u5b9f\u88c5\u3059\u308b\u7d4c\u9a13\u8c4a\u5bcc\u306a\u30c1\u30fc\u30e0\\n\\n\u4fe1\u983c\u3067\u304d\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u3059\u3002\\n\\n\u4e00\u7dd2\u306b\u672a\u6765\u3092\u5909\u3048\u308b\u4f53\u9a13\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002\\n\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u304c\u3042\u306a\u305f\u306e\u30d6\u30e9\u30f3\u30c9\u3068\u5171\u306b\u6b69\u3080\u30d1\u30fc\u30c8\u30ca\u30fc\u3067\u3059\u3002"},"OB":{"title":"\u79c1\u305f\u3061\u306e\u30d3\u30b8\u30cd\u30b9","subtitle1":"\u79c1\u305f\u3061\u306e\u50cd\u304d\u65b9","subtitle2":"\u30d3\u30b8\u30cd\u30b9\u3068\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d3\u30c6\u30a3\u304c\u4ea4\u5dee\u3059\u308b\u5730\u70b9\u3001\\n\u305d\u308c\u304c\u79c1\u305f\u3061\u306e\u821e\u53f0\u3067\u3059\u3002\\n\\n\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u6df1\u304f\u5bfe\u8a71\u3057\u3001\\n\u30d6\u30e9\u30f3\u30c9\u306e\u672c\u8cea\u7684\u306a\u4fa1\u5024\u3068\u30d3\u30b8\u30e7\u30f3\u306e\u7406\u89e3\u306b\u3064\u306a\u3052\u307e\u3059\u3002\\n\\n\u904a\u3076\u3053\u3068\u306f\u3001\u751f\u304d\u308b\u3053\u3068\u3002\\n\\n\u305d\u306e\u4fe1\u5ff5\u304b\u3089\u3001\u5171\u611f\u3092\u751f\u3080\u4f53\u9a13\u3068\u7269\u8a9e\u3092\u7d21\u304e\u51fa\u3057\u3001\\n\u65b0\u3057\u3044\u4fa1\u5024\u3092\u5275\u51fa\u3057\u307e\u3059\u3002\\n\\n\u6226\u7565\u7684\u306b\u9078\u629e\u3068\u96c6\u4e2d\u3057\\n\u30d6\u30e9\u30f3\u30c9\u306e\u7279\u5fb4\u3092\u6d3b\u304b\u3057\u305f\u6226\u7565\u3092\u72ec\u81ea\u306e\u8996\u70b9\u3067\u5c0e\u304d\u51fa\u3057\u307e\u3059\u3002\\n\\n\u30a2\u30a4\u30c7\u30a2\u3060\u3051\u3067\u306f\u306a\u304f\u3001\\n\u660e\u78ba\u306a\u884c\u52d5\u8a08\u753b\u3068\u6210\u529f\u3078\u306e\u9053\u7b4b\u3092\u63cf\u304d\u3001\\n\u3042\u306a\u305f\u306e\u30d3\u30b8\u30e7\u30f3\u3092\u5b9f\u88c5\u53ef\u80fd\u306a\u6226\u8853\u3078\u3068\u5c0e\u304d\u307e\u3059\u3002\\n\\n\u30aa\u30f3\u30e9\u30a4\u30f3\u3068\u30aa\u30d5\u30e9\u30a4\u30f3\u306e\u57a3\u6839\u3092\u8d85\u3048\u3066\u3001\\n\u3042\u306a\u305f\u306e\u60f3\u3044\u3092\u79c1\u305f\u3061\u304c\u30c7\u30b6\u30a4\u30f3\u3057\u305f\u4f53\u9a13\u3067\\n\u3072\u3068\u308a\u3072\u3068\u308a\u306e\u5fc3\u306b\u5c4a\u3051\u307e\u3059\u3002\\n\\n\u4f53\u9a13\u3053\u305d\u304c\u30d6\u30e9\u30f3\u30c9\u306b\u306a\u308b\u6642\u4ee3\u3002\\n\u65b0\u305f\u306a\u4f53\u9a13\u3068\u7269\u8a9e\u3092\u4e00\u7dd2\u306b\u5275\u308a\u4e0a\u3052\u307e\u3057\u3087\u3046\u3002","boxTitle1":"\u6211\u3005\u306e\u30d6\u30e9\u30f3\u30c9","boxTitle2":"\u30e1\u30c7\u30a3\u30a2","boxTitle3":"\u30b3\u30f3\u30c6\u30f3\u30c4"},"OS":{"title":"\u79c1\u305f\u3061\u306e\u30b5\u30fc\u30d3\u30b9","box1":"\u6226\u7565","box1-content":"\u9054\u6210\u3059\u308b\u3079\u304d\u76ee\u7684\u306b\u5bfe\u3057\u3066\u3001\u5e38\u306b\u8cc7\u6e90\u306f\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002\\n\u6226\u7565\u3068\u306f\u76ee\u7684\u9054\u6210\u306e\u305f\u3081\u306b\u3001\u8cc7\u6e90\u3092\u914d\u5206\u3059\u308b\u300c\u9078\u629e\u300d\u3067\u3059\u3002\\n\\n\u6700\u521d\u306b\u76ee\u7684\u3092\u660e\u78ba\u306b\u3059\u308b\u3053\u3068\u304c\u4f55\u3088\u308a\u3082\u91cd\u8981\u3067\u3059\u3002\\n\u306a\u305c\u306a\u3089\u3001\u76ee\u7684\u304c\u5909\u308f\u308b\u3068\u3001\u4ee5\u4e0b\u306b\u7d9a\u304f\u300c\u6226\u7565\u300d\u3068\u300c\u6226\u8853\u300d\u3082\u5909\u308f\u3063\u3066\u304f\u308b\u304b\u3089\u3067\u3059\u3002\\n\\n\u306a\u305c\u3053\u306e\u30d6\u30e9\u30f3\u30c9\u3092\u3084\u308b\u306e\u304b\u3001\u76ee\u7684\u3092\u660e\u78ba\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304b\uff1f\\n\\n\u304a\u5ba2\u69d8\u306e\u982d\u306e\u4e2d\u306b\u6b8b\u3057\u305f\u3044\u300c\u30d6\u30e9\u30f3\u30c9\u30a8\u30af\u30a4\u30c6\u30a3\u300d\u306f\u660e\u78ba\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304b\uff1f\\n\\n\u30d6\u30e9\u30f3\u30c9\u30d1\u30fc\u30bd\u30ca\u30ea\u30c6\u30a3\u3092\u4eba\u3005\u306b\u3069\u306e\u3088\u3046\u306b\u8a8d\u8b58\u3057\u3066\u3082\u3089\u3044\u305f\u3044\u3067\u3059\u304b\uff1f\\n\\n\u76ee\u7684\u304c\u660e\u78ba\u3067\u3042\u308c\u3070\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u304c\u7d5e\u308a\u8fbc\u3081\u3001\u8cc7\u6e90\u3092\u7121\u99c4\u306b\u6d88\u8cbb\u3057\u307e\u305b\u3093\u3002\\n\\n\u8cc7\u6e90\u3092\u96c6\u4e2d\u6295\u4e0b\u3057\u305f\u3044\u30bf\u30fc\u30b2\u30c3\u30c8\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3092\u7d5e\u308a\u8fbc\u307e\u306a\u3044\u3068\u4f1d\u3048\u305f\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u307c\u3084\u3051\u3066\u3057\u307e\u3044\u307e\u3059\u3002\\n\\n\u3068\u308a\u3042\u3048\u305a\u5168\u90e8\u3084\u308d\u3046\u3068\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\\n\u8cc7\u6e90\u306f\u30d6\u30e9\u30f3\u30c9\u304c\u7d76\u5bfe\u306b\u8ca0\u3051\u3089\u308c\u306a\u3044\u30dd\u30a4\u30f3\u30c8\u306b\u96c6\u4e2d\u3055\u305b\u308b\u3002\\n\\n\u305d\u308c\u304c\u79c1\u305f\u3061\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u306e\u6226\u7565\u3078\u306e\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9\u3067\u3059\u3002","box2":"\u30af\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3","box2-content":"\u611f\u60c5\u3068\u5275\u9020\u6027\u306e\u878d\u5408\u3002\\n\\n\u4eba\u9593\u3060\u3051\u304c\u6301\u3064\u611f\u52d5\u304b\u3089\u751f\u307e\u308c\u308b\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d3\u30c6\u30a3\u304c\u3001\u65b0\u3057\u3044\u4fa1\u5024\u3068\u7d4c\u6e08\u570f\u3092\u751f\u307f\u51fa\u3057\u307e\u3059\u3002\\n\\n\u6226\u7565\u7684\u306b\u9078\u629e\u3068\u96c6\u4e2d\u3059\u308b\u4e2d\u3067\u3001\u79c1\u305f\u3061\u306e\u30b3\u30a2\u30a2\u30a4\u30c7\u30a2\u306f\u793e\u4f1a\u306e\u5909\u5316\u306e\u89e6\u5a92\u3068\u306a\u308a\u307e\u3059\u3002\\n\\n\u904a\u3073\u5fc3\u3068\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d3\u30c6\u30a3\u3067\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u7d21\u304e\u3001\u611f\u52d5\u304c\u4eba\u3005\u3092\u52d5\u304b\u3057\u3001\u4e16\u754c\u3092\u5909\u3048\u308b\u306e\u3067\u3059\u3002\\n\\nAI\u306e\u6642\u4ee3\u3060\u304b\u3089\u3053\u305d\u3001\u79c1\u305f\u3061\u306f\u4eba\u9593\u306e\u5275\u9020\u6027\u3092\u5927\u5207\u306b\u3057\u307e\u3059\u3002\\n\\n\u305d\u308c\u304c\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u306e\u30af\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3\u306e\u54f2\u5b66\u3067\u3059\u3002","box3":"\u30a2\u30f3\u30d7\u30ea\u30d5\u30a3\u30b1\u30fc\u30b7\u30e7\u30f3","box3-content":"\u30e1\u30c7\u30a3\u30a2\u9732\u51fa\u304b\u3089\u9006\u7b97\u3059\u308b\u306e\u304c\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u306ePR\u306e\u57fa\u672c\u65b9\u91dd\u3067\u3059\u3002\\n\\n\u5177\u8c61\u5316\u3057\u305f\u30e1\u30c7\u30a3\u30a2\u30a4\u30e1\u30fc\u30b8\u3068\u30bf\u30fc\u30b2\u30c3\u30c8\u8a2d\u5b9a\u3067\u3001\u9bae\u70c8\u306a\u30d6\u30e9\u30f3\u30c9\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u7d21\u304e\u307e\u3059\u3002\\n\\n\u793e\u4f1a\u3068\u5354\u8abf\u3057\u3001\u65b0\u305f\u306a\u4fa1\u5024\u3068\u8a71\u984c\u3092\u751f\u307f\u51fa\u3059\u3053\u3068\u3067\u66f4\u306a\u308b\u9732\u51fa\u3092\u5f15\u304d\u5bc4\u305b\u307e\u3059\u3002\\n\\n\u5168\u3066\u306e\u95a2\u4fc2\u8005\u3001\u9867\u5ba2\u3001\u682a\u4e3b\u3001\u793e\u54e1\u3001\u305d\u3057\u3066\u30e1\u30c7\u30a3\u30a2\u3068\u6700\u9069\u306a\u95a2\u4fc2\u3092\u7bc9\u304d\u4e0a\u3052\u3001\\n\u30d6\u30e9\u30f3\u30c9\u306e\u9818\u57df\u3092\u5e83\u3052\u308b\u3002\\n\\n\u3053\u308c\u304c\u3001\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u306ePR\u306e\u771f\u9aa8\u9802\u3067\u3059\u3002","box4":"\u79c1\u305f\u3061\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001\u6226\u7565\u306e\u7b56\u5b9a\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u62e1\u6563\u307e\u3067\u3001\u30d6\u30e9\u30f3\u30c9\u306e\u3042\u3089\u3086\u308b\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u79c1\u305f\u3061\u306f\u5c02\u9580\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u3001\u6700\u7d42\u7684\u306b\u306f\u3042\u306a\u305f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3068\u6df1\u304f\u5171\u9cf4\u3059\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3057\u307e\u3059\u3002"},"OC":{"title":"\u5f53\u793e\u306e\u30d1\u30fc\u30c8\u30ca\u30fc"},"CI":{"title":"\u4f1a\u793e\u60c5\u5831","startingCapital":"\u8a2d\u7acb\u8cc7\u672c\u91d1","startingCapitalValue":"5\u767e\u4e07\u5186","companyName":"\u4f1a\u793e\u540d","companyNameValue":"EGGWORM K.K","CEO":"CEO","CEOValue":"\u5ddd\u6751\u660c\u7d00","date":"\u8a2d\u7acb\u65e5","dateValue":"2010\u5e741\u670826\u65e5","address":"\u8a2d\u7acb\u65e5","addressValue":"150-0011 \u6771\u4eac\u90fd\u6e0b\u8c37\u533a\u67711-4-6","phoneNumber":"\u96fb\u8a71\u756a\u53f7","phoneNumberValue":"+81-3-6277-0087"},"UH":{"title":"\u79c1\u305f\u3061\u306e\u6cbf\u9769","text1":"2010\u5e74\u3001\u79c1\u305f\u3061EGGWORM\u306f\u305d\u306e\u4e00\u6b69\u3092\u8e0f\u307f\u51fa\u3057\u307e\u3057\u305f\u3002\\n\u76ee\u7684\u306f\u3001\u65e5\u672c\u306e\u30a4\u30d9\u30f3\u30c8\u696d\u754c\u306b\u65b0\u98a8\u3092\u5dfb\u304d\u8d77\u3053\u3059\u3053\u3068\u3002","text2":"","text3":"\u79c1\u305f\u3061\u306f\u3001\u7d30\u90e8\u306b\u307e\u3067\u3053\u3060\u308f\u308a\u629c\u3044\u305f\u4f53\u9a13\u3092\u63d0\u4f9b\u3057\u3001\u5fc3\u306b\u6df1\u304f\u523b\u307f\u8fbc\u3080\u3053\u3068\u3092\u76ee\u6307\u3057\u307e\u3057\u305f\u3002\\n\u4e00\u898b\u3001\u6df7\u6c8c\u3068\u3082\u898b\u3048\u308b\u79c1\u305f\u3061\u306e\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u306b\u306f\u3001\u7dfb\u5bc6\u306a\u8a2d\u8a08\u3068\u8a08\u7b97\u3055\u308c\u305f\u6f14\u51fa\u304c\u65bd\u3055\u308c\u3001\u305d\u308c\u304c\u79c1\u305f\u3061\u306e\u552f\u4e00\u7121\u4e8c\u306e\u9b45\u529b\u3092\u751f\u307f\u51fa\u3057\u3066\u3044\u307e\u3059\u3002","text4":"","text5":"\u30c7\u30b8\u30bf\u30eb\u9769\u547d\u306e\u771f\u3063\u53ea\u4e2d\u3001\u79c1\u305f\u3061\u306fSNS\u3068\u30c7\u30b8\u30bf\u30eb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u529b\u3092\u501f\u308a\u3001\\n\u5f93\u6765\u306e\u5e83\u544a\u624b\u6cd5\u3067\u306f\u6210\u3057\u5f97\u306a\u3044\u3084\u308a\u65b9\u3067\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3068\u7e4b\u304c\u308a\u3001\\n\u30aa\u30f3\u30e9\u30a4\u30f3\u3068\u30aa\u30d5\u30e9\u30a4\u30f3\u3092\u7d71\u5408\u3057\u305f\u65b0\u305f\u306a\u30a4\u30f3\u30d1\u30af\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u6570\u3005\u306e\u77ac\u9593\u3092\u751f\u307f\u51fa\u3057\u307e\u3057\u305f\u3002","text6":"\u79c1\u305f\u3061\u306f\u65b0\u305f\u306a\u6311\u6226\u3092\u697d\u3057\u307f\u3001\u77e5\u8b58\u3092\u6df1\u3081\u3001\u69d8\u3005\u306a\u554f\u984c\u89e3\u6c7a\u306b\u53d6\u308a\u7d44\u3080\u80fd\u529b\u3092\u8eab\u306b\u3064\u3051\u307e\u3057\u305f\u3002\\n\u3053\u308c\u3089\u306e\u7d4c\u9a13\u304c\u79c1\u305f\u3061\u3092\u6210\u9577\u3055\u305b\u3001\u6226\u7565\u7684\u601d\u8003\u3001\u5275\u9020\u529b\u3001\u305d\u3057\u3066\u8a71\u984c\u3092\u4e16\u9593\u306b\u5e83\u3052\u308b\u529b\u3092\u78e8\u304d\u4e0a\u3052\u307e\u3057\u305f\u3002","text7":"EGGWORM\u306e\u57fa\u76e4\u3068\u306a\u308b\u306e\u306f\u4fe1\u983c\u3067\u3059\u3002\\n10\u5e74\u4ee5\u4e0a\u3082\u306e\u9593\u3001\u79c1\u305f\u3061\u3068\u5171\u306b\u6b69\u3093\u3067\u304f\u308c\u305f\u30d1\u30fc\u30c8\u30ca\u30fc\u305f\u3061\u304c\u3001\u305d\u306e\u8a3c\u62e0\u3067\u3059\u3002","text8":"\u5fc3\u3092\u52d5\u304b\u3057\u3001\u601d\u8003\u3092\u523a\u6fc0\u3057\u3001\u60f3\u50cf\u529b\u3092\u559a\u8d77\u3059\u308b\u7279\u5225\u306a\u4f53\u9a13\u3092\u5275\u51fa\u3059\u308b\u3053\u3068\u3002\\n\u305d\u308c\u304c\u79c1\u305f\u3061EGGWORM\u306e\u60c5\u71b1\u3067\u3042\u308a\u3001\u3053\u308c\u304b\u3089\u3082\u5909\u308f\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093"},"WOKR":{"1":"\u30d6\u30eb\u30c3\u30af\u30e9\u30c7\u30a3\u306f\u65e5\u672c\u5e02\u5834\u3067\u81ea\u793e\u88fd\u54c1\u306e\u8a8d\u77e5\u5ea6\u3092\u9ad8\u3081\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3057\u305f\u3002\u5f7c\u3089\u306f\u30bf\u30fc\u30b2\u30c3\u30c8\u5c64\u3068PR\u30ea\u30fc\u30c1\u306b\u5408\u308f\u305b\u305f\u30ed\u30fc\u30f3\u30c1\u30a4\u30d9\u30f3\u30c8\u3092\u8a08\u753b\u3057\u3001\u56fd\u5185\u898f\u6a21\u3067\u30d6\u30e9\u30f3\u30c9\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u4f1d\u3048\u308b\u652f\u63f4\u3092\u6c42\u3081\u3066\u3044\u307e\u3057\u305f\u3002","2":"\u65b0\u578b\u30b3\u30ed\u30ca\u30a6\u30a3\u30eb\u30b9\u306b\u95a2\u308f\u308b\u533b\u7642\u5f93\u4e8b\u8005\u306e\u65b9\u3005\u3092\u652f\u63f4\u3057\u3088\u3046\u3002\u5f0a\u793e\u306f\u75c5\u9662\u3001\u30bf\u30af\u30b7\u30fc\u4f1a\u793e\u3068\u30d1\u30fc\u30c8\u30ca\u30fc\u30b7\u30c3\u30d7\u3092\u7d44\u307f\u3001\u533b\u7642\u5f93\u4e8b\u8005\u306e\u65b9\u306e\u901a\u52e4\u306e\u8ca0\u62c5\u3092\u8efd\u6e1b\u3059\u3079\u304f\u7121\u6599\u30bf\u30af\u30b7\u30fc\u9001\u8fce\u3067\u652f\u63f4\u3059\u308b\u30af\u30e9\u30a6\u30c9\u30d5\u30a1\u30f3\u30c7\u30a3\u30f3\u30b0\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u300cTaxi Ovation\u300d\u3092\u767a\u8db3\u3044\u305f\u3057\u307e\u3057\u305f\u3002\u672c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u30c6\u30ec\u30d3\u3001\u65b0\u805e\u7b49\u69d8\u3005\u306a\u30e1\u30c7\u30a3\u30a2\u306b\u53d6\u308a\u4e0a\u3052\u3089\u308c\u307e\u3057\u305f\u3002","3":"\u56fd\u5185\u30b9\u30cb\u30fc\u30ab\u30fc\u306e\u30d6\u30e9\u30f3\u30c9\u306e\u5148\u99c6\u3051\u300c\u30aa\u30cb\u30c4\u30ab\u30bf\u30a4\u30ac\u30fc\u300d\u306e\uff17\uff10\u5e74\u3082\u306e\u9577\u3044\u6b74\u53f2\u3092\u795d\u3046\u3079\u304f\u30d6\u30e9\u30f3\u30c9\u529b\u3092\u9ad8\u3081\u308b\u30ec\u30bb\u30d7\u30b7\u30e7\u30f3\u30d1\u30fc\u30c6\u30a3\u3092\u958b\u50ac\u3057\u307e\u3057\u305f\u3002","detail":"\u8a73\u7d30\u3092\u8868\u793a","all":"\u3059\u3079\u3066\u8868\u793a"}}',
				);
			Ce.use(m).init({resources: {en: {translation: Pe}, jp: {translation: Ne}}, lng: localStorage.getItem("language") || "en", fallbackLng: "en", interpolation: {escapeValue: !1}});
			var Le = Ce,
				_e = n(184);
			var Re = function () {
				return (0, _e.jsxs)("div", {
					className: "dragonPage",
					children: [
						(0, _e.jsxs)("div", {
							className: "blockText block-1",
							children: [
								(0, _e.jsx)("h2", {className: "title", children: "Looking Back, Looking Ahead."}),
								(0, _e.jsx)("p", {className: "byEggorm", children: "by Eggworm"}),
								(0, _e.jsx)("div", {className: "divider"}),
								(0, _e.jsxs)("p", {
									className: "asWe ",
									children: [
										"As we leap into the Year of the Dragon, we're not just turning a page; we're starting a whole new chapter.\xa0 This past year, thanks to our extraordinary partners, we marked a series of groundbreaking firsts for Japan that will propel further advancement.\xa0 This year, we look forward to continuing this momentum across Asia, supporting our partners' development and exploring new opportunities.",
										(0, _e.jsx)("br", {}),
										(0, _e.jsx)("br", {}),
										"A bright future awaits as events marketing and experiential realms merge, giving rise to a unique fusion of technology, real-world engagement, and the seamless intertwining of brands, companies, and cultural experiences.",
									],
								}),
								(0, _e.jsx)("p", {
									className: "jpText mt20",
									children:
										"\u8fb0\u5e74\u3092\u8fce\u3048\u3001\u30a8\u30c3\u30b0\u30ef\u30fc\u30e0\u306f\u30a2\u30b8\u30a2\u5e02\u5834\u3067\u306e\u65b0\u3057\u3044\u5c55\u958b\u3092\u59cb\u3081\u307e\u3059\u3002 \u79c1\u305f\u3061\u306e\u30a4\u30d9\u30f3\u30c8\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u3068\u4f53\u9a13\u578b\u5206\u91ce\u306e\u878d\u5408\u306f\u3001\u5358\u306b\u5e02\u5834\u3092\u5909\u9769\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u6280\u8853\u3068\u6587\u5316\u306e\u5883\u754c\u3092\u518d\u5b9a\u7fa9\u3057\u307e\u3059\u3002",
								}),
							],
						}),
						(0, _e.jsx)("div", {className: "dragon2024"}),
						(0, _e.jsxs)("div", {
							className: "blockText block-2",
							children: [
								(0, _e.jsx)("p", {className: "asWe", children: "Turning great ideas into 'Wow, did we just do that?' moments. We love exceeding expectations."}),
								(0, _e.jsx)("p", {className: "jpText", children: "\u7d20\u6674\u3089\u3057\u3044\u30a2\u30a4\u30c7\u30a2\u3092\u9a5a\u304d\u306e\u77ac\u9593\u3078\u3068\u5909\u3048\u308b\u3053\u3068\u3001\u671f\u5f85\u3092\u8d85\u3048\u308b\u3053\u3068\u304c\u79c1\u305f\u3061\u306e\u559c\u3073\u3067\u3059\u3002"}),
							],
						}),
						(0, _e.jsx)("div", {className: "gallaryStack gallary1"}),
						(0, _e.jsxs)("div", {
							className: "blockText block-2",
							children: [
								(0, _e.jsx)("p", {className: "asWe", children: "For us balance is important with our partners and within our own team. The power of that balance lies in the clarity of it.\xa0 Less suits, more superheroes."}),
								(0, _e.jsx)("p", {className: "jpText", children: "\u3053\u306e\u65b0\u305f\u306a\u6642\u4ee3\u306e\u9580\u51fa\u306b\u3001\u79c1\u305f\u3061\u306f\u5171\u306b\u524d\u4f8b\u306e\u306a\u3044\u6210\u679c\u3092\u76ee\u6307\u3057\u307e\u3059\u3002"}),
							],
						}),
						(0, _e.jsx)("div", {className: "gallaryStack gallary2"}),
						(0, _e.jsxs)("div", {
							className: "blockText block-2",
							children: [
								(0, _e.jsx)("p", {className: "asWe", children: "Transitioning from an atypical beginning, my unwavering commitment has been to approach both life and my role as CEO in an uncommon manner."}),
								(0, _e.jsx)("p", {className: "jpText", children: "\u6311\u6226\u3092\u6210\u9577\u306e\u6a5f\u4f1a\u306b\u5909\u3048\u308b\u3053\u3068\u3067\u3001\u5171\u306b\u7d20\u6674\u3089\u3057\u3044\u672a\u6765\u3092\u7bc9\u304d\u307e\u3057\u3087\u3046\uff01"}),
								(0, _e.jsx)("p", {children: "- Masaki Kawamura, CEO"}),
							],
						}),
						(0, _e.jsx)("div", {className: "gallaryStack gallary3"}),
						(0, _e.jsxs)("div", {className: "blockText block-2", children: [(0, _e.jsx)("p", {className: "asWe", children: "We are problem solvers.\xa0 We are storytellers."}), (0, _e.jsx)("p", {className: "jpText", children: "\u5171\u306b\u6210\u9577\u3057\u3001\u65b0\u3057\u3044\u7269\u8a9e\u3092\u7d21\u304e\u51fa\u3057\u307e\u3057\u3087\u3046\u3002"})]}),
						(0, _e.jsx)("div", {className: "gallaryStack gallary4"}),
						(0, _e.jsxs)("div", {className: "dragonPageFooter", children: [(0, _e.jsx)("div", {className: "eggwormlogo"}), (0, _e.jsxs)("div", {className: "footerRight", children: [(0, _e.jsx)("p", {className: "footerTitle", children: " We are from TOKYO."}), (0, _e.jsx)("p", {className: "footerSub", children: "\u6771\u4eac\u304b\u3089\u4e16\u754c\u3078\u3002"})]})]}),
					],
				});
			};
			t.createRoot(document.getElementById("root")).render((0, _e.jsx)(y, {i18n: Le, children: (0, _e.jsx)(Re, {})}), document.getElementById("root")), r();
		})();
})();
//# sourceMappingURL=main.939cd96f.js.map
