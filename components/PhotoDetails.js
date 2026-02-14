import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function PhotoDetails({ id, lang }) {
  const dictionary = await getDictionary(lang);
  const photo = await fetch(`${process.env.BASE_API_URL}/photos/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="grid my-7 grid-cols-12 gap-4 2xl:gap-10">
      {/* main photo */}
      <div className="col-span-12 lg:col-span-8 border rounded-xl relative overflow-hidden min-h-75 lg:min-h-[70vh]">
        <Image
          src={photo.url}
          alt={photo.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* main photo ends */}

      {/* details card */}
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>

        {/* tags */}
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo.tags.map((tag) => `#${tag}`).join(", ")}
        </div>

        {/* info rows */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dictionary.views}</span>
            <span className="font-bold">{photo.views}</span>
          </div>

          <div className="flex justify-between">
            <span>{dictionary.share}</span>
            <span className="font-bold">{photo.share}</span>
          </div>

          <div className="flex justify-between">
            <span>{dictionary.uploadedOn}</span>
            <span className="font-bold">
              {new Date(photo.uploaded).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* author info */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Image
                src={photo.author.avatar}
                alt={photo.author.name}
                width={56}
                height={56}
                className="rounded-full border"
              />

              <div>
                <h6 className="lg:text-lg font-bold">{photo.author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  {photo.author.followers} Followers
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/icons/follow.svg"
                alt="Follow"
                width={20}
                height={20}
              />
              Follow
            </button>
          </div>

          <p className="text-xs lg:text-sm text-black/60">{photo.author.bio}</p>
        </div>

        {/* actions */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/icons/heart.svg" alt="Like" width={20} height={20} />
              {photo.likes}
            </button>

            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/icons/save.svg" alt="Save" width={20} height={20} />
              {dictionary.save}
            </button>

            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/icons/share.svg"
                alt="Share"
                width={20}
                height={20}
              />
              {dictionary.share}
            </button>
          </div>
        </div>
      </div>
      {/* details card ends */}
    </div>
  );
}
