export default function NameToColor (name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hex = intToRGB(hash);


  return intToRGB(hash)
}

function intToRGB(i){
  const c = (i & 0x00FFFFFF).toString(16).toUpperCase();
  return "00000".substring(0, 6 - c.length) + c;
}

function checkLight(hex){
  const c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const color =  c ? {
      r: parseInt(c[1], 16),
      g: parseInt(c[2], 16),
      b: parseInt(c[3], 16)
  } : null;
  return (0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b) < 150;
}
