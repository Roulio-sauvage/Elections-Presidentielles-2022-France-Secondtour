/*ELEMENTS HTML*/

//template
const title = document.getElementById("title")
const source_et_contact = document.getElementById("source_et_contact")

//accueil
const err = document.getElementById("err")
const contexte = document.getElementById("contexte")
const texte_lp = document.getElementById("texte_lp")
const texte_mc = document.getElementById("texte_mc")
const plus_dinfos = document.getElementById("plus_dinfos")
const photo_lp = document.getElementById("photo_lp")
const photo_mc = document.getElementById("photo_mc")
const qcsoupas = document.getElementById("qcsoupas")
const go = document.getElementById("go")
const resultac = document.getElementById("resultac")
const la = [contexte,texte_lp,texte_mc,plus_dinfos,photo_lp,photo_mc,qcsoupas,go,resultac,err]

//pre_qcs

const pre_qcs = document.getElementById("pre_qcs")
const mespref = document.getElementById("mespref")
const qtemps = document.getElementById("temps")
const expli = document.getElementById("expli")
const boutontypevaleur = document.getElementsByClassName("boutontypevaleur")
const boutontemps = document.getElementsByClassName("boutontemps")
const next = document.getElementById("next")
const lpi = [pre_qcs,mespref,qtemps,expli,err,next]
const lpc = [boutontypevaleur,boutontemps]

//qcs
const qres = document.getElementById("qres")
const qcs = document.getElementById("qcs")
const approuvezvous = document.getElementById("approuvezvous")
const mesure = document.getElementById("mesure")
const oui = document.getElementById("oui")
const non = document.getElementById("non")
const passer = document.getElementById("passer")
const lq = [qcs,approuvezvous,mesure,oui,non,passer,qres]

//result
const imaggagneg = document.getElementById("imggagneg")
const result = document.getElementById("result")
const affichres = document.getElementById("affichres")
const returndeb = document.getElementById("returndeb")
const imggagn = document.getElementById("imggagn")
const lr = [result,affichres,returndeb,imggagn,imaggagneg]

global = [contexte,texte_lp,texte_mc,plus_dinfos,photo_lp,photo_mc,qcsoupas,go,resultac,title,pre_qcs,mespref,qtemps,expli,err,next,qcs,approuvezvous,mesure,oui,non,passer,qres,result,affichres,returndeb,imggagn,imaggagneg,source_et_contact]

/*IMPLANTATION DU CSS SUR TELEPHONE*/
if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    for (let i = 0; i<global.length; i++){
        global[i].id="t"+global[i].id.toString()
    }
    for (i =0; i<lpc.length; i++) {
        for (let j = 0; j<lpc[i].length; j ++) {
            lpc[i][j].id = "t"+lpc[i][j].id.toString()
        }
    }
}


/* AUTRES VARIABLES */

var valeurs = []
var temps = []
var Lq = []
var lspe = []
var nq = 0
var boucllq = 0
var lrep = []
var fait = false
var mc = 0
var lp = 0


//LISTES DE MESURES

