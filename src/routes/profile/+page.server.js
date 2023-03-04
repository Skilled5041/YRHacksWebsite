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

    if (err) {
        return {problemsSolved: 'Error loading data'};
    }

    return {
        problemsSolved: problemsSolved[0].problems_solved,
        points: points[0].points
    };
};