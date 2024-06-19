'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.7 // Adjust this value to determine when a section is considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.scrollTo({
            top: entry.target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div tabIndex={-1}>
      <section className="one" tabIndex={-1} aria-hidden="true"></section>
      <section className="two" tabIndex={-1} aria-hidden="false"></section>
      <section className="three" tabIndex={-1} aria-hidden="true"></section>
    </div>
  );
}
