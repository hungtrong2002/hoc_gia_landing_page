'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePortfolioStore } from '@/store/portfolioStore';

/* Syncs URL query params → Zustand on mount and when URL changes */
export default function PortfolioInit() {
  const params = useSearchParams();
  const setType = usePortfolioStore((s) => s.setType);
  const setStatus = usePortfolioStore((s) => s.setStatus);

  useEffect(() => {
    setType(params.get('type') ?? '');
    setStatus(params.get('status') ?? '');
  }, [params, setType, setStatus]);

  return null;
}
