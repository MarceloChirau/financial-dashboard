'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';

/*
Here's a breakdown of what's happening:
${pathname} is the current path, in your case, "/dashboard/invoices".
As the user types into the search bar, params.toString() translates this input into a URL-friendly format.
replace(${pathname}?${params.toString()}) updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee".
The URL is updated without reloading the page, thanks to Next.js's client-side navigation (which you learned about in the chapter on navigating between pages.

// Let's say the current URL is: /dashboard/invoices?page=2

const searchParams = useSearchParams(); 
// 1. We read the current params: { page: '2' } (READ-ONLY)

const pathname = usePathname(); 
// 2. We grab the base path: "/dashboard/invoices"

const params = new URLSearchParams(searchParams); 
// 3. We make a writable copy: { page: '2' } (EDITABLE)

params.set('query', 'lee'); 
// 4. We edit our copy: { page: '2', query: 'lee' }

// 5. We combine the pathname and our updated params to replace the URL:
replace(`${pathname}?${params.toString()}`); 
// Resolves to: replace("/dashboard/invoices?page=2&query=lee")
*/



export default function Search({ placeholder }: { placeholder: string }) {
const searchParams=useSearchParams();
const pathname=usePathname();
const{replace}=useRouter();

  function handleSearch(term:string){
    const params=new URLSearchParams(searchParams);

if(term){
  params.set('query',term)
}else{
  params.delete('query')
}
replace(`${pathname}?${params.toString()}`);
  // console.log(term);
}

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>{handleSearch(e.target.value)}}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
