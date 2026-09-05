import React, { useCallback, useEffect, useState } from 'react';
import { GoldRate } from "../components/common/GoldRate";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Gem,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import JewelleryCarousel3D from "../components/three/JewelleryCarousel3D";
import { JEWELLERY_CAROUSEL_ITEMS } from "../components/three/jewelleryCarouselItems";

const CATEGORY_LABELS = [
  'RING',
  'NECKLACE',
  'BANGLE',
  'CHAIN',
] as const;

/*
 * First jewellery image belonging to each category.
 *
 * Ring:     0
 * Necklace: 5
 * Bangle:   10
 * Chain:    14
 */
const CATEGORY_START_INDEX = [
  0,
  5,
  10,
  14,
] as const;

const TOTAL_ITEMS = JEWELLERY_CAROUSEL_ITEMS.length;

export const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  /*
   * Move exactly one jewellery item.
   */
  const change = useCallback((step: 1 | -1) => {
    setDirection(step);

    setIndex((current) => {
      const next =
        (current + step + TOTAL_ITEMS) %
        TOTAL_ITEMS;

      return next;
    });
  }, []);

  /*
   * Jump directly to a category.
   */
  const changeCategory = useCallback(
    (categoryIndex: number) => {
      const target =
        CATEGORY_START_INDEX[categoryIndex];

      if (target === undefined) {
        return;
      }

      setDirection(
        target >= index ? 1 : -1
      );

      setIndex(target);
    },
    [index]
  );

  /*
   * Keyboard navigation.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'ArrowLeft'
      ) {
        event.preventDefault();
        change(-1);
      }

      if (
        event.key === 'ArrowRight'
      ) {
        event.preventDefault();
        change(1);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [change]);

  /*
   * Receive swipe events from the
   * JewelleryCarousel3D component.
   *
   * The carousel itself does NOT change
   * the index. HomePage remains the
   * single source of truth.
   */
  useEffect(() => {
    const handleSwipe = (event: Event) => {
      const step =
        (event as CustomEvent<number>).detail;

      if (step === 1) {
        change(1);
      }

      if (step === -1) {
        change(-1);
      }
    };

    window.addEventListener(
      'kk-jewellery-swipe',
      handleSwipe
    );

    return () => {
      window.removeEventListener(
        'kk-jewellery-swipe',
        handleSwipe
      );
    };
  }, [change]);

  /*
   * Scroll to intro section.
   */
  const handleDiscoverMore = () => {
    document
      .getElementById('home-intro')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  /*
   * Determine active category.
   *
   * Example:
   *
   * 0–4   = Ring
   * 5–9   = Necklace
   * 10–13 = Bangle
   * 14–18 = Chain
   */
  const activeCategory =
    CATEGORY_START_INDEX.reduce<number>(
      (active, start, category) => {
        if (index >= start) {
          return category;
        }

        return active;
      },
      0
    );

  return (
    <div className="home-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="home-hero">

        <div
          className="home-hero-noise"
          aria-hidden="true"
        />

        <div
          className="home-hero-orbit home-hero-orbit-one"
          aria-hidden="true"
        />

        <div
          className="home-hero-orbit home-hero-orbit-two"
          aria-hidden="true"
        />
        <div className="home-hero-inner">

          {/* =================================================
              HERO COPY
              ================================================= */}

          <div
            className="
              home-hero-copy
              home-hero-copy-centered
            "
          >

            <div className="home-eyebrow">
              <Sparkles
                size={13}
                strokeWidth={1.3}
              />

              <span>
                WHERE TRADITION MEETS 3D PRECISION
              </span>
            </div>

            <h1>
              KANCHI KAMAKSHI
              <br />
              <em>
                3D JEWELLERY WORKS
              </em>
            </h1>

            <p>
              Traditional craftsmanship
              presented in an interactive
              3D-inspired jewellery space.
            </p>

          </div>

          {/* =================================================
              JEWELLERY CAROUSEL
              ================================================= */}

          <div
            className="
              home-hero-product
              home-hero-product-4
            "
          >

            <button
              type="button"
              aria-label="Previous jewellery"
              className="
                home-nav-arrow
                home-nav-left
              "
              onClick={() => change(-1)}
            >
              <ChevronLeft
                size={24}
                strokeWidth={1.2}
              />
            </button>

            <JewelleryCarousel3D
              index={index}
              direction={direction}
            />
         
            <button
              type="button"
              aria-label="Next jewellery"
              className="
                home-nav-arrow
                home-nav-right
              "
              onClick={() => change(1)}
            >
              <ChevronRight
                size={24}
                strokeWidth={1.2}
              />
            </button>

          </div>
         {/* ===================================================
              LIVE GOLD RATE
              =================================================== */}

          <div className="home-gold-rate">
            <GoldRate />
          </div>
          
        </div>

        {/* ===================================================
            CATEGORY NAVIGATION
            =================================================== */}

        <div
          className="home-category-bar"
          role="tablist"
          aria-label="Jewellery categories"
        >

          {CATEGORY_LABELS.map(
            (label, categoryIndex) => {
              const isActive =
                categoryIndex ===
                activeCategory;

              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${label.toLowerCase()} jewellery`}
                  className={
                    isActive
                      ? 'is-active'
                      : ''
                  }
                  onClick={() =>
                    changeCategory(
                      categoryIndex
                    )
                  }
                >

                  <span
                    className="
                      home-category-icon
                    "
                    aria-hidden="true"
                  >
                    <Gem
                      size={13}
                      strokeWidth={1.1}
                    />
                  </span>

                  <span
                    className="
                      home-category-label
                    "
                  >
                    {label}
                  </span>

                </button>
              );
            }
          )}

        </div>

        {/* ===================================================
            DISCOVER MORE
            =================================================== */}

        <button
          type="button"
          className="home-scroll-cue"
          onClick={handleDiscoverMore}
          aria-label="Scroll to discover more"
        >
          <span>
            DISCOVER MORE
          </span>

          <ArrowDown
            size={15}
            strokeWidth={1.1}
          />

        </button>
      </section>

      {/* =====================================================
          INTRO SECTION
          ===================================================== */}

      <section
        id="home-intro"
        className="home-intro"
      >

        <div className="home-intro-grid">

          {/* -------------------------------------------------
              CARD 01
              ------------------------------------------------- */}

          <article className="home-intro-card">

            <span className="home-card-kicker">
              01 / WELCOME
            </span>

            <h2>
              Crafting Jewellery
              <br />
              <em>
                Beyond the Ordinary
              </em>
            </h2>

            <p>
              Traditional craftsmanship
              meets a modern 3D workflow,
              creating a bridge between
              imagination and the finished
              jewel.
            </p>

            <Link to="/about">
              <span>
                READ OUR STORY
              </span>

              <ArrowRight
                size={14}
                strokeWidth={1.2}
              />
            </Link>

          </article>

          {/* -------------------------------------------------
              CENTER CARD
              ------------------------------------------------- */}

          <article className="home-intro-center">

            <div
              className="home-center-mark"
              aria-hidden="true"
            >
              <Gem
                size={24}
                strokeWidth={1}
              />
            </div>

            <span className="home-card-kicker">
              LATEST COLLECTIONS
            </span>

            <h2>
              Tradition.
              <br />
              <em>
                Technology.
              </em>
              <br />
              Timeless Beauty.
            </h2>

            <Link to="/collection">
              <span>
                VIEW COLLECTION
              </span>

              <ArrowRight
                size={14}
                strokeWidth={1.2}
              />
            </Link>

          </article>

          {/* -------------------------------------------------
              CARD 02
              ------------------------------------------------- */}

          <article className="home-intro-card">

            <span className="home-card-kicker">
              02 / OUR HISTORY
            </span>

            <h2>
              Precision in Every
              <br />
              <em>
                Detail
              </em>
            </h2>

            <p>
              From CAD concepts to jewellery
              presentation, every stage is
              built around detail, clarity
              and a premium customer
              experience.
            </p>

            <Link to="/designs">
              <span>
                EXPLORE 3D WORK
              </span>

              <ArrowRight
                size={14}
                strokeWidth={1.2}
              />
            </Link>

          </article>

        </div>

      </section>

    </div>
  );
};

export default HomePage;