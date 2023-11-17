import SubNav from "@/components/SubNav/SubNav";

export default function MarketingLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <SubNav />

      {children}
    </>
  );
}
