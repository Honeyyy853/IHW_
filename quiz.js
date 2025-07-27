// Dosha Quiz Questions and Logic
const quizQuestions = [
    // Physical Characteristics
    {
        category: "Physical Traits",
        question: "How would you describe your body build?",
        options: [
            { text: "Thin, lean, hard to gain weight", dosha: "vata", value: 3 },
            { text: "Medium build, moderately easy to gain/lose weight", dosha: "pitta", value: 3 },
            { text: "Large frame, easy to gain weight, hard to lose", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "How is your skin generally?",
        options: [
            { text: "Dry, rough, cool, thin", dosha: "vata", value: 3 },
            { text: "Warm, oily, prone to irritation/rashes", dosha: "pitta", value: 3 },
            { text: "Thick, moist, cool, smooth", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "What is your hair like?",
        options: [
            { text: "Dry, brittle, thin", dosha: "vata", value: 3 },
            { text: "Fine, straight, early graying/balding", dosha: "pitta", value: 3 },
            { text: "Thick, oily, wavy, lustrous", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "How are your eyes?",
        options: [
            { text: "Small, dry, active", dosha: "vata", value: 3 },
            { text: "Sharp, bright, sensitive to light", dosha: "pitta", value: 3 },
            { text: "Large, moist, calm", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "How is your appetite?",
        options: [
            { text: "Variable, I sometimes forget to eat", dosha: "vata", value: 3 },
            { text: "Strong, I get irritable when hungry", dosha: "pitta", value: 3 },
            { text: "Steady, I can skip meals easily", dosha: "kapha", value: 3 }
        ]
    },
    
    // Digestion and Metabolism
    {
        category: "Digestion",
        question: "How is your digestion?",
        options: [
            { text: "Irregular, gas, bloating", dosha: "vata", value: 3 },
            { text: "Strong, heartburn, loose stools when imbalanced", dosha: "pitta", value: 3 },
            { text: "Slow, heavy feeling after eating", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Digestion",
        question: "What foods do you prefer?",
        options: [
            { text: "Warm, cooked, moist foods", dosha: "vata", value: 3 },
            { text: "Cool, refreshing foods and drinks", dosha: "pitta", value: 3 },
            { text: "Spicy, dry, light foods", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "How is your sleep?",
        options: [
            { text: "Light, interrupted, 5-7 hours", dosha: "vata", value: 3 },
            { text: "Moderate, 6-8 hours, rarely interrupted", dosha: "pitta", value: 3 },
            { text: "Deep, heavy, more than 8 hours", dosha: "kapha", value: 3 }
        ]
    },
    
    // Mental and Emotional Characteristics
    {
        category: "Mental Traits",
        question: "How is your memory?",
        options: [
            { text: "Quick to learn, quick to forget", dosha: "vata", value: 3 },
            { text: "Sharp, clear, focused", dosha: "pitta", value: 3 },
            { text: "Slow to learn but good retention", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Mental Traits",
        question: "How do you handle stress?",
        options: [
            { text: "I worry and become anxious", dosha: "vata", value: 3 },
            { text: "I become irritable and angry", dosha: "pitta", value: 3 },
            { text: "I withdraw and become lethargic", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Mental Traits",
        question: "What describes your personality best?",
        options: [
            { text: "Creative, enthusiastic, changeable", dosha: "vata", value: 3 },
            { text: "Determined, focused, competitive", dosha: "pitta", value: 3 },
            { text: "Calm, steady, supportive", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Mental Traits",
        question: "How do you make decisions?",
        options: [
            { text: "Quickly, but often change my mind", dosha: "vata", value: 3 },
            { text: "Decisively, after analyzing facts", dosha: "pitta", value: 3 },
            { text: "Slowly, after careful consideration", dosha: "kapha", value: 3 }
        ]
    },
    
    // Energy and Activity
    {
        category: "Energy",
        question: "How is your energy level throughout the day?",
        options: [
            { text: "Bursts of energy, then fatigue", dosha: "vata", value: 3 },
            { text: "Steady, high energy", dosha: "pitta", value: 3 },
            { text: "Steady, but need motivation to start", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Energy",
        question: "What type of exercise do you prefer?",
        options: [
            { text: "Light, gentle, yoga, walking", dosha: "vata", value: 3 },
            { text: "Moderate, competitive sports", dosha: "pitta", value: 3 },
            { text: "Vigorous, challenging activities", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "How do you feel in different weather?",
        options: [
            { text: "I dislike cold, windy weather", dosha: "vata", value: 3 },
            { text: "I dislike hot, humid weather", dosha: "pitta", value: 3 },
            { text: "I dislike cold, damp weather", dosha: "kapha", value: 3 }
        ]
    },
    
    // Social and Communication
    {
        category: "Social Traits",
        question: "How do you communicate?",
        options: [
            { text: "Talk fast, jump from topic to topic", dosha: "vata", value: 3 },
            { text: "Speak clearly, to the point", dosha: "pitta", value: 3 },
            { text: "Speak slowly, thoughtfully", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Social Traits",
        question: "In social situations, you are:",
        options: [
            { text: "Talkative, make friends easily but don't maintain long friendships", dosha: "vata", value: 3 },
            { text: "Confident, like to be the center of attention", dosha: "pitta", value: 3 },
            { text: "Quiet initially, but loyal and steady in friendships", dosha: "kapha", value: 3 }
        ]
    },
    
    // Work and Lifestyle
    {
        category: "Lifestyle",
        question: "How do you approach work?",
        options: [
            { text: "Creative bursts, many projects at once", dosha: "vata", value: 3 },
            { text: "Organized, goal-oriented, focused", dosha: "pitta", value: 3 },
            { text: "Steady, methodical, prefer routine", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Lifestyle",
        question: "How do you spend money?",
        options: [
            { text: "Impulsively, on small things", dosha: "vata", value: 3 },
            { text: "On quality items, good investments", dosha: "pitta", value: 3 },
            { text: "Carefully, save money well", dosha: "kapha", value: 3 }
        ]
    },
    
    // Additional Physical Traits
    {
        category: "Physical Traits",
        question: "How are your joints?",
        options: [
            { text: "Thin, prominent, crack easily", dosha: "vata", value: 3 },
            { text: "Moderate, flexible", dosha: "pitta", value: 3 },
            { text: "Large, well-lubricated, stable", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Physical Traits",
        question: "How do you walk?",
        options: [
            { text: "Fast, light steps", dosha: "vata", value: 3 },
            { text: "Moderate pace, purposeful", dosha: "pitta", value: 3 },
            { text: "Slow, steady, graceful", dosha: "kapha", value: 3 }
        ]
    },
    
    // Emotional Patterns
    {
        category: "Emotional Traits",
        question: "When emotionally imbalanced, you tend to feel:",
        options: [
            { text: "Anxious, worried, fearful", dosha: "vata", value: 3 },
            { text: "Angry, irritable, frustrated", dosha: "pitta", value: 3 },
            { text: "Sad, lethargic, possessive", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Emotional Traits",
        question: "How do you express love?",
        options: [
            { text: "Through words and excitement", dosha: "vata", value: 3 },
            { text: "Through actions and gifts", dosha: "pitta", value: 3 },
            { text: "Through devotion and loyalty", dosha: "kapha", value: 3 }
        ]
    },
    
    // Learning and Focus
    {
        category: "Mental Traits",
        question: "How do you learn best?",
        options: [
            { text: "Through discussion and interaction", dosha: "vata", value: 3 },
            { text: "Through visual aids and practice", dosha: "pitta", value: 3 },
            { text: "Through repetition and note-taking", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Mental Traits",
        question: "How is your concentration?",
        options: [
            { text: "Short attention span, easily distracted", dosha: "vata", value: 3 },
            { text: "Good focus when interested", dosha: "pitta", value: 3 },
            { text: "Slow to focus but very steady once started", dosha: "kapha", value: 3 }
        ]
    },
    
    // Habits and Preferences
    {
        category: "Lifestyle",
        question: "What time do you prefer to wake up?",
        options: [
            { text: "Variable, often irregular", dosha: "vata", value: 3 },
            { text: "Early, with lots of energy", dosha: "pitta", value: 3 },
            { text: "Later, need time to get going", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Lifestyle",
        question: "How do you handle routine?",
        options: [
            { text: "I dislike routine, prefer variety", dosha: "vata", value: 3 },
            { text: "I like organized routine", dosha: "pitta", value: 3 },
            { text: "I prefer steady, comfortable routine", dosha: "kapha", value: 3 }
        ]
    },
    
    // Additional Characteristics
    {
        category: "Physical Traits",
        question: "How is your voice?",
        options: [
            { text: "High pitched, fast, lots of talking", dosha: "vata", value: 3 },
            { text: "Moderate pitch, clear, articulate", dosha: "pitta", value: 3 },
            { text: "Low pitched, slow, pleasant", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Mental Traits",
        question: "How do you handle change?",
        options: [
            { text: "I adapt quickly but can feel scattered", dosha: "vata", value: 3 },
            { text: "I adapt well if I see the logic", dosha: "pitta", value: 3 },
            { text: "I resist change, prefer stability", dosha: "kapha", value: 3 }
        ]
    },
    {
        category: "Emotional Traits",
        question: "How do you forgive?",
        options: [
            { text: "I forgive quickly but may forget the lesson", dosha: "vata", value: 3 },
            { text: "I forgive once I understand the situation", dosha: "pitta", value: 3 },
            { text: "I take time to forgive but then completely let go", dosha: "kapha", value: 3 }
        ]
    }
];

class DoshaQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = { vata: 0, pitta: 0, kapha: 0 };
        this.init();
    }

    init() {
        this.renderCurrentQuestion();
        this.updateProgress();
        this.bindEvents();
    }

    bindEvents() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        prevBtn.addEventListener('click', () => this.previousQuestion());
        nextBtn.addEventListener('click', () => this.nextQuestion());
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.calculateResults();
        });

        // Handle option selection
        document.addEventListener('change', (e) => {
            if (e.target.type === 'radio') {
                this.saveAnswer(e.target.value);
                this.updateOptionStyles();
            }
        });
    }

    renderCurrentQuestion() {
        const questionsContainer = document.getElementById('quiz-questions');
        const question = quizQuestions[this.currentQuestion];
        
        questionsContainer.innerHTML = `
            <div class="question-card">
                <h3 class="question-title">${this.currentQuestion + 1}. ${question.question}</h3>
                <div class="question-options">
                    ${question.options.map((option, index) => `
                        <label class="option-item" data-dosha="${option.dosha}">
                            <input type="radio" name="question-${this.currentQuestion}" value="${index}" 
                                   ${this.answers[this.currentQuestion] == index ? 'checked' : ''}>
                            <span>${option.text}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;

        this.updateOptionStyles();
    }

    updateOptionStyles() {
        const options = document.querySelectorAll('.option-item');
        options.forEach(option => {
            const input = option.querySelector('input[type="radio"]');
            if (input.checked) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }

    saveAnswer(answerIndex) {
        this.answers[this.currentQuestion] = parseInt(answerIndex);
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderCurrentQuestion();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    nextQuestion() {
        if (this.answers[this.currentQuestion] !== undefined) {
            if (this.currentQuestion < quizQuestions.length - 1) {
                this.currentQuestion++;
                this.renderCurrentQuestion();
                this.updateProgress();
                this.updateNavigationButtons();
            }
        } else {
            showNotification('Please select an answer before proceeding.', 'warning');
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const currentQuestionSpan = document.getElementById('current-question');
        const totalQuestionsSpan = document.getElementById('total-questions');
        
        const progressPercentage = ((this.currentQuestion + 1) / quizQuestions.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        currentQuestionSpan.textContent = this.currentQuestion + 1;
        totalQuestionsSpan.textContent = quizQuestions.length;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        // Show/hide previous button
        prevBtn.style.display = this.currentQuestion > 0 ? 'inline-flex' : 'none';

        // Show next or submit button
        if (this.currentQuestion === quizQuestions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }

    calculateResults() {
        // Reset scores
        this.scores = { vata: 0, pitta: 0, kapha: 0 };

        // Calculate scores based on answers
        this.answers.forEach((answerIndex, questionIndex) => {
            if (answerIndex !== undefined) {
                const question = quizQuestions[questionIndex];
                const selectedOption = question.options[answerIndex];
                this.scores[selectedOption.dosha] += selectedOption.value;
            }
        });

        this.displayResults();
    }

    displayResults() {
        const quizForm = document.querySelector('.quiz-form');
        const resultsSection = document.getElementById('quiz-results');
        
        // Hide quiz form and show results
        quizForm.style.display = 'none';
        resultsSection.style.display = 'block';

        // Calculate percentages
        const totalScore = this.scores.vata + this.scores.pitta + this.scores.kapha;
        const percentages = {
            vata: Math.round((this.scores.vata / totalScore) * 100),
            pitta: Math.round((this.scores.pitta / totalScore) * 100),
            kapha: Math.round((this.scores.kapha / totalScore) * 100)
        };

        // Find dominant dosha
        const dominantDosha = Object.keys(this.scores).reduce((a, b) => 
            this.scores[a] > this.scores[b] ? a : b
        );

        // Display chart
        this.renderDoshaChart(percentages);
        
        // Display dominant dosha information
        this.renderDominantDosha(dominantDosha, percentages);
        
        // Display recommendations
        this.renderRecommendations(dominantDosha);

        // Save results to localStorage
        const results = {
            scores: this.scores,
            percentages: percentages,
            dominantDosha: dominantDosha,
            date: new Date().toISOString()
        };
        saveToLocalStorage('doshaQuizResults', results);

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
        showNotification('Your Prakriti assessment is complete!', 'success');
    }

    renderDoshaChart(percentages) {
        const chartContainer = document.getElementById('dosha-chart');
        
        chartContainer.innerHTML = `
            <div class="dosha-bar">
                <div class="dosha-name">Vata</div>
                <div class="bar-container">
                    <div class="bar-fill vata-bar" style="height: ${percentages.vata}%"></div>
                    <div class="dosha-percentage">${percentages.vata}%</div>
                </div>
            </div>
            <div class="dosha-bar">
                <div class="dosha-name">Pitta</div>
                <div class="bar-container">
                    <div class="bar-fill pitta-bar" style="height: ${percentages.pitta}%"></div>
                    <div class="dosha-percentage">${percentages.pitta}%</div>
                </div>
            </div>
            <div class="dosha-bar">
                <div class="dosha-name">Kapha</div>
                <div class="bar-container">
                    <div class="bar-fill kapha-bar" style="height: ${percentages.kapha}%"></div>
                    <div class="dosha-percentage">${percentages.kapha}%</div>
                </div>
            </div>
        `;
    }

    renderDominantDosha(dominantDosha, percentages) {
        const dominantDoshaContainer = document.getElementById('dominant-dosha');
        
        const doshaInfo = {
            vata: {
                name: 'Vata',
                description: 'You have a Vata-dominant constitution. Vata governs movement, circulation, and the nervous system. You are likely creative, energetic, and quick-thinking, but may need to focus on grounding practices and regular routines to maintain balance.',
                characteristics: ['Creative and imaginative', 'Quick learner', 'Energetic in bursts', 'Sensitive to cold', 'Variable appetite and digestion']
            },
            pitta: {
                name: 'Pitta',
                description: 'You have a Pitta-dominant constitution. Pitta controls digestion, metabolism, and transformation. You are likely focused, ambitious, and intelligent, but may need to focus on cooling practices and managing intensity to maintain balance.',
                characteristics: ['Goal-oriented and focused', 'Strong digestion', 'Natural leader', 'Sensitive to heat', 'Sharp intellect and memory']
            },
            kapha: {
                name: 'Kapha',
                description: 'You have a Kapha-dominant constitution. Kapha provides structure, stability, and immunity. You are likely calm, loving, and stable, but may need to focus on stimulating practices and maintaining activity to prevent stagnation.',
                characteristics: ['Calm and peaceful nature', 'Strong immunity', 'Loyal and devoted', 'Slow but steady', 'Good long-term memory']
            }
        };

        const info = doshaInfo[dominantDosha];
        
        dominantDoshaContainer.innerHTML = `
            <h3>Your Dominant Dosha: ${info.name} (${percentages[dominantDosha]}%)</h3>
            <div class="dosha-description">
                <p>${info.description}</p>
                <h4>Key Characteristics:</h4>
                <ul>
                    ${info.characteristics.map(char => `<li><i class="fas fa-check-circle"></i> ${char}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    renderRecommendations(dominantDosha) {
        const recommendationsContainer = document.getElementById('recommendations');
        
        const recommendations = {
            vata: {
                diet: [
                    'Eat warm, cooked, and moist foods',
                    'Favor sweet, sour, and salty tastes',
                    'Include healthy fats like ghee and olive oil',
                    'Eat regular meals at consistent times',
                    'Stay well hydrated with warm drinks'
                ],
                lifestyle: [
                    'Maintain regular daily routines',
                    'Practice gentle, grounding exercises like yoga',
                    'Get adequate rest and sleep',
                    'Keep warm in cold weather',
                    'Practice meditation and breathing exercises'
                ],
                avoid: [
                    'Excessive cold, raw, or dry foods',
                    'Irregular meal times',
                    'Overstimulation and multitasking',
                    'Excessive travel or change',
                    'Too much caffeine or stimulants'
                ]
            },
            pitta: {
                diet: [
                    'Eat cooling, refreshing foods',
                    'Favor sweet, bitter, and astringent tastes',
                    'Include plenty of fresh fruits and vegetables',
                    'Drink cooling beverages like coconut water',
                    'Eat moderate portions at regular times'
                ],
                lifestyle: [
                    'Avoid excessive heat and sun exposure',
                    'Practice cooling exercises like swimming',
                    'Take time for relaxation and fun',
                    'Spend time in nature, especially near water',
                    'Practice patience and avoid overcompetition'
                ],
                avoid: [
                    'Spicy, hot, and acidic foods',
                    'Skipping meals or overeating',
                    'Excessive anger or criticism',
                    'Overwork and perfectionism',
                    'Too much sun or heat exposure'
                ]
            },
            kapha: {
                diet: [
                    'Eat light, warm, and spicy foods',
                    'Favor pungent, bitter, and astringent tastes',
                    'Include plenty of vegetables and legumes',
                    'Use warming spices like ginger and black pepper',
                    'Eat smaller, less frequent meals'
                ],
                lifestyle: [
                    'Engage in regular vigorous exercise',
                    'Wake up early and stay active',
                    'Seek variety and new experiences',
                    'Practice energizing breathing techniques',
                    'Maintain social connections and activities'
                ],
                avoid: [
                    'Heavy, oily, and sweet foods',
                    'Overeating or eating when not hungry',
                    'Excessive sleep or daytime napping',
                    'Sedentary lifestyle',
                    'Cold and damp environments'
                ]
            }
        };

        const rec = recommendations[dominantDosha];
        
        recommendationsContainer.innerHTML = `
            <div class="recommendation-card">
                <h4><i class="fas fa-utensils"></i> Dietary Recommendations</h4>
                <ul class="recommendation-list">
                    ${rec.diet.map(item => `<li><i class="fas fa-circle"></i> ${item}</li>`).join('')}
                </ul>
            </div>
            <div class="recommendation-card">
                <h4><i class="fas fa-heart"></i> Lifestyle Recommendations</h4>
                <ul class="recommendation-list">
                    ${rec.lifestyle.map(item => `<li><i class="fas fa-circle"></i> ${item}</li>`).join('')}
                </ul>
            </div>
            <div class="recommendation-card">
                <h4><i class="fas fa-exclamation-triangle"></i> What to Avoid</h4>
                <ul class="recommendation-list">
                    ${rec.avoid.map(item => `<li><i class="fas fa-circle"></i> ${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}

// Function to restart quiz
function restartQuiz() {
    location.reload();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if there are saved results
    const savedResults = getFromLocalStorage('doshaQuizResults');
    if (savedResults) {
        console.log('Previous quiz results found:', savedResults);
    }
    
    // Initialize the quiz
    new DoshaQuiz();
});