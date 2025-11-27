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
import solarcontainer from './solarcontainer.jpg'
import energyStorage from "./energyStorage11.png"
import energy2 from "./energySolution6.png"
import energy3 from './energyStorage.jpg'
import energy4 from './energyStorage2.jpg'
import energy5 from './energyStorage3.jpg'
import energy6 from './energyStorage4.png'
import cyber from './cybersec.jpg'
import raptLogo from "./raptLogo.png"

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
  cyber,
  raptLogo,
    solarcontainer,
    energy2,energy3,energy4,energy5,energy6,energyStorage,

  ...pics,
};
