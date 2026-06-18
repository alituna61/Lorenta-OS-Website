import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ekipten saha notları — nasıl geliştiriyoruz, neyi ölçüyoruz ve genel yapay zekâ Türk işletmelerinde neden başarısız oluyor.",
};

const upcoming = [
  {
    title: "LLM’ler ERP verisinde neden başarısız olur — ve bunu nasıl çözdük",
    tag: "Mimari",
    preview:
      "ERP verisi yoğun, ilişkisel ve bağlama bağımlıdır. Standart RAG hatları üzerinde halüsinasyon görür. İşte bunu çözmek için kurduğumuz hibrit erişim yaklaşımı.",
  },
  {
    title: "Kurumsal yapay zekânın token ekonomisi",
    tag: "Strateji",
    preview:
      "Canlı ERP verisi üzerinde asistan çalıştırmak, naif yapılırsa pahalıdır. Token bütçesi modelimizi ve bunun otonom operasyonun birim ekonomisini neden değiştirdiğini paylaşıyoruz.",
  },
  {
    title: "KVKK, GDPR değildir — ve bu yapay zekâ sistemleri için önemlidir",
    tag: "Uyum",
    preview:
      "Farklar inceliklidir ama mimari açıdan önemlidir. Türk işletmelerinin kişisel veriye dokunan herhangi bir AI sistemini kurmadan önce bilmesi gerekenler.",
  },
  {
    title: "Otonom asistanlar için durum makinesi kurmak",
    tag: "Mühendislik",
    preview:
      "Planla-uygula döngüleri güçlü ama kırılgandır. Üzerine neden belirlenimsel bir durum makinesi katmanı eklediğimizi ve hangi hata modlarını ortadan kaldırdığını anlatıyoruz.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-4">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Kaynaklar · Blog
            </p>
            <h1 className="text-h2 sm:text-display">Ekipten saha notları.</h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Mimari kararlar, çıkarılan dersler ve bilişsel sistemlerin nereye
              gittiğine dair ara sıra filtresiz görüşler. Çok yakında.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container width="default">
          <p className="mb-8 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
            İlk gelecekler
          </p>
          <div className="divide-y divide-border-subtle">
            {upcoming.map((post) => (
              <div key={post.title} className="py-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-border-subtle px-3 py-1 font-mono text-micro text-ink-tertiary">
                    {post.tag}
                  </span>
                  <span className="font-mono text-micro text-ink-tertiary">
                    Çok yakında
                  </span>
                </div>
                <h2 className="mb-2 text-h4 font-medium">{post.title}</h2>
                <p className="text-body text-ink-secondary">{post.preview}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
