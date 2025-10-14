// Animation steps for the MCP demo
const steps = [
    {
        description: "Welcome! The Model Context Protocol connects AI applications to external data sources. Let's see how it works step by step.",
        active: [],
        lines: [],
        messages: []
    },
    {
        description: "1️⃣ User Request: A user asks a question or gives a command in the Host Application (like VS Code or Claude Desktop).",
        active: ['host'],
        lines: [],
        messages: []
    },
    {
        description: "2️⃣ The Host Application sends the request to the MCP Client, which manages the protocol communication.",
        active: ['host', 'client'],
        lines: ['line1'],
        messages: ['message1']
    },
    {
        description: "3️⃣ The MCP Client processes the request and determines which server and tools are needed to fulfill it.",
        active: ['client'],
        lines: [],
        messages: []
    },
    {
        description: "4️⃣ The Client sends a standardized protocol message to the appropriate MCP Server.",
        active: ['client', 'server'],
        lines: ['line2'],
        messages: ['message2']
    },
    {
        description: "5️⃣ The MCP Server receives the request and identifies which tools or resources to use. It exposes capabilities like file access, API calls, or database queries.",
        active: ['server'],
        lines: [],
        messages: []
    },
    {
        description: "6️⃣ The Server executes the tool and connects to the External Context (databases, APIs, file systems, etc.).",
        active: ['server', 'external'],
        lines: ['line3'],
        messages: ['message3']
    },
    {
        description: "7️⃣ The External Context returns the requested data back to the MCP Server.",
        active: ['external'],
        lines: [],
        messages: ['message4']
    },
    {
        description: "8️⃣ The Server formats the response and sends it back through the protocol to the Client.",
        active: ['server', 'client'],
        lines: ['line2'],
        messages: []
    },
    {
        description: "9️⃣ The Client receives the response and delivers it to the Host Application.",
        active: ['client', 'host'],
        lines: ['line1'],
        messages: []
    },
    {
        description: "🎉 Complete! The Host Application presents the result to the user. This standardized protocol makes it easy to connect any AI application to any data source securely!",
        active: ['host', 'client', 'server', 'external'],
        lines: ['line1', 'line2', 'line3'],
        messages: []
    }
];

let currentStep = 0;
let autoPlayInterval = null;
let animationSpeed = 1500;

// DOM Elements
const stepBtn = document.getElementById('stepBtn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const resetBtn = document.getElementById('resetBtn');
const speedSlider = document.getElementById('speedSlider');
const speedLabel = document.getElementById('speedLabel');
const currentStepEl = document.getElementById('currentStep');
const totalStepsEl = document.getElementById('totalSteps');
const explanationEl = document.getElementById('explanation');

// Initialize
totalStepsEl.textContent = steps.length - 1;
updateStep();

// Event Listeners
stepBtn.addEventListener('click', nextStep);
autoPlayBtn.addEventListener('click', toggleAutoPlay);
resetBtn.addEventListener('click', reset);
speedSlider.addEventListener('input', updateSpeed);

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
}

function updateStep() {
    const step = steps[currentStep];
    
    // Update step counter
    currentStepEl.textContent = currentStep;
    
    // Update explanation
    explanationEl.textContent = step.description;
    
    // Clear all active states
    document.querySelectorAll('.component').forEach(c => {
        c.classList.remove('active', 'pulse');
    });
    document.querySelectorAll('.connection-line').forEach(l => {
        l.classList.remove('active');
    });
    document.querySelectorAll('.message').forEach(m => {
        m.classList.remove('show', 'move-down');
    });
    
    // Apply new active states with animation
    setTimeout(() => {
        step.active.forEach(id => {
            const element = document.getElementById(id);
            element.classList.add('active', 'pulse');
        });
        
        step.lines.forEach(id => {
            document.getElementById(id).classList.add('active');
        });
        
        step.messages.forEach(id => {
            const msg = document.getElementById(id);
            msg.classList.add('show', 'move-down');
        });
    }, 50);
    
    // Disable step button if at the end
    if (currentStep >= steps.length - 1) {
        stepBtn.disabled = true;
        if (autoPlayInterval) {
            stopAutoPlay();
        }
    } else {
        stepBtn.disabled = false;
    }
}

function toggleAutoPlay() {
    if (autoPlayInterval) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function startAutoPlay() {
    autoPlayBtn.textContent = '⏸ Pause';
    autoPlayBtn.style.background = 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)';
    
    autoPlayInterval = setInterval(() => {
        if (currentStep < steps.length - 1) {
            nextStep();
        } else {
            stopAutoPlay();
        }
    }, animationSpeed);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    autoPlayBtn.textContent = 'Auto Play';
    autoPlayBtn.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
}

function reset() {
    stopAutoPlay();
    currentStep = 0;
    updateStep();
}

function updateSpeed() {
    animationSpeed = parseInt(speedSlider.value);
    speedLabel.textContent = (animationSpeed / 1000).toFixed(1) + 's';
    
    // If auto-playing, restart with new speed
    if (autoPlayInterval) {
        stopAutoPlay();
        startAutoPlay();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (!stepBtn.disabled) {
            nextStep();
        }
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    } else if (e.key === 'r' || e.key === 'R') {
        reset();
    } else if (e.key === 'p' || e.key === 'P') {
        toggleAutoPlay();
    }
});

// Add keyboard hints
const keyboardHints = document.createElement('div');
keyboardHints.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-size: 0.9rem;
    z-index: 1000;
`;
keyboardHints.innerHTML = `
    <strong>⌨️ Keyboard Shortcuts:</strong><br>
    → or Space: Next Step<br>
    ←: Previous Step<br>
    P: Auto Play<br>
    R: Reset
`;
document.body.appendChild(keyboardHints);
