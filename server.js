import express, {json} from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import blogPostsRoutes from './server/routes/blogPostsRoutes.js';

import {createBlogSchema} from './server/database/createBlogSchema.js';

dotenv.config();
const app = express();
app.use(json(), cors());

app.use("/api/v1/BlogPosts", blogPostsRoutes);
// Connect to the database
const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("*", (req, res) => { 
    res.status(404).json({ error: "Not found" });
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    createBlogSchema();  // Create BlogPosts table if it doesn't exist
    
})
