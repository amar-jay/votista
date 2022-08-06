import * as React from "react";

interface Ilink {
  title: string;
  url: string;
}

const link: React.FC<Ilink> = ({ title, url }) => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen px-8 shadow-sm hover:shadow-xl">
      <div className="container bg-slate-500  shadow-sm hover:shadow-xl py-5 px-3 rounded-lg">
        <h2 className="text-xl text-gray-700 min-w-[50vw] pb-1">
          The title of your Query is {title}
        </h2>
        <p className="text-sm text-gray-600 pb-4">The url is {url}</p>
        <button className="text-lg text-white p-3 bg-slate-700 ease-in-out duration-300 hover:bg-slate-900 rounded-md items-center justify-center p-0">
          {" "}
          Copy Url{" "}
        </button>
      </div>
    </div>
  );
};

export default link;
