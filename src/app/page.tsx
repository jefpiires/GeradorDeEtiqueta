'use client';

import GeradorEtiquetas from "./components/GeradorEtiquetas";
import ThemeToggleButton from "./components/ThemeToggleButton";

type Filial = {
  id: string;
  nome: string;
  code: string;
};

type SelectOption = {
  value: string;
  label: string;
};

export default function Home() {

  return (
    <main>
      <GeradorEtiquetas />
      <ThemeToggleButton />
    </main>
  );
}
