import Realm from 'realm'

class Recipe extends Realm.Object {
    static schema = {
        name: 'Recipe',
        primaryKey: 'id',
        properties: {
            id: 'int',
            catId: 'int',
            name: 'string',
            ingredientsQty: 'IngredientQty[]',
            instructions: 'string?',
            linkSteps: 'string?',
            linkImage: 'string?'
        },
    };
}

export default Recipe;