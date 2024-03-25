import React from 'react';

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black">404</h1>

        <p className="text-2xl font-bold tracking-tight   sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4  ">We can&apos;t find that page.</p>

        <a
          href="#"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
