(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        14: function(e, t, n) {},
        16: function(e, t, n) {},
        19: function(e, t, n) {
            'use strict';
            n.r(t);
            var a = n(0),
                o = n.n(a),
                r = n(3),
                i = n.n(r),
                c = (n(14), n(4)),
                s = n(5),
                l = n(7),
                u = n(6),
                f = n(8),
                h = n(1),
                d = (n(16),
                n(18),
                (function(e) {
                    function t() {
                        var e;
                        return (
                            Object(c.a)(this, t),
                            ((e = Object(l.a)(
                                this,
                                Object(u.a)(t).call(this)
                            )).queryServer = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                fetch('/foo')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        console.log('parsed json', e),
                                            t.setState(function(t) {
                                                return e;
                                            });
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (e.state = {
                                file: 'File name will be placed here.',
                                status: 'waiting for server'
                            }),
                            e
                        );
                    }
                    return (
                        Object(f.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement('div', null),
                                        o.a.createElement(
                                            'p',
                                            { className: 'App-intro' },
                                            'state: ',
                                            this.state.status,
                                            ' file: ',
                                            this.state.file
                                        ),
                                        o.a.createElement(
                                            'button',
                                            { onClick: this.queryServer },
                                            'Bar'
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
            i.a.render(
                o.a.createElement(d, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        9: function(e, t, n) {
            e.exports = n(19);
        }
    },
    [[9, 2, 1]]
]);
//# sourceMappingURL=main.b46a4c60.chunk.js.map
