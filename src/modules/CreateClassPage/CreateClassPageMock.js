import { TextCard } from "../../components/TextCard/TextCard";
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";

const ClassPageMock = {
  content: [
    {
      title: "Escalas Maiores",
      content: (
        <TextCard
          title="Qual escala é essa?"
          image="https://i.ytimg.com/vi/uH_jOR_p1N8/hqdefault.jpg"
          text="Em música, escala maior é uma escala diatônica de sete notas em modo maior, um dos modos musicais utilizados atualmente na música tonal. A sequência de tons e semitons dessa escala obedece à seguinte ordem: Tom - Tom - Semitom - Tom - Tom - Tom - Semitom. A partir da escala maior é que são formados os acordes maiores. A escala fundamental do modo maior é a escala de Dó maior, uma vez que a relação de intervalos desse modo pode ser obtida nesta escala sem a necessidade de nenhuma alteração de altura"
        ></TextCard>
      ),
    },
    {
      title: "Exercício 1",
      content: (
        <QuestionCard
          title="Escalas maiores"
          image="https://i.ytimg.com/vi/uH_jOR_p1N8/hqdefault.jpg"
          alternatives={["G", "Am", "Em", "Cm", "E", "F"]}
        ></QuestionCard>
      ),
    },
  ],
};
export default ClassPageMock;
