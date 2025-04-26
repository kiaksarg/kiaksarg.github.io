"use client";

type FilterBarProps = {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
};

export default function FilterBar({
  tags,
  activeTag,
  onTagClick,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onTagClick(null)}
        className={`px-3 py-1 rounded-full transition ${
          activeTag === null
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`px-3 py-1 rounded-full transition ${
            activeTag === tag
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
