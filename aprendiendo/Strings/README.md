# Strings

##Largo del string

1. length

```js
string.indexOf(substring);
```

## metodos

1. indexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1

```js
string.indexOf(substring);
```

2. includes(): Toma un argumento de subcadena y verifica si existe un argumento de subcadena en la cadena. includes() devuelve un valor booleano. Si existe una subcadena en una cadena, devuelve verdadero; de lo contrario, devuelve falso.

3. startsWith: toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).

```js
string.startsWith(substring);
```

4. endsWith: toma una subcadena como argumento y verifica si la cadena termina con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).

```js
string.endsWith(substring);
```

5. slice(): selecciona desde comienzo hasta final (sin incluir final). permite negativos

```js
slice(comienzo, final);
```

6. substring(): selecciona entre comienzo y final (no incluye final). valores negativos significan 0

```js
substring(comienzo, final);
```

7. substr(): selecciona desde comienzo toma largo caracteres. permite negativos comienzo

```js
substr(comienzo, largo);
```

8. str.codePointAt(index):
   Devuelve un número decimal que representa el código de carácter en la posición

9. String.fromCodePoint(code) : Crea un carácter por su código numérico
