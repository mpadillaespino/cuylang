![cuylang_logo](https://github.com/mpadillaespino/personal-website/blob/master/images/cuy_logo.png?raw=true)

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/mpadillaespino/cuylang?style=flat-square)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/mpadillaespino/cuylang?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/mpadillaespino/cuylang)
![GitHub contributors](https://img.shields.io/github/contributors/mpadillaespino/cuylang?style=flat-square)
![GitHub License](https://img.shields.io/github/license/mpadillaespino/cuylang?style=flat-square)


![GitHub forks](https://img.shields.io/github/forks/mpadillaespino/cuylang)
![GitHub Repo stars](https://img.shields.io/github/stars/mpadillaespino/cuylang)
![GitHub followers](https://img.shields.io/github/followers/mpadillaespino)


CuyLang es un [esolang](https://en.wikipedia.org/wiki/Esoteric_programming_language) (lenguaje de programación esotérico) en el que las palabras clave y métodos están inspirados en la [jerga peruana](https://www.wikilengua.org/index.php/Jerga_juvenil/Per%C3%BA). Escrito por un desarrollador Java pero basado en JavaScript, toma referencias de dos esolangs basados en Python. [⁽¹⁾](https://github.com/aadhithya/rajiniPP) [⁽²⁾](https://github.com/WhiteHeadbanger/Lunfardo) Además, su logo y su mascota comparten similitudes con los del lenguaje Go. 

Este proyecto es un pasatiempo y no está destinado a usarse para el desarrollo de software serio, sino más bien para divertirse.

## Requisitos

* Tener instalado [Node.js](https://nodejs.org/en)
* Clonar el repositorio

## Ejecución

Para acceder al intérprete y a los comandos disponibles, primero debes ubicarte en `src`.

### Consola interactiva

Puedes iniciar una consola interactiva de CuyLang con el siguiente comando:

    node run.js

### Ejecución de archivos

La extensión de los scripts de CuyLang es `.cuy` así que para ejecutar un archivo, utiliza el siguiente comando:

    node run.js <ruta_al_archivo.cuy>

Ejemplo:

    node run.js examples/habla_causa.cuy

### Modo de traducción

Para ver la traducción del código en CuyLang a JavaScript, puedes usar el siguiente comando:

    node run.js <ruta_al_archivo.cuy> translate

Ejemplo:

    node run.js examples/habla_causa.cuy translate

Nota: las funciones predefinidas de CuyLang no serán traducidas.

## Características

Por estar basado en JavaScript, hereda todas sus características, ventajas y desventajas. desventajas. Esto permite escribir código tanto en JavaScript como en CuyLang al mismo tiempo. Algunas de las características del lenguaje que se han escrito/sobreescrito son:

### Tipos de datos

- `firme`: true (boolean)
- `bamba`: false (boolean)
- `nulo`: null
- `indefinido`: undefined

### Variables

- `variable <identificador> = <expresión> | <valor>`  
  Ejemplo: `variable nombre = "Miguel"`

### Constantes

- `constante <identificador> = <expresión> | <valor>`  
  Ejemplo: `constante nombre = "Miguel"`

### Operadores

- **Aritméticos**:
    - `+`: sumar
    - `-`: restar
    - `*`: multiplicar
    - `/`: dividir

- **Lógicos**:
    - `y`: &&
    - `o`: ||

- **Comparación**:
    - `igual`: ==
    - `estrictamente_igual`: ===
    - `diferente`: !=
    - `estrictamente_diferente`: !==
    - `mayor_que`: >
    - `menor_que`: <
    - `mayor_o_igual_que`: >=
    - `menor_o_igual_que`: <=

### Flujos de datos

- **Condicionales**:
    - `si`: if
    - `osi`: else if
    - `sino`: else 
    <br><br>
        ```js
        si ([condición]) {
            [sentencia]
        } osi ([condición]) {
            [sentencia]
        } sino {
            [sentencia]
        }
        ```

- **Bucles**:
    - `pa`: for
    - `mientras`: while
    - `hacer`: do
    - `interrumpir`: break 
    - `seguir`: continue
    <br><br>
        ```js
        // Bucle for
        pa ([expresión-inicial]; [condición]; [expresión-final]) {
            [sentencia]
        }
        ```
        ```js
        // Bucle while
        mientras ([condición]) {
            [sentencia]
        }
        ```
        ```js
        // Bucle do...while
        hacer {
            [sentencia]
        } mientras ([condición]);
        ```

### Funciones
- Definición de funciones: `chamba`
- Retorno de funciones: `regresar`
<br><br>
    ```js
    chamba saludar() {
        regresar "Habla, causa!";
    }
    ```

### Funciones predefinidas

*   **florear(**`[identificador | valor]`**):**   
    Imprime un valor en la consola.
*   **esFloro(**`[identificador | valor]`**):**   
    Determina si es una cadena o no.
*   **esFirme(**`[identificador | valor]`**):**   
    Determina si es verdadero o no.
*   **esBamba(**`[identificador | valor]`**):**   
    Determina si es falso o no.
*   **bambear(**`[identificador | valor]`**):**   
    Retorna verdadero si es falso y viceversa.
*   **jatear(**`[identificador | valor]`**):**   
    Detiene la ejecución por el tiempo indicado en ms.
*   **limpiarParabrisas():**  
    Limpia la consola.

## ¿Cómo contribuir?

¡Gracias por mostrar interés en contribuir en CuyLang! Se aceptan todo tipo de sugerencias y mejoras, solo asegúrate de considerar lo siguiente:

1. Trabaja en tu propia bifurcación.
2. Cada PR debe estar asociado a un issue.
3. Cada issue debe tener un título claro y descriptivo.
4. Agrega/actualiza los ejemplos como parte de tus cambios en la carpeta `examples`.
5. Verifica (en la medida de lo posible) que los ejemplos anteriores no se rompan.

Además, si solo tienes alguna idea pero nada de código, puedes abrir un issue directamente para tener en cuenta tu idea.