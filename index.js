const path = require('path')
const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require ('cors')

const app = express()
const PORT = process.env.PORT || 5000
connectDB()

app.use(cors())
app.use(express.json({extended: true}))
app.use('/api/main', require('./routes/main'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'client', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
