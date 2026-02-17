import type { ImageMetadata } from 'astro';

// ─── Floorplan thumbnails ───────────────────────────────────────────
import f24aThumb from '~/assets/images/floorplans/F24A-ico.jpg';
import f24bThumb from '~/assets/images/floorplans/F24B-ico.jpg';
import f24cThumb from '~/assets/images/floorplans/F24C-ico.jpg';
import f24dThumb from '~/assets/images/floorplans/F24D-ico.jpg';
import n19Thumb from '~/assets/images/floorplans/N19-ico.jpg';
import n21Thumb from '~/assets/images/floorplans/N21-ico.jpg';

// ─── Typology hero images ───────────────────────────────────────────
import mainBedroom from '~/assets/images/renders/main-bedroom.jpg';
import poolView from '~/assets/images/renders/pool-view.png';

// ─── Types ──────────────────────────────────────────────────────────

export type HouseType = '2' | '3';

export interface House {
  /** Identifier shown in the UI (e.g. "F24A", "N19") */
  label: string;
  /** Typology key */
  type: HouseType;
  /** Full street address */
  address: string;
  /** Precise constructed area, e.g. "364,36 m²" */
  constructedArea: string;
  /** Precise plot area, e.g. "608,54 m²" */
  plotArea: string;
  /** Display price (e.g. "2.915.000 € + IVA") — ignored when sold is true */
  price: string;
  /** Whether the house has been sold */
  sold: boolean;
  /** Path to the floorplan PDF (relative to public/) */
  floorplanPdf: string;
  /** Thumbnail image for the floorplan card */
  thumbnail: ImageMetadata;
}

export interface Typology {
  /** Typology key — must match House.type */
  type: HouseType;
  /** Main heading (e.g. "Dos plantas + sótano") */
  title: string;
  /** Secondary heading (e.g. "Viviendas F24") */
  subtitle: string;
  /** Descriptive paragraph */
  description: string;
  /** Hero image for the typology block */
  image: ImageMetadata;
  /** Alt text for the hero image */
  imageAlt: string;
}

// ─── Data ───────────────────────────────────────────────────────────
//
//  ✏️  EDIT PRICES, AREAS, AND SOLD STATUS HERE.
//     Both the "Vista Aérea" table and the "Viviendas" section
//     read from these two arrays.
//

export const houses: House[] = [
  {
    label: 'F24A',
    type: '2',
    address: 'Fuentelarreina 24A',
    constructedArea: '364,36 m²',
    plotArea: '608,54 m²',
    price: '2.915.000 € + IVA',
    sold: false,
    floorplanPdf: '/floorplans/F24A.pdf',
    thumbnail: f24aThumb,
  },
  {
    label: 'F24B',
    type: '2',
    address: 'Fuentelarreina 24B',
    constructedArea: '365,50 m²',
    plotArea: '558,26 m²',
    price: 'VENDIDO',
    sold: true,
    floorplanPdf: '/floorplans/F24B.pdf',
    thumbnail: f24bThumb,
  },
  {
    label: 'F24C',
    type: '2',
    address: 'Fuentelarreina 24C',
    constructedArea: '408,65 m²',
    plotArea: '535,48 m²',
    price: '2.942.500 € + IVA',
    sold: false,
    floorplanPdf: '/floorplans/F24C.pdf',
    thumbnail: f24cThumb,
  },
  {
    label: 'F24D',
    type: '2',
    address: 'Fuentelarreina 24D',
    constructedArea: '480,49 m²',
    plotArea: '585,84 m²',
    price: '3.080.000 € + IVA',
    sold: false,
    floorplanPdf: '/floorplans/F24D.pdf',
    thumbnail: f24dThumb,
  },
  {
    label: 'N21',
    type: '3',
    address: 'Navalmanzano 21',
    constructedArea: '428,55 m²',
    plotArea: '510,30 m²',
    price: 'VENDIDO',
    sold: true,
    floorplanPdf: '/floorplans/N21.pdf',
    thumbnail: n21Thumb,
  },
  {
    label: 'N19',
    type: '3',
    address: 'Navalmanzano 19',
    constructedArea: '399,65 m²',
    plotArea: '518,80 m²',
    price: '2.970.000 € + IVA',
    sold: false,
    floorplanPdf: '/floorplans/N19.pdf',
    thumbnail: n19Thumb,
  },
];

export const typologies: Typology[] = [
  {
    type: '2',
    title: 'Dos plantas + sótano',
    subtitle: 'Viviendas F24',
    description:
      'Compuesta por cuatro dormitorios, todos con baño en suite y el principal con vestidor, un despacho en planta baja y garaje para tres o cuatro vehículos, más zona de lavandería en planta sótano. Esta tipología cuenta con solárium en cubierta desde el que disfrutar de unas maravillosas vistas.',
    image: mainBedroom,
    imageAlt: 'Dormitorio principal',
  },
  {
    type: '3',
    title: 'Tres plantas + sótano',
    subtitle: 'Viviendas N',
    description:
      'Equipada con ascensor, compuesta por tres dormitorios, todos con baño en suite y el principal con vestidor, un despacho en planta baja y garaje para tres vehículos, más zona de lavandería. Además, cuenta con una gran sala para gimnasio o biblioteca con baño en planta superior, desde la que se puede disfrutar de unas magníficas vistas al parque del Pardo y al campo de golf.',
    image: poolView,
    imageAlt: 'Vista a la piscina',
  },
];

// ─── Helpers ────────────────────────────────────────────────────────

/** Get houses that belong to a given typology */
export function housesByType(type: HouseType): House[] {
  return houses.filter((h) => h.type === type);
}

/**
 * Parse a Spanish-formatted area string like "364,36 m²" and return a
 * rounded integer version like "364 m²" (used in the summary table).
 */
export function roundedArea(precise: string): string {
  const num = parseFloat(precise.replace(/\./g, '').replace(',', '.'));
  return `${Math.round(num)} m²`;
}

/** Number of houses that are still available (not sold) */
export const availableCount: number = houses.filter((h) => !h.sold).length;

