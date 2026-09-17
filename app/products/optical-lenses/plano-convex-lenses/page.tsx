import LensDetailPage from "../../../components/LensDetailPage";
import { standardLensSpecifications } from "../specifications";

export const metadata = {
  title: "Plano-Convex Lenses | Custom Precision Optics | Baitec Optics",
  description:
    "Custom precision plano-convex lenses manufactured to customer drawings and specifications. Available in optical glass, fused silica and crystalline materials for prototypes and production.",
  alternates: {
    canonical: "https://baitecoptics.com/products/optical-lenses/plano-convex-lenses",
  },
};

export default function Page() { return <LensDetailPage title="Plano-Convex Lenses" description="Custom precision plano-convex lenses manufactured to customer drawings and specifications for collimation, focusing, imaging, and other optical applications." image="/products/lenses/plano-convex.webp" specifications={standardLensSpecifications} />; }
