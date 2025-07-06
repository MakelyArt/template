import Image from "next/image";
import { useEffect, useState } from "react";

export default function ArtistPortfolio() {
  const [artist, setArtist] = useState({
    name: "",
    bio: "",
    images: [],
    social: {},
    contactEmail: ""
  });

  useEffect(() => {
    fetch("/artist.config.json")
      .then((res) => res.json())
      .then((data) => setArtist(data));
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
      <p className="text-lg mb-6 whitespace-pre-line">{artist.bio}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {artist.images.map((img, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={`Artwork ${index + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="text-base">
        {artist.social && (
          <ul className="mb-2">
            {Object.entries(artist.social).map(([platform, url]) => (
              <li key={platform}>
                <a href={url} target="_blank" className="text-blue-600 hover:underline">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        )}
        {artist.contactEmail && (
          <p className="mt-2">
            Contact: <a href={`mailto:${artist.contactEmail}`} className="text-blue-600 hover:underline">
              {artist.contactEmail}
            </a>
          </p>
        )}
      </div>
    </main>
  );
}
