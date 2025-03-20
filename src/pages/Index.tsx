
import React, { useEffect, useState } from 'react';
import { AuroraBackgroundDemo } from '@/components/ui/aurora-demo';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // To prevent hydration mismatch, we render the components only after mounting
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse h-4 w-4 bg-primary rounded-full"></div>
      </div>
    );
  }

  return (
    <AuroraBackgroundDemo />
  );
};

export default Index;
