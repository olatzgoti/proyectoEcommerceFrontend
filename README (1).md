
# Proyecto ecommerce

En éste proyecto se crea una web en la que el usuario debe registrarse, logarse y a partir de ahí puede revisar su perfil, ver los productos del comercio y hacer pedidos.


## Tecnologías utilizadas

![Static Badge](https://img.shields.io/badge/react-18.2.0-lightblue)
![Static Badge](https://img.shields.io/badge/Sass-1.70.0-pink)



## Utilización

La web consta de una cabecera superior en la que el usuario puede acceder a las distintas funciones implementadas.

Se divide en tres partes, '__Home__, '__Login / Logout__ ',  '__Registro__', '__Productos__', '__Perfil__' y '__Carrito__'.

### Home

Ésta es la vista inicial, simplemente se trata de una portada con el título y una descripción de las funciones del servicio.

### Registro

En ésta vista se debe crear un nuevo usuario.

Los campos a rellenar son:

* _Nombre_: aquí se introduce el nombre del usuario.
* _Apellido_: aquí se introduce el apellido.
* _Email_: se introduce el email.
* _Contraseña_: se introduce una contraseña.

Tras rellenarlos se pulsa el botón _Registrar_ y tras guardarse se redirigirá automáticamente a la vista '_Perfil_'.

Llegará un enlace de confirmación al email que el usuario debe pulsar para el registro definitivo.

### Login / Logout

Aquí el usuario puede entrar o salir del servicio.

#### Login

Se introduce el email y la contraseña del usuario. Hasta que no se acceda correctamente las partes privadas del usuario son inaccesibles. Se redirigirá a la pantalla de _Perfil_

#### Logout

Tras pulsar el usuario se desloga y deja de poder acceder a sus datos privados. Se redirigirá de nuevo a la pantalla de _Login_.

### Productos

Se pueden ver los productos que ofrece la web, en cada producto hay dos botones, el de la izquierda permite ver más información del producto, y el de la derecha lo añade al carrito de compra.

### Perfil

Aquí el se ven los datos del usuario aportados en el registro, y también las órdenes de compra realizadas.

### Carrito

En esta sección se puede ver el producto seleccionado para la compra en la parte de _Productos_. Se puede confirmar la orden pulsando el botón _Create order_, o borrar el carrito pulsando en _Clear Cart_.


