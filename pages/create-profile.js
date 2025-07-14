import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    images: ["", "", "", "", "", ""],
    social: { Instagram: "", Twitter: "" },
    contact: {
      email: "",
      mobile: { code: "+971", number: "" },
      whatsapp: { code: "+971", number: "" },
      location: "",
    },
    exhibitions: [""],
    awards: [""],
  });

  const router = useRouter();

  function handleChange(e, path, index) {
    const value = e.target.value;
    const updated = { ...formData };

    if (path === "images") {
      updated.images[index] = value;
    } else if (path.includes("social")) {
      const key = path.split(".")[1];
      updated.social[key] = value;
    } else if (path.includes("contact")) {
      const [, key, subkey] = path.split(".");
      if (subkey) {
        updated.contact[key][subkey] = value;
      } else {
        updated.contact[key] = value;
      }
    } else if (path === "exhibitions") {
      updated.exhibitions[0] = value;
    } else if (path === "awards") {
      updated.awards[0] = value;
    } else {
      updated[path] = value;
    }

    setFormData(updated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("artistData", JSON.stringify(formData));
    router.push("/preview-profile");
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Create Your Portfolio</h1>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Name & Bio */}
        <div>
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Bio</label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleChange(e, "bio")}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Images */}
        <div>
          <label className="block font-medium mb-2">Artwork Image URLs</label>
          {formData.images.map((img, i) => (
            <input
              key={i}
              type="text"
              value={img}
              placeholder={`Image ${i + 1} URL`}
              onChange={(e) => handleChange(e, "images", i)}
              className="w-full border rounded p-2 mb-2"
            />
          ))}
        </div>

        {/* Social */}
        <div>
          <label className="block font-medium mb-2">Instagram</label>
          <input
            type="url"
            value={formData.social.Instagram}
            onChange={(e) => handleChange(e, "social.Instagram")}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Twitter</label>
          <input
            type="url"
            value={formData.social.Twitter}
            onChange={(e) => handleChange(e, "social.Twitter")}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.contact.email}
            onChange={(e) => handleChange(e, "contact.email")}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Mobile</label>
          <div className="flex space-x-2">
            <select
              value={formData.contact.mobile.code}
              onChange={(e) => handleChange(e, "contact.mobile.code")}
              className="border rounded p-2"
            >
              <option>+971</option><option>+49</option><option>+1</option><option>+44</option>
            </select>
            <input
              type="tel"
              value={formData.contact.mobile.number}
              onChange={(e) => handleChange(e, "contact.mobile.number")}
              className="flex-1 border rounded p-2"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-2">WhatsApp</label>
          <div className="flex space-x-2">
            <select
              value={formData.contact.whatsapp.code}
              onChange={(e) => handleChange(e, "contact.whatsapp.code")}
              className="border rounded p-2"
            >
              <option>+971</option><option>+49</option><option>+1</option><option>+44</option>
            </select>
            <input
              type="tel"
              value={formData.contact.whatsapp.number}
              onChange={(e) => handleChange(e, "contact.whatsapp.number")}
              className="flex-1 border rounded p-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Based in</label>
          <input
            type="text"
            value={formData.contact.location}
            onChange={(e) => handleChange(e, "contact.location")}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Optional Fields */}
        <div>
          <label className="block font-medium mb-2">Exhibitions (optional)</label>
          <input
            type="text"
            value={formData.exhibitions[0]}
            onChange={(e) => handleChange(e, "exhibitions")}
            className="w-full"
