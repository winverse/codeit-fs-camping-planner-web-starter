import { CampsitesPage } from "@/features/campsites/CampsitesPage";
import { toPetFilter } from "@/lib/campsite-filter";

export default async function Home({ searchParams }) {
  const { pet } = await searchParams;

  return <CampsitesPage pet={toPetFilter(pet)} />;
}
