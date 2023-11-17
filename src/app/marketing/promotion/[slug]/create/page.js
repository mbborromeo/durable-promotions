export default function PromotionCreate({ params }) {
  console.log("PromotionCreate params", params);

  return <main>Creating {params.slug}</main>;
}
