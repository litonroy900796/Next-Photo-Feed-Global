// ClientComponent.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomeClient({ photos, dict }) {
  const [photoList, setPhotoList] = useState(photos);
  return (
    <div className="columns-1 py-8 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>a:not(:first-child)]:mt-4 [&>a]:block [&>a]:rounded-lg [&>a]:overflow-hidden [&>a]:relative [&>a]:cursor-pointer">
      {photoList.map((photo) => (
        <Link key={photo.id} href={`photos/${photo.id}`} className="group">
          <Image src={photo.url} alt={photo.title} width={700} height={700} />

          <div className="title-container">
            <h4 className="title">{photo.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
