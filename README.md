# AI Central Station

![AI Central Station Banner](https://ai-central.vercel.app/favicon.ico)

A comprehensive platform for exploring, comparing, and benchmarking AI tools and models. AI Central Station serves as a one-stop hub for AI enthusiasts, researchers, and professionals to discover and evaluate the latest AI technologies.

**🔗 Live Demo:** [https://ai-central.vercel.app](https://ai-central.vercel.app)

## 🌟 Introduction

AI Central Station is an open-source project designed to help users navigate the rapidly evolving landscape of artificial intelligence tools. With the exponential growth of AI solutions, finding the right tool for specific needs can be challenging. This platform addresses this challenge by providing:

- A curated directory of AI tools with detailed information
- Performance benchmarks for comparing different AI models
- Interactive visualizations to understand model capabilities
- Educational resources about AI technologies

Our mission is to make AI more accessible and understandable for everyone, from beginners to experts.

## ✨ Features

- **AI Tool Directory**: Browse and discover popular AI tools with detailed documentation
- **Interactive Benchmarks**: Compare performance metrics across different AI models
- **Data Visualization**: Intuitive charts and graphs for analyzing model performance
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Blog Section**: Latest news and insights about AI developments
- **Categorized Exploration**: Find tools by category, use case, or performance metrics

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-central-station.git
cd ai-central-station
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 🏗️ Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable UI components
- `/src/data` - Data sources for AI tools and benchmarks
- `/src/data/explore` - Individual category data files for AI tools
- `/public` - Static assets like images

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Custom components built on Radix UI primitives
- **Data Visualization**: Recharts
- **Animations**: Framer Motion and CSS animations
- **Deployment**: Vercel

## 🤝 How to Contribute

We welcome contributions from the community! Here's how you can contribute to AI Central Station:

### Setting Up Your Development Environment

1. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository
   - This creates a copy of the repository in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/dariogeorge21/ai-central-station.git
   cd ai-central-station
   ```

3. **Add the Upstream Remote**
   ```bash
   git remote add upstream https://github.com/dariogeorge21/ai-central-station.git
   ```

4. **Create a New Branch**
   - Always create a new branch for your work
   - Use a descriptive name that reflects the purpose of your changes
   ```bash
   git checkout -b branch-name
   ```
   - Examples of good branch names:
     - `feature/add-voice-tools`
     - `fix/pagination-bug`
     - `docs/improve-readme`
     - `update/chatgpt-details`

5. **Make Your Changes**
   - Implement your feature, fix, or documentation changes
   - Commit your changes with clear, descriptive commit messages
   ```bash
   git add .
   git commit -m "Add detailed description of your changes"
   ```

6. **Keep Your Branch Updated**
   - Regularly sync your branch with the upstream repository
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

7. **Push Your Changes**
   ```bash
   git push origin branch-name
   ```

8. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click 'New Pull Request'
   - Select your branch and submit the pull request with a detailed description

### 1. Adding or Updating AI Tools

One of the most valuable contributions is adding new AI tools or updating information about existing ones:

1. Create a new branch following the naming convention `update/tool-name` or `add/tool-name`
2. Navigate to `/src/data/explore` directory
3. Find the appropriate category file (e.g., `chatbots.ts`, `models.ts`, etc.)
4. Add a new tool entry following the existing format
5. Ensure all required fields are completed with accurate information
6. Test your changes locally by running the development server
7. Submit a pull request with your changes

### 2. Fixing Bugs

1. Check the Issues tab for existing bugs or create a new issue
2. Comment on the issue you'd like to work on
3. Create a branch with a descriptive name (e.g., `fix/pagination-bug`)
4. Make your changes and test thoroughly
5. Submit a pull request referencing the issue number

### 3. Adding New Features

1. Discuss new feature ideas in the Issues tab before implementation
2. Once approved, create a feature branch (e.g., `feature/dark-mode`)
3. Implement the feature following the project's coding style
4. Add appropriate tests and documentation
5. Submit a pull request with a detailed description of the new feature

### 4. Improving Documentation

1. Create a branch with the prefix `docs/` (e.g., `docs/api-documentation`)
2. Help improve README files, code comments, or create tutorials
3. Update or add JSDoc comments to functions and components
4. Create or improve user guides for the platform

### Pull Request Guidelines

- Keep PRs focused on a single feature or bug fix
- Follow the existing code style and conventions
- Include screenshots for UI changes
- Make sure all tests pass before submitting
- Update documentation as needed
- Respond to review comments and make requested changes
- Be patient and respectful during the review process

## 📝 Conclusion

AI Central Station aims to be the definitive resource for AI tool discovery and comparison. By contributing to this project, you're helping build a valuable resource for the entire AI community. Whether you're adding new tools, fixing bugs, or improving documentation, your contributions make a difference.

We believe in the power of open-source collaboration to accelerate AI adoption and education. Thank you for being part of this journey!

## 📄 License

MIT

---

<p align="center">Made with ❤️ by the AI Central Station community</p>
