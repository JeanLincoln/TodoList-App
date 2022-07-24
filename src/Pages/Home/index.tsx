import {PlusCircle} from 'phosphor-react'
import { FormContainer } from './styles'

export function Home(){
    return (
        <FormContainer>
            <input type="text" placeholder='Add a new task'/>
            <button type="submit">Criar <PlusCircle size={18}/></button>
        </FormContainer>
        
    )
}