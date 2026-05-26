const output = document.getElementById('terminal-output');
const input = document.getElementById('terminal-input');

const commands = {
    help: `<span class="info">Available commands:</span>
  whoami   - Display profile information
  projects - List recent projects
  skills   - Show technical skills
  contact  - Show contact information
  clear    - Clear terminal output`,
    
    whoami: `Name: Software Engineer
Role: Full-Stack Developer / Bug Hunter
Location: Cyber Space
Status: Looking for new challenges`,
    
    projects: `<span class="warning">1. Project Alpha</span> - Distributed microservices architecture
<span class="warning">2. Vulnerability Scanner</span> - Automated infosec tool
<span class="warning">3. Hacker-Portfolio</span> - This terminal interface`,
    
    skills: `Languages: JavaScript, Python, Go, C++
Frameworks: React, Node.js, Next.js
Tools: Docker, Kubernetes, Git, AWS
Security: Penetration Testing, Reverse Engineering`,
    
    contact: `Email: dev@codecanvas.local
GitHub: github.com/dev
Twitter: @dev_hacker`
};

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const val = this.value.trim().toLowerCase();
        
        // Echo input
        output.innerHTML += `<div class="line"><span class="prompt">guest@code-canvas:~$</span> ${val}</div>`;
        
        if (val === 'clear') {
            output.innerHTML = '';
        } else if (val) {
            const response = commands[val] || `Command not found: ${val}. Type 'help' for a list of commands.`;
            output.innerHTML += `<div class="line">${response.replace(/\n/g, '<br>')}</div>`;
        }
        
        this.value = '';
        output.scrollTop = output.scrollHeight;
    }
});

// Initial greeting typing effect
setTimeout(() => {
    output.innerHTML += `<div class="line info">Profile loaded successfully. Type 'help' to get started.</div>`;
    output.scrollTop = output.scrollHeight;
}, 1000);
