
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "@/assets/ibuild-logo-dark.png";
import logoLight from "@/assets/ibuild-logo-light.png";
import { DemoModal } from "@/components/layout/DemoModal";

const Header = () => {
  useEffect(() => {
    const handler = () => setIsDemoOpen(true);
    window.addEventListener(
      "open-demo-modal",
      handler as EventListener,
    );
    return () => {
      window.removeEventListener(
        "open-demo-modal",
        handler as EventListener,
      );
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen((s) => !s);

  useEffect(() => {
    if (!isProductsOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!productsRef.current) return;
      if (!productsRef.current.contains(e.target as Node)) setIsProductsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsProductsOpen(false); };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isProductsOpen]);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Tools", href: "/tools" },
    { name: "Projects", href: "/projects" },
    { name: "Plans & Pricing", href: "/plans" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
    { name: "Log In", href: "#login" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between xl:justify-start">
        {/* Logo (clickable) */}
        <Link to="/" className="flex h-full items-center">
          <img
            src={logoLight}
            alt="iBUILD Applications"
            className="block h-16 w-auto sm:h-20 md:h-20 lg:h-20 dark:hidden"
          />
          <img
            src={logoDark}
            alt="iBUILD Applications"
            className="hidden h-16 w-auto sm:h-20 md:h-20 lg:h-20 dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-2 relative xl:ml-auto">
          {/* Products - click to open */}
          <div className="relative" ref={productsRef}>
            <Button variant="ibuild-nav" className="px-3" onClick={toggleProducts}>
              <span className="flex items-center gap-1">Products <ChevronDown className="h-4 w-4" /></span>
            </Button>
            {isProductsOpen && (
              <div className="absolute left-0 top-full mt-2 w-[900px] bg-popover text-popover-foreground shadow-xl rounded-xl border border-border p-6 z-[60]">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Solutions</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a onClick={() => setIsProductsOpen(false)} href="/projects#residential" className="hover:text-ibuild-red">Residential</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/projects#multi-family" className="hover:text-ibuild-red">Multi-Family</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/projects#land-development" className="hover:text-ibuild-red">Land Development</a></li>
                    </ul>
                    <h4 className="font-semibold mt-6 mb-3">Communication Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a onClick={() => setIsProductsOpen(false)} href="#todo" className="hover:text-ibuild-red">Todo</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="#itinerary" className="hover:text-ibuild-red">Itinerary</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="#discussion" className="hover:text-ibuild-red">Discussion</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Modules</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Accounting Integration</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Construction</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Design</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Estimation/Purchasing</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">File Manager</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Pricebook</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 opacity-0">Modules</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Project Pro-Forma</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Sales</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">System Reports</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">System Views</a></li>
                      <li><a onClick={() => setIsProductsOpen(false)} href="/tools" className="hover:text-ibuild-red">Warranty</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button variant="ibuild-nav" asChild>
            <Link to="/tools">Tools</Link>
          </Button>
          <Button variant="ibuild-nav" asChild>
            <Link to="/projects">Projects</Link>
          </Button>
          <Button variant="ibuild-nav" asChild>
            <Link to="/plans">Plans & Pricing</Link>
          </Button>
          <Button variant="ibuild-nav" asChild>
            <Link to="/support">Support</Link>
          </Button>
          <Button variant="ibuild-nav" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="ibuild-nav" asChild>
            <a href="#login">Log In</a>
          </Button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center space-x-3 xl:ml-6">
          <ThemeToggle />
          <Button variant="ibuild-primary" size="sm" onClick={() => setIsDemoOpen(true)}>Book an appointment</Button>
        </div>

        {/* Tablet */}
        <div className="hidden md:flex xl:hidden items-center space-x-2">
          <Button variant="ibuild-nav" className="text-xs px-1" asChild>
            <Link to="/plans">Pricing</Link>
          </Button>
          <Button variant="ibuild-nav" className="text-xs px-1" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <ThemeToggle />
          <Button variant="ibuild-primary" size="sm" className="text-xs px-2 whitespace-nowrap" onClick={() => setIsDemoOpen(true)}>
            Book an appointment
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Invisible overlay for click-away */}
      {isProductsOpen && <div className="fixed inset-0 z-[40]" onClick={() => setIsProductsOpen(false)} />}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden border-t border-border/50 bg-card">
          <nav className="container max-w-screen-2xl py-4 grid gap-2">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" className="justify-start" asChild>
                {item.href.startsWith('/') ? (
                  <Link to={item.href}>{item.name}</Link>
                ) : (
                  <a href={item.href}>{item.name}</a>
                )}
              </Button>
            ))}
            <div className="pt-2">
              <Button variant="ibuild-primary" size="sm" className="w-full" onClick={() => setIsDemoOpen(true)}>
                Book an appointment
              </Button>
            </div>
          </nav>
        </div>
      )}

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </header>
  );
};

export default Header;
