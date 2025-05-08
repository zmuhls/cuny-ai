# AI Prompting in Praxis

_An interactive guide to language model concepts and prompting techniques._

![OpenRouter Logo](/cuny-ai/images/openrouter.png)

> This interactive guide introduces key concepts in Large Language Model (LLM) prompting and covers techniques for interacting with AI models, especially in the context of historical research and transcription tasks. The interface is fully mobile-responsive and designed for intuitive navigation.

---

## Features

- **Enhanced Mobile Responsiveness**: Fully optimized for all devices including narrow iPhone screens, with improved layouts for complex components, better text readability, and fluid text flow for interactive exercises
- **Interactive Navigation**: Step-by-step interface with progress tracking and touch-friendly controls
- **Linked Key Terms**: Click any key term to navigate directly to its definition in the glossary with a smooth scrolling effect and visual highlight
- **Visual Examples**: Compare outputs from different vision models analyzing historical documents
- **Card-Based Layouts**: Mobile-optimized card layouts for better organization of complex content with consistent styling across sections
- **Responsive Form Elements**: Adaptive input fields that work well across all screen sizes

## Content Sections

- **Mad-Lib Warm-Up:** A fun introduction to core terminology with interactive fill-in-the-blank exercises and drag-and-drop term selection
- **OpenRouter Guide:** Setting up your environment to interact with models through a unified API
- **Prompting Exercises:** Hands-on tasks to practice prompting techniques:
  - Task 1: Document Completion with different temperature settings
  - Task 2: Document Understanding using vision models
- **Model Comparisons:** Review output differences between models analyzing the same documents:
  - Example 1: Handwritten recipe card
  - Example 2: Historical engraving with text
- **AI-LLM Glossary:** Comprehensive reference of key terms for understanding AI concepts, prompting techniques, and model infrastructure

---

<details>
<summary><strong>Mad-Lib Warm-Up</strong></summary>

**Term Bank:** `API`, `Batch Prompting`, `Model`, `Prompt`, `Training Data`, `Embeddings`, `System Message`, `Temperature`, `Top-p`, `Tokens`

> **Anatomy of a Prompt:**

```text
A(n) [Prompt] begins with a [System Message] that tells the [Model] which role to play.
By lowering [Temperature] or [Top-p], you shrink the model's creative range.
Once authenticated with a secret key, the request travels through an [API].
After slicing language from your prompt into [Tokens], the AI system consults its [Training Data] to predict the next steps in the sequence based on mathematical vectors called [Embeddings].
Even so, gym class heroes like to speed things up with [Batch Prompting].
```

</details>

<details>
<summary><strong>AI-LLM Glossary</strong></summary>

### Key Concepts

- **Generative AI:** A subset of artificial intelligence that processes natural language input to generate content (text, images, or music) based on patterns from training data.
- **LLM (Large Language Model):** A transformer-based neural network with billions of parameters, trained on vast text corpora to predict and generate language.
- **Vision Language Model (VLM):** A model that processes and interprets visual data (images) to extract information, used for tasks involving both text and images.
- **Training Data:** Sprawling codex of text and/or image data whose statistical patterns guide the behavior of AI models trained on it.
- **Token:** A small unit of text (often a word or sub-word) that the model processes and predicts sequentially.

### Prompting Methods

- **Prompt:** The explicit instruction or input you provide to a language model to elicit a response.
- **System Message:** A special instruction at the start of a conversation that sets persistent rules and behavior for the model, distinct from user prompts.
- **Temperature:** A sampling parameter (0–2) that controls output randomness: lower values make responses more focused while higher values increase creativity.
- **Top-p:** Helps decide which words (tokens) a model should consider when generating text, balancing common words and more varied options.

### Advanced Techniques

- **Prompt Engineering:** The systematic practice of designing, testing, and refining prompts to achieve specific outputs.
- **Fine-Tuning:** Further training a pre-trained model on custom labeled data to specialize its behavior for particular tasks.
- **Batch Prompting:** A method for submitting multiple prompt variations at once to compare outputs efficiently.
- **OCR (Optical Character Recognition):** Technology that converts different types of documents into editable and searchable text data.

