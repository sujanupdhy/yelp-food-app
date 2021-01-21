import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer u44r-TlIjKdxk2RHV3qngh8aF9ecabZ6RZFrJGf_a7R35JVDoX3HQvFEhe6F0jV5K9z220uyE68ejC47-r9iCC1brCv9RUDksErPZDXdQH0l5SavWaRXjS9TkOMXXnYx'
    }
});

