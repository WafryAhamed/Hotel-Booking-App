import { useState, useCallback } from 'react';

export function useSavedProperties() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const toggleSave = useCallback((propertyId: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(propertyId)) {
        next.delete(propertyId);
      } else {
        next.add(propertyId);
      }
      return next;
    });
  }, []);

  const isSaved = useCallback(
    (propertyId: string) => {
      return savedIds.has(propertyId);
    },
    [savedIds]
  );

  return { savedIds, toggleSave, isSaved, savedCount: savedIds.size };
}