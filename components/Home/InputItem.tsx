"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function InputItem({ type }: { type: 'source' | 'destination' }) {
  const [value, setValue] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (newValue: any, actionMeta: any) => {
    
    setValue(newValue);
  };

  return (
    <div className="bg-slate-200 flex items-center gap-4 p-3 rounded-lg mt-3">
      <Image
        src={type === 'source' ? "/source.png" : '/dest.png'}
        alt="alt"
        width={15}
        height={15}
      />

      {isClient && (
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          selectProps={{
            value,
            onChange: handleChange,  
          }}
        />
      )}
    </div>
  );
}

export default InputItem;
