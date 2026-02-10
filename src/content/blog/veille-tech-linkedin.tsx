export default function Article() {
  return (
    <>
      <p className="text-base leading-relaxed text-muted-foreground">
        LinkedIn est devenu un canal de veille technologique pour beaucoup de
        développeurs. Le problème, c&apos;est que l&apos;algorithme de la
        plateforme favorise le reach et l&apos;engagement émotionnel, pas la
        rigueur. Résultat : on se retrouve à consommer des prédictions
        alarmistes toutes les semaines sans jamais vérifier les chiffres
        derrière.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Le cycle de la panique tech
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Il y a un mois, ChatGPT Atlas était présenté comme un &quot;Google
        killer&quot; par une bonne partie de la communauté tech sur LinkedIn.
        Aujourd&apos;hui, plus personne n&apos;en parle. Ce schéma se répète en
        boucle : un nouvel outil sort, les posts alarmistes se multiplient, puis
        le silence reprend jusqu&apos;à la prochaine annonce.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        La peur génère des clics, et l&apos;algorithme met en avant ce qui
        génère des clics. On se retrouve donc avec une nouvelle &quot;fin du
        web&quot; ou une &quot;mort du SEO&quot; toutes les semaines, sans que
        personne ne prenne le temps de regarder ce que disent réellement les
        données.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Ce que disent vraiment les chiffres
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Quand on creuse les données souvent citées dans ces posts viraux, on
        découvre une réalité bien plus nuancée.
      </p>

      <div className="mt-6 space-y-6">
        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            &laquo; 1 clic utilisateur pour 300 000 requêtes de bots chez
            Anthropic &raquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Ce chiffre vient de Cloudflare Radar et concerne un service IA
            précis. Il ne reflète en rien le trafic web global. L&apos;extrapoler
            à l&apos;ensemble du web est une erreur méthodologique, mais
            c&apos;est exactement ce que font la plupart des posts LinkedIn qui
            le citent.
          </p>
        </div>

        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            &laquo; Plus de 50% du trafic web mondial en 2025 sont des
            bots &raquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            C&apos;est vrai, mais il faut décomposer ce chiffre. Environ 80% de
            ce trafic bot est lié à l&apos;entraînement de modèles IA, et 18%
            concerne de l&apos;optimisation technique (crawling, indexation).
            Ce n&apos;est pas du trafic qui remplace les recherches utilisateur
            — c&apos;est du trafic de fond qui a toujours existé sous
            différentes formes.
          </p>
        </div>

        <div className="rounded-lg border border-border p-5">
          <p className="text-sm font-semibold text-foreground">
            &laquo; L&apos;IA représente déjà une part massive du
            trafic &raquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            En réalité, environ 1% du trafic mondial est lié à de vraies
            recherches effectuées via des outils IA. Et même ce 1% est gonflé :
            une seule question posée par un utilisateur sur ChatGPT peut générer
            jusqu&apos;à 15 requêtes de bot en arrière-plan. Ce qui compte,
            c&apos;est le volume d&apos;usage réel, pas le trafic technique
            généré.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Les paniques tech ne sont pas nouvelles
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Ce phénomène n&apos;a rien de spécifique à 2025. L&apos;industrie tech
        a toujours connu des vagues de prédictions catastrophistes qui ne se
        sont jamais réalisées.
      </p>
      <ul className="mt-4 space-y-3">
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">2008</strong> — HTML5 allait
            &quot;remplacer JavaScript&quot; parce qu&apos;on pouvait
            écrire{" "}
            <code className="rounded bg-accent px-1.5 py-0.5 text-xs text-foreground">
              {"<input type=\"email\" />"}
            </code>
            . JavaScript est aujourd&apos;hui plus utilisé que jamais.
          </span>
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">2012</strong> — Google+ allait
            &quot;tuer Facebook&quot;. Le service a été fermé en 2019 faute
            d&apos;utilisateurs.
          </span>
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
          <span>
            <strong className="text-foreground">2025</strong> —
            &quot;C&apos;est la fin du SEO&quot;, &quot;L&apos;IA va remplacer
            les développeurs&quot;. Les mêmes schémas, les mêmes raccourcis.
          </span>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        Le vrai ennemi : la guerre de l&apos;attention
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Le problème n&apos;est pas l&apos;innovation. C&apos;est le bruit qui
        l&apos;entoure. Quand on consomme ce flux de prédictions anxiogènes
        sans filtre, on finit par devenir défaitiste. On ne comprend plus ses
        propres métriques, on perd confiance dans ses choix techniques, et on
        est tenté de tout remettre en question à chaque nouvelle annonce.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        À l&apos;inverse, prendre le temps de creuser les données pendant que
        le reste de la communauté s&apos;affole permet d&apos;identifier les
        vrais enjeux et de garder son énergie pour ce qui compte : monter en
        compétences, construire des projets solides, et prendre des décisions
        techniques éclairées.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-foreground">
        En résumé
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        On vit une période d&apos;innovation intense, et c&apos;est une bonne
        chose. Mais la qualité de sa veille technologique détermine la qualité
        de ses décisions. LinkedIn n&apos;est pas un outil de veille fiable :
        c&apos;est une plateforme d&apos;engagement. Pour faire de la veille
        sérieuse, il vaut mieux aller directement aux sources — rapports,
        données brutes, documentation — et se méfier des raccourcis
        émotionnels qui font le buzz.
      </p>
    </>
  );
}
