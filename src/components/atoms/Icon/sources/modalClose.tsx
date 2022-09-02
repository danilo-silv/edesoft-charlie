import { memo } from 'react'

type TProps = {
  color?: string
}

const CloseCircle = ({ color = '#4d4d4d' }: TProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.75 23.249L23.25 0.749023"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.25 23.249L0.75 0.749023"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default memo(CloseCircle)
