// Quiz functionality for the evaluations page

// Quiz data based on PDF materials from dc folder
const quizData = {
  personal: {
    title: "Quiz: Información Personal",
    icon: "👤",
    questions: [
      {
        question: "¿Cómo se dice '¿Cómo te llamas?' en inglés?",
        options: ["How are you?", "What's your name?", "Where are you from?", "How old are you?"],
        correct: 1,
        explanation: "What's your name? es la forma correcta de preguntar el nombre en inglés.",
      },
      {
        question: "¿Qué significa 'My name is Maria'?",
        options: ["Mi edad es Maria", "Mi nombre es Maria", "Soy de Maria", "Vivo en Maria"],
        correct: 1,
        explanation: "My name is Maria significa 'Mi nombre es Maria'.",
      },
      {
        question: "¿Cómo se dice '¿Cuántos años tienes?' en inglés?",
        options: ["What's your name?", "Where do you live?", "How old are you?", "What do you do?"],
        correct: 2,
        explanation: "How old are you? significa '¿Cuántos años tienes?'.",
      },
      {
        question: "¿Qué significa 'I am 12 years old'?",
        options: ["Tengo 11 años", "Tengo 12 años", "Tengo 13 años", "Tengo 10 años"],
        correct: 1,
        explanation: "I am 12 years old significa 'Tengo 12 años'.",
      },
      {
        question: "¿Cómo se dice '¿De dónde eres?' en inglés?",
        options: ["Where are you from?", "Where do you live?", "What's your address?", "Where do you work?"],
        correct: 0,
        explanation: "Where are you from? significa '¿De dónde eres?'.",
      },
      {
        question: "¿Qué significa 'I am from Colombia'?",
        options: ["Vivo en Colombia", "Soy de Colombia", "Trabajo en Colombia", "Estudio en Colombia"],
        correct: 1,
        explanation: "I am from Colombia significa 'Soy de Colombia'.",
      },
      {
        question: "¿Cómo se dice 'estudiante' en inglés?",
        options: ["Teacher", "Student", "Doctor", "Worker"],
        correct: 1,
        explanation: "Student es la palabra para 'estudiante' en inglés.",
      },
      {
        question: "¿Qué significa 'I live in Bogotá'?",
        options: ["Soy de Bogotá", "Trabajo en Bogotá", "Vivo en Bogotá", "Estudio en Bogotá"],
        correct: 2,
        explanation: "I live in Bogotá significa 'Vivo en Bogotá'.",
      },
    ],
  },
  greetings: {
    title: "Quiz: Saludos y Despedidas",
    icon: "👋",
    questions: [
      {
        question: "¿Cómo se dice 'hola' en inglés?",
        options: ["Goodbye", "Hello", "Please", "Thank you"],
        correct: 1,
        explanation: "Hello es la forma más común de decir 'hola' en inglés.",
      },
      {
        question: "¿Qué significa 'Good morning'?",
        options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hasta luego"],
        correct: 1,
        explanation: "Good morning significa 'buenos días'.",
      },
      {
        question: "¿Cómo se dice 'adiós' en inglés?",
        options: ["Hello", "Hi", "Goodbye", "Welcome"],
        correct: 2,
        explanation: "Goodbye es la traducción correcta de 'adiós'.",
      },
      {
        question: "¿Qué significa 'Good afternoon'?",
        options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana"],
        correct: 1,
        explanation: "Good afternoon significa 'buenas tardes'.",
      },
      {
        question: "¿Cómo se dice 'buenas noches' en inglés?",
        options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
        correct: 3,
        explanation: "Good night es la forma de decir 'buenas noches'.",
      },
      {
        question: "¿Qué significa 'See you later'?",
        options: ["Nos vemos luego", "Hasta mañana", "Buenas noches", "Que tengas buen día"],
        correct: 0,
        explanation: "See you later significa 'nos vemos luego'.",
      },
      {
        question: "¿Cómo se dice 'hasta mañana' en inglés?",
        options: ["See you later", "See you tomorrow", "Good night", "Goodbye"],
        correct: 1,
        explanation: "See you tomorrow significa 'hasta mañana'.",
      },
      {
        question: "¿Qué significa 'Nice to meet you'?",
        options: ["Nos vemos luego", "Mucho gusto", "¿Cómo estás?", "Que tengas buen día"],
        correct: 1,
        explanation: "Nice to meet you significa 'mucho gusto' o 'encantado de conocerte'.",
      },
    ],
  },
  tobe: {
    title: "Quiz: Verbo To Be",
    icon: "📝",
    questions: [
      {
        question: "¿Cuál es la forma correcta del verbo 'to be' para 'I'?",
        options: ["am", "is", "are", "be"],
        correct: 0,
        explanation: "Con el pronombre 'I' siempre usamos 'am': I am.",
      },
      {
        question: "¿Cuál es la forma correcta del verbo 'to be' para 'She'?",
        options: ["am", "is", "are", "be"],
        correct: 1,
        explanation: "Con 'She', 'He' e 'It' usamos 'is': She is.",
      },
      {
        question: "¿Cuál es la forma correcta del verbo 'to be' para 'They'?",
        options: ["am", "is", "are", "be"],
        correct: 2,
        explanation: "Con 'They', 'We' y 'You' usamos 'are': They are.",
      },
      {
        question: "¿Cómo se dice 'Yo soy estudiante' en inglés?",
        options: ["I is student", "I am student", "I are student", "I be student"],
        correct: 1,
        explanation: "I am student es la forma correcta (aunque sería mejor 'I am a student').",
      },
      {
        question: "¿Cuál es la forma negativa de 'I am'?",
        options: ["I am not", "I not am", "I don't am", "I no am"],
        correct: 0,
        explanation: "La forma negativa de 'I am' es 'I am not' o 'I'm not'.",
      },
      {
        question: "¿Cómo se dice 'Ella es profesora' en inglés?",
        options: ["She am teacher", "She is teacher", "She are teacher", "She be teacher"],
        correct: 1,
        explanation: "She is teacher es correcto (aunque sería mejor 'She is a teacher').",
      },
      {
        question: "¿Cuál es la forma interrogativa de 'You are happy'?",
        options: ["You are happy?", "Are you happy?", "Do you are happy?", "Is you happy?"],
        correct: 1,
        explanation: "Para hacer preguntas con 'to be', invertimos el orden: Are you happy?",
      },
      {
        question: "¿Cómo se dice 'Nosotros somos amigos' en inglés?",
        options: ["We am friends", "We is friends", "We are friends", "We be friends"],
        correct: 2,
        explanation: "We are friends es la forma correcta usando 'are' con 'we'.",
      },
    ],
  },
}