const emmdico = {
    general : ["Favoriser l'utilisation d'un compte épargne temps (accumuler des heures de travail supplémentaires pour les transformer en long congé à un moment de sa vie)",
    'Former, avant la fin de la décennie, 1 million de personnes aux métiers d’avenir (intelligence artificielle, énergie, transition écologique...) dont plus de 400 000 spécialistes informatiques',
    'Généraliser le SNU (Service National Universel) en le rendant potentiellement obligatoire',
    'Poursuivre la modernisation du code du travail engagée avec les ordonnances de 2017',
    'Augmenter de 50% les périodes de stage pour les lycéens et les étudiants',
    'Rémunérer les stages pour les lycéens',
    'Avoir la possibilité de déposer plainte en ligne pour de nombreux délits (piratages de carte bancaire, vols...) sans plus avoir besoin d’aller au commissariat',
    "Renforcer les liens avec l'UE, notamment en créant une armée européenne",
    "Rester dans l'OTAN",
    'Augmenter la présence des aides à domicile auprès de nos aînés en instaurant 2 heures de convivialité par semaine pour réduire leur solitude tout en améliorant les conditions de travail des professionnels',
    'Accompagner le deuil en simplifiant au maximum les démarches pour la famille',
    'Favoriser une fin de vie plus humaine  : lancer une convention citoyenne qui associera citoyens, spécialistes de l’éthique, professionnels',
    "Étendre la caution publique pour les locataires afin de faciliter l'accès au logement tout en sanctionnant les mauvais payeurs",
    'Verser le RSA uniquement si une activité de 15 à 20h par semaine est pratiquée (une formation, un apprentissage...)',
    'Donner la responsabilité en matière de logement, et les financements qui vont avec, aux communes et aux intercommunalités',
    "Permettre à tous les couples vivant ensemble de réduire leurs impôts comme s'ils étaient mariés ou pacsés",
    'Multiplier les « tiers-lieux » (espaces de travail partagés, de production locale, de recyclage...)',
    'Recruter 50 000 infirmiers(ières) et aides-soignant(e)s de plus dans les Eh pad',
    'Passer de 645€ par mois de retraite à 1100€ minimum',
    'Simplifier le mille-feuille territorial  : les élus départementaux seront les mêmes que les élus régionaux, avec un seul « conseiller territorial ». Les compétences seront clarifiées  : une mission, un responsable',
    'Baisser les charges pour les indépendants  : le revenu augmentera de 550 euros par an quand on gagne l’équivalent du SMIC',
    'Faire dépendre obligatoirement la rémunération des dirigeants des grandes entreprises du respect des objectifs environnementaux et sociaux de l’entreprise',
    'Réviser la politique d’achat de l’État  : l’objectif prioritaire sera d’acheter local, plutôt que d’acheter toujours moins cher, pour développer l’innovation et les filières françaises',
    'Achever le doublement de la présence des forces de l’ordre sur la voie publique et le déploiement de 200 nouvelles brigades pour plus de gendarmes en ruralité',
    'Donner des titres de long séjour seulement pour ceux qui réussissent un examen de français et s’insèrent professionnellement'],
    defe : ['Investir 2% du PIB dans les dépenses militaires', 'Renforcer les capacités des armées européennes et leur coordination', "Doubler le nombre de réservistes opérationnels dans les armées d'ici 2027. ", 'Moderniser les armées : armes électromagnétiques, camouflage optique pour les véhicules de combat, drones sous-marins, missiles hypersoniques, nanosatellites de surveillance spatiale…', "Renforcer les armées : livraison de plus de 60 chasseurs Rafale supplémentaires, 5 nouveaux sous-marins nucléaires d’attaque, 1 250 nouveaux véhicules blindés polyvalents."],
    cult : ['Étendre le pass Culture pour accéder plus jeune à la culture', 'Investir pour construire des métavers européens et proposer des expériences en réalité virtuelle, autour de nos musées, de notre patrimoine et de nouvelles créations, en protégeant les droits d’auteur et droits voisins', 'Instaurer de nouvelles commandes publiques artistiques à travers la France pour soutenir les jeunes créateurs', 'Moderniser l’État grâce au numérique', 'Généraliser l’enseignement du code informatique et des usages numériques à partir de la 5e'],   
    affa : ['Renforcer les frontières à l’aide d’une “force des frontières”', 'Expulser les étrangers qui troublent l’ordre publique', 'Assurer l’autonomie de l’Europe en matière de d’énergie, de technologie, et de stratégie', 'Mettre en place un titre de séjour long pour les personnes réussissant un examen de français et qui s’insèrent professionnellement', 'Aller au bout de la réforme de Schengen pour renforcer les frontières européennes'],        
    agri : ['Réduire les impôts de production qui pèsent sur l’industrie et l’agriculture, notamment en supprimant la CVAE pour toutes les entreprises', 'Privilégier les achats locaux', 'Instaurer une loi d’orientation et d’avenir pour assurer le renouvellement des générations, la formation et l’installation des jeunes agriculteurs', 'Investir massivement dans l’innovation (robotique, numérique, sélection variétale…) pour l’agriculture', 'Mettre en place un plan d’autonomie alimentaire dans chaque territoire ultramarin pour soutenir l’économie locale et lutter contre la vie chère'],   
    econ : ['Baisser les impôts de 15 milliards d’euros par an', 'Baisser les charges des travailleurs indépendants pour qu’ils obtiennent l’équivalent du SMIC', 'Réviser la politique d’achat de l’État  : l’objectif prioritaire sera d’acheter local, plutôt que d’acheter toujours moins cher, pour développer l’innovation et les filières françaises', 'Donner la responsabilité en matière de logement, et les financements qui vont avec, aux communes et aux intercommunalités', 'Continuer à soutenir des projets économiques majeurs pour l’avenir  : mini-lanceurs spatiaux, biomédicaments, réacteurs nucléaires de troisième et quatrième générations…'],   
    trav : ['Tripler la prime “Macron”, sans charges ni impôts', 'Relever progressivement l’âge légal de départ à la retraite à 65 ans', 'Prendre en compte des cas d’incapacité, des carrières longues ou pénibles', 'Se mobiliser afin de prévenir l’usure professionnelle et lutter contre le chômage des seniors', 'Supprimer la « redevance télé » et garantir l’indépendance de l’audiovisuel public'],        
    ecol : ['Planter 140 millions d’arbres d’ici la fin de la décennie, soit 2 arbres par Français et investir dans la filière française du bois', 'Assurer mieux le recueil des animaux de compagnie abandonnés', 'Dépolluer les anciennes décharges de déchets', 'Réduire massivement les exportations de déchets, en développant les filières industrielles françaises de recyclage', 'Protéger toujours mieux les littoraux, montagnes, forêts et espaces naturels'],   
    ense : ['Augmenter les heures de français et de mathématiques en primaire et en 6e et mettre les mathématiques dans le tronc commun du lycée', 'Rendre Parcoursup plus prévisible en donnant les résultats précis des années précédentes et en accompagnant mieux les familles', 'Augmentation jusqu’à 35 heures du temps de travail des accompagnants des élèves en situation de handicap pour les revaloriser et mieux aider ces enfants', 'Ouvrir toutes les places nécessaires dans les filières du supérieur qui correspondent aux besoins de la Nation, à commencer par les BTS, BUT, licences pro, et réguler les filières qui ne mènent pas assez à l’emploi', 'Augmenter le temps de sport  : 30 minutes par jour en primaire dès 2022, 2 heures en plus par semaine au collège'],        
    inte : ['Garantir l’accès à l’école : dans les quartiers et la ruralité, quand c’est nécessaire, nous renforcerons l’offre éducative après la classe', "Achever la couverture numérique du territoire par la fibre d'ici 2025", 'Instaurer une action renforcée en faveur des territoires ultramarins pour faire face aux catastrophes naturelles et à la pollution environnementale (tremblements de terre, sargasses, chlordécone...)', 'Instaurer une planification déclinée dans chaque territoire, par les régions, départements, communes, pour des choix locaux sur la production d’énergie (solaire, éolien...) et la décarbonation', 'Renforcer le réseau des sous-préfectures à travers la France et continuer le développement des maisons France services'],        
    just : ['Mettre en œuvre le doublement de la présence des forces de l’ordre dans les transports aux moments critiques et le triplement de l’amende contre le harcèlement de rue, pour la sécurité des femmes', 'Recruter de 1 500 cyberpatrouilleurs', 'Faciliter le dialogue entre police, gendarmerie et population sur les priorités de sécurité de proximité, notamment par messageries instantanées', 'Achever le doublement de la présence des forces de l’ordre sur la voie publique et le déploiement de 200 nouvelles brigades pour plus de gendarmes en ruralité', 'Ajouter 8 500 magistrats et personnels de justice supplémentaires d’ici 2027'],  
    sant : ['Instaurer aux âges clés (25, 45, 60 ans), un bilan de santé complet et gratuit', 'Instaurer pour les enfants, une détection précoce des écarts de développement (hyperactivité, dyslexie, obésité…) et un médecin traitant pour chacun', 'Instaurer pour les patients ayant une maladie chronique, un accompagnement personnalisé et connecté (ex. télésurveillance de la glycémie)', 'Continuer à développer 20 biomédicaments et biotechnologies (notamment contre les cancers), des  nouvelles technologies comme les exosquelettes', 'Instaurer des plans de détection et de prévention relatifs à la santé mentale, à l’infertilité, à la drépanocytose…'],  
}
const mlpdico = {
    general : [
        "Accueillir les réfugiés ukrainiens",
        "Rétablir les peines plancher (plafond minimum de peine en cas de récidive d'un crime ou d'un délit pour un individu)",
        "Etablir une peine de prison à perpétuité pour certains crimes",
        "S'allier avec d'autres pays de l'UE pour la changer",
        "Supprimer l'impôt sur les sociétés des entrepreneurs de moins de 30 ans",
        "Mettre en place un prêt de 100 000 € : pour un couple dont la moyenne d'âge est moins de 30 ans, qui souhaite s'acheter un bien immobilier, ce prêt n'étant plus à rembourser dès le ou la troisième enfant du couplé né(e)",
        "Supprimer les cotisations patronales sur toutes les augmentations de salaire allant jusqu'à 10%, pour les salaires ne dépassant pas trois fois le smic",
        "Ne pas accorder d’autonomie à la corse",
        "Déconjugaliser l’AAH (Allocation aux Adultes Handicapés)",
        "Ne pas légaliser le cannabis et renforcer la répression",
        "Renforcer l’interdiction de la GPA",
        "Sortir de l'OTAN",
        "Développer la télémédecine, les centres de santé et la formation de jeunes médecins",
        "Créer 100 000 logements sociaux",
        "Revaloriser l'allocation aux handicapés",
        "Instaurer le RIC (Référendum D'initiative Citoyenne)",
        "Organiser un référendum sur l'écologie",
        "Renationaliser les autoroutes",
        "Sanctionner durement les auteurs de harcèlement",
        "Créer un ministère dédié à la lutte contre les fraudes",
        "Interdire les projets d'urbanisation sur les terres agricoles",
        "Lancer la construction de vingt nouveaux réacteurs nucléaires",
        "Accorder une reconnaissance constitutionnelle au statut juridique des animaux",
        "Affirmer la supériorité des lois françaises sur les lois européennes",
        "Rembourser la dette publique (de 2800€)",
        ],
    defe : ['Porter le budget de la défense à 55 milliards d’euros à l’horizon 2027', 'Protéger efficacement les femmes contre toutes les agressions dont elles sont victimes', 'Renforcer les moyens matériels des forces de police, de gendarmerie et de la justice et mieux coordonner l’action de l’État avec celle des maires', 'Remettre en place de courtes peines d’emprisonnement', 'Réformer la politique des peines pour punir efficacement et rapidement les délinquants et les criminels'],
    cult :['Promouvoir les artistes qui s’expriment dans la langue française, plutôt que dans des langues étrangères', 'Lancer un plan national de création de filières artistiques dans les lycées et universités', 'Restaurer une « éducation musicale généraliste » dans les établissements scolaires', 'Renforcer la loi Toubon, qui vise à protéger l’usage de la langue française au sein des institutions', 'Implanter un « réseau de pépinières d’artistes » sur tout le territoire'],
    affa : ['Supprimer le droit du sol et durcir les règles de naturalisation', 'Créer une une Alliance Européenne des Nations qui a vocation à se substituer progressivement à l’Union Européenne, et qui laisserait plus de libertés aux pays membres', 'Ne pas partager le siège français au Conseil de Sécurité de l’ONU', 'Construire des partenariats stratégiques avec un certain nombre de pays clés, en Europe, autour de la Méditerranée, en Asie et en Amérique Latin', 'Créer une Alliance européenne des Nations qui a pour vocation à se substituer progressivement à l’Union Européenne '],
    agri : ['Recruter une nouvelle génération d’agriculteurs', 'Lutter contre l’artificialisation des terres agricoles', 'Prévenir les suicides des agriculteurs', 'Mettre en place un plan de soutien pour l’agriculture biologique', 'Valoriser le travail et favoriser la qualité pour redresser la balance commerciale agricole'],        
    econ : ["Exonérer les moins de 30 ans de l'impôt sur le revenu", "Favoriser les donations et exonérer les biens immobiliers jusqu'à 300 000 euros", 'Rendre les transports ferroviaires gratuits pour les 16-25 ans', "Remplacer l'actuel impôt sur la fortune immobilière par un impôt sur la fortune financière (IFF), taxant les très hauts patrimoines avec une exonération totale de la résidence principale", 'Créer un « fonds souverain français » pour augmenter la rémunération de l’épargne des Français et l’orienter vers des secteurs stratégiques et l’innovation'],        
    trav : ['Exclure les étrangers venus travailler au bout d’un an de chômage', 'Mettre en place un système « progressif » de départ à la retraite, en réservant la retraite à 60 ans avec 40 annuités aux Français entrés dans la vie active avant 20 ans.', 'Faire bénéficier aux jeunes de 16 à 25 ans un accès plus précoce au marché du travail', 'Améliorer les conditions de travail des salariés dans les abattoirs pour les travailleurs et les animaux', 'Travailler plus tôt, pour partir plus tôt en retraite'],
    ecol : ['Baisser la TVA du carburant à 5,5% contre 20% actuellement en place', 'Garantir la qualité sanitaire de l’air et de l’eau', 'Lancer la construction de 6 réacteurs nucléaires nouvelles génération, et démanteler toutes les éoliennes de France', 'Mettre en place l’économie circulaire (qui consiste à produire des biens et des services de manière durable en limitant la consommation et le gaspillage des ressources et la production des déchets)', 'Assurer le respect du droit à la mobilité individuelle et l’associer au progrès environnemental'],        
    ense : ['Port d’un uniforme à l’école primaire et au collège', 'Suppression des enseignements de langue et de culture d’origine (ELCO) qui nuisent à l’assimilation des élèves, notamment parce qu’ils sont assurés par des enseignants étrangers', 'Reprendre en main le contenu et les modalités des enseignements, et renforcer l’orientation précoce des élèves, pour rétablir l’excellence éducative à la française', 'Sanctuariser les établissements scolaires et mettre fin à la doctrine laxiste en matière disciplinaire', 'Revaloriser le métier d’enseignant du recrutement à la fin de la carrière'],
    inte : ["Interdire les tenues ou signes religieux ostentatoires dans l'espace public", 'Allouer 1,5 milliard par an de plus pour la sécurité', 'Faire du développement économique de l’Outre-mer une priorité', 'Restaurer la souveraineté de la France sur son espace maritime', 'Mettre en place un grand ministère d’État de la France d’Outre-mer et de la politique maritime'],
    just : ['Combattre les idéologies islamistes', 'Lever les obstacles juridiques pour pouvoir expulser les étrangers délinquants ou criminels', 'Atteindre 85 000 places de prison en six ans', 'Recruter plusieurs milliers de magistrats', 'Augmenter les effectifs et les budgets des forces de l’ordre et de la justice'],
    sant : ['Supprimer le pass vaccinal', 'Rendre aux médecins leur liberté de prescription et d’expression', 'Accroître la présence de personnel médical au sein des EHPAD : chaque établissement doit être doté d’un médecin coordonnateur et une infirmière doit être présente 24 heures sur 24', 'Réformer le système de rémunération complémentaire des médecins libéraux mis en place en 2012, qui porte atteinte à leur autonomie de décision et n’a pas eu de réel impact sur leurs pratiques professionnelles.', 'Transformation de l’AME (Aide Médicale d’Etat) en un dispositif qui prend en charge pour les adultes les seuls soins urgents, comme dans tous les pays de l’Union européenne'],
}
const mesdico = {
    defe : "défe",
    cult :"cult",
    affa : "affa",
    agri : "agri",
    econ : "econ",
    trav : "trav",
    ecol : "ecol",
    ense : "ense",
    inte : "inté",
    just : "just",
    sant : "sant",
}


