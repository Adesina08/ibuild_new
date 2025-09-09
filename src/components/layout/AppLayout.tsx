
import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
