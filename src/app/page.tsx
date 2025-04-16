'use client';

import GeradorEtiquetas from "./components/GeradorEtiquetas";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function Home() {

  return (
    <main>
      <GeradorEtiquetas />
      <ThemeToggleButton />
    </main>
  );
}
