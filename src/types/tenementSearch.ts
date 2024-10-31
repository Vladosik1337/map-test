interface SizeRange {
  size: [number, number];
}

interface RentRange {
  rent: [number, number];
}

interface RoomsRange {
  roomsBed: [number, number];
  roomsBath: [number, number];
}

interface FilterType {
  type: number[];
  subType: number[];
  condition: number[];
  accessibility: number[];
  rentType: string[];
  floorType: number[];
  heatingType: number[];
  availableNow: boolean;
  within: number | null;
  bbox: number[] | null;
  near: number[] | null;
  amenities: number[] | null;
}

interface SortOptions {
  rent: "asc" | "desc" | null;
  distance: "asc" | "desc" | null;
}

interface PagingOptions {
  pageSize: number;
  page: number;
}

interface FilterObject {
  filter: Partial<SizeRange & RentRange & RoomsRange & FilterType>;
  sort?: SortOptions;
  paging?: PagingOptions;
}
