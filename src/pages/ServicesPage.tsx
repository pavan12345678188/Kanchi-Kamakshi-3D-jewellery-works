import React from 'react';
import { Link } from 'react-router-dom';
import { BusinessPage } from '../components/common/BusinessPage';

const services = [
  ['Rings', 'Ring jewellery work and custom requirements.'],
  ['Necklaces', 'Necklace designs and jewellery work.'],
  ['Bangles', 'Bangle and kada requirements.'],
  ['Earrings', 'Earrings and related jewellery work.'],
  ['Bracelets', 'Bracelet designs and custom requirements.'],
  ['Custom Jewellery', 'Discuss your design, reference or specific jewellery requirement.'],
  ['3D Jewellery Design', 'Digital jewellery design work based on the client requirement.'],
  ['3D Printing', '3D printing support for jewellery models and prototypes.'],
];

export const ServicesPage: React.FC = () => (
  <BusinessPage eyebrow="What We Do" title="Our Services" intro="Explore the jewellery and 3D-related services offered by Kanchi Kamakshi 3D Jewellery Works.">
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(([title, desc]) => (
          <article key={title} className="rounded-2xl border border-[#9b783d]/15 bg-white p-6 shadow-sm">
            <h2 className="font-cinzel text-lg">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#211e19]/65">{desc}</p>
            <Link to="/contact" className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b783d]">Enquire →</Link>
          </article>
        ))}
      </div>
    </section>
  </BusinessPage>
);
