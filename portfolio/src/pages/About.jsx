import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaLaptopCode } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg'; // Make sure to add your image to this path

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    width: 80px;
    height: 4px;
    background: var(--primary-color);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.7;
    text-align: justify;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: var(--box-shadow);
  justify-self: center;
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 25px;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  .icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
  }
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  
  p {
    color: var(--text-color);
    opacity: 0.8;
  }
`;

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <AboutContainer id="about">
      <AboutContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </SectionTitle>
          
          <AboutGrid>
            <ProfileImage
              src={profileImage}
              alt="Profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
            <AboutInfo variants={itemVariants}>
              <h3>Arvind Natarajan</h3>
              <p>
                Bachelor of Computing in Computer Science student at the National University of Singapore (NUS). 
                AI Engineer at Carecam (Singapore). Research Assistant at NUS.
              </p>
              <p>
                I'm passionate about artificial intelligence, particularly in developing practical 
                solutions that solve real-world problems. My interests span across machine learning, 
                computer vision, and full-stack development.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, attending tech meetups, 
                and contributing to open-source projects.
              </p>
            </AboutInfo>
          </AboutGrid>
          
          <AboutCards>
            <AboutCard 
              variants={itemVariants} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon">
                <FaLaptopCode />
              </div>
              <h4>AI Engineer</h4>
              <p>
                At Carecam, I develop cutting-edge AI solutions for healthcare applications, 
                focusing on computer vision and mobility assessment technologies.
              </p>
            </AboutCard>
            
            <AboutCard 
              variants={itemVariants} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon">
                <FaCode />
              </div>
              <h4>Full-Stack Developer</h4>
              <p>
                I build responsive, user-friendly applications using modern frameworks and technologies,
                with a focus on clean code and best practices.
              </p>
            </AboutCard>
            
            <AboutCard 
              variants={itemVariants} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon">
                <FaUser />
              </div>
              <h4>Computer Science Student</h4>
              <p>
                Currently pursuing my Bachelor's degree at NUS, where I'm developing a solid 
                foundation in algorithms, data structures, and software engineering.
              </p>
            </AboutCard>
          </AboutCards>
        </motion.div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 