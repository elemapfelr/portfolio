function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var CustomPriceRenderer = /*#__PURE__*/ function () {
    function CustomPriceRenderer(props) {
        _classCallCheck(this, CustomPriceRenderer);

        var el = $("<div></div>");
        this.el = el[0];
        this.render(props);
    }

    _createClass(CustomPriceRenderer, [{
        key: "getElement",
        value: function getElement() {
            return this.el;
        }
    }, {
        key: "render",
        value: function render(props) {
            $(this.el).empty();
            $(this.el).append(fnAddComma(props.value));
        }
    }]);

    return CustomPriceRenderer;
}();