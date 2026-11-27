export type RegionKey = 'sa' | 'us' | 'eu';

export interface CloudRegionInfo {
  key: RegionKey;
  code: string;
  city: string;
  label: string;
  flag: string;
  pingMs: number;
  ping: string;
  clusterLoad: number;
  status: string;
  coordsLabel: string;
  /** Exact visual coordinates (%) mapped onto /images/danter-globe-alpha.webp */
  globePos: { x: number; y: number };
  /** Resting subtle 3D tilt bias (degrees) when this region is focused */
  tiltBias: { rotateX: number; rotateY: number };
}

export const CLOUD_REGIONS: Record<RegionKey, CloudRegionInfo> = {
  sa: {
    key: 'sa',
    code: 'sa-east-1',
    city: 'São Paulo',
    label: 'São Paulo (sa-east-1)',
    flag: '🇧🇷',
    pingMs: 14,
    ping: '14ms',
    clusterLoad: 42,
    status: 'Nominal',
    coordsLabel: '23.55°S 46.63°W',
    globePos: { x: 69, y: 68 },
    tiltBias: { rotateX: 5, rotateY: -4 },
  },
  us: {
    key: 'us',
    code: 'us-east-1',
    city: 'N. Virgínia',
    label: 'N. Virgínia (us-east-1)',
    flag: '🇺🇸',
    pingMs: 108,
    ping: '108ms',
    clusterLoad: 58,
    status: 'Nominal',
    coordsLabel: '39.04°N 77.48°W',
    globePos: { x: 47, y: 31 },
    tiltBias: { rotateX: -5, rotateY: 2 },
  },
  eu: {
    key: 'eu',
    code: 'eu-central-1',
    city: 'Frankfurt',
    label: 'Frankfurt (eu-central-1)',
    flag: '🇪🇺',
    pingMs: 172,
    ping: '172ms',
    clusterLoad: 36,
    status: 'Nominal',
    coordsLabel: '50.11°N 08.68°E',
    globePos: { x: 78, y: 24 },
    tiltBias: { rotateX: -6, rotateY: -7 },
  },
};

export const REGION_ORDER: RegionKey[] = ['sa', 'us', 'eu'];
