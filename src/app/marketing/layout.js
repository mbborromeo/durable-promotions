import SubNav from "@/components/SubNav/SubNav";

export default function MarketingLayout({ children }) {
  return (
    <>
      <SubNav />
      {children}
    </>
  );
}
