type TProps = {
  color?: string
}

const Pin = ({ color = '#4d4d4d' }: TProps) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 17 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.75 8.25C15.75 12.471 12.817 14.899 10.619 17.25C9.303 18.658 8.25 23.25 8.25 23.25C8.25 23.25 7.2 18.661 5.887 17.257C3.687 14.907 0.75 12.475 0.75 8.25C0.75 4.10786 4.10786 0.75 8.25 0.75C12.3921 0.75 15.75 4.10786 15.75 8.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 11.25C9.90685 11.25 11.25 9.90685 11.25 8.25C11.25 6.59315 9.90685 5.25 8.25 5.25C6.59315 5.25 5.25 6.59315 5.25 8.25C5.25 9.90685 6.59315 11.25 8.25 11.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Pin
