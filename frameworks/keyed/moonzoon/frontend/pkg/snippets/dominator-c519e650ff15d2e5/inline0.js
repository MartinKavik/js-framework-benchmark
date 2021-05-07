
    export function set_property(obj, name, value) { obj[name] = value; }

    export function add_event(elem, name, f) {
        elem.addEventListener(name, f, {
            capture: true,
            once: false,
            passive: true
        });
    }

    export function add_event_once(elem, name, f) {
        elem.addEventListener(name, f, {
            capture: true,
            once: true,
            passive: true,
        });
    }

    export function add_event_preventable(elem, name, f) {
        elem.addEventListener(name, f, {
            capture: true,
            once: false,
            passive: false
        });
    }

    export function remove_event(elem, name, f) {
        elem.removeEventListener(name, f, true);
    }
