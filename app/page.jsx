"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card } from '../components/Card';

export default function page() {
  const acts = Array(7).fill(null);
  const aps = Array(4).fill(null);
  const router = useRouter();

  const handleAct = () => {
    router.push('/activity/1'); // 👈 Navigates using Next.js routing
  };

  useEffect(() => {
    window.scrollTo(0, 0); // mimic SafeAreaView on mount
  }, []);

  return (
    <div className="pt-4">
  <div className="w-full object-contain">
    <img
      src="https://www.discoverlosangeles.com/sites/default/files/styles/max_2600x2600/public/images/2019-04/Bowlero%20bowling%20lanes.jpg?itok=7k_RJYvo"
      alt="Paint Ball"
      className="w-full h-auto md:h-[66vh] object-cover rounded-lg"
    />
  </div>
      <div className="flex overflow-x-auto px-4 space-x-4 mt-10 overflow-scroll">
        {acts.map((_, index) => (
          <div className="min-w-[16rem]" key={index}>
            <Card onClick={handleAct} />
          </div>
        ))}
      </div>
      <div className="flex overflow-x-auto px-4 space-x-4 mt-10 overflow-scroll">
        {aps.map((_, index) => (
          <div className="min-w-[16rem]" key={index}>
            <Card onClick={handleAct} />
          </div>
        ))}
      </div>
    </div>
  );
}
