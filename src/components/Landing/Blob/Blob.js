import React from "react"
import goldenFieldImg from "../../../img/golden-field.jpg"

const Blob = ({ classes }) => {
  return (
    <svg
      width="763"
      height="713"
      viewBox="0 0 763 713"
      fill="none"
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2662 300.61C6.2496 231.272 36.6501 158.627 81.3156 104.43C123.856 52.8113 189.169 24.2352 254.991 12.1553C312.433 1.61315 366.384 32.7092 424.118 41.5174C481.188 50.2243 541.857 35.6698 592.355 63.6256C648.206 94.5446 696.466 143.344 717.105 203.716C738.094 265.111 725.777 332.473 705.316 394.046C685.348 454.132 645.988 503.21 602.33 549.097C554.578 599.287 509.376 666.248 440.354 672.535C371.406 678.815 315.637 620.108 258.964 580.373C211.486 547.086 175.782 504.335 137.883 460.467C93.3394 408.908 27.9539 367.879 17.2662 300.61Z"
          fill="#C4C4C4"
        />
      </g>
      <mask
        id="mask0"
        // maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="15"
        y="9"
        width="713"
        height="665"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2649 300.69C6.25454 231.333 36.6379 158.668 81.2781 104.456C123.795 52.8229 189.07 24.2389 254.855 12.1557C312.265 1.6107 366.185 32.7153 423.887 41.5259C480.924 50.2353 541.559 35.6767 592.029 63.6403C647.848 94.5677 696.081 143.38 716.708 203.769C737.686 265.182 725.376 332.561 704.926 394.152C684.97 454.254 645.632 503.346 601.999 549.245C554.273 599.449 509.097 666.428 440.114 672.717C371.204 678.999 315.467 620.276 258.826 580.53C211.375 547.234 175.692 504.471 137.814 460.591C93.2951 409.018 27.9466 367.978 17.2649 300.69Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="-125.885"
          y="10"
          width="888.331"
          height="663.559"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="3.05176e-05"
          width="763"
          height="713"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="10" dy="15" />
          <feGaussianBlur stdDeviation="12.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0" transform="scale(0.000486381 0.000651136)" />
        </pattern>
        <image id="image0" width="2056" height="1536" href={goldenFieldImg} />
      </defs>
    </svg>
  )
}
export default Blob