/* FONCTIONS */

//Cacher ou Montrer un élément
function Visi (elements, v, fv) {
    if (fv=='l'){
        if (v == "m") {
            for (let i = 0; i<elements.length; i++) {
                elements[i].style.visibility = "visible"
            }
        }
        else if ("c") {
        for (let i = 0; i<elements.length; i++) {
            elements[i].style.visibility = "hidden"
        }
    }
    }
    else {
        if (v == "m"){
            elements.style.visibility = "visible"
        }
        else{
        elements.style.visibility = "hidden"
        }
    }
}

//Cacher les éléments d'une liste
function bclcache(l){
    for(let i=0;i<l.length;i++){
        Visi(l[i], "c", "nl")
    }
}

//Montrer les éléments d'une liste
function bclmontre(l){
    for(let i=0;i<l.length;i++){
        Visi(l[i], "m", "nl")
    }
}

//Cacher la pre qcs
function cachelpc () {
    for (let i = 0; i<lpc.length; i++){
        Visi(lpc[i], "c", "l")
    }
}

//Montrer la pre qcs
function montrelpc () {
    for (let i = 0; i<lpc.length; i++){
        Visi(lpc[i], "m", "l")
    }
}

//Montrer une etape
function VisiSt (step) {
    if (step == "accueil") {
        bclmontre(la)
        bclcache(lpi)
        bclcache(lq)
        bclcache(lr)
        cachelpc()
    }
    else if (step == "pre_qcs") {
        bclcache(la)
        bclcache(lq)
        bclcache(lr)
        bclmontre(lpi)
        montrelpc()
    }
    else if (step == "qcs") {
        bclcache(la)
        bclmontre(lq)
        bclcache(lr)
        bclcache(lpi)
        cachelpc()
        
    }
    else if (step == "result") {
        bclcache(la)
        bclcache(lq)
        bclmontre(lr)
        bclcache(lpi)
        cachelpc()
    }
}

