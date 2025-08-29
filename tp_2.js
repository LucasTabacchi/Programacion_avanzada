// Ejercicio 1 
const router = {
  modelo: "Tp Link Archer C7",
  marca: "TP-Link",
  puertos: 4,
  velocidad: 1000, 
  soportaWiFi: true
};

console.log("Router:", router);

// Ejercicio 2
const dispositivosRed = [
  { tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
  { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
  { tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
  { tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180 }
];

console.log("Ejercicio 2 - Dispositivos de Red:", dispositivosRed);

// Ejercicio 3
const filtrarPorMarca = dispositivosRed.filter(dispositivo => dispositivo.marca === "TP-Link");
console.log("Dispositivos TP-Link:", filtrarPorMarca);

// Ejercicio 4
const servidores = [
  { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
  { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
  { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
  { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
  { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

const direccionesIP = servidores.map(servidor => servidor.ip);
console.log("Direcciones IP de los servidores:", direccionesIP);

// Ejercicio 5
const paquetesDatos = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const paquetesFilYOrd = paquetesDatos.filter(paquete => paquete.tamaño >= 1000).sort((a, b) => b.prioridad - a.prioridad);
console.log("Paquetes de datos filtrados y ordenados:", paquetesFilYOrd);

// Ejercicio 6
const traficoRed = {
  "08:00": 1250, 
  "09:00": 1870,
  "10:00": 2100,
  "11:00": 1950,
  "12:00": 1600,
  "13:00": 1300,
  "14:00": 1700,
  "15:00": 2200,
  "16:00": 1800,
  "17:00": 1500
};

///a
const totalDatosTransferidos = Object.values(traficoRed).reduce((total, datos) => total + datos, 0);
console.log("Total de datos transferidos en el día (MB):", totalDatosTransferidos);


///b
const valores = Object.values(traficoRed);
const maxValor = Math.max(...valores);
const horaMax = Object.keys(traficoRed).find(hora => traficoRed[hora] === maxValor);

console.log(`Hora con mayor tráfico: ${horaMax} con ${maxValor} MB`);

// Ejercicio 7
const conexiones = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
  { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
  { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
  { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];

const conexionesPorProtocolo = conexiones.reduce((total, c) => {
  total[c.protocolo] = (total[c.protocolo] || 0) + 1;
  return total;
}, {});

console.log("Conexiones por protocolo:", conexionesPorProtocolo);

// Ejercicio 8
const dispositivos = [ 
  { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" }, 
  { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" }, 
  { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" }, 
  { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" } 
]; 

const conexionesActivas = [ 
  { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 }, 
  { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 }, 
  { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 } 
]; 

const informeActividad = conexionesActivas.map(conexion => { 
  const origen = dispositivos.find(d => d.ip === conexion.origen); 
  const destino = dispositivos.find(d => d.ip === conexion.destino); 

  return { 
    origen: origen ? origen.nombre : conexion.origen, 
    destino: destino ? destino.nombre : conexion.destino, 
    protocolo: conexion.protocolo, 
    bytes: conexion.bytes 
  }; 
}); 

console.log("Informe de actividad de red:", informeActividad);

// Ejercicio 9 y 10
const topologiaRed = {
  nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1" },
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
  ],
  conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000 },
    { origen: "A", destino: "C", ancho_banda: 1000 },
    { origen: "B", destino: "C", ancho_banda: 100 },
    { origen: "B", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "E", ancho_banda: 1000 },
    { origen: "D", destino: "E", ancho_banda: 1000 }
  ]
};

const conexionesPorNodo = {};

topologiaRed.nodos.forEach(nodo => {
  conexionesPorNodo[nodo.id] = 0;
});

topologiaRed.conexiones.forEach(conexion => {
  conexionesPorNodo[conexion.origen]++;
  conexionesPorNodo[conexion.destino]++;
});

const nodosOrdenados = Object.entries(conexionesPorNodo).sort((a, b) => b[1] - a[1]); 

console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);

const sugerencias = [];
for (const [nodoId, numConexiones] of nodosOrdenados) {
  if (numConexiones > 2) {
    const nodo = topologiaRed.nodos.find(n => n.id === nodoId);
    sugerencias.push(`El nodo ${nodoId} (${nodo.tipo}) tiene ${numConexiones} conexiones y podría necesitar más ancho de banda.`);
  }
}

console.log("Sugerencias para optimizar la red:", sugerencias);