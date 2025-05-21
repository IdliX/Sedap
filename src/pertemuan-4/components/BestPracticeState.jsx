import { useState } from "react";
import frameworkData from "../framework.json";

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;
    
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
        });
    
    /*Inisialisasi Handle perubahan nilai input form*/
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">
            Developed By <b>{item.details.developer}</b> (
            {item.details.releaseYear})
          </p>
          <a className="text-blue-600" href={item.details.officialWebsite}>
            Visit My Website
          </a>
          <div className="mt-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}