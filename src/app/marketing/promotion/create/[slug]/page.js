"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function PromotionCreateSlug({ params }) {
  console.log("PromotionSlug params", params);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log("PromotionCreate pathname", pathname);
  console.log("PromotionCreate searchParams", searchParams);

  // const router = useRouter();
  // const urlPath = router.asPath;
  // console.log("PromotionCreate urlPath", urlPath);

  return <main>PromotionCreateSlug: {params.slug}</main>;
}
