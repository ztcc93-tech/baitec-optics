import { ArrowUpRight } from "./Icons";

export const productCategories = [
  { id:"lenses", number:"01", name:"Optical Lenses", href:"/products/optical-lenses", items:["Plano-Convex Lenses","Positive Meniscus Lenses","Bi-Convex Lenses","Three-Element Cemented Lenses","Plano-Concave Lenses","Bi-Concave Lenses","Optical Domes"] },
  { id:"prisms", number:"02", name:"Optical Prisms", href:"/products/optical-prisms", items:["Right-Angle Prisms","Penta Prisms","Dove Prisms","Corner Cube Prisms","Beamsplitter Prisms","Roof Prisms","Cube Prisms","Linear Prisms"] },
  { id:"windows", number:"03", name:"Windows & Flat Optics", href:"/products/windows-flat-optics", items:["Round Windows","Rectangular Windows","Wedge Windows","High-Precision Optical Flats","Infrared Windows"] },
  { id:"mirrors", number:"04", name:"Optical Mirrors", href:"/products/optical-mirrors", items:["Spherical Mirrors","Flat Mirrors"] },
  { id:"beam-shaping", number:"05", name:"Beam Shaping Optics", href:"/products/beam-shaping-optics", items:["Powell Prisms","Optical Integrators","Array Integrators"] },
  { id:"filters", number:"06", name:"Optical Filters", href:"/products/optical-filters", items:[] },
  { id:"infrared", number:"07", name:"Infrared Optics", href:"/products/infrared-optics", items:[] },
  { id:"oem", number:"08", name:"OEM Optical Solutions", href:"/products/oem-optical-solutions", items:[] },
];

export default function ProductSidebar({ active = "all" }: { active?: string }) {
  return (
    <aside className="catalog-sidebar product-tree" aria-label="Product categories">
      <p className="catalog-label">Product categories</p>
      <div className="product-tree-list">
        {productCategories.map((category) => (
          category.items.length === 0 ? (
            <a className={`product-tree-direct ${active === category.id ? "is-active" : ""}`} href={category.href} key={category.id}><span>{category.number}</span><b>{category.name}</b><ArrowUpRight /></a>
          ) : <details key={category.id} open={active === "all" || active === category.id} className={active === category.id ? "is-active" : ""}>
            <summary><span>{category.number}</span><a className="product-tree-heading" href={category.href}>{category.name}</a><i aria-hidden="true" /></summary>
            <ul>
              {category.items.map((item, index) => (
                <li key={item}>
                  {<a href={category.id === "lenses"
                        ? `/products/optical-lenses/${["plano-convex-lenses","positive-meniscus-lenses","bi-convex-lenses","three-element-cemented-lenses","plano-concave-lenses","bi-concave-lenses","optical-domes"][index]}`
                        : category.id === "prisms"
                          ? `/products/optical-prisms/${["right-angle-prisms","penta-prisms","dove-prisms","corner-cube-prisms","beamsplitter-prisms","roof-prisms","cube-prisms","linear-prisms"][index]}`
                        : category.id === "windows"
                          ? `/products/windows-flat-optics/${["round-windows","rectangular-windows","wedge-windows","high-precision-optical-flats","infrared-windows"][index]}`
                        : category.id === "mirrors"
                          ? `/products/optical-mirrors/${["spherical-mirrors","flat-mirrors"][index]}`
                        : category.id === "beam-shaping"
                          ? `/products/beam-shaping-optics/${["powell-prisms","optical-integrators","array-integrators"][index]}`
                          : category.href}>{item}</a>}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
      <a className="catalog-quote" href="/contact">Custom requirement <ArrowUpRight /></a>
    </aside>
  );
}
