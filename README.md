**Laravel Boolfolio - Project Technology**
===
## **Descrizione esercizio precedente**
Creare un nuovo progetto con Laravel Breeze ed il pacchetto Laravel 9 Preset con autenticazione.

Separare gli ambienti Guest da quelli Admin per quanto riguarda: stili, js, controller, viste e layout.

Infine creare la CRUD(Create, Read, Update e Delete) di un Portfolio.

Include nella CRUD del portfolio l’aggiunta dell’immagine e la sua relativa eliminazione.

# **Laravel One To Many**
## **Descrizione esercizio precedente**
Continuare a lavorare su un progetto precedente (laravel-auth) ma in una nuova repo e aggiungere una nuova entità **Type**. 

Questa entità rappresenta la tipologia di progetto ed è in relazione **one to many** con i progetti.

I task da svolgere sono:
- creare la migration per la tabella `types`
- creare il model `Type`
- creare la migration di modifica per la tabella `projects` per aggiungere la chiave esterna
- aggiungere ai model Type e Project i metodi per definire la relazione one to many
- visualizzare nella pagina di dettaglio di un progetto la tipologia associata, se presente
- permettere all’utente di associare una tipologia nella pagina di creazione e la modifica di un progetto
- gestire il salvataggio dell’associazione progetto-tipologia con opportune regole di validazione

Creare il seeder per il model Type e il seeder della tabella ‘projects’ con l’id del type (random) in relazione

Aggiungere le operazioni CRUD per il model Type, in modo da gestire le tipologie di progetto direttamente dal pannello di amministrazione.

# **Laravel Many To Many**
## **Descrizione esercizio precedente**

Continuare a lavorare su un progetto precedente (laravel-one-to-many), ma in una nuova repo e aggiugendo una nuova entità **Technology**. 

Questa entità rappresenta le tecnologie utilizzate ed è in relazione **many to many** con i progetti.

I task da svolgere sono:
- creare la migration per la tabella `technologies`
- creare il model `Technology`
- creare la migration per la tabella pivot `project_technology`
- aggiungere ai model Technology e Project i metodi per definire la relazione many to many
- visualizzare nella pagina di dettaglio di un progetto le tecnologie utilizzate, se presenti
- permettere all’utente di associare le tecnologie nella pagina di creazione e modifica di un progetto
- gestire il salvataggio dell’associazione progetto-tecnologie con opportune regole di validazione

Creare il seeder per il model Technology e per la tabella pivot.

Aggiungere le operazioni CRUD per il model Technology, in modo da gestire le tecnologie utilizzate nei progetti direttamente dal pannello di amministrazione.

# **Laravel Boolfolio - API**
## **Descrizione esercizio attuale da svolgere**
Continuare a lavorare su un progetto precedente (laravel-many-to-many) ma in una nuova repo (laravel-api). 

**Milestone 1**

Nome repo 1: laravel-api

Aggiungere al progetto Laravel un nuovo **Api/ProjectController**. 

Questo controller risponderà a delle richieste via API e si occuperà di restituire la lista dei progetti presenti nel database in formato json.

**Milestone 2**

Testare la chiamata API tramite Postman o Tunder Client e 
assicurarsi di ricevere i dati correttamente.

**Milestone 3**

Nome repo 2: vite-boolfolio

Iniziare ad occuparsi della parte front-office dell'applicazione: creare un nuovo progetto Vue 3 con Vite e installare axios.

Collegare questo progetto ad una repo separata.

**Milestone 4**

Nel componente principale della Vue App fare una 
chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperare tutti i progetti dal back-end.

Stampare in console i risultati e verificare di ricevere i dati correttamente.

**Milestone 5**

Creare un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizzare questo componente per visualizzare tutti i progetti ricevuti tramite API.

## **Bonus:**

1. Gestire la paginazione dei risultati
2. ‘Innestare’ vue all’interno del progetto Laravel e da lì fare la chiamata API

---------------------------------------

# **Passaggi**

## **Creare un progetto con Breeze integrato**


1. 

composer create-project --prefer-dist laravel/laravel:^9.2 nome_progetto

OPPURE (MENO PREFERIBILE)

composer create-project laravel/laravel:^9.2 nome-cartella


2. PER ENTRARE NELLA CARTELLA !!! IMPORTANTE

cd nome-cartella


3. !!! Dentro la cartella !!!

composer require laravel/breeze --dev

