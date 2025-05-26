'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { SearchIcon, SpinnerIcon } from './ui/icons';

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <form role="search">
      <input
        className="w-full pl-8 outline-offset-1"
        aria-label="Search contacts"
        name="q"
        defaultValue={q}
        placeholder="Search"
        type="search"
        onChange={event => {
          startTransition(() => {
            router.push(`?q=${encodeURIComponent(event.target.value)}`);
          });
        }}
      />
      <div aria-hidden="true" className="absolute left-10 top-7">
        {isPending ? (
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} className="text-gray-dark" />
          </div>
        ) : (
          <SearchIcon width={16} height={16} className="text-gray-dark" />
        )}
      </div>
    </form>
  );
}
