import * as THREE from "three";
import type { GLTF } from "three-stdlib";

// 1. Mesh Names (from your macbook model)
export type MacbookMeshNames =
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

// 2. Material Names (from your macbook model)
export type MacbookMaterialNames =
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

// 3. The combined GLTF Result Type
export type MacbookGLTFResult = GLTF & {
  nodes: Record<MacbookMeshNames, THREE.Mesh>;
  materials: Record<MacbookMaterialNames, THREE.Material | THREE.Material[]>;
  scene: THREE.Group;
};
