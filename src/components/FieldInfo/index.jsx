import styled from 'styled-components'

const WrapperFieldInfo = styled.div`
    padding: 24px 16px;
`
const Label = styled.label`
    width: 100px;
    display: block;
    font-weight: 550;
    font-size: 14px;
`
const InputGroup = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;

    & :last-child {
        flex: 1;
        padding: 4px 8px;
    }
`
const Title = styled.h2`
    text-transform: uppercase;
    color: #2dbcad;
`
const Input = styled.input`
    font-size: 16px;
    padding: 2px 16px;
    border-radius: 4px;
    border: none;
`
const TextArea = styled.textarea`
    font-size: 16px;
    padding: 2px 16px;
    border-radius: 4px;
    border: none;
`

function FieldInfo({ title, fields, types }) {
    return (
        <WrapperFieldInfo>
            <Title>{title}</Title>
            {fields.map((field, index) => (
                <InputGroup key={index}>
                    <Label htmlFor={field}>{`${field}:`}</Label>
                    {types[index] === 'textarea' ? (
                        <TextArea id={field} />
                    ) : (
                        <Input id={field} type={types[index]} />
                    )}
                </InputGroup>
            ))}
        </WrapperFieldInfo>
    )
}

export default FieldInfo
