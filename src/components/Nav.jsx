import { motion } from 'framer-motion';

const Nav = () => {
  const name = 'NASA IMAGES';
  // Split the string whenever there is a space and place it in an array
  const letters = name.split('');

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const logo = letters.map((item, index) => {
    if (item === ' ')
      return (
        <motion.p key={index} variants={letterVariants} className="type-space">
          {item}
        </motion.p>
      );
    else
      return (
        <motion.p variants={letterVariants} key={index} className="type-color">
          {item}
        </motion.p>
      );
  });

  // staggerDirection: -1
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '-100' },
    visible: { opacity: 1, x: 0, transition: { delay: 3.5, duration: 0.75 } },
  };

  return (
    <motion.div
      className="nav"
      animate={{ height: '100px', backgroundColor: '#020202' }}
      initial={{ height: '100vh', backgroundColor: '#0B3D91' }}
      transition={{ duration: 0.5, delay: 3 }}
    >
      <motion.div variants={logoVariants} initial="hidden" animate="visible">
        <a href="#" className="logo">
          {' '}
          {logo}
        </a>
      </motion.div>
      <motion.div
        className="menu"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="#gallery">GALLERY</a>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
