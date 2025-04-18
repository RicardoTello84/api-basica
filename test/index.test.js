const request = require('supertest');
const app = require('../index');

describe('Pruebas de API', () => {
  it('GET / debe responder con Docker Hub Git', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Docker Hub Git');
  });

  it('GET /health debe responder con estado ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