//Convertir les valeurs en les listes du dico
function convert(v) {
    for (let i = 0; i < v.length; i ++) {
        for (let j = 0; j<Object.keys(mesdico).length; j++) {
            if (v[i].substring(0,4).toLowerCase()==Object.values(mesdico)[j]) {
                lspe.push(Object.values(mlpdico)[j+1])
                lspe.push(Object.values(emmdico)[j+1])
            }
        }
    }
}

//POSER LES QUESTIONS DU QCS
function series_de_q() {
    var nombreq = Lq.length    
    mesure.innerHTML=Lq[0]
    qres.innerHTML="Il vous reste "
        qres.innerHTML+=nombreq.toString()
        qres.innerHTML+=" questions"

    oui.addEventListener("click", function () {
        nombreq-=1
        lrep.push("oui")
        boucllq+=1
        mesure.innerHTML=Lq[boucllq]
        qres.innerHTML="Il vous reste "
        qres.innerHTML+=nombreq.toString()
        if (nombreq !== 1) {
            qres.innerHTML+=" questions"
        }
        else {
            qres.innerHTML+=" question"
        }
        if (nombreq===0) {
            stepr()
        }
    })
    non.addEventListener("click", function () {
        nombreq-=1
        lrep.push("non")
        boucllq+=1
        mesure.innerHTML=Lq[boucllq]
        qres.innerHTML="Il vous reste "
        qres.innerHTML+=nombreq.toString()
        if (nombreq !== 1) {
            qres.innerHTML+=" questions"
        }
        else {
            qres.innerHTML+=" question"
        }
        if (nombreq===0) {
            stepr()
        }
    })
    passer.addEventListener("click", function () {
        nombreq-=1
        Lq.splice(boucllq,1)
        mesure.innerHTML=Lq[boucllq]    
        qres.innerHTML="Il vous reste "
        qres.innerHTML+=nombreq.toString()
        if (nombreq !== 1) {
            qres.innerHTML+=" questions"
        }
        else {
            qres.innerHTML+=" question"
        }
        if (nombreq===0) {
            stepr()
        }
    })
}

