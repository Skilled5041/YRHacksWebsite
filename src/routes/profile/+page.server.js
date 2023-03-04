import { redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const load = async ({locals}) => {
    const session = await locals.getSession();
    if (!session) {
        throw redirect(303, "/login");
    }

    let {data: problemsSolved, error: err} = await supabase
        .from("profiles")
        .select("problems_solved")
        .eq("id", session.user.id);

    let {data: points, error: err2} = await supabase
        .from("profiles")
        .select("points")
        .eq("id", session.user.id);

    return {
        problemsSolved: (!err) ? problemsSolved[0].problems_solved : 'Error loading problems solved',
        points: (!err2) ? points[0].points : 'Error loading points'
    };
};