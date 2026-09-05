import React from 'react';
import { Link } from 'react-router-dom';

export function BusinessPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="business-page">
      <section className="business-hero">
        <p className="business-eyebrow">{eyebrow}</p>
        <h1 className="business-title">{title}</h1>
        <p className="business-intro">{intro}</p>
      </section>
      {children}
    </div>
  );
}

export function PageCTA() {
  return (
    <section className="page-cta">
      <h2>Have a jewellery requirement?</h2>
      <p>Contact Kanchi Kamakshi 3D Jewellery Works to discuss your requirement.</p>
      <Link to="/contact">Contact Us</Link>
    </section>
  );
}
