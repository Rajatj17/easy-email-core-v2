var Zt = Object.defineProperty, eu = Object.defineProperties;
var tu = Object.getOwnPropertyDescriptors;
var ct = Object.getOwnPropertySymbols;
var uu = Object.prototype.hasOwnProperty, ru = Object.prototype.propertyIsEnumerable;
var Fe = (e, r, i) => r in e ? Zt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[r] = i, M = (e, r) => {
  for (var i in r || (r = {}))
    uu.call(r, i) && Fe(e, i, r[i]);
  if (ct)
    for (var i of ct(r))
      ru.call(r, i) && Fe(e, i, r[i]);
  return e;
}, $ = (e, r) => eu(e, tu(r));
var ee = (e, r, i) => (Fe(e, typeof r != "symbol" ? r + "" : r, i), i);
import x, { useContext as iu, useMemo as au } from "react";
import { omit as j, merge as z, isObject as su, isString as tt, get as ae, mergeWith as nu, isArray as ou, set as lu, unescape as cu, isNumber as pu } from "lodash";
import { renderToStaticMarkup as Nt } from "react-dom/server";
import { v4 as _u } from "uuid";
var _ = /* @__PURE__ */ ((e) => (e.PAGE = "page", e.SECTION = "section", e.COLUMN = "column", e.GROUP = "group", e.TEXT = "text", e.IMAGE = "image", e.DIVIDER = "divider", e.SPACER = "spacer", e.BUTTON = "button", e.WRAPPER = "wrapper", e.RAW = "raw", e.ACCORDION = "accordion", e.ACCORDION_ELEMENT = "accordion-element", e.ACCORDION_TITLE = "accordion-title", e.ACCORDION_TEXT = "accordion-text", e.HERO = "hero", e.CAROUSEL = "carousel", e.NAVBAR = "navbar", e.SOCIAL = "social", e.TABLE = "table", e.TEMPLATE = "template", e))(_ || {}), T = /* @__PURE__ */ ((e) => (e.TEXT = "advanced_text", e.IMAGE = "advanced_image", e.DIVIDER = "advanced_divider", e.SPACER = "advanced_spacer", e.BUTTON = "advanced_button", e.NAVBAR = "advanced_navbar", e.SOCIAL = "advanced_social", e.ACCORDION = "advanced_accordion", e.CAROUSEL = "advanced_carousel", e.WRAPPER = "advanced_wrapper", e.SECTION = "advanced_section", e.COLUMN = "advanced_column", e.GROUP = "advanced_group", e.HERO = "advanced_hero", e))(T || {});
const Ir = "easy-email-merge-tag-container", hu = "email-block";
function fu(e) {
  return e;
}
class Ce {
  static add(r) {
    Object.keys(r).forEach((i) => {
      this.map[i] && (this.overrideMap[i] = !0), this.map[i] = r[i];
    });
  }
  static get(r) {
    return this.map[r];
  }
  static getOverrideMap() {
    return this.overrideMap;
  }
}
ee(Ce, "map", {}), ee(Ce, "overrideMap", {});
const du = {
  IMAGE_01: "https://easy-email-m-ryan.vercel.app/images/ffddc3db-3aae-4d73-ac9c-e1263641f7b4-03c89c34-49a4-4d45-b289-4d2261158cbe.png",
  IMAGE_02: "https://easy-email-m-ryan.vercel.app/images/acbae5eb-efa4-4eb6-866c-f421e740b713-ad3c92b1-9cdb-4a7b-aad3-75ad809db8a3.png",
  IMAGE_03: "https://easy-email-m-ryan.vercel.app/images/98520d6c-5cef-449e-bcbf-6316ccec2088-e8780361-0deb-4896-895e-e690c886cdf0.png",
  IMAGE_04: "https://easy-email-m-ryan.vercel.app/images/b064f705-34ba-4400-975e-9dd0cec21c30-cc9aa158-56bd-4bf1-b532-72390d25c864.png",
  IMAGE_59: "https://easy-email-m-ryan.vercel.app/images/8e0e07e2-3f84-4426-84c1-2add355c558b-image.png",
  IMAGE_09: "https://easy-email-m-ryan.vercel.app/images/be34fb18-32ad-441c-84d8-3c0e9ba9f742-ad2ea5ff-5d0b-446b-bd7d-8e2ab5afdd16.png",
  IMAGE_10: "https://easy-email-m-ryan.vercel.app/images/6a1e6292-469e-452a-bbae-44e4b5ff7463-05e543b6-c951-44ce-ae27-ca1282c77f52.png",
  IMAGE_15: "https://easy-email-m-ryan.vercel.app/images/f69f48af-5b15-40aa-91c4-81d601d1357b-083dc99d-02a6-40d9-ae28-0662bd078b5d.png",
  IMAGE_16: "https://easy-email-m-ryan.vercel.app/images/9cce6b16-5a98-4ddb-b1a1-6cec2cf56891-c3acb856-8ab8-4cfb-93f9-2a0747678b8b.png",
  IMAGE_17: "https://easy-email-m-ryan.vercel.app/images/d9795c1d-fa32-4adb-ab25-30b7cfe87936-df21314f-6f05-4550-80b3-9ab1107e8fbe.png",
  IMAGE_31: "https://easy-email-m-ryan.vercel.app/images/dd1584fb-cb60-42c9-80c7-5545e16130ca-226ba72b-ce9e-4948-ad0d-347381fb96c5.png"
};
Ce.add(du);
function Q(e) {
  return Ce.get(e);
}
function gu(e) {
  const { data: { type: r }, mode: i } = e;
  if (i === "production")
    return null;
  let t = null;
  return r === _.PAGE ? t = "Drop a Wrapper block here" : r === _.WRAPPER || r === T.WRAPPER ? t = "Drop a Section block here" : r === _.SECTION || r === _.GROUP || r === T.SECTION || r === T.GROUP ? t = "Drop a Column block here" : (r === _.COLUMN || r === T.COLUMN) && (t = "Drop a content block here"), t ? `
   <mj-text color="#666">
    <div style="text-align: center">
      <div>
        <svg width="300" fill="currentColor" style="max-width: 100%;" viewBox="-20 -5 80 60">
          <g>
            <path d="M23.713 23.475h5.907c.21 0 .38.17.38.38v.073c0 .21-.17.38-.38.38h-5.907a.38.38 0 0 1-.38-.38v-.073c0-.21.17-.38.38-.38zm.037-2.917h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm0-2.5h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm-.037-3.333h5.907c.21 0 .38.17.38.38v.073c0 .21-.17.38-.38.38h-5.907a.38.38 0 0 1-.38-.38v-.073c0-.21.17-.38.38-.38zm.037-2.917h9.167a.417.417 0 0 1 0 .834H23.75a.417.417 0 0 1 0-.834zm0-2.916h9.167a.417.417 0 0 1 0 .833H23.75a.417.417 0 0 1 0-.833zm-3.592 8.75a.675.675 0 0 1 .675.691v6.142c0 .374-.3.679-.675.683h-6.15a.683.683 0 0 1-.675-.683v-6.142a.675.675 0 0 1 .675-.691h6.15zM20 24.308v-5.833h-5.833v5.833H20zm.158-15.833a.675.675 0 0 1 .675.692v6.141c0 .374-.3.68-.675.684h-6.15a.683.683 0 0 1-.675-.684V9.167a.675.675 0 0 1 .675-.692h6.15zM20 15.142V9.308h-5.833v5.834H20zM37.167 0A2.809 2.809 0 0 1 40 2.833V30.5a2.809 2.809 0 0 1-2.833 2.833h-3.834v3H32.5v-3h-23A2.808 2.808 0 0 1 6.667 30.5v-23H3.583v-.833h3.084V2.833A2.808 2.808 0 0 1 9.5 0h27.667zm2 30.5V2.833a2.025 2.025 0 0 0-2-2H9.5a2.025 2.025 0 0 0-2 2V30.5a2.025 2.025 0 0 0 2 2h27.667a2.025 2.025 0 0 0 2-2zM0 27.75h.833V31H0v-3.25zm0-13h.833V18H0v-3.25zm0 22.833V34.25h.833v3.25L0 37.583zM0 21.25h.833v3.25H0v-3.25zM2.583 40l.084-.833h3.166V40h-3.25zm27.917-.833c.376.006.748-.08 1.083-.25l.417.666a2.875 2.875 0 0 1-1.5.417h-1.833v-.833H30.5zm-8.333 0h3.25V40h-3.25v-.833zm-6.584 0h3.25V40h-3.25v-.833zm-6.5 0h3.25V40h-3.25v-.833zM0 9.5c.01-.5.154-.99.417-1.417l.666.417c-.17.305-.256.65-.25 1v2H0v-2z"></path>
          </g>
          <text x="-16" y="50" font-size="5px">${t}</text>
        </svg>
      </div>
    </div>
   </mj-text>
  ` : null;
}
var Re = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Lt = { exports: {} }, ne = {}, be = { exports: {} }, Oe = {}, qe = {}, pt;
function ut() {
  if (pt)
    return qe;
  pt = 1;
  function e(t) {
    this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  e.prototype.clone_empty = function() {
    var t = new e(this.__parent);
    return t.set_indent(this.__indent_count, this.__alignment_count), t;
  }, e.prototype.item = function(t) {
    return t < 0 ? this.__items[this.__items.length + t] : this.__items[t];
  }, e.prototype.has_match = function(t) {
    for (var a = this.__items.length - 1; a >= 0; a--)
      if (this.__items[a].match(t))
        return !0;
    return !1;
  }, e.prototype.set_indent = function(t, a) {
    this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = a || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, e.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, e.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, e.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var t = this.__parent.current_line;
      return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, t.__items[0] === " " && (t.__items.splice(0, 1), t.__character_count -= 1), !0;
    }
    return !1;
  }, e.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, e.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, e.prototype.push = function(t) {
    this.__items.push(t);
    var a = t.lastIndexOf(`
`);
    a !== -1 ? this.__character_count = t.length - a : this.__character_count += t.length;
  }, e.prototype.pop = function() {
    var t = null;
    return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t;
  }, e.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, e.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, e.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, e.prototype.toString = function() {
    var t = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t;
  };
  function r(t, a) {
    this.__cache = [""], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), a = a || "", t.indent_level > 0 && (a = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = a, this.__base_string_length = a.length;
  }
  r.prototype.get_indent_size = function(t, a) {
    var n = this.__base_string_length;
    return a = a || 0, t < 0 && (n = 0), n += t * this.__indent_size, n += a, n;
  }, r.prototype.get_indent_string = function(t, a) {
    var n = this.__base_string;
    return a = a || 0, t < 0 && (t = 0, n = ""), a += t * this.__indent_size, this.__ensure_cache(a), n += this.__cache[a], n;
  }, r.prototype.__ensure_cache = function(t) {
    for (; t >= this.__cache.length; )
      this.__add_column();
  }, r.prototype.__add_column = function() {
    var t = this.__cache.length, a = 0, n = "";
    this.__indent_size && t >= this.__indent_size && (a = Math.floor(t / this.__indent_size), t -= a * this.__indent_size, n = new Array(a + 1).join(this.__indent_string)), t && (n += new Array(t + 1).join(" ")), this.__cache.push(n);
  };
  function i(t, a) {
    this.__indent_cache = new r(t, a), this.raw = !1, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new e(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  return i.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, i.prototype.get_line_number = function() {
    return this.__lines.length;
  }, i.prototype.get_indent_string = function(t, a) {
    return this.__indent_cache.get_indent_string(t, a);
  }, i.prototype.get_indent_size = function(t, a) {
    return this.__indent_cache.get_indent_size(t, a);
  }, i.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, i.prototype.add_new_line = function(t) {
    return this.is_empty() || !t && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
  }, i.prototype.get_code = function(t) {
    this.trim(!0);
    var a = this.current_line.pop();
    a && (a[a.length - 1] === `
` && (a = a.replace(/\n+$/g, "")), this.current_line.push(a)), this._end_with_newline && this.__add_outputline();
    var n = this.__lines.join(`
`);
    return t !== `
` && (n = n.replace(/[\n]/g, t)), n;
  }, i.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, i.prototype.set_indent = function(t, a) {
    return t = t || 0, a = a || 0, this.next_line.set_indent(t, a), this.__lines.length > 1 ? (this.current_line.set_indent(t, a), !0) : (this.current_line.set_indent(), !1);
  }, i.prototype.add_raw_token = function(t) {
    for (var a = 0; a < t.newlines; a++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, i.prototype.add_token = function(t) {
    this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, i.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, i.prototype.remove_indent = function(t) {
    for (var a = this.__lines.length; t < a; )
      this.__lines[t]._remove_indent(), t++;
    this.current_line._remove_wrap_indent();
  }, i.prototype.trim = function(t) {
    for (t = t === void 0 ? !1 : t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, i.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, i.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, i.prototype.ensure_empty_line_above = function(t, a) {
    for (var n = this.__lines.length - 2; n >= 0; ) {
      var p = this.__lines[n];
      if (p.is_empty())
        break;
      if (p.item(0).indexOf(t) !== 0 && p.item(-1) !== a) {
        this.__lines.splice(n + 1, 0, new e(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      n--;
    }
  }, qe.Output = i, qe;
}
var Se = {}, _t;
function Pt() {
  if (_t)
    return Se;
  _t = 1;
  function e(r, i, t, a) {
    this.type = r, this.text = i, this.comments_before = null, this.newlines = t || 0, this.whitespace_before = a || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return Se.Token = e, Se;
}
var Ne = {}, ht;
function It() {
  return ht || (ht = 1, function(e) {
    var r = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", i = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", t = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", a = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", n = "(?:\\\\u[0-9a-fA-F]{4}|[" + r + t + "])", p = "(?:\\\\u[0-9a-fA-F]{4}|[" + i + t + a + "])*";
    e.identifier = new RegExp(n + p, "g"), e.identifierStart = new RegExp(n), e.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + i + t + a + "])+"), e.newline = /[\n\r\u2028\u2029]/, e.lineBreak = new RegExp(`\r
|` + e.newline.source), e.allLineBreaks = new RegExp(e.lineBreak.source, "g");
  }(Ne)), Ne;
}
var Le = {}, oe = {}, ft;
function rt() {
  if (ft)
    return oe;
  ft = 1;
  function e(t, a) {
    this.raw_options = r(t, a), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  e.prototype._get_array = function(t, a) {
    var n = this.raw_options[t], p = a || [];
    return typeof n == "object" ? n !== null && typeof n.concat == "function" && (p = n.concat()) : typeof n == "string" && (p = n.split(/[^a-zA-Z0-9_\/\-]+/)), p;
  }, e.prototype._get_boolean = function(t, a) {
    var n = this.raw_options[t], p = n === void 0 ? !!a : !!n;
    return p;
  }, e.prototype._get_characters = function(t, a) {
    var n = this.raw_options[t], p = a || "";
    return typeof n == "string" && (p = n.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), p;
  }, e.prototype._get_number = function(t, a) {
    var n = this.raw_options[t];
    a = parseInt(a, 10), isNaN(a) && (a = 0);
    var p = parseInt(n, 10);
    return isNaN(p) && (p = a), p;
  }, e.prototype._get_selection = function(t, a, n) {
    var p = this._get_selection_list(t, a, n);
    if (p.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can only be one of the following values:
` + a + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return p[0];
  }, e.prototype._get_selection_list = function(t, a, n) {
    if (!a || a.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (n = n || [a[0]], !this._is_valid_selection(n, a))
      throw new Error("Invalid Default Value!");
    var p = this._get_array(t, n);
    if (!this._is_valid_selection(p, a))
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can contain only the following values:
` + a + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return p;
  }, e.prototype._is_valid_selection = function(t, a) {
    return t.length && a.length && !t.some(function(n) {
      return a.indexOf(n) === -1;
    });
  };
  function r(t, a) {
    var n = {};
    t = i(t);
    var p;
    for (p in t)
      p !== a && (n[p] = t[p]);
    if (a && t[a])
      for (p in t[a])
        n[p] = t[a][p];
    return n;
  }
  function i(t) {
    var a = {}, n;
    for (n in t) {
      var p = n.replace(/-/g, "_");
      a[p] = t[n];
    }
    return a;
  }
  return oe.Options = e, oe.normalizeOpts = i, oe.mergeOpts = r, oe;
}
var dt;
function Ut() {
  if (dt)
    return Le;
  dt = 1;
  var e = rt().Options, r = ["before-newline", "after-newline", "preserve-newline"];
  function i(t) {
    e.call(this, t, "js");
    var a = this.raw_options.brace_style || null;
    a === "expand-strict" ? this.raw_options.brace_style = "expand" : a === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var n = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var p = 0; p < n.length; p++)
      n[p] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = n[p];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", r), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  return i.prototype = new e(), Le.Options = i, Le;
}
var re = {}, Pe = {}, gt;
function it() {
  if (gt)
    return Pe;
  gt = 1;
  var e = RegExp.prototype.hasOwnProperty("sticky");
  function r(i) {
    this.__input = i || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return r.prototype.restart = function() {
    this.__position = 0;
  }, r.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, r.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, r.prototype.next = function() {
    var i = null;
    return this.hasNext() && (i = this.__input.charAt(this.__position), this.__position += 1), i;
  }, r.prototype.peek = function(i) {
    var t = null;
    return i = i || 0, i += this.__position, i >= 0 && i < this.__input_length && (t = this.__input.charAt(i)), t;
  }, r.prototype.__match = function(i, t) {
    i.lastIndex = t;
    var a = i.exec(this.__input);
    return a && !(e && i.sticky) && a.index !== t && (a = null), a;
  }, r.prototype.test = function(i, t) {
    return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length ? !!this.__match(i, t) : !1;
  }, r.prototype.testChar = function(i, t) {
    var a = this.peek(t);
    return i.lastIndex = 0, a !== null && i.test(a);
  }, r.prototype.match = function(i) {
    var t = this.__match(i, this.__position);
    return t ? this.__position += t[0].length : t = null, t;
  }, r.prototype.read = function(i, t, a) {
    var n = "", p;
    return i && (p = this.match(i), p && (n += p[0])), t && (p || !i) && (n += this.readUntil(t, a)), n;
  }, r.prototype.readUntil = function(i, t) {
    var a = "", n = this.__position;
    i.lastIndex = this.__position;
    var p = i.exec(this.__input);
    return p ? (n = p.index, t && (n += p[0].length)) : n = this.__input_length, a = this.__input.substring(this.__position, n), this.__position = n, a;
  }, r.prototype.readUntilAfter = function(i) {
    return this.readUntil(i, !0);
  }, r.prototype.get_regexp = function(i, t) {
    var a = null, n = "g";
    return t && e && (n = "y"), typeof i == "string" && i !== "" ? a = new RegExp(i, n) : i && (a = new RegExp(i.source, n)), a;
  }, r.prototype.get_literal_regexp = function(i) {
    return RegExp(i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, r.prototype.peekUntilAfter = function(i) {
    var t = this.__position, a = this.readUntilAfter(i);
    return this.__position = t, a;
  }, r.prototype.lookBack = function(i) {
    var t = this.__position - 1;
    return t >= i.length && this.__input.substring(t - i.length, t).toLowerCase() === i;
  }, Pe.InputScanner = r, Pe;
}
var Ae = {}, Ie = {}, mt;
function mu() {
  if (mt)
    return Ie;
  mt = 1;
  function e(r) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = r;
  }
  return e.prototype.restart = function() {
    this.__position = 0;
  }, e.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, e.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, e.prototype.next = function() {
    var r = null;
    return this.hasNext() && (r = this.__tokens[this.__position], this.__position += 1), r;
  }, e.prototype.peek = function(r) {
    var i = null;
    return r = r || 0, r += this.__position, r >= 0 && r < this.__tokens_length && (i = this.__tokens[r]), i;
  }, e.prototype.add = function(r) {
    this.__parent_token && (r.parent = this.__parent_token), this.__tokens.push(r), this.__tokens_length += 1;
  }, Ie.TokenStream = e, Ie;
}
var Ue = {}, je = {}, Dt;
function Te() {
  if (Dt)
    return je;
  Dt = 1;
  function e(r, i) {
    this._input = r, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, i && (this._starting_pattern = this._input.get_regexp(i._starting_pattern, !0), this._match_pattern = this._input.get_regexp(i._match_pattern, !0), this._until_pattern = this._input.get_regexp(i._until_pattern), this._until_after = i._until_after);
  }
  return e.prototype.read = function() {
    var r = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || r) && (r += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), r;
  }, e.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, e.prototype.until_after = function(r) {
    var i = this._create();
    return i._until_after = !0, i._until_pattern = this._input.get_regexp(r), i._update(), i;
  }, e.prototype.until = function(r) {
    var i = this._create();
    return i._until_after = !1, i._until_pattern = this._input.get_regexp(r), i._update(), i;
  }, e.prototype.starting_with = function(r) {
    var i = this._create();
    return i._starting_pattern = this._input.get_regexp(r, !0), i._update(), i;
  }, e.prototype.matching = function(r) {
    var i = this._create();
    return i._match_pattern = this._input.get_regexp(r, !0), i._update(), i;
  }, e.prototype._create = function() {
    return new e(this._input, this);
  }, e.prototype._update = function() {
  }, je.Pattern = e, je;
}
var bt;
function Du() {
  if (bt)
    return Ue;
  bt = 1;
  var e = Te().Pattern;
  function r(i, t) {
    e.call(this, i, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return r.prototype = new e(), r.prototype.__set_whitespace_patterns = function(i, t) {
    i += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + i + t + "]+",
      !0
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + t + "]"
    );
  }, r.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var i = this._input.read(this._match_pattern);
    if (i === " ")
      this.whitespace_before_token = " ";
    else if (i) {
      var t = this.__split(this._newline_regexp, i);
      this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count];
    }
    return i;
  }, r.prototype.matching = function(i, t) {
    var a = this._create();
    return a.__set_whitespace_patterns(i, t), a._update(), a;
  }, r.prototype._create = function() {
    return new r(this._input, this);
  }, r.prototype.__split = function(i, t) {
    i.lastIndex = 0;
    for (var a = 0, n = [], p = i.exec(t); p; )
      n.push(t.substring(a, p.index)), a = p.index + p[0].length, p = i.exec(t);
    return a < t.length ? n.push(t.substring(a, t.length)) : n.push(""), n;
  }, Ue.WhitespacePattern = r, Ue;
}
var At;
function we() {
  if (At)
    return Ae;
  At = 1;
  var e = it().InputScanner, r = Pt().Token, i = mu().TokenStream, t = Du().WhitespacePattern, a = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, n = function(p, o) {
    this._input = new e(p), this._options = o || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new t(this._input);
  };
  return n.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new i(), this._reset();
    for (var p, o = new r(a.START, ""), l = null, v = [], b = new i(); o.type !== a.EOF; ) {
      for (p = this._get_next_token(o, l); this._is_comment(p); )
        b.add(p), p = this._get_next_token(o, l);
      b.isEmpty() || (p.comments_before = b, b = new i()), p.parent = l, this._is_opening(p) ? (v.push(l), l = p) : l && this._is_closing(p, l) && (p.opened = l, l.closed = p, l = v.pop(), p.parent = l), p.previous = o, o.next = p, this.__tokens.add(p), o = p;
    }
    return this.__tokens;
  }, n.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, n.prototype._reset = function() {
  }, n.prototype._get_next_token = function(p, o) {
    this._readWhitespace();
    var l = this._input.read(/.+/g);
    return l ? this._create_token(a.RAW, l) : this._create_token(a.EOF, "");
  }, n.prototype._is_comment = function(p) {
    return !1;
  }, n.prototype._is_opening = function(p) {
    return !1;
  }, n.prototype._is_closing = function(p, o) {
    return !1;
  }, n.prototype._create_token = function(p, o) {
    var l = new r(
      p,
      o,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return l;
  }, n.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, Ae.Tokenizer = n, Ae.TOKEN = a, Ae;
}
var Ve = {}, vt;
function at() {
  if (vt)
    return Ve;
  vt = 1;
  function e(r, i) {
    r = typeof r == "string" ? r : r.source, i = typeof i == "string" ? i : i.source, this.__directives_block_pattern = new RegExp(r + / beautify( \w+[:]\w+)+ /.source + i, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(r + /\sbeautify\signore:end\s/.source + i, "g");
  }
  return e.prototype.get_directives = function(r) {
    if (!r.match(this.__directives_block_pattern))
      return null;
    var i = {};
    this.__directive_pattern.lastIndex = 0;
    for (var t = this.__directive_pattern.exec(r); t; )
      i[t[1]] = t[2], t = this.__directive_pattern.exec(r);
    return i;
  }, e.prototype.readIgnored = function(r) {
    return r.readUntilAfter(this.__directives_end_ignore_pattern);
  }, Ve.Directives = e, Ve;
}
var Me = {}, Et;
function jt() {
  if (Et)
    return Me;
  Et = 1;
  var e = Te().Pattern, r = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1
  };
  function i(t, a) {
    e.call(this, t, a), this.__template_pattern = null, this._disabled = Object.assign({}, r), this._excluded = Object.assign({}, r), a && (this.__template_pattern = this._input.get_regexp(a.__template_pattern), this._excluded = Object.assign(this._excluded, a._excluded), this._disabled = Object.assign(this._disabled, a._disabled));
    var n = new e(t);
    this.__patterns = {
      handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
      handlebars: n.starting_with(/{{/).until_after(/}}/),
      php: n.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      // django coflicts with handlebars a bit.
      django: n.starting_with(/{%/).until_after(/%}/),
      django_value: n.starting_with(/{{/).until_after(/}}/),
      django_comment: n.starting_with(/{#/).until_after(/#}/),
      smarty: n.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: n.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: n.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return i.prototype = new e(), i.prototype._create = function() {
    return new i(this._input, this);
  }, i.prototype._update = function() {
    this.__set_templated_pattern();
  }, i.prototype.disable = function(t) {
    var a = this._create();
    return a._disabled[t] = !0, a._update(), a;
  }, i.prototype.read_options = function(t) {
    var a = this._create();
    for (var n in r)
      a._disabled[n] = t.templating.indexOf(n) === -1;
    return a._update(), a;
  }, i.prototype.exclude = function(t) {
    var a = this._create();
    return a._excluded[t] = !0, a._update(), a;
  }, i.prototype.read = function() {
    var t = "";
    this._match_pattern ? t = this._input.read(this._starting_pattern) : t = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var a = this._read_template(); a; )
      this._match_pattern ? a += this._input.read(this._match_pattern) : a += this._input.readUntil(this.__template_pattern), t += a, a = this._read_template();
    return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t;
  }, i.prototype.__set_templated_pattern = function() {
    var t = [];
    this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || t.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")");
  }, i.prototype._read_template = function() {
    var t = "", a = this._input.peek();
    if (a === "<") {
      var n = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && n === "?" && (t = t || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && n === "%" && (t = t || this.__patterns.erb.read());
    } else
      a === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (t = t || this.__patterns.handlebars_comment.read(), t = t || this.__patterns.handlebars_unescaped.read(), t = t || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = t || this.__patterns.django_comment.read(), t = t || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (t = t || this.__patterns.smarty_comment.read(), t = t || this.__patterns.smarty_literal.read(), t = t || this.__patterns.smarty.read()));
    return t;
  }, Me.TemplatablePattern = i, Me;
}
var yt;
function ve() {
  if (yt)
    return re;
  yt = 1;
  var e = it().InputScanner, r = we().Tokenizer, i = we().TOKEN, t = at().Directives, a = It(), n = Te().Pattern, p = jt().TemplatablePattern;
  function o(d, A) {
    return A.indexOf(d) !== -1;
  }
  var l = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: i.START,
    RAW: i.RAW,
    EOF: i.EOF
  }, v = new t(/\/\*/, /\*\//), b = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, m = /[0-9]/, E = /[^\d\.]/, R = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), S = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  S = S.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), S = "\\?\\.(?!\\d) " + S, S = S.replace(/ /g, "|");
  var L = new RegExp(S), c = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), s = c.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), h = new RegExp("^(?:" + s.join("|") + ")$"), k, y = function(d, A) {
    r.call(this, d, A), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var f = new n(this._input), C = new p(this._input).read_options(this._options);
    this.__patterns = {
      template: C,
      identifier: C.starting_with(a.identifier).matching(a.identifierMatch),
      number: f.matching(b),
      punct: f.matching(L),
      // comment ends just before nearest linefeed or end of file
      comment: f.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      //  /* ... */ comment ends with nearest */ or end of file
      block_comment: f.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: f.matching(/<!--/),
      html_comment_end: f.matching(/-->/),
      include: f.starting_with(/#include/).until_after(a.lineBreak),
      shebang: f.starting_with(/#!/).until_after(a.lineBreak),
      xml: f.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: C.until(/['\\\n\r\u2028\u2029]/),
      double_quote: C.until(/["\\\n\r\u2028\u2029]/),
      template_text: C.until(/[`\\$]/),
      template_expression: C.until(/[`}\\]/)
    };
  };
  y.prototype = new r(), y.prototype._is_comment = function(d) {
    return d.type === l.COMMENT || d.type === l.BLOCK_COMMENT || d.type === l.UNKNOWN;
  }, y.prototype._is_opening = function(d) {
    return d.type === l.START_BLOCK || d.type === l.START_EXPR;
  }, y.prototype._is_closing = function(d, A) {
    return (d.type === l.END_BLOCK || d.type === l.END_EXPR) && A && (d.text === "]" && A.text === "[" || d.text === ")" && A.text === "(" || d.text === "}" && A.text === "{");
  }, y.prototype._reset = function() {
    k = !1;
  }, y.prototype._get_next_token = function(d, A) {
    var f = null;
    this._readWhitespace();
    var C = this._input.peek();
    return C === null ? this._create_token(l.EOF, "") : (f = f || this._read_non_javascript(C), f = f || this._read_string(C), f = f || this._read_word(d), f = f || this._read_singles(C), f = f || this._read_comment(C), f = f || this._read_regexp(C, d), f = f || this._read_xml(C, d), f = f || this._read_punctuation(), f = f || this._create_token(l.UNKNOWN, this._input.next()), f);
  }, y.prototype._read_word = function(d) {
    var A;
    if (A = this.__patterns.identifier.read(), A !== "")
      return A = A.replace(a.allLineBreaks, `
`), !(d.type === l.DOT || d.type === l.RESERVED && (d.text === "set" || d.text === "get")) && h.test(A) ? (A === "in" || A === "of") && (d.type === l.WORD || d.type === l.STRING) ? this._create_token(l.OPERATOR, A) : this._create_token(l.RESERVED, A) : this._create_token(l.WORD, A);
    if (A = this.__patterns.number.read(), A !== "")
      return this._create_token(l.WORD, A);
  }, y.prototype._read_singles = function(d) {
    var A = null;
    return d === "(" || d === "[" ? A = this._create_token(l.START_EXPR, d) : d === ")" || d === "]" ? A = this._create_token(l.END_EXPR, d) : d === "{" ? A = this._create_token(l.START_BLOCK, d) : d === "}" ? A = this._create_token(l.END_BLOCK, d) : d === ";" ? A = this._create_token(l.SEMICOLON, d) : d === "." && E.test(this._input.peek(1)) ? A = this._create_token(l.DOT, d) : d === "," && (A = this._create_token(l.COMMA, d)), A && this._input.next(), A;
  }, y.prototype._read_punctuation = function() {
    var d = this.__patterns.punct.read();
    if (d !== "")
      return d === "=" ? this._create_token(l.EQUALS, d) : d === "?." ? this._create_token(l.DOT, d) : this._create_token(l.OPERATOR, d);
  }, y.prototype._read_non_javascript = function(d) {
    var A = "";
    if (d === "#") {
      if (this._is_first_token() && (A = this.__patterns.shebang.read(), A))
        return this._create_token(l.UNKNOWN, A.trim() + `
`);
      if (A = this.__patterns.include.read(), A)
        return this._create_token(l.UNKNOWN, A.trim() + `
`);
      d = this._input.next();
      var f = "#";
      if (this._input.hasNext() && this._input.testChar(m)) {
        do
          d = this._input.next(), f += d;
        while (this._input.hasNext() && d !== "#" && d !== "=");
        return d === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (f += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (f += "{}", this._input.next(), this._input.next())), this._create_token(l.WORD, f);
      }
      this._input.back();
    } else if (d === "<" && this._is_first_token()) {
      if (A = this.__patterns.html_comment_start.read(), A) {
        for (; this._input.hasNext() && !this._input.testChar(a.newline); )
          A += this._input.next();
        return k = !0, this._create_token(l.COMMENT, A);
      }
    } else if (k && d === "-" && (A = this.__patterns.html_comment_end.read(), A))
      return k = !1, this._create_token(l.COMMENT, A);
    return null;
  }, y.prototype._read_comment = function(d) {
    var A = null;
    if (d === "/") {
      var f = "";
      if (this._input.peek(1) === "*") {
        f = this.__patterns.block_comment.read();
        var C = v.get_directives(f);
        C && C.ignore === "start" && (f += v.readIgnored(this._input)), f = f.replace(a.allLineBreaks, `
`), A = this._create_token(l.BLOCK_COMMENT, f), A.directives = C;
      } else
        this._input.peek(1) === "/" && (f = this.__patterns.comment.read(), A = this._create_token(l.COMMENT, f));
    }
    return A;
  }, y.prototype._read_string = function(d) {
    if (d === "`" || d === "'" || d === '"') {
      var A = this._input.next();
      return this.has_char_escapes = !1, d === "`" ? A += this._read_string_recursive("`", !0, "${") : A += this._read_string_recursive(d), this.has_char_escapes && this._options.unescape_strings && (A = O(A)), this._input.peek() === d && (A += this._input.next()), A = A.replace(a.allLineBreaks, `
`), this._create_token(l.STRING, A);
    }
    return null;
  }, y.prototype._allow_regexp_or_xml = function(d) {
    return d.type === l.RESERVED && o(d.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || d.type === l.END_EXPR && d.text === ")" && d.opened.previous.type === l.RESERVED && o(d.opened.previous.text, ["if", "while", "for"]) || o(d.type, [
      l.COMMENT,
      l.START_EXPR,
      l.START_BLOCK,
      l.START,
      l.END_BLOCK,
      l.OPERATOR,
      l.EQUALS,
      l.EOF,
      l.SEMICOLON,
      l.COMMA
    ]);
  }, y.prototype._read_regexp = function(d, A) {
    if (d === "/" && this._allow_regexp_or_xml(A)) {
      for (var f = this._input.next(), C = !1, u = !1; this._input.hasNext() && (C || u || this._input.peek() !== d) && !this._input.testChar(a.newline); )
        f += this._input.peek(), C ? C = !1 : (C = this._input.peek() === "\\", this._input.peek() === "[" ? u = !0 : this._input.peek() === "]" && (u = !1)), this._input.next();
      return this._input.peek() === d && (f += this._input.next(), f += this._input.read(a.identifier)), this._create_token(l.STRING, f);
    }
    return null;
  }, y.prototype._read_xml = function(d, A) {
    if (this._options.e4x && d === "<" && this._allow_regexp_or_xml(A)) {
      var f = "", C = this.__patterns.xml.read_match();
      if (C) {
        for (var u = C[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), g = u.indexOf("{") === 0, D = 0; C; ) {
          var w = !!C[1], F = C[2], N = !!C[C.length - 1] || F.slice(0, 8) === "![CDATA[";
          if (!N && (F === u || g && F.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (w ? --D : ++D), f += C[0], D <= 0)
            break;
          C = this.__patterns.xml.read_match();
        }
        return C || (f += this._input.match(/[\s\S]*/g)[0]), f = f.replace(a.allLineBreaks, `
`), this._create_token(l.STRING, f);
      }
    }
    return null;
  };
  function O(d) {
    for (var A = "", f = 0, C = new e(d), u = null; C.hasNext(); )
      if (u = C.match(/([\s]|[^\\]|\\\\)+/g), u && (A += u[0]), C.peek() === "\\") {
        if (C.next(), C.peek() === "x")
          u = C.match(/x([0-9A-Fa-f]{2})/g);
        else if (C.peek() === "u")
          u = C.match(/u([0-9A-Fa-f]{4})/g);
        else {
          A += "\\", C.hasNext() && (A += C.next());
          continue;
        }
        if (!u || (f = parseInt(u[1], 16), f > 126 && f <= 255 && u[0].indexOf("x") === 0))
          return d;
        if (f >= 0 && f < 32) {
          A += "\\" + u[0];
          continue;
        } else
          f === 34 || f === 39 || f === 92 ? A += "\\" + String.fromCharCode(f) : A += String.fromCharCode(f);
      }
    return A;
  }
  return y.prototype._read_string_recursive = function(d, A, f) {
    var C, u;
    d === "'" ? u = this.__patterns.single_quote : d === '"' ? u = this.__patterns.double_quote : d === "`" ? u = this.__patterns.template_text : d === "}" && (u = this.__patterns.template_expression);
    for (var g = u.read(), D = ""; this._input.hasNext(); ) {
      if (D = this._input.next(), D === d || !A && a.newline.test(D)) {
        this._input.back();
        break;
      } else
        D === "\\" && this._input.hasNext() ? (C = this._input.peek(), C === "x" || C === "u" ? this.has_char_escapes = !0 : C === "\r" && this._input.peek(1) === `
` && this._input.next(), D += this._input.next()) : f && (f === "${" && D === "$" && this._input.peek() === "{" && (D += this._input.next()), f === D && (d === "`" ? D += this._read_string_recursive("}", A, "`") : D += this._read_string_recursive("`", A, "${"), this._input.hasNext() && (D += this._input.next())));
      D += u.read(), g += D;
    }
    return g;
  }, re.Tokenizer = y, re.TOKEN = l, re.positionable_operators = R.slice(), re.line_starters = c.slice(), re;
}
var xt;
function bu() {
  if (xt)
    return Oe;
  xt = 1;
  var e = ut().Output, r = Pt().Token, i = It(), t = Ut().Options, a = ve().Tokenizer, n = ve().line_starters, p = ve().positionable_operators, o = ve().TOKEN;
  function l(u, g) {
    return g.indexOf(u) !== -1;
  }
  function v(u) {
    return u.replace(/^\s+/g, "");
  }
  function b(u) {
    for (var g = {}, D = 0; D < u.length; D++)
      g[u[D].replace(/-/g, "_")] = u[D];
    return g;
  }
  function m(u, g) {
    return u && u.type === o.RESERVED && u.text === g;
  }
  function E(u, g) {
    return u && u.type === o.RESERVED && l(u.text, g);
  }
  var R = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], S = ["before-newline", "after-newline", "preserve-newline"], L = b(S), c = [L.before_newline, L.preserve_newline], s = {
    BlockStatement: "BlockStatement",
    // 'BLOCK'
    Statement: "Statement",
    // 'STATEMENT'
    ObjectLiteral: "ObjectLiteral",
    // 'OBJECT',
    ArrayLiteral: "ArrayLiteral",
    //'[EXPRESSION]',
    ForInitializer: "ForInitializer",
    //'(FOR-EXPRESSION)',
    Conditional: "Conditional",
    //'(COND-EXPRESSION)',
    Expression: "Expression"
    //'(EXPRESSION)'
  };
  function h(u, g) {
    g.multiline_frame || g.mode === s.ForInitializer || g.mode === s.Conditional || u.remove_indent(g.start_line_index);
  }
  function k(u) {
    u = u.replace(i.allLineBreaks, `
`);
    for (var g = [], D = u.indexOf(`
`); D !== -1; )
      g.push(u.substring(0, D)), u = u.substring(D + 1), D = u.indexOf(`
`);
    return u.length && g.push(u), g;
  }
  function y(u) {
    return u === s.ArrayLiteral;
  }
  function O(u) {
    return l(u, [s.Expression, s.ForInitializer, s.Conditional]);
  }
  function d(u, g) {
    for (var D = 0; D < u.length; D++) {
      var w = u[D].trim();
      if (w.charAt(0) !== g)
        return !1;
    }
    return !0;
  }
  function A(u, g) {
    for (var D = 0, w = u.length, F; D < w; D++)
      if (F = u[D], F && F.indexOf(g) !== 0)
        return !1;
    return !0;
  }
  function f(u, g) {
    g = g || {}, this._source_text = u || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new t(g);
  }
  f.prototype.create_flags = function(u, g) {
    var D = 0;
    u && (D = u.indentation_level, !this._output.just_added_newline() && u.line_indent_level > D && (D = u.line_indent_level));
    var w = {
      mode: g,
      parent: u,
      last_token: u ? u.last_token : new r(o.START_BLOCK, ""),
      // last token text
      last_word: u ? u.last_word : "",
      // last TOKEN.WORD passed
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      // switch(..){ INSIDE HERE }
      in_case: !1,
      // we're on the exact line with "case 0:"
      case_body: !1,
      // the indented case-action block
      case_block: !1,
      // the indented case-action block is wrapped with {}
      indentation_level: D,
      alignment: 0,
      line_indent_level: u ? u.line_indent_level : D,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return w;
  }, f.prototype._reset = function(u) {
    var g = u.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new e(this._options, g), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(s.BlockStatement);
    var D = new a(u, this._options);
    return this._tokens = D.tokenize(), u;
  }, f.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var u, g = this._reset(this._source_text), D = this._options.eol;
    this._options.eol === "auto" && (D = `
`, g && i.lineBreak.test(g || "") && (D = g.match(i.lineBreak)[0]));
    for (var w = this._tokens.next(); w; )
      this.handle_token(w), this._last_last_text = this._flags.last_token.text, this._flags.last_token = w, w = this._tokens.next();
    return u = this._output.get_code(D), u;
  }, f.prototype.handle_token = function(u, g) {
    u.type === o.START_EXPR ? this.handle_start_expr(u) : u.type === o.END_EXPR ? this.handle_end_expr(u) : u.type === o.START_BLOCK ? this.handle_start_block(u) : u.type === o.END_BLOCK ? this.handle_end_block(u) : u.type === o.WORD ? this.handle_word(u) : u.type === o.RESERVED ? this.handle_word(u) : u.type === o.SEMICOLON ? this.handle_semicolon(u) : u.type === o.STRING ? this.handle_string(u) : u.type === o.EQUALS ? this.handle_equals(u) : u.type === o.OPERATOR ? this.handle_operator(u) : u.type === o.COMMA ? this.handle_comma(u) : u.type === o.BLOCK_COMMENT ? this.handle_block_comment(u, g) : u.type === o.COMMENT ? this.handle_comment(u, g) : u.type === o.DOT ? this.handle_dot(u) : u.type === o.EOF ? this.handle_eof(u) : u.type === o.UNKNOWN ? this.handle_unknown(u, g) : this.handle_unknown(u, g);
  }, f.prototype.handle_whitespace_and_comments = function(u, g) {
    var D = u.newlines, w = this._options.keep_array_indentation && y(this._flags.mode);
    if (u.comments_before)
      for (var F = u.comments_before.next(); F; )
        this.handle_whitespace_and_comments(F, g), this.handle_token(F, g), F = u.comments_before.next();
    if (w)
      for (var N = 0; N < D; N += 1)
        this.print_newline(N > 0, g);
    else if (this._options.max_preserve_newlines && D > this._options.max_preserve_newlines && (D = this._options.max_preserve_newlines), this._options.preserve_newlines && D > 1) {
      this.print_newline(!1, g);
      for (var I = 1; I < D; I += 1)
        this.print_newline(!0, g);
    }
  };
  var C = ["async", "break", "continue", "return", "throw", "yield"];
  return f.prototype.allow_wrap_or_preserved_newline = function(u, g) {
    if (g = g === void 0 ? !1 : g, !this._output.just_added_newline()) {
      var D = this._options.preserve_newlines && u.newlines || g, w = l(this._flags.last_token.text, p) || l(u.text, p);
      if (w) {
        var F = l(this._flags.last_token.text, p) && l(this._options.operator_position, c) || l(u.text, p);
        D = D && F;
      }
      if (D)
        this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (E(this._flags.last_token, C))
          return;
        this._output.set_wrap_point();
      }
    }
  }, f.prototype.print_newline = function(u, g) {
    if (!g && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var D = this._tokens.peek(); this._flags.mode === s.Statement && !(this._flags.if_block && m(D, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(u) && (this._flags.multiline_frame = !0);
  }, f.prototype.print_token_line_indentation = function(u) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && u.newlines && (u.text === "[" || y(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(u.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, f.prototype.print_token = function(u) {
    if (this._output.raw) {
      this._output.add_raw_token(u);
      return;
    }
    if (this._options.comma_first && u.previous && u.previous.type === o.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var g = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(g), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(u), this._output.add_token(","), this._output.space_before_token = !0;
    }
    this.print_token_line_indentation(u), this._output.non_breaking_space = !0, this._output.add_token(u.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  }, f.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, f.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, f.prototype.set_mode = function(u) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, u), this._flags = this.create_flags(this._previous_flags, u), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, f.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === s.Statement && h(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, f.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === s.ObjectLiteral && this._flags.mode === s.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || E(this._flags.last_token, ["get", "set"]));
  }, f.prototype.start_of_statement = function(u) {
    var g = !1;
    return g = g || E(this._flags.last_token, ["var", "let", "const"]) && u.type === o.WORD, g = g || m(this._flags.last_token, "do"), g = g || !(this._flags.parent.mode === s.ObjectLiteral && this._flags.mode === s.Statement) && E(this._flags.last_token, C) && !u.newlines, g = g || m(this._flags.last_token, "else") && !(m(u, "if") && !u.comments_before), g = g || this._flags.last_token.type === o.END_EXPR && (this._previous_flags.mode === s.ForInitializer || this._previous_flags.mode === s.Conditional), g = g || this._flags.last_token.type === o.WORD && this._flags.mode === s.BlockStatement && !this._flags.in_case && !(u.text === "--" || u.text === "++") && this._last_last_text !== "function" && u.type !== o.WORD && u.type !== o.RESERVED, g = g || this._flags.mode === s.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || E(this._flags.last_token, ["get", "set"])), g ? (this.set_mode(s.Statement), this.indent(), this.handle_whitespace_and_comments(u, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      u,
      E(u, ["do", "for", "if", "while"])
    ), !0) : !1;
  }, f.prototype.handle_start_expr = function(u) {
    this.start_of_statement(u) || this.handle_whitespace_and_comments(u);
    var g = s.Expression;
    if (u.text === "[") {
      if (this._flags.last_token.type === o.WORD || this._flags.last_token.text === ")") {
        E(this._flags.last_token, n) && (this._output.space_before_token = !0), this.print_token(u), this.set_mode(g), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
        return;
      }
      g = s.ArrayLiteral, y(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), l(this._flags.last_token.type, [o.START_EXPR, o.END_EXPR, o.WORD, o.OPERATOR, o.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === o.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, g = s.ForInitializer) : l(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, g = s.Conditional) : l(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && u.whitespace_before === "" ? this._output.space_before_token = !1 : (l(this._flags.last_token.text, n) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
      else if (this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(u);
      else if (this._flags.last_token.type === o.WORD) {
        this._output.space_before_token = !1;
        var D = this._tokens.peek(-3);
        if (this._options.space_after_named_function && D) {
          var w = this._tokens.peek(-4);
          E(D, ["async", "function"]) || D.text === "*" && E(w, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === s.ObjectLiteral ? (D.text === "{" || D.text === "," || D.text === "*" && (w.text === "{" || w.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else
        this.allow_wrap_or_preserved_newline(u);
      (this._flags.last_token.type === o.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === s.ObjectLiteral && l(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === o.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === o.END_EXPR || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === o.COMMA) && this.allow_wrap_or_preserved_newline(u, u.newlines), this.print_token(u), this.set_mode(g), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, f.prototype.handle_end_expr = function(u) {
    for (; this._flags.mode === s.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(u), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      u,
      u.text === "]" && y(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === o.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(u), this.restore_mode(), h(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === s.Conditional && (this._previous_flags.mode = s.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
  }, f.prototype.handle_start_block = function(u) {
    this.handle_whitespace_and_comments(u);
    var g = this._tokens.peek(), D = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === o.END_EXPR ? (this.set_mode(s.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(s.BlockStatement) : D && (l(D.text, [":", ","]) && l(g.type, [o.STRING, o.WORD, o.RESERVED]) || l(g.text, ["get", "set", "..."]) && l(D.type, [o.WORD, o.RESERVED])) ? l(this._last_last_text, ["class", "interface"]) && !l(D.text, [":", ","]) ? this.set_mode(s.BlockStatement) : this.set_mode(s.ObjectLiteral) : this._flags.last_token.type === o.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(s.BlockStatement) : l(this._flags.last_token.type, [o.EQUALS, o.START_EXPR, o.COMMA, o.OPERATOR]) || E(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(s.ObjectLiteral) : this.set_mode(s.BlockStatement), this._flags.last_token && E(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var w = !g.comments_before && g.text === "}", F = w && this._flags.last_word === "function" && this._flags.last_token.type === o.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var N = 0, I = null;
      this._flags.inline_frame = !0;
      do
        if (N += 1, I = this._tokens.peek(N - 1), I.newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      while (I.type !== o.EOF && !(I.type === o.END_BLOCK && I.opened === u));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && u.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== o.OPERATOR && (F || this._flags.last_token.type === o.EQUALS || E(this._flags.last_token, R) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (y(this._previous_flags.mode) && (this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.COMMA) && ((this._flags.last_token.type === o.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(u), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== o.OPERATOR && this._flags.last_token.type !== o.START_EXPR && (this._flags.last_token.type === o.START_BLOCK && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(u), this.indent(), !w && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, f.prototype.handle_end_block = function(u) {
    for (this.handle_whitespace_and_comments(u); this._flags.mode === s.Statement; )
      this.restore_mode();
    var g = this._flags.last_token.type === o.START_BLOCK;
    this._flags.inline_frame && !g ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? g || this.print_newline() : g || (y(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(u);
  }, f.prototype.handle_word = function(u) {
    if (u.type === o.RESERVED) {
      if (l(u.text, ["set", "get"]) && this._flags.mode !== s.ObjectLiteral)
        u.type = o.WORD;
      else if (u.text === "import" && l(this._tokens.peek().text, ["(", "."]))
        u.type = o.WORD;
      else if (l(u.text, ["as", "from"]) && !this._flags.import_block)
        u.type = o.WORD;
      else if (this._flags.mode === s.ObjectLiteral) {
        var g = this._tokens.peek();
        g.text === ":" && (u.type = o.WORD);
      }
    }
    if (this.start_of_statement(u) ? E(this._flags.last_token, ["var", "let", "const"]) && u.type === o.WORD && (this._flags.declaration_statement = !0) : u.newlines && !O(this._flags.mode) && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== o.EQUALS && (this._options.preserve_newlines || !E(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(u), this.print_newline()) : this.handle_whitespace_and_comments(u), this._flags.do_block && !this._flags.do_while)
      if (m(u, "while")) {
        this._output.space_before_token = !0, this.print_token(u), this._output.space_before_token = !0, this._flags.do_while = !0;
        return;
      } else
        this.print_newline(), this._flags.do_block = !1;
    if (this._flags.if_block)
      if (!this._flags.else_block && m(u, "else"))
        this._flags.else_block = !0;
      else {
        for (; this._flags.mode === s.Statement; )
          this.restore_mode();
        this._flags.if_block = !1, this._flags.else_block = !1;
      }
    if (this._flags.in_case_statement && E(u, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(u), this._flags.in_case = !0;
      return;
    }
    if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR) && (this.start_of_object_property() || this.allow_wrap_or_preserved_newline(u)), m(u, "function")) {
      (l(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(l(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === o.OPERATOR)) && !this._output.just_added_blankline() && !u.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD ? E(this._flags.last_token, ["get", "set", "new", "export"]) || E(this._flags.last_token, C) ? this._output.space_before_token = !0 : m(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === o.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (O(this._flags.mode) || y(this._flags.mode)) || this.print_newline(), this.print_token(u), this._flags.last_word = u.text;
      return;
    }
    var D = "NONE";
    if (this._flags.last_token.type === o.END_BLOCK ? this._previous_flags.inline_frame ? D = "SPACE" : E(u, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && u.newlines ? D = "NEWLINE" : (D = "SPACE", this._output.space_before_token = !0) : D = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && this._flags.mode === s.BlockStatement ? D = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && O(this._flags.mode) ? D = "SPACE" : this._flags.last_token.type === o.STRING ? D = "NEWLINE" : this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === s.ObjectLiteral && l(this._last_last_text, ["{", ","])) ? D = "SPACE" : this._flags.last_token.type === o.START_BLOCK ? this._flags.inline_frame ? D = "SPACE" : D = "NEWLINE" : this._flags.last_token.type === o.END_EXPR && (this._output.space_before_token = !0, D = "NEWLINE"), E(u, n) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? D = "SPACE" : D = "NEWLINE"), E(u, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === o.END_BLOCK && this._previous_flags.mode === s.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && u.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(!0);
        var w = this._output.current_line;
        w.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
      }
    else
      D === "NEWLINE" ? E(this._flags.last_token, R) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && E(u, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== o.END_EXPR ? (this._flags.last_token.type !== o.START_EXPR || !E(u, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (m(u, "if") && m(u.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : E(u, n) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && y(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : D === "SPACE" && (this._output.space_before_token = !0);
    u.previous && (u.previous.type === o.WORD || u.previous.type === o.RESERVED) && (this._output.space_before_token = !0), this.print_token(u), this._flags.last_word = u.text, u.type === o.RESERVED && (u.text === "do" ? this._flags.do_block = !0 : u.text === "if" ? this._flags.if_block = !0 : u.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && m(u, "from") && (this._flags.import_block = !1));
  }, f.prototype.handle_semicolon = function(u) {
    this.start_of_statement(u) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(u);
    for (var g = this._tokens.peek(); this._flags.mode === s.Statement && !(this._flags.if_block && m(g, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(u);
  }, f.prototype.handle_string = function(u) {
    u.text.startsWith("`") && u.newlines === 0 && u.whitespace_before === "" && (u.previous.text === ")" || this._flags.last_token.type === o.WORD) || (this.start_of_statement(u) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(u), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(u) : u.text.startsWith("`") && this._flags.last_token.type === o.END_EXPR && (u.previous.text === "]" || u.previous.text === ")") && u.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(u);
  }, f.prototype.handle_equals = function(u) {
    this.start_of_statement(u) || this.handle_whitespace_and_comments(u), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(u), this._output.space_before_token = !0;
  }, f.prototype.handle_comma = function(u) {
    this.handle_whitespace_and_comments(u, !0), this.print_token(u), this._output.space_before_token = !0, this._flags.declaration_statement ? (O(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(u)) : this._flags.mode === s.ObjectLiteral || this._flags.mode === s.Statement && this._flags.parent.mode === s.ObjectLiteral ? (this._flags.mode === s.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(u);
  }, f.prototype.handle_operator = function(u) {
    var g = u.text === "*" && (E(this._flags.last_token, ["function", "yield"]) || l(this._flags.last_token.type, [o.START_BLOCK, o.COMMA, o.END_BLOCK, o.SEMICOLON])), D = l(u.text, ["-", "+"]) && (l(this._flags.last_token.type, [o.START_BLOCK, o.START_EXPR, o.EQUALS, o.OPERATOR]) || l(this._flags.last_token.text, n) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(u)) {
      var w = !g;
      this.handle_whitespace_and_comments(u, w);
    }
    if (u.text === "*" && this._flags.last_token.type === o.DOT) {
      this.print_token(u);
      return;
    }
    if (u.text === "::") {
      this.print_token(u);
      return;
    }
    if (this._flags.last_token.type === o.OPERATOR && l(this._options.operator_position, c) && this.allow_wrap_or_preserved_newline(u), u.text === ":" && this._flags.in_case) {
      this.print_token(u), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== o.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
      return;
    }
    var F = !0, N = !0, I = !1;
    if (u.text === ":" ? this._flags.ternary_depth === 0 ? F = !1 : (this._flags.ternary_depth -= 1, I = !0) : u.text === "?" && (this._flags.ternary_depth += 1), !D && !g && this._options.preserve_newlines && l(u.text, p)) {
      var W = u.text === ":", J = W && I, B = W && !I;
      switch (this._options.operator_position) {
        case L.before_newline:
          this._output.space_before_token = !B, this.print_token(u), (!W || J) && this.allow_wrap_or_preserved_newline(u), this._output.space_before_token = !0;
          return;
        case L.after_newline:
          this._output.space_before_token = !0, !W || J ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(u) : this._output.space_before_token = !1, this.print_token(u), this._output.space_before_token = !0;
          return;
        case L.preserve_newline:
          B || this.allow_wrap_or_preserved_newline(u), F = !(this._output.just_added_newline() || B), this._output.space_before_token = F, this.print_token(u), this._output.space_before_token = !0;
          return;
      }
    }
    if (g) {
      this.allow_wrap_or_preserved_newline(u), F = !1;
      var q = this._tokens.peek();
      N = q && l(q.type, [o.WORD, o.RESERVED]);
    } else if (u.text === "...")
      this.allow_wrap_or_preserved_newline(u), F = this._flags.last_token.type === o.START_BLOCK, N = !1;
    else if (l(u.text, ["--", "++", "!", "~"]) || D) {
      if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR) && this.allow_wrap_or_preserved_newline(u), F = !1, N = !1, u.newlines && (u.text === "--" || u.text === "++" || u.text === "~")) {
        var P = E(this._flags.last_token, R) && u.newlines;
        P && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(P, !0);
      }
      this._flags.last_token.text === ";" && O(this._flags.mode) && (F = !0), this._flags.last_token.type === o.RESERVED ? F = !0 : this._flags.last_token.type === o.END_EXPR ? F = !(this._flags.last_token.text === "]" && (u.text === "--" || u.text === "++")) : this._flags.last_token.type === o.OPERATOR && (F = l(u.text, ["--", "-", "++", "+"]) && l(this._flags.last_token.text, ["--", "-", "++", "+"]), l(u.text, ["+", "-"]) && l(this._flags.last_token.text, ["--", "++"]) && (N = !0)), (this._flags.mode === s.BlockStatement && !this._flags.inline_frame || this._flags.mode === s.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || F, this.print_token(u), this._output.space_before_token = N;
  }, f.prototype.handle_block_comment = function(u, g) {
    if (this._output.raw) {
      this._output.add_raw_token(u), u.directives && u.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (u.directives) {
      this.print_newline(!1, g), this.print_token(u), u.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
      return;
    }
    if (!i.newline.test(u.text) && !u.newlines) {
      this._output.space_before_token = !0, this.print_token(u), this._output.space_before_token = !0;
      return;
    } else
      this.print_block_commment(u, g);
  }, f.prototype.print_block_commment = function(u, g) {
    var D = k(u.text), w, F = !1, N = !1, I = u.whitespace_before, W = I.length;
    if (this.print_newline(!1, g), this.print_token_line_indentation(u), this._output.add_token(D[0]), this.print_newline(!1, g), D.length > 1) {
      for (D = D.slice(1), F = d(D, "*"), N = A(D, I), F && (this._flags.alignment = 1), w = 0; w < D.length; w++)
        F ? (this.print_token_line_indentation(u), this._output.add_token(v(D[w]))) : N && D[w] ? (this.print_token_line_indentation(u), this._output.add_token(D[w].substring(W))) : (this._output.current_line.set_indent(-1), this._output.add_token(D[w])), this.print_newline(!1, g);
      this._flags.alignment = 0;
    }
  }, f.prototype.handle_comment = function(u, g) {
    u.newlines ? this.print_newline(!1, g) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(u), this.print_newline(!1, g);
  }, f.prototype.handle_dot = function(u) {
    this.start_of_statement(u) || this.handle_whitespace_and_comments(u, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), E(this._flags.last_token, R) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(
      u,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(u);
  }, f.prototype.handle_unknown = function(u, g) {
    this.print_token(u), u.text[u.text.length - 1] === `
` && this.print_newline(!1, g);
  }, f.prototype.handle_eof = function(u) {
    for (; this._flags.mode === s.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(u);
  }, Oe.Beautifier = f, Oe;
}
var Ct;
function Au() {
  if (Ct)
    return be.exports;
  Ct = 1;
  var e = bu().Beautifier, r = Ut().Options;
  function i(t, a) {
    var n = new e(t, a);
    return n.beautify();
  }
  return be.exports = i, be.exports.defaultOptions = function() {
    return new r();
  }, be.exports;
}
var Ee = { exports: {} }, Ge = {}, ze = {}, wt;
function Vt() {
  if (wt)
    return ze;
  wt = 1;
  var e = rt().Options;
  function r(i) {
    e.call(this, i, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var t = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || t;
    var a = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var n = 0; n < a.length; n++)
      a[n] !== "expand" ? this.brace_style = "collapse" : this.brace_style = a[n];
  }
  return r.prototype = new e(), ze.Options = r, ze;
}
var Bt;
function vu() {
  if (Bt)
    return Ge;
  Bt = 1;
  var e = Vt().Options, r = ut().Output, i = it().InputScanner, t = at().Directives, a = new t(/\/\*/, /\*\//), n = /\r\n|[\r\n]/, p = /\r\n|[\r\n]/g, o = /\s/, l = /(?:\s|\n)+/g, v = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, b = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function m(E, R) {
    this._source_text = E || "", this._options = new e(R), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      "@page": !0,
      "@font-face": !0,
      "@keyframes": !0,
      // also in CONDITIONAL_GROUP_RULE below
      "@media": !0,
      "@supports": !0,
      "@document": !0
    }, this.CONDITIONAL_GROUP_RULE = {
      "@media": !0,
      "@supports": !0,
      "@document": !0
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return m.prototype.eatString = function(E) {
    var R = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (R += this._ch, this._ch === "\\")
        R += this._input.next();
      else if (E.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return R;
  }, m.prototype.eatWhitespace = function(E) {
    for (var R = o.test(this._input.peek()), S = 0; o.test(this._input.peek()); )
      this._ch = this._input.next(), E && this._ch === `
` && (S === 0 || S < this._options.max_preserve_newlines) && (S++, this._output.add_new_line(!0));
    return R;
  }, m.prototype.foundNestedPseudoClass = function() {
    for (var E = 0, R = 1, S = this._input.peek(R); S; ) {
      if (S === "{")
        return !0;
      if (S === "(")
        E += 1;
      else if (S === ")") {
        if (E === 0)
          return !1;
        E -= 1;
      } else if (S === ";" || S === "}")
        return !1;
      R++, S = this._input.peek(R);
    }
    return !1;
  }, m.prototype.print_string = function(E) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(E);
  }, m.prototype.preserveSingleSpace = function(E) {
    E && (this._output.space_before_token = !0);
  }, m.prototype.indent = function() {
    this._indentLevel++;
  }, m.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, m.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var E = this._source_text, R = this._options.eol;
    R === "auto" && (R = `
`, E && n.test(E || "") && (R = E.match(n)[0])), E = E.replace(p, `
`);
    var S = E.match(/^[\t ]*/)[0];
    this._output = new r(this._options, S), this._input = new i(E), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var L = 0, c = !1, s = !1, h = !1, k = !1, y = !1, O = !1, d = this._ch, A = !1, f, C, u; f = this._input.read(l), C = f !== "", u = d, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), d = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var g = this._input.read(v), D = a.get_directives(g);
        D && D.ignore === "start" && (g += a.readIgnored(this._input)), this.print_string(g), this.eatWhitespace(!0), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(b)), this.eatWhitespace(!0);
      else if (this._ch === "@" || this._ch === "$")
        if (this.preserveSingleSpace(C), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var w = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          w.match(/[ :]$/) && (w = this.eatString(": ").replace(/\s$/, ""), this.print_string(w), this._output.space_before_token = !0), w = w.replace(/\s$/, ""), w === "extend" ? k = !0 : w === "import" && (y = !0), w in this.NESTED_AT_RULE ? (this._nestedLevel += 1, w in this.CONDITIONAL_GROUP_RULE && (h = !0)) : !c && L === 0 && w.indexOf(":") !== -1 && (s = !0, this.indent());
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(C), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        s && (s = !1, this.outdent()), h ? (h = !1, c = this._indentLevel >= this._nestedLevel) : c = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && c && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (u === "(" ? this._output.space_before_token = !1 : u !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), u === "{" && this._output.trim(!0), y = !1, k = !1, s && (this.outdent(), s = !1), this.print_string(this._ch), c = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var F = 0; F < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; F++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[F])) {
            A = !0;
            break;
          }
        (c || h) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !k && L === 0 ? (this.print_string(":"), s || (s = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var N = u === '"' || u === "'";
        this.preserveSingleSpace(N || C), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
      } else if (this._ch === ";")
        A = !1, L === 0 ? (s && (this.outdent(), s = !1), k = !1, y = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), L++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), L && (L--, this.outdent()));
        else {
          var I = !1;
          this._input.lookBack("with") && (I = !0), this.preserveSingleSpace(C || I), this.print_string(this._ch), s && u === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), O = !0) : (this.eatWhitespace(), L++, this.indent());
        }
      else if (this._ch === ")")
        L && (L--, this.outdent()), O && this._input.peek() === ";" && this._options.selector_separator_newline && (O = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!s || O) && L === 0 && !y && !k ? this._output.add_new_line() : this._output.space_before_token = !0;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !s && L === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && o.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(C), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), o.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = !0, this.print_string(this._ch);
      else {
        var W = u === '"' || u === "'";
        this.preserveSingleSpace(W || C), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && A && this._output.add_new_line();
      }
    var J = this._output.get_code(R);
    return J;
  }, Ge.Beautifier = m, Ge;
}
var Tt;
function Eu() {
  if (Tt)
    return Ee.exports;
  Tt = 1;
  var e = vu().Beautifier, r = Vt().Options;
  function i(t, a) {
    var n = new e(t, a);
    return n.beautify();
  }
  return Ee.exports = i, Ee.exports.defaultOptions = function() {
    return new r();
  }, Ee.exports;
}
var ye = { exports: {} }, He = {}, $e = {}, kt;
function Mt() {
  if (kt)
    return $e;
  kt = 1;
  var e = rt().Options;
  function r(i) {
    e.call(this, i, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      /* 'script', */
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      // obsolete inline tags
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.void_elements = this._get_array("void_elements", [
      // HTLM void elements - aka self-closing tags - aka singletons
      // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      // NOTE: Optional tags are too complex for a simple list
      // they are hard coded in _do_optional_end_element
      // Doctype and xml elements
      "!doctype",
      "?xml",
      // obsolete tags
      // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
      // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return r.prototype = new e(), $e.Options = r, $e;
}
var xe = {}, Ft;
function Rt() {
  if (Ft)
    return xe;
  Ft = 1;
  var e = we().Tokenizer, r = we().TOKEN, i = at().Directives, t = jt().TemplatablePattern, a = Te().Pattern, n = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: r.START,
    RAW: r.RAW,
    EOF: r.EOF
  }, p = new i(/<\!--/, /-->/), o = function(l, v) {
    e.call(this, l, v), this._current_tag_name = "";
    var b = new t(this._input).read_options(this._options), m = new a(this._input);
    if (this.__patterns = {
      word: b.until(/[\n\r\t <]/),
      single_quote: b.until_after(/'/),
      double_quote: b.until_after(/"/),
      attribute: b.until(/[\n\r\t =>]|\/>/),
      element_name: b.until(/[\n\r\t >\/]/),
      handlebars_comment: m.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: m.starting_with(/{{/).until_after(/}}/),
      handlebars_open: m.until(/[\n\r\t }]/),
      handlebars_raw_close: m.until(/}}/),
      comment: m.starting_with(/<!--/).until_after(/-->/),
      cdata: m.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      // https://en.wikipedia.org/wiki/Conditional_comment
      conditional_comment: m.starting_with(/<!\[/).until_after(/]>/),
      processing: m.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var E = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = m.matching(E).until_after(E);
    }
  };
  return o.prototype = new e(), o.prototype._is_comment = function(l) {
    return !1;
  }, o.prototype._is_opening = function(l) {
    return l.type === n.TAG_OPEN;
  }, o.prototype._is_closing = function(l, v) {
    return l.type === n.TAG_CLOSE && v && ((l.text === ">" || l.text === "/>") && v.text[0] === "<" || l.text === "}}" && v.text[0] === "{" && v.text[1] === "{");
  }, o.prototype._reset = function() {
    this._current_tag_name = "";
  }, o.prototype._get_next_token = function(l, v) {
    var b = null;
    this._readWhitespace();
    var m = this._input.peek();
    return m === null ? this._create_token(n.EOF, "") : (b = b || this._read_open_handlebars(m, v), b = b || this._read_attribute(m, l, v), b = b || this._read_close(m, v), b = b || this._read_raw_content(m, l, v), b = b || this._read_content_word(m), b = b || this._read_comment_or_cdata(m), b = b || this._read_processing(m), b = b || this._read_open(m, v), b = b || this._create_token(n.UNKNOWN, this._input.next()), b);
  }, o.prototype._read_comment_or_cdata = function(l) {
    var v = null, b = null, m = null;
    if (l === "<") {
      var E = this._input.peek(1);
      E === "!" && (b = this.__patterns.comment.read(), b ? (m = p.get_directives(b), m && m.ignore === "start" && (b += p.readIgnored(this._input))) : b = this.__patterns.cdata.read()), b && (v = this._create_token(n.COMMENT, b), v.directives = m);
    }
    return v;
  }, o.prototype._read_processing = function(l) {
    var v = null, b = null, m = null;
    if (l === "<") {
      var E = this._input.peek(1);
      (E === "!" || E === "?") && (b = this.__patterns.conditional_comment.read(), b = b || this.__patterns.processing.read()), b && (v = this._create_token(n.COMMENT, b), v.directives = m);
    }
    return v;
  }, o.prototype._read_open = function(l, v) {
    var b = null, m = null;
    return v || l === "<" && (b = this._input.next(), this._input.peek() === "/" && (b += this._input.next()), b += this.__patterns.element_name.read(), m = this._create_token(n.TAG_OPEN, b)), m;
  }, o.prototype._read_open_handlebars = function(l, v) {
    var b = null, m = null;
    return v || this._options.indent_handlebars && l === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (b = this.__patterns.handlebars_comment.read(), b = b || this.__patterns.handlebars.read(), m = this._create_token(n.COMMENT, b)) : (b = this.__patterns.handlebars_open.read(), m = this._create_token(n.TAG_OPEN, b))), m;
  }, o.prototype._read_close = function(l, v) {
    var b = null, m = null;
    return v && (v.text[0] === "<" && (l === ">" || l === "/" && this._input.peek(1) === ">") ? (b = this._input.next(), l === "/" && (b += this._input.next()), m = this._create_token(n.TAG_CLOSE, b)) : v.text[0] === "{" && l === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), m = this._create_token(n.TAG_CLOSE, "}}"))), m;
  }, o.prototype._read_attribute = function(l, v, b) {
    var m = null, E = "";
    if (b && b.text[0] === "<")
      if (l === "=")
        m = this._create_token(n.EQUALS, this._input.next());
      else if (l === '"' || l === "'") {
        var R = this._input.next();
        l === '"' ? R += this.__patterns.double_quote.read() : R += this.__patterns.single_quote.read(), m = this._create_token(n.VALUE, R);
      } else
        E = this.__patterns.attribute.read(), E && (v.type === n.EQUALS ? m = this._create_token(n.VALUE, E) : m = this._create_token(n.ATTRIBUTE, E));
    return m;
  }, o.prototype._is_content_unformatted = function(l) {
    return this._options.void_elements.indexOf(l) === -1 && (this._options.content_unformatted.indexOf(l) !== -1 || this._options.unformatted.indexOf(l) !== -1);
  }, o.prototype._read_raw_content = function(l, v, b) {
    var m = "";
    if (b && b.text[0] === "{")
      m = this.__patterns.handlebars_raw_close.read();
    else if (v.type === n.TAG_CLOSE && v.opened.text[0] === "<" && v.text[0] !== "/") {
      var E = v.opened.text.substr(1).toLowerCase();
      if (E === "script" || E === "style") {
        var R = this._read_comment_or_cdata(l);
        if (R)
          return R.type = n.TEXT, R;
        m = this._input.readUntil(new RegExp("</" + E + "[\\n\\r\\t ]*?>", "ig"));
      } else
        this._is_content_unformatted(E) && (m = this._input.readUntil(new RegExp("</" + E + "[\\n\\r\\t ]*?>", "ig")));
    }
    return m ? this._create_token(n.TEXT, m) : null;
  }, o.prototype._read_content_word = function(l) {
    var v = "";
    if (this._options.unformatted_content_delimiter && l === this._options.unformatted_content_delimiter[0] && (v = this.__patterns.unformatted_content_delimiter.read()), v || (v = this.__patterns.word.read()), v)
      return this._create_token(n.TEXT, v);
  }, xe.Tokenizer = o, xe.TOKEN = n, xe;
}
var Ot;
function yu() {
  if (Ot)
    return He;
  Ot = 1;
  var e = Mt().Options, r = ut().Output, i = Rt().Tokenizer, t = Rt().TOKEN, a = /\r\n|[\r\n]/, n = /\r\n|[\r\n]/g, p = function(c, s) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = c.max_preserve_newlines, this.preserve_newlines = c.preserve_newlines, this._output = new r(c, s);
  };
  p.prototype.current_line_has_match = function(c) {
    return this._output.current_line.has_match(c);
  }, p.prototype.set_space_before_token = function(c, s) {
    this._output.space_before_token = c, this._output.non_breaking_space = s;
  }, p.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, p.prototype.add_raw_token = function(c) {
    this._output.add_raw_token(c);
  }, p.prototype.print_preserved_newlines = function(c) {
    var s = 0;
    c.type !== t.TEXT && c.previous.type !== t.TEXT && (s = c.newlines ? 1 : 0), this.preserve_newlines && (s = c.newlines < this.max_preserve_newlines + 1 ? c.newlines : this.max_preserve_newlines + 1);
    for (var h = 0; h < s; h++)
      this.print_newline(h > 0);
    return s !== 0;
  }, p.prototype.traverse_whitespace = function(c) {
    return c.whitespace_before || c.newlines ? (this.print_preserved_newlines(c) || (this._output.space_before_token = !0), !0) : !1;
  }, p.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, p.prototype.print_newline = function(c) {
    this._output.add_new_line(c);
  }, p.prototype.print_token = function(c) {
    c.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(c.text));
  }, p.prototype.indent = function() {
    this.indent_level++;
  }, p.prototype.get_full_indent = function(c) {
    return c = this.indent_level + (c || 0), c < 1 ? "" : this._output.get_indent_string(c);
  };
  var o = function(c) {
    for (var s = null, h = c.next; h.type !== t.EOF && c.closed !== h; ) {
      if (h.type === t.ATTRIBUTE && h.text === "type") {
        h.next && h.next.type === t.EQUALS && h.next.next && h.next.next.type === t.VALUE && (s = h.next.next.text);
        break;
      }
      h = h.next;
    }
    return s;
  }, l = function(c, s) {
    var h = null, k = null;
    return s.closed ? (c === "script" ? h = "text/javascript" : c === "style" && (h = "text/css"), h = o(s) || h, h.search("text/css") > -1 ? k = "css" : h.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? k = "javascript" : h.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? k = "html" : h.search(/test\/null/) > -1 && (k = "null"), k) : null;
  };
  function v(c, s) {
    return s.indexOf(c) !== -1;
  }
  function b(c, s, h) {
    this.parent = c || null, this.tag = s ? s.tag_name : "", this.indent_level = h || 0, this.parser_token = s || null;
  }
  function m(c) {
    this._printer = c, this._current_frame = null;
  }
  m.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, m.prototype.record_tag = function(c) {
    var s = new b(this._current_frame, c, this._printer.indent_level);
    this._current_frame = s;
  }, m.prototype._try_pop_frame = function(c) {
    var s = null;
    return c && (s = c.parser_token, this._printer.indent_level = c.indent_level, this._current_frame = c.parent), s;
  }, m.prototype._get_frame = function(c, s) {
    for (var h = this._current_frame; h && c.indexOf(h.tag) === -1; ) {
      if (s && s.indexOf(h.tag) !== -1) {
        h = null;
        break;
      }
      h = h.parent;
    }
    return h;
  }, m.prototype.try_pop = function(c, s) {
    var h = this._get_frame([c], s);
    return this._try_pop_frame(h);
  }, m.prototype.indent_to_tag = function(c) {
    var s = this._get_frame(c);
    s && (this._printer.indent_level = s.indent_level);
  };
  function E(c, s, h, k) {
    this._source_text = c || "", s = s || {}, this._js_beautify = h, this._css_beautify = k, this._tag_stack = null;
    var y = new e(s, "html");
    this._options = y, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  E.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var c = this._source_text, s = this._options.eol;
    this._options.eol === "auto" && (s = `
`, c && a.test(c) && (s = c.match(a)[0])), c = c.replace(n, `
`);
    var h = c.match(/^[\t ]*/)[0], k = {
      text: "",
      type: ""
    }, y = new R(), O = new p(this._options, h), d = new i(c, this._options).tokenize();
    this._tag_stack = new m(O);
    for (var A = null, f = d.next(); f.type !== t.EOF; )
      f.type === t.TAG_OPEN || f.type === t.COMMENT ? (A = this._handle_tag_open(O, f, y, k), y = A) : f.type === t.ATTRIBUTE || f.type === t.EQUALS || f.type === t.VALUE || f.type === t.TEXT && !y.tag_complete ? A = this._handle_inside_tag(O, f, y, d) : f.type === t.TAG_CLOSE ? A = this._handle_tag_close(O, f, y) : f.type === t.TEXT ? A = this._handle_text(O, f, y) : O.add_raw_token(f), k = A, f = d.next();
    var C = O._output.get_code(s);
    return C;
  }, E.prototype._handle_tag_close = function(c, s, h) {
    var k = {
      text: s.text,
      type: s.type
    };
    return c.alignment_size = 0, h.tag_complete = !0, c.set_space_before_token(s.newlines || s.whitespace_before !== "", !0), h.is_unformatted ? c.add_raw_token(s) : (h.tag_start_char === "<" && (c.set_space_before_token(s.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && h.has_wrapped_attrs && c.print_newline(!1)), c.print_token(s)), h.indent_content && !(h.is_unformatted || h.is_content_unformatted) && (c.indent(), h.indent_content = !1), !h.is_inline_element && !(h.is_unformatted || h.is_content_unformatted) && c.set_wrap_point(), k;
  }, E.prototype._handle_inside_tag = function(c, s, h, k) {
    var y = h.has_wrapped_attrs, O = {
      text: s.text,
      type: s.type
    };
    if (c.set_space_before_token(s.newlines || s.whitespace_before !== "", !0), h.is_unformatted)
      c.add_raw_token(s);
    else if (h.tag_start_char === "{" && s.type === t.TEXT)
      c.print_preserved_newlines(s) ? (s.newlines = 0, c.add_raw_token(s)) : c.print_token(s);
    else {
      if (s.type === t.ATTRIBUTE ? (c.set_space_before_token(!0), h.attr_count += 1) : (s.type === t.EQUALS || s.type === t.VALUE && s.previous.type === t.EQUALS) && c.set_space_before_token(!1), s.type === t.ATTRIBUTE && h.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (c.traverse_whitespace(s), y = y || s.newlines !== 0), this._is_wrap_attributes_force)) {
        var d = h.attr_count > 1;
        if (this._is_wrap_attributes_force_expand_multiline && h.attr_count === 1) {
          var A = !0, f = 0, C;
          do {
            if (C = k.peek(f), C.type === t.ATTRIBUTE) {
              A = !1;
              break;
            }
            f += 1;
          } while (f < 4 && C.type !== t.EOF && C.type !== t.TAG_CLOSE);
          d = !A;
        }
        d && (c.print_newline(!1), y = !0);
      }
      c.print_token(s), y = y || c.previous_token_wrapped(), h.has_wrapped_attrs = y;
    }
    return O;
  }, E.prototype._handle_text = function(c, s, h) {
    var k = {
      text: s.text,
      type: "TK_CONTENT"
    };
    return h.custom_beautifier_name ? this._print_custom_beatifier_text(c, s, h) : h.is_unformatted || h.is_content_unformatted ? c.add_raw_token(s) : (c.traverse_whitespace(s), c.print_token(s)), k;
  }, E.prototype._print_custom_beatifier_text = function(c, s, h) {
    var k = this;
    if (s.text !== "") {
      var y = s.text, O, d = 1, A = "", f = "";
      h.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? O = this._js_beautify : h.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? O = this._css_beautify : h.custom_beautifier_name === "html" && (O = function(F, N) {
        var I = new E(F, N, k._js_beautify, k._css_beautify);
        return I.beautify();
      }), this._options.indent_scripts === "keep" ? d = 0 : this._options.indent_scripts === "separate" && (d = -c.indent_level);
      var C = c.get_full_indent(d);
      if (y = y.replace(/\n[ \t]*$/, ""), h.custom_beautifier_name !== "html" && y[0] === "<" && y.match(/^(<!--|<!\[CDATA\[)/)) {
        var u = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(y);
        if (!u) {
          c.add_raw_token(s);
          return;
        }
        A = C + u[1] + `
`, y = u[4], u[5] && (f = C + u[5]), y = y.replace(/\n[ \t]*$/, ""), (u[2] || u[3].indexOf(`
`) !== -1) && (u = u[3].match(/[ \t]+$/), u && (s.whitespace_before = u[0]));
      }
      if (y)
        if (O) {
          var g = function() {
            this.eol = `
`;
          };
          g.prototype = this._options.raw_options;
          var D = new g();
          y = O(C + y, D);
        } else {
          var w = s.whitespace_before;
          w && (y = y.replace(new RegExp(`
(` + w + ")?", "g"), `
`)), y = C + y.replace(/\n/g, `
` + C);
        }
      A && (y ? y = A + y + `
` + f : y = A + f), c.print_newline(!1), y && (s.text = y, s.whitespace_before = "", s.newlines = 0, c.add_raw_token(s), c.print_newline(!0));
    }
  }, E.prototype._handle_tag_open = function(c, s, h, k) {
    var y = this._get_tag_open_token(s);
    return (h.is_unformatted || h.is_content_unformatted) && !h.is_empty_element && s.type === t.TAG_OPEN && s.text.indexOf("</") === 0 ? (c.add_raw_token(s), y.start_tag_token = this._tag_stack.try_pop(y.tag_name)) : (c.traverse_whitespace(s), this._set_tag_position(c, s, y, h, k), y.is_inline_element || c.set_wrap_point(), c.print_token(s)), (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (y.alignment_size = s.text.length + 1), !y.tag_complete && !y.is_unformatted && (c.alignment_size = y.alignment_size), y;
  };
  var R = function(c, s) {
    if (this.parent = c || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !s)
      this.tag_complete = !0;
    else {
      var h;
      this.tag_start_char = s.text[0], this.text = s.text, this.tag_start_char === "<" ? (h = s.text.match(/^<([^\s>]*)/), this.tag_check = h ? h[1] : "") : (h = s.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = h ? h[1] : "", (s.text.startsWith("{{#>") || s.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && s.next !== null ? this.tag_check = s.next.text.split(" ")[0] : this.tag_check = s.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), s.type === t.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || s.closed && s.closed.text === "/>";
      var k = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (k = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(k)));
    }
  };
  E.prototype._get_tag_open_token = function(c) {
    var s = new R(this._tag_stack.get_parser_token(), c);
    return s.alignment_size = this._options.wrap_attributes_indent_size, s.is_end_tag = s.is_end_tag || v(s.tag_check, this._options.void_elements), s.is_empty_element = s.tag_complete || s.is_start_tag && s.is_end_tag, s.is_unformatted = !s.tag_complete && v(s.tag_check, this._options.unformatted), s.is_content_unformatted = !s.is_empty_element && v(s.tag_check, this._options.content_unformatted), s.is_inline_element = v(s.tag_name, this._options.inline) || s.tag_start_char === "{", s;
  }, E.prototype._set_tag_position = function(c, s, h, k, y) {
    if (h.is_empty_element || (h.is_end_tag ? h.start_tag_token = this._tag_stack.try_pop(h.tag_name) : (this._do_optional_end_element(h) && (h.is_inline_element || c.print_newline(!1)), this._tag_stack.record_tag(h), (h.tag_name === "script" || h.tag_name === "style") && !(h.is_unformatted || h.is_content_unformatted) && (h.custom_beautifier_name = l(h.tag_check, s)))), v(h.tag_check, this._options.extra_liners) && (c.print_newline(!1), c._output.just_added_blankline() || c.print_newline(!0)), h.is_empty_element) {
      if (h.tag_start_char === "{" && h.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), h.indent_content = !0;
        var O = c.current_line_has_match(/{{#if/);
        O || c.print_newline(!1);
      }
      h.tag_name === "!--" && y.type === t.TAG_CLOSE && k.is_end_tag && h.text.indexOf(`
`) === -1 || (h.is_inline_element || h.is_unformatted || c.print_newline(!1), this._calcluate_parent_multiline(c, h));
    } else if (h.is_end_tag) {
      var d = !1;
      d = h.start_tag_token && h.start_tag_token.multiline_content, d = d || !h.is_inline_element && !(k.is_inline_element || k.is_unformatted) && !(y.type === t.TAG_CLOSE && h.start_tag_token === k) && y.type !== "TK_CONTENT", (h.is_content_unformatted || h.is_unformatted) && (d = !1), d && c.print_newline(!1);
    } else
      h.indent_content = !h.custom_beautifier_name, h.tag_start_char === "<" && (h.tag_name === "html" ? h.indent_content = this._options.indent_inner_html : h.tag_name === "head" ? h.indent_content = this._options.indent_head_inner_html : h.tag_name === "body" && (h.indent_content = this._options.indent_body_inner_html)), !(h.is_inline_element || h.is_unformatted) && (y.type !== "TK_CONTENT" || h.is_content_unformatted) && c.print_newline(!1), this._calcluate_parent_multiline(c, h);
  }, E.prototype._calcluate_parent_multiline = function(c, s) {
    s.parent && c._output.just_added_newline() && !((s.is_inline_element || s.is_unformatted) && s.parent.is_inline_element) && (s.parent.multiline_content = !0);
  };
  var S = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], L = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return E.prototype._do_optional_end_element = function(c) {
    var s = null;
    if (!(c.is_empty_element || !c.is_start_tag || !c.parent)) {
      if (c.tag_name === "body")
        s = s || this._tag_stack.try_pop("head");
      else if (c.tag_name === "li")
        s = s || this._tag_stack.try_pop("li", ["ol", "ul"]);
      else if (c.tag_name === "dd" || c.tag_name === "dt")
        s = s || this._tag_stack.try_pop("dt", ["dl"]), s = s || this._tag_stack.try_pop("dd", ["dl"]);
      else if (c.parent.tag_name === "p" && S.indexOf(c.tag_name) !== -1) {
        var h = c.parent.parent;
        (!h || L.indexOf(h.tag_name) === -1) && (s = s || this._tag_stack.try_pop("p"));
      } else
        c.tag_name === "rp" || c.tag_name === "rt" ? (s = s || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), s = s || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : c.tag_name === "optgroup" ? s = s || this._tag_stack.try_pop("optgroup", ["select"]) : c.tag_name === "option" ? s = s || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : c.tag_name === "colgroup" ? s = s || this._tag_stack.try_pop("caption", ["table"]) : c.tag_name === "thead" ? (s = s || this._tag_stack.try_pop("caption", ["table"]), s = s || this._tag_stack.try_pop("colgroup", ["table"])) : c.tag_name === "tbody" || c.tag_name === "tfoot" ? (s = s || this._tag_stack.try_pop("caption", ["table"]), s = s || this._tag_stack.try_pop("colgroup", ["table"]), s = s || this._tag_stack.try_pop("thead", ["table"]), s = s || this._tag_stack.try_pop("tbody", ["table"])) : c.tag_name === "tr" ? (s = s || this._tag_stack.try_pop("caption", ["table"]), s = s || this._tag_stack.try_pop("colgroup", ["table"]), s = s || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (c.tag_name === "th" || c.tag_name === "td") && (s = s || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), s = s || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return c.parent = this._tag_stack.get_parser_token(), s;
    }
  }, He.Beautifier = E, He;
}
var qt;
function xu() {
  if (qt)
    return ye.exports;
  qt = 1;
  var e = yu().Beautifier, r = Mt().Options;
  function i(t, a, n, p) {
    var o = new e(t, a, n, p);
    return o.beautify();
  }
  return ye.exports = i, ye.exports.defaultOptions = function() {
    return new r();
  }, ye.exports;
}
var St;
function Cu() {
  if (St)
    return ne;
  St = 1;
  var e = Au(), r = Eu(), i = xu();
  function t(a, n, p, o) {
    return p = p || e, o = o || r, i(a, n, p, o);
  }
  return t.defaultOptions = i.defaultOptions, ne.js = e, ne.css = r, ne.html = t, ne;
}
(function(e) {
  function r(i, t, a) {
    var n = function(p, o) {
      return i.js_beautify(p, o);
    };
    return n.js = i.js_beautify, n.css = t.css_beautify, n.html = a.html_beautify, n.js_beautify = i.js_beautify, n.css_beautify = t.css_beautify, n.html_beautify = a.html_beautify, n;
  }
  (function(i) {
    var t = Cu();
    t.js_beautify = t.js, t.css_beautify = t.css, t.html_beautify = t.html, i.exports = r(t, t, t);
  })(e);
})(Lt);
var wu = Lt.exports, Be = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
Be.exports;
(function(e, r) {
  (function(i) {
    var t = r, a = e && e.exports == t && e, n = typeof Re == "object" && Re;
    (n.global === n || n.window === n) && (i = n);
    var p = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, o = /[\x01-\x7F]/g, l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, v = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, b = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, m = /["&'<>`]/g, E = {
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#x27;",
      "<": "&lt;",
      // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
      // following is not strictly necessary unless it’s part of a tag or an
      // unquoted attribute value. We’re only escaping it to support those
      // situations, and for XML support.
      ">": "&gt;",
      // In Internet Explorer ≤ 8, the backtick character can be used
      // to break out of (un)quoted attribute values or HTML comments.
      // See http://html5sec.org/#102, http://html5sec.org/#108, and
      // http://html5sec.org/#133.
      "`": "&#x60;"
    }, R = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, S = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, L = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, c = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, s = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, h = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, k = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], y = String.fromCharCode, O = {}, d = O.hasOwnProperty, A = function(B, q) {
      return d.call(B, q);
    }, f = function(B, q) {
      for (var P = -1, K = B.length; ++P < K; )
        if (B[P] == q)
          return !0;
      return !1;
    }, C = function(B, q) {
      if (!B)
        return q;
      var P = {}, K;
      for (K in q)
        P[K] = A(B, K) ? B[K] : q[K];
      return P;
    }, u = function(B, q) {
      var P = "";
      return B >= 55296 && B <= 57343 || B > 1114111 ? (q && w("character reference outside the permissible Unicode range"), "�") : A(h, B) ? (q && w("disallowed character reference"), h[B]) : (q && f(k, B) && w("disallowed character reference"), B > 65535 && (B -= 65536, P += y(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), P += y(B), P);
    }, g = function(B) {
      return "&#x" + B.toString(16).toUpperCase() + ";";
    }, D = function(B) {
      return "&#" + B + ";";
    }, w = function(B) {
      throw Error("Parse error: " + B);
    }, F = function(B, q) {
      q = C(q, F.options);
      var P = q.strict;
      P && S.test(B) && w("forbidden code point");
      var K = q.encodeEverything, Z = q.useNamedReferences, se = q.allowUnsafeSymbols, he = q.decimal ? D : g, ue = function(H) {
        return he(H.charCodeAt(0));
      };
      return K ? (B = B.replace(o, function(H) {
        return Z && A(b, H) ? "&" + b[H] + ";" : ue(H);
      }), Z && (B = B.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), Z && (B = B.replace(v, function(H) {
        return "&" + b[H] + ";";
      }))) : Z ? (se || (B = B.replace(m, function(H) {
        return "&" + b[H] + ";";
      })), B = B.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), B = B.replace(v, function(H) {
        return "&" + b[H] + ";";
      })) : se || (B = B.replace(m, ue)), B.replace(p, function(H) {
        var fe = H.charCodeAt(0), ke = H.charCodeAt(1), nt = (fe - 55296) * 1024 + ke - 56320 + 65536;
        return he(nt);
      }).replace(l, ue);
    };
    F.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var N = function(B, q) {
      q = C(q, N.options);
      var P = q.strict;
      return P && R.test(B) && w("malformed character reference"), B.replace(L, function(K, Z, se, he, ue, H, fe, ke, nt) {
        var de, ge, ot, lt, me, De;
        return Z ? (me = Z, c[me]) : se ? (me = se, De = he, De && q.isAttributeValue ? (P && De == "=" && w("`&` did not start a character reference"), K) : (P && w(
          "named character reference was not terminated by a semicolon"
        ), s[me] + (De || ""))) : ue ? (ot = ue, ge = H, P && !ge && w("character reference was not terminated by a semicolon"), de = parseInt(ot, 10), u(de, P)) : fe ? (lt = fe, ge = ke, P && !ge && w("character reference was not terminated by a semicolon"), de = parseInt(lt, 16), u(de, P)) : (P && w(
          "named character reference was not terminated by a semicolon"
        ), K);
      });
    };
    N.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var I = function(B) {
      return B.replace(m, function(q) {
        return E[q];
      });
    }, W = {
      version: "1.2.0",
      encode: F,
      decode: N,
      escape: I,
      unescape: N
    };
    if (t && !t.nodeType)
      if (a)
        a.exports = W;
      else
        for (var J in W)
          A(W, J) && (t[J] = W[J]);
    else
      i.he = W;
  })(Re);
})(Be, Be.exports);
var Bu = Be.exports;
const Gt = x.createContext({}), Tu = (e) => /* @__PURE__ */ x.createElement(Gt.Provider, { value: e }, e.children);
function Ur(e) {
  const { data: r, beautify: i } = e, t = X.getBlockByType(r.type);
  if (!t)
    throw new Error(`Block ${r.type} not found`);
  const a = Bu.unescape(
    Nt(
      /* @__PURE__ */ x.createElement(
        Tu,
        {
          dataSource: e.dataSource,
          mode: e.mode,
          context: e.context
        },
        t.render(e)
      )
    )
  );
  return i ? wu.html(a, { indent_size: 2 }) : a;
}
const zt = () => iu(Gt), ie = (e) => {
  const { data: r } = e, { mode: i, context: t, dataSource: a } = zt();
  if (r.data.hidden)
    return null;
  const n = X.getBlockByType(r.type);
  return n ? /* @__PURE__ */ x.createElement(x.Fragment, null, n.render($(M({}, e), { mode: i, context: t, dataSource: a }))) : null;
};
function G(e) {
  const {
    params: r,
    params: { data: i, idx: t, children: a, mode: n },
    tag: p,
    children: o
  } = e, l = i.children.length === 0 && gu(r);
  let v = o || a;
  if ((!v || Array.isArray(v) && v.length === 0) && i.children.length === 0 && (v = l), n === "testing" && p === "mj-image") {
    let b = i.attributes.src;
    if (b === "" || /{{([\s\S]+?)}}/g.test(b) || /\*\|([^\|\*]+)\|\*/g.test(b)) {
      const m = j(r, "data.attributes.src");
      return /* @__PURE__ */ x.createElement(x.Fragment, null, `<${p} ${et(m)} src="${Q(
        "IMAGE_59"
      )}">`, `</${p}>`);
    }
  }
  return /* @__PURE__ */ x.createElement(x.Fragment, null, `<${p} ${et(r)}>`, v || i.children.map((b, m) => /* @__PURE__ */ x.createElement(
    ie,
    $(M({
      key: m
    }, r), {
      idx: t ? st(t, m) : null,
      data: b
    })
  )), `</${p}>`);
}
const Ht = {
  get name() {
    return U("Wrapper");
  },
  type: _.WRAPPER,
  create: (e) => {
    const r = {
      type: _.WRAPPER,
      data: {
        value: {}
      },
      attributes: {
        padding: "20px 0px 20px 0px",
        border: "none",
        direction: "ltr",
        "text-align": "center"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.PAGE],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-wrapper" });
  }
};
function ku(e) {
  const r = e.data.value;
  return `
    <mj-html-attributes>
      ${[
    "content-background-color",
    "text-color",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "user-style",
    "responsive"
  ].filter((t) => r[t] !== void 0).map((t) => {
    const a = t, n = su(r[a]), p = n ? Object.keys(r[a]).map((o) => {
      const l = r[a][o];
      return `${o}="${tt(l) ? l.replace(/"/gm, "") : l}"`;
    }).join(" ") : `${t}="${r[a]}"`;
    return `<mj-html-attribute class="easy-email" multiple-attributes="${n}" attribute-name="${t}" ${p}></mj-html-attribute>`;
  }).join(`
`)}

    </mj-html-attributes>
  `;
}
class We {
  static setLocaleData(r) {
    this.localeData = r;
  }
  static translate(r, i) {
    const t = ae(this.localeData, r, r);
    if (!i)
      return t;
    const a = t.split("***");
    return a.splice(1, 0, i), /* @__PURE__ */ x.createElement(x.Fragment, null, a.map((n, p) => /* @__PURE__ */ x.createElement(x.Fragment, { key: p }, n)));
  }
}
ee(We, "localeData", {});
const U = We.translate.bind(We), Fu = {
  get name() {
    return U("Page");
  },
  type: _.PAGE,
  create: (e) => {
    const r = {
      type: _.PAGE,
      data: {
        value: {
          breakpoint: "480px",
          headAttributes: "",
          "font-size": "14px",
          "font-weight": "400",
          "line-height": "1.7",
          headStyles: [],
          fonts: [],
          responsive: !0,
          "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif",
          "text-color": "#000000"
        }
      },
      attributes: {
        "background-color": "#efeeea",
        width: "600px"
      },
      children: [Ht.create()]
    };
    return z(r, e);
  },
  validParentType: [],
  render(e) {
    var v, b;
    const { data: r } = e, i = ku(r), t = r.data.value, a = t.breakpoint ? `<mj-breakpoint width="${r.data.value.breakpoint}" />` : "", n = t.responsive ? "" : `<mj-raw>
            <meta name="viewport" />
           </mj-raw>
           <mj-style inline="inline">.mjml-body { width: ${r.attributes.width || "600px"}; margin: 0px auto; }</mj-style>`, p = ((v = t.headStyles) == null ? void 0 : v.map(
      (m) => `<mj-style ${m.inline ? 'inline="inline"' : ""}>${m.content}</mj-style>`
    ).join(`
`)) || "", o = t["user-style"] ? `<mj-style ${t["user-style"].inline ? 'inline="inline"' : ""}>${t["user-style"].content}</mj-style>` : "", l = t.extraHeadContent ? `<mj-raw>${t.extraHeadContent}</mj-raw>` : "";
    return /* @__PURE__ */ x.createElement(x.Fragment, null, `
          <mjml>
          <mj-head>
              ${i}
              ${n}
              ${p}
              ${o}
              ${a}
              ${l}
              ${(b = t.fonts) == null ? void 0 : b.filter(Boolean).map((m) => `<mj-font name="${m.name}" href="${m.href}" />`)}
            <mj-attributes>
              ${t.headAttributes}
              ${t["font-family"] ? `<mj-all font-family="${t["font-family"].replace(/"/gm, "")}" />` : ""}
              ${t["font-size"] ? `<mj-text font-size="${t["font-size"]}" />` : ""}
              ${t["text-color"] ? `<mj-text color="${t["text-color"]}" />` : ""}
        ${t["line-height"] ? `<mj-text line-height="${t["line-height"]}" />` : ""}
        ${t["font-weight"] ? `<mj-text font-weight="${t["font-weight"]}" />` : ""}
              ${t["content-background-color"] ? `<mj-wrapper background-color="${t["content-background-color"]}" />
             <mj-section background-color="${t["content-background-color"]}" />
            ` : ""}

            </mj-attributes>
          </mj-head>
          <mj-body ${et(e)}>`, r.children.map((m, E) => /* @__PURE__ */ x.createElement(
      ie,
      $(M({}, e), {
        idx: st(Qt(), E),
        key: E,
        data: m
      })
    )), "</mj-body></mjml > ");
  }
}, Ru = {
  get name() {
    return U("Section");
  },
  type: _.SECTION,
  create: (e) => {
    const r = {
      type: _.SECTION,
      data: {
        value: {
          noWrap: !1
        }
      },
      attributes: {
        padding: "20px 0px 20px 0px",
        "background-repeat": "repeat",
        "background-size": "auto",
        "background-position": "top center",
        border: "none",
        direction: "ltr",
        "text-align": "center"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.PAGE, _.WRAPPER],
  render(e) {
    return /* @__PURE__ */ x.createElement(
      G,
      {
        params: e,
        tag: "mj-section"
      }
    );
  }
}, Ou = {
  get name() {
    return U("Column");
  },
  type: _.COLUMN,
  create: (e) => {
    const r = {
      type: _.COLUMN,
      data: {
        value: {}
      },
      attributes: {
        padding: "0px 0px 0px 0px",
        border: "none",
        "vertical-align": "top"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.SECTION, _.GROUP],
  render(e) {
    return /* @__PURE__ */ x.createElement(
      G,
      {
        params: e,
        tag: "mj-column"
      }
    );
  }
}, qu = {
  get name() {
    return U("Text");
  },
  type: _.TEXT,
  create: (e) => {
    const r = {
      type: _.TEXT,
      data: {
        value: {
          content: U("Make it easy for everyone to compose emails!")
        }
      },
      attributes: {
        padding: "10px 25px 10px 25px",
        align: "left"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.COLUMN, _.HERO],
  render(e) {
    const { data: r } = e;
    return /* @__PURE__ */ x.createElement(
      G,
      {
        params: e,
        tag: "mj-text"
      },
      r.data.value.content
    );
  }
}, Su = {
  get name() {
    return U("Image");
  },
  type: _.IMAGE,
  create: (e) => {
    const r = {
      type: _.IMAGE,
      data: {
        value: {}
      },
      attributes: {
        align: "center",
        height: "auto",
        padding: "10px 25px 10px 25px",
        src: ""
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.COLUMN, _.HERO],
  render(e) {
    return /* @__PURE__ */ x.createElement(
      G,
      {
        params: e,
        tag: "mj-image"
      }
    );
  }
}, Nu = {
  get name() {
    return U("Group");
  },
  type: _.GROUP,
  create: (e) => {
    const r = {
      type: _.GROUP,
      data: {
        value: {}
      },
      attributes: {
        "vertical-align": "top",
        direction: "ltr"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.SECTION],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-group" });
  }
}, Lu = {
  get name() {
    return U("Button");
  },
  type: _.BUTTON,
  create: (e) => {
    const r = {
      type: _.BUTTON,
      data: {
        value: {
          content: "Button"
        }
      },
      attributes: {
        align: "center",
        "background-color": "#414141",
        color: "#ffffff",
        "font-weight": "normal",
        "border-radius": "3px",
        padding: "10px 25px 10px 25px",
        "inner-padding": "10px 25px 10px 25px",
        "line-height": "120%",
        target: "_blank",
        "vertical-align": "middle",
        border: "none",
        "text-align": "center",
        href: "#"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.COLUMN, _.HERO],
  render(e) {
    const { data: r } = e;
    return /* @__PURE__ */ x.createElement(
      G,
      {
        params: e,
        tag: "mj-button"
      },
      r.data.value.content
    );
  }
}, Pu = {
  get name() {
    return U("Divider");
  },
  type: _.DIVIDER,
  create: (e) => {
    const r = {
      type: _.DIVIDER,
      data: {
        value: {}
      },
      attributes: {
        align: "center",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#C9CCCF",
        padding: "10px 0px 10px 0px"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.COLUMN, _.HERO],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-divider" });
  }
}, Iu = {
  get name() {
    return U("Spacer");
  },
  type: _.SPACER,
  create: (e) => {
    const r = {
      type: _.SPACER,
      data: {
        value: {}
      },
      attributes: {
        height: "20px"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.COLUMN, _.HERO],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-spacer" });
  }
};
function pe(e, r) {
  return nu(e, r, (i, t) => ou(t) ? t : void 0);
}
const Uu = {
  get name() {
    return U("Carousel");
  },
  type: _.CAROUSEL,
  create: (e) => {
    const r = {
      type: _.CAROUSEL,
      data: {
        value: {
          images: [
            {
              src: Q("IMAGE_15"),
              target: "_blank"
            },
            {
              src: Q("IMAGE_16"),
              target: "_blank"
            },
            {
              src: Q("IMAGE_17"),
              target: "_blank"
            }
          ]
        }
      },
      attributes: {
        align: "center",
        "left-icon": "https://i.imgur.com/xTh3hln.png",
        "right-icon": "https://i.imgur.com/os7o9kz.png",
        "icon-width": "44px",
        thumbnails: "visible"
      },
      children: []
    };
    return pe(r, e);
  },
  validParentType: [_.COLUMN],
  render(e) {
    const { data: r } = e, i = r.data.value.images.map((t) => `
      <mj-carousel-image ${Object.keys(t).filter((n) => n !== "content" && t[n] !== "").map((n) => `${n}="${t[n]}"`).join(" ")} />
      `).join(`
`);
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-carousel" }, i);
  }
}, ju = {
  get name() {
    return U("Hero");
  },
  type: _.HERO,
  create: (e) => {
    const r = {
      type: _.HERO,
      data: {
        value: {}
      },
      attributes: {
        "background-color": "#ffffff",
        "background-position": "center center",
        mode: "fluid-height",
        padding: "100px 0px 100px 0px",
        "vertical-align": "top",
        "background-url": Q("IMAGE_31")
      },
      children: [
        {
          type: "text",
          data: {
            value: {
              content: "We Serve Healthy &amp; Delicious Foods"
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "center",
            color: "#ffffff",
            "font-size": "45px",
            "line-height": "45px"
          },
          children: []
        },
        {
          type: "text",
          data: {
            value: {
              content: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br>"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#414141",
            color: "#ffffff",
            "font-weight": "normal",
            "border-radius": "3px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "1.5",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#",
            "font-size": "14px"
          },
          children: []
        },
        {
          type: "button",
          data: {
            value: {
              content: "Get Your Order Here!"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#f3a333",
            color: "#ffffff",
            "font-size": "13px",
            "font-weight": "normal",
            "border-radius": "30px",
            padding: "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "120%",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#"
          },
          children: []
        }
      ]
    };
    return pe(r, e);
  },
  validParentType: [_.PAGE, _.WRAPPER],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-hero" });
  }
}, Vu = {
  get name() {
    return U("Navbar");
  },
  type: _.NAVBAR,
  create: (e) => {
    const r = {
      type: _.NAVBAR,
      data: {
        value: {
          links: [
            {
              href: "/gettings-started-onboard",
              content: "Getting started",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            },
            {
              href: "/try-it-live",
              content: "Try it live",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            },
            {
              href: "/templates",
              content: "Templates",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            },
            {
              href: "/components",
              content: "Components",
              color: "#1890ff",
              "font-size": "13px",
              target: "_blank",
              padding: "15px 10px"
            }
          ]
        }
      },
      attributes: {
        align: "center"
      },
      children: []
    };
    return pe(r, e);
  },
  validParentType: [_.COLUMN, _.HERO],
  render(e) {
    const { data: r } = e, i = r.data.value.links.map((t, a) => `
          <mj-navbar-link ${Object.keys(t).filter((p) => p !== "content" && t[p] !== "").map((p) => `${p}="${t[p]}"`).join(" ")}>${t.content}</mj-navbar-link>
          `).join(`
`);
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-navbar" }, i);
  }
}, Mu = {
  get name() {
    return U("Social");
  },
  type: _.SOCIAL,
  create: (e) => {
    const r = {
      type: _.SOCIAL,
      data: {
        value: {
          elements: [
            {
              href: "#",
              target: "_blank",
              src: Q("IMAGE_02"),
              content: "Facebook"
            },
            {
              href: "#",
              target: "_blank",
              src: Q("IMAGE_03"),
              content: "Google"
            },
            {
              href: "",
              target: "_blank",
              src: Q("IMAGE_04"),
              content: "Twitter"
            }
          ]
        }
      },
      attributes: {
        align: "center",
        color: "#333333",
        mode: "horizontal",
        "font-size": "13px",
        "font-weight": "normal",
        "border-radius": "3px",
        padding: "10px 25px 10px 25px",
        "inner-padding": "4px 4px 4px 4px",
        "line-height": "22px",
        "text-padding": "4px 4px 4px 0px",
        "icon-padding": "0px",
        "icon-size": "20px"
      },
      children: []
    };
    return pe(r, e);
  },
  validParentType: [_.COLUMN],
  render(e) {
    const { data: r } = e, i = r.data.value.elements.map((t) => `
          <mj-social-element ${Object.keys(t).filter((n) => n !== "content" && t[n] !== "").map((n) => `${n}="${t[n]}"`).join(" ")}>${t.content}</mj-social-element>
          `).join(`
`);
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-social" }, i);
  }
}, Gu = {
  get name() {
    return U("Raw");
  },
  type: _.RAW,
  create: (e) => {
    const r = {
      type: _.RAW,
      data: {
        value: {
          content: "<% if (user) { %>"
        }
      },
      attributes: {},
      children: []
    };
    return z(r, e);
  },
  validParentType: [
    _.PAGE,
    _.WRAPPER,
    _.SECTION,
    _.GROUP,
    _.COLUMN,
    _.HERO
  ],
  render(e) {
    return /* @__PURE__ */ x.createElement(
      G,
      {
        params: e,
        tag: "mj-raw"
      },
      e.data.data.value.content
    );
  }
}, zu = {
  get name() {
    return U("Template");
  },
  type: _.TEMPLATE,
  create: (e) => {
    const r = {
      type: _.TEMPLATE,
      data: {
        value: {
          idx: ""
        }
      },
      attributes: {},
      children: []
    };
    return z(r, e);
  },
  validParentType: [],
  render(e) {
    const { data: r } = e;
    return /* @__PURE__ */ x.createElement(x.Fragment, null, `
          ${r.children.map((i) => x.createElement(ie, $(M({}, e), { data: i })))}
        `);
  }
}, Ke = {
  get name() {
    return U("Accordion element");
  },
  type: _.ACCORDION_ELEMENT,
  create: (e) => {
    const r = {
      type: _.ACCORDION_ELEMENT,
      data: {
        value: {}
      },
      attributes: {
        "icon-align": "middle",
        "icon-height": "32px",
        "icon-width": "32px",
        "icon-position": "right"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.ACCORDION],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-accordion-element" });
  }
}, Xe = {
  get name() {
    return U("Accordion title");
  },
  type: _.ACCORDION_TITLE,
  create: (e) => {
    const r = {
      type: _.ACCORDION_TITLE,
      data: {
        value: {
          content: "Why use an accordion?"
        }
      },
      attributes: {
        "font-size": "13px",
        padding: "16px 16px 16px 16px"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.ACCORDION],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-accordion-title" }, e.data.data.value.content);
  }
}, Qe = {
  get name() {
    return U("Accordion text");
  },
  type: _.ACCORDION_TEXT,
  create: (e) => {
    const r = {
      type: _.ACCORDION_TEXT,
      data: {
        value: {
          content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way"
        }
      },
      attributes: {
        "font-size": "13px",
        padding: "16px 16px 16px 16px",
        "line-height": "1"
      },
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.ACCORDION],
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-accordion-text" }, e.data.data.value.content);
  }
}, Hu = {
  get name() {
    return U("Accordion");
  },
  type: _.ACCORDION,
  validParentType: [_.COLUMN],
  create: (e) => {
    const r = {
      type: _.ACCORDION,
      data: {
        value: {}
      },
      attributes: {
        "icon-height": "32px",
        "icon-width": "32px",
        "icon-align": "middle",
        "icon-position": "right",
        "icon-unwrapped-url": Q("IMAGE_09"),
        "icon-wrapped-url": Q("IMAGE_10"),
        padding: "10px 25px 10px 25px",
        border: "1px solid #d9d9d9"
      },
      children: [
        Ke.create({
          children: [
            Xe.create({
              data: {
                value: {
                  content: "Why use an accordion?"
                }
              }
            }),
            Qe.create({
              data: {
                value: {
                  content: "Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way."
                }
              }
            })
          ]
        }),
        Ke.create({
          children: [
            Xe.create({
              data: {
                value: {
                  content: "How it works"
                }
              }
            }),
            Qe.create({
              data: {
                value: {
                  content: "Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once."
                }
              }
            })
          ]
        })
      ]
    };
    return pe(r, e);
  },
  render(e) {
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-accordion" });
  }
}, $u = {
  get name() {
    return U("Table");
  },
  type: _.TABLE,
  create: (e) => {
    const r = {
      type: _.TABLE,
      data: {
        value: {
          content: ""
        }
      },
      attributes: {},
      children: []
    };
    return z(r, e);
  },
  validParentType: [_.COLUMN],
  render(e) {
    const { data: r } = e;
    return /* @__PURE__ */ x.createElement(G, { params: e, tag: "mj-table" }, r.data.value.content);
  }
}, $t = {
  [_.PAGE]: Fu,
  [_.SECTION]: Ru,
  [_.COLUMN]: Ou,
  [_.TEXT]: qu,
  [_.IMAGE]: Su,
  [_.GROUP]: Nu,
  [_.BUTTON]: Lu,
  [_.DIVIDER]: Pu,
  [_.WRAPPER]: Ht,
  [_.SPACER]: Iu,
  [_.RAW]: Gu,
  [_.CAROUSEL]: Uu,
  [_.HERO]: ju,
  [_.NAVBAR]: Vu,
  [_.SOCIAL]: Mu,
  // spacial block, render string
  [_.TEMPLATE]: zu,
  // TODO:
  [_.ACCORDION]: Hu,
  [_.ACCORDION_ELEMENT]: Ke,
  [_.ACCORDION_TITLE]: Xe,
  [_.ACCORDION_TEXT]: Qe,
  [_.TABLE]: $u
}, Wu = fu;
function Wt(e) {
  const r = Object.values($t).find(
    (i) => i.type === e.baseType
  );
  if (!r)
    throw new Error(`Can not find ${e.baseType}`);
  return Wu({
    get name() {
      return r.name;
    },
    type: e.type,
    validParentType: e.validParentType,
    create: (i) => {
      const t = $(M({}, r.create()), {
        type: e.type
      });
      return z(t, i);
    },
    render: (i) => {
      const { data: t, idx: a, mode: n, context: p, dataSource: o } = i, { iteration: l, condition: v } = t.data.value, b = (E, R) => e.getContent({
        index: R,
        data: t,
        idx: E,
        mode: n,
        context: p,
        dataSource: o
      });
      let m = b(a, 0);
      return n === "testing" ? /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(x.Fragment, { key: "children" }, m), new Array(((l == null ? void 0 : l.mockQuantity) || 1) - 1).fill(!0).map((E, R) => /* @__PURE__ */ x.createElement(x.Fragment, { key: R }, b(a, R + 1)))) : (v && v.enabled && (m = Ze.generateTagTemplate("condition")(
        v,
        m
      )), l && l.enabled && (m = Ze.generateTagTemplate("iteration")(
        l,
        m
      )), m);
    }
  });
}
var Ye = /* @__PURE__ */ ((e) => (e.TRUTHY = "truthy", e.FALSY = "falsy", e.EQUAL = "==", e.NOT_EQUAL = "!=", e.GREATER = ">", e.GREATER_OR_EQUAL = ">=", e.LESS = "<", e.LESS_OR_EQUAL = "<=", e))(Ye || {}), Ku = /* @__PURE__ */ ((e) => (e.AND = "and", e.OR = "or", e))(Ku || {});
function V({
  idx: e,
  value: r,
  type: i,
  attributes: t,
  children: a
}) {
  const { mode: n } = zt(), p = X.getBlockByType(i);
  if (!p)
    throw new Error(`Can no find ${i}`);
  const o = au(() => typeof a == "string" ? r ? (lu(r, "content", a), r) : {
    content: a
  } : r, [a, r]);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, p.render({
    idx: e,
    mode: n,
    data: {
      type: p.type,
      data: {
        value: o
      },
      attributes: t,
      children: []
    },
    children: a
  }));
}
function Xu(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.PAGE
    },
    e.children
  );
}
function Kt(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.SECTION
    },
    e.children
  );
}
function Xt(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.COLUMN
    },
    e.children
  );
}
function Qu(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.TEXT
    },
    e.children
  );
}
function Yu(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.IMAGE
    },
    e.children
  );
}
function Ju(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.GROUP
    },
    e.children
  );
}
function Zu(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.BUTTON
    },
    e.children
  );
}
function er(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.DIVIDER
    },
    e.children
  );
}
function tr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.WRAPPER
    },
    e.children
  );
}
function ur(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.SPACER
    },
    e.children
  );
}
function le(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.RAW
    },
    e.children
  );
}
function rr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.ACCORDION
    },
    e.children
  );
}
function ir(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.ACCORDION_ELEMENT
    },
    e.children
  );
}
function ar(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.ACCORDION_TITLE
    },
    e.children
  );
}
function sr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.ACCORDION_TEXT
    },
    e.children
  );
}
function nr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.CAROUSEL
    },
    e.children
  );
}
function or(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.HERO
    },
    e.children
  );
}
function lr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.NAVBAR
    },
    e.children
  );
}
function cr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.SOCIAL
    },
    e.children
  );
}
function pr(e) {
  return /* @__PURE__ */ x.createElement(
    V,
    {
      attributes: j(e, ["data", "children", "value"]),
      value: e.value,
      type: _.TABLE
    },
    e.children
  );
}
function _r(e) {
  return e.children;
}
const jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Accordion: rr,
  AccordionElement: ir,
  AccordionText: sr,
  AccordionTitle: ar,
  BasicBlock: G,
  BlockRenderer: ie,
  Button: Zu,
  Carousel: nr,
  Column: Xt,
  Divider: er,
  Group: Ju,
  Hero: or,
  Image: Yu,
  MjmlBlock: V,
  Navbar: lr,
  Page: Xu,
  Raw: le,
  Section: Kt,
  Social: cr,
  Spacer: ur,
  Table: pr,
  Template: _r,
  Text: Qu,
  Wrapper: tr
}, Symbol.toStringTag, { value: "Module" }));
function te(...e) {
  return e.filter((r) => typeof r == "string").join(" ");
}
function hr(e, r) {
  let i = -1;
  const t = X.getAutoCompletePath(e, r);
  return t ? t.length + 1 : i;
}
function Qt() {
  return "content";
}
function st(e, r) {
  return `${e}.children.[${r}]`;
}
function Yt(e) {
  return `node-idx-${e}`;
}
function Je(e) {
  return `node-type-${e}`;
}
function Vr(e) {
  var r;
  return (r = Array.from(e).find((i) => i.includes("node-idx-"))) == null ? void 0 : r.replace("node-idx-", "");
}
function Mr(e) {
  var r;
  return (r = Array.from(tt(e) ? e.split(" ") : e).find((i) => i.includes("node-type-"))) == null ? void 0 : r.replace("node-type-", "");
}
const fr = (e) => {
  var r;
  return Number((r = /\.\[(\d+)\]$/.exec(e)) == null ? void 0 : r[1]) || 0;
}, ce = (e) => {
  var r;
  if (e !== Qt())
    return (r = /(.*)\.children\.\[\d+\]$/.exec(e)) == null ? void 0 : r[1];
}, Gr = (e, r) => ae(e, r), dr = (e, r) => ae(e, ce(r) || ""), zr = (e, r) => e.replace(/\[(\d+)\]$/, (i, t) => Number(t) + r < 0 ? "[0]" : `[${Number(t) + r}]`), Hr = (e, r, i) => {
  if (!r)
    return null;
  let t = ce(r);
  for (; t; ) {
    const a = ae(e, t);
    if (a && a.type === i)
      return a;
    t = ce(r);
  }
  return null;
}, $r = (e, r, i) => {
  let t = r;
  const a = X.getBlockByType(i);
  if (!a)
    return null;
  for (; t; ) {
    const n = ae(e, t);
    if (hr(a.type, n.type) > 0)
      return {
        parent: n,
        parentIdx: t
      };
    t = ce(t);
  }
  return null;
}, Wr = (e, r, i) => {
  let t = "", a = r;
  for (; a; ) {
    const n = ae(e, a);
    if (n && n.type === i)
      return {
        insertIndex: t ? fr(t) : n.children.length - 1,
        parentIdx: a,
        parent: n
      };
    t = a, a = ce(a);
  }
  return null;
}, Kr = (e) => X.getBlocks().filter(
  (r) => r.validParentType.includes(e)
);
function Jt(e, r) {
  return te(
    "email-block",
    e && Yt(e),
    Je(r)
  );
}
function Y(e) {
  return Wt($(M({}, e), {
    validParentType: [
      _.PAGE,
      _.WRAPPER,
      _.COLUMN,
      _.GROUP,
      _.HERO,
      T.WRAPPER,
      T.COLUMN,
      T.GROUP,
      T.HERO
    ],
    getContent: (r) => {
      const { data: i, idx: t, mode: a, context: n, index: p } = r, o = a === "testing" ? te(
        p === 0 && t && Jt(t, i.type)
      ) : "", l = $(M({}, i), {
        type: e.baseType,
        attributes: $(M({}, i.attributes), {
          "css-class": te(
            i.attributes["css-class"],
            o
          )
        })
      }), v = X.getBlockByType(l.type);
      if (!v)
        throw new Error(`Can not find ${l.type}`);
      const b = v == null ? void 0 : v.render($(M({}, r), { data: l, idx: t })), m = dr({ content: n }, t);
      return m && (m.type === _.PAGE || m.type === _.WRAPPER || m.type === T.WRAPPER) ? /* @__PURE__ */ x.createElement(Kt, { padding: "0px", "text-align": "left" }, /* @__PURE__ */ x.createElement(Xt, null, b)) : b;
    }
  }));
}
function _e(e) {
  return Wt($(M({}, e), {
    getContent: (r) => {
      const { data: i, idx: t, mode: a, index: n } = r, { iteration: p } = i.data.value, o = $(M({}, i), {
        type: e.baseType
      });
      i.type === T.COLUMN && (p != null && p.enabled) && (i.attributes.width = i.attributes.width || "100%");
      const l = a === "testing" ? te(
        n === 0 && t && Jt(t, i.type)
      ) : "";
      return /* @__PURE__ */ x.createElement(
        ie,
        {
          idx: null,
          data: $(M({}, o), {
            attributes: $(M({}, o.attributes), {
              "css-class": te(
                i.attributes["css-class"],
                l
              )
            })
          })
        },
        o.children.map((v, b) => /* @__PURE__ */ x.createElement(
          ie,
          $(M({
            key: b
          }, r), {
            data: v,
            idx: t ? st(t, b) : null
          })
        ))
      );
    }
  }));
}
const gr = Y({
  type: T.TEXT,
  baseType: _.TEXT
}), mr = Y({
  type: T.BUTTON,
  baseType: _.BUTTON
}), Dr = Y({
  type: T.IMAGE,
  baseType: _.IMAGE
}), br = Y({
  type: T.DIVIDER,
  baseType: _.DIVIDER
}), Ar = Y({
  type: T.SPACER,
  baseType: _.SPACER
}), vr = Y({
  type: T.NAVBAR,
  baseType: _.NAVBAR
}), Er = Y({
  type: T.ACCORDION,
  baseType: _.ACCORDION
}), yr = Y({
  type: T.CAROUSEL,
  baseType: _.CAROUSEL
}), xr = Y({
  type: T.SOCIAL,
  baseType: _.SOCIAL
}), Cr = _e({
  type: T.WRAPPER,
  baseType: _.WRAPPER,
  validParentType: [_.PAGE]
}), wr = _e({
  type: T.SECTION,
  baseType: _.SECTION,
  validParentType: [_.PAGE, _.WRAPPER, T.WRAPPER]
}), Br = _e({
  type: T.GROUP,
  baseType: _.GROUP,
  validParentType: [_.SECTION, T.SECTION]
}), Tr = _e({
  type: T.COLUMN,
  baseType: _.COLUMN,
  validParentType: [
    _.SECTION,
    T.SECTION,
    _.GROUP,
    T.GROUP
  ]
}), kr = _e({
  type: T.HERO,
  baseType: _.HERO,
  validParentType: [
    _.WRAPPER,
    T.WRAPPER,
    _.PAGE
  ]
}), Fr = {
  [T.TEXT]: gr,
  [T.BUTTON]: mr,
  [T.IMAGE]: Dr,
  [T.DIVIDER]: br,
  [T.SPACER]: Ar,
  [T.NAVBAR]: vr,
  [T.ACCORDION]: Er,
  [T.CAROUSEL]: yr,
  [T.SOCIAL]: xr,
  [T.WRAPPER]: Cr,
  [T.SECTION]: wr,
  [T.GROUP]: Br,
  [T.COLUMN]: Tr,
  [T.HERO]: kr
};
class X {
  static setAutoCompletePath() {
    const r = {}, i = (t, a, n) => {
      const p = this.getBlockByType(t);
      if (!p)
        throw new Error(`Can you register ${t} block`);
      const o = [...n, t];
      return p.validParentType.length === 0 && a.push(o), p.validParentType.map((l) => i(l, a, o));
    };
    return Object.values(this.blocksMap).forEach((t) => {
      r[t.type] = [], i(t.type, r[t.type], []);
    }), r;
  }
  static getBlocks() {
    return Object.values(this.blocksMap);
  }
  static registerBlocks(r) {
    this.blocksMap = M(M({}, this.blocksMap), r), this.autoCompletePath = this.setAutoCompletePath();
  }
  static getBlockByType(r, i) {
    return this.blocksMap[r];
  }
  static getBlocksByType(r) {
    return r.map((i) => Object.values(this.blocksMap).find((a) => a.type === i));
  }
  static getAutoCompleteFullPath() {
    return Object.keys(this.autoCompletePath).length === 0 && (this.autoCompletePath = this.setAutoCompletePath()), this.autoCompletePath;
  }
  static getAutoCompletePath(r, i) {
    const t = this.getBlockByType(r);
    if (!t)
      throw new Error(`Can you register ${r} block`);
    if (t.validParentType.includes(i))
      return [];
    const a = this.getAutoCompleteFullPath()[r].find(
      (p) => p.filter((o, l) => l !== 0).includes(i)
    );
    if (!a)
      return null;
    const n = a.findIndex((p) => p === i);
    return a.slice(1, n);
  }
}
ee(X, "blocksMap", M(M({}, $t), Fr)), ee(X, "autoCompletePath", {});
function Xr(e) {
  try {
    if (e.attributes && e.children && e.data && e.type && X.getBlockByType(e.type))
      return !0;
  } catch (r) {
  }
  return !1;
}
function Qr(e) {
  return JSON.parse(cu(Nt(e)));
}
function Yr(e, r, i) {
  const t = X.getBlockByType(e, i);
  if (t)
    return t.create(r);
  throw new Error(`No match \`${e}\` block`);
}
function Rr(e, r) {
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(le, null, `
        <!-- htmlmin:ignore -->
        {% for ${e.itemName} in ${e.dataSource} ${e.limit ? `limit:${e.limit}` : ""} %}
        <!-- htmlmin:ignore -->
        `), r, /* @__PURE__ */ x.createElement(le, null, " <!-- htmlmin:ignore -->{% endfor %}  <!-- htmlmin:ignore -->"));
}
function Or(e, r) {
  const { symbol: i, groups: t } = e, a = (v) => v.operator === Ye.TRUTHY ? v.left : v.operator === Ye.FALSY ? `${v.left} == nil or ${v.left} == false` : v.left + " " + v.operator + " " + (pu(v.right) ? v.right : `"${v.right}"`), n = _u(), p = t.map((v, b) => `con_${b}_${n}`), o = t.map((v, b) => `{% assign ${p[b]} = ${v.groups.map(a).join(` ${v.symbol} `)} %}`).join(`
`), l = p.join(` ${i} `);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(le, null, `
        <!-- htmlmin:ignore -->
        ${o}
        {% if ${l} %}
        <!-- htmlmin:ignore -->
        `), r, /* @__PURE__ */ x.createElement(le, null, `
        <!-- htmlmin:ignore -->
        {% endif %}
        <!-- htmlmin:ignore -->
        `));
}
class Ze {
  static setTag(r) {
    this.tags[r.name] = r.templateGenerateFn;
  }
  static generateTagTemplate(r) {
    return this.tags[r];
  }
}
ee(Ze, "tags", {
  iteration: Rr,
  condition: Or
});
function Jr(e) {
  return Object.values(T).includes(e);
}
function et(e) {
  const { data: r, idx: i } = e, t = e.mode === "testing", a = M({}, r.attributes), n = t ? e.keepClassName : !1;
  t && i && (a["css-class"] = te(
    a["css-class"],
    hu,
    Yt(i),
    Je(r.type)
  )), n && (a["css-class"] = te(
    a["css-class"],
    Je(r.type)
  ));
  let p = "";
  for (let o in a) {
    const v = a[o];
    if (tt(v) && v) {
      const b = " ";
      p += `${o}="${v.replace(/"/gm, "")}"` + b;
    }
  }
  return p;
}
export {
  T as AdvancedType,
  _ as BasicType,
  X as BlockManager,
  hu as EMAIL_BLOCK_CLASS_NAME,
  We as I18nManager,
  Ce as ImageManager,
  Ur as JsonToMjml,
  Ir as MERGE_TAG_CLASS_NAME,
  Ye as Operator,
  Ku as OperatorSymbol,
  Ze as TemplateEngineManager,
  Fr as advancedBlocks,
  hr as ancestorOf,
  jr as components,
  fu as createBlock,
  Yr as createBlockDataByType,
  Wu as createCustomBlock,
  et as getAdapterAttributesString,
  st as getChildIdx,
  Q as getImg,
  fr as getIndexByIdx,
  Yt as getNodeIdxClassName,
  Vr as getNodeIdxFromClassName,
  Je as getNodeTypeClassName,
  Mr as getNodeTypeFromClassName,
  Qt as getPageIdx,
  Wr as getParenRelativeByType,
  dr as getParentByIdx,
  Hr as getParentByType,
  ce as getParentIdx,
  Jt as getPreviewClassName,
  $r as getSameParent,
  zr as getSiblingIdx,
  Kr as getValidChildBlocks,
  Gr as getValueByIdx,
  Jr as isAdvancedBlock,
  Xr as isValidBlockData,
  pe as mergeBlock,
  Qr as parseReactBlockToBlockData,
  $t as standardBlocks,
  U as t
};
//# sourceMappingURL=index.es.js.map
