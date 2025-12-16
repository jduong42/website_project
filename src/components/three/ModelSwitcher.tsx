// 14 and 16 inch MacBook Pro 3D model switcher component -> PresentationControls
import { PresentationControls } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: THREE.Group, opacity: number) => {
  if (!group) return;

  group.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const material = Array.isArray(mesh.material)
        ? mesh.material[0]
        : mesh.material;

      if (material) {
        material.transparent = true;
        gsap.to(material, {
          opacity: opacity,
          duration: ANIMATION_DURATION,
        });
      }
    }
  });
};

const moveGroup = (group: THREE.Group, x: number) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
  });
};

const ModelSwitcher: React.FC<{ scale: number; isMobile: boolean }> = ({
  scale,
  isMobile,
}) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const smallMacbookRef = React.useRef(null);
  const largeMacbookRef = React.useRef(null);

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current!, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current!, 0);

      fadeMeshes(smallMacbookRef.current!, 0);
      fadeMeshes(largeMacbookRef.current!, 1);
    } else {
      moveGroup(smallMacbookRef.current!, 0);
      moveGroup(largeMacbookRef.current!, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current!, 1);
      fadeMeshes(largeMacbookRef.current!, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI] as [number, number],
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
