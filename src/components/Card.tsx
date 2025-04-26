"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export interface CardProps {
  /** URL to link to */
  href: string;
  /** Main title text */
  title: string;
  /** Short description or excerpt */
  description: string;
  /** Optional cover image URL */
  cover?: string;
  /** Optional list of tags */
  tags?: string[];
  /** Optional ISO date string */
  date?: string;
}

/**
 * A responsive horizontal card with optional cover image, title, description, tags, and date.
 * On small screens it stacks vertically; on larger screens it displays a larger cover.
 */
export default function Card({
  href,
  title,
  description,
  cover,
  tags = [],
  date,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block   rounded-lg overflow-hidden   hover:shadow-lg transition-colors duration-200"
    >
      <div className="flex flex-col md:flex-row">
        {cover && (
          <div className="relative w-full md:w-64 h-64 md:h-54 flex-shrink-0">
            <Image src={cover} alt={title} fill className="object-fill" />
          </div>
        )}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 dark:bg-gray-800 rounded-full px-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            {date && (
              <time
                dateTime={date}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(date))}
              </time>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
