import React from "react";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";

import Layout from "./components/Layout";

import Blogs from "./Blogs/Blogs";
import BlogDetail from "./pages/BlogDetail";

import { SlideTabsExample } from "./components/SlideTabsExample";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <SlideTabsExample />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog" element={<CreateBlog />} />

            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;