OPPURE (MENO PREFERIBILE)

composer require laravel/breeze

4. 
php artisan breeze:install

CLICCARE:
0
INVIO
INVIO

5. 
composer require pacificdev/laravel_9_preset

6. !!! IMPORTANTE AGGIUNGERE --auth

php artisan preset:ui bootstrap --auth


---------------------------------------

npm i

composer install

---------------------------------------

php artisan key:generate 

npm run dev

php artisan serve

--------------------------------------

## **PASSAGGI SUCCESSIVI**

- creare un DATABASE in myPhpAdmin e collegarlo nel file .env inserendo il nome

- php artisan migrate

-------------------

- creare i file nelle cartelle resources/js e resources/scss 
	- in resources/js ->     appGuest.js
	- in resources/scss ->   appGuest.scss 
	- importare bootstrap -> @import '~bootstrap/scss/bootstrap';

- Aggiungere i percorsi in " vite.config.js "
	- modificare l'input in =  input: ['resources/scss/app.scss', 'resources/js/app.js', 'resources/scss/appGuest.scss', 'resources/js/appGuest.js'],

- in " views/layout/guest.blade.php " cambiare la riga @vite da css a scss
	- @vite(['resources/scss/appGuest.scss', 'resoureces/js/appGuest.js'])

- in " App/Http/Providers/RouteServiceProvider.php " sostituire la parola /dashboard con /admin  
	- public const HOME = '/admin';

--------------------------------------

- creare una cartella " guest " nelle view
	- creare un file home.blade.php

- Creare il controller Guest/PageController 
	- php artisan make:controller Guest/PageController 

- richiamare nel controller Guest/PageController la function index per restituire la view di guest.home
	- class PageController extends Controller{
		public function index(){
			return view('guest.home');
		}
	  }

- richiamare la rotta in route/web.php (*cancellare le altre rotte di default)
	- use App\Http\Controllers\Guest\PageController;
	- Route::get('/', [PageController::class, 'index'])->name('home');

--------------------------------------

- Creare una cartella " admin " nelle view
	- creare un file home.blade.php
	- Copiare il CONTENUTO del file " dashboard.blade.pphp " ed incollare all'interno di " home.blade.php "

- Creare il controller Admin/DashboardController 
	- php artisan make:controller Admin/DashboardController 

- richiamare nel controller Admin/DashboardController la function index per restituire la view di admin.home
	- class PageController extends Controller{
		public function index(){
			return view('admin.home');
		}
	  }

- Aggiungere la rotta nella route/web.php USANDO MIDDLEWARE
	- use App\Http\Controllers\Admin\DashboardController;
	- Route::middleware(['auth', 'verfied'])
		->name('admin')
		->prefix('admin')
		->group(function(){
			Route::get('/', [DashboardController::class, index])->name('home');
		});

--------------------------------

- Eliminare i file di default
	- dashboard.blade.php
	- welcome.blade.php

-------------------------------
# **CRUD**

## **Breve riepilogo: Rotte resource**

**comics.index** -> GET -> funzione del controller: index -> view: comics.index

**comics.show/{comic}** -> GET -> funzione del controller: show -> view: comics.show

---------------------------------------------------

**comics.create** -> GET -> funzione del controller: create -> view: comics.create (contiene il form di creazione)

**comics.create** INVIA IL FORM IN ***POST*** a comics.store

**comics.store** -> ***POST*** -> controlla la validità del dato, lo salva  e reindirizza a comics.show

---------------------------------------------------

**comics.edit{comic}** -> GET -> funzione del controller: edit -> view: **comics.edit** (contiene il form di modifica)

**comics.edit** INVIA IL FORM IN PUT a comics.update

---------------------------------------------------

**comics.update** -> ***PUT*** -> controlla la validità del dato, lo aggiorna  e reindirizza a comics.show

---------------------------------------------------

**comics.destroy** -> ***DELETE*** -> elimina il dato e reindirizza a comics.index

---------------------------------------------------

# **Creare un progetto con Breeze e Vue.js integrati**

## **INIZIO BREEZE**
---------------------------------------
1. 
composer create-project --prefer-dist laravel/laravel:^9.2 nome-cartella

2. Dentro la cartella 
cd nome-cartella


3. 
composer require laravel/breeze --dev

4.
php artisan breeze:install

CLICCARE:
0
INVIO
INVIO

5.
composer require pacificdev/laravel_9_preset

