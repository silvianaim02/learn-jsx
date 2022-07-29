import React from 'react';
import { createRoot } from 'react-dom/client';
import dicodingLogo from '../public/dicoding-logo.png';

const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
    </ul>
    <img src={dicodingLogo} alt="Dicoding logo" />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
