import { useState, useEffect } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      {loading ? (
        <div className="flex items-center justify-center">
          <LoadingSkeleton />
        </div>
      ) : (
        <div>
          <MusicPlayer />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
