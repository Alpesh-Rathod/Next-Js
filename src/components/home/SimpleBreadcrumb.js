import Link from 'next/link';

export default function SimpleBreadcrumb({ items }) {
  return (
    <nav className="flex py-4 px-6 text-sm bg-gray-100">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            
            {index === items.length - 1 ? (
              <span className="text-gray-600 font-medium">{item.label}</span>
            ) : (
              <Link 
                href={item.href} 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Usage example:
function AboutPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/company' },
    { label: 'About Us', href: null }
  ];

  return (
    <div>
      <SimpleBreadcrumb items={breadcrumbItems} />
       {/* Rest of your page content */}
    </div>
  );
}