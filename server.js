
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
var __dirname = path.resolve();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user',userRoutes);

const CONNECTION_URL = "mongodb+srv://Munny:Munny@2002@cluster0.6d1os.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(
      path.join(__dirname = 'client/build/index.html')
    );
  }
  )
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));