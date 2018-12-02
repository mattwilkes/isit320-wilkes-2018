(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        13: function(n, t, e) {},
        15: function(n, t, e) {},
        17: function(n, t, e) {
            'use strict';
            e.r(t);
            var o = e(0),
                c = e.n(o),
                r = e(2),
                a = e.n(r),
                i = (e(13), e(3)),
                s = e(4),
                l = e(6),
                u = e(5),
                p = e(7),
                h = (e(15),
                (function(n) {
                    function t() {
                        var n, e;
                        Object(i.a)(this, t);
                        for (
                            var o = arguments.length, c = new Array(o), r = 0;
                            r < o;
                            r++
                        )
                            c[r] = arguments[r];
                        return (
                            ((e = Object(l.a)(
                                this,
                                (n = Object(u.a)(t)).call.apply(
                                    n,
                                    [this].concat(c)
                                )
                            )).copyScript = function() {
                                fetch('/script-pusher/copy-script')
                                    .then(function(n) {
                                        return n.json();
                                    })
                                    .then(function(n) {
                                        console.log('parsed json', n);
                                    })
                                    .catch(function(n) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            n
                                        );
                                    });
                            }),
                            e
                        );
                    }
                    return (
                        Object(p.a)(t, n),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return c.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        c.a.createElement(
                                            'button',
                                            { onClick: this.copyScript },
                                            'Copy Script'
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(o.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            a.a.render(
                c.a.createElement(h, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(n) {
                        n.unregister();
                    });
        },
        8: function(n, t, e) {
            n.exports = e(17);
        }
    },
    [[8, 2, 1]]
]);
//# sourceMappingURL=main.6c7674dc.chunk.js.map
