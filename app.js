const express = require('express');
const app = express();
let counter = 0;

app.get('/', (req, res) => {
    counter++;
    res.send(`Counter value: ${counter}`);
});

app.get('/metrics', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(`# HELP counter_total Number of times the counter was incremented
# TYPE counter_total counter
counter_total ${counter}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Counter app running on http://localhost:${PORT}`);
});
