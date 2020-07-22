# Candidatos Prueba

Estos ejercicios tienen como objetivo evaluar tu capacidad para resolver los
típicos escenarios que nos encontramos al desarrollar aplicaciones para usuarios.
Al final lo hemos dejado en 1 solo ejercicio que te debería tomar media mañana o
una tarde.

## Prerequisites

Puedes usar el stack que quieras frontend: React, Vue, Angular, ...
y en el backend: PHP, Python, Express.js, ...
Aunque en el producto que estamos embarcados estamos desarrollando con Laravel,
React, Node.js, npm, MariaDb, PostgreSQL, MongoDB, ...
Si quieres usar otro stack puedes usarlo. Pero entonces separa en diferentes
ramas y solicitudes de mezcla, pull request, los ficheros de los frameworks
respecto los snipets de los ejercicios. Haciendo pull request por un lado de la
instalación, configuración, y en otro pull request cada ejercicio.


## Ejercicio 1 - Redactar un email

Necesitamos desarrollar el mínimo producto viable para que un usuario redacte un
email. La app que necesitan los usuario es una single-page application (SPA) que
muestra un botón redactar y al pulsar se muestra el formulario para redactar un
email. Para finalizar pulsando Enviar y se muestre mensaje enviado.

### (Escenario Email Redactar)
0. Un usuario está en la página del emails recibidos "inbox"
1. Pulsa el botón "Redactar"
2. Ve que aparece el formulario para redactar un e-mail
3. Rellena en el input "to" el email del destinatario "trump@whitehouse.gov"
4. Pulsa Enter ó espacio y se añade el destinatario en la lista de emails to
5. Rellena en el input "cc" el email de un destinatario "obama@whitehouse.gov"
6. Pulsa Enter ó espacio y se añade el destinatario en la lista de emails cc
7. Rellena en el input "cc" el email de otro destinatario "george.bush@whitehouse.gov"
8. Pulsa Enter ó espacio y se añade el destinatario en la lista de emails cc
9. Rellena en el input "cco" el email de un destinatario "bill.clinton@whitehouse.gov"
10. Pulsa Enter ó espacio y se añade el destinatario en la lista de emails cco
11. Rellena en "subject" el texto del asunto "Test writing an email"
12. Rellena en "body" el mensaje "This is just an email test"
13. Pulsa el botón "Enviar"
14. Ve que se muestra "Mensaje enviado"
15. No ve el formulario de redactar un e-mail

Crea la rama *email-redactar* y cuando termines solicita la mezcla a master.
Solo pedimos redactar un email, en el listado de emails recibidos puedes no poner
nada y solo mostrar el botón redactar o crear un lista de mensajes mock.
La funcionalidad es redactar un email, hacer una petición al endpoint del
REST Api "/api/mail" y enviar el objeto mail mediante el método POST:
```
{
  to: ['destinatario@example.com'],
  cc: [], // array de emails
  cco: [], // array de emails
  subject: 'asunto',
  body: 'mensaje'
}
```
Puedes hacer la petición con axios o fetch.

Luego en el backend crea el email en la base de datos, en la tabla o tablas que
modeles y luego responder:
```
{
  success: true,
  mail: {...}, // objeto guardado
}
```
En el backend no hace falta que envíes el email, solo guardar la información, ya
se encargará un job o un servicio o un worker de leer los mails e ir enviándolos,
pero no es necesario en este ejercicio.

El diseño de tablas es importante, ya que en otras historias de usuario, nos
piden autocompletar direcciones de email, busqueda de mensajes por asunto, ...
El product owner nos ha especificado claramente que normalicemos la información.

### (Escenario Email Crear)
- Dado que yo recibo por POST el objeto mail
- Y que tiene el array to con al menos 1 email
- Y que puede tener el array cc con 1 o muchos emails
- Y que puede tener el array cco con 1 o muchos emails
- Y que tiene asunto
- Y que tiene body
- Entonces guardo el objeto mail en la base de datos
- Y respondo el código 200
- Y respondo la propiedad success a true
- Y respondo el objeto mail que se ha guardado en la base de datos

## Entrega de las pruebas

Para entregar los ejercicios solo tienes que hacer Pull request a este repositorio.
[Pull request](https://github.com/mariouged/candidatos-prueba).
Sería recomendable hacer un pull request por cada ejercicio.

## Dudas

Puedes pedir más información a través de github
o escribiendonos a [mario.ugedo@between.tech](mailto:mario.ugedo@between.tech)

## Getting Started

Sigue las siguientes instrucciones si vas a usar el stack Laravel.
Si usas otro stack, por favor crear un markdown "GettingStarted.md" con las explicaciones y comandos a ejecutar.
Si quieres usar docker, también sería válido, pero no queremos que te lleve mucho
tiempo realizar la prueba, lo importante es la idea de cómo lo resolverías y ver el estilo de tu código.

1. Haz un Fork de este repositorio desde tu cuenta de github.
2. Clona tu repositorio.
3. Extensiones "non-default" que requiere Laravel: php-bcmath php-mbstring php-mysql
4. php composer.phar install
5. npm install
6. MariaDB crear la base de datos y el usuario
7. Laravel configurar en el fichero .env las variables: DB_DATABASE, DB_USERNAME, DB_PASSWORD
8. APP_KEY generate mediante el comando `php artisan key:generate`
9. npm run dev

## Documentation

Si usas el stack de Laravel y React aquí tienes los enlaces a la documentación.

- [Laravel](https://laravel.com/docs/7.x).
- [React](https://es.reactjs.org/docs/hello-world.html).
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
- [MariaDB] (https://mariadb.com/kb/en/sql-statements/).
- [Scaffolding Laravel con React](https://laravel.com/docs/7.x/frontend#using-react).
