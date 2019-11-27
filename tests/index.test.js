const request = require('supertest');
const app = require('../express');

describe('Express Router Test', () => {
    it('Test Http Get', async () => {
        const res = await request(app)
            .get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.text).toBe('Hello')
    });
})


describe('Sample Test', () => {
    it('Test Hello', () => {
        expect('hello').toBe('hello')
    })
})