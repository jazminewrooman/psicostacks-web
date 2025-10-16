# 🧠 PsicoStacks - Frontend Web Application

> Decentralized psychometric credential verification platform powered by Stacks blockchain

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![Stacks](https://img.shields.io/badge/Stacks-Blockchain-5546ff)](https://www.stacks.co/)

🌐 **Live App:** [https://psicostacks.netlify.app/](https://psicostacks.netlify.app/)

**Related Repositories:**
- 🔧 [Backend API](https://github.com/jazminewrooman/psicostacks-backend)
- ⛓️ [Smart Contracts](https://github.com/jazminewrooman/psicostacks-smarts)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Flows](#key-flows)
- [Blockchain Integration](#blockchain-integration)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Deployment](#deployment)

---

## 🎯 Overview

**PsicoStacks** is a decentralized platform that allows candidates to create **verifiable, portable psychometric credentials** as Soulbound Tokens (SBTs) on the Stacks blockchain. Employers can verify these credentials by paying a small fee, ensuring authenticity while preserving candidate privacy.

### Problem Solved
- ❌ Traditional PDF reports can be forged or altered
- ❌ Candidates must share sensitive data repeatedly with multiple employers
- ❌ No way to prove credential authenticity without contacting issuer

### Solution
- ✅ Blockchain-verified credentials (impossible to forge)
- ✅ Portable credentials with unlimited sharing
- ✅ Privacy-preserving verification (pay-to-view model)
- ✅ Candidate-controlled revocation

---

## ✨ Features

### For Candidates
- 📤 **Upload psychometric test results** (PDF)
- 🤖 **AI-powered credential generation** (Mistral AI)
- ⛓️ **Mint credentials as SBTs** on Stacks blockchain
- 📤 **Generate unlimited shareable links** (2-hour expiry)
- 🔒 **Revoke credentials** anytime
- 📊 **Manage all credentials** in dashboard

### For Employers
- 🔍 **Preview candidate credentials** (free)
- 💳 **Pay verification fee** (10 STX) on-chain
- 📊 **Access full psychometric report** (60-second window)
- ✅ **Blockchain-verified authenticity**
- 🔐 **Immutable credential data**

### Platform Features
- 🎓 **Interactive onboarding** for crypto beginners
- 👛 **Leather Wallet integration** (Stacks)
- 📱 **Mobile-responsive design**
- 🎨 **Modern UI/UX** with Tailwind CSS
- 🔄 **Real-time blockchain confirmation tracking**

---

## 🏗️ Architecture

```
┌─────────────────┐
│   Frontend      │
│   (Next.js)     │
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│   Backend API   │  │  Stacks Smart   │
│   (Express.js)  │  │   Contract      │
└────────┬────────┘  └────────┬────────┘
         │                    │
         ▼                    ▼
┌─────────────────┐  ┌─────────────────┐
│   Supabase DB   │  │ Stacks          │
│   (PostgreSQL)  │  │ Blockchain      │
└─────────────────┘  └─────────────────┘
         │
         ▼
┌─────────────────┐
│   Mistral AI    │
│   API           │
└─────────────────┘
```

### Data Flow

**1. Credential Creation:**
```
Candidate uploads PDF → Backend processes with AI → 
Store in Supabase → Mint SBT on Stacks → 
Return blockchain ID → Update DB
```

**2. Credential Verification:**
```
Employer clicks share link → Frontend shows preview → 
Employer pays 10 STX → Smart contract transfers payment → 
Backend generates view token → Employer sees full report (60s)
```

---

## 🛠️ Tech Stack

### Frontend Core
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components:** Custom design system

### Blockchain
- **Blockchain:** [Stacks](https://www.stacks.co/) (Bitcoin L2)
- **Wallet:** [Leather Wallet](https://leather.io/)
- **Smart Contract Language:** [Clarity](https://clarity-lang.org/)
- **SDK:** [@stacks/connect](https://www.npmjs.com/package/@stacks/connect)

### State Management
- **Context API:** Wallet connection state
- **React Hooks:** Local state management
- **localStorage:** Onboarding persistence

### Backend Integration
- **API Client:** Native `fetch`
- **Database:** Supabase (PostgreSQL)
- **File Upload:** FormData (multipart)

### Development Tools
- **Package Manager:** npm
- **Linting:** ESLint
- **Code Formatting:** Prettier (implicit)
- **Type Checking:** TypeScript compiler

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.x
npm >= 9.x
```

### Installation

1. **Clone the repository:**
```bash
git clone <repo-url>
cd psicostacks
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```bash
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001

# Stacks Contract Details
NEXT_PUBLIC_CONTRACT_ADDRESS=ST2QS1D1ZFCGX436QPHACJNC0R2A6HNB7BNM95J9X
NEXT_PUBLIC_CONTRACT_NAME=psicostacks-sbt
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open the app:**
```
http://localhost:3000
```

### Required Services

Ensure these services are running:

- ✅ **Backend API** (port 3001)
- ✅ **Supabase** (configured in backend)
- ✅ **Stacks Blockchain** (testnet)

---

## 📁 Project Structure

```
psicostacks/
├── public/                      # Static assets
│   ├── lrmnHOuN_400x400.jpg    # Logo
│   ├── leather2.png            # Wallet icon
│   └── ...
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── candidate/          # Candidate pages
│   │   │   ├── page.tsx        # Upload & create credential
│   │   │   ├── results/        # AI processing results
│   │   │   └── credentials/    # Credential management
│   │   ├── verify/             # Employer verification
│   │   │   ├── page.tsx        # Preview & pay
│   │   │   └── view/           # Full report view
│   │   ├── admin/              # Admin panel
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Hero, Benefits, Privacy
│   │   ├── ui/                 # Button, Logo, Check
│   │   ├── wallet/             # Wallet connection
│   │   ├── onboarding/         # Onboarding flow
│   │   └── admin-panel.tsx     # Admin controls
│   ├── contexts/               # React contexts
│   │   └── wallet-context.tsx  # Wallet state
│   ├── hooks/                  # Custom hooks
│   │   └── use-onboarding.ts   # Onboarding state
│   ├── lib/                    # Utilities
│   │   ├── api-config.ts       # API URL helper
│   │   ├── pdf-utils.ts        # PDF validation
│   │   ├── stacks-contract.ts  # Blockchain functions
│   │   └── admin-functions.ts  # Admin operations
│   └── types/                  # TypeScript types
├── .env.local                  # Environment variables
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

---

## 🔄 Key Flows

### 1. Candidate Creates Credential

```typescript
// 1. Upload PDF
const formData = new FormData();
formData.append('file', pdfFile);
formData.append('walletAddress', stxAddress);

// 2. Backend processes with AI
const response = await fetch('/api/ai-interpret', {
  method: 'POST',
  body: formData,
});

// 3. User reviews results & confirms
// 4. Mint on blockchain
const txId = await mintCredentialOnChain(
  recipientAddress,
  schema,
  commitHash,
  ttlBlocks
);

// 5. Wait for confirmation (~30s)
const credentialId = await waitForTransactionConfirmation(txId);

// 6. Update database
await fetch('/api/credentials', {
  method: 'POST',
  body: JSON.stringify({ blockchainId: credentialId }),
});
```

### 2. Candidate Shares Credential

```typescript
// Generate shareable token (valid 2 hours)
const response = await fetch('/api/credentials/share', {
  method: 'POST',
  body: JSON.stringify({ credentialId }),
});

const { shareToken } = await response.json();

// Share URL: https://psicostacks.com/verify?token=share_xxx
```

### 3. Employer Verifies Credential

```typescript
// 1. Fetch preview (free)
const preview = await fetch('/api/verify/preview', {
  method: 'POST',
  body: JSON.stringify({ token: shareToken }),
});

// 2. Pay verification fee (10 STX)
const txId = await payVerificationFee(blockchainId);

// 3. Generate view token (60s expiry)
const viewToken = await fetch('/api/verify/pay', {
  method: 'POST',
  body: JSON.stringify({ txId, blockchainId }),
});

// 4. Redirect to full report
window.location.href = `/verify/view?token=${viewToken}`;
```

---

## ⛓️ Blockchain Integration

### Smart Contract Functions Used

```clarity
;; Mint credential (candidate)
(mint-credential 
  (recipient principal)
  (schema string-ascii)
  (commit buff)
  (ttl-blocks uint))

;; Pay verification fee (employer)
(verify-paid (id uint))

;; Revoke credential (candidate)
(revoke (id uint))

;; Update fee (admin)
(set-verify-fee (fee-ustx uint))
```

### Stacks SDK Usage

```typescript
import { openContractCall } from '@stacks/connect';
import { uintCV, stringAsciiCV, bufferCV } from '@stacks/transactions';

// Example: Mint credential
openContractCall({
  network: STACKS_TESTNET,
  contractAddress: 'ST2QS...',
  contractName: 'psicostacks-sbt',
  functionName: 'mint-credential',
  functionArgs: [
    principalCV(recipientAddress),
    stringAsciiCV(schema),
    bufferCV(commit),
    uintCV(ttlBlocks),
  ],
  postConditionMode: 0x01,
  onFinish: (data) => {
    console.log('Transaction ID:', data.txId);
  },
});
```

---

## 🔐 Environment Variables

```bash
# Required
NEXT_PUBLIC_API_URL=http://localhost:3001        # Backend API URL
NEXT_PUBLIC_CONTRACT_ADDRESS=ST2QS...            # Deployed contract address
NEXT_PUBLIC_CONTRACT_NAME=psicostacks-sbt        # Contract name

# Optional
NODE_ENV=development                             # Environment
NEXT_PUBLIC_NETWORK=testnet                      # Stacks network
```

---

## 💻 Development

### Available Scripts

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### Development Workflow

1. **Backend must be running** on port 3001
2. **Smart contracts must be deployed** to testnet
3. **Wallet extension** (Leather) must be installed
4. **Testnet STX** required for transactions

### Testing Locally

1. **Get testnet STX:**
   - https://explorer.hiro.so/sandbox/faucet?chain=testnet

2. **Reset onboarding:**
   ```javascript
   localStorage.clear();
   ```

3. **View blockchain transactions:**
   - https://explorer.hiro.so/?chain=testnet

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Environment Variables (Production)

```bash
NEXT_PUBLIC_API_URL=https://api.psicostacks.com
NEXT_PUBLIC_CONTRACT_ADDRESS=<mainnet-address>
NEXT_PUBLIC_CONTRACT_NAME=psicostacks-sbt
NEXT_PUBLIC_NETWORK=mainnet
```

### Build Configuration

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['explorer.hiro.so'],
  },
};
```

---

## 🎨 Design System

### Colors

```javascript
primary: '#8b5cf6'    // Violet
secondary: '#a855f7'  // Purple
accent: '#6366f1'     // Indigo
success: '#10b981'    // Green
error: '#ef4444'      // Red
```

### Typography

- **Font:** Inter (Google Fonts)
- **Headings:** Bold, tracking-tight
- **Body:** Regular, slate-700

### Components

All UI components follow a consistent API:
```tsx
<Button variant="primary" | "outline" | "ghost" />
<Badge color="green" | "blue" | "amber" />
```

---

## 📝 API Integration

### Backend Endpoints Used

```typescript
POST /api/ai-interpret         // Process PDF with AI
POST /api/credentials          // Save credential to DB
POST /api/credentials/share    // Generate share token
GET  /api/credentials          // Get user credentials
POST /api/credentials/revoke   // Revoke credential
POST /api/verify/preview       // Get credential preview
POST /api/verify/pay           // Generate view token
GET  /api/verify/view          // Get full credential
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Wallet not connecting:**
- Ensure Leather wallet is installed
- Check network is set to testnet
- Refresh page

**2. Transaction failing:**
- Check STX balance (need testnet STX)
- Verify contract address is correct
- Check blockchain explorer for error

**3. Onboarding shows every time:**
```javascript
// Reset in console:
localStorage.clear();
```

**4. Images not loading:**
- Images must be in `/public` folder
- Use `/image.jpg` not `./image.jpg`

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Stacks Documentation](https://docs.stacks.co)
- [Clarity Language](https://docs.stacks.co/clarity)
- [Leather Wallet](https://leather.io/guides)

---

## 🤝 Contributing

This is a hackathon project. For questions or improvements:

1. Open an issue
2. Submit a pull request
3. Contact the team

---

## 📄 License

This project was created for the Stacks Hackathon.

---

## 👥 Team

Built with ❤️ by the PsicoStacks team.

---

**Happy credential verification! 🎉**
