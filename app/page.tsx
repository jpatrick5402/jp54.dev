'use client';
import { FaHandSpock, FaLaptopCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import Image from 'next/image';

import { extend } from '@react-three/fiber'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import almendra from '../Almendra SC_Regular.json'

extend({ OrbitControls, TextGeometry })

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

function Text() {
  const font = new FontLoader().parse(almendra);

  return (
    <mesh position={[-5,0,0]}>
      <textGeometry args={['Joseph Patrick', {font, size: 1, height: 1, depth: .1}]} />
      <meshPhysicalMaterial attach="material" color={'white'}/>
    </mesh>
  )
}


export default function Home() {
  return (
    <div>
      <div className="flex flex-col m-auto max-w-5xl items-center justify-center">
        <div className="flex flex-col sm:flex-row p-2 m-auto items-center justify-center gap-4">
          <Image width='100' height='100' src='/profile.jpg' alt='Profile Pic' className="flex w-[15%] min-w-[180px] rounded-4xl border-5 border-black" />
          <Canvas>
            <OrbitControls></OrbitControls>
            <ambientLight intensity={2}></ambientLight>
            <Text></Text>
          </Canvas>
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
