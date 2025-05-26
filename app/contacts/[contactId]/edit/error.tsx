'use client';

import ErrorMessage from '@/components/ui/ErrorMessage';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <ErrorMessage onReset={reset}>Something went wrong</ErrorMessage>;
}
