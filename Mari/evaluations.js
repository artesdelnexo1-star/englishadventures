// Evaluation functionality for interactive assessments
// Based on PDF evaluation materials from mari/dc/Ev folder

const evaluationData = {
  saludos: {
    title: "Evaluación: Saludos y Despedidas",
    icon: "👋",
    questions: [
      {
        question: "¿Cómo se dice 'Buenos días' en inglés?",
        options: ["Good night", "Good morning", "Good afternoon", "Good evening"],
        correct: 1,
        explanation: "Good morning es la traducción correcta de 'Buenos días'.",
      },
      {
        question: "¿Qué significa 'How are you?'?",
        options: ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿Cómo estás?", "¿De dónde eres?"],
        correct: 2,
        explanation: "How are you? significa '¿Cómo estás?'.",
      },
      {
        question: "¿Cuál es la respuesta correcta a 'Nice to meet you'?",
        options: ["I'm fine", "Nice to meet you too", "See you later", "Good morning"],
        correct: 1,
        explanation: "Nice to meet you too es la respuesta apropiada.",
      },
      {
        question: "¿Cómo se dice 'Hasta luego' en inglés?",
        options: ["Good night", "Goodbye", "See you later", "Take care"],
        correct: 2,
        explanation: "See you later significa 'Hasta luego'.",
      },
      {
        question: "¿Qué significa 'Good evening'?",
        options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana"],
        correct: 2,
        explanation: "Good evening significa 'Buenas noches' (al saludar).",
      },
      {
        question: "¿Cuál es una forma informal de decir 'Hello'?",
        options: ["Good morning", "Hi", "Good afternoon", "How do you do"],
        correct: 1,
        explanation: "Hi es una forma informal de decir 'Hello'.",
      },
      {
        question: "¿Cómo se dice 'Que tengas un buen día' en inglés?",
        options: ["Good night", "See you tomorrow", "Have a nice day", "Take care"],
        correct: 2,
        explanation: "Have a nice day significa 'Que tengas un buen día'.",
      },
      {
        question: "¿Qué significa 'Farewell'?",
        options: ["Saludo", "Despedida", "Presentación", "Pregunta"],
        correct: 1,
        explanation: "Farewell significa 'despedida'.",
      },
      {
        question: "¿Cuál es la forma más formal de saludar?",
        options: ["Hi", "Hey", "How do you do", "What's up"],
        correct: 2,
        explanation: "How do you do es la forma más formal de saludar.",
      },
      {
        question: "¿Cómo se dice 'Nos vemos mañana' en inglés?",
        options: ["See you later", "See you tomorrow", "Good night", "Until next time"],
        correct: 1,
        explanation: "See you tomorrow significa 'Nos vemos mañana'.",
      },
    ],
  },

  personal: {
    title: "Evaluación: Información Personal",
    icon: "👤",
    questions: [
      {
        question: "¿Cómo se pregunta el nombre en inglés?",
        options: ["How old are you?", "What's your name?", "Where are you from?", "What do you do?"],
        correct: 1,
        explanation: "What's your name? es la forma correcta de preguntar el nombre.",
      },
      {
        question: "¿Qué significa 'I am 15 years old'?",
        options: ["Tengo 14 años", "Tengo 15 años", "Tengo 16 años", "Soy de 15 años"],
        correct: 1,
        explanation: "I am 15 years old significa 'Tengo 15 años'.",
      },
      {
        question: "¿Cómo se dice 'Soy estudiante' en inglés?",
        options: ["I am teacher", "I am student", "I am doctor", "I am worker"],
        correct: 1,
        explanation: "I am student es correcto (aunque sería mejor 'I am a student').",
      },
      {
        question: "¿Qué significa 'Where do you live?'?",
        options: ["¿Cómo te llamas?", "¿Dónde vives?", "¿Cuántos años tienes?", "¿Qué haces?"],
        correct: 1,
        explanation: "Where do you live? significa '¿Dónde vives?'.",
      },
      {
        question: "¿Cómo se dice 'Mi número de teléfono es...' en inglés?",
        options: ["My address is...", "My phone number is...", "My email is...", "My age is..."],
        correct: 1,
        explanation: "My phone number is... significa 'Mi número de teléfono es...'.",
      },
      {
        question: "¿Qué significa 'nationality'?",
        options: ["Edad", "Nacionalidad", "Profesión", "Dirección"],
        correct: 1,
        explanation: "Nationality significa 'nacionalidad'.",
      },
      {
        question: "¿Cómo se dice 'Soy de Colombia' en inglés?",
        options: ["I live in Colombia", "I am from Colombia", "I work in Colombia", "I study in Colombia"],
        correct: 1,
        explanation: "I am from Colombia significa 'Soy de Colombia'.",
      },
      {
        question: "¿Qué significa 'single' en estado civil?",
        options: ["Casado", "Soltero", "Divorciado", "Viudo"],
        correct: 1,
        explanation: "Single significa 'soltero' en estado civil.",
      },
      {
        question: "¿Cómo se pregunta la edad en inglés?",
        options: ["What's your name?", "How old are you?", "Where are you from?", "What do you do?"],
        correct: 1,
        explanation: "How old are you? significa '¿Cuántos años tienes?'.",
      },
      {
        question: "¿Qué significa 'address'?",
        options: ["Teléfono", "Email", "Dirección", "Nombre"],
        correct: 2,
        explanation: "Address significa 'dirección'.",
      },
    ],
  },

  tobe: {
    title: "Evaluación: Verbo To Be",
    icon: "📝",
    questions: [
      {
        question: "Completa: I ___ a student.",
        options: ["am", "is", "are", "be"],
        correct: 0,
        explanation: "Con 'I' siempre usamos 'am': I am a student.",
      },
      {
        question: "Completa: She ___ my teacher.",
        options: ["am", "is", "are", "be"],
        correct: 1,
        explanation: "Con 'She' usamos 'is': She is my teacher.",
      },
      {
        question: "Completa: They ___ happy.",
        options: ["am", "is", "are", "be"],
        correct: 2,
        explanation: "Con 'They' usamos 'are': They are happy.",
      },
      {
        question: "¿Cuál es la forma negativa de 'You are'?",
        options: ["You not are", "You aren't", "You don't are", "You no are"],
        correct: 1,
        explanation: "La forma negativa de 'You are' es 'You aren't' o 'You are not'.",
      },
      {
        question: "¿Cómo se hace la pregunta con 'He is tall'?",
        options: ["He is tall?", "Is he tall?", "Does he tall?", "He tall is?"],
        correct: 1,
        explanation: "Para hacer preguntas con 'to be', invertimos: Is he tall?",
      },
      {
        question: "Completa: We ___ from Colombia.",
        options: ["am", "is", "are", "be"],
        correct: 2,
        explanation: "Con 'We' usamos 'are': We are from Colombia.",
      },
      {
        question: "¿Cuál es la contracción de 'I am'?",
        options: ["I'm", "I's", "I'am", "Im"],
        correct: 0,
        explanation: "La contracción de 'I am' es 'I'm'.",
      },
      {
        question: "Completa: The book ___ on the table.",
        options: ["am", "is", "are", "be"],
        correct: 1,
        explanation: "Con objetos singulares usamos 'is': The book is on the table.",
      },
      {
        question: "¿Cuál es la forma negativa de 'It is'?",
        options: ["It not is", "It isn't", "It don't is", "It no is"],
        correct: 1,
        explanation: "La forma negativa de 'It is' es 'It isn't' o 'It is not'.",
      },
      {
        question: "Completa: You and I ___ friends.",
        options: ["am", "is", "are", "be"],
        correct: 2,
        explanation: "Con sujetos plurales usamos 'are': You and I are friends.",
      },
      {
        question: "¿Cuál es la contracción de 'She is'?",
        options: ["She's", "Shes", "She'is", "Sh'is"],
        correct: 0,
        explanation: "La contracción de 'She is' es 'She's'.",
      },
      {
        question: "Completa: The cats ___ in the garden.",
        options: ["am", "is", "are", "be"],
        correct: 2,
        explanation: "Con sujetos plurales usamos 'are': The cats are in the garden.",
      },
    ],
  },

  thereis: {
    title: "Evaluación: There Is / There Are",
    icon: "🏠",
    questions: [
      {
        question: "Completa: ___ a book on the table.",
        options: ["There is", "There are", "There am", "There be"],
        correct: 0,
        explanation: "Con objetos singulares usamos 'There is': There is a book.",
      },
      {
        question: "Completa: ___ three cats in the garden.",
        options: ["There is", "There are", "There am", "There be"],
        correct: 1,
        explanation: "Con objetos plurales usamos 'There are': There are three cats.",
      },
      {
        question: "¿Cuál es la forma negativa de 'There is'?",
        options: ["There not is", "There isn't", "There don't is", "There no is"],
        correct: 1,
        explanation: "La forma negativa de 'There is' es 'There isn't' o 'There is not'.",
      },
      {
        question: "¿Cómo se hace la pregunta con 'There are students'?",
        options: ["There are students?", "Are there students?", "Do there students?", "Students there are?"],
        correct: 1,
        explanation: "Para hacer preguntas invertimos: Are there students?",
      },
      {
        question: "Completa: ___ any milk in the fridge?",
        options: ["Is there", "Are there", "Am there", "Be there"],
        correct: 0,
        explanation: "Con sustantivos incontables usamos 'Is there': Is there any milk?",
      },
      {
        question: "Completa: ___ many people at the party.",
        options: ["There is", "There are", "There am", "There be"],
        correct: 1,
        explanation: "Con 'many people' (plural) usamos 'There are'.",
      },
      {
        question: "¿Cuál es la forma negativa de 'There are'?",
        options: ["There not are", "There aren't", "There don't are", "There no are"],
        correct: 1,
        explanation: "La forma negativa de 'There are' es 'There aren't' o 'There are not'.",
      },
      {
        question: "Completa: ___ a problem with the computer.",
        options: ["There is", "There are", "There am", "There be"],
        correct: 0,
        explanation: "Con 'a problem' (singular) usamos 'There is'.",
      },
      {
        question: "¿Cómo se pregunta si hay algo?",
        options: ["There is?", "Is there?", "Are there?", "Both B and C"],
        correct: 3,
        explanation: "Usamos 'Is there?' para singular e 'Are there?' para plural.",
      },
      {
        question: "Completa: ___ no chairs in the room.",
        options: ["There is", "There are", "There am", "There be"],
        correct: 1,
        explanation: "Con 'chairs' (plural) usamos 'There are': There are no chairs.",
      },
    ],
  },

  body: {
    title: "Evaluación: Partes del Cuerpo",
    icon: "🧍",
    questions: [
      {
        question: "¿Cómo se dice 'cabeza' en inglés?",
        options: ["Hand", "Head", "Hair", "Heart"],
        correct: 1,
        explanation: "Head significa 'cabeza'.",
      },
      {
        question: "¿Qué significa 'shoulder'?",
        options: ["Hombro", "Codo", "Muñeca", "Dedo"],
        correct: 0,
        explanation: "Shoulder significa 'hombro'.",
      },
      {
        question: "¿Cómo se dice 'ojos' en inglés?",
        options: ["Ears", "Eyes", "Nose", "Mouth"],
        correct: 1,
        explanation: "Eyes significa 'ojos'.",
      },
      {
        question: "¿Qué significa 'knee'?",
        options: ["Pie", "Pierna", "Rodilla", "Tobillo"],
        correct: 2,
        explanation: "Knee significa 'rodilla'.",
      },
      {
        question: "¿Cómo se dice 'mano' en inglés?",
        options: ["Hand", "Finger", "Arm", "Wrist"],
        correct: 0,
        explanation: "Hand significa 'mano'.",
      },
      {
        question: "¿Qué significa 'stomach'?",
        options: ["Espalda", "Pecho", "Estómago", "Corazón"],
        correct: 2,
        explanation: "Stomach significa 'estómago'.",
      },
      {
        question: "¿Cómo se dice 'pie' en inglés?",
        options: ["Foot", "Leg", "Toe", "Ankle"],
        correct: 0,
        explanation: "Foot significa 'pie'.",
      },
      {
        question: "¿Qué significa 'elbow'?",
        options: ["Hombro", "Codo", "Muñeca", "Brazo"],
        correct: 1,
        explanation: "Elbow significa 'codo'.",
      },
      {
        question: "¿Cómo se dice 'boca' en inglés?",
        options: ["Nose", "Mouth", "Teeth", "Tongue"],
        correct: 1,
        explanation: "Mouth significa 'boca'.",
      },
      {
        question: "¿Qué significa 'back'?",
        options: ["Frente", "Lado", "Espalda", "Pecho"],
        correct: 2,
        explanation: "Back significa 'espalda'.",
      },
      {
        question: "¿Cómo se dice 'oreja' en inglés?",
        options: ["Eye", "Ear", "Nose", "Hair"],
        correct: 1,
        explanation: "Ear significa 'oreja'.",
      },
      {
        question: "¿Qué significa 'finger'?",
        options: ["Mano", "Dedo", "Brazo", "Muñeca"],
        correct: 1,
        explanation: "Finger significa 'dedo'.",
      },
      {
        question: "¿Cómo se dice 'cuello' en inglés?",
        options: ["Neck", "Chest", "Back", "Shoulder"],
        correct: 0,
        explanation: "Neck significa 'cuello'.",
      },
      {
        question: "¿Qué significa 'leg'?",
        options: ["Brazo", "Pierna", "Pie", "Rodilla"],
        correct: 1,
        explanation: "Leg significa 'pierna'.",
      },
      {
        question: "¿Cómo se dice 'nariz' en inglés?",
        options: ["Mouth", "Eye", "Nose", "Ear"],
        correct: 2,
        explanation: "Nose significa 'nariz'.",
      },
    ],
  },

  numbers: {
    title: "Evaluación: Números 1-100",
    icon: "🔢",
    questions: [
      {
        question: "¿Cómo se dice '15' en inglés?",
        options: ["Fourteen", "Fifteen", "Sixteen", "Fifty"],
        correct: 1,
        explanation: "Fifteen es el número 15 en inglés.",
      },
      {
        question: "¿Qué número es 'twenty-three'?",
        options: ["13", "23", "33", "32"],
        correct: 1,
        explanation: "Twenty-three es el número 23.",
      },
      {
        question: "¿Cómo se dice '50' en inglés?",
        options: ["Fifteen", "Fifty", "Five", "Forty"],
        correct: 1,
        explanation: "Fifty es el número 50 en inglés.",
      },
      {
        question: "¿Qué número es 'eleven'?",
        options: ["10", "11", "12", "21"],
        correct: 1,
        explanation: "Eleven es el número 11.",
      },
      {
        question: "¿Cómo se dice '30' en inglés?",
        options: ["Thirteen", "Thirty", "Three", "Twenty"],
        correct: 1,
        explanation: "Thirty es el número 30 en inglés.",
      },
      {
        question: "¿Qué número es 'forty-seven'?",
        options: ["47", "74", "17", "27"],
        correct: 0,
        explanation: "Forty-seven es el número 47.",
      },
      {
        question: "¿Cómo se dice '12' en inglés?",
        options: ["Eleven", "Twelve", "Twenty", "Two"],
        correct: 1,
        explanation: "Twelve es el número 12 en inglés.",
      },
      {
        question: "¿Qué número es 'ninety-nine'?",
        options: ["90", "99", "19", "9"],
        correct: 1,
        explanation: "Ninety-nine es el número 99.",
      },
      {
        question: "¿Cómo se dice '80' en inglés?",
        options: ["Eight", "Eighteen", "Eighty", "Eighty-eight"],
        correct: 2,
        explanation: "Eighty es el número 80 en inglés.",
      },
      {
        question: "¿Qué número es 'sixty-five'?",
        options: ["56", "65", "75", "55"],
        correct: 1,
        explanation: "Sixty-five es el número 65.",
      },
      {
        question: "¿Cómo se dice '100' en inglés?",
        options: ["Ten", "Hundred", "One hundred", "Thousand"],
        correct: 2,
        explanation: "One hundred es el número 100 en inglés.",
      },
      {
        question: "¿Qué número es 'fourteen'?",
        options: ["4", "14", "40", "44"],
        correct: 1,
        explanation: "Fourteen es el número 14.",
      },
    ],
  },

  family: {
    title: "Evaluación: Miembros de la Familia",
    icon: "👨‍👩‍👧‍👦",
    questions: [
      {
        question: "¿Cómo se dice 'madre' en inglés?",
        options: ["Father", "Mother", "Sister", "Daughter"],
        correct: 1,
        explanation: "Mother significa 'madre'.",
      },
      {
        question: "¿Qué significa 'grandfather'?",
        options: ["Padre", "Abuelo", "Tío", "Hermano"],
        correct: 1,
        explanation: "Grandfather significa 'abuelo'.",
      },
      {
        question: "¿Cómo se dice 'hermana' en inglés?",
        options: ["Brother", "Sister", "Cousin", "Aunt"],
        correct: 1,
        explanation: "Sister significa 'hermana'.",
      },
      {
        question: "¿Qué significa 'uncle'?",
        options: ["Primo", "Tío", "Sobrino", "Cuñado"],
        correct: 1,
        explanation: "Uncle significa 'tío'.",
      },
      {
        question: "¿Cómo se dice 'hijo' en inglés?",
        options: ["Son", "Daughter", "Child", "Boy"],
        correct: 0,
        explanation: "Son significa 'hijo'.",
      },
      {
        question: "¿Qué significa 'grandmother'?",
        options: ["Madre", "Tía", "Abuela", "Prima"],
        correct: 2,
        explanation: "Grandmother significa 'abuela'.",
      },
      {
        question: "¿Cómo se dice 'primo' en inglés?",
        options: ["Brother", "Cousin", "Nephew", "Uncle"],
        correct: 1,
        explanation: "Cousin significa 'primo'.",
      },
      {
        question: "¿Qué significa 'daughter'?",
        options: ["Hijo", "Hija", "Hermana", "Sobrina"],
        correct: 1,
        explanation: "Daughter significa 'hija'.",
      },
      {
        question: "¿Cómo se dice 'esposo' en inglés?",
        options: ["Wife", "Husband", "Father", "Brother"],
        correct: 1,
        explanation: "Husband significa 'esposo'.",
      },
      {
        question: "¿Qué significa 'aunt'?",
        options: ["Prima", "Tía", "Hermana", "Madre"],
        correct: 1,
        explanation: "Aunt significa 'tía'.",
      },
      {
        question: "¿Cómo se dice 'nieto' en inglés?",
        options: ["Grandson", "Nephew", "Son", "Cousin"],
        correct: 0,
        explanation: "Grandson significa 'nieto'.",
      },
      {
        question: "¿Qué significa 'parents'?",
        options: ["Hermanos", "Padres", "Hijos", "Abuelos"],
        correct: 1,
        explanation: "Parents significa 'padres' (padre y madre).",
      },
    ],
  },

  appearance: {
    title: "Evaluación: Apariencia Física",
    icon: "👤",
    questions: [
      {
        question: "¿Cómo se dice 'alto' en inglés?",
        options: ["Short", "Tall", "Fat", "Thin"],
        correct: 1,
        explanation: "Tall significa 'alto'.",
      },
      {
        question: "¿Qué significa 'beautiful'?",
        options: ["Feo", "Hermoso", "Gordo", "Delgado"],
        correct: 1,
        explanation: "Beautiful significa 'hermoso' o 'bella'.",
      },
      {
        question: "¿Cómo se dice 'cabello rubio' en inglés?",
        options: ["Black hair", "Brown hair", "Blonde hair", "Red hair"],
        correct: 2,
        explanation: "Blonde hair significa 'cabello rubio'.",
      },
      {
        question: "¿Qué significa 'short'?",
        options: ["Alto", "Bajo", "Gordo", "Delgado"],
        correct: 1,
        explanation: "Short significa 'bajo' o 'corto'.",
      },
      {
        question: "¿Cómo se dice 'ojos azules' en inglés?",
        options: ["Brown eyes", "Green eyes", "Blue eyes", "Black eyes"],
        correct: 2,
        explanation: "Blue eyes significa 'ojos azules'.",
      },
      {
        question: "¿Qué significa 'thin'?",
        options: ["Gordo", "Delgado", "Alto", "Bajo"],
        correct: 1,
        explanation: "Thin significa 'delgado'.",
      },
      {
        question: "¿Cómo se dice 'cabello rizado' en inglés?",
        options: ["Straight hair", "Curly hair", "Long hair", "Short hair"],
        correct: 1,
        explanation: "Curly hair significa 'cabello rizado'.",
      },
      {
        question: "¿Qué significa 'ugly'?",
        options: ["Hermoso", "Feo", "Joven", "Viejo"],
        correct: 1,
        explanation: "Ugly significa 'feo'.",
      },
      {
        question: "¿Cómo se dice 'joven' en inglés?",
        options: ["Old", "Young", "New", "Small"],
        correct: 1,
        explanation: "Young significa 'joven'.",
      },
      {
        question: "¿Qué significa 'fat'?",
        options: ["Delgado", "Gordo", "Alto", "Bajo"],
        correct: 1,
        explanation: "Fat significa 'gordo'.",
      },
    ],
  },

  can: {
    title: "Evaluación: Modal Verb Can",
    icon: "✅",
    questions: [
      {
        question: "Completa: I ___ swim very well.",
        options: ["can", "can't", "could", "should"],
        correct: 0,
        explanation: "Can se usa para expresar habilidad: I can swim.",
      },
      {
        question: "¿Cuál es la forma negativa de 'can'?",
        options: ["can not", "can't", "cannot", "All of the above"],
        correct: 3,
        explanation: "Todas las formas son correctas: can not, can't, cannot.",
      },
      {
        question: "¿Cómo se hace la pregunta con 'can'?",
        options: ["Do you can?", "Can you?", "Are you can?", "You can?"],
        correct: 1,
        explanation: "Para hacer preguntas con can: Can you...?",
      },
      {
        question: "Completa: She ___ speak three languages.",
        options: ["can", "cans", "could", "will"],
        correct: 0,
        explanation: "Can no cambia con la tercera persona: She can speak.",
      },
      {
        question: "¿Qué significa 'I can't drive'?",
        options: ["Puedo conducir", "No puedo conducir", "Debo conducir", "Quiero conducir"],
        correct: 1,
        explanation: "I can't drive significa 'No puedo conducir'.",
      },
      {
        question: "Completa: ___ you help me?",
        options: ["Do", "Can", "Are", "Will"],
        correct: 1,
        explanation: "Can you help me? significa '¿Puedes ayudarme?'",
      },
      {
        question: "¿Cuál es el uso principal de 'can'?",
        options: ["Futuro", "Pasado", "Habilidad", "Obligación"],
        correct: 2,
        explanation: "Can se usa principalmente para expresar habilidad.",
      },
      {
        question: "Completa: They ___ play football.",
        options: ["can", "cans", "could", "should"],
        correct: 0,
        explanation: "Can no cambia con diferentes pronombres: They can play.",
      },
      {
        question: "¿Qué significa 'Can I go?'?",
        options: ["¿Debo ir?", "¿Puedo ir?", "¿Voy a ir?", "¿Quiero ir?"],
        correct: 1,
        explanation: "Can I go? significa '¿Puedo ir?' (pidiendo permiso).",
      },
      {
        question: "Completa: We ___ see the mountain from here.",
        options: ["can", "cans", "could", "should"],
        correct: 0,
        explanation: "Can también expresa posibilidad: We can see.",
      },
    ],
  },

  likes: {
    title: "Evaluación: Likes and Dislikes",
    icon: "❤️",
    questions: [
      {
        question: "¿Cómo se dice 'Me gusta la música' en inglés?",
        options: ["I like music", "I likes music", "I am like music", "I do like music"],
        correct: 0,
        explanation: "I like music es la forma correcta.",
      },
      {
        question: "¿Cuál es la forma negativa de 'I like'?",
        options: ["I not like", "I don't like", "I no like", "I am not like"],
        correct: 1,
        explanation: "La forma negativa es 'I don't like'.",
      },
      {
        question: "Completa: She ___ chocolate.",
        options: ["like", "likes", "liking", "liked"],
        correct: 1,
        explanation: "Con tercera persona singular agregamos 's': She likes.",
      },
      {
        question: "¿Cómo se pregunta sobre gustos?",
        options: ["You like pizza?", "Do you like pizza?", "Are you like pizza?", "Like you pizza?"],
        correct: 1,
        explanation: "Para preguntar usamos 'Do you like...?'",
      },
      {
        question: "¿Qué significa 'I hate vegetables'?",
        options: ["Me gustan las verduras", "Odio las verduras", "Como verduras", "Necesito verduras"],
        correct: 1,
        explanation: "I hate vegetables significa 'Odio las verduras'.",
      },
      {
        question: "Completa: We ___ watching movies.",
        options: ["like", "likes", "liking", "liked"],
        correct: 0,
        explanation: "Con 'we' usamos la forma base: We like.",
      },
      {
        question: "¿Cómo se dice 'No me gusta' en inglés?",
        options: ["I like not", "I don't like", "I no like", "I not like"],
        correct: 1,
        explanation: "I don't like significa 'No me gusta'.",
      },
      {
        question: "Completa: ___ he like sports?",
        options: ["Do", "Does", "Is", "Are"],
        correct: 1,
        explanation: "Con tercera persona singular usamos 'Does': Does he like?",
      },
      {
        question: "¿Qué significa 'I love dancing'?",
        options: ["Odio bailar", "Me gusta bailar", "Amo bailar", "Bailo bien"],
        correct: 2,
        explanation: "I love dancing significa 'Amo bailar' (me encanta).",
      },
      {
        question: "Completa: They ___ playing video games.",
        options: ["like", "likes", "liking", "liked"],
        correct: 0,
        explanation: "Con 'they' usamos la forma base: They like.",
      },
    ],
  },

  comparatives: {
    title: "Evaluación: Comparativos",
    icon: "📊",
    questions: [
      {
        question: "¿Cuál es el comparativo de 'big'?",
        options: ["more big", "bigger", "most big", "bigest"],
        correct: 1,
        explanation: "El comparativo de 'big' es 'bigger'.",
      },
      {
        question: "¿Cuál es el comparativo de 'beautiful'?",
        options: ["beautifuler", "more beautiful", "most beautiful", "beautifullest"],
        correct: 1,
        explanation: "Con adjetivos largos usamos 'more': more beautiful.",
      },
      {
        question: "Completa: This book is ___ than that one.",
        options: ["good", "better", "best", "more good"],
        correct: 1,
        explanation: "El comparativo de 'good' es 'better'.",
      },
      {
        question: "¿Cuál es el comparativo de 'easy'?",
        options: ["more easy", "easier", "most easy", "easiest"],
        correct: 1,
        explanation: "Con adjetivos terminados en 'y', cambiamos a 'ier': easier.",
      },
      {
        question: "Completa: She is ___ than her sister.",
        options: ["tall", "taller", "tallest", "more tall"],
        correct: 1,
        explanation: "El comparativo de 'tall' es 'taller'.",
      },
      {
        question: "¿Cuál es el comparativo de 'bad'?",
        options: ["badder", "worse", "worst", "more bad"],
        correct: 1,
        explanation: "El comparativo de 'bad' es 'worse'.",
      },
      {
        question: "Completa: This exercise is ___ than the previous one.",
        options: ["difficult", "difficulter", "more difficult", "most difficult"],
        correct: 2,
        explanation: "Con adjetivos largos usamos 'more': more difficult.",
      },
      {
        question: "¿Cuál es el comparativo de 'hot'?",
        options: ["hoter", "hotter", "more hot", "most hot"],
        correct: 1,
        explanation: "Duplicamos la consonante final: hotter.",
      },
      {
        question: "Completa: My car is ___ than yours.",
        options: ["fast", "faster", "fastest", "more fast"],
        correct: 1,
        explanation: "El comparativo de 'fast' es 'faster'.",
      },
      {
        question: "¿Cuál es el comparativo de 'expensive'?",
        options: ["expensiver", "more expensive", "most expensive", "expensivest"],
        correct: 1,
        explanation: "Con adjetivos largos usamos 'more': more expensive.",
      },
      {
        question: "¿Cuál es el comparativo de 'funny'?",
        options: ["funnier", "more funny", "funnyer", "most funny"],
        correct: 0,
        explanation: "Con adjetivos terminados en 'y', cambiamos a 'ier': funnier.",
      },
      {
        question: "Completa: This movie is ___ than the book.",
        options: ["interesting", "more interesting", "interestinger", "most interesting"],
        correct: 1,
        explanation: "Con adjetivos largos usamos 'more': more interesting.",
      },
    ],
  },

  environment: {
    title: "Evaluación: Medio Ambiente",
    icon: "🌍",
    questions: [
      {
        question: "¿Cómo se dice 'árbol' en inglés?",
        options: ["Tree", "Flower", "Plant", "Grass"],
        correct: 0,
        explanation: "Tree significa 'árbol'.",
      },
      {
        question: "¿Qué significa 'pollution'?",
        options: ["Limpieza", "Contaminación", "Naturaleza", "Agua"],
        correct: 1,
        explanation: "Pollution significa 'contaminación'.",
      },
      {
        question: "¿Cómo se dice 'reciclar' en inglés?",
        options: ["Reduce", "Reuse", "Recycle", "Refuse"],
        correct: 2,
        explanation: "Recycle significa 'reciclar'.",
      },
      {
        question: "¿Qué significa 'forest'?",
        options: ["Desierto", "Bosque", "Océano", "Montaña"],
        correct: 1,
        explanation: "Forest significa 'bosque'.",
      },
      {
        question: "¿Cómo se dice 'basura' en inglés?",
        options: ["Trash", "Clean", "Water", "Air"],
        correct: 0,
        explanation: "Trash significa 'basura'.",
      },
      {
        question: "¿Qué significa 'save the planet'?",
        options: ["Destruir el planeta", "Salvar el planeta", "Visitar el planeta", "Estudiar el planeta"],
        correct: 1,
        explanation: "Save the planet significa 'salvar el planeta'.",
      },
      {
        question: "¿Cómo se dice 'energía solar' en inglés?",
        options: ["Wind energy", "Solar energy", "Water energy", "Electric energy"],
        correct: 1,
        explanation: "Solar energy significa 'energía solar'.",
      },
      {
        question: "¿Qué significa 'global warming'?",
        options: ["Enfriamiento global", "Calentamiento global", "Lluvia global", "Viento global"],
        correct: 1,
        explanation: "Global warming significa 'calentamiento global'.",
      },
      {
        question: "¿Cómo se dice 'proteger' en inglés?",
        options: ["Destroy", "Protect", "Pollute", "Waste"],
        correct: 1,
        explanation: "Protect significa 'proteger'.",
      },
      {
        question: "¿Qué significa 'renewable energy'?",
        options: ["Energía contaminante", "Energía renovable", "Energía cara", "Energía antigua"],
        correct: 1,
        explanation: "Renewable energy significa 'energía renovable'.",
      },
    ],
  },

  present: {
    title: "Evaluación: Presente Simple",
    icon: "⏰",
    questions: [
      {
        question: "Completa: She ___ English every day.",
        options: ["study", "studies", "studying", "studied"],
        correct: 1,
        explanation: "Con tercera persona singular (she) agregamos 's': She studies.",
      },
      {
        question: "Completa: They ___ soccer on weekends.",
        options: ["play", "plays", "playing", "played"],
        correct: 0,
        explanation: "Con 'they' usamos la forma base: They play.",
      },
      {
        question: "¿Cuál es la forma negativa de 'He works'?",
        options: ["He not work", "He doesn't work", "He don't work", "He no work"],
        correct: 1,
        explanation: "La forma negativa es 'He doesn't work'.",
      },
      {
        question: "¿Cómo se hace la pregunta con 'You like pizza'?",
        options: ["You like pizza?", "Do you like pizza?", "Does you like pizza?", "Like you pizza?"],
        correct: 1,
        explanation: "Para hacer preguntas usamos 'Do': Do you like pizza?",
      },
      {
        question: "Completa: My brother ___ to school by bus.",
        options: ["go", "goes", "going", "went"],
        correct: 1,
        explanation: "Con tercera persona singular agregamos 's': He goes.",
      },
      {
        question: "¿Cuál es la forma negativa de 'I work'?",
        options: ["I not work", "I doesn't work", "I don't work", "I no work"],
        correct: 2,
        explanation: "La forma negativa es 'I don't work'.",
      },
      {
        question: "Completa: ___ she speak French?",
        options: ["Do", "Does", "Is", "Are"],
        correct: 1,
        explanation: "Con tercera persona singular usamos 'Does': Does she speak?",
      },
      {
        question: "Completa: We ___ TV in the evening.",
        options: ["watch", "watches", "watching", "watched"],
        correct: 0,
        explanation: "Con 'we' usamos la forma base: We watch.",
      },
      {
        question: "¿Cuál es la forma negativa de 'She likes'?",
        options: ["She not like", "She doesn't like", "She don't like", "She no like"],
        correct: 1,
        explanation: "La forma negativa es 'She doesn't like'.",
      },
      {
        question: "Completa: The sun ___ in the east.",
        options: ["rise", "rises", "rising", "rose"],
        correct: 1,
        explanation: "Con tercera persona singular agregamos 's': The sun rises.",
      },
      {
        question: "Completa: ___ you live in Bogotá?",
        options: ["Do", "Does", "Are", "Is"],
        correct: 0,
        explanation: "Con 'you' usamos 'Do': Do you live?",
      },
      {
        question: "¿Cuál es la forma negativa de 'We understand'?",
        options: ["We not understand", "We doesn't understand", "We don't understand", "We no understand"],
        correct: 2,
        explanation: "La forma negativa es 'We don't understand'.",
      },
      {
        question: "Completa: It ___ a lot in this city.",
        options: ["rain", "rains", "raining", "rained"],
        correct: 1,
        explanation: "Con 'it' (tercera persona singular) agregamos 's': It rains.",
      },
      {
        question: "Completa: ___ they work on Sundays?",
        options: ["Do", "Does", "Are", "Is"],
        correct: 0,
        explanation: "Con 'they' usamos 'Do': Do they work?",
      },
      {
        question: "¿Cuál es la forma negativa de 'The cat sleeps'?",
        options: ["The cat not sleep", "The cat doesn't sleep", "The cat don't sleep", "The cat no sleep"],
        correct: 1,
        explanation: "La forma negativa es 'The cat doesn't sleep'.",
      },
    ],
  },
}

