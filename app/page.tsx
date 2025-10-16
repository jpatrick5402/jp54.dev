'use client';
import { FaLaptopCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import Image from 'next/image';
import { useState } from "react";

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Laptop from '@components/Laptop'
import Loader from '@components/Loader';

export default function Home() {
  const [showNylah, setShowNylah] = useState(false);
  const [showHannah, setShowHannah] = useState(false);

  return (
    <div>
      <div className="flex flex-col m-auto max-w-6xl items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="w-full m-auto p-2">
            <Image alt="Profile Picture" width={400} height={400} src='/profile.jpg' className="m-auto rounded-4xl border-2 border-(--background)" />
          </div>
          <div style={{ width: '100%', height: '40vh' }} className="flex w-full m-auto items-center justify-center">
            <Canvas camera={{ position: [0, 0, -15], fov: 55 }}>
              <Suspense fallback={<Loader />}>
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <group rotation={[0, Math.PI, 0]} position={[0, .5, 0]}>
                  <Laptop showHannah={showHannah} showNylah={showNylah} />
                </group>
                <Environment preset="city" />
                <ContactShadows position={[0, -3, 0]} scale={20} blur={2} far={4.5} />
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Life&nbsp;
              <FiCoffee className="flex mt-auto mb-auto" />
            </p>
            <p className="p-2 m-auto inline flex flex-col bg-(--background) rounded-sm">
              Hi there, my name is Joseph, and if you couldn&apos;t tell, I like working with software and computers. I was raised in Texas but moved to the northeastern U.S. shortly after high school. I&apos;m hapilly married to the love of my life,&nbsp;
              <button onClick={() => { setShowHannah(true); setShowNylah(false); window.scrollTo(0, 0); }} className="underline">Hannah</button>
              , and I have a cat named&nbsp;
              <button onClick={() => { setShowNylah(true); setShowHannah(false); window.scrollTo(0, 0); }} className="underline">Nylah</button>.
            </p>
          </div>
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Work&nbsp;
              <FaLaptopCode className="flex mt-auto mb-auto" />
            </p>
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">
              I received my Bachelors of Science in Computer Science and Cybersecurity from Liberty University in 2025 as summa cum laude (honors student). I&apos;m currently a Service Desk Technician III for URMC where I work on large projects and solve technical challenges to support healtcare for my organization. I&apos;m looking to move into software engineering or system administration work.
            </p>
          </div>
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Connect&nbsp;
              <IoIosMail className="flex mt-auto mb-auto" />
            </p>
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">
              Email:&nbsp;<a className="text-(--text-accent)" href="mailto:jpatrick5402@gmail.com">jpatrick5402@gmail.com</a>
            </p>
          </div>
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Socials&nbsp;
              <IoShareSocial className="flex mt-auto mb-auto" />
            </p>
            <p className="p-2 m-auto flex bg-(--background) rounded-sm gap-2 text-2xl">
              <a href="https://github.com/jpatrick5402/"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/joseph-patrick-b84990238/"><FaLinkedin /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
