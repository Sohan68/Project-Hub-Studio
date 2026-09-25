ProjectHub STUDIO
📖 Brief Description
ProjectHub STUDIO is a modern, dark-themed project management dashboard[cite: 1]. It is designed for daily development or agency workflows, allowing you to track active clients, delivery statuses, and project budgets in real-time[cite: 1].

📸 Screenshot & Demo
Dashboard Overview:

🧠 Folder Structure
The components are logically divided into sections inside the src folder:

Plaintext
Project Hub Studio/
├── node_modules/
├── public/
│   ├── assets/
│   └── index.html
├── src/
│   ├── MainSection/
│   │   ├── LeftRightWorkPlace/
│   │   │   ├── CreateProject/
│   │   │   │   └── CreateProject.jsx
│   │   │   └── ProjectPlace/
│   │   │       ├── ControlSection.jsx
│   │   │       ├── NotFoundSection.jsx
│   │   │       ├── ProjectCards.jsx
│   │   │       ├── ProjectPlace.jsx
│   │   │       └── LeftRightAside.jsx
│   │   ├── ProjectSummury/
│   │   └── MainSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ProjectHub.jsx
├── .gitignore
└── eslint.config.js
✨ Features
Overview Dashboard: View total projects, pending tasks, completed tasks, and the total budget

Create Project: A dedicated form (CREATE PROJECT) to enter new projects with details like project name, client name, URL, category, and unit budget

Advanced Filtering: Search by project name or domain, and sort by category or status

Status Management: Quickly mark projects as 'Mark Pending' or 'Mark Completed' with a single click

Quick Actions: Options to star (favorite), edit, and delete projects

Budget Calculation: Automatically calculates the total budget based on the project quantity

🚀 Installation Instructions
Open your Bash terminal on Zorin OS 18 Core and follow these steps:

Clone the repository:

Bash
git clone https://github.com/Sohan68/project-hub-studio.git
cd project-hub-studio
Install dependencies (using npm):

Bash
npm install
Start the development server:

Bash
npm run dev
💡 Usage Guide
To add a new project: Fill in the required details in the "CREATE PROJECT" form on the left sidebar and click the 'Add Project' button

To manage projects: From the project list on the right, you can change the quantity, update the status, or click the delete icon to remove a project

🤝 Contribution Guidelines
Contributions are welcome! To contribute to this project:

Fork the repository.

Create a new branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request (PR).

📄 License
This project is distributed under the MIT License. See the LICENSE file for more information.

👏 Credits / References
Developer: Dev Sohan

Tech Stack: React, Tailwind CSS, Vite, npm

Design Inspiration: Modern dark-themed dashboard UI.