// Evaluation state
let currentEvaluation = null
let currentEvaluationQuestion = 0
let selectedEvaluationAnswers = []
let evaluationStarted = false

// Start an evaluation
function startEvaluation(evaluationType) {
  currentEvaluation = evaluationData[evaluationType]
  currentEvaluationQuestion = 0
  selectedEvaluationAnswers = []
  evaluationStarted = true

  // Hide evaluation selection and show evaluation container
  document.getElementById("evaluation-selection").style.display = "none"
  document.getElementById("evaluation-container").style.display = "block"

  // Load first question
  loadEvaluationQuestion()
}

// Load current evaluation question
function loadEvaluationQuestion() {
  const question = currentEvaluation.questions[currentEvaluationQuestion]

  // Update progress
  document.getElementById("evaluation-question-number").textContent =
    `Pregunta ${currentEvaluationQuestion + 1} de ${currentEvaluation.questions.length}`
  const progressPercentage = ((currentEvaluationQuestion + 1) / currentEvaluation.questions.length) * 100
  document.getElementById("evaluation-progress-fill").style.width = progressPercentage + "%"

  // Update question text
  document.getElementById("evaluation-question-text").textContent = question.question

  // Create options
  const optionsContainer = document.getElementById("evaluation-options-container")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div")
    optionElement.className = "option"
    optionElement.innerHTML = `
            <input type="radio" name="evaluation-answer" value="${index}" id="evaluation-option-${index}">
            <label for="evaluation-option-${index}">${option}</label>
        `

    optionElement.addEventListener("click", () => {
      // Clear previous selections
      document
        .querySelectorAll("#evaluation-options-container .option")
        .forEach((opt) => opt.classList.remove("selected"))

      // Select this option
      optionElement.classList.add("selected")
      optionElement.querySelector("input").checked = true

      // Enable next button
      document.getElementById("evaluation-next-btn").disabled = false
    })

    optionsContainer.appendChild(optionElement)
  })

  // Update button states
  document.getElementById("evaluation-prev-btn").disabled = currentEvaluationQuestion === 0
  document.getElementById("evaluation-next-btn").disabled = true

  // Update next button text
  const nextBtn = document.getElementById("evaluation-next-btn")
  if (currentEvaluationQuestion === currentEvaluation.questions.length - 1) {
    nextBtn.innerHTML = 'Finalizar Evaluación <i class="fas fa-check"></i>'
  } else {
    nextBtn.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>'
  }

  // Pre-select answer if already answered
  if (selectedEvaluationAnswers[currentEvaluationQuestion] !== undefined) {
    const selectedOption = document.querySelector(
      `input[name="evaluation-answer"][value="${selectedEvaluationAnswers[currentEvaluationQuestion]}"]`,
    )
    if (selectedOption) {
      selectedOption.checked = true
      selectedOption.closest(".option").classList.add("selected")
      document.getElementById("evaluation-next-btn").disabled = false
    }
  }
}

