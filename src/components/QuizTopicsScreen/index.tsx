import styled, { keyframes } from 'styled-components'

//import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { device } from '../../styles/BreakPoints'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'

import Button from '../ui/Button'

// 🌈 Animated gradient keyframes
const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const StyledCard = styled(CenterCardContainer)`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 50px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  }

  /* 🌈 Animated Gradient Background */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 180deg,
      #00c6ff,
      #0072ff,
      #8a2be2,
      #ff00c8,
      #00c6ff
    );
    animation: rotate 8s linear infinite;
    opacity: 0.15;
    z-index: 0;
    pointer-events: none; /* ✅ Fix click issue */
  }

  /* 🎨 SVG UI/UX Wave Pattern */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml;utf8,
      <svg viewBox='0 0 500 150' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0,80 Q250,120 500,80 T1000,80' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='2' stroke-dasharray='6 6'>
          <animate attributeName='stroke-dashoffset' values='0;12' dur='3s' repeatCount='indefinite'/>
        </path>
      </svg>
    ");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
    pointer-events: none; /* ✅ Fix click issue */
    z-index: 1;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  /* Ensure inner content stays above & clickable */
  > * {
    position: relative;
    z-index: 2;
    pointer-events: auto; /* ✅ ensures Button works */
  }

  @media ${device.md} {
    padding: 30px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  opacity: 0.9;
`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`

interface SelectButtonProps {
  active: boolean
  disabled?: boolean
}

const SelectButton = styled.div<SelectButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: all 0.3s ease;
  border-radius: 12px;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.themeColor + '22'};
  }

  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`
// ✅ Animated footer design
const FooterText = styled.p`
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: rgba(234, 8, 8, 0.7);
  font-family: 'Poppins', sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
`

const AnimatedName = styled.span`
  font-weight: 600;
  background: linear-gradient(270deg, #00c6ff, #0072ff, #ff0080, #00ff87);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  animation: ${colorChange} 8s ease infinite;
`


const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <StyledCard>
        <LogoContainer></LogoContainer>
        <Heading>
          WELCOME TO <HighlightedText>💕💻PKM👨‍💻QUIZ🖥️💞 </HighlightedText>
        </Heading>
        <DetailText>Select topic below to start your Quiz.</DetailText>
        <SelectButtonContainer>
          {quizTopics.map(({ title, icon, disabled }) => (
            <SelectButton
              key={title}
              active={quizTopic === title}
              onClick={() => !disabled && selectQuizTopic(title)}
              disabled={disabled}
            >
              {icon}
              <SelectButtonText>{title}</SelectButtonText>
            </SelectButton>
          ))}
        </SelectButtonContainer>
        <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
       <FooterText>
          Designed 💖 by <AnimatedName>Pradeep Kumar Maurya</AnimatedName>
        </FooterText>
      </StyledCard>
    </PageCenter>
  )
}

export default QuizTopicsScreen
