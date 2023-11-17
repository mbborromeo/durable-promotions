import SubNav from "@/components/SubNav/SubNav";

export default function MarketingLayout({ children, params }) {
  return (
    <>
      <SubNav {...params} />
      {children}
    </>
  );
}
