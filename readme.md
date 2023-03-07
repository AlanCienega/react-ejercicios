# react curso practico
## iniciar un proyecto de react
```
npm create vite@latest 01-hola-mundo
```
dentro de 01-hola-mundo\src\App.jsx vamos a encontrar nuestro primer componente y lo editamos, tambien en 01-hola-mundo\src\index.css encontraremos los estilos para agregar apariencias a los componentes

Para crear un componente simplemente creamos el archivo Componente.jsx y lo importamos en nuestro componente padre App.jsx
es una practica comun crear estilos para componentes indivuduales en lugar de declararlos de manera global
## hooks
### estados en react
se importa con
```
import { useState } from "react";

```
que es una funcion que nos retorna dos valores, el primer elemento es el valor que retorna que es el valor que le pasamos, y el segundo
es la funcion que nos va a permitir cambiar ese valor.

```
const [counter, setCounter] = useState(0)
```
### useEffect
se utilizan para poder utlizar funciones especiales como funciones asincronas dentro de react, es decir funciones que produzcan efectos secundarios, se usa pasandole una funcion como primer parametro, en el segundo se pasa unalista de dependencias, es decir el valor que vamos a usar y que es necesario en nuestra funcion especial o no pura.

cuando usamos este tipo de funciones hay que retornar una funcion de reseteo, que va a servir para cuando se desmonte el componente quede como estaba a pesar de los cambios.

## patron componentes presentacion y contenedores
en este tipo de patron se separan responsabilidades en componentes, los componentes de presentacion se encargan de como se van a renderizar los datos y los contenedores llevaran la logica de programacion

### props
los componentes pueden tener props incluso si no se le declara en el ejemplo siguitente podemos acceder al props.children
```
function OtroComponente({children})
{
  { children }
}
```
aun si llamamos al componente asi:
```
<Componente/>
```
