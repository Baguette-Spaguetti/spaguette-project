import Realm from 'realm'

class Settings extends Realm.Object {
    static schema = {
        name: 'Settings',
        properties: {
            firstLaunch: {type: 'bool', default: true},
        },
    };
}

export default Settings;