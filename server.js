import path from 'path';
import express from 'express';
const PORT = process.env.HTTP_PORT || 4001;

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);    
});