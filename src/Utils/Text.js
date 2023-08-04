import { emojiExp, getText } from "./Break.js";

let _document,
  _window,
  _coreInitted,
  _stripExp = /(?:\r|\n|\t\t)/g,
  _multipleSpacesExp = /(?:\s\s+)/g,
  _initCore = () => {
    _document = document;
    _window = window;
    _coreInitted = 1;
  },
  _bonusValidated = 1,
  _getComputedStyle = (element) => _window.getComputedStyle(element),
  _isArray = Array.isArray,
  _slice = [].slice,
  _toArray = (value, leaveStrings) => {
    let type;
    return _isArray(value)
      ? value
      : (type = typeof value) === "string" && !leaveStrings && value
      ? _slice.call(_document.querySelectorAll(value), 0)
      : value && type === "object" && "length" in value
      ? _slice.call(value, 0)
      : value
      ? [value]
      : [];
  },
  _isAbsolute = (vars) => vars.position === "absolute" || vars.absolute === true,
  _findSpecialChars = (text, chars) => {
    let i = chars.length,
      s;
    while (--i > -1) {
      s = chars[i];
      if (text.substr(0, s.length) === s) {
        return s.length;
      }
    }
  },
  customStyle = " style='position:relative;display:inline-block;'",
  cssClass = (cssClass = "", tag) => {
    let iterate = ~cssClass.indexOf("++"),
      num = 1;
    if (iterate) {
      cssClass = cssClass.split("++").join("");
    }
    return () => "<" + tag + customStyle + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
  },
  _swapText = (element, oldText, newText) => {
    let type = element.nodeType;
    if (type === 1 || type === 9 || type === 11) {
      for (element = element.firstChild; element; element = element.nextSibling) {
        _swapText(element, oldText, newText);
      }
    } else if (type === 3 || type === 4) {
      element.nodeValue = element.nodeValue.split(oldText).join(newText);
    }
  },
  _pushReversed = (a, merge) => {
    let i = merge.length;
    while (--i > -1) {
      a.push(merge[i]);
    }
  },
  _isBeforeWordDelimiter = (e, root, wordDelimiter) => {
    let next;
    while (e && e !== root) {
      next = e._next || e.nextSibling;
      if (next) {
        return next.textContent.charAt(0) === wordDelimiter;
      }
      e = e.parentNode || e._parent;
    }
  },
  _deWordify = (e) => {
    let children = _toArray(e.childNodes),
      l = children.length,
      i,
      child;
    for (i = 0; i < l; i++) {
      child = children[i];
      if (child._isSplit) {
        _deWordify(child);
      } else {
        if (i && child.previousSibling.nodeType === 3) {
          child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
        } else if (child.nodeType !== 3) {
          e.insertBefore(child.firstChild, child);
        }
        e.removeChild(child);
      }
    }
  },
  _getStyleAsNumber = (name, computedStyle) => parseFloat(computedStyle[name]) || 0,
  _setPositionsAfterSplit = (element, vars, allChars, allWords, allLines, origWidth, origHeight) => {
    let cs = _getComputedStyle(element),
      paddingLeft = _getStyleAsNumber("paddingLeft", cs),
      lineOffsetY = -999,
      borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs),
      borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs),
      padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs),
      padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs),
      lineThreshold = _getStyleAsNumber("fontSize", cs) * 0.2,
      textAlign = cs.textAlign,
      charArray = [],
      wordArray = [],
      lineArray = [],
      wordDelimiter = vars.wordDelimiter || " ",
      tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
      types = vars.type || vars.split || "chars,words,lines",
      lines = allLines && ~types.indexOf("lines") ? [] : null,
      words = ~types.indexOf("words"),
      chars = ~types.indexOf("chars"),
      absolute = _isAbsolute(vars),
      linesClass = vars.linesClass,
      iterateLine = ~(linesClass || "").indexOf("++"),
      spaceNodesToRemove = [],
      i,
      j,
      l,
      node,
      nodes,
      isChild,
      curLine,
      addWordSpaces,
      style,
      lineNode,
      lineWidth,
      offset;
    if (iterateLine) {
      linesClass = linesClass.split("++").join("");
    }

    j = element.getElementsByTagName("*");
    l = j.length;
    nodes = [];
    for (i = 0; i < l; i++) {
      nodes[i] = j[i];
    }

    if (lines || absolute) {
      for (i = 0; i < l; i++) {
        node = nodes[i];
        isChild = node.parentNode === element;
        if (isChild || absolute || (chars && !words)) {
          offset = node.offsetTop;
          if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
            curLine = [];
            lines.push(curLine);
            lineOffsetY = offset;
          }
          if (absolute) {
            node._x = node.offsetLeft;
            node._y = offset;
            node._w = node.offsetWidth;
            node._h = node.offsetHeight;
          }
          if (lines) {
            if (
              (node._isSplit && isChild) ||
              (!chars && isChild) ||
              (words && isChild) ||
              (!words && node.parentNode.parentNode === element && !node.parentNode._isSplit)
            ) {
              curLine.push(node);
              node._x -= paddingLeft;
              if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                node._wordEnd = true;
              }
            }
            if (node.nodeName === "BR" && ((node.nextSibling && node.nextSibling.nodeName === "BR") || i === 0)) {
              lines.push([]);
            }
          }
        }
      }
    }

    for (i = 0; i < l; i++) {
      node = nodes[i];
      isChild = node.parentNode === element;
      if (node.nodeName === "BR") {
        if (lines || absolute) {
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
          nodes.splice(i--, 1);
          l--;
        } else if (!words) {
          element.appendChild(node);
        }
        continue;
      }

      if (absolute) {
        style = node.style;
        if (!words && !isChild) {
          node._x += node.parentNode._x;
          node._y += node.parentNode._y;
        }
        style.left = node._x + "px";
        style.top = node._y + "px";
        style.position = "absolute";
        style.display = "block";
        style.width = node._w + 1 + "px";
        style.height = node._h + "px";
      }

      if (!words && chars) {
        if (node._isSplit) {
          node._next = node.nextSibling;
          node.parentNode.appendChild(node);
        } else if (node.parentNode._isSplit) {
          node._parent = node.parentNode;
          if (!node.previousSibling && node.firstChild) {
            node.firstChild._isFirst = true;
          }
          if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
            spaceNodesToRemove.push(node.nextSibling);
          }
          node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
          node.parentNode.removeChild(node);
          nodes.splice(i--, 1);
          l--;
        } else if (!isChild) {
          offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
          if (node.parentNode._parent) {
            node.parentNode._parent.appendChild(node);
          }
          if (offset) {
            node.parentNode.appendChild(_document.createTextNode(" "));
          }
          if (tag === "span") {
            node.style.display = "inline";
          }
          charArray.push(node);
        }
      } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
        wordArray.push(node);
      } else if (chars && !node._isSplit) {
        if (tag === "span") {
          node.style.display = "inline";
        }
        charArray.push(node);
      }
    }

    i = spaceNodesToRemove.length;
    while (--i > -1) {
      spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
    }

    if (lines) {
      if (absolute) {
        lineNode = _document.createElement(tag);
        element.appendChild(lineNode);
        lineWidth = lineNode.offsetWidth + "px";
        offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
        element.removeChild(lineNode);
      }
      style = element.style.cssText;
      element.style.cssText = "display:none;";
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      addWordSpaces = wordDelimiter === " " && (!absolute || (!words && !chars));
      for (i = 0; i < lines.length; i++) {
        curLine = lines[i];
        lineNode = _document.createElement(tag);
        lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
        if (linesClass) {
          lineNode.className = linesClass + (iterateLine ? i + 1 : "");
        }
        lineArray.push(lineNode);
        l = curLine.length;
        for (j = 0; j < l; j++) {
          if (curLine[j].nodeName !== "BR") {
            node = curLine[j];
            lineNode.appendChild(node);
            if (addWordSpaces && node._wordEnd) {
              lineNode.appendChild(_document.createTextNode(" "));
            }
            if (absolute) {
              if (j === 0) {
                lineNode.style.top = node._y + "px";
                lineNode.style.left = paddingLeft + offset + "px";
              }
              node.style.top = "0px";
              if (offset) {
                node.style.left = node._x - offset + "px";
              }
            }
          }
        }
        if (l === 0) {
          lineNode.innerHTML = "&nbsp;";
        } else if (!words && !chars) {
          _deWordify(lineNode);
          _swapText(lineNode, String.fromCharCode(160), " ");
        }
        if (absolute) {
          lineNode.style.width = lineWidth;
          lineNode.style.height = node._h + "px";
        }
        element.appendChild(lineNode);
      }
      element.style.cssText = style;
    }

    if (absolute) {
      if (origHeight > element.clientHeight) {
        element.style.height = origHeight - padTopAndBottom + "px";
        if (element.clientHeight < origHeight) {
          element.style.height = origHeight + borderTopAndBottom + "px";
        }
      }
      if (origWidth > element.clientWidth) {
        element.style.width = origWidth - padLeftAndRight + "px";
        if (element.clientWidth < origWidth) {
          element.style.width = origWidth + borderLeftAndRight + "px";
        }
      }
    }
    _pushReversed(allChars, charArray);
    if (words) {
      _pushReversed(allWords, wordArray);
    }
    _pushReversed(allLines, lineArray);
  },
  _splitRawText = (element, vars, wordStart, charStart) => {
    let tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
      types = vars.type || vars.split || "chars,words,lines",
      chars = ~types.indexOf("chars"),
      absolute = _isAbsolute(vars),
      wordDelimiter = vars.wordDelimiter || " ",
      space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ",
      wordEnd = "</" + tag + ">",
      wordIsOpen = 1,
      specialChars = vars.specialChars ? (typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars) : null,
      text,
      splitText,
      i,
      j,
      l,
      character,
      hasTagStart,
      testResult,
      container = _document.createElement("div"),
      parent = element.parentNode;

    parent.insertBefore(container, element);
    container.textContent = element.nodeValue;
    parent.removeChild(element);
    element = container;
    text = getText(element);
    hasTagStart = text.indexOf("<") !== -1;

    if (vars.reduceWhiteSpace !== false) {
      text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
    }
    if (hasTagStart) {
      text = text.split("<").join("{{LT}}");
    }
    l = text.length;
    splitText = (text.charAt(0) === " " ? space : "") + wordStart();
    for (i = 0; i < l; i++) {
      character = text.charAt(i);
      if (specialChars && (testResult = specialChars(text.substr(i), vars.specialChars))) {
        character = text.substr(i, testResult || 1);
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
        i += testResult - 1;
      } else if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
        splitText += wordIsOpen ? wordEnd : "";
        wordIsOpen = 0;
        while (text.charAt(i + 1) === wordDelimiter) {
          splitText += space;
          i++;
        }
        if (i === l - 1) {
          splitText += space;
        } else if (text.charAt(i + 1) !== ")") {
          splitText += space + wordStart();
          wordIsOpen = 1;
        }
      } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
        splitText += chars ? charStart() + "{{LT}}" + "</" + tag + ">" : "{{LT}}";
        i += 5;
      } else if (
        (character.charCodeAt(0) >= 0xd800 && character.charCodeAt(0) <= 0xdbff) ||
        (text.charCodeAt(i + 1) >= 0xfe00 && text.charCodeAt(i + 1) <= 0xfe0f)
      ) {
        j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
        splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
        i += j - 1;
      } else {
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
      }
    }
    element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
    if (hasTagStart) {
      _swapText(parent, "{{LT}}", "<");
    }
  },
  _split = (element, vars, wordStart, charStart) => {
    let children = _toArray(element.childNodes),
      l = children.length,
      absolute = _isAbsolute(vars),
      i,
      child;
    if (element.nodeType !== 3 || l > 1) {
      vars.absolute = false;
      for (i = 0; i < l; i++) {
        child = children[i];
        if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
          if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
            child.style.display = "inline-block";
            child.style.position = "relative";
          }
          child._isSplit = true;
          _split(child, vars, wordStart, charStart);
        }
      }
      vars.absolute = absolute;
      element._isSplit = true;
      return;
    }
    _splitRawText(element, vars, wordStart, charStart);
  };

