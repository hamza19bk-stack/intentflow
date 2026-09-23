/**
 * TEXTES PROPRES À CE SITE — fusionnés par-dessus src/data/content.ts.
 *
 * Laisse l'objet vide pour garder les textes du template.
 * Clés possibles : ui, home, about, services, booking, contact, notFound, offers.
 * Seules les valeurs indiquées remplacent celles du template ; tout le reste est conservé.
 * Pour `offers` (tableau), l'élément N remplace les champs de la N-ième offre.
 *
 * Mêmes règles que content.ts : aucun fait inventé (chiffres, diplômes, avis),
 * aucune promesse commerciale, aucune allégation médicale, ni prix ni tarif.
 *
 * IntentFlow — angle : s'entraîner avec intention. Chaque séance vise une chose
 * précise, chaque exercice doit justifier sa place, rien n'est là pour remplir.
 * (Distinct de la pédagogie : ici on parle du SENS de la séance, pas de son
 * explication.)
 */
import { isSet, nb } from '../lib/utils';
import { site } from './site';

/* Ville ou zone gérée automatiquement par site.ts (jamais écrite en dur ici). */
const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';

export const overrides: Record<string, unknown> = {
  // ================================================================ ACCUEIL
  home: {
    seo: {
      title: place
        ? `Coach sportif à ${place}${nb}: chaque séance a une intention`
        : `Coach sportif${nb}: chaque séance a une intention`,
      description: `Coaching sportif où rien n’est laissé au hasard${nb}: chaque séance vise une chose précise et chaque exercice justifie sa place, en présentiel, en visio ou à distance.`,
    },
    hero: {
      eyebrow: 'S’entraîner avec intention',
      titleLead: 'Rien pour remplir,',
      titleMark: 'tout pour avancer',
      lead: `Une séance part toujours avec une cible${nb}: développer une qualité, consolider un geste, récupérer. Aucun exercice n’est là pour faire nombre, et tu sais à chaque instant ce que celui-ci vient chercher.`,
      visualLabel: 'Une intention par séance',
    },
    highlights: {
      eyebrow: 'L’intention',
      title: 'Chaque séance vise quelque chose',
      subtitle: `Quatre partis pris qui séparent s’entraîner de simplement bouger${nb}: le contenu découle toujours d’une raison.`,
      items: [
        { title: 'L’objectif avant le programme', text: 'Le bilan sert d’abord à formuler ce que tu cherches vraiment. Tant que cette cible n’est pas nette, aucun exercice n’est choisi.' },
        { title: 'Chaque exercice défend sa place', text: 'Un mouvement entre au programme parce qu’il sert ton objectif. S’il n’apporte rien, il en sort, aussi populaire soit-il.' },
        { title: 'Une intention par séance', text: `Force, endurance, mobilité, récupération${nb}: chaque rendez-vous vise une chose et l’assume. Mélanger toutes les qualités dilue l’effet de chacune.` },
        { title: 'Du temps employé, pas occupé', text: 'Ton créneau n’est pas extensible, il va donc à ce qui compte. Pas d’échauffement interminable ni de série ajoutée pour faire durer la séance.' },
      ],
    },
    offers: {
      eyebrow: 'Les services',
      title: 'Le format qui sert ton objectif',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'De l’intention au geste',
      subtitle: 'Quatre étapes qui relient ce que tu veux atteindre à ce que tu fais réellement, une fois en séance.',
      steps: [
        { title: 'La cible', text: `On formule ton objectif en une phrase nette, avec les contraintes de ton quotidien. Cette phrase sert ensuite de filtre${nb}: tout ce qui ne la sert pas ne rentre pas.` },
        { title: 'La construction', text: 'Chaque séance reçoit son intention propre, puis les exercices sont retenus un par un pour la servir. L’ordre, les séries et les temps de repos découlent de ce choix.' },
        { title: 'L’exécution', text: 'En séance, tu sais ce qui est visé et donc où placer ton effort. Le reste passe volontairement au second plan, ce jour-là.' },
        { title: 'La vérification', text: 'On regarde si les séances ont produit ce qu’elles visaient. Ce qui sert reste, ce qui n’apporte rien laisse la place à autre chose.' },
      ],
    },
    cta: {
      eyebrow: 'Premier pas',
      title: `Quelle est ta cible${nb}?`,
      lead: 'Une première séance pour formuler ce que tu cherches vraiment, puis transformer cette intention en séances qui y mènent.',
    },
  },

  // =============================================================== À PROPOS
  about: {
    seo: {
      title: `À propos${nb}: un coach sportif qui ne fait rien au hasard`,
      description: `Une approche du coaching sportif guidée par l’intention${nb}: une cible claire, des exercices retenus pour une raison et un plan débarrassé de tout ce qui ne sert pas.`,
    },
    hero: {
      eyebrow: 'À propos',
      titleLead: 'Un entraînement',
      titleMark: 'qui va quelque part',
      lead: `Beaucoup de programmes additionnent des exercices sans qu’aucun ne sache ce qu’il fait là. Le parti pris ici est l’inverse${nb}: on part de la cible, et rien n’entre dans la séance sans une raison de s’y trouver.`,
    },
    approach: {
      eyebrow: 'L’approche',
      title: 'Quatre convictions de travail',
      subtitle: 'Elles décident de ce qui entre dans une séance et de ce qui n’y entre pas, du premier échange au suivi dans la durée.',
      steps: [
        { title: 'Une cible avant tout', text: 'Un entraînement sans destination finit par tourner en rond. La première tâche est de rendre ton objectif assez net pour qu’il guide les choix concrets.' },
        { title: 'Le superflu ne rentre pas', text: `Chaque exercice doit répondre à une question simple${nb}: à quoi sert-il ici, aujourd’hui. Sans réponse, il ne figure pas au programme.` },
        { title: 'L’effort placé, pas dispersé', text: 'Vouloir tout travailler en même temps revient à ne rien travailler vraiment. Chaque séance concentre l’énergie sur une intention dominante.' },
        { title: 'Les intentions évoluent', text: 'Ce que ton entraînement doit viser change avec ta progression et tes contraintes. La cible se relit régulièrement, et le contenu suit.' },
      ],
    },
    philosophy: {
      eyebrow: 'La philosophie',
      title: 'Exigeant sur le sens, souple sur la forme',
      subtitle: 'Trois principes qui décident du contenu de chaque séance, du premier bilan au suivi dans la durée.',
      items: [
        { title: 'Utile avant d’être intense', text: 'Une séance épuisante mais sans direction ne vaut pas une séance mesurée qui sert précisément ton objectif. L’intensité est un moyen, jamais une preuve.' },
        { title: 'Une direction assumée', text: 'Tu sais ce que vise chaque rendez-vous. Si un objectif nous paraît hors de portée ou mal choisi, on te le dit franchement plutôt que d’empiler des exercices.' },
        { title: 'Moins d’exercices, mieux placés', text: 'Un programme court dont chaque élément a une fonction tient mieux dans la durée qu’une longue liste dont personne ne connaît l’usage.' },
      ],
      commitmentsTitle: 'Ce que tu trouveras ici',
      commitments: [
        'Un objectif formulé avec toi, en une phrase que l’on peut suivre.',
        'Une intention annoncée pour chaque séance.',
        'Des exercices retenus parce qu’ils servent cette intention.',
        'Un plan que l’on allège dès qu’un élément devient inutile.',
      ],
      notHereTitle: 'Ce que tu ne trouveras pas ici',
      notHere: [
        'Des exercices ajoutés pour remplir la durée d’une séance.',
        'Des mouvements à la mode retenus sans raison précise.',
        'Des programmes qui visent tout en même temps.',
        `Des conseils médicaux${nb}: pour toute question de santé, ton médecin reste l’interlocuteur de référence.`,
      ],
      quote: `«${nb}Un exercice qui ne sert pas ton objectif te vole du temps sur celui qui le sert.${nb}»`,
    },
    values: {
      eyebrow: 'Les valeurs',
      title: 'Ce qui guide chaque choix',
      subtitle: 'Des repères valables dès la première séance et tout au long de l’accompagnement.',
      items: [
        { title: 'Écoute', text: 'Une intention juste ne se devine pas. Tes envies, tes contraintes et ton rythme de vie orientent la cible autant que ton objectif affiché.' },
        { title: 'Sélection', text: 'Retenir un exercice, c’est en écarter plusieurs autres. Ce tri est assumé, et tu sais toujours ce que la séance du jour vise.' },
        { title: 'Franchise', text: 'Si une envie va à l’encontre de ton objectif, on le dit. Mieux vaut un désaccord clair qu’un programme qui ménage tout le monde.' },
        { title: 'Cohérence', text: 'Les séances s’enchaînent dans une même direction. Chacune prend appui sur la précédente au lieu de repartir de rien.' },
      ],
    },
    formats: {
      eyebrow: 'Travailler ensemble',
      title: 'Plusieurs formats, une même exigence de sens',
      subtitle: `Le cadre change selon ta situation${nb}; l’intention derrière chaque séance, jamais.`,
      texts: {
        inPerson: 'Des séances individuelles en salle, à domicile ou en extérieur, où l’intention du jour est annoncée puis tenue du début à la fin.',
        online: 'En visio, la séance garde la même cible et la même structure, avec des corrections en direct et le minimum de matériel.',
        remote: 'Un programme écrit où chaque séance porte son intention et chaque exercice sa fonction, revu à chaque fin de cycle.',
      },
    },
    cta: {
      eyebrow: 'La suite',
      title: `Où veux-tu aller${nb}?`,
      lead: 'Dis-nous ce que tu cherches vraiment, même formulé maladroitement. C’est de là que part tout le reste.',
    },
  },

  // =============================================================== SERVICES
  services: {
    seo: {
      title: `Services de coaching sportif${nb}: des séances qui visent juste`,
      description: `Coaching individuel en présentiel ou en visio, programme d’entraînement à distance et repères nutritionnels${nb}: des formats de coaching sportif où chaque séance poursuit une intention précise.`,
    },
    hero: {
      eyebrow: 'Les services',
      titleLead: 'Des formats différents,',
      titleMark: 'la même exigence de sens',
      lead: `Le cadre change, la règle ne bouge pas${nb}: on part de ta cible, on retient les exercices qui la servent et on écarte le reste. Le plan est ensuite relu à mesure que ton objectif se précise.`,
    },
    offers: {
      eyebrow: 'Le détail',
      title: 'Choisis le cadre, garde la direction',
    },
    common: {
      eyebrow: 'Quel que soit le format',
      title: 'Ce qui ne change jamais',
      subtitle: `Quatre repères communs à chaque accompagnement${nb}: ils garantissent qu’aucune séance ne se déroule sans savoir pourquoi.`,
      items: [
        { title: 'Une cible posée au départ', text: 'Aucune séance ne démarre avant d’avoir formulé ton objectif et la manière d’en suivre l’évolution. C’est ce point qui décide de tout le contenu.' },
        { title: 'Un plan que l’on allège', text: 'Le programme est relu régulièrement. Ce qui a rempli sa fonction sort, ce qui manque entre. Rien ne reste par habitude.' },
        { title: 'Une intention annoncée', text: `Tu veux savoir pourquoi cette séance et pas une autre${nb}? Tu poses la question directement à ton coach, et la réponse est nette.` },
        { title: 'Des repères choisis', text: `Charges, répétitions, souffle, aisance sur un geste${nb}: on suit les indicateurs liés à ta cible, pas une liste standard de mesures.` },
      ],
    },
    process: {
      eyebrow: 'Comment ça se passe',
      title: 'De la cible à la première séance',
      subtitle: `Aucune étape improvisée${nb}: tu sais dès le départ comment la direction se fixe, puis se tient.`,
      steps: [
        { title: 'Le premier échange', text: 'Tu réserves ou tu écris. On parle de ce que tu veux atteindre, de ce que tu as déjà tenté et de ce que ton quotidien permet réellement.' },
        { title: 'Le cadrage', text: 'Habitudes, niveau de départ, matériel, points de vigilance. Ton objectif est reformulé jusqu’à devenir assez précis pour guider des choix concrets.' },
        { title: 'La sélection', text: 'Format, fréquence réaliste, intention de chaque séance, enchaînement des cycles. Chaque élément retenu l’est parce qu’il sert la cible.' },
        { title: 'L’entraînement et les points d’étape', text: `Les séances s’enchaînent dans la même direction. En fin de cycle, on tranche${nb}: ce qui a fonctionné reste, le reste cède la place.` },
      ],
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: `Tu ne sais pas encore ce que tu vises${nb}?`,
      lead: 'C’est justement le travail de la première séance. On formule ta cible ensemble, puis on choisit le format qui la sert le mieux.',
    },
  },

  // ============================================================ RÉSERVATION
  booking: {
    seo: {
      title: `Réservation${nb}: une séance de coaching sportif pour poser ta cible`,
      description: `Réserve ta première séance de coaching sportif${nb}: un bilan, un objectif formulé nettement et une direction de travail que tu pourras suivre.`,
    },
    hero: {
      eyebrow: 'Réservation',
      titleLead: 'Tout commence',
      titleMark: 'par une direction',
      lead: `Une séance pour transformer une envie floue en objectif utilisable. Pas de test d’entrée, pas de discours commercial${nb}— un bilan honnête et une direction que tu pourras suivre.`,
    },
    cta: {
      eyebrow: 'Dernier détail',
      title: 'Une séance pour savoir où tu vas',
      lead: 'Tu repars avec une cible formulée nettement et les premiers choix d’entraînement qui en découlent.',
    },
  },

  // ================================================================ CONTACT
  contact: {
    seo: {
      title: `Contact${nb}: parler de ton objectif à un coach sportif`,
      description: `Une question sur le coaching sportif ou sur la direction à prendre${nb}? Écris, appelle ou réserve directement ta séance.`,
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: `Tu as un objectif${nb}?`,
      titleMark: 'Disons-le clairement',
      lead: `Pas de formulaire anonyme${nb}: tu écris ou tu appelles, et ton coach te répond. Décris ce que tu voudrais atteindre, même maladroitement${nb}— on verra ensemble ce que cela implique.`,
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: 'Une question se règle vite, une direction se choisit',
      lead: `Pour un point précis, écris-nous. Pour savoir où mettre ton effort, réserve plutôt une première séance${nb}: c’est là que la cible se dessine.`,
    },
  },

  // ================================================================= OFFRES
  offers: [
    {
      summary: `Une séance en tête-à-tête avec une intention annoncée${nb}: posture corrigée en direct et effort placé là où il sert ton objectif.`,
      description:
        'Ton coach est à tes côtés du premier au dernier mouvement. L’intention de la séance est posée dès l’échauffement, la posture est corrigée en direct et chaque exercice occupe sa place parce qu’il sert la cible du jour.',
      includes: [
        `Bilan de départ${nb}: objectif, habitudes, niveau d’activité`,
        'Séances en salle, à domicile ou en extérieur, selon la zone couverte',
        'Une intention dominante annoncée pour chaque rendez-vous',
        `Points d’étape réguliers${nb}: ce que la séance visait, ce qu’elle a produit`,
      ],
      forWho:
        'Tu t’entraînes déjà ou tu reprends, et tu en as assez d’enchaîner des exercices sans savoir ce qu’ils poursuivent.',
    },
    {
      summary: `La même direction à distance${nb}: une séance guidée en direct, avec une cible claire, où que tu sois.`,
      description:
        'Caméra allumée, la séance est menée en direct depuis l’endroit où tu te trouves. La cible du jour est annoncée, les temps de repos sont tenus parce qu’ils comptent pour cette cible, et les mouvements sont observés puis ajustés série après série.',
      includes: [
        'Séance guidée en direct, échauffement et retour au calme compris',
        'Exercices retenus selon le matériel disponible et l’intention du jour',
        'Consignes pour bien t’installer face à la caméra',
        'Ce que la séance suivante ira chercher',
      ],
      forWho:
        'Tes horaires bougent ou tu te déplaces, et tu veux malgré tout des séances qui poursuivent une direction au lieu de meubler.',
    },
    {
      summary: `Un plan écrit où chaque séance porte son intention${nb}: séries, temps de repos et progression découlent de ta cible.`,
      description:
        'Un programme construit à partir de ton objectif, de ton niveau et du matériel dont tu disposes. Chaque séance annonce ce qu’elle vise, et chaque exercice y figure parce qu’il contribue à ce but. Le plan est revu en fin de cycle, et l’on retire ce qui a cessé de servir.',
      includes: [
        `Entretien de cadrage${nb}: objectif, contraintes, matériel`,
        'Une intention dominante par séance, écrite noir sur blanc',
        'Exercices de remplacement qui servent la même intention',
        'Révision du plan en fin de cycle, d’après tes retours',
      ],
      forWho:
        'Tu t’entraînes en autonomie, mais tes séances s’empilent sans logique d’ensemble et tu ne sais plus ce que chacune poursuit.',
    },
    {
      summary: `Des repères d’hygiène alimentaire choisis pour ton entraînement${nb}: pas de régime, pas d’aliment interdit.`,
      description:
        'Aucun régime, aucun aliment interdit, aucune pesée à chaque repas. On part de ce que tu manges déjà et on retient quelques repères généraux d’hygiène alimentaire qui soutiennent réellement l’intention de tes séances, sans ajouter de règles décoratives.',
      includes: [
        'Point sur tes habitudes actuelles, sans jugement',
        'Repères simples pour composer tes repas au quotidien',
        'Organisation des repas autour des séances et des jours de repos',
        'Idées de repas rapides et de courses réalistes',
      ],
      forWho:
        'Tu t’entraînes régulièrement et tu veux que ton alimentation serve ton objectif, plutôt que d’accumuler des règles sans savoir à quoi elles répondent.',
    },
  ],
};
