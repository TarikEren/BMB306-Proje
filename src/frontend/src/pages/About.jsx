import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div class="text-center text-4xl">BMB-306 Proje Ödevi</div>
      <ul>
        <li>
        <p class="text-center mt-3 text-2xl">Mehmet Ali Erdoğan</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Tarik Eren Tosun</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Mert Çalışkan</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Mert Hasgeçkin</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Ali Yıldız</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Fatih Atalay</p>
        </li>
      </ul>
    </>
  );
}

export default About;