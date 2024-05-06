function IconPlayVideo({ width = undefined, height = undefined, fill = undefined }) {
  return (
    <svg
     
      viewBox="0 0 20 20"
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="black"
        fill-opacity="0.5"
      ></path>
      <path
        d="M7 6.12627C7 5.56829 7.4141 5.34009 7.91986 5.61909L14.6175 9.47896C15.1235 9.75795 15.1235 10.2143 14.6175 10.4933L7.91986 14.3809C7.41383 14.6599 7 14.4317 7 13.8737V6.12627Z"
        fill="white"
      ></path>
    </svg>
  );
}

export default IconPlayVideo;