// Go to previous evaluation question
function previousEvaluationQuestion() {
  if (currentEvaluationQuestion > 0) {
    currentEvaluationQuestion--
    loadEvaluationQuestion()
  }
}

// Go to next evaluation question or finish evaluation
function nextEvaluationQuestion() {
  // Save current answer
  const selectedOption = document.querySelector('input[name="evaluation-answer"]:checked')
  if (selectedOption) {
    selectedEvaluationAnswers[currentEvaluationQuestion] = Number.parseInt(selectedOption.value)
  }

  if (currentEvaluationQuestion < currentEvaluation.questions.length - 1) {
    currentEvaluationQuestion++
    loadEvaluationQuestion()
  } else {
    finishEvaluation()
  }
}

// Finish evaluation and show results
function finishEvaluation() {
  // Hide evaluation container and show results
  document.getElementById("evaluation-container").style.display = "none"
  document.getElementById("evaluation-results-container").style.display = "block"

  // Calculate score
  let correctAnswers = 0
  currentEvaluation.questions.forEach((question, index) => {
    if (selectedEvaluationAnswers[index] === question.correct) {
      correctAnswers++
    }
  })

  const percentage = (correctAnswers / currentEvaluation.questions.length) * 100

  // Update results display
  document.getElementById("evaluation-score-number").textContent =
    `${correctAnswers}/${currentEvaluation.questions.length}`
  document.getElementById("evaluation-score-percentage").textContent = `${Math.round(percentage)}% Correcto`

  // Update emoji and message based on score
  const resultsEmoji = document.getElementById("evaluation-results-emoji")
  const scoreMessage = document.getElementById("evaluation-score-message")

  if (percentage >= 90) {
    resultsEmoji.textContent = "🌟"
    scoreMessage.textContent = "¡Excelente! Dominas el tema"
  } else if (percentage >= 80) {
    resultsEmoji.textContent = "👍"
    scoreMessage.textContent = "¡Muy bien! Buen conocimiento"
  } else if (percentage >= 70) {
    resultsEmoji.textContent = "💪"
    scoreMessage.textContent = "Bien, pero puedes mejorar"
  } else if (percentage >= 60) {
    resultsEmoji.textContent = "📚"
    scoreMessage.textContent = "Necesitas estudiar más"
  } else {
    resultsEmoji.textContent = "🔄"
    scoreMessage.textContent = "Repasa el tema y vuelve a intentar"
  }

  // Show detailed results
  showDetailedEvaluationResults()

  // Save evaluation result
  saveEvaluationResult(currentEvaluation.title, correctAnswers, currentEvaluation.questions.length, percentage)
}

