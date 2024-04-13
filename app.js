import express from 'express';
import process from 'process';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/cat', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Fluffy',
    birthdate: '2022-01-01',
    weight: 5,
    owner: 'John Doe',
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
