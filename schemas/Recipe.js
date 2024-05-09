import Realm from 'realm'

class Recipe extends Realm.Object {
    static schema = {
        name: 'Recipe',
        primaryKey: 'name',
        properties: {
            name: 'string',
            catId: 'string',
            ingredientsQty: 'IngredientQty[]',
            instructions: 'string?',
            linkSteps: 'string?',
            linkImage: 'string?'
        },
    };
}

export default Recipe;