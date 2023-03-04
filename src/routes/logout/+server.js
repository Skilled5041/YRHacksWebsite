import { error, redirect } from "@sveltejs/kit";

export const POST = async ({locals}) => {
    const {error: err} = await locals.supabase.auth.signOut();
    if (err) {
        console.log(err);
        throw error(500, "Error logging out.");
    }

    throw redirect(303, "/");
};