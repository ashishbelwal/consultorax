declare module "*.glsl" {
  const file: string;
  export default file;
}

declare module "three-mesh-bvh" {
  export * from "three-mesh-bvh/src/index";
}
