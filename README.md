# Candidatos Prueba

Estos ejercicios tienen como objetivo evaluar tu capacidad para resolver los
típicos escenarios que nos encontramos al desarrollar aplicaciones para usuarios.
Al final lo hemos dejado en 1 solo ejercicio que te debería llevar poco tiempo.

## Prerequisites

Puedes usar el stack que quieras frontend: React, Vue, Angular, ...
y en el backend: PHP, Python, Express.js, ...
Aunque en el producto que estamos embarcados estamos desarrollando con Laravel,
React, Node.js, npm, MariaDb, PostgreSQL, MongoDB, ...
Si quieres usar otro stack puedes usarlo. Pero entonces separa en diferentes
ramas y solicitudes de mezcla, pull request, los ficheros de los frameworks
respecto los snipets de los ejercicios. Haciendo pull request por un lado de la
instalación y configuración, y en otro pull request cada ejercicio.

/*También si quieres puedes hacer un Pull request con los snipets de código
al estilo stackoverflow. (To create code blocks or other preformatted text,
indent by four spaces or surround with groups of backticks).*/

## Ejercicio 1 - Redactar un email

Necesitamos desarrollar el mínimo producto viable para que un usuario redacte un
email. La app que necesitan los usuario es una single-page application (SPA) que
muestra en botón redactar y al pulsar se muestra el formulario para redactar un
email. Para finalizar pulsando Enviar y se muestre mensaje enviado.

### (Escenario Email Redactar)
0. Un usuario está en la página del emails recibidos
1. Pulsa el botón "Redactar"
2. Ve que aparece el formulario para redactar un e-mail
3. Rellena en el input "to" el email del destinatario "bill.clinton@whitehouse.gov"
4. Rellena en el input "cc" el email de un destinatario "obama@whitehouse.gov"
5. Rellena en el input "cc" el email de otro destinatario "trump@whitehouse.gov"
5. Rellena en el input "cco" el email de un destinatario "george.bush@whitehouse.gov"
4. Rellena en "subject" el texto del asunto "Test write a email"
5. Rellena en "body" el mensaje "Dear: Mr. President: This is a simple test of the Minimum viable product."
6. Pulsa el botón "Enviar"
7. Ve que se muestra "Mensaje enviado"

Crea la rama *email-redactar* y cuando termines solicita la mezcla a master.
Solo pedimos redactar un email, el listado de emails recibidos puedes no poner
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

Luego el backend crea el email en la base de datos, en la tabla o tablas que
modeles y luego responder:
{
  success: true,
  mail: {...}, // objeto guardado
}

## Entrega de las pruebas

Para entregar los ejercicios solo tienes que hacer Pull request a este repositorio.
[Pull request](https://github.com/mariouged/candidatos-prueba)
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
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MariaDB] (https://mariadb.com/kb/en/sql-statements/)
