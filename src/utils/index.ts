export function randomPosition() {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  return `top-[${top}%] left-[${left}%]`;
}

export function randomRotation() {
  const rotation = Math.random() * 360;
  return `transform rotate-[${rotation}deg]`;
}

export function randomColor() {
  const colors = [
    "text-[#40E0D0]",
    "text-pink-400",
    "text-yellow-400",
    "text-blue-300",
    "text-orange-400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
