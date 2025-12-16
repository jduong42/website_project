import * as THREE from "three";
import { type JSX } from "react";
import type { GLTF } from "three-stdlib";
import { useGLTF, useTexture } from "@react-three/drei";

type MacbookProps = JSX.IntrinsicElements["group"];

type MeshNames =
  | "Object_10"
  | "Object_16"
  | "Object_20"
  | "Object_22"
  | "Object_30"
  | "Object_32"
  | "Object_34"
  | "Object_38"
  | "Object_42"
  | "Object_48"
  | "Object_54"
  | "Object_58"
  | "Object_66"
  | "Object_74"
  | "Object_82"
  | "Object_96"
  | "Object_107"
  | "Object_123"
  | "Object_127";

type MaterialNames =
  | "PaletteMaterial001"
  | "zhGRTuGrQoJflBD"
  | "PaletteMaterial002"
  | "lmWQsEjxpsebDlK"
  | "LtEafgAVRolQqRw"
  | "iyDJFXmHelnMTbD"
  | "eJObPwhgFzvfaoZ"
  | "nDsMUuDKliqGFdU"
  | "CRQixVLpahJzhJc"
  | "YYwBgwvcyZVOOAA"
  | "SLGkCohDDelqXBu"
  | "WnHKXHhScfUbJQi"
  | "fNHiBfcxHUJCahl"
  | "LpqXZqhaGCeSzdu"
  | "gMtYExgrEUqPfln"
  | "PaletteMaterial003"
  | "JvMFZolVCdpPqjj"
  | "sfCQkHOWyrsLmor"
  | "ZCDwChwkbBfITSW";

type GLTFResult = GLTF & {
  nodes: Record<MeshNames, THREE.Mesh>;
  materials: Record<MaterialNames, THREE.Material>;
};

export default function Macbook(props: MacbookProps) {
  // Assert the type of the returned GLTF data
  const { nodes, materials } = useGLTF(
    "/models/macbook-transformed.glb"
  ) as unknown as GLTFResult;

  // Type annotation for the texture
  const texture: THREE.Texture = useTexture("/screen.png");

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

useGLTF.preload("/models/macbook-transformed.glb");
