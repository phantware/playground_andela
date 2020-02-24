import request from 'supertest';
import app from '../app';

describe('Testing to see how test work', () => {
  it('jjnkjnn ', () => {});
});

describe('testing endpooint', () => {
  it('Get request', () => {
    expect('Hello world').toBe('Hello world');
  });
});

describe('TESTING ENDPOINTS', () => {
  it('GET /', (done) => {
    request(app)
      .get('/')
      .send({ name: 'juwon' })
      .expect(200)
      .expect('juwon')
      .end(done);
  });
  it('should return 400 when name is empty', async () => {
    const res = await request(app).get('/');
    expect(res).toBeTruthy();
  });
});