// SAVOIR SI LA MESURE PROVIENT DE MACRON
function provmacron(mesure){
    for (let i = 0; i<12; i++) {
        if (Object.values(emmdico)[i].indexOf(mesure)!==-1) {
            return true
        }
    }
}


/* ETAPES */

//ACCUEIL
function stepa () {
    VisiSt("accueil")
    console.log(Object.values(mlpdico)[0].length)
    err.style.visibility = "visible"
    if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        plus_dinfos.style.visibility = "terra"
    } else {
        err.id = "erra"
    }
    err.innerHTML = ""
    if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        plus_dinfos.style.visibility = "hidden"
    }
    if (fait == false) {
        resultac.innerHTML = ""
    }
    else {
        if (mc>lp) {
            resultac.innerHTML = "Emmanuel Macron : "
            resultac.innerHTML += parseInt(mc).toString()
            resultac.innerHTML += " %<br>"
            resultac.innerHTML += "Marine Le pen : "
            resultac.innerHTML += parseInt(lp).toString()
            resultac.innerHTML += " %"
        }
        else {
            resultac.innerHTML = "Marine Le pen : "
            resultac.innerHTML += parseInt(lp).toString()
            resultac.innerHTML += " %<br>"
            resultac.innerHTML += "Emmanuel Macron : "
            resultac.innerHTML += parseInt(mc).toString()
            resultac.innerHTML += " %"
        }
    }
    go.addEventListener("click", function () {
        if (fait == false) {
            stepp()
        }
        else {
            err.innerHTML = "Merci de bien vouloir fermer et rouvrir la page pour recommencer un questionnaire"
        }
    })
}

