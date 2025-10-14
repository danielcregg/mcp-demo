# 🎓 Interactive MCP Demo - Model Context Protocol

An interactive, visual demonstration tool for learning the Model Context Protocol (MCP). Perfect for students and developers new to MCP!

🌐 **[View Live Demo](https://danielcregg.github.io/mcp-demo/)**

## 📖 What is MCP?

The **Model Context Protocol (MCP)** is an open standard that enables AI applications to securely connect with external data sources and tools. Think of it as a universal translator that allows AI models to access databases, APIs, file systems, and other resources in a standardized way.

### Why MCP Matters

- 🔌 **Standardized Integration**: One protocol for all AI-to-data connections
- 🔒 **Secure**: Built-in security and permission management
- 🎯 **Extensible**: Easy to add new tools and data sources
- 🔄 **Reusable**: MCP servers can be shared across different AI applications

## 🏗️ Architecture Overview

MCP consists of four key components:

### 1. 🖥️ Host Application
The user-facing application that provides the AI interface.
- **Examples**: VS Code, Claude Desktop, custom AI apps
- **Role**: Presents the UI and manages user interactions

### 2. 🤖 MCP Client
The protocol implementation that manages communication.
- **Functions**: 
  - Discovers available MCP servers
  - Routes requests to appropriate servers
  - Manages security and permissions
  - Handles protocol-level communication

### 3. ⚙️ MCP Server
Exposes tools, resources, and prompts to the client.
- **Capabilities**:
  - **Tools**: Executable functions (e.g., file operations, API calls)
  - **Resources**: Data sources (e.g., files, database records)
  - **Prompts**: Pre-configured prompts for common tasks
- **Examples**: File system server, GitHub server, database server

### 4. 🌐 External Context
The actual data sources and services.
- **Examples**: 
  - File systems
  - Databases (PostgreSQL, MongoDB)
  - APIs (REST, GraphQL)
  - Cloud services

## 🎮 How to Use the Demo

### Online (GitHub Pages)
Visit **[https://danielcregg.github.io/mcp-demo/](https://danielcregg.github.io/mcp-demo/)** to use the interactive demo.

### Local Installation
```bash
# Clone the repository
git clone https://github.com/danielcregg/mcp-demo.git
cd mcp-demo

# Open in browser
# Simply open index.html in your web browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 Interactive Features

### Navigation Controls
- **Next Step**: Advance one interaction at a time with deliberate pacing
- **Auto Play**: Present the entire sequence hands-free
- **Reset**: Return to the welcome state to repeat the walkthrough
- **Speed Control**: Adjust the animation cadence (0.5s – 3.0s)

### Keyboard Shortcuts
- `→` or `Space`: Next step
- `←`: Previous step
- `P`: Play or pause auto mode
- `R`: Reset to beginning

### Guided Learning Aids
- **Flow checklist** in the sidebar mirrors every step and highlights the current state
- **Learning objectives** summarize the lesson outcomes before students begin
- **Discussion prompts** help facilitators extend the conversation beyond the animation

### Visual Storytelling
- 🎨 **Color-coded components** clarify each MCP responsibility
- 📊 **Animated connectors** show message routing through the protocol
- � **Dynamic narration** explains the rationale behind each step
- ♻️ **Responsive layout** adapts for classrooms, projectors, and mobile devices

## 📚 Learning Path

The demo walks through a complete MCP interaction:

1. **User Request** - User asks a question in the host application
2. **Client Processing** - MCP client receives and processes the request
3. **Server Discovery** - Client determines which server to use
4. **Protocol Communication** - Standardized message sent to server
5. **Tool Selection** - Server identifies the appropriate tool
6. **External Access** - Server accesses external data sources
7. **Data Retrieval** - External context returns requested data
8. **Response Formatting** - Server formats the response
9. **Client Delivery** - Response sent back through the client
10. **User Display** - Host application presents result to user

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and state management
- **SVG**: Animated connection lines

### Browser Support
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🎓 Educational Use

This demo is ideal for:
- 👨‍🎓 **Students** learning about AI architectures
- 👩‍💻 **Developers** implementing MCP in their applications
- 👨‍🏫 **Educators** teaching distributed systems and AI
- 🏢 **Teams** understanding AI integration patterns

## 🔗 Additional Resources

- [Official MCP Documentation](https://modelcontextprotocol.io)
- [MCP Specification](https://spec.modelcontextprotocol.io)
- [GitHub MCP Organization](https://github.com/modelcontextprotocol)
- [Community Examples](https://github.com/modelcontextprotocol/servers)

## 🤝 Contributing

Contributions are welcome! To improve this demo:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add: new animation'`)
5. Push to your branch (`git push origin feature/improvement`)
6. Open a Pull Request

### Improvement Ideas
- 🌍 Add internationalization (multiple languages)
- 🎨 Additional themes and color schemes
- 📱 Enhanced mobile experience
- 🎓 More detailed examples and use cases
- 🔊 Audio narration option

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by Daniel Cregg for educational purposes.

## 🙏 Acknowledgments

- Model Context Protocol team at Anthropic
- The open source community
- Students and educators providing feedback

---

**Star ⭐ this repository if you find it helpful!**

For questions or suggestions, please [open an issue](https://github.com/danielcregg/mcp-demo/issues).