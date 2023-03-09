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
Se usa para implementar funciones no puras de javascript, acepta dos parametros, primero la funcion que hace todo el trabajo y el segundo es la variable que va ausarse, es decir cuando esa dependencia cambia entonces se ejecuta la funcion

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

### useRef
retorna un elemento especial que se conserva toda la vida del componente incluso si se reinicia la renderizacion del componente