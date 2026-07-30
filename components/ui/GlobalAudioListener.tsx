'use client';

import { useEffect } from 'react';
import { soundFX } from '@/lib/audioFX';

export default function GlobalAudioListener() {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find closest button or clickable element
      const clickable = target.closest(
        'button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer'
      );
      if (!clickable) return;

      const text = (clickable.textContent || '').toUpperCase().trim();
      const ariaLabel = (clickable.getAttribute('aria-label') || '').toLowerCase();
      const title = (clickable.getAttribute('title') || '').toLowerCase();
      const role = clickable.getAttribute('role') || '';

      const isClose = 
        ariaLabel.includes('close') || 
        title.includes('close') || 
        text === 'X' || 
        clickable.querySelector('svg.lucide-x') !== null;

      const isCta = 
        text.includes('SCHEDULE A DEMO') || 
        text.includes('GET STARTED') || 
        text.includes('SUBMIT') || 
        text.includes('SEND') || 
        text.includes('SCHEDULE') || 
        text.includes('REQUEST DEMO') || 
        text.includes('BOOK A DEMO');

      const isTab = 
        role === 'tab' || 
        text.includes('STAGE') || 
        text.includes('TAB') || 
        clickable.classList.contains('tab-btn');

      const isCard = 
        clickable.classList.contains('group') || 
        clickable.classList.contains('rounded-2xl') || 
        text.includes('DEVELOPMENT') || 
        text.includes('SOLUTIONS') || 
        text.includes('INTELLIGENCE') || 
        text.includes('FACTORY') || 
        text.includes('INFRASTRUCTURE') || 
        text.includes('MARKETING');

      if (isClose) {
        soundFX.playModalClose();
      } else if (isCta) {
        soundFX.playCTA();
      } else if (isTab) {
        soundFX.playTab();
      } else if (isCard) {
        soundFX.playCardClick();
      } else {
        soundFX.playClick();
      }
    };

    // Attach capture listener so every button click triggers sound regardless of event stopPropagation
    window.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return null;
}
