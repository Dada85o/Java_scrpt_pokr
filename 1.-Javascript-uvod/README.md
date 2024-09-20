# JavaScript – Základy

JavaScript (JS) je populární programovací jazyk, který se používá pro tvorbu interaktivních prvků na webových stránkách. Pomocí JavaScriptu lze například reagovat na uživatelské akce, dynamicky měnit obsah stránky nebo komunikovat se serverem. JavaScript běží přímo v prohlížeči, což znamená, že může okamžitě ovlivňovat zobrazení stránky bez nutnosti jejího znovunačtení.

## Jak propojit JavaScript s HTML

JavaScript lze propojit s HTML několika způsoby. Doporučený přístup je umístit všechny JavaScriptové soubory do samostatné složky nazvané `js`. 

### Externí JavaScript

Nejlepší praxí je ukládání JavaScript kódu do samostatného externího souboru s příponou `.js`, který se pak propojí s HTML pomocí `<script>` tagu. Tento tag by měl být umístěn na konci těla (`<body>`) HTML dokumentu, aby byl JavaScript načten až poté, co se načtou všechny HTML prvky.

Příklad:

```html
<head>
    <script src="js/script.js"></script>
</head>
```

Umístěním JavaScriptového souboru do složky `js` a odkazováním na něj v HTML zajistíš přehlednost kódu a lepší organizaci projektu.

### Vnitřní JavaScript

V některých případech lze JavaScript vložit přímo do HTML pomocí `<script>` tagu. Toto řešení je vhodné pro malé projekty nebo pro rychlé testování.

Příklad:

```html
<script>
    console.log("Hello, world!");
</script>
```

## Kde se učit JavaScript

Pro začátečníky i pokročilé existuje mnoho kvalitních zdrojů, kde se mohou naučit JavaScript. Zde jsou některé z nich:

1. **[W3Schools - JavaScript Tutorial](https://www.w3schools.com/js/)**  
   W3Schools nabízí snadno pochopitelný tutoriál s příklady, který pokrývá základy JavaScriptu a umožňuje rychlé praktické osvojení.

2. **[YouTube - FreeCodeCamp JavaScript Tutorial](https://www.youtube.com/watch?v=FqqhAWJgN0E&list=PLQ8x_VWW6AktVAKDISvXrcsh6kp7Jt_SM)**  
   Tento videokurz na YouTube od FreeCodeCamp je skvělým průvodcem pro vizuální učitele. Pokrývá širokou škálu JavaScriptových témat od základů po pokročilejší techniky.

3. **[MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**  
   MDN Web Docs nabízí podrobnou dokumentaci a příklady pro JavaScript, což je ideální zdroj pro ty, kteří hledají detailní vysvětlení funkcí a konceptů JavaScriptu.
