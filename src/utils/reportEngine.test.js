// src/utils/reportEngine.test.js
const { getReports } = require('./reportEngine');

// Configurar un tiempo de espera amplio (10000ms = 10 segundos)
jest.setTimeout(10000);

describe('Pruebas de Red E2E Live Network - CityFix', () => {
  
  test('1. Debería conectar exitosamente y devolver un array auténtico de JavaScript', async () => {
    const reports = await getReports();
    
    // Certificar que el resultado es un arreglo válido
    expect(Array.isArray(reports)).toBe(true);
  });

  test('2. Debería certificar que la longitud del array es mayor a cero (lee datos inyectados)', async () => {
    const reports = await getReports();
    
    // Certificar que lee los registros que guardaste de tu barrio
    expect(reports.length).toBeGreaterThan(0);
  });

  test('3. Debería certificar que el primer registro tenga las propiedades estructuradas correctamente', async () => {
    const reports = await getReports();
    const primerReporte = reports[0];

    // Validar la estructura exacta solicitada en el manifiesto del taller
    expect(primerReporte).toHaveProperty('id');
    expect(primerReporte).toHaveProperty('title');
    expect(primerReporte).toHaveProperty('category');
    expect(primerReporte).toHaveProperty('votes');
  });

  test('4. Ver datos obtenidos', async () => {
    const reports = await getReports();
    console.log(reports);
    expect(reports.length).toBeGreaterThan(0);
  });
});