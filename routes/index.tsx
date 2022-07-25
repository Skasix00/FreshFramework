/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Bem-Vindos, este site serve para testar <i>key funcionalities</i> na nova Fresh Framework!!
      </p>
      <Counter start={3} />
    </div>
  );
}
