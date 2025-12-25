import { Loader2 } from "lucide-react";

export const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="mt-4 text-muted-foreground animate-pulse">Loading workspace...</p>
    </div>
  );
};