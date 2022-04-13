// Dada uma seqüência de números inteiros não-nulos, seguida por 0, imprimir seus quadrados.
function quadrados (x)
{
y=[]
//com array
for (i=0;i<x.length;i++)
  {
   y.push(x[i]*x[i])
  }
  
  return y
}

