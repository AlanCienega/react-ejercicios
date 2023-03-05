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