import React, { createContext, useContext, useState } from 'react';

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <TrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </TrackContext.Provider>
  );
};

export const useTrack = () => useContext(TrackContext);
