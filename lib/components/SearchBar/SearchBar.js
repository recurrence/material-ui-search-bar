'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Clear = require('material-ui-icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

var _Search = require('material-ui-icons/Search');

var _Search2 = _interopRequireDefault(_Search);

var _colors = require('material-ui/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles(props, state) {
  var disabled = props.disabled;
  var value = state.value;

  var nonEmpty = value.length > 0;

  return {
    root: {
      height: 48,
      display: 'flex',
      justifyContent: 'space-between'
    },
    iconButtonClose: {
      style: {
        opacity: !disabled ? 0.54 : 0.38,
        transform: nonEmpty ? 'scale(1, 1)' : 'scale(0, 0)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
      iconStyle: {
        opacity: nonEmpty ? 1 : 0,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    iconButtonSearch: {
      style: {
        opacity: !disabled ? 0.54 : 0.38,
        transform: nonEmpty ? 'scale(0, 0)' : 'scale(1, 1)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        marginRight: -48
      },
      iconStyle: {
        opacity: nonEmpty ? 0 : 1,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    input: {
      width: '100%'
    },
    searchContainer: {
      margin: 'auto 16px',
      width: '100%'
    }
  };
};

/**
 * Material design search bar
 * @see [Search patterns](https://material.io/guidelines/patterns/search.html)
 */

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.handleFocus = function () {
      _this.setState({ focus: true });
    };

    _this.handleBlur = function () {
      _this.setState({ focus: false });
      if (_this.state.value.trim().length === 0) {
        _this.setState({ value: '' });
      }
    };

    _this.handleInput = function (e) {
      _this.setState({ value: e.target.value });
      _this.props.onChange && _this.props.onChange(e.target.value);
    };

    _this.handleCancel = function () {
      _this.setState({ active: false, value: '' });
      _this.props.onChange && _this.props.onChange('');
    };

    _this.handleKeyPressed = function (e) {
      if (e.charCode === 13 || e.key === 'Enter') {
        _this.props.onRequestSearch(_this.state.value);
      }
    };

    _this.state = {
      focus: false,
      value: _this.props.value,
      active: false
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState(_extends({}, this.state, { value: nextProps.value }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = getStyles(this.props, this.state);
      var value = this.state.value;

      var _props = this.props,
          closeIcon = _props.closeIcon,
          disabled = _props.disabled,
          onRequestSearch = _props.onRequestSearch,
          searchIcon = _props.searchIcon,
          style = _props.style,
          inputProps = _objectWithoutProperties(_props, ['closeIcon', 'disabled', 'onRequestSearch', 'searchIcon', 'style']);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: _extends({}, styles.root, style)
        },
        _react2.default.createElement(
          'div',
          { style: styles.searchContainer },
          _react2.default.createElement(_Input2.default, _extends({}, inputProps, {
            onBlur: this.handleBlur,
            value: value,
            onChange: this.handleInput,
            onKeyUp: this.handleKeyPressed,
            onFocus: this.handleFocus,
            fullWidth: true,
            style: styles.input,
            disableUnderline: true,
            disabled: disabled
          }))
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            style: styles.iconButtonSearch.style,
            disabled: disabled
          },
          _react2.default.cloneElement(searchIcon, { style: styles.iconButtonSearch.iconStyle })
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.handleCancel,
            style: styles.iconButtonClose.style,
            disabled: disabled
          },
          _react2.default.cloneElement(closeIcon, { style: styles.iconButtonClose.iconStyle })
        )
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

exports.default = SearchBar;


SearchBar.defaultProps = {
  closeIcon: _react2.default.createElement(_Clear2.default, { color: _colors.grey[500] }),
  disabled: false,
  placeholder: 'Search',
  searchIcon: _react2.default.createElement(_Search2.default, { color: _colors.grey[500] }),
  style: null,
  value: ''
};

SearchBar.propTypes = {
  /** Override the close icon. */
  closeIcon: _propTypes2.default.node,
  /** Disables text field. */
  disabled: _propTypes2.default.bool,
  /** Sets placeholder for the embedded text field. */
  placeholder: _propTypes2.default.string,
  /** Fired when the text value changes. */
  onChange: _propTypes2.default.func,
  /** Fired when the search icon is clicked. */
  onRequestSearch: _propTypes2.default.func.isRequired,
  /** Override the search icon. */
  searchIcon: _propTypes2.default.node,
  /** Override the inline-styles of the root element. */
  style: _propTypes2.default.object,
  /** The value of the text field. */
  value: _propTypes2.default.string
};