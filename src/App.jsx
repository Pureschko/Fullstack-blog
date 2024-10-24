import React from "react";
import Home from "./pages/Home";

import Layout from "./components/Layout";

import Blogs from "./Blogs/Blogs";

import BlogDetail from "./pages/BlogDetail"; {/* Inna's changes*/}
import FormBlog from "./components/FormBlog";

import { SlideTabsNavigation } from "./components/SlideTabsNavigation ";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <SlideTabsNavigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FormBlog" element={<FormBlog />} />

            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} /> {/* Inna's changes*/}

            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