// Quiz state
let currentQuiz = null
let currentQuestion = 0
let selectedAnswers = []
let quizStarted = false

// Start a quiz
function startQuiz(quizType) {
  currentQuiz = quizData[quizType]
  currentQuestion = 0
  selectedAnswers = []
  quizStarted = true

  // Hide quiz selection and show quiz container
  document.getElementById("quiz-selection").style.display = "none"
  document.getElementById("quiz-container").style.display = "block"

  window.scrollTo({ top: 0, behavior: "smooth" })

  // Load first question
  loadQuestion()
}

// Load current question
function loadQuestion() {
  const question = currentQuiz.questions[currentQuestion]

  // Update progress
  document.getElementById("question-number").textContent =
    `Pregunta ${currentQuestion + 1} de ${currentQuiz.questions.length}`
  const progressPercentage = ((currentQuestion + 1) / currentQuiz.questions.length) * 100
  document.getElementById("quiz-progress-fill").style.width = progressPercentage + "%"

  // Update question text
  document.getElementById("question-text").textContent = question.question

  // Create options
  const optionsContainer = document.getElementById("options-container")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div")
    optionElement.className = "option"
    optionElement.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option-${index}">
            <label for="option-${index}">${option}</label>
        `

    optionElement.addEventListener("click", () => {
      // Clear previous selections
      document.querySelectorAll(".option").forEach((opt) => opt.classList.remove("selected"))

      // Select this option
      optionElement.classList.add("selected")
      optionElement.querySelector("input").checked = true

      // Enable next button
      document.getElementById("next-btn").disabled = false
    })

    optionsContainer.appendChild(optionElement)
  })

  // Update button states
  document.getElementById("prev-btn").disabled = currentQuestion === 0
  document.getElementById("next-btn").disabled = true

  // Update next button text
  const nextBtn = document.getElementById("next-btn")
  if (currentQuestion === currentQuiz.questions.length - 1) {
    nextBtn.innerHTML = 'Finalizar <i class="fas fa-check"></i>'
  } else {
    nextBtn.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>'
  }

  // Pre-select answer if already answered
  if (selectedAnswers[currentQuestion] !== undefined) {
    const selectedOption = document.querySelector(`input[value="${selectedAnswers[currentQuestion]}"]`)
    if (selectedOption) {
      selectedOption.checked = true
      selectedOption.closest(".option").classList.add("selected")
      document.getElementById("next-btn").disabled = false
    }
  }
}

// Go to previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--
    loadQuestion()
  }
}

// Go to next question or finish quiz
function nextQuestion() {
  // Save current answer
  const selectedOption = document.querySelector('input[name="answer"]:checked')
  if (selectedOption) {
    selectedAnswers[currentQuestion] = Number.parseInt(selectedOption.value)
  }

  if (currentQuestion < currentQuiz.questions.length - 1) {
    currentQuestion++
    loadQuestion()
  } else {
    finishQuiz()
  }
}

// Finish quiz and show results
function finishQuiz() {
  // Hide quiz container and show results
  document.getElementById("quiz-container").style.display = "none"
  document.getElementById("results-container").style.display = "block"

  window.scrollTo({ top: 0, behavior: "smooth" })

  // Calculate score
  let correctAnswers = 0
  currentQuiz.questions.forEach((question, index) => {
    if (selectedAnswers[index] === question.correct) {
      correctAnswers++
    }
  })

  const percentage = (correctAnswers / currentQuiz.questions.length) * 100

  // Update results display
  document.getElementById("score-number").textContent = `${correctAnswers}/${currentQuiz.questions.length}`
  document.getElementById("score-percentage").textContent = `${Math.round(percentage)}% Correcto`

  // Update emoji and message based on score
  const resultsEmoji = document.getElementById("results-emoji")
  const scoreMessage = document.getElementById("score-message")

  if (percentage >= 80) {
    resultsEmoji.textContent = "🌟"
    scoreMessage.textContent = "¡Excelente trabajo!"
  } else if (percentage >= 60) {
    resultsEmoji.textContent = "👍"
    scoreMessage.textContent = "¡Muy bien! Sigue practicando"
  } else if (percentage >= 40) {
    resultsEmoji.textContent = "💪"
    scoreMessage.textContent = "Buen intento, puedes mejorar"
  } else {
    resultsEmoji.textContent = "📚"
    scoreMessage.textContent = "Necesitas practicar más. ¡No te rindas!"
  }

  // Show detailed results
  showDetailedResults()

  // Save quiz result to localStorage
  saveQuizResult(currentQuiz.title, correctAnswers, currentQuiz.questions.length, percentage)
}

// Show detailed results for each question
function showDetailedResults() {
  const detailedResults = document.getElementById("detailed-results")
  detailedResults.innerHTML = ""

  currentQuiz.questions.forEach((question, index) => {
    const userAnswer = selectedAnswers[index]
    const isCorrect = userAnswer === question.correct

    const resultItem = document.createElement("div")
    resultItem.className = `result-item ${isCorrect ? "correct" : "incorrect"}`

    resultItem.innerHTML = `
            <div class="result-question">${question.question}</div>
            <div class="result-answer">Tu respuesta: <strong>${question.options[userAnswer] || "No respondida"}</strong></div>
            ${!isCorrect ? `<div class="result-answer">Respuesta correcta: <strong>${question.options[question.correct]}</strong></div>` : ""}
            <div class="result-explanation">${question.explanation}</div>
        `

    detailedResults.appendChild(resultItem)
  })
}

// Save quiz result to localStorage
function saveQuizResult(quizTitle, correct, total, percentage) {
  const results = JSON.parse(localStorage.getItem("quizResults") || "[]")
  const result = {
    quiz: quizTitle,
    score: `${correct}/${total}`,
    percentage: Math.round(percentage),
    date: new Date().toLocaleDateString(),
    timestamp: Date.now(),
  }

  results.push(result)

  // Keep only last 50 results
  if (results.length > 50) {
    results.splice(0, results.length - 50)
  }

  localStorage.setItem("quizResults", JSON.stringify(results))
}

// Reset quiz
function resetQuiz() {
  currentQuestion = 0
  selectedAnswers = []

  // Hide results and show quiz container
  document.getElementById("results-container").style.display = "none"
  document.getElementById("quiz-container").style.display = "block"

  window.scrollTo({ top: 0, behavior: "smooth" })

  // Load first question
  loadQuestion()
}

// Back to quiz selection
function backToSelection() {
  currentQuiz = null
  currentQuestion = 0
  selectedAnswers = []
  quizStarted = false

  // Hide all containers and show selection
  document.getElementById("quiz-container").style.display = "none"
  document.getElementById("results-container").style.display = "none"
  document.getElementById("quiz-selection").style.display = "block"

  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Get quiz statistics
function getQuizStatistics() {
  const results = JSON.parse(localStorage.getItem("quizResults") || "[]")
  const stats = {}

  results.forEach((result) => {
    if (!stats[result.quiz]) {
      stats[result.quiz] = {
        attempts: 0,
        totalScore: 0,
        bestScore: 0,
        averageScore: 0,
      }
    }

    stats[result.quiz].attempts++
    stats[result.quiz].totalScore += result.percentage
    stats[result.quiz].bestScore = Math.max(stats[result.quiz].bestScore, result.percentage)
    stats[result.quiz].averageScore = Math.round(stats[result.quiz].totalScore / stats[result.quiz].attempts)
  })

  return stats
}

// Initialize quiz page
document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the quizzes section
  const quizzesSection = document.getElementById("quizzes")
  if (quizzesSection) {
    console.log("Quiz system initialized")

    // Load any saved progress or statistics
    const stats = getQuizStatistics()
    console.log("Quiz statistics:", stats)
  }
})

// Keyboard navigation for quiz
document.addEventListener("keydown", (e) => {
  if (!quizStarted) return

  // Number keys 1-4 for selecting options
  if (e.key >= "1" && e.key <= "4") {
    const optionIndex = Number.parseInt(e.key) - 1
    const option = document.querySelector(`input[value="${optionIndex}"]`)
    if (option) {
      option.checked = true
      option.closest(".option").click()
    }
  }

  // Arrow keys for navigation
  if (e.key === "ArrowLeft") {
    const prevBtn = document.getElementById("prev-btn")
    if (prevBtn && !prevBtn.disabled) {
      previousQuestion()
    }
  }

  if (e.key === "ArrowRight" || e.key === "Enter") {
    const nextBtn = document.getElementById("next-btn")
    if (nextBtn && !nextBtn.disabled) {
      nextQuestion()
    }
  }

  // Escape key to go back to selection
  if (e.key === "Escape") {
    if (confirm("¿Estás seguro de que quieres salir del quiz?")) {
      backToSelection()
    }
  }
})

// Auto-save progress
setInterval(() => {
  if (quizStarted && currentQuiz) {
    const progress = {
      quizType: Object.keys(quizData).find((key) => quizData[key] === currentQuiz),
      currentQuestion: currentQuestion,
      selectedAnswers: selectedAnswers,
      timestamp: Date.now(),
    }

    localStorage.setItem("quizProgress", JSON.stringify(progress))
  }
}, 5000) // Save every 5 seconds

// Load saved progress on page load
window.addEventListener("load", () => {
  const savedProgress = localStorage.getItem("quizProgress")
  if (savedProgress) {
    const progress = JSON.parse(savedProgress)

    // Only restore if saved within last hour
    if (Date.now() - progress.timestamp < 3600000) {
      // Could implement progress restoration here
      console.log("Found saved quiz progress:", progress)
    } else {
      localStorage.removeItem("quizProgress")
    }
  }
})
