import Realm from 'realm'

class Category extends Realm.Object {
    static schema = {
        name: 'Category',
        primaryKey: 'id',
        properties: {
            id: 'int',
            name: 'string',
            linkImage: 'string?',
            description: 'string?'
        },
    };
}

export default Category;