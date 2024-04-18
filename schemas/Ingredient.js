import Realm from 'realm'

class Ingredient extends Realm.Object {
    static schema = {
        name: 'Ingredient',
        primaryKey: 'id',
        properties: {
            id: 'int',
            name: 'string',
            uom: 'string'
        },
    };
}

export default Ingredient;