const questions = [
    {
        question: "¿Qué es una sucesión convergente?",
        options: [
            "Una sucesión cuyo límite es infinito.",
            "Una sucesión cuyos términos tienden a un valor finito cuando el número de términos tiende a infinito.",
            "Una sucesión cuyos términos son siempre números enteros.",
            "Una sucesión que no tiene límite."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes expresiones representa una sucesión divergente?",
        options: [
            "an = 1/n",
            "an = n²",
            "an = (-1)ⁿ/n",
            "an = 0"
        ],
        correctAnswer: 1
    },
    {
        question: "Si una sucesión compleja Zn = xn + iyn es convergente, ¿qué debe suceder con xn e yn por separado?",
        options: [
            "Solo xn debe converger.",
            "Solo yn debe converger.",
            "Tanto xn como yn deben converger a valores finitos.",
            "Ninguno de los dos debe converger."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de las siguientes sucesiones es convergente?",
        options: [
            "Zn = n + i(1/n)",
            "Zn = (1/n) + i(1/n)",
            "Zn = n + in",
            "Zn = (-1)ⁿ + in"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es una sucesión divergente?",
        options: [
            "Una sucesión cuyo límite existe y es finito.",
            "Una sucesión que nunca alcanza un valor límite.",
            "Una sucesión cuyos términos decrecen constantemente.",
            "Una sucesión que tiene un límite oscilante."
        ],
        correctAnswer: 1
    },
    {
        question: "Para la sucesión compleja Zn = (1/n) + i(1/n²), ¿cuál es el límite cuando n tiende a infinito?",
        options: [
            "Z = 0 + i0",
            "Z = 1 + i1",
            "Z = ∞ + i∞",
            "No tiene límite."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa que una sucesión compleja sea divergente?",
        options: [
            "Sus términos tienden a un número complejo fijo.",
            "Sus términos no tienden a ningún valor complejo.",
            "Sus términos son números reales únicamente.",
            "Los valores imaginarios tienden a cero, pero los reales no."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es verdadera para una sucesión Zn = n + in²?",
        options: [
            "La sucesión es convergente porque n tiende a infinito.",
            "La sucesión es divergente porque el valor imaginario crece más rápido que el real.",
            "La sucesión es convergente porque tanto el valor real como el imaginario tienden al mismo valor.",
            "La sucesión es constante."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué tipo de sucesión es Zn = (-1)ⁿ + i(-1)ⁿ?",
        options: [
            "Convergente.",
            "Divergente oscilante.",
            "Compleja constante.",
            "No definida."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el valor límite de la sucesión compleja Zn = (n/n+1) + i(1/n+1) cuando n tiende a infinito?",
        options: [
            "Z = 0 + i1",
            "Z = 1 + i0",
            "Z = ∞ + i0",
            "Z = 1 + i1"
        ],
        correctAnswer: 1
    },
    {
        question: "¿En qué siglo surgió el concepto de los números complejos?",
        options: ["A) Siglo XV", "B) Siglo XVI", "C) Siglo XVII", "D) Siglo XVIII"],
        correctAnswer: "B) Siglo XVI"
    },
    {
        question: "¿Qué matemático fue el primero en aceptar las raíces cuadradas de números negativos?",
        options: ["A) Carl Friedrich Gauss", "B) Leonhard Euler", "C) Rafael Bombelli", "D) Jean-Robert Argand"],
        correctAnswer: "C) Rafael Bombelli"
    },
    {
        question: "¿Qué letra se utiliza comúnmente para representar la raíz cuadrada de -1 en los números complejos?",
        options: ["A) j", "B) z", "C) i", "D) k"],
        correctAnswer: "C) i"
    },
    {
        question: "¿Qué matemático introdujo la fórmula que vincula los números complejos con funciones trigonométricas?",
        options: ["A) Jean-Robert Argand", "B) Leonhard Euler", "C) Gerolamo Cardano", "D) Augustin-Louis Cauchy"],
        correctAnswer: "B) Leonhard Euler"
    },
    {
        question: "¿Cómo se llama la representación geométrica de los números complejos?",
        options: ["A) Plano Gaussiano", "B) Plano Imaginario", "C) Plano Complejo", "D) Diagrama de Argand"],
        correctAnswer: "D) Diagrama de Argand"
    },
    {
        question: "¿Qué matemático formalizó muchos conceptos relacionados con los números complejos y su importancia en ecuaciones algebraicas?",
        options: ["A) Augustin-Louis Cauchy", "B) Gerolamo Cardano", "C) Carl Friedrich Gauss", "D) Jean le Rond d'Alembert"],
        correctAnswer: "C) Carl Friedrich Gauss"
    },
    {
        question: "Los números complejos fueron inicialmente rechazados por los matemáticos.",
        options: ["A) Verdadero", "B) Falso"],
        correctAnswer: "A) Verdadero"
    },
    {
        question: "El matemático Jean-Robert Argand fue el primero en utilizar la letra 'i' para representar la raíz cuadrada de -1.",
        options: ["A) Verdadero", "B) Falso"],
        correctAnswer: "B) Falso"
    },
    {
        question: "Relaciona a los siguientes matemáticos con sus contribuciones a los números complejos.",
        options: ["1-Leonhard Euler", "2-Jean-Robert Argand", "3-Rafael Bombelli", "4-Carl Friedrich Gauss"],
        correctAnswer: "1-B, 2-C, 3-A, 4-D"
    }
];
