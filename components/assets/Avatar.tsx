import * as React from "react";
import { SVGProps } from "react";
const Avatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={28} height={28} rx={4} fill="url(#pattern0_5181_10620)" />
    <defs>
      <pattern
        id="pattern0_5181_10620"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_5181_10620" transform="scale(0.000925926)" />
      </pattern>
      <image
        id="image0_5181_10620"
        width={1080}
        height={1080}
      />
    </defs>
  </svg>
);
export default Avatar;