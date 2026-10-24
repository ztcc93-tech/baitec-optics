export const categoryCapabilities: Record<string, {intro: string; sections: {title: string; text: string}[]}> = {
  domes: {
    intro: "Custom optical domes provide a curved protective interface between an optical system and its environment. We review the dome geometry, optical material, operating wavelength and mounting requirements against your drawing.",
    sections: [
      { title: "Visible Optical Domes", text: "Dome-shaped optical covers for cameras, sensors and imaging assemblies. Inner and outer radii, wall thickness and the clear aperture must be considered together to suit the optical layout." },
      { title: "Infrared Optical Domes", text: "Protective domes for infrared optical assemblies require material selection around the actual wavelength band and environment. Send the transmission band and mechanical interface for material and manufacturing review." },
      { title: "Geometry & Inspection", text: "Specify inner and outer profiles, diameter, height, wall thickness, centering, surface requirements and mounting edges. Critical inspection criteria should be defined on the drawing." },
      { title: "Coatings & Application Review", text: "Coating feasibility depends on the substrate, wavelength, curved surface and environmental requirements. We review prototypes, small batches and repeat production against the agreed specification." },
    ],
  },
  infrared: {
    intro: "Custom infrared windows and lenses are manufactured around the transmission band, optical geometry and operating conditions of your instrument. Material suitability is reviewed for each application rather than assumed from the material name alone.",
    sections: [
      { title: "Infrared Windows", text: "Flat, round, rectangular and wedged windows provide an optical interface for infrared instruments. Specify the aperture, thickness, surface figure and any required wedge or parallelism." },
      { title: "Infrared Lenses", text: "Spherical and cylindrical transmissive components can focus, collimate or shape infrared light according to their surface geometry. Send radii or focal-length requirements, dimensions and the operating band for review." },
      { title: "Material Selection", text: "Material options for review include CaF2, BaF2, ZnSe, ZnS, silicon, germanium, sapphire and GaAs. Their transmission ranges and environmental properties differ; selection depends on wavelength, temperature, durability and the component geometry." },
      { title: "Coatings & Quotation", text: "Send substrate, wavelength range, transmission or reflection targets, surface requirements, coating specification and quantity. Coating feasibility and manufacturing tolerances are assessed before quotation." },
    ],
  },
};
