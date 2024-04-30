// Creatig Server using new syntax 

import 'dotenv/config'

import express from 'express';

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send(`<h2>Server is ready</h2>`))

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            cotent: 'This is a joke'
        },

        {
            id: 2,
            title: 'Another joke',
            cotent: 'This is another joke'
        },

        {
            id: 3,
            title: 'A very funny joke',
            cotent: 'This is very funny joke'
        },

        {
            id: 4,
            title: 'A non-veg joke',
            cotent: 'This is a no-veg joke'
        }
    ]
    res.send(jokes)
})

app.listen(port, () => (console.log(`Server at http://localhost:${port}`)
))

