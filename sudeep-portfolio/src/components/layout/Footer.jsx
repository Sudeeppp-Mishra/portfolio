import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../ui/BrandIcons.jsx';
import { SITE_CONFIG } from '../../siteConfig.js';
import '../../styles/footer.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: SITE_CONFIG.github, Icon: Github },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, Icon: Linkedin },
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, Icon: Mail },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__mark">
          SM<span className="footer__dot">·</span>{' '}
          <span className="footer__copy">© {year} Sudeep Mishra</span>
        </p>

        <ul className="footer__socials">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer__social-link"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;