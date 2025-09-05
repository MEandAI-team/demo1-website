import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Gallery } from './Gallery';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface Photo {
  id: number;
  src: string;
  alt: string;
  hoverText: string;
  collectionTitle: string;
  gallery: GalleryImage[];
  overlay?: {
    title: string;
    year: string;
  };
}

const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1647170353231-e053570a4a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NzA4MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Couple Portrait",
    hoverText: "ROMANTIC COUPLES",
    collectionTitle: "Romantic Couples Collection",
    gallery: [
      { id: "1-1", src: "https://images.unsplash.com/photo-1749224280334-460eb823e0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBvcnRyYWl0JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTY3MTAxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 1" },
      { id: "1-2", src: "https://images.unsplash.com/photo-1611075099543-1c7e1e48183e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NjQ0NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 2" },
      { id: "1-3", src: "https://images.unsplash.com/photo-1698833994589-605fada9de5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzEwMTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 3" },
      { id: "1-4", src: "https://images.unsplash.com/photo-1749224280334-460eb823e0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBvcnRyYWl0JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTY3MTAxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 4" },
      { id: "1-5", src: "https://images.unsplash.com/photo-1611075099543-1c7e1e48183e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NjQ0NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 5" },
      { id: "1-6", src: "https://images.unsplash.com/photo-1698833994589-605fada9de5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzEwMTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 6" },
      { id: "1-7", src: "https://images.unsplash.com/photo-1749224280334-460eb823e0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBvcnRyYWl0JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTY3MTAxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 7" },
      { id: "1-8", src: "https://images.unsplash.com/photo-1611075099543-1c7e1e48183e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NjQ0NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic Couple Portrait 8" }
    ]
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1608894978040-9fe199c1621d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBsYW5kc2NhcGUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU2NzA4MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Indonesia Landscape",
    hoverText: "TRAVEL SERIES",
    collectionTitle: "Indonesia Travel Collection",
    gallery: [
      { id: "2-1", src: "https://images.unsplash.com/photo-1608894978040-9fe199c1621d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTY3MTAxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 1" },
      { id: "2-2", src: "https://images.unsplash.com/photo-1632019475103-15fffd9dbd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjB0cm9waWNhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTY3MTAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 2" },
      { id: "2-3", src: "https://images.unsplash.com/photo-1724568834522-81eb8e5c048c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NTY3MTAxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 3" },
      { id: "2-4", src: "https://images.unsplash.com/photo-1608894978040-9fe199c1621d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBsYW5kc2NhcGUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU2NzA4MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 4" },
      { id: "2-5", src: "https://images.unsplash.com/photo-1632019475103-15fffd9dbd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjB0cm9waWNhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTY3MTAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 5" },
      { id: "2-6", src: "https://images.unsplash.com/photo-1724568834522-81eb8e5c048c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NTY3MTAxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 6" },
      { id: "2-7", src: "https://images.unsplash.com/photo-1608894978040-9fe199c1621d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTY3MTAxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Indonesia Landscape 7" }
    ],
    overlay: {
      title: "INDONESIA",
      year: "2018"
    }
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1620262612829-06834d0c2ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudHMlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU2NzA4MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Coffee and Plants Lifestyle",
    hoverText: "LIFESTYLE MOMENTS",
    collectionTitle: "Lifestyle Photography Collection",
    gallery: [
      { id: "3-1", src: "https://images.unsplash.com/photo-1672707069442-91a5854ce1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjb2ZmZWUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 1" },
      { id: "3-2", src: "https://images.unsplash.com/photo-1756277441733-666ef9a45207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWZlc3R5bGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 2" },
      { id: "3-3", src: "https://images.unsplash.com/photo-1620262612829-06834d0c2ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudHMlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU2NzA4MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 3" },
      { id: "3-4", src: "https://images.unsplash.com/photo-1672707069442-91a5854ce1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjb2ZmZWUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 4" },
      { id: "3-5", src: "https://images.unsplash.com/photo-1756277441733-666ef9a45207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWZlc3R5bGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 5" },
      { id: "3-6", src: "https://images.unsplash.com/photo-1620262612829-06834d0c2ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudHMlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU2NzA4MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 6" },
      { id: "3-7", src: "https://images.unsplash.com/photo-1672707069442-91a5854ce1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjb2ZmZWUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 7" },
      { id: "3-8", src: "https://images.unsplash.com/photo-1756277441733-666ef9a45207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWZlc3R5bGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Lifestyle Photo 8" }
    ]
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1655152980657-7a4aa6e29f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm90YW5pY2FsJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTY3MDgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Botanical Flowers",
    hoverText: "BOTANICAL SERIES",
    collectionTitle: "Botanical Nature Collection",
    gallery: [
      { id: "4-1", src: "https://images.unsplash.com/photo-1648330962004-85bec3880c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBmbG93ZXJzJTIwbWFjcm98ZW58MXx8fHwxNzU2NzEwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 1" },
      { id: "4-2", src: "https://images.unsplash.com/photo-1707756542603-7bfbbb6ecc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 2" },
      { id: "4-3", src: "https://images.unsplash.com/photo-1655152980657-7a4aa6e29f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm90YW5pY2FsJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTY3MDgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 3" },
      { id: "4-4", src: "https://images.unsplash.com/photo-1648330962004-85bec3880c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBmbG93ZXJzJTIwbWFjcm98ZW58MXx8fHwxNzU2NzEwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 4" },
      { id: "4-5", src: "https://images.unsplash.com/photo-1707756542603-7bfbbb6ecc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY3MTAxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 5" },
      { id: "4-6", src: "https://images.unsplash.com/photo-1655152980657-7a4aa6e29f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwYm90YW5pY2FsJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTY3MDgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 6" },
      { id: "4-7", src: "https://images.unsplash.com/photo-1648330962004-85bec3880c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBmbG93ZXJzJTIwbWFjcm98ZW58MXx8fHwxNzU2NzEwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Botanical Photo 7" }
    ]
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1658688976224-5d5c04d1423c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzA4MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Mother and Baby Portrait",
    hoverText: "MATERNITY SERIES",
    collectionTitle: "Amelia Maternity Collection",
    gallery: [
      { id: "5-1", src: "https://images.unsplash.com/photo-1677831529608-7d34de75c7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5pdHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjcxMDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 1" },
      { id: "5-2", src: "https://images.unsplash.com/photo-1658688976224-5d5c04d1423c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzA4MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 2" },
      { id: "5-3", src: "https://images.unsplash.com/photo-1677831529608-7d34de75c7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5pdHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjcxMDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 3" },
      { id: "5-4", src: "https://images.unsplash.com/photo-1658688976224-5d5c04d1423c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzA4MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 4" },
      { id: "5-5", src: "https://images.unsplash.com/photo-1677831529608-7d34de75c7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5pdHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjcxMDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 5" },
      { id: "5-6", src: "https://images.unsplash.com/photo-1658688976224-5d5c04d1423c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzA4MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 6" },
      { id: "5-7", src: "https://images.unsplash.com/photo-1677831529608-7d34de75c7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5pdHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjcxMDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 7" },
      { id: "5-8", src: "https://images.unsplash.com/photo-1658688976224-5d5c04d1423c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NzA4MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Maternity Photo 8" }
    ],
    overlay: {
      title: "AMELIA",
      year: "2019"
    }
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1739249949378-49edc22e6f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTY3MDgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Couple Engagement Outdoor",
    hoverText: "ENGAGEMENT SESSIONS",
    collectionTitle: "Engagement Photography Collection",
    gallery: [
      { id: "6-1", src: "https://images.unsplash.com/photo-1739249949375-ea78616571fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwb3V0ZG9vciUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjcxMDIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Engagement Photo 1" },
      { id: "6-2", src: "https://images.unsplash.com/photo-1739249949378-49edc22e6f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTY3MDgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Engagement Photo 2" },
      { id: "6-3", src: "https://images.unsplash.com/photo-1611075099543-1c7e1e48183e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NjQ0NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Engagement Photo 3" },
      { id: "6-4", src: "https://images.unsplash.com/photo-1739249949375-ea78616571fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwb3V0ZG9vciUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NjcxMDIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Engagement Photo 4" }
    ]
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1722078543080-7c57c4a62888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NzA4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding Portrait",
    hoverText: "WEDDING COLLECTIONS",
    collectionTitle: "Wedding Photography Collection",
    gallery: [
      { id: "7-1", src: "https://images.unsplash.com/photo-1753947674135-f7ffb57356e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NjYxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Wedding Photo 1" },
      { id: "7-2", src: "https://images.unsplash.com/photo-1722078543080-7c57c4a62888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NzA4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Wedding Photo 2" },
      { id: "7-3", src: "https://images.unsplash.com/photo-1753947674135-f7ffb57356e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NjYxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Wedding Photo 3" },
      { id: "7-4", src: "https://images.unsplash.com/photo-1722078543080-7c57c4a62888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NzA4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Wedding Photo 4" },
      { id: "7-5", src: "https://images.unsplash.com/photo-1753947674135-f7ffb57356e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NjYxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Wedding Photo 5" },
      { id: "7-6", src: "https://images.unsplash.com/photo-1722078543080-7c57c4a62888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NzA4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Wedding Photo 6" }
    ]
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY2MzMwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Nature Landscape",
    hoverText: "NATURE ESCAPES",
    collectionTitle: "Nature Landscape Collection",
    gallery: [
      { id: "8-1", src: "https://images.unsplash.com/photo-1635148040718-acf281233b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTY3MTAyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Nature Photo 1" },
      { id: "8-2", src: "https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY2MzMwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Nature Photo 2" },
      { id: "8-3", src: "https://images.unsplash.com/photo-1635148040718-acf281233b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTY3MTAyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Nature Photo 3" },
      { id: "8-4", src: "https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTY2MzMwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Nature Photo 4" }
    ]
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1536334312886-fca859112566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NTY3MDgwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Lifestyle Portrait",
    hoverText: "NATURAL LIGHT",
    collectionTitle: "Natural Light Portrait Collection",
    gallery: [
      { id: "9-1", src: "https://images.unsplash.com/photo-1713375866895-ad56580332ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NTY3MTAyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Natural Light Photo 1" },
      { id: "9-2", src: "https://images.unsplash.com/photo-1536334312886-fca859112566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NTY3MDgwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Natural Light Photo 2" },
      { id: "9-3", src: "https://images.unsplash.com/photo-1713375866895-ad56580332ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NTY3MTAyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Natural Light Photo 3" }
    ]
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1648654677002-c902d615b785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NzA4MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Artistic Portrait",
    hoverText: "ARTISTIC VISION",
    collectionTitle: "Artistic Portrait Collection",
    gallery: [
      { id: "10-1", src: "https://images.unsplash.com/photo-1648654677002-c902d615b785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NzA4MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Artistic Photo 1" },
      { id: "10-2", src: "https://images.unsplash.com/photo-1713375866895-ad56580332ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NTY3MTAyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Artistic Photo 2" },
      { id: "10-3", src: "https://images.unsplash.com/photo-1648654677002-c902d615b785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2NzA4MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Artistic Photo 3" },
      { id: "10-4", src: "https://images.unsplash.com/photo-1713375866895-ad56580332ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NTY3MTAyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Artistic Photo 4" }
    ]
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1739249949375-ea78616571fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY291cGxlJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTY3MDgwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Outdoor Couple Session",
    hoverText: "GOLDEN HOUR",
    collectionTitle: "Golden Hour Couple Collection",
    gallery: [
      { id: "11-1", src: "https://images.unsplash.com/photo-1739249949375-ea78616571fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY291cGxlJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTY3MDgwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Golden Hour Photo 1" },
      { id: "11-2", src: "https://images.unsplash.com/photo-1739249949378-49edc22e6f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTY3MDgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Golden Hour Photo 2" },
      { id: "11-3", src: "https://images.unsplash.com/photo-1739249949375-ea78616571fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY291cGxlJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTY3MDgwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Golden Hour Photo 3" }
    ]
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NjcwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Family Portrait",
    hoverText: "FAMILY MEMORIES",
    collectionTitle: "Family Portrait Collection",
    gallery: [
      { id: "12-1", src: "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NjcwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Family Photo 1" },
      { id: "12-2", src: "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NjcwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Family Photo 2" },
      { id: "12-3", src: "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NjcwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Family Photo 3" },
      { id: "12-4", src: "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NjcwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Family Photo 4" },
      { id: "12-5", src: "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU2NjcwMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Family Photo 5" }
    ]
  }
];

