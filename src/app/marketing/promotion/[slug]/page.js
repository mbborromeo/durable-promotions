export default function Promotion({ params }) {
  console.log("Promotion View params", params);

  return <main>Viewing {params.slug}</main>;
}
