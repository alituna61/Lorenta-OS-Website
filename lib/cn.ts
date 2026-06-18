/**
 * Sade className birleştirici. Falsy değerleri (undefined, null, false) atar.
 * Tailwind utility'leri çakışırsa son yazılan kazanır — şimdilik bu yeterli;
 * gerektiğinde `tailwind-merge` ekleriz.
 */
type ClassValue = string | number | undefined | null | false;

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
