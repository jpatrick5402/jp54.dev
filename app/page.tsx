'use client';
import { FaLaptopCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import Image from 'next/image';

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Laptop from '@components/Laptop'
import Loader from '@components/Loader';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col m-auto max-w-5xl items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div style={{ width: '100%', height: '40vh' }} className="flex w-full m-auto items-center justify-center">
            <Canvas camera={{ position: [0, 0, -15], fov: 55 }}>
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <Suspense fallback={<Loader />}>
                <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
                  <Laptop />
                </group>
                <Environment preset="city" />
              </Suspense>
              <ContactShadows position={[0, -3, 0]} scale={20} blur={2} far={4.5} />
              <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
            </Canvas>
          </div>
          <div className="w-full m-auto p-2">
            <Image alt="Profile Picture" width={400} height={400} src="/profile.jpg" className="m-auto rounded-4xl border-2 border-(--background)" />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Life&nbsp;
              <FiCoffee className="flex mt-auto mb-auto" />
            </p>
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">
              I was raised in Texas, but moved Northeast after high school. I&apos;m married to the light of my life, and have a cat named Nylah. I attained my Bachelors of Science in Computer Science and Cybersecurity from Liberty University in 2025.
            </p>
          </div>
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Work&nbsp;
              <FaLaptopCode className="flex mt-auto mb-auto" />
            </p>
            <p className="p-2 m-auto flex bg-(--background) rounded-sm">
              I&apos;m currently a Service Desk Technician III where I work on large projects and collaborate across teams. I&apos;m looking to move into software engineering work.
            </p>
          </div>
          <div className="flex flex-col m-auto mb-6">
            <p className="text-xl p-2 m-auto flex bg-(--background) rounded-sm mb-1">Contact&nbsp;
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
