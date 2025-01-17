import React from "react"

const Logo = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 438 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.452148"
        y="99.889"
        width="198.95"
        height="60.472"
        rx="30.236"
        transform="rotate(-30 0.452148 99.889)"
        fill="#EC4235"
      />
      <rect
        width="198.95"
        height="60.472"
        rx="30.236"
        transform="matrix(-0.866025 -0.5 -0.5 0.866025 202.984 169.145)"
        fill="#4284F4"
      />
      <rect
        x="235.131"
        y="169.145"
        width="198.95"
        height="60.472"
        rx="30.236"
        transform="rotate(-30 235.131 169.145)"
        fill="#F9BB04"
      />
      <rect
        width="198.95"
        height="60.472"
        rx="30.236"
        transform="matrix(-0.866025 -0.5 -0.5 0.866025 437.663 99.889)"
        fill="#0F9D55"
      />
    </svg>
  )
}

export default Logo
