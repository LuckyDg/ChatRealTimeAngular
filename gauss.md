# Resolved

Primero, tenemos el sistema de ecuaciones inicial:

```markdown
J + C + A = 15000
0.61J + 0.08C = 4670
0.08C + 0.31A = 1330

```

Representamos el sistema en forma de matriz aumentada:

```markdown
|  1   |  1   |  1   | 15000 |
| ---- | ---- | -----| ----- |
| 0.61 | 0.08 |  0   | 4670  |
|  0   | 0.08 | 0.31 | 1330  |

```

Paso 1: Eliminar J de la segunda y tercera fila:

```markdown
F2 = F2 - 0.61 * F1
F3 = F3 - 0.08 * F1

```

Realizamos las operaciones:

```markdown
F2 = (0.61, 0.08, 0, 4670) - 0.61 * (1, 1, 1, 15000) = (0, -0.53, -0.61, -4480)
F3 = (0, 0.08, 0.31, 1330) - 0.08 * (1, 1, 1, 15000) = (0, -0.08, 0.23, 130)

```

Después del primer paso de eliminación de Gauss, la matriz se ve así:

```markdown
|  1  |  1    |  1    | 15000 |
| --- | ----- | ----- | ----- |
|  0  | -0.53 | -0.61 | -4480 |
|  0  | -0.08 | 0.23  | 130   |

```

Paso 2: Normalizar la segunda fila y eliminar C de la tercera fila:

```markdown
F2 = F2 / -0.53
F3 = F3 - (-0.08) * F2

```

Realizamos las operaciones:

```markdown
F2 = (-0.53, -0.61, -4480) / -0.53 = (0, 1, 1.1509, 8452.83)
F3 = (-0.08, 0.23, 130) - (-0.08) * (0, 1, 1.1509, 8452.83) = (0, 0, 0.3221, 806.226)

```

Después del segundo paso de eliminación de Gauss, la matriz actualizada es:

```markdown
|  1  |  1  |  1     | 15000    |
| --- | --- | ------ | -------- |
|  0  |  1  | 1.1509 | 8452.83  |
|  0  |  0  | 0.3221 | 806.226  |

```

Paso 3: Normalizar la tercera fila y eliminar A de la primera y segunda fila:

```markdown
F3 = F3 / 0.3221
F1 = F1 - F3
F2 = F2 - 1.1509 * F3

```

Realizamos las operaciones:

```markdown
F3 = (0, 0, 0.3221, 806.226) / 0.3221 = (0, 0, 1, 2503.22)
F1 = (1, 1, 1, 15000) - (0, 0, 1, 2503.22) = (1, 1, 0, 12496.78)
F2 = (0, 1, 1.1509, 8452.83) - 1.1509 * (0, 0, 1, 2503.22) = (0, 1, 0, 5571.76)

```

Después del tercer paso de eliminación de Gauss, la matriz actualizada es:

```markdown
| 1   | 0   | 0   | 6925.01 |
| --- | --- | --- | --------|
| 0   | 1   | 0   | 5571.76 |
| 0   | 0   | 1   | 2503.22 |

```

Esto nos da las soluciones: J = 6925.01, C = 5571.76, A = 2503.22 
Esto da un total de = 14,999(redondeando) 15000

Finalmente, para calcular el total que cada uno paga incluyendo el IGV del 18%, usamos la fórmula: Pago con IGV = Pago sin IGV * (1 + 0.18)

Por lo tanto, los pagos finales de cada persona después de incluir el IGV del 18% son:

```markdown
- Juan paga S/8171.51 = 6925.01 * (1 + 0.18)
- Carlos paga S/6574.68 = 5571.76 * (1 + 0.18)
- Alberto paga S/2953.80 = 2503.22 * (1 + 0.18)

```

Estos cálculos completan la resolución del problema, utilizando tanto el método de eliminación de Gauss para solucionar las matrices como la aplicación del IGV para obtener los montos finales que cada uno debe pagar por el servicio eléctrico durante el mes indicado.
