import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Alias saepe molestias numquam cum accusamus mollitia 
            doloremque soluta adipisci. Dolorem tempore molestias 
            adipisci ea qui non, voluptate iusto! Eos, laudantium 
            exercitationem!
          </p>
          <Section title="Links úteis"> 
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}