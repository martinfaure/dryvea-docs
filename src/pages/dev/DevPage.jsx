import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import CodeBlock from '../../components/CodeBlock'
import pages from '../../data/pages.json'

const pageIdMap = {
  'getting-started': 'getting-started',
  conventions: 'conventions',
  'git-flow': 'git-flow',
  cicd: 'cicd',
}

export default function DevPage() {
  const { devId } = useParams()
  const pageId = pageIdMap[devId] || devId
  const page = pages[pageId]

  if (!page) {
    return (
      <div className="max-w-[720px]">
        <h1 className="text-2xl font-bold">Page introuvable</h1>
      </div>
    )
  }

  return (
    <PageLayout pageId={pageId}>
      {page.devType === 'getting-started' && <GettingStarted />}
      {page.devType === 'conventions' && <Conventions />}
      {page.devType === 'git-flow' && <GitFlow />}
      {page.devType === 'cicd' && <CicdPipeline />}
    </PageLayout>
  )
}

function GettingStarted() {
  const steps = [
    {
      title: 'Cloner le repository',
      code: 'git clone git@github.com:dryvea/dryvea-platform.git\ncd dryvea-platform',
    },
    {
      title: 'Installer les dépendances',
      code: 'npm install\ncp .env.example .env',
    },
    {
      title: 'Lancer PostgreSQL et Redis (Docker)',
      code: 'docker compose up -d postgres redis',
    },
    {
      title: 'Appliquer le schéma de base de données',
      code: 'npm run db:migrate\nnpm run db:seed',
    },
    {
      title: 'Démarrer l\'API et le frontend',
      code: 'npm run dev:api    # port 3000\nnpm run dev:web    # port 5173',
    },
  ]

  return (
    <div className="space-y-8">
      <p className="text-[15px] leading-relaxed text-black">
        Guide d'installation et de lancement du projet Dryvea en local. Prérequis : Node.js 20+,
        Docker, Git.
      </p>
      {steps.map((step, index) => (
        <div key={index}>
          <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center font-bold">
              {index + 1}
            </span>
            {step.title}
          </h2>
          <CodeBlock code={step.code} language="bash" />
        </div>
      ))}
    </div>
  )
}

function Conventions() {
  const rules = [
    { category: 'Nommage', rule: 'camelCase pour variables/fonctions JS', example: 'getUserById' },
    { category: 'Nommage', rule: 'PascalCase pour composants React', example: 'ListingCard' },
    { category: 'Nommage', rule: 'snake_case pour colonnes SQL', example: 'owner_id' },
    { category: 'Nommage', rule: 'kebab-case pour fichiers et routes', example: 'booking-service.ts' },
    { category: 'Git', rule: 'Commits en anglais, impératif', example: 'fix: resolve booking date overlap' },
    { category: 'Git', rule: 'Branches feature/fix/chore prefix', example: 'feature/stripe-webhook' },
    { category: 'API', rule: 'RESTful, versioning /api/v1', example: 'GET /api/v1/listings' },
    { category: 'API', rule: 'Réponses JSON camelCase', example: '{ "totalPrice": 76.50 }' },
    { category: 'Tests', rule: 'Coverage minimum 80% sur services', example: 'jest --coverage' },
    { category: 'Sécurité', rule: 'Jamais de secrets en dur', example: 'process.env.STRIPE_KEY' },
  ]

  return (
    <div className="space-y-4">
      <p className="text-[15px] leading-relaxed text-black mb-6">
        Standards de code appliqués sur l'ensemble des repositories Dryvea.
      </p>
      <div className="border border-gray-100 overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                Catégorie
              </th>
              <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                Règle
              </th>
              <th className="text-left px-4 py-2.5 font-semibold text-[11px] uppercase tracking-wide text-gray-400">
                Exemple
              </th>
            </tr>
          </thead>
          <tbody>
            {rules.map((r, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 font-medium">{r.category}</td>
                <td className="px-4 py-3">{r.rule}</td>
                <td className="px-4 py-3 font-mono text-[12px] text-gray-400">{r.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function GitFlow() {
  return (
    <div className="space-y-8">
      <p className="text-[15px] leading-relaxed text-black">
        Workflow Git adopté par l'équipe Dryvea. Basé sur Git Flow simplifié avec branches{' '}
        <code className="bg-gray-50 px-1 py-0.5 text-[13px] font-mono">main</code> et{' '}
        <code className="bg-gray-50 px-1 py-0.5 text-[13px] font-mono">develop</code>.
      </p>

      <div className="border border-gray-100 p-6">
        <div className="flex flex-col gap-6">
          <BranchRow name="main" desc="Production — tags semver v1.x.x" isMain />
          <Connector label="merge via PR + review" />
          <BranchRow name="develop" desc="Intégration — déploiement staging" />
          <Connector label="merge feature branches" />
          <div className="flex gap-4 flex-wrap ml-8">
            <BranchRow name="feature/*" desc="Nouvelles fonctionnalités" small />
            <BranchRow name="fix/*" desc="Corrections de bugs" small />
            <BranchRow name="chore/*" desc="Maintenance, deps, docs" small />
          </div>
          <Connector label="hotfix direct from main" />
          <BranchRow name="hotfix/*" desc="Corrections urgentes production" small />
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-3">Règles de merge</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-[15px]">
          <li>Minimum 1 review approuvée avant merge vers develop</li>
          <li>Minimum 2 reviews pour merge develop → main</li>
          <li>CI doit passer (lint, tests, build)</li>
          <li>Squash merge pour feature branches</li>
        </ul>
      </div>
    </div>
  )
}

function BranchRow({ name, desc, isMain, small }) {
  return (
    <div className={`flex items-center gap-4 ${small ? '' : ''}`}>
      <div
        className={`border border-black px-4 py-2 font-mono text-[13px] ${
          isMain ? 'bg-black text-white' : 'bg-white text-black'
        } ${small ? 'text-[12px] px-3 py-1.5' : ''}`}
      >
        {name}
      </div>
      <span className="text-[13px] text-gray-400">{desc}</span>
    </div>
  )
}

function Connector({ label }) {
  return (
    <div className="flex items-center gap-2 ml-4">
      <div className="w-px h-4 bg-gray-100" />
      <span className="text-[11px] text-gray-400">{label}</span>
    </div>
  )
}

function CicdPipeline() {
  const stages = [
    { name: 'Lint & Type Check', desc: 'ESLint + TypeScript strict mode' },
    { name: 'Unit Tests', desc: 'Jest — coverage gate 80%' },
    { name: 'Integration Tests', desc: 'Supertest against test DB' },
    { name: 'Build Docker', desc: 'Multi-stage build → ECR push' },
    { name: 'Deploy Staging', desc: 'Auto on develop merge' },
    { name: 'Deploy Production', desc: 'Manual approval on main' },
  ]

  return (
    <div className="space-y-8">
      <p className="text-[15px] leading-relaxed text-black">
        Pipeline d'intégration et déploiement continu via GitHub Actions.
      </p>

      <div className="flex flex-col gap-0">
        {stages.map((stage, index) => (
          <div key={stage.name} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border border-black flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              {index < stages.length - 1 && <div className="w-px h-8 bg-gray-100" />}
            </div>
            <div className="pb-6">
              <p className="text-sm font-semibold">{stage.name}</p>
              <p className="text-[13px] text-gray-400 mt-0.5">{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <CodeBlock
        code={`# .github/workflows/ci.yml (extrait)
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:coverage
      - run: npm run build`}
        language="yaml"
      />
    </div>
  )
}
