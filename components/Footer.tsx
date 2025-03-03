import { footerData } from "@/lib/contents"; // Ensure this import is correct
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  // Function to render the appropriate icon based on platform
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook className="w-6 h-6" />;
      case 'twitter':
        return <Twitter className="w-6 h-6" />;
      case 'youtube':
        return <Youtube className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div>
        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
        <div className=" container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                <h3 className="text-2xl font-semibold mb-4 font-hind-siliguri">{footerData.contact.title}</h3>
                <p className="mb-2 font-hind-siliguri">{footerData.contact.address}</p>
                <p className="mb-2 font-hind-siliguri">{footerData.contact.phone}</p>
                <p className="font-hind-siliguri">{footerData.contact.email}</p>
                </div>
                <div>
                <h3 className="text-2xl font-semibold mb-4 font-hind-siliguri">{footerData.quickLinks.title}</h3>
                <ul className="space-y-2">
                    {footerData.quickLinks.links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="hover:text-blue-300 transition duration-300">
                        {link.text}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
                <div>
                <h3 className="text-2xl font-semibold mb-4 font-hind-siliguri">{footerData.social.title}</h3>
                <div className="flex space-x-4">
                    {footerData.social.links.map((link, index) => (
                    <Link key={index} href={link.href} target="_blank" className="hover:text-white/80 transition duration-300">
                        <span className="sr-only">{link.platform}</span>
                        {renderSocialIcon(link.platform)}
                    </Link>
                    ))}
                </div>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p>{footerData.copyright}</p>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer