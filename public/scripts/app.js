'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running');

var DocumentHub = function (_React$Component) {
    _inherits(DocumentHub, _React$Component);

    function DocumentHub(props) {
        _classCallCheck(this, DocumentHub);

        var _this = _possibleConstructorReturn(this, (DocumentHub.__proto__ || Object.getPrototypeOf(DocumentHub)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddDealing = _this.handleAddDealing.bind(_this);
        _this.state = {
            dealings: ['']
        };
        return _this;
    }

    _createClass(DocumentHub, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                console.log('fetching data');
                var dealingsString = localStorage.getItem('dealings');
                var dealings = JSON.parse(dealingsString);
                if (dealings) {
                    this.setState(function () {
                        return { dealings: dealings };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(preProps, prevState) {
            if (prevState.dealings.length != this.state.dealings.length) {
                var json = JSON.stringify(this.state.dealings);
                localStorage.setItem('dealings', json);
            }
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    dealings: []
                };
            });
        }
    }, {
        key: 'handleAddDealing',
        value: function handleAddDealing(dealing) {

            if (!dealing) {
                return 'Enter valid value to add item';
            } else if (this.state.dealings.indexOf(dealing) > -1) {
                return 'This option already exists';
            }
            this.setState(function (prevState) {
                return {
                    dealings: prevState.dealings.concat(dealing)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Document Hub';
            var subtitle = 'List of Dealings';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Dealings, { handleRemoveAll: this.handleRemoveAll, dealings: this.state.dealings }),
                React.createElement(AddDealing, { handleAddDealing: this.handleAddDealing })
            );
        }
    }]);

    return DocumentHub;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title,
            ' '
        ),
        React.createElement(
            'p',
            null,
            ' ',
            props.subtitle,
            ' '
        )
    );
};

var Dealings = function Dealings(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            ' RemoveAll '
        ),
        props.dealings.length === 0 && React.createElement(
            'p',
            null,
            ' Please add dealings !'
        ),
        props.dealings.map(function (dealing) {
            return React.createElement(Dealing, { key: dealing, name: dealing });
        })
    );
};

var Dealing = function Dealing(props) {
    return React.createElement(
        'div',
        null,
        props.name
    );
};

var AddDealing = function (_React$Component2) {
    _inherits(AddDealing, _React$Component2);

    function AddDealing(props) {
        _classCallCheck(this, AddDealing);

        var _this2 = _possibleConstructorReturn(this, (AddDealing.__proto__ || Object.getPrototypeOf(AddDealing)).call(this, props));

        _this2.handleAddDealing = _this2.handleAddDealing.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddDealing, [{
        key: 'handleAddDealing',
        value: function handleAddDealing(e) {
            e.preventDefault();

            var dealing = e.target.elements.dealing.value.trim();
            var error = this.props.handleAddDealing(dealing);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.dealing.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddDealing },
                    React.createElement('input', { type: 'text', name: 'dealing' }),
                    React.createElement(
                        'button',
                        null,
                        ' Add Dealing'
                    )
                )
            );
        }
    }]);

    return AddDealing;
}(React.Component);

ReactDOM.render(React.createElement(DocumentHub, null), document.getElementById('app'));
