import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const yasalLinks = [
  { label: "KVKK", href: "/legal/kvkk" },
  { label: "Gizlilik", href: "/legal/privacy" },
  { label: "Kullanım Şartları", href: "/legal/terms" },
  { label: "Çerezler", href: "/legal/cookies" },
];

const sirketLinks = [
  { label: "Hakkımızda", href: "/company/about" },
  { label: "Müşteriler", href: "/customers" },
  { label: "Kariyer", href: "/company/careers" },
  { label: "İletişim", href: "/company/contact" },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-white/10 bg-black transition-colors duration-500
                 group-data-[inverted=true]/theme:border-black/10
                 group-data-[inverted=true]/theme:bg-white"
    >
      <div className="absolute bottom-0 left-0 w-60 h-60 z-10 pointer-events-none">
        <Image
          src="/mascot_white_footer.png"
          alt="Lorenta OS Logo"
          fill
          className="object-contain object-bottom transition-opacity duration-500 ease-in-out
                     group-data-[inverted=true]/theme:opacity-0
                     group-data-[inverted=false]/theme:opacity-100"
          priority
        />
        <Image
          src="/mascot_black_footer.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain object-bottom transition-opacity duration-500 ease-in-out
                     group-data-[inverted=true]/theme:opacity-100
                     group-data-[inverted=false]/theme:opacity-0"
        />
      </div>

      <Container width="wide">
        <div className="grid grid-cols-1 gap-10 pt-16 pb-16 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left relative z-20">
          
          <div className="hidden md:block"></div>

          {/* Sosyal medya ikonları ve telif hakkı yazısı bu blokta birleştirildi */}
          <div className="flex flex-col w-full items-center md:items-start justify-center pt-0 space-y-6">
            <div className="flex space-x-5">
              <a
                href={siteConfig?.social?.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 text-white/40 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/40 group-data-[inverted=true]/theme:hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={siteConfig?.social?.x || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-6 h-6 text-white/40 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/40 group-data-[inverted=true]/theme:hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.96z"/>
                </svg>
              </a>
              <a
                href={siteConfig?.social?.youtube || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-6 h-6 text-white/40 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/40 group-data-[inverted=true]/theme:hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>

              <a
                href={siteConfig?.social?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 text-white/40 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/40 group-data-[inverted=true]/theme:hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7 8h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.1 3.4 6.1 7.8V24h-5V16c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24H7z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-xs text-white/40 group-data-[inverted=true]/theme:text-black/40 mt-auto">
              © {new Date().getFullYear()} LORENTA OS
            </p>
          </div>

          <div className="pt-0">
            <h4 className="text-xs uppercase tracking-widest text-white/40 group-data-[inverted=true]/theme:text-black/40 mb-4">
              Yasal
            </h4>
            <nav className="flex flex-col space-y-3 items-center md:items-start">
              {yasalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/65 group-data-[inverted=true]/theme:hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-0">
            <h4 className="text-xs uppercase tracking-widest text-white/40 group-data-[inverted=true]/theme:text-black/40 mb-4">
              Şirket
            </h4>
            <nav className="flex flex-col space-y-3 items-center md:items-start">
              {sirketLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/65 group-data-[inverted=true]/theme:hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}