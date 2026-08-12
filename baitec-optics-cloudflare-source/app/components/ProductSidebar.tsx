import { ArrowUpRight } from "./Icons";

export const productCategories = [
  { id:"lenses", number:"01", name:"Optical Lenses", href:"/products/optical-lenses", items:["Plano-Convex Lenses","Plano-Concave Lenses","Bi-Convex Lenses","Bi-Concave Lenses","Meniscus Lenses","Optical Domes","Cemented Lenses"] },
  { id:"prisms", number:"02", name:"Optical Prisms", href:"/products#prisms", items:["Right-Angle Prisms","Penta Prisms","Dove Prisms","Corner Cube Prisms","Beamsplitter Prisms","Roof Prisms","Cube Prisms","Linear Prisms"] },
  { id:"windows", number:"03", name:"Windows & Flat Optics", href:"/products/windows-flat-optics", items:["Round Windows","Rectangular Windows","Wedge Windows","High-Precision Optical Flats","Infrared Windows"] },
  { id:"mirrors", number:"04", name:"Optical Mirrors", href:"/products/optical-mirrors", items:["Spherical Mirrors","Flat Mirrors"] },
  { id:"beam-shaping", number:"05", name:"Beam Shaping Optics", href:"/products/beam-shaping-optics", items:["Powell Lenses","Optical Integrators","Integrator Arrays"] },
  { id:"filters", number:"06", name:"Optical Filters", href:"/products#filters", items:["Bandpass Filters","Longpass Filters","Shortpass Filters","Neutral Density Filters"] },
  { id:"infrared", number:"07", name:"Infrared Optics", href:"/products#infrared", items:["ZnSe Optics","ZnS Optics","Silicon Optics","CaF₂ Optics","MgF₂ Optics","BaF₂ Optics","Sapphire Optics"] },
  { id:"oem", number:"08", name:"OEM Optical Solutions", href:"/products#oem", items:["Optical Design","Optical Coating","Custom-Shaped Optics","Crystal Material Processing"] },
];

export default function ProductSidebar({ active = "all" }: { active?: string }) {
  return (
    <aside className="catalog-sidebar product-tree" aria-label="Product categories">
      <p className="catalog-label">Product categories</p>
      <div className="product-tree-list">
        {productCategories.map((category) => (
          <details key={category.id} open={active === "all" || active === category.id} className={active === category.id ? "is-active" : ""}>
            <summary><span>{category.number}</span><b>{category.name}</b><i aria-hidden="true" /></summary>
            <ul>
              {category.items.map((item, index) => (
                <li key={item}>
                  {["filters", "infrared", "oem"].includes(category.id)
                    ? <span>{item}</span>
                    : <a href={category.id === "lenses"
                        ? `/products/optical-lenses#item-${index + 1}`
                        : category.id === "windows"
                          ? `/products/windows-flat-optics#item-${index + 1}`
                        : category.id === "mirrors"
                          ? `/products/optical-mirrors#item-${index + 1}`
                        : category.id === "beam-shaping"
                          ? `/products/beam-shaping-optics#item-${index + 1}`
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
