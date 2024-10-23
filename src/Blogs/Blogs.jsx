import React from "react";

import Footer from "../components/Footer";
import NewBlogs from "./NewBlogs";
import { DragCards } from "../components/DragCards";

const Blogs = () => {
  return (
    <>
      <div className=" mb-[100px] mt-[20px]">
        <NewBlogs />
      </div>
      <DragCards />

      <div className="fixed bottom-0 right-0 left-0 z-50 ">
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
