import React from 'react';
import { BusinessPage, PageCTA } from '../components/common/BusinessPage';

export const DesignsPage: React.FC = () => (
  <>
    <BusinessPage
      eyebrow="3D Printing & Designs"
      title="From Design to Model"
      intro="Where traditional jewellery craftsmanship meets modern 3D design and printing precision."
    >

     {/* =====================================================
    FEATURED WORK
===================================================== */}

<section className="mx-auto max-w-6xl px-5 py-16">

  <div className="columns-1 md:columns-2 gap-6">

    {/* 3D CAD DESIGN */}
    <figure className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[#9b783d]/15 bg-[#0b0a08]">

      <div className="aspect-video overflow-hidden">
        <img
          src="/assets/jewellery/3d-cad.png"
          alt="3D jewellery CAD design"
          className="h-full w-full object-cover"
        />
      </div>

      <figcaption className="p-6">

        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d7b86e]">
          Digital Craftsmanship
        </p>

        <h2 className="mt-2 font-cinzel text-xl text-[#f6f1e7]">
          3D Jewellery Designs
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#f6f1e7]/55">
          Detailed digital jewellery models created with precision,
          helping transform concepts into production-ready designs.
        </p>

      </figcaption>

    </figure>


    {/* 3D PRINTING MACHINE */}
    <figure className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[#9b783d]/15 bg-[#0b0a08]">

      <div className="overflow-hidden bg-[#f5f1e8]">
        <img
          src="/assets/jewellery/3d-printer.png"
          alt="3D jewellery printing machine"
          className="block h-auto w-full"
        />
      </div>

      <figcaption className="p-6 text-[#f6f1e7]">

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
          Modern Technology
        </p>

        <h2 className="mt-3 font-cinzel text-2xl">
          3D Printing
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#f6f1e7]/60">
          Modern 3D printing technology helps create accurate patterns
          while maintaining the fine details required for jewellery work.
        </p>

      </figcaption>

    </figure>


    {/* 3D JEWELLERY MODEL */}
    <figure className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[#9b783d]/15 bg-[#0b0a08]">

      <div className="aspect-video overflow-hidden">
        <img
          src="/assets/jewellery/single_3d_model pic.png"
          alt="3D jewellery model"
          className="block h-full w-full object-cover"
        />
      </div>

      <figcaption className="p-6 text-[#f6f1e7]">

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
          3D Design
        </p>

        <h2 className="mt-3 font-cinzel text-2xl">
          3D Jewellery Model
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#f6f1e7]/60">
          Intricate jewellery models developed with detailed 3D digital
          craftsmanship and precision.
        </p>

      </figcaption>

    </figure>


    {/* RESIN PRINTING */}
    <figure className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[#9b783d]/15 bg-[#0b0a08]">

      <div className="aspect-video overflow-hidden">
        <img
          src="/assets/jewellery/resin_pic.png"
          alt="Resin 3D printing process"
          className="block h-full w-full object-cover"
        />
      </div>

      <figcaption className="p-6 text-[#f6f1e7]">

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
          Precision Manufacturing
        </p>

        <h2 className="mt-3 font-cinzel text-2xl">
          Resin 3D Printing
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#f6f1e7]/60">
          High-precision resin printing helps transform detailed digital
          jewellery designs into accurate physical patterns for production.
        </p>

      </figcaption>

    </figure>


    {/* GREEN RESIN MACHINE PHOTO */}
    <figure className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[#9b783d]/15 bg-[#0b0a08]">

      <div className="overflow-hidden bg-[#f5f1e8]">
        <img
          src="/assets/jewellery/machine_resin_pic.png"
          alt="3D printing resin machine"
          className="block h-auto w-full object-cover"
        />
      </div>

      <figcaption className="p-6 text-[#f6f1e7]">

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
          Resin Printing
        </p>

        <h2 className="mt-3 font-cinzel text-2xl">
          Precision Resin Patterns
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#f6f1e7]/60">
          High-precision resin patterns created from digital jewellery
          designs, preserving intricate details for accurate casting
          and production.
        </p>

      </figcaption>

    </figure>

  </div>

</section>
        {/* =====================================================
            20 MODEL GALLERY
        ===================================================== */}

        <section className="mt-20">

          <div className="mb-10 text-center">

           <p className="text-[20px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.28em] text-[#d5b86e]">
  Digital Craftsmanship
</p>

            <h2 className="mt-3 font-cinzel text-3xl text-[#f6f1e7] sm:text-4xl">
              3D Jewellery Designs
            </h2>

          </div>

<div className="models-grid">

  <div className="model-card">
    <img src="/assets/images/models/model-1.jpeg" alt="3D Jewellery Model 01" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-2.jpeg" alt="3D Jewellery Model 02" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-3.jpeg" alt="3D Jewellery Model 03" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-4.jpeg" alt="3D Jewellery Model 04" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-5.jpeg" alt="3D Jewellery Model 05" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-6.jpeg" alt="3D Jewellery Model 06" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-7.jpeg" alt="3D Jewellery Model 07" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-8.jpeg" alt="3D Jewellery Model 08" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-9.jpeg" alt="3D Jewellery Model 09" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-10.jpeg" alt="3D Jewellery Model 10" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-11.jpeg" alt="3D Jewellery Model 11" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-12.jpeg" alt="3D Jewellery Model 12" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-13.jpeg" alt="3D Jewellery Model 13" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-14.jpeg" alt="3D Jewellery Model 14" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-15.jpeg" alt="3D Jewellery Model 15" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-16.jpeg" alt="3D Jewellery Model 16" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-17.jpeg" alt="3D Jewellery Model 17" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-18.jpeg" alt="3D Jewellery Model 18" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-19.jpeg" alt="3D Jewellery Model 19" />
  </div>

  <div className="model-card">
    <img src="/assets/images/models/model-20.jpeg" alt="3D Jewellery Model 20" />
  </div>

</div>
         
      

  
        </section>


        {/* =====================================================
            5 STEP PROCESS
        ===================================================== */}

        <section className="mt-20 overflow-hidden rounded-[28px] border border-[#9b783d]/25 bg-[#0b0a08] p-6 text-[#f6f1e7] shadow-[0_25px_70px_rgba(0,0,0,.28)] sm:p-8 lg:p-10">

          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
              Our 5-Step Process
            </p>

            <h2 className="mt-3 font-cinzel text-2xl tracking-wide sm:text-3xl">
              From Idea to Finished Jewellery
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#f6f1e7]/55">
              Every piece moves through a carefully planned process that
              combines traditional jewellery craftsmanship with modern
              3D technology.
            </p>

          </div>


          <div className="relative mt-12">

            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#cda960]/45 to-transparent lg:block" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">

              {/* 01 */}
              <div className="group relative text-center">

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#cda960]/45 bg-[#15110c]">
                  <span className="font-cinzel text-lg text-[#d7b86e]">
                    01
                  </span>
                </div>

                <h3 className="mt-5 font-cinzel text-base">
                  Customer Requirement
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f6f1e7]/50">
                  Understand the desired style, design and jewellery
                  requirements before beginning the work.
                </p>

              </div>


              {/* 02 */}
              <div className="group relative text-center">

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#cda960]/45 bg-[#15110c]">
                  <span className="font-cinzel text-lg text-[#d7b86e]">
                    02
                  </span>
                </div>

                <h3 className="mt-5 font-cinzel text-base">
                  3D CAD Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f6f1e7]/50">
                  Develop the concept into a detailed 3D jewellery model
                  with precision and fine detailing.
                </p>

              </div>


              {/* 03 */}
              <div className="group relative text-center">

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#cda960]/45 bg-[#15110c]">
                  <span className="font-cinzel text-lg text-[#d7b86e]">
                    03
                  </span>
                </div>

                <h3 className="mt-5 font-cinzel text-base">
                  3D Printing
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f6f1e7]/50">
                  Convert the digital model into a precise physical pattern
                  using 3D printing technology.
                </p>

              </div>


              {/* 04 */}
              <div className="group relative text-center">

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#cda960]/45 bg-[#15110c]">
                  <span className="font-cinzel text-lg text-[#d7b86e]">
                    04
                  </span>
                </div>

                <h3 className="mt-5 font-cinzel text-base">
                  Casting & Finishing
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f6f1e7]/50">
                  The pattern moves into jewellery production, followed by
                  finishing and detailed craftsmanship.
                </p>

              </div>


              {/* 05 */}
              <div className="group relative text-center">

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d7b86e]/70 bg-[#171208]">
                  <span className="font-cinzel text-lg text-[#e0bd68]">
                    05
                  </span>
                </div>

                <h3 className="mt-5 font-cinzel text-base">
                  Final Jewellery
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#f6f1e7]/50">
                  The completed jewellery piece is ready with the desired
                  design, detailing and finish.
                </p>

              </div>

            </div>

          </div>


          <div className="mt-10 border-t border-[#cda960]/10 pt-6 text-center">

            <p className="text-xs uppercase tracking-[0.2em] text-[#d7b86e]/75">
              Traditional Craftsmanship · Modern 3D Precision
            </p>

          </div>

        </section>

      <PageCTA />

    </BusinessPage>
  </>
);