//PRE QCS
function stepp () {
    VisiSt("pre_qcs")
    err.innerHTML = ""
    if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        plus_dinfos.style.visibility = "terr"
    } else {
        err.id = "err"
    }
    mesure.innerHTML = ""
    for (let i = 0; i<boutontypevaleur.length; i++) {
        boutontypevaleur[i].style.color = "black"
    }
    for (let i = 0; i<boutontemps.length; i++) {
        boutontemps[i].style.color = "black"
    }
    
    for (let i = 0; i < boutontypevaleur.length; i++) {
        boutontypevaleur[i].addEventListener("click", function() {
            if (this.style.color == "red") {
                this.style.color = "black"
                if (valeurs.indexOf(this.textContent) !== -1) {
                    valeurs.splice(valeurs.indexOf(this), 1)
                }
            }
            else {
                boutontypevaleur[i].style.color = "red"
                valeurs.push(this.textContent)
            }
        })
    }
    for (let i = 0; i < boutontemps.length; i++) {
        boutontemps[i].addEventListener("click", function() {
            if (temps.length==0){
                temps.push(boutontemps[i])
                boutontemps[i].style.color = "red"
            }
            else {
                temps[0].style.color = "black"
                temps.splice(0,1)
                boutontemps[i].style.color = "red"
                temps.push(boutontemps[i])
            }
        })
    }
    next.addEventListener("click", function () {
        if(temps.length !== 0 && valeurs.length > 3) {
            stepq()
        }
        else {
            err.innerHTML = "Veuillez choisir au moins quatre types de mesure et le temps que vous avez."
        }
    })    
}

