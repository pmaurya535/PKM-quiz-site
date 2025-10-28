import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { AppLogo } from '../../config/icons'
import { PageCenter } from '../../styles/Global'
import myPhoto from '../../assets/images/pm.jpg'

// 🌊 Smooth Floating Animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

// ✨ Slow Fade-In
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`



// 🧩 Centered Logo + Image Animation
const LogoAnimation = styled.div<{ logoSize: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 2;
  animation: ${fadeIn} 2s ease forwards;

  svg {
    width: ${({ logoSize }) => logoSize};
    height: auto;
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
    animation: ${float} 6s ease-in-out infinite;
  }

  img {
    width: ${({ logoSize }) => `calc(${logoSize} * 1.1)`};
    height: ${({ logoSize }) => `calc(${logoSize} * 1.1)`};
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45);
    animation: ${float} 6s ease-in-out infinite alternate;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(255, 255, 255, 0.35);
  }

  @media (max-width: 768px) {
    gap: 25px;
    svg {
      width: ${({ logoSize }) => `calc(${logoSize} * 0.7)`};
    }
    img {
      width: ${({ logoSize }) => `calc(${logoSize} * 0.8)`};
      height: ${({ logoSize }) => `calc(${logoSize} * 0.8)`};
    }
  }
`

// 🕒 SplashScreen Component
const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState('240px')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) setLogoSize('160px')
      else setLogoSize('240px')
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // ⏳ Show splash for full 20 seconds
    const timer = setTimeout(() => setShowSplash(false), 20000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!showSplash) return null // hide after 20s (you can replace with your main app later)

  return (
    
      <PageCenter justifyCenter>
        <LogoAnimation logoSize={logoSize}>
          <AppLogo />
          <img src={myPhoto} alt="My Profile" />
        </LogoAnimation>
      </PageCenter>
    
  )
}

export default SplashScreen
