import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from "$env/static/public";
import {createSupabaseServerClient} from "@supabase/auth-helpers-sveltekit";

export const handle = async ({event, resolve}) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event
    });

    event.locals.getSession = async () => {
        const {
            data: {session},
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return  name === 'content-range';
        }
    })

};
