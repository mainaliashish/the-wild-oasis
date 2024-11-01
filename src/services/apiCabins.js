import supabase from "./supaBase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted.");
  }
  return true;
}

export async function updateCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .update({ other_column: "otherValue" })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be updated.");
  }
  return data;
}
