import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log(import.meta.env);

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveReservation = async (reservation) => {
  const { data, error } = await supabase
    .from("reservas")
    .insert([reservation]);

  if (error) {
    throw error;
  }

  return data;
};

export const getReservations = async () => {
  const { data, error } = await supabase.from("reservas").select();

  if (error) {
    throw error;
  }

  return data;
};