//QCS
function stepq () {
    VisiSt("qcs")
    if (temps[0]==boutontemps[0]) {
        temps=10
    }
    else if (temps[0]==boutontemps[1]) {
        temps=20
    }
    else {
        temps=30
    }
    nq = temps*3
    for (let g=0; g<((2/3*nq)-10)/2; g++) {
        Lq.push(emmdico.general[g])
        Lq.push(mlpdico.general[g])
    }
    convert(valeurs)
    let j = 0
    while (Lq.length<nq) {
        for (let i = 0; i<lspe.length; i++) {
            Lq.push(lspe[i][j])
        }
        j+=1
    }
    Lq = _.shuffle(Lq)
    series_de_q()
}

function stepr () {
    VisiSt("result")
   for (let i =0; i<Lq.length; i++) {
       if (lrep[i]=="oui") {
           if (provmacron(Lq[i])==true) {
               mc+=1
           }
           else {
               lp+=1
           }
       }
    }
    mc = mc/(Lq.length/2)*100
    lp = lp/(Lq.length/2)*100
    affichres.innerHTML = "Votre candidat(e) préférée parmis les deux finalistes est "
    if (mc>lp){
        imaggagneg.style.visibility = "hidden"
        if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            imggagn.id = "timgmcrn"
        }
        else {
            imggagn.id = "imgmcrn"
        }
        imggagn.src = "photo macron.jpg"
        affichres.innerHTML += "Emmanuel Macron : vous adhérez à "
        affichres.innerHTML += parseInt(mc).toString()
        affichres.innerHTML += " % de ses mesures contre "
        affichres.innerHTML += parseInt(lp).toString()
        affichres.innerHTML +=" % des mesures de Marine Le Pen."
    }
    else if (lp>mc){
        imaggagneg.style.visibility = "hidden"
        if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            imggagn.id = "timgmlp"
        }
        else {
            imggagn.id = "imgmlp"
        }
        imggagn.src = "photo marine.jpg"
        affichres.innerHTML += "Marine Le Pen : vous adhérez à "
        affichres.innerHTML += parseInt(lp).toString()
        affichres.innerHTML += " % de ses mesures contre "
        affichres.innerHTML += parseInt(mc).toString()
        affichres.innerHTML +=" % des mesures d'Emmanuel Macron."
    }
    else {
        if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            imggagn.id = "tegalite"
            imaggagneg.id = "timggagneg"
        }
        else {
            imggagn.id = "egalite"
            imaggagneg.id = "imggagneg"
        }
        imggagn.src = "photo marine.jpg"
        imaggagneg.src = "photo macron.jpg"
        affichres.innerHTML = "Egalité ! Vous adhérez à "
        affichres.innerHTML += parseInt(mc).toString()
        affichres.innerHTML += " % des mesures de Marine LePen et d'Emmanuel Macron."
    }
    returndeb.addEventListener("click", function() {
        fait = true
        stepa()
    })    
}


/* EXECUTION */

stepa()