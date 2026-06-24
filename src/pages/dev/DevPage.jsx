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
      code: 'git clone https://github.com/ONeugnot/Dryvea.git\ncd Dryvea',
    },
    {
      title: 'Installer les dépendances Composer',
      code: 'composer install',
    },
    {
      title: 'Configurer la base de données',
      code: 'cp config/config.exemple.php config/config.php\n# Modifier config/config.php avec vos identifiants MySQL',
    },
    {
      title: 'Importer le schéma SQL',
      code: 'mysql -u root -p dryvea < dryvea.sql',
    },
    {
      title: 'Démarrer le serveur PHP',
      code: 'composer run serve\n# ou : php -S localhost:8080 -t public',
    },
  ]

  return (
    <div className="space-y-8">
      <p className="text-[15px] leading-relaxed text-black">
        Guide d'installation et de lancement du projet Dryvea en local. Prérequis : PHP 8.1+,
        MySQL 8+, Composer, Git.
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
    { category: 'Nommage', rule: 'camelCase pour méthodes PHP', example: 'getCarById()' },
    { category: 'Nommage', rule: 'PascalCase pour classes PHP', example: 'CarController' },
    { category: 'Nommage', rule: 'snake_case pour colonnes SQL et variables PHP', example: 'id_proprietaire' },
    { category: 'Nommage', rule: 'kebab-case pour noms de fichiers', example: 'detail.js' },
    { category: 'PHP', rule: 'Namespace PSR-4 : dryvea\\', example: 'dryvea\\Controllers\\HomeController' },
    { category: 'PHP', rule: 'Typage strict des paramètres et retours', example: 'public function index(): void' },
    { category: 'BDD', rule: 'Clés primaires UUID VARCHAR(36)', example: 'a1b2c3d4-0001-4000-8000-000000000001' },
    { category: 'BDD', rule: 'Tables avec préfixe relationnel clair', example: 'voiture_equipement' },
    { category: 'API', rule: 'Retours JSON pour endpoints API', example: 'json(["message" => "OK"])' },
    { category: 'Sécurité', rule: 'Mots de passe hashés avec bcrypt', example: 'password_hash($pwd, PASSWORD_DEFAULT)' },
  ]

  return (
    <div className="space-y-4">
      <p className="text-[15px] leading-relaxed text-black mb-6">
        Standards de code appliqués sur le projet Dryvea.
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
        Workflow Git utilisé par l'équipe Dryvea. Dépôt sur{' '}
        <code className="bg-gray-50 px-1 py-0.5 text-[13px] font-mono">github.com/ONeugnot/Dryvea</code>
        , branche principale <code className="bg-gray-50 px-1 py-0.5 text-[13px] font-mono">main</code>.
      </p>

      <div className="border border-gray-100 p-6">
        <div className="flex flex-col gap-6">
          <BranchRow name="main" desc="Branche principale — code stable" isMain />
          <Connector label="merge via PR" />
          <div className="flex gap-4 flex-wrap ml-8">
            <BranchRow name="feature/*" desc="Nouvelles fonctionnalités" small />
            <BranchRow name="fix/*" desc="Corrections de bugs" small />
          </div>
          <Connector label="branche secondaire" />
          <BranchRow name="feature/login_register" desc="Existant : inscription/connexion" small />
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-3">Pratiques Git</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-[15px]">
          <li>Commits en français ou anglais, descriptifs</li>
          <li>Branches feature/* pour le développement</li>
          <li>Merge sur main via PR (pas de push direct)</li>
          <li>Pas de CI/CD automatisé</li>
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
  return (
    <div className="space-y-8">
      <p className="text-[15px] leading-relaxed text-black">
        Le projet Dryvea ne dispose pas encore de pipeline CI/CD automatisé.
      </p>

      <div className="border border-gray-100 p-6">
        <h2 className="text-base font-semibold mb-4">Processus actuel</h2>
        <ul className="list-disc pl-5 space-y-2 text-[15px]">
          <li>Développement en local avec <code className="bg-gray-50 px-1 py-0.5 font-mono text-[13px]">php -S localhost:8080 -t public</code></li>
          <li>Base de données MySQL en local</li>
          <li>Tests manuels à chaque itération</li>
          <li>Pas de déploiement staging ou production</li>
          <li>Pas de pipeline GitHub Actions configuré</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-3">À venir</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-gray-400">
          <li>Automatiser les tests PHPUnit avec GitHub Actions</li>
          <li>Ajouter un environnement de staging</li>
          <li>Mettre en place le déploiement continu</li>
        </ul>
      </div>
    </div>
  )
}
