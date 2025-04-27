export async function getNaves(page = 1) {
    try {
      const response = await fetch(`https://www.swapi.tech/api/starships?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error('Error al obtener la lista de naves');
      }
      const data = await response.json();
  
      const promises = data.results.map(async (nave) => {
        const detalleResponse = await fetch(nave.url);
        if (!detalleResponse.ok) {
          throw new Error('Error al obtener detalles de una nave');
        }
        const detalleData = await detalleResponse.json();
        return detalleData.result.properties;
      });
  
      const detalles = await Promise.all(promises);
  
      return {
        naves: detalles,
        nextPage: data.next ? page + 1 : null,
        previousPage: data.previous ? page - 1 : null
      };
    } catch (err) {
      throw err;
    }
  }
  