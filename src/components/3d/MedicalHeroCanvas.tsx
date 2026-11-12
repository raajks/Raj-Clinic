import React, { useState, useEffect, Suspense, lazy } from 'react';
import { FallbackHeroVisual } from './FallbackHeroVisual';
import { Shield, Activity, Stethoscope, Heart, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Check if WebGL is supported
const isWebGLSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

// Lazy load Canvas and 3D cross
const Canvas3DWrapper = lazy(async () => {
  const { Canvas } = await import('@react-three/fiber');
  const { MedicalCross3D } = await import('./MedicalCross3D');
  
  return {
    default: () => (
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={0.5} color="#12B8A6" />
        <pointLight position={[0, 0, 3]} intensity={1.2} color="#1769AA" />
        <MedicalCross3D />
      </Canvas>
    )
  };
});

export const MedicalHeroCanvas: React.FC = () => {
  const { language } = useLanguage();
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    setHasWebGL(isWebGLSupported());

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!isMounted) {
    return <FallbackHeroVisual />;
  }

  // Use graceful fallback if WebGL is not supported or reduced motion requested
  if (!hasWebGL || prefersReducedMotion) {
    return <FallbackHeroVisual />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-healthcare/20 via-teal-accent/20 to-navy-800/10 blur-3xl -z-10 animate-pulse-subtle pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <div className="w-full h-full">
        <Suspense fallback={<FallbackHeroVisual />}>
          <Canvas3DWrapper />
        </Suspense>
      </div>

      {/* Interactive Floating Badge 1 - Top Left */}
      <div className="absolute top-4 sm:top-8 left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-2xl bg-white/90 shadow-xl border border-slate-100 backdrop-blur-md animate-float-slow pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emergency/10 text-emergency flex items-center justify-center font-bold">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-emergency">
              {language === 'hi' ? '24 घंटे सेवा' : '24/7 Available'}
            </div>
            <div className="text-xs sm:text-sm font-bold text-navy-800">
              {language === 'hi' ? 'नार्मल डिलीवरी एवं इमरजेंसी' : 'Normal Delivery & Triage'}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Floating Badge 2 - Bottom Right */}
      <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-2xl bg-white/90 shadow-xl border border-slate-100 backdrop-blur-md pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">
              {language === 'hi' ? 'विशेषज्ञ परामर्श' : 'Specialist Doctors'}
            </div>
            <div className="text-xs sm:text-sm font-bold text-navy-800">
              {language === 'hi' ? 'शल्य (M.S.) एवं हड्डी (M.B.B.S.)' : 'Surgery & Orthopedics'}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Floating Badge 3 - Bottom Left */}
      <div className="hidden sm:flex absolute bottom-12 left-6 z-20 items-center gap-2 py-2 px-3.5 rounded-full bg-navy-800/90 text-white text-xs shadow-lg backdrop-blur-sm pointer-events-auto">
        <Shield className="w-3.5 h-3.5 text-teal-accent" />
        <span className="font-medium">
          {language === 'hi' ? 'सत्यापित क्लिनिक विवरण' : 'Verified Clinical Roster'}
        </span>
      </div>

      {/* 3D Interaction Hint */}
      <div className="absolute top-2 right-4 text-[10px] text-slate-400 font-medium tracking-wider uppercase opacity-70 hidden md:block">
        Interactive 3D View
      </div>
    </div>
  );
};

