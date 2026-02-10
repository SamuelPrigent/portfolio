export default function Article() {
  return (
    <>
      <p className="text-base leading-relaxed text-muted-foreground">
        Depuis quelques semaines, les &quot;skills&quot; Claude Code font le buzz.
        Des fichiers Markdown partagés par la communauté qui se déclenchent
        automatiquement quand certaines conditions sont remplies. C&apos;est
        intéressant, mais il existe une fonctionnalité bien plus puissante et
        sous-exploitée : les commandes custom.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Skills vs Commandes : quelle différence ?
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Les skills sont des fichiers{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .md
        </code>{" "}
        placés dans un dossier spécifique. Claude Code les déclenche
        automatiquement quand il juge que le contexte correspond. En théorie,
        c&apos;est pratique. En pratique, le déclenchement est souvent
        imprévisible : une skill peut ne jamais être appelée, ou se déclencher
        au mauvais moment.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Les commandes custom, elles, se déclenchent quand <strong className="text-foreground">vous</strong> le
        décidez. Vous tapez{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /nom-de-la-commande
        </code>{" "}
        et Claude exécute exactement les instructions que vous avez définies.
        Pas d&apos;ambiguïté, pas de surprise. C&apos;est vous qui gardez le
        contrôle.
      </p>

      <div className="mt-6 rounded-lg border border-border p-5">
        <p className="text-sm font-semibold text-foreground">En résumé</p>
        <div className="mt-3 space-y-2">
          <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
            <span>
              <strong className="text-foreground">Skill</strong> — déclenchement
              automatique, dépend du bon vouloir de Claude
            </span>
          </p>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
            <span>
              <strong className="text-foreground">Commande</strong> —
              déclenchement manuel, prévisible, composable
            </span>
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Comment créer une commande custom
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Il suffit de créer un fichier{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .md
        </code>{" "}
        dans le dossier{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          ~/.claude/commands/
        </code>{" "}
        pour une commande globale, ou dans{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          .claude/commands/
        </code>{" "}
        à la racine de votre projet pour une commande locale. Le nom du fichier
        devient le nom de la commande. Par exemple,{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          review.md
        </code>{" "}
        donne la commande{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /review
        </code>
        .
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Le contenu du fichier est un prompt Markdown structuré. Vous pouvez
        utiliser la variable{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          $ARGUMENTS
        </code>{" "}
        pour récupérer ce que l&apos;utilisateur tape après le nom de la
        commande. Par exemple,{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /review src/components/
        </code>{" "}
        passera{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          src/components/
        </code>{" "}
        dans{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          $ARGUMENTS
        </code>
        .
      </p>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Exemple concret : la famille /ap
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        J&apos;utilise au quotidien trois commandes qui partagent la même base
        mais ajoutent progressivement des étapes. L&apos;idée est simple :
        empêcher Claude de coder tout de suite et le forcer à analyser
        d&apos;abord.
      </p>

      <div className="mt-6 space-y-6">
        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            /ap — Analyse + Plan
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Claude parcourt l&apos;architecture du projet, identifie les fichiers
            impactés, évalue les risques de régression, puis propose un plan
            d&apos;action structuré. Il pose ensuite ses questions avant de
            toucher au code.
          </p>
          <div className="mt-3 rounded bg-accent/50 p-3">
            <code className="text-xs text-foreground/80">
              /ap ajouter un système de cache Redis sur les endpoints API
            </code>
          </div>
        </div>

        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            /apa — Analyse + Plan + Ask
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Identique à{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              /ap
            </code>
            , avec un accent renforcé sur la phase de questions. Claude est
            explicitement instruit d&apos;éviter les suppositions et de poser
            toutes ses questions avant d&apos;avancer.
          </p>
        </div>

        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            /apac — Analyse + Plan + Ask + Create
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            La version complète. En plus de l&apos;analyse et des questions,
            Claude crée un fichier{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              .md
            </code>{" "}
            dans un dossier{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              private/
            </code>{" "}
            avec le plan détaillé. Ce fichier évolue au fil des échanges
            jusqu&apos;à validation. Pratique pour les features complexes où on
            veut garder une trace écrite du raisonnement.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Exemple concret : /review
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Une commande de code review automatisée qui analyse le code selon 5
        axes : best practices React/Next.js, performance, sécurité, qualité du
        code, et accessibilité. Elle produit un rapport structuré avec un score
        par axe et des points d&apos;action priorisés.
      </p>
      <div className="mt-4 rounded bg-accent/50 p-3">
        <code className="text-xs text-foreground/80">
          /review src/components/hero-section.tsx
        </code>
      </div>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Sans arguments, la commande détecte automatiquement les fichiers
        modifiés via{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          git diff
        </code>{" "}
        et review ceux-là. Avec un chemin en argument, elle cible exactement ce
        que vous voulez analyser. Le rapport produit ressemble à ça :
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border p-5">
        <pre className="text-xs leading-relaxed text-muted-foreground">
{`| Axe              | Score | Commentaire           |
|------------------|-------|-----------------------|
| Best practices   | 4/5   | Server components OK  |
| Performance      | 3/5   | Images non optimisées |
| Sécurité         | 5/5   | RAS                   |
| Qualité          | 4/5   | Nommage cohérent      |
| Accessibilité    | 2/5   | alt manquants         |

Points à corriger :
1. [Important] hero-section.tsx:42 — alt vide
2. [Mineur] navbar.tsx:18 — div cliquable → button`}
        </pre>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Pourquoi c&apos;est puissant
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Le vrai intérêt des commandes custom, c&apos;est qu&apos;elles
        transforment Claude Code en outil méthodologique. Au lieu de demander
        vaguement &quot;analyse ce code&quot; et d&apos;obtenir une réponse
        générique, vous définissez exactement la méthodologie que vous voulez
        voir appliquée.
      </p>

      <div className="mt-6 space-y-3">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Reproductibilité</strong> — La
            même commande donne toujours le même niveau de rigueur. Pas de
            variation selon l&apos;humeur du prompt.
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Composabilité</strong> — Vous
            pouvez enchaîner{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              /apac
            </code>{" "}
            pour planifier, puis{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              /review
            </code>{" "}
            pour vérifier le résultat. Chaque commande fait une chose bien.
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Contrôle</strong> — Contrairement
            aux skills qui se déclenchent (ou pas) selon le contexte, vous
            décidez quand et sur quoi appliquer chaque commande.
          </span>
        </p>
        <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">Évolutivité</strong> — Une
            commande est un fichier Markdown. Vous pouvez la versionner, la
            partager, l&apos;améliorer au fil du temps.
          </span>
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Idées de commandes à créer
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Les possibilités sont infinies. Voici quelques pistes pour vous
        inspirer :
      </p>
      <ul className="mt-4 space-y-3">
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">/test</strong> — Génère des
            tests unitaires pour un composant ou un module en suivant vos
            conventions (Vitest, testing-library, etc.)
          </span>
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">/refactor</strong> — Analyse un
            fichier et propose un refactoring ciblé avec justification de chaque
            changement
          </span>
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">/migrate</strong> — Guide une
            migration de librairie étape par étape (par exemple, passage de
            Pages Router à App Router)
          </span>
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">/doc</strong> — Génère une
            documentation technique d&apos;un module en analysant le code source
            et les types
          </span>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        En résumé
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Les skills Claude Code ont leur utilité, mais les commandes custom sont
        l&apos;outil qui change réellement la manière de travailler avec
        l&apos;IA. Elles permettent de définir des workflows précis,
        reproductibles et déclenchés à la demande. Au lieu de subir le
        comportement par défaut de l&apos;IA, vous le cadrez. Et la différence
        de qualité dans les résultats est significative.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Si vous utilisez Claude Code sans commandes custom, vous passez à côté
        de sa fonctionnalité la plus puissante. Commencez par une commande
        simple — un{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /review
        </code>{" "}
        ou un{" "}
        <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
          /ap
        </code>{" "}
        — et itérez.
      </p>
    </>
  );
}
