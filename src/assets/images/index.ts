// src/assets/images/index.ts
import logo from './logo.png';
import about1 from './aboutImg1.jpg';
import about2 from './aboutImg2.jpg';
import construction from './const.jpg';
import solar from './solar.jpg';
import mep from './electricals.jpg';
import land from './landscape.jpeg';
import low from './low.jpg';
import bms from './bms.jpg';
import infra from './infra.jpg';

const importedImages = import.meta.glob<string>('./*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const pics: Record<string, string> = {};

Object.entries(importedImages).forEach(([path, url]) => {
  const name = path.replace('./', '').split('.')[0];
  if (!isNaN(Number(name))) {
    pics[`pic${name}`] = url;
  }
});

// ✅ Explicitly allow arbitrary string keys
export const Images: Record<string, string> = {
  logo,
  about1,
  about2,
  construction,
  solar,
  mep,
  land,
  low,
  bms,
  infra,
  ...pics,
};
