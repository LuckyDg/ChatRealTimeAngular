# Problema (El mercado eléctrico en el Perú) 

## Definición de Variables
- **J**: Pago de Juan sin IGV (soles).
- **C**: Pago de Carlos sin IGV (soles).
- **A**: Pago de Alberto sin IGV (soles).

## Planteamiento de Ecuaciones

Dadas las condiciones del problema, formulamos las siguientes ecuaciones:

1. **Total pagado sin IGV**:
   \[
   J + C + A = 15000
   \]
   Esta ecuación representa la suma total de los pagos de Juan, Carlos y Alberto sin incluir el IGV.

2. **Suma de pagos a generación y transmisión**:
   \[
   0.61J + 0.08C = 4670
   \]
   Refleja el pago combinado de Juan a la generación y de Carlos a la transmisión.

3. **Suma de pagos a transmisión y distribución**:
   \[
   0.08C + 0.31A = 1330
   \]
   Representa el pago combinado de Carlos a la transmisión y de Alberto a la distribución.

## Método de Solución

Utilizamos métodos algebraicos para resolver el sistema de ecuaciones:
- Example:![Captura de pantalla 2024-05-04 155300](https://github.com/LuckyDg/ChatRealTimeAngular/assets/154240564/d9559770-f7d7-48ee-b2af-88c3a0153aca)


- **Paso 1: Expresar \( C \) en función de \( J \)**
  \[
  C = \frac{4670 - 0.61J}{0.08}
  \]

- **Paso 2: Sustituir \( C \) en la ecuación de \( A \)**
  \[
  A = \frac{1330 - (4670 - 0.61J)}{0.31}
  \]

- **Paso 3: Resolver para \( J \), \( C \), y \( A \) usando la ecuación de total pagado**
  Sustituimos las expresiones de \( C \) y \( A \) en la primera ecuación y resolvemos para \( J \), luego reemplazamos el valor de \( J \) en las fórmulas para obtener \( C \) y \( A \).

## Resultados

- **Juan**: 7000 soles sin IGV.
- **Carlos**: 5000 soles sin IGV.
- **Alberto**: 3000 soles sin IGV.

## Cálculo del IGV

Aplicamos un IGV del 18% a cada monto:

- **Juan**: \( 7000 \times 1.18 = 8260 \) soles.
- **Carlos**: \( 5000 \times 1.18 = 5900 \) soles.
- **Alberto**: \( 3000 \times 1.18 = 3540 \) soles.

## Conclusión

Los resultados muestran los pagos totales de Juan, Carlos y Alberto, incluyendo el IGV, de acuerdo con la estructura de precios establecida por OSINERGMIN y las reformas en el mercado eléctrico peruano. 
🔌Osinergmin no me Cobres !!!🔌
