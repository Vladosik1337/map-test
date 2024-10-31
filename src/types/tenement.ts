interface AmenityText {
  [key: number]: string;
}

interface Location {
  longitude: number;
  latitude: number;
}

interface MediaItem {
  id: number;
  bluredDataURL: string;
  cdnUrl?: string;
  name?: string;
  sort?: number;
  title: string;
  type: string;
}

interface Tenement {
  id: number;
  title: string;
  abstract: string;
  accessibility: number;
  active: boolean;
  address: string;
  addressDoor?: string;
  amenities: number[];
  amenitiesTexts: AmenityText;
  autoRenewUntil?: string | null;
  availableFrom?: string | null;
  city: string;
  condition: number;
  constructionYear: number;
  country: string;
  createdAt: string;
  deleted: boolean;
  floor?: number | null;
  floorType?: number;
  heatingType?: number;
  highlight: boolean;
  lastRenewAt?: string | null;
  leaseDuration?: number;
  location: [number, number];
  locationReal?: [number, number] | null;
  media: MediaItem[];
  modernisationYear?: number;
  owner?: string | null;
  rent: number;
  rentDeposit?: number;
  rentFull: number;
  rentType: string;
  rentUtilities: number;
  rooms: number;
  roomsBath: number;
  roomsBed: number;
  size: number;
  subType?: number;
  tenements?: Tenement[];
  type?: number;
  unitType: string;
  updatedAt: string;
  user?: string | null;
  verified: boolean;
  zip: string;
}

interface TenementPadding {
  page: number;
  pageCount: number;
  pageSize: number;
  totalCount: number;
}
