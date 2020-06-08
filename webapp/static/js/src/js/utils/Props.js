export default class Props {

    static getProp(props, name, defaultValue) {
        if (props && props[name]) {
            return props[name];
        }
        return defaultValue;
    }
}
