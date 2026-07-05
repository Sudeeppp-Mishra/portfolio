import { motion } from 'framer-motion';
import '../../styles/button.css';

function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  download,
  ...rest
}) {
  const Component = motion[as === 'a' ? 'a' : 'button'];

  return (
    <Component
      className={`btn btn--${variant}`}
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      download={download}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Button;