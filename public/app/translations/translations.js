angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('bg_BG', {"+Add Friend":"+Добави Приятел","- other people's places":"- чужди места за разходка","- your places":"- Вашите места","<h2>Apply</h2>":"<h2>Кандидатствай</h2>","ADD DOG":"ДОБАВИ КУЧЕ","ADD NEW DOGGY":"ДОБАВИ НОВО КУЧЕНЦЕ","ADMIN":"АДМИН","Accept":"Приеми","Achievment Application":"Кандидатура за Постижение","Achievment Description":"Описание на Постижението","Achievment Name":"Име на Постижението","Achievment Points":"Точки за Постижението","Achievments":"Постижения","Add":"Добави","Add Dog":"Добави Куче","Add Place":"Добави Място","Add Route":"Добави Маршрут","Add Walk":"Добави Разходка","Add a Meal":"Добави Хранене","Admin Panel":"Админски Панел","Apply":"Кандидатствай","Apply for an achievment":"Кандидатсвай за постижение","Author":"Автор","BIRTH DATE":"РОЖДЕНА ДАТА","BREED":"ПОРОДА","Birth Date: {{dog.birthDate}}":"Рождена Дата: {{dog.birthDate}}","Birthdate: {{dog.birthDate}}":"Рождена Дата: {{dog.birthDate}}","Breed: {{dog.breed}}":"Порода: {{dog.breed}}","Browse Photo":"Избери Снимка","CHAT":"ЧАТ","Cancel":"Откажи","Change":"Промени","Change Breed":"Смени Породата","Change Name":"Смени Името","Chat History":"История на Чата","Chat with friends":"Чати с приятели","Confirm Email":"Подтвърди Имейла","Confirm Password":"Подтвърди Паролата","Create New":"Създай Ново","DAY":"ДЕН","DESCRIPTION":"ОПИСАНИЕ","DESCRIPTION (optional)":"ОПИСАНИЕ (избирателно)","Decline":"Откажи","Delete":"Изтрий","Delete Request":"Изтрий Заявката","Description":"Описание","Description:":"Описание:","Do you really want<br>to delete the place?":"Наистина ли искате да <br> изтриете мястото?","Dog Owners":"Стопани","Doggy world will remind you when<br>to give food to your dogs and when<br>to go just for a walk!":"Pup Mates ще ви напомни, кога <br> да нахраните вашите кучета и кога да ги разходите!","Dogs":"Кучета","Edit":"Промени","Edit Achievment Suggestion":"Промени заявката за потижение","Email":"Имейл","Emails do not match":"Имейлите не съвпадат","Find the best places for your dog!":"Намери най-добрите места за твоето куче!","First Name":"Първо Име","Having problems with your dog?":"Имате проблеми с кучето?","Hide other people's places":"Скрий чуждите места","Invalid Email":"Невалиден Имейл","JOIN US!":"Присъедини се","Join the Biggest network for dog owners":"Присъедини се към най-голямата мрежа за стопани","Join/Login":"Регистрирай се/Влез","Last Name":"Фамилия","Login":"Влез","Manage Users":"Контрол на потребители","Mark as seen":"Маркирай като видяно","Me":"Мен","Meals:":"Хранения:","Month":"Месец","My Places":"Моите Места","My profile":"Моят Профил","NAME":"ИМЕ","Name":"Име","Name:":"Име:","New Achievment Suggestion":"Заявка за ново постижение","New owner's account":"Нов потребителски акаунт","No":"Не","No information to display":"Няма информация за показване","Notifications":"Известия","Other People's Places":"Чужди места за разходка","Owner of: <span ng-show=\"$index != 0 &amp;&amp; dog.breed.length\">, </span><span ng-repeat=\"dog in person.dogs\" ng-show=\"dog.breed.length &gt;= 2\">{{dog.breed}} </span>":"Стопанин на: <span ng-show=\"$index != 0 &amp;&amp; dog.breed.length\">, </span><span ng-repeat=\"dog in person.dogs\" ng-show=\"dog.breed.length &gt;= 2\">{{dog.breed}} </span>","PHOTO":"СНИМКА","Password":"Парола","Password:":"Парола:","Passwords do not match":"Паролите не съвпадат","Pick Achievment":"Избери Постижение","Pick Action":"Избери Действие","Pick Dog":"Избери Куче","Places":"Места","Places to go to on a lovely walk:":"Добри места за чудесна разходка","Points":"Точки","Private:":"Лично:","Profile of":"Профилът на","Request Type":"Тип на заявката","Requested {{achievment.createdAt | moment: 'fromNow'}}!":"Заявено {{achievment.createdAt | moment: 'fromNow'}}!","Review Achievments":"Прегледай постижения","Review New<br>Achievments":"Прегледай новите<br> постижения","Save":"Запази","Save Change":"Запази промените","Save changes":"Запази промените","Search...":"Търси...","Send":"Изпрати","Send Message":"Изпрати Съобщение","Show other people's places":"Покажи чуждите места за разходка","Sign Up":"Регистрирай се","Sign up":"Регистрирай се","Stay connected with your friends!":"Поддържай връзка с приятелите си!","User Name":"Потребителско Име","User Name:":"Потребителско име:","Username":"Потребителско име","Username exists":"Потребителското име съществува","Username is too short":"Потребителско име е твърде кратко","Video Proof":"Видео доказателство","Welcome {{identity.currentUser.firstName}}!":"Добре дошъл {{identity.currentUser.firstName}}!","Why not text a message to your buddy for <br>a walk with your dogs? Get in touch<br>with all your friends instantly.":"Защо не пишеш на приятелчето си <br>да разходите кучетата си? Поддържай връзка<br>с всички по всяко време.","Year":"Година","Yes":"Да","You currently have no friends":"Все още нямате приятели","You will have the chance to<br>exlpore your city for the best places<br>to enjoy a walk with your dog.":"Вие ще имате шанса да<br>посетите най-удобните и близки места<br>за разходка на домашния ви любимец.","You will...":"Вие ще...","Your password is too short.":"Паролата е твърде кратка","aslpls":"КУР!","delete":"Изтрий","incorrect date":"невалидна дата","loading...":"зарежда се...","please choose a photo":"моля изберете снимка","please write a breed":"моля въвдете породата","please write a name":"моля въведете име","rate: {{pl.rate}}":"райтин: {{pl.rate}}","signout":"изход","walks:":"разходки:","wants to add you as a friend!":"иска да ви добави като приятел!","{{captchaErrorType | translate}} was NOT valid!":"Полето {{captchaErrorType | translate}} не е валидно!"});
    gettextCatalog.setStrings('en_GB', {"+Add Friend":"+Add Friend","- other people's places":"- other people's places","- your places":"- your places","<h2>Apply</h2>":"<h2>Apply</h2>","ADD DOG":"ADD DOG","ADD NEW DOGGY":"ADD NEW DOGGY","ADMIN":"ADMIN","Accept":"Accept","Achievment Application":"Achievment Application","Achievment Description":"Achievment Description","Achievment Name":"Achievment Name","Achievment Points":"Achievment Points","Achievments":"Achievments","Add":"Add","Add Dog":"Add Dog","Add Place":"Add Place","Add Route":"Add Route","Add Walk":"Add Walk","Add a Meal":"Add a Meal","Admin Panel":"Admin Panel","Apply":"Apply","Apply for an achievment":"Apply for an achievment","Author":"Author","BIRTH DATE":"BIRTH DATE","BREED":"BREED","Birth Date: {{dog.birthDate}}":"Birth Date: {{dog.birthDate}}","Birthdate: {{dog.birthDate}}":"Birthdate: {{dog.birthDate}}","Breed: {{dog.breed}}":"Breed: {{dog.breed}}","Browse Photo":"Browse Photo","CHAT":"CHAT","Cancel":"Cancel","Change":"Change","Change Breed":"Change Breed","Change Name":"Change Name","Chat History":"Chat History","Chat with friends":"Chat with friends","Confirm Email":"Confirm Email","Confirm Password":"Confirm Password","Create New":"Create New","DAY":"DAY","DESCRIPTION":"DESCRIPTION","DESCRIPTION (optional)":"DESCRIPTION (optional)","Decline":"Decline","Delete":"Delete","Delete Request":"Delete Request","Description":"Description","Description:":"Description:","Do you really want<br>to delete the place?":"Do you really want<br>to delete the place?","Dog Owners":"Dog Owners","Doggy world will remind you when<br>to give food to your dogs and when<br>to go just for a walk!":"Doggy world will remind you when<br>to give food to your dogs and when<br>to go just for a walk!","Dogs":"Dogs","Edit":"Edit","Edit Achievment Suggestion":"Edit Achievment Suggestion","Email":"Email","Emails do not match":"Emails do not match","Find the best places for your dog!":"Find the best places for your dog!","First Name":"First Name","Having problems with your dog?":"Having problems with your dog?","Hide other people's places":"Hide other people's places","Invalid Email":"Invalid Email","JOIN US!":"JOIN US!","Join the Biggest network for dog owners":"Join the Biggest network for dog owners","Join/Login":"Join/Login","Last Name":"Last Name","Login":"Login","Manage Users":"Manage Users","Mark as seen":"Mark as seen","Me":"Me","Meals:":"Meals:","Month":"Month","My Places":"My Places","My profile":"My profile","NAME":"NAME","Name":"Name","Name:":"Name:","New Achievment Suggestion":"New Achievment Suggestion","New owner's account":"New owner's account","No":"No","No information to display":"No information to display","Notifications":"Notifications","Other People's Places":"Other People's Places","Owner of: <span ng-show=\"$index != 0 &amp;&amp; dog.breed.length\">, </span><span ng-repeat=\"dog in person.dogs\" ng-show=\"dog.breed.length &gt;= 2\">{{dog.breed}} </span>":"Owner of: <span ng-show=\"$index != 0 &amp;&amp; dog.breed.length\">, </span><span ng-repeat=\"dog in person.dogs\" ng-show=\"dog.breed.length &gt;= 2\">{{dog.breed}} </span>","PHOTO":"PHOTO","Password":"Password","Password:":"Password:","Passwords do not match":"Passwords do not match","Pick Achievment":"Pick Achievment","Pick Action":"Pick Action","Pick Dog":"Pick Dog","Places":"Places","Places to go to on a lovely walk:":"Places to go to on a lovely walk:","Points":"Points","Private:":"Private:","Profile of":"Profile of","Request Type":"Request Type","Requested {{achievment.createdAt | moment: 'fromNow'}}!":"Requested {{achievment.createdAt | moment: 'fromNow'}}!","Review Achievments":"Review Achievments","Review New<br>Achievments":"Review New<br>Achievments","Save":"Save","Save Change":"Save Change","Save changes":"Save changes","Search...":"Search...","Send":"Send","Send Message":"Send Message","Show other people's places":"Show other people's places","Sign Up":"Sign Up","Sign up":"Sign up","Stay connected with your friends!":"Stay connected with your friends!","User Name":"User Name","User Name:":"User Name:","Username":"Username","Username exists":"Username exists","Username is too short":"Username is too short","Video Proof":"Video Proof","Welcome {{identity.currentUser.firstName}}!":"Welcome {{identity.currentUser.firstName}}!","Why not text a message to your buddy for <br>a walk with your dogs? Get in touch<br>with all your friends instantly.":"Why not text a message to your buddy for <br>a walk with your dogs? Get in touch<br>with all your friends instantly.","Year":"Year","Yes":"Yes","You currently have no friends":"You currently have no friends","You will have the chance to<br>exlpore your city for the best places<br>to enjoy a walk with your dog.":"You will have the chance to<br>exlpore your city for the best places<br>to enjoy a walk with your dog.","You will...":"You will...","Your password is too short.":"Your password is too short.","aslpls":"aslpls","delete":"delete","incorrect date":"incorrect date","loading...":"loading...","please choose a photo":"please choose a photo","please write a breed":"please write a breed","please write a name":"please write a name","rate: {{pl.rate}}":"rate: {{pl.rate}}","signout":"signout","walks:":"walks:","wants to add you as a friend!":"wants to add you as a friend!","{{captchaErrorType | translate}} was NOT valid!":"{{captchaErrorType | translate}} was NOT valid!"});
/* jshint +W100 */
}]);