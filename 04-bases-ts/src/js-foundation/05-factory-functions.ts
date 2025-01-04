interface BuildMakePersonProps {
    getAge: (birthdate:string) => number|Error;
    getUUID: () => string;
};

interface PersonProps {
    name: string;
    birthdate: string;
}

interface PersonResult {
    id: string;
    name: string;
    birthdate: string;
    age: number|Error;
}

export const buildMakePerson = ({ getAge, getUUID }:BuildMakePersonProps) => {
    return ({ name, birthdate }:PersonProps):PersonResult => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}








// Clase Abstracta o Interfaz Común de los productos  
class Vehiculo {
    conducir() {
        throw "Método 'conducir' debe ser implementado en la clase hija";
    }
}

// Implementación de los productos
class Coche extends Vehiculo {
    conducir() {
        return "Conduciendo un coche";
    }
}
  
class Bicicleta extends Vehiculo {
    conducir() {
        return "Conduciendo una bicicleta";
    }
}

// Fabrica
class FabricaDeVehiculos {
    crearVehiculo(tipo:string) {
        if (tipo === "coche") {
            return new Coche();
        } else if (tipo === "bicicleta") {
            return new Bicicleta();
        } else {
            throw "Tipo de vehículo no reconocido";
        }
    }
}

// Uso
const fabrica = new FabricaDeVehiculos();

const coche = fabrica.crearVehiculo("coche");
console.log(coche.conducir());

const bicicleta = fabrica.crearVehiculo("bicicleta");
console.log(bicicleta.conducir());


// HACER UN EJEMPLO USANDO FUNCIONES
// BASIC FACTORY

class PDFDocument {
    create() {
        return 'PDF Document created';
    }
}

class WordDocument {
    create() {
        return 'Word Document created';
    }
}

class DocumentFactory {
    createDoc(type:string) {
        if (type === "PDF") {
            return new PDFDocument();
        } else if (type === "word") {
            return new WordDocument();
        } else {
            throw "Undefined";
        }
    }
}

const factorySample = new DocumentFactory();

const pdfSample = factorySample.createDoc("PDF");



// TODO: DO AN EXAMPLE OF CLASSES OF FACTORY AND ABSTRACT FACTORY METHOD