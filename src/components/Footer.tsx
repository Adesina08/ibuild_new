
import { Mail, Phone, Youtube, Facebook, Linkedin } from "lucide-react";
import logoDark from "@/assets/ibuild-logo-dark.png";
import logoLight from "@/assets/ibuild-logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-[#0C1420] text-white">
      <div className="container max-w-screen-2xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Social */}
          <div>
            <div className="mb-6">
              <a href="/" className="block">
                <img
                  src={logoDark}
                  alt="iBUILD Applications"
                  className="h-16 w-auto sm:h-20 md:h-24"
                />
              </a>
            </div>
            <p className="text-sm opacity-80">Follow</p>
            <div className="flex items-center gap-5 mt-3">
              <a aria-label="YouTube" href="#" className="opacity-90 hover:opacity-100"><Youtube className="w-5 h-5" /></a>
              <a aria-label="Facebook" href="#" className="opacity-90 hover:opacity-100"><Facebook className="w-5 h-5" /></a>
              <a aria-label="Email" href="mailto:info@ibuildresidential.com" className="opacity-90 hover:opacity-100"><Mail className="w-5 h-5" /></a>
              <a aria-label="LinkedIn" href="#" className="opacity-90 hover:opacity-100"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-lg font-semibold mb-4 opacity-90">Product</h5>
            <ul className="space-y-3 text-sm opacity-90">
              <li><a href="/plans" className="hover:text-ibuild-red">Plan & Pricing</a></li>
              <li><a href="/tools" className="hover:text-ibuild-red">Modules</a></li>
              <li><a href="#communication" className="hover:text-ibuild-red">Communication Features</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold mb-4 opacity-90">Support</h5>
            <ul className="space-y-3 text-sm opacity-90">
              <li><a href="#docs" className="hover:text-ibuild-red">Documentation</a></li>
              <li><a href="/support" className="hover:text-ibuild-red">Customer Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-lg font-semibold mb-4 opacity-90">Company</h5>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center gap-3"><Phone className="w-4 h-4" /><span>(587) 555-5555</span></div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4" /><a className="hover:text-ibuild-red" href="mailto:info@ibuildresidential.com">info@ibuildresidential.com</a></div>
              <ul className="pt-2 space-y-3">
                <li><a href="#about" className="hover:text-ibuild-red">About</a></li>
                <li><a href="#news" className="hover:text-ibuild-red">News</a></li>
                <li><a href="#career" className="hover:text-ibuild-red">Career</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">© 2025 Ibuild. All rights reserved</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="text-sm opacity-80 hover:text-white">Terms</a>
            <a href="#privacy" className="text-sm opacity-80 hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
