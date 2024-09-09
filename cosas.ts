interface Cosas {
    id: number;
    name: string;
    description: string;
  }
  
  // Creamos el módulo cosas
  const cosas = {
    // Creamos la colección de objetos
    collection: [
      { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
      { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
      { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
    ],
    // Método para obtener la colección completa
    getAll: function (): Cosas[] {
      // Tu código
      return this.collection
    },
     // Método para obtener un objeto por id
     getById: function (id: number): Cosas | undefined {
        // Tu código
        return this.collection.find(cosas => cosas.id === id );
     },
    };  
    export default vino otra persona y cambio esto;
