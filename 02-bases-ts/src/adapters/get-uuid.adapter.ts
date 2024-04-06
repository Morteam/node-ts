/* Adapter of uuid with the Adapter Pattern */
import { v4 as uuidv4 } from 'uuid';

const getUUID = () => {
    return uuidv4()
}

export {
    getUUID,
}