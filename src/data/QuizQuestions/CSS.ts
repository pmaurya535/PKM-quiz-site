// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const css: Topic = {
  topic: 'CSS',
  level: 'Advanced',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 360,
  questions: [
    {
      question: 'Which of the following are valid ways to include CSS in a web page? (Select all that apply)',
      choices: [
        'Inline CSS',
        'Internal CSS using <style>',
        'External CSS using <link>',
        'Server-side CSS',
      ],
      type: 'MAQs',
      correctAnswers: ['Inline CSS', 'Internal CSS using <style>', 'External CSS using <link>'],
      score: 10,
    },
    {
      question: 'CSS stands for Cascading Style Sheets.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'Which CSS property is used to control the spacing between lines of text?',
      choices: ['letter-spacing', 'line-height', 'word-spacing', 'text-spacing'],
      type: 'MCQs',
      correctAnswers: ['line-height'],
      score: 10,
    },
    {
      question: 'In CSS, "position: sticky" is a combination of which two position types?',
      choices: ['relative and fixed', 'absolute and fixed', 'relative and static', 'fixed and static'],
      type: 'MCQs',
      correctAnswers: ['relative and fixed'],
      score: 10,
    },
    {
      question: 'Which of the following units are relative in CSS? (Select all that apply)',
      choices: ['em', 'rem', 'px', '%'],
      type: 'MAQs',
      correctAnswers: ['em', 'rem', '%'],
      score: 10,
    },
    {
      question: 'The z-index property only works on positioned elements (position not static).',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'Which CSS property is used to create rounded corners?',
      choices: ['border-width', 'border-style', 'border-radius', 'corner-radius'],
      type: 'MCQs',
      correctAnswers: ['border-radius'],
      score: 10,
    },
    {
      question: 'What is the default position value of an HTML element?',
      choices: ['static', 'relative', 'absolute', 'inherit'],
      type: 'MCQs',
      correctAnswers: ['static'],
      score: 10,
    },
    {
      question: 'Which of the following pseudo-classes are used for link states? (Select all that apply)',
      choices: [':hover', ':visited', ':focus', ':active'],
      type: 'MAQs',
      correctAnswers: [':hover', ':visited', ':active'],
      score: 10,
    },
    {
      question: 'Which CSS property controls the order of flex items?',
      choices: ['flex-order', 'order', 'item-order', 'flex-position'],
      type: 'MCQs',
      correctAnswers: ['order'],
      score: 10,
    },
    {
      question: 'CSS Grid is better suited for one-dimensional layouts.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question: 'Which of the following are valid display property values in CSS? (Select all that apply)',
      choices: ['flex', 'grid', 'inline-block', 'sticky'],
      type: 'MAQs',
      correctAnswers: ['flex', 'grid', 'inline-block'],
      score: 10,
    },
    {
      question: 'Which CSS property is used to add shadow to text?',
      choices: ['text-decoration', 'text-shadow', 'box-shadow', 'shadow-color'],
      type: 'MCQs',
      correctAnswers: ['text-shadow'],
      score: 10,
    },
    {
      question: 'Which property is used to make a flex container’s children align along the main axis?',
      choices: ['align-items', 'justify-content', 'align-content', 'align-self'],
      type: 'MCQs',
      correctAnswers: ['justify-content'],
      score: 10,
    },
  ],
}
