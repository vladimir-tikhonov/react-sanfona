'use strict';

var _unexpected = require('unexpected');

var _unexpected2 = _interopRequireDefault(_unexpected);

var _skinDeep = require('skin-deep');

var _skinDeep2 = _interopRequireDefault(_skinDeep);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AccordionItem Test Case', function () {
  var vdom = void 0,
      instance = void 0;

  it('should render', function () {
    var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, null));
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();

    (0, _unexpected2.default)(instance, 'to be defined');
    (0, _unexpected2.default)(vdom, 'to be defined');
    (0, _unexpected2.default)(vdom.type, 'to be', 'div');
    (0, _unexpected2.default)(vdom.props.children[0].props, 'to have property', 'rootTag', 'h3');
    (0, _unexpected2.default)(vdom.props.children[1].props, 'to have property', 'rootTag', 'div');
  });

  it('should render with custom tags', function () {
    var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, { rootTag: 'li', titleTag: 'h2', bodyTag: 'ul' }));
    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();

    (0, _unexpected2.default)(instance, 'to be defined');
    (0, _unexpected2.default)(vdom, 'to be defined');
    (0, _unexpected2.default)(vdom.type, 'to be', 'li');
    (0, _unexpected2.default)(vdom.props.children[0].props, 'to have property', 'rootTag', 'h2');
    (0, _unexpected2.default)(vdom.props.children[1].props, 'to have property', 'rootTag', 'ul');
  });

  it('should have an unique id', function () {
    var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, null));
    var treeAlt = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, null));

    instance = tree.getMountedInstance();
    var anotherInstance = treeAlt.getMountedInstance();

    (0, _unexpected2.default)(instance.uuid, 'not to equal', anotherInstance.uuid);
  });

  it('should allow custom uuid', function () {
    var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, { uuid: 'first item' }));
    var treeAlt = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, { uuid: 'second item' }));

    instance = tree.getMountedInstance();
    var anotherInstance = treeAlt.getMountedInstance();

    (0, _unexpected2.default)(instance.uuid, 'to equal', 'first item');
    (0, _unexpected2.default)(anotherInstance.uuid, 'to equal', 'second item');
  });

  describe('aria', function () {
    it('should set aria-expanded to true when expanded prop is true', function () {
      var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, { expanded: true }));
      vdom = tree.getRenderOutput();
      (0, _unexpected2.default)(vdom.props['aria-expanded'], 'to be true');
      (0, _unexpected2.default)(vdom.props['aria-hidden'], 'to be undefined');
    });

    it('should set aria-hidden to true when expanded prop is not true', function () {
      var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, null));
      vdom = tree.getRenderOutput();
      (0, _unexpected2.default)(vdom.props['aria-expanded'], 'to be undefined');
      (0, _unexpected2.default)(vdom.props['aria-hidden'], 'to be true');
    });
  });

  describe('disabled mode', function () {
    it('should be false by default', function () {
      var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, null));
      vdom = tree.getRenderOutput();
      (0, _unexpected2.default)(vdom.props['disabled'], 'to be undefined');
    });

    it('should have react-sanfona-item-disabled className when disabled', function () {
      var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, { disabled: true }));
      vdom = tree.getRenderOutput();
      (0, _unexpected2.default)(vdom.props['className'], 'to be', 'react-sanfona-item react-sanfona-item-disabled');
    });

    it('should have a custom className when provided', function () {
      var tree = _skinDeep2.default.shallowRender(_react2.default.createElement(_index2.default, { disabled: true, disabledClassName: 'customDisabled' }));
      vdom = tree.getRenderOutput();
      (0, _unexpected2.default)(vdom.props['className'], 'to be', 'react-sanfona-item react-sanfona-item-disabled customDisabled');
    });
  });
});