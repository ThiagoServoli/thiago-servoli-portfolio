// Chave nova: a versão anterior gravava "dark" para todo visitante, o que
// impediria o novo tema claro padrão de aparecer para quem já acessou o site.
// Fica fora do ThemeContext ("use client") para poder ser usada no layout (server).
export const THEME_STORAGE_KEY = "theme-v2";
