export default function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 ${className}`} {...props}>
      {children}
    </Tag>
  )
}