6. !!! IMPORTANTE AGGIUNGERE --auth
php artisan preset:ui bootstrap --auth


---------------------------------------

npm i

composer install

---------------------------------------

php artisan key:generate 

npm run dev

php artisan serve

--------------------------------------
## **FINE BREEZE**

/////////////////////////////////////

CONFIGURAZIONE / MODIFICHE DA FARE IN BREEZE
--------------------------------------
nel file vite.config.js

(riga 11)
```
            input: ['resources/scss/app.scss', 'resources/js/app.js','resources/scss/appGuest.scss', 'resources/js/appGuest.js'],
```

--------------------------------------
creare i file GUEST appena aggiunti nei loro rispettivi percorsi (gli ultimi 2 file)

--------------------------------------

importare bootstrap in appGuest.scss
```
@import '~bootstrap/scss/bootstrap'
```
--------------------------------------

rimuovere la rotta welcome
--------------------------------------

ed eliminare welcome.blade.php

--------------------------------------

in guest.blade.php

cancellare tutto ciò che ènel body e aggiungere 
```
@yield('content')
```
--------------------------------------
sempre in guest.blade.php

modificare i percorsi a riga 15 nell'head
```
        @vite(['resources/scss/appGuest.scss', 'resources/js/appGuest.js'])
```
--------------------------------------
modificare tutto ciò che è del guest con @extends('layouts.guest')
```
@extends('layouts.guest')

@section('content')

@endsection
```
--------------------------------------
collegare il progetto al db nel file env

esempio: 
DB_DATABASE=db_projects

--------------------------------------
## **INIZIO VUE**
--------------------------------------
```
npm i vue@next
```
---------------------------------------
```
npm i @vitejs/plugin-vue --force
```
---------------------------------------
Creare un file/componente in resources/js

resources/js/App.vue

nel file
```
<script>
export default{
	name:'App'
}

</script>

<template>

</template>

<style lang="scss" scoped>

</style>
```
--------------------------------------

nel file vite.config.js

IN ALTO

```
import vue from '@vitejs/plugin-vue';
```

-------------------------------------
nel file vite.config.js

IN BASSO 

```
        vue({
            template:{
                transformAssetUrls:{
                    base:null,
                    includeAbsolute: false
                }
            }
        })
```

--------------------------------------
nel file appGuest.js

```
import { createApp } from "vue";
import App from "./app";

create(App).mount('#app');
```

--------------------------------------

## **FINE VUE**

# **Installazione Axios**
```
npm i axios 
```

# **Creare una cartella vite + vue (sass/scss + axios + bootstrap)** 
## ***(senza laravel e breeze)**

METODO 1

npm create vite@latest nome-progetto -- --template vue
---------------------------------------
cd nome-progetto
---------------------------------------
sass/scss 

comando migliore
npm add -D sass
comando peggiore (anche così funziona)
npm i sass
---------------------------------------
axios

npm i axios
---------------------------------------
bootstrap

npm i bootstrap

#### NEL FILE GENERALE/ NEL FILE NECESSARIO
@import 'bootstrap/scss/bootstrap';
-------------------------------------
npm i
---------------------------------------
npm run dev

-----------------------------------
aggiungere in App.vue

<style lang="scss">

@use './scss/main.scss';

</style>

////////////////////////////////////////

METODO 2

Creazione di una cartella tramite linea di comando
(terminale/powershell)

1. Con i comandi del terminale entro nella cartella dove devo creare la repo
Creo una cartella con il nome della repo:

npm create vite@latest nomeDellaRepo

2. Seleziono come framework Vue

3. Seleziono come "variant" JavaScript

---------------------------------------
*SE NECESSARIO

SASS

npm add -D sass
---------------------------------------

AXIOS

npm i axios
-------------------------------------
Bootstrap

npm i bootstrap

#### NEL FILE GENERALE/ NEL FILE NECESSARIO
@import 'bootstrap/scss/bootstrap';
-------------------------------------

4. Apro la cartella in VsCode e nel terminale (CTRL+J) digito -> npm install

Dopo aver installato tutte le "dipendenze" digito -> npm run dev

5. Nella cartella 'src' si trova il file 'App.vue' che va svuotato dal suo contenuto.
Una volta fatto digitare "with" per ottenere la scorciatoia del nostro
snippet.

6. aggiungere in App.vue

<style lang="scss">

@use './scss/main.scss';

</style>
