import PageLayout from '../../components/PageLayout'
import CodeBlock from '../../components/CodeBlock'
import database from '../../data/database.json'

export default function SqlPage() {
  return (
    <PageLayout pageId="schema-sql">
      <div className="space-y-4 -mx-0 max-w-none">
        <p className="text-[15px] leading-relaxed text-black max-w-[720px]">
          Script SQL complet pour initialiser la base de données PostgreSQL de Dryvea. Inclut les
          types ENUM, contraintes CHECK, index et trigger de mise à jour automatique.
        </p>
        <CodeBlock code={database.sqlSchema} language="sql" />
      </div>
    </PageLayout>
  )
}
