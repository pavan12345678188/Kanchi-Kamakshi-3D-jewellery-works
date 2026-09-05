import React from 'react';
import { BusinessPage, PageCTA } from '../components/common/BusinessPage';

const collection = [
  ['Rings', '/assets/jewellery/ring.jpg'],
  ['Necklaces', '/assets/jewellery/necklace.jpg'],
  ['Bangles', '/assets/jewellery/bangles.jpg'],
  ['Earrings', '/assets/jewellery/earrings.png'],
  ['Bracelets', '/assets/jewellery/bracelet.png'],
  ['Chains', '/assets/jewellery/goldchain.jpg'],
];

export const CollectionPage: React.FC = () => (
  <BusinessPage eyebrow="Jewellery Collection" title="Explore Our Jewellery" intro="Browse the main jewellery categories. Your original collection photographs can be added here as you provide them.">
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collection.map(([name, src]) => (
          <article key={name} className="overflow-hidden rounded-2xl border border-[#9b783d]/15 bg-white shadow-sm">
            {src ? <img src={src} alt={name} className="aspect-[4/3] w-full object-cover" /> : <div className="flex aspect-[4/3] items-center justify-center bg-[#e9e0d0] font-cinzel text-xl text-[#9b783d]">{name}</div>}
            <div className="p-5"><h2 className="font-cinzel text-xl">{name}</h2><p className="mt-2 text-sm text-[#211e19]/60">{src ? 'Explore this jewellery category.' : 'Collection photograph to be added.'}</p></div>
          </article>
        ))}
      </div>
    </section>
    <PageCTA />
  </BusinessPage>
);
