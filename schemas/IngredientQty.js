import Realm from 'realm'

class IngredientQty extends Realm.Object {
    static schema = {
        name: 'IngredientQty',
        properties: {
            ingredient: 'Ingredient',
            qty: 'int'
        },
    };
}

export default IngredientQty;