import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";

export const metadata = {
  title: "Plano-Concave Lenses | Custom Precision Optics | Baitec Optics",
  description:
    "Custom precision plano-concave lenses manufactured to customer drawings and specifications for beam expansion, optical divergence and other optical applications.",
  alternates: {
    canonical: "https://baitecoptics.com/products/optical-lenses/plano-concave-lenses",
  },
};

export default function Page() {
  return (
    <LensDetailPage
      title="Plano-Concave Lenses"
      description="Custom precision plano-concave lenses manufactured to customer drawings and specifications for beam expansion, optical divergence, and other optical applications."
      image="/products/lenses/plano-concave.webp"
      specifications={standardLensSpecifications}
    />
  );
}
