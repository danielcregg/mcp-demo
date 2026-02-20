# Interactive MCP Demo

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

An interactive, visual demonstration tool for learning the Model Context Protocol (MCP). Designed for students, educators, and developers who want to understand how AI applications connect to external tools and data sources through a standardized protocol.

**[View Live Demo](https://danielcregg.github.io/mcp-demo/)**

## Overview

The Model Context Protocol (MCP) is an open standard that enables AI applications to securely connect with external data sources and tools. This project provides a step-by-step animated walkthrough of the MCP architecture, illustrating how hosts, clients, servers, and external context collaborate through the protocol. The demo guides users through a complete 10-step MCP interaction sequence with color-coded components, animated connectors, and dynamic narration.

## Features

- **10-step animated flow** walking through a complete MCP request-response cycle
- **Auto-play and manual pacing** with adjustable animation speed (0.5s to 3.0s)
- **Keyboard shortcuts** for hands-free navigation (Arrow keys, Space, P, R)
- **Sidebar flow checklist** that highlights the current step in real time
- **Learning objectives and discussion prompts** for classroom facilitation
- **Responsive layout** that adapts to projectors, desktops, and mobile devices
- **Color-coded architecture diagram** with animated SVG connection lines

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools, package managers, or server-side dependencies required

## Getting Started

### Installation

```bash
git clone https://github.com/danielcregg/mcp-demo.git
cd mcp-demo
```

### Usage

Open `index.html` directly in your browser, or serve it locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. Use the **Next Step** button to advance through the walkthrough, or click **Auto Play** to watch the entire sequence automatically.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, and responsive design |
| JavaScript (ES6+) | Interactive functionality and state management |
| SVG | Animated connection lines between components |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
