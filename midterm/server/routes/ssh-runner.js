const Client = require('ssh2').Client;
var express = require('express');
var router = express.Router();

const hostAddress = '18.209.86.240';

let allData = '';

const runCpuInfo = (hostAddress, response) => {
    var conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('~/CpuInfo', function(err, stream) {
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                            code +
                            ', signal: ' +
                            signal
                    );
                    conn.end();
                    response.send({ result: 'success', allData: allData });
                })
                .on('data', function(data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                    allData += data;
                });
        });
    }).connect({
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/homekey.pem'
        )
    });
};

router.get('/call-cpu-info', (request, response) => {
    response.send({ result: 'success' });
    runCpuInfo(hostAddress, response);
});

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'server' });
});

module.exports = router;
