import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import pages from '../../data/pages.json'
import tests from '../../data/tests.json'

const pageIdMap = {
  plan: 'plan-tests',
  recette: 'recette',
  criteres: 'criteres-acceptation',
}

const recetteStatusStyles = {
  passed: 'bg-black text-white',
  in_progress: 'bg-gray-50 text-black border border-black',
  pending: 'bg-white text-gray-400 border border-gray-100',
}

const recetteStatusLabels = {
  passed: 'Validé',
  in_progress: 'En cours',
  pending: 'À faire',
}

export default function TestsPage() {
  const { testId } = useParams()
  const pageId = pageIdMap[testId] || 'plan-tests'
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
      {page.testType === 'plan' && <PlanTests />}
      {page.testType === 'recette' && <RecetteFonctionnelle />}
      {page.testType === 'criteres' && <CriteresAcceptation />}
    </PageLayout>
  )
}

function PlanTests() {
  const { plan } = tests

  return (
    <div className="space-y-8">
      <div className="border border-gray-100 p-4 flex flex-wrap gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400">Version</p>
          <p className="text-sm font-semibold mt-0.5">v{plan.version}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400">Périmètre</p>
          <p className="text-sm mt-0.5">{plan.scope}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400">Mise à jour</p>
          <p className="text-sm mt-0.5">
            {new Date(plan.lastUpdated).toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-4">Environnements de test</h2>
        <div className="border border-gray-100 overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                  Niveau
                </th>
                <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                  Outil
                </th>
                <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                  Couverture
                </th>
              </tr>
            </thead>
            <tbody>
              {plan.environments.map((env) => (
                <tr key={env.name} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 font-medium">{env.name}</td>
                  <td className="px-4 py-3 font-mono text-[12px]">{env.tool}</td>
                  <td className="px-4 py-3 text-gray-400">{env.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {plan.suites.map((suite) => (
        <div key={suite.id}>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-base font-semibold">{suite.name}</h2>
            <span
              className={`text-[11px] font-medium uppercase px-2 py-0.5 border ${
                suite.priority === 'Critique'
                  ? 'bg-black text-white border-black'
                  : 'border-gray-100 text-gray-400'
              }`}
            >
              {suite.priority}
            </span>
          </div>
          <div className="border border-gray-100 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                    ID
                  </th>
                  <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                    Test
                  </th>
                  <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                    Type
                  </th>
                  <th className="text-left px-4 py-2.5 text-[11px] uppercase tracking-wide text-gray-400">
                    Auto
                  </th>
                </tr>
              </thead>
              <tbody>
                {suite.tests.map((test) => (
                  <tr key={test.id} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-mono">{test.id}</td>
                    <td className="px-4 py-3">{test.name}</td>
                    <td className="px-4 py-3 text-gray-400">{test.type}</td>
                    <td className="px-4 py-3">{test.automated ? '✓' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

function RecetteFonctionnelle() {
  const { recette } = tests

  return (
    <div className="space-y-8">
      <div className="border border-gray-100 p-4">
        <p className="text-[13px] text-gray-400">
          Environnement :{' '}
          <code className="font-mono text-black">{recette.environment}</code> · Responsable :{' '}
          {recette.responsable} · v{recette.version}
        </p>
      </div>

      {recette.scenarios.map((scenario) => (
        <div key={scenario.id} className="border border-gray-100">
          <div className="px-5 py-4 border-b border-gray-100 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] text-gray-400">{scenario.id}</p>
              <h2 className="text-base font-semibold mt-0.5">{scenario.title}</h2>
              <p className="text-[13px] text-gray-400 mt-1">Persona : {scenario.persona}</p>
            </div>
            <span
              className={`px-2 py-0.5 text-[11px] font-medium uppercase shrink-0 ${recetteStatusStyles[scenario.status]}`}
            >
              {recetteStatusLabels[scenario.status]}
            </span>
          </div>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Étapes</p>
              <ol className="list-decimal pl-5 space-y-1.5 text-[13px]">
                {scenario.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                Résultat attendu
              </p>
              <p className="text-[13px] leading-relaxed border-l-2 border-black pl-3">
                {scenario.expectedResult}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CriteresAcceptation() {
  const { criteres } = tests

  return (
    <div className="space-y-6">
      <p className="text-[15px] leading-relaxed text-black">
        Definition of Done par feature. Un ticket ne passe en Done que si tous les critères
        de sa feature sont validés en recette staging.
      </p>

      {criteres.map((group) => (
        <div key={group.id} className="border border-gray-100">
          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
            <span className="font-mono text-[12px] text-gray-400">{group.id}</span>
            <h2 className="text-sm font-semibold">{group.feature}</h2>
          </div>
          <ul className="p-5 space-y-2">
            {group.criteres.map((critere, i) => (
              <li key={i} className="flex gap-3 text-[13px]">
                <span className="w-5 h-5 border border-gray-100 flex items-center justify-center shrink-0 text-[11px] text-gray-400">
                  {i + 1}
                </span>
                {critere}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
