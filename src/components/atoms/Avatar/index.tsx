type TProps = {
  image?: string
  size: string
}

export const getClassesBySize = (size?: string): string => {
  switch (size) {
    case 'sm':
      return 'w-8 h-8'

    case 'md':
      return 'w-12 h-12'

    case 'lg':
      return 'w-16 h-16'

    default:
      return 'w-16 h-16'
  }
}

const Avatar = ({ image, size }: TProps): JSX.Element => {
  return (
    <div className={`flex justify-center ${getClassesBySize(size)}`}>
      <img src={image} alt="Avatar" className="object-contain rounded-full" />
    </div>
  )
}

export default Avatar
