import React from "react";
import { Link } from "react-router-dom";

const HeaderText = () => {
  return (
    <div class=" px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 bg-slate-100">
      <div class="flex items-center justify-center ">
        <h1 class="mx-auto text-center  mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          "Unleash Your Ideas, Share Your Voice"
        </h1>
      </div>
      <div class="flex items-center justify-center ">
        <p class="mb-6 text-center   text-lg font-normal text-gray-500 lg:text-xl sm:px-16  dark:text-gray-400">
          Welcome to your creative space where every idea finds a home. Whether
          you're writing to inspire, educate, or entertain, this is where your
          words can make an impact. Start your journey today and connect with a
          world eager to hear your story.{" "}
        </p>
      </div>
      <div class="flex items-center justify-center ">
        <Link to="/create-blog">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Let's Create a Blog !!!
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderText;
