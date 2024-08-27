// components/Carousel.js
import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [moveTo, setMoveTo] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastMousePos, setLastMousePos] = useState(0);
  const [lastMoveTo, setLastMoveTo] = useState(0);

  useEffect(() => {
    const createCarousel = () => {
      const carouselProps = onResize();
      const length = carouselRef.current.children.length;
      const degrees = 360 / length;
      const gap = 20;
      const tz = distanceZ(carouselProps.w, length, gap);

      containerRef.current.style.width = `${tz * 2 + gap * length}px`;
      containerRef.current.style.height = `${calculateHeight(tz)}px`;

      Array.from(carouselRef.current.children).forEach((item, i) => {
        item.style.setProperty('--rotatey', `${degrees * i}deg`);
        item.style.setProperty('--tz', `${tz}px`);
      });
    };

    const onResize = () => {
      const boundingCarousel = containerRef.current.getBoundingClientRect();
      return { w: boundingCarousel.width, h: boundingCarousel.height };
    };

    const distanceZ = (widthElement, length, gap) => {
      return widthElement / 2 / Math.tan(Math.PI / length) + gap;
    };

    const calculateHeight = (z) => {
      const t = Math.atan((90 * Math.PI) / 180 / 2);
      return t * 2 * z;
    };

    const lerp = (a, b, n) => n * (a - b) + b;

    const update = () => {
      const newMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      setLastMoveTo(newMoveTo);
      carouselRef.current.style.setProperty('--rotatey', `${newMoveTo}deg`);
      requestAnimationFrame(update);
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown) return;
      const currentMousePos = e.clientX;
      setMoveTo(currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2);
      setLastMousePos(currentMousePos);
    };

    const initEvents = () => {
      carouselRef.current.addEventListener('mousedown', () => {
        setIsMouseDown(true);
        carouselRef.current.style.cursor = 'grab';
      });
      carouselRef.current.addEventListener('mouseup', () => {
        setIsMouseDown(false);
        carouselRef.current.style.cursor = 'grab';
      });
      containerRef.current.addEventListener('mouseleave', () => setIsMouseDown(false));
      carouselRef.current.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', createCarousel);
      update();
      createCarousel();
    };

    initEvents();

    return () => {
      window.removeEventListener('resize', createCarousel);
      carouselRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, [moveTo, lastMoveTo, isMouseDown, lastMousePos]);

  return (
    <div className={styles.conteudoGeral}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.containerCarrossel}>
          <div className={styles.carrossel} ref={carouselRef}>
            <div className={styles.carrosselItem}></div>
            <div className={styles.carrosselItem}></div>
            <div className={styles.carrosselItem}></div>
            <div className={styles.carrosselItem}></div>
            <div className={styles.carrosselItem}></div>
            <div className={styles.carrosselItem}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
