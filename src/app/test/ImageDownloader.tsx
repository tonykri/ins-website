"use client"
import { useEffect, useState } from 'react';
import { fetchHomePagePortfolio } from '../../firebase/firebase-data'

const ImageDownloader = () => {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImage = async () => {
        let data = fetchHomePagePortfolio()
        data.then((images) => {
            console.log(images)
            setUrls(images)
        });
    };

    fetchImage();
  }, []);

  return (
    <div>
      {urls ? (
        <img src={urls[0]} alt="Downloaded Image" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImageDownloader;