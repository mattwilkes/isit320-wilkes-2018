(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        14: function(e, t, n) {},
        16: function(e, t, n) {},
        18: function(e, t, n) {
            'use strict';
            n.r(t);
            var a = n(0),
                o = n.n(a),
                r = n(2),
                l = n.n(r),
                c = (n(14), n(7)),
                i = n(3),
                s = n(4),
                u = n(6),
                m = n(5),
                p = n(8),
                h = (n(16),
                (function(e) {
                    function t() {
                        var e, n;
                        Object(i.a)(this, t);
                        for (
                            var a = arguments.length, o = new Array(a), r = 0;
                            r < a;
                            r++
                        )
                            o[r] = arguments[r];
                        return (
                            ((n = Object(u.a)(
                                this,
                                (e = Object(m.a)(t)).call.apply(
                                    e,
                                    [this].concat(o)
                                )
                            )).copyScript = function() {
                                fetch('/script-pusher/copy-script')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        console.log('parsed json', e);
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (n.handleChange = function(e) {
                                var t = e.target.value;
                                console.log('HANDLE CHANGE', t),
                                    n.setState(
                                        Object(c.a)({}, n.state, {
                                            selectedValue: t
                                        })
                                    );
                            }),
                            (n.handleSubmit = function(e) {
                                n.setState({ allData: '' }),
                                    console.log(
                                        'A name was submitted: ',
                                        n.state
                                    ),
                                    n.runCpuInfo(n.state.selectedValue),
                                    e.preventDefault();
                            }),
                            n
                        );
                    }
                    return (
                        Object(p.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = o.a.createElement(
                                        'div',
                                        { className: 'container' },
                                        o.a.createElement(
                                            'form',
                                            { onSubmit: this.handleSubmit },
                                            o.a.createElement(
                                                'div',
                                                { className: 'elf-form-field' },
                                                o.a.createElement('input', {
                                                    type: 'radio',
                                                    name: 'app-choice',
                                                    value: 'CpuInfo',
                                                    id: 'elf-radio-cpu',
                                                    onChange: this.handleChange
                                                }),
                                                o.a.createElement(
                                                    'label',
                                                    {
                                                        htmlFor: 'elf-radio-cpu'
                                                    },
                                                    'CpuInfo'
                                                ),
                                                o.a.createElement('input', {
                                                    type: 'radio',
                                                    name: 'app-choice',
                                                    value: 'VersionCheck',
                                                    id: 'elf-radio-version',
                                                    onChange: this.handleChange
                                                }),
                                                o.a.createElement(
                                                    'label',
                                                    {
                                                        htmlFor:
                                                            'elf-radio-version'
                                                    },
                                                    'Version Info'
                                                )
                                            ),
                                            o.a.createElement(
                                                'div',
                                                { className: 'form-group' },
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        type: 'submit',
                                                        className:
                                                            'btn btn-primary'
                                                    },
                                                    'Run System Script'
                                                )
                                            )
                                        )
                                    );
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement(
                                            'header',
                                            { className: 'App-header' },
                                            o.a.createElement(
                                                'main',
                                                null,
                                                o.a.createElement(
                                                    'section',
                                                    null,
                                                    e
                                                ),
                                                o.a.createElement(
                                                    'section',
                                                    null,
                                                    o.a.createElement(
                                                        'pre',
                                                        null,
                                                        this.state.allData
                                                    )
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    { onClick: this.runFoo },
                                                    'Run Foo'
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(a.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            l.a.render(
                o.a.createElement(h, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        9: function(e, t, n) {
            e.exports = n(18);
        }
    },
    [[9, 2, 1]]
]);
//# sourceMappingURL=main.64d4c319.chunk.js.map
