import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const getProblemInfo = async (problemNum) => {

    let {data: answer, error: err} = await supabase
        .from("Contests")
        .select("answer")
        .eq("num", problemNum);

    let {data: percent, error: err2} = await supabase
        .from("Contests")
        .select("percent")
        .eq("num", problemNum);

    let {data: Question, error: err3} = await supabase
        .from("Contests")
        .select("Question")
        .eq("num", problemNum);

    let {data: points, error: err4} = await supabase
        .from("Contests")
        .select("points")
        .eq("num", problemNum);

    return {
        num: problemNum,
        answer: (!err) ? answer[0].answer : "Error loading answer",
        percent: (!err2) ? percent[0].percent : "Error loading percent",
        Question: (!err3) ? Question[0].Question : "Error loading Question",
        points: (!err4) ? points[0].points : "Error loading points"
    };

};
 
