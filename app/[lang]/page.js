import HomeClient from "@/components/HomeClient";
import { getDictionary } from "./dictionaries";

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <HomeClient dict={dict} />;
}
