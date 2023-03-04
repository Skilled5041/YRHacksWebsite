import { AuthError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({locals}) => {
    const session = await locals.getSession();
    if (session) {
        throw redirect(303, "/");
    }
    return {};
    }
export const actions = {
    register: async ({request, locals}) => {

        const data = await request.formData();

        const {error: err} = await locals.supabase.auth.signUp({
                email: data.get("email"),
                password: data.get("password"),
                options: {
                    data: {
                        username: data.get("username"),
                    },
                }
            }
        );

        if (err) {
            if (err instanceof AuthError && err.status !== 500) {
                console.log(err);
                return {
                    status: 400, error: "Invalid email or password"
                };
            }
            console.log(err);
            return fail(500, {error: "Server error"});
        }

        throw redirect(303, "/");
    }
};