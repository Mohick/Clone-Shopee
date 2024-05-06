function IconSaliasingRight({
  width = undefined,
  height = undefined,
  fill = undefined,
}) {
  return (
    <svg width={width} height={height} fill={fill} viewBox="-0.5 -0.5 4 16">
      <path
        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
        stroke-width="1"
        transform="rotate(180) translate(-3 -15)"
        stroke="currentColor"
        fill="rgb(246, 145, 19)"
      ></path>
    </svg>
  );
}

export default IconSaliasingRight;