export class Splitter {
  constructor(element, vars) {
    if (!_coreInitted) {
      _initCore();
    }
    this.elements = _toArray(element);
    this.chars = [];
    this.words = [];
    this.lines = [];
    this._originals = [];
    this.vars = vars || {};
    if (_bonusValidated) {
      this._split(vars);
    }
  }

  _split(vars) {
    if (this.isSplit) {
      this.revert();
    }
    this.vars = vars = vars || this.vars;
    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
    let i = this.elements.length,
      tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
      wordStart = cssClass(vars.wordsClass, tag),
      charStart = cssClass(vars.charsClass, tag),
      origHeight,
      origWidth,
      e;
    while (--i > -1) {
      e = this.elements[i];
      this._originals[i] = e.innerHTML;
      origHeight = e.clientHeight;
      origWidth = e.clientWidth;
      _split(e, vars, wordStart, charStart);
      _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
    }
    this.chars.reverse();
    this.words.reverse();
    this.lines.reverse();
    this.isSplit = true;
    return this;
  }

  revert() {
    let originals = this._originals;
    if (!originals) {
      throw "revert() call wasn't scoped properly.";
    }
    this.elements.forEach((e, i) => (e.innerHTML = originals[i]));
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.isSplit = false;
    return this;
  }

  static create(element, vars) {
    return new Splitter(element, vars);
  }
}

export { Splitter as default };
