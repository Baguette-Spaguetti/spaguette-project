import Realm from 'realm'

class Ingredient extends Realm.Object {
    static schema = {
        name: 'Ingredient',
        primaryKey: 'name',
        properties: {
            name: 'string',
            uom: 'string'
        },
    };
}

export default Ingredient;