export function PhotoGrid() {
  const [selectedGallery, setSelectedGallery] = useState<Photo | null>(null);

  const openGallery = (photo: Photo) => {
    setSelectedGallery(photo);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  return (
    <>
      <div className="w-full px-8 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:z-10"
              style={{
                animationDelay: `${index * 100}ms`
              }}
              onClick={() => openGallery(photo)}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              
              {/* Permanent overlay for photos with overlay data */}
              {photo.overlay && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 group-hover:bg-black/50 transition-all duration-500">
                  <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
                    <h3 className="tracking-widest uppercase mb-1 transition-all duration-300 group-hover:tracking-[0.3em]">
                      {photo.overlay.title}
                    </h3>
                    <p className="tracking-wider transition-all duration-300 group-hover:tracking-[0.2em]">
                      {photo.overlay.year}
                    </p>
                  </div>
                </div>
              )}

              {/* Hover text overlay for all photos */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end justify-center">
                <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pb-6">
                  <p className="tracking-widest uppercase transition-all duration-300 group-hover:tracking-[0.3em]">
                    {photo.hoverText}
                  </p>
                  <p className="text-white/80 tracking-wider mt-1">
                    Click to view collection
                  </p>
                </div>
              </div>

              {/* Scale effect overlay */}
              {!photo.overlay && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <Gallery
          isOpen={true}
          onClose={closeGallery}
          title={selectedGallery.collectionTitle}
          images={selectedGallery.gallery}
        />
      )}
    </>
  );
}