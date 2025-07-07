import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SampleProfile() {
  const [showContact, setShowContact] = useState(false);

  const artist = {
    name: "Jane Doe",
    bio: "Multidisciplinary artist based in Berlin. Exploring emotions through abstract forms.",
    images: [
      "/art1.jpg",
      "/art2.jpg",
      "/art3.jpg",
      "/art4.jpg",
      "/art5.jpg",
      "/art6.jpg",
    ],
    social: {
      Instagram: "https://instagram.com/janedoe",
      Twitter: "https://twitter.com/janedoe_art",
    },
    contact: {
      email: "janedoe@example.com",
      mobile: { code: "+49", number: "123456789" },
      whatsapp: { code: "+49", number: "987654321" },
      location: "Berlin, Germany",
    },
    exhibitions: ["Solo Exhibition at ART HQ, 2022"],
    awards: ["Emerging Artist Prize, 2023"],
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16 max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">{artist.name}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{artist.bio}</p>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16">
        {artist.images.map((src, idx) => (
          <div key={idx} className="rounded overflow-hidden">
            <img
              src={src}
              alt={`Artwork ${idx + 1}`}
              className="object-cover w-full h-full rounded shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Contact Toggle */}
      <div className="text-center mb-10">
        <button
          onClick={() => setShowContact(!showContact)}
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium transition hover:scale-105"
        >
          {showContact ? "Hide Contact" : "Contact"}
        </button>
      </div>

      {/* Contact Info */}
      {showContact && (
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-sm text-gray-800 max-w-xl mx-auto">
          <div className="mb-3">
            <strong>Email:</strong> {artist.contact.email}
          </div>
          <div className="mb-3">
            <strong>Mobile:</strong>{" "}
            <select defaultValue={artist.contact.mobile.code} className="mr-2 border rounded px-2 py-1">
              <option>+49</option>
              <option>+971</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            {artist.contact.mobile.number}
          </div>
          <div className="mb-3">
            <strong>WhatsApp:</strong>{" "}
            <select defaultValue={artist.contact.whatsapp.code} className="mr-2 border rounded px-2 py-1">
              <option>+49</option>
              <option>+971</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            {artist.contact.whatsapp.number}
          </div>
          <div className="mb-3">
            <strong>Based in:</strong> {artist.contact.location}
          </div>
          {artist.exhibitions?.length > 0 && (
            <div className="mb-3">
              <strong>Exhibitions:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {artist.exhibitions.map((exh, i) => (
                  <li key={i}>{exh}</li>
                ))}
              </ul>
            </div>
          )}
          {artist.awards?.length > 0 && (
            <div>
              <strong>Awards:</strong>
              <ul className="list-disc list-inside text-gray-600">
                {artist.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Social Links */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-500 mb-2">Follow:</p>
        <div className="flex justify-center space-x-6 text-gray-700 text-lg">
          {Object.entries(artist.social).map(([platform, url], idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
