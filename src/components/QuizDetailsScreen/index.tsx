import styled, { keyframes } from 'styled-components'
import { StartIcon } from '../../config/icons'
import { ArrowLeft as BackIcon } from 'lucide-react'  // ✅ Added BackIcon
import { useQuiz } from '../../context/QuizContext'
import {
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import Button from '../ui/Button'


// 🌈 Animated gradient keyframes
const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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


// 🌟 Modern Glassmorphic Card with Gradient + SVG UI/UX Effect
const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 50px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
  text-align: center;

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
    pointer-events: none;
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
    pointer-events: none;
    z-index: 1;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
  margin-bottom: 20px;
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const DetailText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  line-height: 1.4;
`

// 🌸 Button container for proper alignment
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()
  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  const goToQuizTopicsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <StyledCard>
        <LogoContainer />
        <AppTitle>💖 PKM 🌻 QUIZ 💖</AppTitle>

        <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total Questions: <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Total Score: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total Time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
          <DetailText>
            You can skip questions and answer them at the end of the quiz.
          </DetailText>
        </DetailTextContainer>

        <ButtonContainer>
          <Button
            text="Back"
            icon={<BackIcon />}
            iconPosition="left"
            onClick={goToQuizTopicsScreen}
            bold
          />
          <Button
            text="Start"
            icon={<StartIcon />}
            iconPosition="left"
            onClick={goToQuestionScreen}
            bold
          />
        </ButtonContainer>

        <FooterText>
          Designed 💖 by <AnimatedName>Pradeep Kumar Maurya</AnimatedName>
        </FooterText>
      </StyledCard>
    </PageCenter>
  )
}

export default QuizDetailsScreen
