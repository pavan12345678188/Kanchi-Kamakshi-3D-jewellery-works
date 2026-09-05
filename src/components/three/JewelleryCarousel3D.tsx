import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  JEWELLERY_CAROUSEL_ITEMS,
  type JewelleryHeroItem,
} from './jewelleryCarouselItems';


/* ============================================================
   TYPES
   ============================================================ */

type Props = {
  index?: number;
  direction?: number;
};

type Slot =
  | 'left'
  | 'center'
  | 'right'
  | 'entering';


/* ============================================================
   ANIMATION SETTINGS
   ============================================================ */

const ANIMATION_DURATION = 1400;


/* ============================================================
   TOTAL ITEMS
   ============================================================ */

const TOTAL_ITEMS =
  JEWELLERY_CAROUSEL_ITEMS.length;


/* ============================================================
   HELPERS
   ============================================================ */

const normalizeIndex = (
  value: number
): number => {
  if (TOTAL_ITEMS === 0) {
    return 0;
  }

  return (
    ((value % TOTAL_ITEMS) +
      TOTAL_ITEMS) %
    TOTAL_ITEMS
  );
};


const getItem = (
  index: number
): JewelleryHeroItem => {
  return JEWELLERY_CAROUSEL_ITEMS[
    normalizeIndex(index)
  ];
};


/* ============================================================
   COMPONENT
   ============================================================ */

export function JewelleryCarousel3D({
  index = 0,
  direction = 1,
}: Props) {

  const [pointer, setPointer] =
    useState({
      x: 0,
      y: 0,
    });

  const [touchStart, setTouchStart] =
    useState<number | null>(null);

  const [isAnimating, setIsAnimating] =
    useState(false);


  /* ==========================================================
     CURRENT INDEX
     ========================================================== */

  const currentIndex =
    normalizeIndex(index);


  /* ==========================================================
     VISIBLE ITEMS
     ========================================================== */

  const visibleItems = useMemo(() => {

    const leftIndex =
      normalizeIndex(
        currentIndex - 1
      );

    const rightIndex =
      normalizeIndex(
        currentIndex + 1
      );

    const enteringIndex =
      direction === 1
        ? normalizeIndex(
            currentIndex + 2
          )
        : normalizeIndex(
            currentIndex - 2
          );

    return {
      left: getItem(leftIndex),
      center: getItem(currentIndex),
      right: getItem(rightIndex),
      entering: getItem(enteringIndex),
    };

  }, [
    currentIndex,
    direction,
  ]);


  /* ==========================================================
     SMOOTH ANIMATION
     ========================================================== */

  useEffect(() => {

    if (
      direction !== 1 &&
      direction !== -1
    ) {
      return;
    }

    setIsAnimating(true);

    const timer =
      window.setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);

    return () => {
      window.clearTimeout(timer);
    };

  }, [
    currentIndex,
    direction,
  ]);


  /* ==========================================================
     MOUSE PARALLAX
     ========================================================== */

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {

    if (
      event.pointerType === 'touch'
    ) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    if (
      rect.width === 0 ||
      rect.height === 0
    ) {
      return;
    }

    const x =
      (
        (
          event.clientX -
          rect.left
        ) /
          rect.width -
        0.5
      ) * 2;

    const y =
      (
        (
          event.clientY -
          rect.top
        ) /
          rect.height -
        0.5
      ) * 2;

    setPointer({
      x: Math.max(
        -1,
        Math.min(1, x)
      ),

      y: Math.max(
        -1,
        Math.min(1, y)
      ),
    });
  };


  const resetPointer = () => {
    setPointer({
      x: 0,
      y: 0,
    });
  };


  /* ==========================================================
     TOUCH START
     ========================================================== */

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {

    const firstTouch =
      event.changedTouches[0];

    if (!firstTouch) {
      return;
    }

    setTouchStart(
      firstTouch.clientX
    );
  };


  /* ==========================================================
     TOUCH END
     ========================================================== */

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {

    if (
      touchStart === null
    ) {
      return;
    }

    const lastTouch =
      event.changedTouches[0];

    if (!lastTouch) {
      setTouchStart(null);
      return;
    }

    const delta =
      lastTouch.clientX -
      touchStart;

    if (
      Math.abs(delta) >= 45
    ) {

      window.dispatchEvent(
        new CustomEvent(
          'kk-jewellery-swipe',
          {
            detail:
              delta < 0
                ? 1
                : -1,
          }
        )
      );
    }

    setTouchStart(null);
  };


  /* ==========================================================
     SCENE STYLE
     ========================================================== */

  const sceneStyle = {
    '--pointer-x':
      pointer.x.toFixed(3),

    '--pointer-y':
      pointer.y.toFixed(3),

    '--direction':
      direction === -1
        ? '-1'
        : '1',

    '--animation-duration':
      `${ANIMATION_DURATION}ms`,

  } as React.CSSProperties;


  /* ==========================================================
     RENDER OBJECT
     ========================================================== */

  const renderObject = (
    item: JewelleryHeroItem,
    slot: Slot
  ) => {

    const isCenter =
      slot === 'center';

    return (
      <div
        key={`${slot}-${item.id}`}

        className={[
          'jewellery-3d-object',

          item.className,

          `position-${slot}`,

          isCenter
            ? 'is-featured'
            : '',

          isAnimating
            ? 'is-animating'
            : '',
        ]
          .filter(Boolean)
          .join(' ')}

        style={{
          '--depth':
            `${item.depth}px`,

          '--animation-duration':
            `${ANIMATION_DURATION}ms`,
        } as React.CSSProperties}
      >

        {/* OBJECT SHADOW */}

        <div
          className="jewellery-3d-object-shadow"
          aria-hidden="true"
        />


        {/* PHOTO */}

        <div className="jewellery-3d-photo">

          <img
            src={item.image}
            alt={item.alt}
            draggable={false}
          />

        </div>

      </div>
    );
  };


  /* ==========================================================
     RETURN
     ========================================================== */

  return (
    <div
      className="
        hero-jewellery-stage
        hero-jewellery-stage-3
      "

      style={sceneStyle}

      onPointerMove={
        handlePointerMove
      }

      onPointerLeave={
        resetPointer
      }

      onTouchStart={
        handleTouchStart
      }

      onTouchEnd={
        handleTouchEnd
      }

      aria-label="
        Three dimensional jewellery
        carousel
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          hero-jewellery-glow
        "
        aria-hidden="true"
      />


      {/* FLOOR SHADOW */}

      <div
        className="
          hero-jewellery-floor-shadow
        "
        aria-hidden="true"
      />


      {/* 3D SCENE */}

      <div
        className="
          jewellery-3d-scene
        "
      >

        {renderObject(
          visibleItems.left,
          'left'
        )}

        {renderObject(
          visibleItems.center,
          'center'
        )}

        {renderObject(
          visibleItems.right,
          'right'
        )}

        {renderObject(
          visibleItems.entering,
          'entering'
        )}

      </div>


      {/* VIGNETTE */}

      <div
        className="
          hero-jewellery-vignette
        "
        aria-hidden="true"
      />

    </div>
  );
}


export default JewelleryCarousel3D;