(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        10: function(e, t, n) {
            e.exports = n(19);
        },
        15: function(e, t, n) {},
        17: function(e, t, n) {},
        19: function(e, t, n) {
            'use strict';
            n.r(t);
            var a = n(0),
                o = n.n(a),
                l = n(3),
                r = n.n(l),
                c = (n(15), n(7)),
                i = n(4),
                s = n(5),
                u = n(9),
                d = n(6),
                p = n(8),
                m = n(1),
                h = (n(17),
                (function(e) {
                    function t(e) {
                        var n;
                        return (
                            Object(i.a)(this, t),
                            ((n = Object(u.a)(
                                this,
                                Object(d.a)(t).call(this, e)
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
                            (n.runScript = function(e, t) {
                                var a = Object(m.a)(Object(m.a)(n));
                                t &&
                                    fetch(e + t)
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            console.log('allData', e.allData),
                                                console.log('result', e.result),
                                                console.log('code', e.code),
                                                console.log('error', e.error);
                                            var n = '';
                                            if ('error' === e.result)
                                                n = e.error;
                                            else if ('CpuInfo' === t)
                                                for (
                                                    var o = RegExp(
                                                            'model name.*',
                                                            'g'
                                                        ),
                                                        l = o.exec(e.allData);
                                                    null !== l;

                                                )
                                                    (n += l[0] + '\n'),
                                                        console.log(
                                                            'Found '.concat(
                                                                l[0],
                                                                '.'
                                                            )
                                                        ),
                                                        (l = o.exec(e.allData));
                                            else n = e.allData;
                                            a.setState({ allData: n });
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (n.callCpuInfo = function() {
                                fetch('/call-cpu-info')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        console.log('JSON from server:', e);
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, error on server, URL bad, network down, or similar'
                                        ),
                                            console.log(
                                                JSON.stringify(e, null, 4)
                                            );
                                    });
                            }),
                            (n.handleChange = function(e) {
                                var t = e.target.value,
                                    a = e.target.getAttribute('data-endpoint');
                                console.log('HANDLE CHANGE', t),
                                    n.setState(
                                        Object(c.a)({}, n.state, {
                                            selectedValue: t,
                                            endPointIndex: a
                                        })
                                    );
                            }),
                            (n.handleSubmit = function(e) {
                                n.setState({ allData: '' }),
                                    console.log(
                                        'A name was submitted: ',
                                        n.state
                                    ),
                                    n.runScript(
                                        n.dataEndPoints[n.state.endPointIndex],
                                        n.state.selectedValue
                                    ),
                                    e.preventDefault();
                            }),
                            (n.dataEndPoints = [
                                '/script-pusher/run-script?script=',
                                '/script-pusher/run-system-tool?script='
                            ]),
                            (n.state = {
                                allData: '',
                                selectedValue: '',
                                endPointIndex: 0
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
                                                'fieldset',
                                                null,
                                                o.a.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'elf-form-field'
                                                    },
                                                    o.a.createElement(
                                                        'legend',
                                                        null,
                                                        'Services'
                                                    ),
                                                    o.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'CpuInfo',
                                                        id: 'elf-radio-cpu',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    o.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-cpu'
                                                        },
                                                        'CpuInfo'
                                                    ),
                                                    o.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'VersionCheck',
                                                        id: 'elf-radio-version',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    o.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-version'
                                                        },
                                                        'Version Info'
                                                    ),
                                                    o.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'Uptime',
                                                        id: 'elf-radio-cpu',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    o.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-cpu'
                                                        },
                                                        'Uptime'
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
            r.a.render(
                o.a.createElement(h, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        }
    },
    [[10, 2, 1]]
]);
//# sourceMappingURL=main.56ea2d60.chunk.js.map
