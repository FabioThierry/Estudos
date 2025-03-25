export async function readJSON(path: string) {
  try {
    const text = await Deno.readTextFile(path);
    const dados = JSON.parse(text);

    return dados;
  } catch (error) {
    console.error("Erro ao ler o arquivo", error);
    return null;
  }
}
