import HomeClient from "@/components/HomeClient";
import { getDictionary } from "./dictionaries";

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const photos = await fetch(`${process.env.BASE_API_URL}/photos`).then((res) =>
    res.json(),
  );
  console.log("🚀 ~ Page ~ photos:", photos);

  return <HomeClient dict={dict} photos={photos} />;
}
