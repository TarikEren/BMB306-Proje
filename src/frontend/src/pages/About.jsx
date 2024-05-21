import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div class="text-center text-4xl">BMB-306 Proje Ödevi</div>
      <ul>
        <li>
        <p class="text-center mt-3 text-2xl">Mehmet Ali Erdoğan 1210606004</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Tarik Eren Tosun 1210606015</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Mert Çalışkan 1200606059</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Mert Hasgeçkin 1210606072</p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Ali Yıldız 1200606013</p>
        <p></p>
        </li>
        <li>
        <p class="text-center mt-3 text-2xl">Fatih Atalay 1210606018</p>
        </li>
      </ul>
    </>
  );
}

export default About;