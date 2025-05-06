// Modular Madlib & Accordion Logic for AI Lab

document.addEventListener('DOMContentLoaded', function () {
    // Accordion Logic
    const accordionContainer = document.getElementById('accordion-container');
    if (accordionContainer) {
        accordionContainer.addEventListener('click', function (event) {
            const button = event.target.closest('.accordion-button');
            if (button) {
                const content = button.nextElementSibling;
                const isOpen = content.classList.contains('open');
                button.classList.toggle('open', !isOpen);
                content.classList.toggle('open', !isOpen);
                if (!isOpen) {
                    content.style.maxHeight = (content.scrollHeight + 50) + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            }
        });
    }

    // Madlib Logic
    const madlibSection = document.getElementById('madlib-section');
    if (!madlibSection) return;

    // Toggle Answers Button
    const showAnswersBtn = document.getElementById('show-answers-btn');
    let answersVisible = false;

    // Inputs and Answers
    const inputs = madlibSection.querySelectorAll('.madlib-input');
    const answers = madlibSection.querySelectorAll('.madlib-answer');

    // Term Bank
    const termBank = madlibSection.previousElementSibling; // The div with term bank codes
    const termCodes = termBank ? termBank.querySelectorAll('code') : [];

    // Autofill state
    let nextInputIndex = 0;

    // Helper: Show or hide answers
    function toggleAnswers() {
        answersVisible = !answersVisible;
        answers.forEach((answer, idx) => {
            answer.style.display = answersVisible ? 'inline' : 'none';
        });
        showAnswersBtn.textContent = answersVisible ? 'Hide Answers' : 'Show Answers';
        showAnswersBtn.disabled = false;
        // Optionally, reset input border colors when hiding
        if (!answersVisible) {
            inputs.forEach(input => {
                input.style.borderColor = '#ccc';
            });
        } else {
            // Show feedback colors
            inputs.forEach((input, index) => {
                const correctAnswer = input.getAttribute('data-answer');
                if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                    input.style.borderColor = '#10B981'; // green
                } else {
                    input.style.borderColor = '#EF4444'; // red
                }
            });
        }
    }

    if (showAnswersBtn) {
        showAnswersBtn.addEventListener('click', toggleAnswers);
    }

    // Autofill from term bank
    function handleTermClick(e) {
        if (e.target.tagName === 'CODE') {
            // Find next empty input
            let filled = false;
            for (let i = nextInputIndex; i < inputs.length; i++) {
                if (!inputs[i].value) {
                    inputs[i].value = e.target.textContent;
                    // Optionally, highlight the filled input
                    inputs[i].classList.add('bg-green-50');
                    setTimeout(() => inputs[i].classList.remove('bg-green-50'), 500);
                    nextInputIndex = i + 1;
                    filled = true;
                    break;
                }
            }
            // If all filled, reset index
            if (!filled) {
                nextInputIndex = 0;
            }
        }
    }
    if (termBank) {
        termBank.addEventListener('click', handleTermClick);
    }

    // Reset autofill index on manual input
    inputs.forEach((input, idx) => {
        input.addEventListener('input', function () {
            if (!input.value) {
                nextInputIndex = idx;
            }
        });
    });

    // Optional: Keyboard navigation for accessibility
    madlibSection.addEventListener('keydown', function (e) {
        if (e.target.classList.contains('madlib-input')) {
            if (e.key === 'Enter' || e.key === 'Tab') {
                e.preventDefault();
                let idx = Array.from(inputs).indexOf(e.target);
                if (idx < inputs.length - 1) {
                    inputs[idx + 1].focus();
                }
            }
        }
    });
});
