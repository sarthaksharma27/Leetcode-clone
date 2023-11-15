
# Leetcode clone

![Screenshot from 2023-11-14 19-46-02](https://github.com/sarthaksharma27/Leetcode-clone/assets/130299888/e378874e-2d96-4aa2-b2ba-a540dc250a68)

The LeetCode clone is a web application built with Next.js, React, TypeScript, Tailwind CSS, and Firebase. It offers an interactive code playground for users to write and test code, presents LeetCode-style problem statements, and supports user authentication for progress tracking. The tech stack includes popular libraries and tools such as CodeMirror, Firebase SDK, and React icons. 

## Features

- **Interactive Code Playground:**
  Users can write, edit, and test their code in a dynamic and interactive code editor.

- **LeetCode-Style Problem Statements:**
  Clear presentation of problem statements, following the style of LeetCode challenges.

- **User Authentication:**
  Secure user authentication system enabling users to log in, save progress, and track solved problems.


## Tech Stack

## Client
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.

## Server
- [Next.js](https://nextjs.org/) - React framework for server-rendered React applications.
- [Firebase](https://firebase.google.com/) - Backend-as-a-Service platform.

### Additional NPM Packages

- [@codemirror/lang-javascript](https://www.npmjs.com/package/@codemirror/lang-javascript) - CodeMirror language support for JavaScript.
- [@uiw/codemirror-theme-vscode](https://www.npmjs.com/package/@uiw/codemirror-theme-vscode) - Visual Studio Code theme for CodeMirror.
- [@uiw/react-codemirror](https://www.npmjs.com/package/@uiw/react-codemirror) - CodeMirror component for React.
- [assert](https://www.npmjs.com/package/assert) - Node.js built-in assert module for assertions.
- [firebase](https://www.npmjs.com/package/firebase) - Firebase SDK for JavaScript apps.
- [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks) - Firebase hooks for React.
- [react-icons](https://react-icons.github.io/react-icons/) - Popular icon library for React.
- [react-split](https://www.npmjs.com/package/react-split) - Resizable split views for React.
- [react-toastify](https://www.npmjs.com/package/react-toastify) - Toast notifications for React.
- [react-youtube](https://www.npmjs.com/package/react-youtube) - YouTube component for React.
- [recoil](https://www.npmjs.com/package/recoil) - State management library for React.






## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

  ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   Replace the values with your actual Firebase project details.
```


## Installation



```bash
  git clone https://github.com/your-username/leetcode-clone.git
  cd leetcode-clone
```

```bash
   npm install
   npm run dev
```

Visit http://localhost:3000 in your browser.
    
