import {invalidate} from "$app/navigation";
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from "$env/static/public";
import {createSupabaseLoadClient} from "@supabase/auth-helpers-sveltekit";

export const load = async ({fetch, data, depends}) => {
    depends('supabase:auth');

    const supabase = createSupabaseLoadClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: {fetch},
        serverSession: data.session,
        onAuthStateChange() {
            invalidate('supabase:auth');
        }
    });

    const {data: session} = await supabase.auth.getSession();

    return {supabase, session};

};