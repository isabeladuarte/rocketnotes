import { Container } from './styles'

export function Tag({ title, ...rest }) {
    <Container {...rest}>
    {title}    
    </Container>
}