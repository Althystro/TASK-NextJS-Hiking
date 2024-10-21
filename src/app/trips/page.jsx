'use client';

import trips from '@/data/trips';
import { useState, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import SearchBar from '@/components/SearchBar';
import TripCard from '@/components/TripCard';
import Link from 'next/link';

function TripList() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty');

  const tripCards = trips
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()) && (!difficulty || trip.difficulty === difficulty))
    .map((trip, index) => <TripCard trip={trip} key={index} />);

  const btnStyle = 'py-2 px-6 border-2 rounded-lg text-lg mx-2 mb-2';
  const inactiveBtn = 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white ';
  const activeBtn = 'bg-primarydark text-white border-primarydark';

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-center uppercase text-3xl md:text-4xl font-bold text-secondary mb-0">Explore Trips</h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <div className="text-center mt-4">
          <Link className={`${btnStyle} ${!difficulty ? activeBtn : inactiveBtn}`} href={'/trips'} scroll={false}>
            All
          </Link>
          <Link
            className={`${btnStyle} ${difficulty === 'easy' ? activeBtn : inactiveBtn}`}
            href={{
              pathname: '/trips',
              query: { difficulty: 'easy' },
            }}
            scroll={false}
          >
            Easy
          </Link>
          <Link
            className={`${btnStyle} ${difficulty === 'moderate' ? activeBtn : inactiveBtn}`}
            href={{
              pathname: '/trips',
              query: { difficulty: 'moderate' },
            }}
            scroll={false}
          >
            Moderate
          </Link>
          <Link
            className={`${btnStyle} ${difficulty === 'hard' ? activeBtn : inactiveBtn}`}
            href={{
              pathname: '/trips',
              query: { difficulty: 'hard' },
            }}
            scroll={false}
          >
            Hard
          </Link>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="w-[10%] h-1 rounded bg-secondary"></div>
          <div className="mx-4 text-secondary text-2xl">
            <i className="fas fa-star"></i>
          </div>
          <div className="w-[10%] h-1 rounded bg-secondary"></div>
        </div>
        <div className="flex flex-wrap mx-4 justify-center items-center">{tripCards}</div>
      </div>
    </section>
  );
}

export default TripList;
