'use client';

import { useState, useEffect } from 'react';

type UserType = 'candidate' | 'employer';

export function useOnboarding(userType: UserType) {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has completed onboarding
    const storageKey = `psicostacks_onboarding_${userType}_completed`;
    const hasCompleted = localStorage.getItem(storageKey) === 'true';
    
    setShowOnboarding(!hasCompleted);
    setIsLoading(false);
  }, [userType]);

  const completeOnboarding = () => {
    const storageKey = `psicostacks_onboarding_${userType}_completed`;
    localStorage.setItem(storageKey, 'true');
    setShowOnboarding(false);
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  const resetOnboarding = () => {
    const storageKey = `psicostacks_onboarding_${userType}_completed`;
    localStorage.removeItem(storageKey);
    setShowOnboarding(true);
  };

  return {
    showOnboarding,
    isLoading,
    completeOnboarding,
    skipOnboarding,
    resetOnboarding,
  };
}
