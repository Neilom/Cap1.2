import { useGenre } from "../context/useGenre";

export function Header() {
  debugger;
  const { selectedGenre } = useGenre();
  
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title} </span></span>
    </header>
  )
}