1. npm run dev
2. http://localhost:3000/user/1

3. npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   nano ~/.bash_profile
   export PATH=$PATH:/Users/anastasiatulupnikoff/.npm-global/bin
   source ~/.bash_profile

4. https://github.com/tailwindcss-ru/tailwindcss.ru/issues/new
   Issue with Installing and Using TailwindCSS on macOS - Command Not Found

Hello,

I am facing an issue with installing and using TailwindCSS on my macOS machine. I have followed the steps outlined in the official documentation and tried different approaches, but I keep encountering errors. Here’s a summary of my issue: 1. Initial Setup and Installation:
• I tried installing TailwindCSS globally using npm install -g tailwindcss and locally using npm install tailwindcss --save-dev.
• I have attempted to initialize the TailwindCSS configuration file using npx tailwindcss init -p, but I keep getting the error: bash: tailwindcss: command not found. 2. System Configuration:
• I checked the global npm prefix using npm config get prefix and confirmed it is set to /Users/anastasiatulupnikoff/.npm-global.
• I updated my ~/.bash_profile file to include the npm global bin directory in my PATH (export PATH=$PATH:/Users/anastasiatulupnikoff/.npm-global/bin).
• After modifying .bash_profile, I ran source ~/.bash_profile and restarted the terminal, but the issue persists. 3. Attempts to Fix:
• I reinstalled tailwindcss both globally and locally in the project directory.
• I verified that the necessary files are installed in node_modules/.bin but still couldn’t run the tailwindcss command.
• I also tried running the command directly from ./node_modules/.bin/tailwindcss init -p, but the terminal reports No such file or directory.

Could you please assist me in resolving this issue? Any help would be greatly appreciated!

Thank you in advance!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
