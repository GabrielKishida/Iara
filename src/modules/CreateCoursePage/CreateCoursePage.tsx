import { CourseGrid, Card, SubmitButton, PageTitle } from "./CreateCoursePage.style";
import { H3, H4, Body } from "../../components/typography";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const CreateCoursePage: React.FC = () => {

    const alternatives = [];

    for (var i = 0; i < 6; i++){
        alternatives.push(                
            <Form.Group as={Col}>
                <Form.Label>Alternativa {i+1}</Form.Label>
                <Form.Control />
            </Form.Group>)
    }

  return (
    <CourseGrid>
        <PageTitle>
            <H3>
                CRIE UMA AULA
            </H3>
        </PageTitle>
        <Card>
            <H4>
                Crie um Card de texto
            </H4>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control type="email" placeholder="Título da aula" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Texto da aula</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            </Form>
        </Card>

        <Card>
            <H4>
                Crie um Card de Questão
            </H4>
            <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control type="email" placeholder="Título da questão" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Insira uma imagem</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Row className="mb-6">
                {alternatives}
            </Row>
        </Card>

        <SubmitButton variant="primary" type="submit">
            Criar aula
        </SubmitButton>
    </CourseGrid>
  );
};