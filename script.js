// Animation steps for the MCP demo
const steps = [
    {
        description: "Welcome to the walkthrough. The Model Context Protocol (MCP) connects AI experiences to tools and data through a consistent contract.",
        active: [],
        lines: [],
        messages: []
    },
    {
        description: "Step 1 — A learner initiates a request inside the host application (for example, VS Code or Claude Desktop).",
        active: ['host'],
        lines: [],
        messages: []
    },
    {
        description: "Step 2 — The host forwards the intent to the MCP client, handing off protocol responsibilities.",
        active: ['host', 'client'],
        lines: ['line1'],
        messages: ['message1']
    },
    {
        description: "Step 3 — The client inspects available MCP servers and chooses the best candidate to answer the request.",
        active: ['client'],
        lines: [],
        messages: []
    },
    {
        description: "Step 4 — A protocol-compliant message travels from the client to the selected MCP server.",
        active: ['client', 'server'],
        lines: ['line2'],
        messages: ['message2']
    },
    {
        description: "Step 5 — The MCP server validates the request and selects the right tool, prompt, or resource to invoke.",
        active: ['server'],
        lines: [],
        messages: []
    },
    {
        description: "Step 6 — The chosen tool executes and reaches into external context such as APIs, databases, or file systems.",
        active: ['server', 'external'],
        lines: ['line3'],
        messages: ['message3']
    },
    {
        description: "Step 7 — External systems return the requested data or response payload back to the MCP server.",
        active: ['external'],
        lines: [],
        messages: ['message4']
    },
    {
        description: "Step 8 — The server formats the result, applies policy, and packages a response for the client.",
        active: ['server', 'client'],
        lines: ['line2'],
        messages: []
    },
    {
        description: "Step 9 — The client relays the response to the host, logging the interaction for observability.",
        active: ['client', 'host'],
        lines: ['line1'],
        messages: []
    },
    {
        description: "Step 10 — The host presents a polished answer to the user. MCP makes this journey consistent, secure, and extensible across AI surfaces.",
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
const timelineItems = document.querySelectorAll('[data-step-index]');

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

    timelineItems.forEach(item => {
        const itemIndex = Number(item.dataset.stepIndex);
        if (itemIndex === currentStep) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
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
    autoPlayBtn.textContent = 'Pause';
    autoPlayBtn.style.background = 'linear-gradient(120deg, #b91c1c, #f97316)';
    
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
    autoPlayBtn.style.background = 'linear-gradient(120deg, #0369a1, #0ea5e9)';
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
    background: rgba(15, 23, 42, 0.92);
    color: white;
    padding: 14px 18px;
    border-radius: 16px;
    font-size: 0.9rem;
    z-index: 1000;
    box-shadow: 0 18px 32px rgba(15, 23, 42, 0.25);
`;
keyboardHints.innerHTML = `
    <strong>Keyboard Shortcuts</strong><br>
    Space or → : Next step<br>
    ← : Previous step<br>
    P : Play / pause<br>
    R : Reset
`;
document.body.appendChild(keyboardHints);
