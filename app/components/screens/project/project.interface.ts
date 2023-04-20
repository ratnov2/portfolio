import { StaticImageData } from "next/image";

export interface IProject {
  imgSrc:StaticImageData,
  typeProject:string,
  name:string,
  linkProject:string,
  text:string,
  linkGit:string,
}