// Show detailed results for each question
function showDetailedEvaluationResults() {
  const detailedResults = document.getElementById("evaluation-detailed-results")
  detailedResults.innerHTML = ""

  currentEvaluation.questions.forEach((question, index) => {
    const userAnswer = selectedEvaluationAnswers[index]
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

// Save evaluation result
function saveEvaluationResult(evaluationTitle, correct, total, percentage) {
  const results = JSON.parse(localStorage.getItem("evaluationResults") || "[]")
  const result = {
    evaluation: evaluationTitle,
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

  localStorage.setItem("evaluationResults", JSON.stringify(results))
}

// Reset evaluation
function resetEvaluation() {
  currentEvaluationQuestion = 0
  selectedEvaluationAnswers = []

  // Hide results and show evaluation container
  document.getElementById("evaluation-results-container").style.display = "none"
  document.getElementById("evaluation-container").style.display = "block"

  // Load first question
  loadEvaluationQuestion()
}

// Back to evaluation selection
function backToEvaluationSelection() {
  currentEvaluation = null
  currentEvaluationQuestion = 0
  selectedEvaluationAnswers = []
  evaluationStarted = false

  // Hide all containers and show selection
  document.getElementById("evaluation-container").style.display = "none"
  document.getElementById("evaluation-results-container").style.display = "none"
  document.getElementById("evaluation-selection").style.display = "block"
}

// Initialize evaluation system
document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the evaluations section
  const evaluationsSection = document.getElementById("evaluaciones")
  if (evaluationsSection) {
    console.log("Evaluation system initialized")
  }
})
