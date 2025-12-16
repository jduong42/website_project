import * as THREE from "three";
import { useEffect, type JSX } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import useMacbookStore from "../../store";
import { noChangeParts } from "../../constants";
import type { MacbookGLTFResult } from "../../constants/gltf-types";

type MacbookProps = JSX.IntrinsicElements["group"];

export default function MacbookModel14(props: MacbookProps) {
  const { color } = useMacbookStore();
  const { nodes, materials, scene } = useGLTF(
    "/models/macbook-14-transformed.glb"
  ) as unknown as MacbookGLTFResult;

  const texture: THREE.Texture = useTexture("/screen.png");

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        if (!noChangeParts.includes(child.name)) {
          const materialsToUpdate = Array.isArray(child.material)
            ? child.material
            : [child.material];

          materialsToUpdate.forEach((mat) => {
            if ((mat as THREE.Material & { color: THREE.Color }).color) {
              (mat as THREE.Material & { color: THREE.Color }).color.set(color);
            }
          });
        }
      }
    });
  }, [color, scene]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.zhGRTuGrQoJflBD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial002}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lmWQsEjxpsebDlK}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.LtEafgAVRolQqRw}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.iyDJFXmHelnMTbD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.eJObPwhgFzvfaoZ}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.nDsMUuDKliqGFdU}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.CRQixVLpahJzhJc}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.YYwBgwvcyZVOOAA}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.SLGkCohDDelqXBu}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.WnHKXHhScfUbJQi}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.fNHiBfcxHUJCahl}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.LpqXZqhaGCeSzdu}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.gMtYExgrEUqPfln}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials.PaletteMaterial003}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_107.geometry}
        material={materials.JvMFZolVCdpPqjj}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_123.geometry}
        material={materials.sfCQkHOWyrsLmor}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Object_127.geometry}
        material={materials.ZCDwChwkbBfITSW}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/macbook-14-transformed.glb");