### Infrastructure

- **API:** Application Programming Interface – protocols that allow different software to communicate, enabling interactions with AI models.
- **API Key:** A unique code used to authenticate and authorize access to an API, ensuring secure and controlled usage.
- **Model Provider:** The organization or platform that hosts and provides access to a specific AI model via an API.

</details>

<details>
<summary><strong>OpenRouter Setup Guide</strong></summary>

1. Go to: [Chatbox Web Portal](https://web.chatboxai.app/)
2. Navigate to settings -> Model Provider -> Add Custom Provider
3. Fill in:
   - **Name**: `OpenRouter`
   - **API Host**: `https://openrouter.ai/api/v1/chat/completions`
   - **API Key**: (Click to reveal in the app)
   - **Model**: Choose from:
     - `openai/gpt-4o` - Flagship large language model from OpenAI
     - `anthropic/claude-3-sonnet` - Flagship large language model from Anthropic
     - `google/gemini-pro-vision` - Vision language model for images + text from Google
     - `mistralai/pixtral-large-2411` - Vision model built on mistral-large-2411 from MistralAI
     - `mistralai/pixtral-12b` - Fast, lightweight vision model from Mistral AI

</details>

<details>
<summary><strong>Prompting Exercises</strong></summary>

### Task 1: Document Completion

```prompt
Complete the incomplete paragraph in the following excerpt from a primary source:
[insert-excerpt]
```

- Test different temperatures (e.g., 0.2 vs 0.8) and compare results.

### Task 2: Document Understanding

```system
You are an advanced OCR processing tool for parsing and transcribing historical materials.
```

```prompt
Transcribe the attached image of the document with alt-text for mixed media, filling Dublin Core fields where present.
```

</details>

<details>
<summary><strong>Comparing Model Outputs</strong></summary>

### Example 1: Handwritten Recipe Card

[View Recipe Comparison](/cuny-ai/pages/recipe.html)  
![Recipe Card](/cuny-ai/images/recipe.jpg)

### Example 2: 18th-Century Satirical Engraving

[View Magician Comparison](/cuny-ai/pages/magician.html)  
![Magician Engraving](/cuny-ai/images/magician.jpg)

### Analysis Guide

When reviewing model outputs, consider these comparison points:

- **Accuracy**: Which models performed better with handwritten vs. printed text?
- **Alt Text**: How descriptive and accurate were the generated image descriptions?
- **Metadata**: How well did models identify and extract Dublin Core fields?
- **Ambiguity**: How did models handle unclear parts of the images or text?
- **Structure**: Did models present information in a clear, logical format?

</details>

## Technical Details

- Built with React + Vite + TypeScript
- Styled with Tailwind CSS (properly configured with PostCSS)
- Enhanced mobile responsiveness for all device types:
  - Optimized for narrow iPhone screens
  - Dynamic content sizing
  - Better touch targets for interactive elements
  - Improved space utilization
- Interactive key terms with direct links to glossary definitions
- Fixed image references with proper fallbacks to GitHub repository
- Path aliasing for better code organization
- Deployed with GitHub Pages
- Base URL: `/cuny-ai/`

## Recent Updates

- **Standardized Card Design**: Implemented consistent card-based UI across all sections including Analysis Guide and Model IDs
- **Improved Mad-Lib Exercise Flow**: Redesigned for natural paragraph flow avoiding awkward line breaks on mobile
- **Proper Tailwind CSS Production Setup**: Removed CDN reference in favor of the PostCSS plugin approach for better production performance
- **TypeScript Integration**: Added TypeScript support for improved type safety and developer experience
- **Mobile Optimization**: Enhanced responsiveness for mobile devices with better space utilization
- **Improved Image Fallbacks**: Updated image references to ensure proper fallbacks to GitHub repository
- **Clickable Glossary Terms**: Made key terms in the footer clickable to jump directly to their definitions in the glossary
