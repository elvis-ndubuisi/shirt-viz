import { proxy } from "valtio";

const state = proxy({
  intro: true, // Are we currently on the homepage.
  color: "#EFBD48", // Default color.
  isLogoTexture: false, // Are we currently displaying logo on the shirt.
  isFullTexture: false, // Is the shirt fully covered with a custom texture.
  logoDecal: "./threejs.png", //  Default logo
  fullDecal: "./threejs.png", // Default texture
});

export default state;
