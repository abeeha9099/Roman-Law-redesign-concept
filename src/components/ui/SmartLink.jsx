import { Link } from 'react-router-dom'

const isExternal = (href) => /^(https?:|tel:|mailto:)/.test(href)

// Internal paths use the router; external, tel: and mailto: links use a plain anchor.
export default function SmartLink({ href, children, ...props }) {
  if (isExternal(href)) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}
