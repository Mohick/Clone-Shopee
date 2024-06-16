import React from "react";
import LikeComment from "../Product/Rating Products/LIke Comment/LIke Comment";

type IconProps = React.SVGAttributes<SVGElement>;

export const Icons = {
  arrowLeftHaveTail: (props: IconProps) => {
    return (
      <svg viewBox="0 0 22 17" role="img" {...props}>
        <g
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
          transform="translate(-3, -6)"
        >
          <path
            d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577
     13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039
      3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821
       C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 
       C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 
       25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"
          ></path>
        </g>
      </svg>
    );
  },

  filter: (props: IconProps) => {
    return (
      <svg viewBox="0 0 15 15" {...props}>
        <g>
          <polyline
            fill="none"
            points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          ></polyline>
        </g>
      </svg>
    );
  },
  menuThreeDots: (props: IconProps) => {
    return (
      <svg {...props} viewBox="0 0 24 6">
        <path
          fill="none"
          d="M12 5.5c-1.380712 0-2.5-1.1192881-2.5-2.5S10.619288.5 12 .5s2.5 1.1192881 2.5 2.5-1.119288 2.5-2.5 2.5zm-9 0C1.619288 5.5.5 4.3807119.5 3S1.619288.5 3 .5 5.5 1.6192881 5.5 3 4.380712 5.5 3 5.5zm18 0c-1.380712 0-2.5-1.1192881-2.5-2.5S19.619288.5 21 .5s2.5 1.1192881 2.5 2.5-1.119288 2.5-2.5 2.5z"
        ></path>
      </svg>
    );
  },
  arrowTopAndBottom: (props: IconProps) => {
    return (
      <svg {...props} viewBox="0 0 8 10">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
          <g
            id="upfront_filter_specs"
            transform="translate(-345.000000, -97.000000)"
          >
            <g id="icon_grey" transform="translate(343.000000, 96.000000)">
              <g
                id="Group-12"
                strokeWidth="1"
                transform="translate(2.500000, 1.000000)"
              >
                <g id="Group-11" fillRule="nonzero">
                  <path
                    d="M3.13751228,3.74264069 L0.150147331,0.853553391 C-0.0500491103,0.658291245 -0.0500491103,0.341708755 0.150147331,0.146446609 C0.350343772,-0.0488155365 0.674926335,-0.0488155365 0.875122776,0.146446609 L3.5,2.68497122 L6.12487722,0.146446609 C6.32507367,-0.0488155365 6.64965623,-0.0488155365 6.84985267,0.146446609 C7.05004911,0.341708755 7.05004911,0.658291245 6.84985267,0.853553391 L3.86248772,3.74264069 C3.66229128,3.93790283 3.33770872,3.93790283 3.13751228,3.74264069 Z"
                    transform="translate(3.500000, 1.944544) scale(1, -1) translate(-3.500000, -1.944544) "
                  ></path>
                </g>
                <g
                  transform="translate(3.500000, 8.000000) scale(1, -1) translate(-3.500000, -8.000000) translate(0.000000, 6.000000)"
                  fillRule="nonzero"
                >
                  <path
                    d="M3.13751228,3.74264069 L0.150147331,0.853553391 C-0.0500491103,0.658291245 -0.0500491103,0.341708755 0.150147331,0.146446609 C0.350343772,-0.0488155365 0.674926335,-0.0488155365 0.875122776,0.146446609 L3.5,2.68497122 L6.12487722,0.146446609 C6.32507367,-0.0488155365 6.64965623,-0.0488155365 6.84985267,0.146446609 C7.05004911,0.341708755 7.05004911,0.658291245 6.84985267,0.853553391 L3.86248772,3.74264069 C3.66229128,3.93790283 3.33770872,3.93790283 3.13751228,3.74264069 Z"
                    transform="translate(3.500000, 1.944544) scale(1, -1) translate(-3.500000, -1.944544) "
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  },
  arrowAngleDown: (props: IconProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 448 512">
        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
      </svg>
    );
  },
  check: (props: IconProps) => {
    return (
      <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" role="img">
        <path
          stroke="none"
          d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"
        ></path>
      </svg>
    );
  },
  arrowAngleRight: (props: IconProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 320 512">
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
      </svg>
    );
  },
  starFull: (props: IconProps) => {
    return (
      <svg viewBox="0 0 9.5 8" {...props}>
        <defs>
          <linearGradient
            id="ratingStarGradient"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0" stopColor="#ffca11"></stop>
            <stop offset="1" stopColor="#ffad27"></stop>
          </linearGradient>
          <polygon
            id="ratingStar"
            points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
          ></polygon>
        </defs>
        <g
          fill="url(#ratingStarGradient)"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
        >
          <g transform="translate(-876 -1270)">
            <g transform="translate(155 992)">
              <g transform="translate(600 29)">
                <g transform="translate(10 239)">
                  <g transform="translate(101 10)">
                    <use
                      stroke="#ffa727"
                      strokeWidth=".5"
                      xlinkHref="#ratingStar"
                    ></use>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  },
  starEmpty: (props: IconProps) => {
    return (
      <svg viewBox="0 0 30 30" {...props}>
        <defs>
          <linearGradient
            id="star__hollow"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="99.0177926%"
          >
            <stop offset="0%" stopColor="#FFD211"></stop>
            <stop offset="100%" stopColor="#FFAD27"></stop>
          </linearGradient>
        </defs>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="url(#star__hollow)"
          strokeWidth="2"
          d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
        ></path>
      </svg>
    );
  },
  alert: (props: IconProps) => {
    return (
      <svg viewBox="0 0 18 24" {...props}>
        <g transform="translate(-355 -149)">
          <g transform="translate(355 149)">
            <g fillRule="nonzero" transform="translate(5.4 19.155556)">
              <path d="m1.08489412 1.77777778h5.1879153c.51164401 0 .92641344-.39796911.92641344-.88888889s-.41476943-.88888889-.92641344-.88888889h-5.1879153c-.51164402 0-.92641345.39796911-.92641345.88888889s.41476943.88888889.92641345.88888889z"></path>
              <g transform="translate(1.9 2.666667)">
                <path d="m .75 1.77777778h2.1c.41421356 0 .75-.39796911.75-.88888889s-.33578644-.88888889-.75-.88888889h-2.1c-.41421356 0-.75.39796911-.75.88888889s.33578644.88888889.75.88888889z"></path>
              </g>
            </g>
            <path
              d="m8.1 8.77777718v4.66666782c0 .4295545.40294373.7777772.9.7777772s.9-.3482227.9-.7777772v-4.66666782c0-.42955447-.40294373-.77777718-.9-.77777718s-.9.34822271-.9.77777718z"
              fillRule="nonzero"
            ></path>
            <path
              d="m8.1 5.33333333v.88889432c0 .49091978.40294373.88888889.9.88888889s.9-.39796911.9-.88888889v-.88889432c0-.49091977-.40294373-.88888889-.9-.88888889s-.9.39796912-.9.88888889z"
              fillRule="nonzero"
            ></path>
            <path d="m8.80092773 0c-4.86181776 0-8.80092773 3.97866667-8.80092773 8.88888889 0 1.69422221.47617651 3.26933331 1.295126 4.61333331l2.50316913 3.9768889c.30201078.4782222.84303623.7697778 1.42482388.7697778h7.17785139c.7077799 0 1.3618277-.368 1.7027479-.9617778l2.3252977-4.0213333c.7411308-1.2888889 1.1728395-2.7786667 1.1728395-4.37688891 0-4.91022222-3.9409628-8.88888889-8.80092777-8.88888889m0 1.77777778c3.82979317 0 6.94810087 3.18933333 6.94810087 7.11111111 0 1.24444441-.3168334 2.43022221-.9393833 3.51466671l-2.3252977 4.0213333c-.0166754.0284444-.0481735.0462222-.0833772.0462222h-7.07224026l-2.43461454-3.8648889c-.68184029-1.12-1.04128871-2.4053333-1.04128871-3.71733331 0-3.92177778 3.11645483-7.11111111 6.94810084-7.11111111"></path>
          </g>
        </g>
      </svg>
    );
  },
  arrowAngleLeft: (props: IconProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 320 512">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    );
  },
  shopping: (props: IconProps) => {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
    );
  },
  freeReturn: (props: IconProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
          d="M15.7481 7.78492C15.8265 7.74794 15.9121 7.72876 15.9988 7.72876C16.0854 7.72876 16.171 7.74794 16.2494 7.78492L23.4153 11.1803L15.9973 15.0657L8.57935 11.1803L15.7481 7.78492Z"
          fill="#EE4D2D"
        />
        <path
          d="M16.5846 16.0792L23.9972 12.1963V20.0179C23.9971 20.1245 23.968 20.2291 23.9129 20.3203C23.8579 20.4116 23.7789 20.4861 23.6846 20.5358L16.5846 24.2728V16.0792Z"
          fill="#EE4D2D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4147 16.0793V24.2715L8.31647 20.5358C8.22212 20.4862 8.14313 20.4117 8.08804 20.3205C8.03296 20.2292 8.00386 20.1246 8.00391 20.018V12.1978L15.4147 16.0793Z"
          fill="#EE4D2D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.97422 4.66404C14.1175 1.47143 20.9625 2.10736 25.4281 6.57255C29.8857 11.0302 30.5263 17.859 27.3514 22.9991L28.2113 23.8572L26.7086 24.0567L25.2048 24.2572L25.4043 22.7546L25.6038 21.2522L26.3204 21.9688C28.961 17.4086 28.3312 11.4735 24.4285 7.57074C20.4415 3.58375 14.3335 3.01192 9.73654 5.8538C9.61115 5.93269 9.46258 5.96637 9.31543 5.94928C9.16827 5.93219 9.03138 5.86534 8.92741 5.75981L8.85539 5.68779C8.78542 5.61786 8.73217 5.53302 8.6996 5.43961C8.66704 5.3462 8.656 5.24664 8.66733 5.14836C8.67865 5.05009 8.71204 4.95565 8.765 4.87209C8.81795 4.78854 8.8891 4.71803 8.97314 4.66584L8.97422 4.66404ZM6.79312 7.7425L5.29152 7.94344L3.78884 8.14293L4.64839 9.00248C1.47378 14.1429 2.11403 20.9714 6.57202 25.429C11.0372 29.8942 17.8823 30.5297 23.0259 27.3375C23.1098 27.2852 23.1809 27.2147 23.2337 27.1311C23.2866 27.0476 23.32 26.9531 23.3313 26.8549C23.3426 26.7567 23.3316 26.6572 23.2991 26.5638C23.2666 26.4704 23.2135 26.3855 23.1436 26.3155L23.0716 26.2435C22.9676 26.138 22.8307 26.0711 22.6835 26.0539C22.5363 26.0368 22.3876 26.0704 22.2621 26.1492C17.6659 28.9911 11.5579 28.4178 7.57021 24.4322C3.66748 20.5295 3.03768 14.5944 5.67826 10.0342L6.39485 10.7507L6.59435 9.24842L6.79348 7.74574L6.79312 7.7425Z"
          fill="#EE4D2D"
        />
      </svg>
    );
  },
  emptyHeart: (props: IconProps) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        view-box="0 0 22 19"
        version="1.1"
      >
        <g
          transform="translate(-0.5, -3)"
          fillRule="nonzero"
          stroke="#595959"
          strokeWidth="1.5"
          fill="none"
        >
          <path d="M10.7510916,5.02441452 C9.71288513,4.21333304 8.38591653,3.75 7.05,3.75 C4.6640902,3.75 1.75,5.93041968 1.75,8.69482289 C1.75,9.72265698 2.04389836,10.7232187 2.64719149,11.7755095 C3.83247386,13.842932 5.52963591,15.4857604 10.8930142,20.0637321 L12.0018522,21.0138968 L13.1074831,20.0736606 C18.4933019,15.4666923 20.1786809,13.8325614 21.3605464,11.7622778 C21.9586107,10.7146435 22.25,9.71826659 22.25,8.69482289 C22.25,5.93041968 19.933591,3.75 16.95,3.75 C15.6132045,3.75 14.2853688,4.21394292 13.2510739,5.02269611 L13.1827793,5.07686689 C12.9560346,5.25946414 12.746321,5.45701006 12.5561764,5.66719053 L12,6.28197216 L11.4438236,5.66719053 C11.253679,5.45701006 11.0439654,5.25946414 10.8214191,5.08022309 L10.7510916,5.02441452 Z" />
        </g>
      </svg>
    );
  },
  heart: (props: IconProps) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        view-box="0 0 22 19"
        version="1.1"
      >
        <g transform="translate(-0.5, -3)" stroke="none" strokeWidth="1">
          <path
            d="M11.215134,4.43520125 L11.287627,4.49272823 C11.5438574,4.69907032 11.7824324,4.92353961 12,5.1640327 C12.2175676,4.92353961 12.4561426,4.69907032 12.712373,4.49272823 L12.784866,4.43520125 C13.9311791,3.5388299 15.4158547,3 16.95,3 C20.338,3 23,5.50572207 23,8.69482289 C23,12.6087193 19.26,15.7978202 13.595,20.6435967 L12,22 L10.405,20.6332425 C4.74,15.7978202 1,12.6087193 1,8.69482289 C1,5.50572207 3.662,3 7.05,3 C8.58414533,3 10.0688209,3.5388299 11.215134,4.43520125 Z"
            fill="#EE4D2D"
            fillRule="evenodd"
          />
        </g>
      </svg>
    );
  },
  freeShip: (props: IconProps) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 20"
        fill="none"
      >
        <rect x="2" width="20" height="20" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_686_50814"
              transform="translate(-1.0625 -0.118305) scale(0.00299043)"
            />
          </pattern>
          <image
            id="image0_686_50814"
            width="1042"
            height="418"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  },
  car: (props: IconProps) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 15 15"
        x="0"
        y="0"
        stroke="rgba(0,0,0,0.87)"
      >
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="8.6"
          x2="4.2"
          y1="9.8"
          y2="9.8"
        />
        <circle cx="3" cy="11.2" fill="none" r="2" strokeMiterlimit="10" />
        <circle cx="10" cy="11.2" fill="none" r="2" strokeMiterlimit="10" />
        <line
          fill="none"
          strokeMiterlimit="10"
          x1="10.5"
          x2="14.4"
          y1="7.3"
          y2="7.3"
        />
        <polyline
          fill="none"
          points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <polyline
          fill="none"
          points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </svg>
    );
  },
  arrowLeftHaveBorder: (props: IconProps) => {
    return (
      <svg {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.5 16c0 6.9036-5.5964 12.5-12.5 12.5-6.90356 0-12.5-5.5964-12.5-12.5C3.5 9.09644 9.09644 3.5 16 3.5c6.9036 0 12.5 5.59644 12.5 12.5zM16 30c7.732 0 14-6.268 14-14 0-7.73199-6.268-14-14-14C8.26801 2 2 8.26801 2 16c0 7.732 6.26801 14 14 14zm-3.3044-19.4696l5.7229 5.7229-5.7222 5.624 1.0515 1.0698 6.2617-6.1543c.1426-.1402.2234-.3316.2243-.5317.0008-.2-.0783-.3921-.2197-.5335l-6.2579-6.25791-1.0606 1.06071z"
          fill="#EE4D2D"
        ></path>
      </svg>
    );
  },
  likeNoColorComment: (props: IconProps) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 16 16"
        version="1.1"
      >
        <title>ic_rating_like</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fillOpacity="0.26"
        >
          <g id="like" fill="#000000">
            <path
              d="M1.5,7 L2.5,7 C2.77614237,7 3,7.22385763 3,7.5 L3,13.5 C3,13.7761424 2.77614237,14 2.5,14 L1.5,14 C1.22385763,14 1,13.7761424 1,13.5 L1,7.5 C1,7.22385763 1.22385763,7 1.5,7 Z M4.31157437,6.00927037 L7.04123134,1.71015368 C7.3372457,1.24393107 7.95516084,1.10595002 8.42138345,1.40196438 C8.63279959,1.53619684 8.78615224,1.7448722 8.85111863,1.98672857 C8.95037288,2.35623153 9,2.72279413 9,3.08641637 C9,4.02880546 8.83333333,5 8.5,6 L14.5,6 C14.7761424,6 15,6.22385763 15,6.5 L15,7.5 C15,8.48644317 14.7703304,9.4593392 14.3291796,10.3416408 L12.7763932,13.4472136 C12.6070012,13.7859976 12.2607381,14 11.881966,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,7.08128664 C4,6.70161768 4.10806872,6.32979177 4.31157437,6.00927037 Z"
              id="Combined-Shape"
            />
          </g>
        </g>
      </svg>
    );
  },
  likeHaveColorComponent: (props: IconProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.5 7h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1
           .5-.5zm2.812-.99l2.73-4.3a1 1 0 0 1 1.81.277c.098.37.148.736.148 1.1C9 4.028 8.833 5 8.5 6h6a.5.5 0 0 1 .5.5v1c0 .986-.23 1.96-.67
            2.842l-1.554 3.105a1 1 0 0 1-.894.553H5a1 1 0 0 1-1-1V7.081a2 2 0 0 1 .312-1.072z"
          fill="#FF5622"
          fillRule="evenodd"
        />
      </svg>
    );
  },
  closeX: (props: IconProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none">
        <path
          d="m21 4.145-1.15-1.15-7.852 7.853-7.853-7.852-1.15 1.149 7.854 7.853-7.853 7.852L4.146 21l7.852-7.853 7.852 7.852L21 19.85l-7.853-7.852L21 4.145Z"
          fill="#000"
          fill-opacity=".65"
        />
      </svg>
    );
  },
  request: (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 15 15"
        viewBox="0 0 15 15"
        {...props}
        fill="rgba(0,0,0,0.54)"
      >
        <g>
          <circle
            cx="7.5"
            cy="7.5"
            fill="none"
            r="6.5"
            stroke-miterlimit="10"
            stroke="rgba(0,0,0,0.54)"
          />
          <path
            d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
            stroke="none"
          />
        </g>
      </svg>
    );
  },
  minus: (props: IconProps) => {
    return (
      <svg
        enable-background="new 0 0 10 10"
        viewBox="0 0 10 10"
        x="0"
        y="0"
        {...props}
      >
        <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
      </svg>
    );
  },
  plus: (props: IconProps) => {
    return (
      <svg
        enable-background="new 0 0 10 10"
        viewBox="0 0 10 10"
        x="0"
        y="0"
        {...props}
      >
        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
      </svg>
    );
  },
};
