var expresion = "";
function agregarCaracter(pChar)
{
    
    var numeros = ['0','1','2','3','4','5','6','7','8','9'];
 
 var ultimoEsNumero = false;
 var charEsNumero = false;

for (let i = 0; i < numeros.length; i++) {
 if (numeros[i] == pChar) charEsNumero = true;
 if (numeros[i] == expresion[expresion.length-1])ultimoEsNumero = true;
}

 if (expresion.length == 0)
 {
    if (charEsNumero)
    {
        expresion = expresion + pChar;
        UserLog("Se agrego el numero '" + pChar + "' a la expresion");
        display.value = expresion;
        return;
    }
    else
    {
        UserLog("La expresion debe empezar con un numero");
        return;  
    }
 }

 if (ultimoEsNumero)
 {
    if (charEsNumero)
    {
        expresion = expresion + pChar;
        UserLog("Se agrego el numero '" + pChar + "' a la expresion");
        display.value = expresion;
        return;
    }
    else
    {
        expresion = expresion + pChar;
        UserLog("Se agrego la operacion '" + pChar + "' a la expresion");
        display.value = expresion;
        return;
    }
 }
 else
 {
  if (charEsNumero)
  {
    expresion = expresion + pChar;
    UserLog("Se agrego el numero '" + pChar + "' a la expresion");
    display.value = expresion;
    return;
  }
  else
  {
    expresion = expresion.slice(0,-1) + pChar;
    UserLog("El ultimo caracter NO es numero, se reemplazo el ultimo caracter por '" + pChar + "'")
    display.value = expresion;
    return;
  }
 }

 
}

function ResolverExpresion(pExpresion)
{
  var newExpresion = pExpresion;
  var expIzq = "";
  var expDer = "";
  var operacion = "";
  var split = 0;

  for (let i = 0; i < newExpresion.length; i++) {
    if (operacion == "")
    {
      if (newExpresion[i] == "*"){operacion = "*";split = i;}
      if (newExpresion[i] == "/"){operacion = "/";split = i;} 
      if (newExpresion[i] == "+"){operacion = "+";split = i;}
      if (newExpresion[i] == "-"){operacion = "-";split = i;}
    }

    if (operacion == "/" || operacion == "*")
    {
      if (newExpresion[i] == "+"){operacion = "+";split = i;}
      if (newExpresion[i] == "-"){operacion = "-";split = i;}
    } 
  }

  if (split > 0)
  {
    for (let i = 0; i < split; i++) {
      expIzq = expIzq+newExpresion[i];
    }

    for (let i = split+1; i < newExpresion.length; i++) {
      expDer = expDer+newExpresion[i];
    }
  }
  
  if (operacion == "+") {return (ResolverExpresion(expIzq)+ResolverExpresion(expDer));}
  if (operacion == "-") {return (ResolverExpresion(expIzq)-ResolverExpresion(expDer));}
  if (operacion == "/") {return (ResolverExpresion(expIzq)/ResolverExpresion(expDer));}
  if (operacion == "*") {return (ResolverExpresion(expIzq)*ResolverExpresion(expDer));}
  if (operacion == "") {return parseFloat(newExpresion);}
}

function Resolver(){
  var expresionCompleta = expresion;
  UserLog("Resolviendo " + expresion);
  expresion = ResolverExpresion(expresion)
  UserLog(expresionCompleta + " = " + expresion);
  
  display.value = expresion;
  
}

function Borrar()
{
  expresion = expresion.slice(0,-1);
  display.value = expresion;
}

function UserLog(logString)
{
    myLog.innerHTML = myLog.innerHTML+"<br>"+logString;
}