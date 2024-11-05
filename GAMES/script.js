const questions = [
    {
      question: "¿Qué es una sucesión compleja?",
      answers: [
        { text: "A) Una sucesión de números reales.", correct: false },
        { text: "B) Una función que asigna a cada número natural un número complejo.", correct: true },
        { text: "C) Una secuencia de números enteros.", correct: false },
        { text: "D) Un conjunto de números imaginarios.", correct: false }
      ]
    },
    {
      question: "¿Cuándo se dice que una sucesión compleja (z_n) converge a un número complejo L?",
      answers: [
        { text: "A) Cuando (z_n) > L.", correct: false },
        { text: "B) Cuando |z_n - L| → ∞ al crecer n.", correct: false },
        { text: "C) Cuando |z_n - L| → 0 al crecer n.", correct: true },
        { text: "D) Cuando (z_n) es constante.", correct: false }
      ]
    },
    {
      question: "La sucesión compleja (z_n) se expresa generalmente en términos de:",
      answers: [
        { text: "A) Un solo número real.", correct: false },
        { text: "B) Coordenadas polares.", correct: false },
        { text: "C) Coordenadas cartesianas y número imaginario.", correct: true },
        { text: "D) Ninguna de las anteriores.", correct: false }
      ]
    },
    {
      question: "¿Cuál de las siguientes expresiones representa una sucesión compleja?",
      answers: [
        { text: "A) a_n = 3n + 2", correct: false },
        { text: "B) z_n = n + i", correct: true },
        { text: "C) x_n = 1/n", correct: false },
        { text: "D) y_n = n^2", correct: false }
      ]
    },
    {
      question: "Si (z_n) = 1/n + i/n, ¿cuál es su límite cuando n → ∞?",
      answers: [
        { text: "A) 1 + i", correct: false },
        { text: "B) 0", correct: true },
        { text: "C) i", correct: false },
        { text: "D) ∞", correct: false }
      ]
    },
    {
      question: "Si (z_n) = (1 + i)^n, ¿cómo se expresa el módulo |z_n| de esta sucesión?",
      answers: [
        { text: "A) n", correct: false },
        { text: "B) 2^n", correct: true },
        { text: "C) 0", correct: false },
        { text: "D) |1 + i|", correct: false }
      ]
    },
    {
      question: "¿En qué se diferencia una sucesión compleja de una sucesión real?",
      answers: [
        { text: "A) Solo las sucesiones reales pueden tener límites.", correct: false },
        { text: "B) Las sucesiones complejas pueden tener partes reales e imaginarias.", correct: true },
        { text: "C) Las sucesiones complejas no pueden converger.", correct: false },
        { text: "D) Las sucesiones reales son infinitas y las complejas no.", correct: false }
      ]
    },
    {
      question: "Si (z_n) = n / (2 + 3i), ¿converge esta sucesión? Si es así, ¿a qué valor?",
      answers: [
        { text: "A) Sí, converge a 2 + 3i.", correct: false },
        { text: "B) Sí, converge a 0.", correct: true },
        { text: "C) No, diverge a infinito.", correct: false },
        { text: "D) No converge porque tiene un número imaginario.", correct: false }
      ]
    },
    {
      question: "Dados (z_n) = 2n + i y (w_n) = -n + 2i, ¿cuál es la sucesión resultante (s_n = z_n + w_n)?",
      answers: [
        { text: "A) (s_n) = n + 3i", correct: true },
        { text: "B) (s_n) = n + i", correct: false },
        { text: "C) (s_n) = n - i", correct: false },
        { text: "D) (s_n) = n - 3i", correct: false }
      ]
    },
    {
      question: "¿En qué área de la física son especialmente útiles las sucesiones complejas?",
      answers: [
        { text: "A) Mecánica clásica.", correct: false },
        { text: "B) Óptica cuántica.", correct: false },
        { text: "C) Ecuaciones diferenciales complejas en física cuántica.", correct: true },
        { text: "D) Ninguna de las anteriores.", correct: false }
      ]
    },
    // Agrega más preguntas de funciones complejas siguiendo el mismo formato
  ];
  