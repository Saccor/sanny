import { fightRecord, achievements } from "@/data/mock";

export default function MeriterPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">Meriter</h1>

      {/* Fight Record */}
      <div className="mb-10 p-6 bg-zinc-900 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Fight Record</h2>
        <div className="flex gap-8 text-lg">
          <div>
            <span className="text-zinc-500">Vinster:</span>
            <span className="ml-2 text-green-400 font-bold">{fightRecord.wins}</span>
          </div>
          <div>
            <span className="text-zinc-500">Förluster:</span>
            <span className="ml-2 text-red-400 font-bold">{fightRecord.losses}</span>
          </div>
          <div>
            <span className="text-zinc-500">Oavgjort:</span>
            <span className="ml-2 text-zinc-400 font-bold">{fightRecord.draws}</span>
          </div>
        </div>
        <div className="flex gap-8 mt-4 text-sm text-zinc-400">
          <div>KO: {fightRecord.ko}</div>
          <div>Submission: {fightRecord.sub}</div>
          <div>Decision: {fightRecord.decision}</div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Prestationer</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                {achievement.date && (
                  <span className="text-sm text-zinc-500">
                    {new Date(achievement.date).toLocaleDateString('sv-SE')}
                  </span>
                )}
              </div>
              <div className="flex gap-4 mb-2">
                {achievement.org && (
                  <span className="text-zinc-400">{achievement.org}</span>
                )}
                {achievement.belt && (
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-semibold">
                    {achievement.belt}
                  </span>
                )}
              </div>
              {achievement.description && (
                <p className="text-zinc-400 mt-2">{achievement.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

