export default function Article() {
  return (
    <>
      <p className="text-base leading-relaxed text-muted-foreground">
        Lancer une code review en une commande. Forcer Claude à analyser avant
        de coder. Paralléliser des tâches sur 15 fichiers sans perdre une ligne
        de contexte. Tout ça vit dans{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          ~/.claude/
        </code>{" "}
        — quelques fichiers{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .md
        </code>{" "}
        et une commande CLI. Voici les 4 couches de personnalisation que
        j&apos;utilise au quotidien.
      </p>

      {/* ── MCP ───────────────────────────────────────────── */}

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Les MCP Servers : corriger la faiblesse n°1 de l&apos;IA
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        La majorité des erreurs de Claude ne viennent pas de sa logique, mais de
        sa documentation obsolète. Tu demandes d&apos;implémenter une feature
        avec la dernière version d&apos;une lib, il te sort la syntaxe
        d&apos;il y a deux ans. Les MCP (Model Context Protocol) règlent ça :
        ils connectent Claude à des sources de données externes en temps réel.
        J&apos;utilise{" "}
        <strong className="text-foreground">Context7</strong> — quand Claude a
        besoin de la doc d&apos;une librairie, il la récupère à la source au
        lieu de deviner.
      </p>

      <div className="mt-6 rounded-lg border border-border p-5">
        <p className="text-sm font-semibold text-foreground">
          Comment Installer un MCP
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Tu peux taper{" "}
          <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
            /mcp
          </code>{" "}
          dans Claude Code pour voir les MCP actifs sur ta session. Pour en
          ajouter un, la méthode recommandée est de passer par le CLI :
        </p>
        <div className="mt-3 overflow-x-auto rounded bg-accent/50 p-3">
          <pre className="text-xs leading-relaxed text-foreground/80">
{`# Ajouter un MCP globalement (disponible sur tous les projets)
claude mcp add context7 -- npx -y @upstash/context7-mcp
`}
          </pre>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Context7 est aussi disponible dans le marketplace intégré via{" "}
          <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
            /install-plugin context7
          </code>
          . Pour un MCP spécifique à un projet, un fichier{" "}
          <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
            .mcp.json
          </code>{" "}
          à la racine du repo fonctionne aussi.
        </p>
      </div>

      {/* ── SKILLS ────────────────────────────────────────── */}

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Les Skills : des compétences automatiques
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Des fichiers{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .md
        </code>{" "}
        qui transforment Claude en spécialiste sur une tâche donnée : auditer
        l&apos;accessibilité selon les normes RGAA, valider les best practices
        React, etc. En pratique, la liste des skills disponibles est injectée
        dans le contexte système de Claude — c&apos;est comme ça qu&apos;il
        sait ce qu&apos;il a à disposition et qu&apos;il peut décider seul de
        les invoquer quand il juge le contexte pertinent.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Le problème : ce déclenchement automatique ne fonctionne pas toujours comme on l'aimerait. Un skill
        peut ne jamais s&apos;activer dans une situation ou ça aurait eu un apport. Les commands résolvent très bien ce problème. On peut explicitement dire dans le .md d'une commande d'utiliser un ou plusieurs skills en rapport avec cette tâche pour améliorer la qualité du prompt.
      </p>

      {/* ── COMMANDS ──────────────────────────────────────── */}

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Les Commands : des actions claires, et des skills utilisés
      </h2>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/blog/commands.png"
        alt="Dossier ~/.claude/commands/ contenant les fichiers .md de commandes personnalisées"
        className="mt-6 w-[40%] rounded-lg border border-border"
      />
      <p className="mt-2 text-xs text-muted-foreground/60">
        Le dossier commands/ — chaque fichier .md devient une commande /slash
      </p>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Les commands permettent d&apos;exécuter des actions précises à la
        demande. Tu tapes{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /nom-de-la-commande
        </code>{" "}
        dans Claude Code et il exécute exactement les instructions que tu as
        définies dans un fichier{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .md
        </code>
        . Le nom du fichier devient le nom de la commande :{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          review.md
        </code>{" "}
        →{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /review
        </code>
        . Comme les actions sont claires et explicites, chaque commande est
        dédiée à une tâche précise — et c&apos;est un très bon endroit pour
        préciser à l&apos;intérieur qu&apos;on veut utiliser tel ou tel skill
        en rapport avec cette tâche.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-foreground">
        Mes commandes
      </h3>

      <div className="mt-4 space-y-4">
        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            /review — Code review sur 4 axes
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Analyse le code modifié (via{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              git diff
            </code>
            ) selon 4 axes avec score et points d&apos;action priorisés.
          </p>
          <div className="mt-3 overflow-x-auto rounded bg-accent/50 p-3">
            <pre className="text-xs leading-relaxed text-foreground/80">
{`| Axe              | Score | Commentaire           |
|------------------|-------|-----------------------|
| Best practices   | 4/5   | Server components OK  |
| Performance      | 3/5   | Images non optimisées |
| Sécurité         | 5/5   | RAS                   |
| Accessibilité    | 2/5   | alt manquants         |

Points à corriger :
1. [Important] hero-section.tsx:42 — alt vide sur <img>
2. [Perf] gallery.tsx:7 — <img> sans next/image
3. [Mineur] navbar.tsx:18 — div cliquable → button`}
            </pre>
          </div>
        </div>

        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            /brain — Brainstorm UX/UI
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Explore des directions de design avant de coder. Génère des
            propositions comparées avec analyse des compromis.
          </p>
        </div>

        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            /ap, /apa, /apac — Analyse avant action
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Trois niveaux pour empêcher Claude de coder immédiatement :{" "}
            <strong className="text-foreground">/ap</strong> analyse et
            planifie,{" "}
            <strong className="text-foreground">/apa</strong> ajoute des
            questions pour lever les ambiguïtés,{" "}
            <strong className="text-foreground">/apac</strong> crée en plus un
            fichier de suivi pour les features complexes.
          </p>
        </div>
      </div>

      {/* ── AGENTS ────────────────────────────────────────── */}

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Les Agents : paralléliser sans perdre de contexte
      </h2>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/blog/agents.png"
        alt="Dossier ~/.claude/agents/ contenant les fichiers .md d'agents personnalisés"
        className="mt-6 w-[40%] rounded-lg border border-border"
      />
      <p className="mt-2 text-xs text-muted-foreground/60">
        Le dossier agents/ — des sous-processus avec leur propre contexte
      </p>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Des fichiers{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .md
        </code>{" "}
        dans{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          ~/.claude/agents/
        </code>{" "}
        qui définissent des sous-processus avec leur propre contexte isolé.
        Quand ta fenêtre de contexte se remplit sur une feature complexe, chaque
        recherche ou tâche annexe la consomme davantage. Les agents résolvent
        ça : Claude lance un processus dédié qui travaille en parallèle sans
        toucher au contexte principal.
      </p>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Chaque agent peut utiliser un modèle spécifique. Haiku par exemple est peu couteux et bien pour des tâches rapides, Opus pour celles qui demandent plus de
        réflexion.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-foreground">
        Mes agents
      </h3>

      <div className="mt-4 space-y-3">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">websearch</strong> — recherche
            web rapide sans polluer le contexte. Exemple :{" "}
            <em>&quot;compare les approches de cache Redis vs Memcached pour
            Next.js&quot;</em>
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">explore-docs</strong> —
            documentation de librairies en temps réel via Context7
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">explore-codebase</strong> —
            exploration de code, imports et dépendances entre modules
          </span>
        </p>
      </div>

      <h3 className="mt-8 text-lg font-semibold text-foreground">
        En pratique
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Tu bosses sur une feature et tu dois traduire tous les fichiers de
        langue en prenant{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          french.ts
        </code>{" "}
        comme référence — un agent par fichier, en parallèle, pendant que tu
        continues ton travail principal. Le contexte de ta feature reste intact.
      </p>

      {/* ── DOWNLOAD ──────────────────────────────────────── */}

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Télécharger mon setup
      </h2>
      <div className="mt-4 space-y-3">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">5 commands</strong> — à placer
            dans{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              ~/.claude/commands/
            </code>{" "}
            (global) ou{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              .claude/commands/
            </code>{" "}
            (projet)
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">3 agents</strong> — à placer
            dans{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              ~/.claude/agents/
            </code>{" "}
            (global) ou{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              .claude/agents/
            </code>{" "}
            (projet)
          </span>
        </p>
      </div>

      <a
        href="/downloads/claude-setup.zip"
        download
        className="mt-7 mb-3 inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Télécharger claude-setup.zip
      </a>

      {/* ── CONCLUSION ────────────────────────────────────── */}

      <h2 className="mt-10 text-2xl font-bold text-foreground">En résumé</h2>
      <div className="mt-4 space-y-3">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">MCP</strong> — Documentation à
            jour en temps réel
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Skills</strong> — Compétences
            spécialisées automatiques
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Commands</strong> — Déclenchement
            manuel et prévisible
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Agents</strong> —
            Parallélisation sans perte de contexte
          </span>
        </p>
      </div>
    </>
  );
}
