import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <main className="about-page bg-[#0b0a08] text-[#f6f1e7]">

    {/* =========================================================
    HERO
========================================================= */}
<section className="relative overflow-hidden border-b border-[#cda960]/10">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(205,169,96,.10),transparent_35%)]" />

  <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">

    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">

      {/* LEFT — CONTENT */}
      <div className="max-w-3xl">

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7b86e]">
          About Kanchi Kamakshi
        </p>

        <h1 className="mt-5 font-cinzel text-4xl leading-[1.08] tracking-wide sm:text-5xl lg:text-6xl">
          Where Experience
          <br />
          Meets Precision
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-[#f6f1e7]/60 sm:text-lg">
          Kanchi Kamakshi 3D Jewellery Works brings together traditional
          jewellery craftsmanship with modern 3D design and printing
          capabilities.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <Link
            to="/collection"
            className="inline-flex items-center justify-center rounded-full border border-[#cda960]/60 bg-[#cda960] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0b0a08] transition hover:bg-[#e0bd68]"
          >
            Explore Collection
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#cda960]/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f6f1e7] transition hover:border-[#cda960]/70 hover:text-[#d7b86e]"
          >
            Contact Us
          </Link>

        </div>

      </div>


      {/* RIGHT — LOTUS LOGO */}
      <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[420px]">

        {/* Decorative circle */}
        <div className="absolute h-[260px] w-[260px] rounded-full border border-[#cda960]/10 sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]" />

        {/* Inner glow */}
        <div className="absolute h-[190px] w-[190px] rounded-full bg-[#d7b86e]/5 blur-3xl sm:h-[250px] sm:w-[250px]" />

        {/* Lotus */}
        <img
          src="/assets/branding/lotus_logo_1.png"
          alt="Kanchi Kamakshi lotus emblem"
          className="relative z-10 w-[260px] object-contain drop-shadow-[0_0_35px_rgba(215,184,110,0.22)] sm:w-[36px] lg:w-[480px]"
        />

      </div>

    </div>
  </div>
</section> 


      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7b86e]">
              Our Story
            </p>

            <h2 className="mt-4 font-cinzel text-3xl leading-tight sm:text-4xl">
              Craftsmanship Built
              <br />
              on Experience
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[#f6f1e7]/60 sm:text-base">
            <p>
              Kanchi Kamakshi 3D Jewellery Works is built on a strong
              foundation of jewellery craftsmanship, practical experience
              and an understanding of the details that make every jewellery
              piece special.
            </p>

            <p>
              Our founders, <strong className="text-[#f6f1e7]">
                Rambabu Talabattula
              </strong>{' '}
              and <strong className="text-[#f6f1e7]">
                Surya Prakash Talabattula
              </strong>
              , each bring 20 years of experience to the business.
            </p>

            <p>
              Their experience is combined with modern 3D design and printing
              capabilities, allowing ideas to be developed with greater
              precision before moving into jewellery production.
            </p>

            <p>
              Our focus is simple: combine experience, technology and
              attention to detail to create jewellery work that reflects
              quality craftsmanship and the customer's vision.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <section className="border-y border-[#cda960]/10 bg-[#100e0b]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="text-center md:border-r md:border-[#cda960]/15">
              <div className="font-cinzel text-5xl text-[#d7b86e] sm:text-6xl">
                20+
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6f1e7]/50">
                Years Experience
              </p>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#f6f1e7]/40">
                Rambabu Talabattula
              </p>
            </div>


            <div className="text-center md:border-r md:border-[#cda960]/15">
              <div className="font-cinzel text-5xl text-[#d7b86e] sm:text-6xl">
                20+
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6f1e7]/50">
                Years Experience
              </p>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#f6f1e7]/40">
                Surya Prakash Talabattula
              </p>
            </div>


            <div className="text-center">
              <div className="font-cinzel text-5xl text-[#d7b86e] sm:text-6xl">
                5+ 
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6f1e7]/50">
                 Years of 3D printing CAD Experience
              </p>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#f6f1e7]/40">
                Built through years of jewellery craftsmanship
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          FOUNDERS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7b86e]">
            The People Behind the Craft
          </p>

          <h2 className="mt-4 font-cinzel text-3xl sm:text-4xl">
            Meet the Founders
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#f6f1e7]/50 sm:text-base">
            Two decades of experience each, brought together with a shared
            commitment to craftsmanship, precision and modern jewellery
            design.
          </p>
        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Founder 1 */}
          <article className="group overflow-hidden rounded-[24px] border border-[#cda960]/20 bg-[#110f0c]">

            {/* PHOTO PLACEHOLDER */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1c1812] to-[#0b0a08]">

              {/* Later replace this div with:
                  <img
                    src="/assets/founders/rambabu-talabattula.jpg"
                    alt="Rambabu Talabattula"
                    className="h-full w-full object-cover"
                  />
              */}

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#cda960]/30 bg-[#cda960]/5">
                  <span className="font-cinzel text-2xl text-[#d7b86e]">
                    RT
                  </span>
                </div>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f6f1e7]/30">
                  Founder Photograph
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-transparent to-transparent" />
            </div>


            <div className="p-7 sm:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7b86e]">
                Founder
              </p>

              <h3 className="mt-3 font-cinzel text-2xl">
                Rambabu Talabattula
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#cda960]/50" />

                <span className="text-xs text-[#d7b86e]">
                  20 Years Experience
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#f6f1e7]/50">
                Bringing two decades of practical jewellery experience,
                craftsmanship and industry knowledge to the business.
              </p>

            </div>
          </article>


          {/* Founder 2 */}
          <article className="group overflow-hidden rounded-[24px] border border-[#cda960]/20 bg-[#110f0c]">

            {/* PHOTO PLACEHOLDER */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1c1812] to-[#0b0a08]">

              {/* Later replace this div with:
                  <img
                    src="/assets/founders/surya-prakash-talabattula.jpg"
                    alt="Surya Prakash Talabattula"
                    className="h-full w-full object-cover"
                  />
              */}

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#cda960]/30 bg-[#cda960]/5">
                  <span className="font-cinzel text-2xl text-[#d7b86e]">
                    SP
                  </span>
                </div>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f6f1e7]/30">
                  Founder Photograph
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-transparent to-transparent" />
            </div>


            <div className="p-7 sm:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7b86e]">
                Founder
              </p>

              <h3 className="mt-3 font-cinzel text-2xl">
                Surya Prakash Talabattula
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#cda960]/50" />

                <span className="text-xs text-[#d7b86e]">
                  20 Years Experience
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#f6f1e7]/50">
                Bringing extensive jewellery experience, practical knowledge
                and a modern approach to design and production.
              </p>

            </div>
          </article>

        </div>
      </section>


      {/* =========================================================
          TRADITION + TECHNOLOGY
      ========================================================= */}
      <section className="border-y border-[#cda960]/10 bg-[#100e0b]">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7b86e]">
              Our Approach
            </p>

            <h2 className="mt-4 font-cinzel text-3xl sm:text-4xl">
              Tradition Meets
              <br />
              3D Precision
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f6f1e7]/50 sm:text-base">
              Modern technology gives jewellery makers new ways to visualise,
              refine and develop designs while craftsmanship remains at the
              heart of the finished piece.
            </p>
          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: '01',
                title: 'Craftsmanship',
                text: 'Practical jewellery knowledge built through years of experience.',
              },
              {
                number: '02',
                title: '3D Design',
                text: 'Detailed digital models help bring ideas into a precise form.',
              },
              {
                number: '03',
                title: '3D Printing',
                text: 'Modern printing capabilities turn digital designs into physical patterns.',
              },
              {
                number: '04',
                title: 'Attention to Detail',
                text: 'Every stage is approached with care, precision and quality in mind.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#cda960]/15 bg-[#0b0a08] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#cda960]/40"
              >
                <span className="font-cinzel text-xl text-[#d7b86e]">
                  {item.number}
                </span>

                <h3 className="mt-5 font-cinzel text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#f6f1e7]/45">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7b86e]">
            What We Stand For
          </p>

          <h2 className="mt-4 font-cinzel text-3xl sm:text-4xl">
            Built Around Four Principles
          </h2>
        </div>


        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ['Precision', 'Careful attention to dimensions, details and design.'],
            ['Craftsmanship', 'Experience and practical jewellery knowledge guide our work.'],
            ['Innovation', 'Modern 3D technology expands what can be designed and developed.'],
            ['Trust', 'Building long-term relationships through quality and dependable work.'],
          ].map(([title, text]) => (
            <div
              key={title}
              className="border-t border-[#cda960]/25 pt-6"
            >
              <h3 className="font-cinzel text-xl">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#f6f1e7]/45">
                {text}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-[#cda960]/10 bg-[#100e0b]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7b86e]">
            Explore Our Work
          </p>

          <h2 className="mt-4 font-cinzel text-3xl sm:text-4xl">
            Discover the Collection
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#f6f1e7]/50">
            Explore our jewellery collection or discover how modern 3D
            design and printing can bring a jewellery idea to life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              to="/collection"
              className="rounded-full border border-[#cda960]/60 bg-[#cda960] px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0b0a08] transition hover:bg-[#e0bd68]"
            >
              View Collection
            </Link>

            <Link
              to="/designs"
              className="rounded-full border border-[#cda960]/30 px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f6f1e7] transition hover:border-[#cda960]/70 hover:text-[#d7b86e]"
            >
              3D Designs
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};