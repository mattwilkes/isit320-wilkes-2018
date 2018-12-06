const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test index.js', function() {

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'create-educate', status: 'active' })
            .expect(200, done);
    });

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'create-standard', status: 'active' })
            .expect(200, done);
    });

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'associate-elastic-ip', status: 'active' })
            .expect(200, done);
    });
    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'copy-get-started', status: 'active' })
            .expect(200, done);
    });
    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'reboot-instance', status: 'active' })
            .expect(200, done);
    });
    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/run-ubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'run-ubuntu-setup', status: 'active' })
            .expect(200, done);
    });
    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ result: 'success', endpoint: 'copy-get-started', status: 'active' })
            .expect(200, done);
    });
});