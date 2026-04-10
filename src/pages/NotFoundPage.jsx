import React from 'react';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            404 Error
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-sm leading-7 text-zinc-600 sm:text-base">
            The F1 track you're looking for doesn't exist. Perhaps it's under construction or has been moved.
          </p>
          <div className="mt-6">
            <Button to="/">Back to Pit Lane</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;