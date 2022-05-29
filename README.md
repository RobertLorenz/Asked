# Feladat lerírása:

- Lehessen kérdéseket felvinni, és azokhoz válaszokat - egy kérdéshez több válasz is lehetséges.

- Legyen egy listázó felület, ahol a kérdések szerepelnek, és hogy mennyi választ adtak már rá.Ha rákattintunk, akkor bejön a kérdés aloldala.

- A kérdés aloldalán jelenjen meg a kérdés és a válaszok, ahol a válaszra pozitív vagy negatív módon lehet reagálni, ezeknek a reakcióknak a számát pedig jelenítsük meg a válasznál. A kérdést és a választ is lehessen szerkeszteni és törölni.

# Elért eredmények:

- Megvalósítottam egy fő oldalt, ahol a kérdések ki vannak listázva dinamikusan. Ezek a kérdések, egy-egy kártyán helyezkednek el. Látszik, hogy mennyi válasz érkezett rájuk, a címük, és egy részlet a kérdésből.
- Van lehetőség új kérdést felvinni, valamint a kérdés létrejötte után a kérdésekhez válaszokat.
- Kérdéseket és kommenteket lehet törölni és szerkeszteni. Ha törlésre kerül a kérdés, a rá érkezett kommentek is törlésre kerülnek.
- Egyszerű éjszakai mód, react useContext hookjával megvalósítva
- egy kereső sáv a főoldalon, melyen keresztül kereshetünk kérdésekre
- like/dislike reakció megvalósítva a válaszokra

# Projekt beüzemelése

1. `npm install` parancs kiadása miután cloneoztuk a repót 
1. `json-server --watch ./data/db.json` json szerver futtatása 3000-es porton, ezen fut az adatbázis melytől az oldal kapja az adatokat
1. `npm run start` ezt a fenti parancs után kell kiadni, a terminál megkérdezi majd, hogy a 3000-es port foglalt, szeretnénk-e másik portot használni, ezután y gomb leütését követően megnyílik az oldal a böngészőben
