import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold">
            Something&rsquo;s missing.
          </p>
          <p className="mb-4 light-text">
            Sorry, we can&rsquo;t find that page. You&rsquo;ll find lots to
            explore on the home page.{" "}
          </p>
          <Link href={"/"}>
            <button className="custom-secondary-btn py-5">
              Go to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
