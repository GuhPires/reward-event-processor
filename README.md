# Reward Event Processor

A lightweight Node.js + TypeScript service that processes reward-related events for employees.
This project includes an automated points-update workflow and a complete Postman Collection to help you create and test data easily.

---

## 📦 Features

- Rule creation and management
- Employee listing and point tracking
- Event batch execution for reward processing
- Postman Collection for end-to-end testing
- TypeScript-based Node.js backend

---

## 🛠 Prerequisites

Make sure you have the following installed:

- Node Version Manager (NVM)
- Node.js (version specified in .nvmrc)
- npm

---

## 🚀 Getting Started

1. Select the correct Node version

```bash
nvm use
```

_This automatically loads the Node version defined in .nvmrc._

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

_Your application will start using ts-node/tsx in watch mode._

> The default `PORT` is `3000`, but that can be changed in your `.env` file

---

## 📘 Postman Testing Workflow

A Postman collection is included in the project, so please use the `Jolly Challenge.postman_collection.json` to import to your Postman (Collection v2.1)

Run requests in this sequence:

1️⃣ Create Rule

> Creates a reward rule in the system.

2️⃣ List Rules

> Verify that your newly created rule exists.

3️⃣ List Employees

> Fetch all employees before applying event batches.

4️⃣ Run Event Batch

> Triggers processing of events and applying reward rules.

5️⃣ Check Employee Details

> Query an individual employee to confirm their points were updated correctly.

---

## 📄 Environment Variables

The project includes an example `.env.example` file. You should copy it's content to a `.env` file and change the values accordingly.

---

## 🧪 Scripts

Common npm scripts available:

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Run the development server           |
| `npm run build`  | Build for production (if configured) |
| `npm start`      | Run compiled app (if configured)     |
| `npm run format` | Run prettier                         |
